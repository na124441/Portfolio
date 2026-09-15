"""
ADCTM Production FastAPI REST Service.
Provides a high-performance simulation and benchmark bridge to the real `adctm` Python package.
"""

from __future__ import annotations

import os
import sys
import time
from pathlib import Path
from typing import Any, Dict, List, Literal, Optional

from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

# ---------------------------------------------------------------------------
# Path & Environment Resolution
# ---------------------------------------------------------------------------
ADCTM_REPO_PATH = os.getenv("ADCTM_REPO_PATH")
if not ADCTM_REPO_PATH:
    # Try current directory, parent directory, or known local dev path
    for candidate in [
        Path.cwd() / "ADCTM",
        Path.cwd().parent / "ADCTM",
        Path(r"D:\ADCTM\ADCTM\ADCTM"),
    ]:
        if candidate.exists() and (candidate / "src" / "adctm").exists():
            ADCTM_REPO_PATH = str(candidate)
            break

if not ADCTM_REPO_PATH or not Path(ADCTM_REPO_PATH).exists():
    raise RuntimeError(
        "Could not resolve ADCTM repository path. Set ADCTM_REPO_PATH environment variable."
    )

repo_dir = Path(ADCTM_REPO_PATH).resolve()
src_dir = repo_dir / "src"
if str(src_dir) not in sys.path:
    sys.path.insert(0, str(src_dir))

# Ensure working directory is repo root for model discovery
os.chdir(str(repo_dir))

# ---------------------------------------------------------------------------
# Import Verified ADCTM Modules
# ---------------------------------------------------------------------------
import adctm
from adctm.config.defaults import CANONICAL_SCENARIOS
from adctm.evaluation.benchmark import (
    evaluate_controller_on_task,
    resolve_controller,
    run_canonical_benchmark,
)
from adctm.evaluation.metrics import (
    compute_comprehensive_metrics,
    evaluate_trajectory,
)
from adctm.simulation.engine import SimulationSession
from adctm.simulation.scenarios import load_scenario

# Check PPO model availability
PPO_MODEL_PATH = os.getenv("ADCTM_PPO_MODEL_PATH")
if not PPO_MODEL_PATH:
    default_model = repo_dir / "models" / "ppo_medium.zip"
    if default_model.exists():
        PPO_MODEL_PATH = str(default_model)

# ---------------------------------------------------------------------------
# FastAPI App Initialization & CORS
# ---------------------------------------------------------------------------
app = FastAPI(
    title="ADCTM Simulation API",
    description="Bridge service connecting web frontend instrumentation with the real ADCTM thermal simulation and RL package.",
    version=getattr(adctm, "__version__", "0.1.0"),
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

# ---------------------------------------------------------------------------
# Schemas & Validation
# ---------------------------------------------------------------------------
SUPPORTED_CONTROLLERS = ["rule_based", "pid", "ppo", "zero"]
SUPPORTED_TASKS = ["easy", "medium", "hard"]
MAX_SIMULATION_STEPS = 100


class SimulateRequest(BaseModel):
    controller: Literal["rule_based", "pid", "ppo", "zero"] = Field(
        default="rule_based",
        description="Controller strategy identifier.",
    )
    task: Literal["easy", "medium", "hard"] = Field(
        default="medium",
        description="Canonical task scenario.",
    )
    seed: int = Field(
        default=202,
        ge=0,
        le=1_000_000,
        description="RNG seed for deterministic workload and thermal walk.",
    )
    steps: Optional[int] = Field(
        default=24,
        ge=1,
        le=MAX_SIMULATION_STEPS,
        description="Number of simulation steps to execute.",
    )
    fault: bool = Field(
        default=True,
        description="Whether to enable chiller degradation fault injection.",
    )


class StepObservation(BaseModel):
    step: int
    temperatures: List[float]
    workloads: List[float]
    cooling: List[float]
    ambient_temp: float
    fault_active: bool
    degraded_zone: Optional[int]


class SimulateResponse(BaseModel):
    controller: str
    task: str
    seed: int
    steps_executed: int
    elapsed_ms: float
    config: Dict[str, Any]
    steps: List[StepObservation]
    detailed_metrics: Dict[str, Any]
    composite_metrics: Dict[str, Any]


# ---------------------------------------------------------------------------
# Endpoints
# ---------------------------------------------------------------------------
@app.get("/health")
def health_check() -> Dict[str, Any]:
    """Health check reporting system status, package version, and PPO model status."""
    ppo_ok = False
    try:
        agent = resolve_controller("ppo", task_name="medium")
        ppo_ok = getattr(agent, "model", None) is not None
    except Exception:
        ppo_ok = False

    return {
        "status": "healthy",
        "service": "adctm-api",
        "version": getattr(adctm, "__version__", "0.1.0"),
        "ppo_available": ppo_ok,
        "supported_controllers": SUPPORTED_CONTROLLERS,
        "supported_tasks": SUPPORTED_TASKS,
        "max_steps": MAX_SIMULATION_STEPS,
    }


@app.get("/config")
def get_config() -> Dict[str, Any]:
    """Retrieve canonical task configurations supported by the physical engine."""
    return {
        "tasks": CANONICAL_SCENARIOS,
        "default_task": "medium",
        "default_seed": 202,
    }


@app.post("/simulate", response_model=SimulateResponse)
def simulate(req: SimulateRequest) -> SimulateResponse:
    """
    Execute a real closed-loop simulation episode using the official ADCTM engine.
    Steps the physical ODE and controller synchronously.
    """
    t_start = time.perf_counter()

    try:
        # Load validated TaskConfig
        base_cfg = load_scenario(task_name=req.task, seed=req.seed)
        cfg_dict = base_cfg.model_dump()

        # Step limit override
        if req.steps is not None:
            cfg_dict["max_steps"] = min(req.steps, MAX_SIMULATION_STEPS)

        # Fault override
        if not req.fault:
            cfg_dict["degradation_step"] = None
            cfg_dict["degraded_zone"] = None

        session = SimulationSession.from_dict(cfg_dict)
        agent = resolve_controller(req.controller, task_name=req.task)

        if hasattr(agent, "reset"):
            agent.reset()

        step_records: List[StepObservation] = []
        target_steps = cfg_dict["max_steps"]

        while not session.done and session.step_counter < target_steps:
            t = session.step_counter
            obs_dict = session.observation.model_dump()

            # Real controller decision
            cooling_action = agent.act(obs_dict, cfg_dict)

            # Record pre-step state with active actuation
            is_fault = (
                session.config.degradation_step is not None
                and t >= session.config.degradation_step
            )
            step_records.append(
                StepObservation(
                    step=t,
                    temperatures=[round(float(x), 2) for x in obs_dict["temperatures"]],
                    workloads=[round(float(x), 4) for x in obs_dict["workloads"]],
                    cooling=[round(float(x), 4) for x in cooling_action],
                    ambient_temp=float(obs_dict["ambient_temp"]),
                    fault_active=is_fault,
                    degraded_zone=session.config.degraded_zone if is_fault else None,
                )
            )

            # Physical ODE transition
            session.step({"cooling": cooling_action})

        # Append final observation state
        final_t = session.step_counter
        final_obs = session.observation.model_dump()
        final_fault = (
            session.config.degradation_step is not None
            and final_t >= session.config.degradation_step
        )
        last_cooling = (
            step_records[-1].cooling
            if step_records
            else [0.0] * session.config.num_zones
        )
        step_records.append(
            StepObservation(
                step=final_t,
                temperatures=[round(float(x), 2) for x in final_obs["temperatures"]],
                workloads=[round(float(x), 4) for x in final_obs["workloads"]],
                cooling=last_cooling,
                ambient_temp=float(final_obs["ambient_temp"]),
                fault_active=final_fault,
                degraded_zone=session.config.degraded_zone if final_fault else None,
            )
        )

        # Compute evaluation metrics
        score_details = evaluate_trajectory(
            session.history_obs,
            session.history_actions,
            session.config,
            return_details=True,
        )
        detailed = compute_comprehensive_metrics(
            session.history_obs, session.history_actions, session.config
        )

        elapsed_ms = (time.perf_counter() - t_start) * 1000.0

        return SimulateResponse(
            controller=req.controller,
            task=req.task,
            seed=req.seed,
            steps_executed=session.step_counter,
            elapsed_ms=round(elapsed_ms, 2),
            config=session.config.model_dump(),
            steps=step_records,
            detailed_metrics={
                k: (float(v) if isinstance(v, (int, float)) else v)
                for k, v in detailed.items()
            },
            composite_metrics={
                k: float(v)
                for k, v in score_details.items()
                if isinstance(v, (int, float))
            },
        )

    except Exception as exc:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Simulation failure in ADCTM engine: {str(exc)}",
        )


@app.get("/benchmark/canonical")
def get_canonical_benchmark() -> Dict[str, Any]:
    """
    Return the official canonical benchmark results across all 4 controllers.
    """
    from adctm.evaluation.comparison import run_comparative_benchmark

    try:
        comp = run_comparative_benchmark(task_name="medium", seed=202)
        return comp
    except Exception as exc:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Canonical benchmark execution error: {str(exc)}",
        )


# ---------------------------------------------------------------------------
# Direct Server Entrypoint
# ---------------------------------------------------------------------------
def main():
    import uvicorn

    port = int(os.getenv("ADCTM_API_PORT", 8000))
    host = os.getenv("ADCTM_API_HOST", "0.0.0.0")
    print(f"[ADCTM API] Starting FastAPI service on {host}:{port}...")
    uvicorn.run(app, host=host, port=port)


if __name__ == "__main__":
    main()
