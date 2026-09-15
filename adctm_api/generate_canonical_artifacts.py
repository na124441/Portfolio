"""
Generate single machine-readable canonical benchmark and trajectory artifacts
directly from the real ADCTM package.
"""

from __future__ import annotations

import json
import os
import sys
from pathlib import Path

# Resolve ADCTM repo path from env var or default location
ADCTM_REPO_PATH = os.getenv("ADCTM_REPO_PATH", r"D:\ADCTM\ADCTM\ADCTM")
if not Path(ADCTM_REPO_PATH).exists():
    for candidate in [Path(__file__).resolve().parent.parent / "ADCTM", Path("D:/ADCTM/ADCTM/ADCTM")]:
        if candidate.exists():
            ADCTM_REPO_PATH = str(candidate)
            break

src_path = Path(ADCTM_REPO_PATH) / "src"
if not src_path.exists():
    raise RuntimeError(f"Cannot find 'src' directory in ADCTM repo at: {ADCTM_REPO_PATH}")

sys.path.insert(0, str(src_path))
os.chdir(ADCTM_REPO_PATH)

import adctm
from adctm.evaluation.benchmark import evaluate_controller_on_task
from adctm.simulation.scenarios import load_scenario

OUTPUT_DIR = Path(r"E:\Porfolio\src\data\adctm")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

print(f"[ADCTM Generator] Using package at: {src_path}")
print(f"[ADCTM Generator] Output directory: {OUTPUT_DIR}")

TASK_NAME = "medium"
SEED = 202
CONTROLLERS = ["rule_based", "pid", "ppo", "zero"]

config = load_scenario(task_name=TASK_NAME, seed=SEED)
config_dict = config.model_dump()

canonical_results = {
    "task": TASK_NAME,
    "seed": SEED,
    "config": config_dict,
    "controllers": {},
}

for ctrl in CONTROLLERS:
    print(f"[ADCTM Generator] Running canonical rollout for controller: {ctrl}...")
    result = evaluate_controller_on_task(ctrl, task_name=TASK_NAME, seed=SEED)

    detailed = result["detailed_metrics"]
    composite = result["composite_metrics"]

    canonical_results["controllers"][ctrl] = {
        "controller": ctrl,
        "score": float(result["score"]),
        "composite_metrics": {k: float(v) for k, v in composite.items() if isinstance(v, (int, float))},
        "detailed_metrics": {k: (float(v) if isinstance(v, (int, float)) else v) for k, v in detailed.items()},
    }

    steps = []
    num_steps = len(result["history_actions"])
    for t in range(num_steps):
        obs = result["history_obs"][t]
        act = result["history_actions"][t]
        is_fault = (config.degradation_step is not None and t >= config.degradation_step)
        steps.append({
            "step": t,
            "temperatures": [round(float(x), 2) for x in obs["temperatures"]],
            "workloads": [round(float(x), 4) for x in obs["workloads"]],
            "cooling": [round(float(x), 4) for x in act["cooling"]],
            "ambient_temp": float(obs["ambient_temp"]),
            "fault_active": is_fault,
            "degraded_zone": config.degraded_zone if is_fault else None,
        })

    final_obs = result["history_obs"][-1]
    steps.append({
        "step": num_steps,
        "temperatures": [round(float(x), 2) for x in final_obs["temperatures"]],
        "workloads": [round(float(x), 4) for x in final_obs["workloads"]],
        "cooling": [round(float(x), 4) for x in result["history_actions"][-1]["cooling"]],
        "ambient_temp": float(final_obs["ambient_temp"]),
        "fault_active": (config.degradation_step is not None and num_steps >= config.degradation_step),
        "degraded_zone": config.degraded_zone,
    })

    trajectory_payload = {
        "controller": ctrl,
        "task": TASK_NAME,
        "seed": SEED,
        "config": config_dict,
        "metrics": canonical_results["controllers"][ctrl]["detailed_metrics"],
        "steps": steps,
    }

    traj_file = OUTPUT_DIR / f"{ctrl}_trajectory.json"
    with open(traj_file, "w", encoding="utf-8") as f:
        json.dump(trajectory_payload, f, indent=2)
    print(f"  -> Saved trajectory to {traj_file}")

summary_file = OUTPUT_DIR / "canonical-benchmark.json"
with open(summary_file, "w", encoding="utf-8") as f:
    json.dump(canonical_results, f, indent=2)
print(f"[ADCTM Generator] Saved canonical summary to {summary_file}")
print("[ADCTM Generator] All canonical artifacts successfully generated.")
