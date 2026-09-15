'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  StepForward,
  AlertTriangle,
  Zap,
  Thermometer,
  ShieldCheck,
  Cpu,
  Radio,
  Sliders,
  Sparkles,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { TRAJECTORIES, AdctmTrajectoryStep } from '@/data/adctm';

interface AdctmSimulationCanvasProps {
  backendOnline: boolean;
  selectedController: string;
  onControllerChange: (ctrl: string) => void;
}

export const AdctmSimulationCanvas: React.FC<AdctmSimulationCanvasProps> = ({
  backendOnline,
  selectedController,
  onControllerChange,
}) => {
  const [task, setTask] = useState<'medium' | 'easy' | 'hard'>('medium');
  const [faultEnabled, setFaultEnabled] = useState<boolean>(true);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(400); // ms per step
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [executionLatency, setExecutionLatency] = useState<number | null>(null);
  const [liveMode, setLiveMode] = useState<boolean>(true);

  // Active rollout steps (loaded from live backend or precomputed canonical fallback)
  const [steps, setSteps] = useState<AdctmTrajectoryStep[]>(() => {
    return TRAJECTORIES[selectedController]?.steps || TRAJECTORIES.rule_based.steps;
  });

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch live simulation from backend
  const fetchSimulation = useCallback(
    async (controller: string, taskName: string, fault: boolean) => {
      setIsLoading(true);
      const t0 = performance.now();
      try {
        const res = await fetch('/api/adctm/simulate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            controller,
            task: taskName,
            seed: 202,
            steps: taskName === 'medium' ? 24 : taskName === 'easy' ? 18 : 34,
            fault,
          }),
        });

        if (res.ok) {
          const data = await res.json();
          if (data.steps && data.steps.length > 0) {
            setSteps(data.steps);
            setCurrentStepIndex(0);
            setLiveMode(true);
            setExecutionLatency(Math.round(performance.now() - t0));
            setIsLoading(false);
            return;
          }
        }
      } catch {
        // Fallback gracefully to machine-readable canonical data
      }

      // Offline fallback to canonical trajectory
      const fallback = TRAJECTORIES[controller] || TRAJECTORIES.rule_based;
      setSteps(fallback.steps);
      setCurrentStepIndex(0);
      setLiveMode(false);
      setExecutionLatency(null);
      setIsLoading(false);
    },
    []
  );

  // Trigger simulation fetch when controller, task, or fault changes
  useEffect(() => {
    fetchSimulation(selectedController, task, faultEnabled);
  }, [selectedController, task, faultEnabled, fetchSimulation]);

  // Handle Play/Pause timer
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStepIndex((prev) => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, playbackSpeed);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, steps.length, playbackSpeed]);

  const handleStepForward = () => {
    setIsPlaying(false);
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStepIndex(0);
  };

  const currentStep = steps[currentStepIndex] || steps[0] || {
    step: 0,
    temperatures: [68.0, 69.0, 69.5, 68.0, 69.0],
    workloads: [0.82, 0.86, 0.80, 0.78, 0.88],
    cooling: [0.75, 0.75, 0.75, 0.75, 0.75],
    ambient_temp: 44.0,
    fault_active: false,
    degraded_zone: null,
  };

  // Thermal boundaries
  const TARGET_TEMP = task === 'medium' ? 61.0 : task === 'easy' ? 63.0 : 50.0;
  const SAFE_TEMP = task === 'medium' ? 74.0 : task === 'easy' ? 74.0 : 70.5;
  const AMBIENT_TEMP = currentStep.ambient_temp || 44.0;

  // Cumulative energy calculation up to current step
  const cumulativeEnergy = steps
    .slice(0, currentStepIndex + 1)
    .reduce((acc, s) => acc + s.cooling.reduce((cAcc, c) => cAcc + c, 0), 0);

  // Safety violations count up to current step
  const safetyViolations = steps
    .slice(0, currentStepIndex + 1)
    .reduce((acc, s) => acc + (s.temperatures.some((t) => t > SAFE_TEMP) ? 1 : 0), 0);

  // Color mapper for thermal temperature
  const getTempColor = (t: number) => {
    if (t > SAFE_TEMP) return '#ef4444'; // Critical red
    if (t > SAFE_TEMP - 3) return '#f97316'; // Warning orange
    if (t > TARGET_TEMP + 1.5) return '#dfb15b'; // Above deadband gold
    if (t < TARGET_TEMP - 3.0) return '#06b6d4'; // Overcooled cyan
    return '#10b981'; // Optimal deadband emerald
  };

  return (
    <section id="simulation" className="py-16 border-b border-white/10 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs text-[#dfb15b]">SECTION 02</span>
              <span className="text-white/30 font-mono text-xs">·</span>
              <span className="font-mono text-xs uppercase tracking-wider text-white/50">
                CLOSED-LOOP INSTRUMENTATION
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#feffff]">
              Interactive Thermal Simulation
            </h3>
          </div>

          {/* Engine Status Banner */}
          <div className="flex items-center gap-2 font-mono text-xs px-3 py-1.5 border border-white/10 bg-white/[0.02]">
            <Radio className={`w-3.5 h-3.5 ${liveMode ? 'text-emerald-400 animate-pulse' : 'text-[#dfb15b]'}`} />
            <span className="text-white/80">
              {liveMode ? 'Live Python Simulation Runtime' : 'Precomputed Canonical Run'}
            </span>
            {executionLatency !== null && (
              <span className="text-emerald-400 ml-1">({executionLatency}ms)</span>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MAIN SIMULATION INSTRUMENTATION PANEL */}
        {/* ========================================================================= */}
        <div className="border border-white/15 bg-[#010a0b] overflow-hidden shadow-2xl">
          {/* Top Instrumentation Bar */}
          <div className="p-4 sm:p-5 border-b border-white/10 bg-white/[0.02] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-4">
              <div>
                <span className="text-white/40 block text-[10px] uppercase">Step</span>
                <span className="text-white font-bold text-sm">
                  {String(currentStep.step).padStart(2, '0')} / {String(steps.length - 1).padStart(2, '0')}
                </span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div>
                <span className="text-white/40 block text-[10px] uppercase">Target Setpoint</span>
                <span className="text-[#dfb15b] font-bold text-sm">{TARGET_TEMP.toFixed(1)}°C</span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div>
                <span className="text-white/40 block text-[10px] uppercase">Safe Threshold</span>
                <span className="text-red-400 font-bold text-sm">{SAFE_TEMP.toFixed(1)}°C</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div>
                <span className="text-white/40 block text-[10px] uppercase">Cumulative Energy</span>
                <span className="text-cyan-400 font-bold text-sm">{cumulativeEnergy.toFixed(2)}</span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div>
                <span className="text-white/40 block text-[10px] uppercase">Safety Violations</span>
                <span className={`font-bold text-sm ${safetyViolations > 0 ? 'text-red-400' : 'text-emerald-400'}`}>
                  {safetyViolations}
                </span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              {/* Fault Alert Badge */}
              <div className="flex items-center gap-1.5">
                {currentStep.fault_active ? (
                  <span className="flex items-center gap-1 text-red-400 bg-red-950/40 border border-red-500/40 px-2 py-0.5 rounded text-[11px] font-semibold animate-pulse">
                    <AlertTriangle className="w-3 h-3" />
                    FAULT ACTIVE (Zone 03 Chiller -50%)
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-emerald-400 bg-emerald-950/30 border border-emerald-500/30 px-2 py-0.5 rounded text-[11px]">
                    <ShieldCheck className="w-3 h-3" />
                    CHILLERS NOMINAL
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Zones Visualizer Canvas */}
          <div className="p-5 sm:p-7">
            <div className="text-[11px] font-mono text-white/40 uppercase tracking-widest mb-4 flex items-center justify-between">
              <span>THERMAL RACK ZONES ({currentStep.temperatures.length} ZONES DEPLOYED)</span>
              <span className="text-white/30">AMBIENT: {AMBIENT_TEMP.toFixed(1)}°C</span>
            </div>

            {/* Grid of Server Zones */}
            <div className={`grid gap-4 ${currentStep.temperatures.length <= 5 ? 'grid-cols-2 sm:grid-cols-5' : 'grid-cols-2 sm:grid-cols-4'}`}>
              {currentStep.temperatures.map((temp, zIdx) => {
                const workload = currentStep.workloads[zIdx] ?? 0;
                const cooling = currentStep.cooling[zIdx] ?? 0;
                const isDegraded = currentStep.fault_active && currentStep.degraded_zone === zIdx;
                const tempColor = getTempColor(temp);

                return (
                  <div
                    key={zIdx}
                    className={`relative p-4 border transition-all duration-150 ${
                      isDegraded
                        ? 'border-red-500/60 bg-red-950/15 shadow-[0_0_15px_rgba(239,68,68,0.2)]'
                        : 'border-white/10 bg-white/[0.01] hover:border-white/20'
                    }`}
                  >
                    {/* Degraded corner badge */}
                    {isDegraded && (
                      <div className="absolute top-0 right-0 bg-red-500 text-[9px] font-mono font-bold text-black px-1.5 py-0.5">
                        FAULT (-50%)
                      </div>
                    )}

                    <div className="flex items-center justify-between font-mono text-xs text-white/50 mb-2">
                      <span className="font-semibold text-white/70">Zone 0{zIdx + 1}</span>
                      <span className="text-[10px] text-white/40">#{zIdx}</span>
                    </div>

                    {/* Temperature Digital Readout */}
                    <div className="mb-4">
                      <div
                        className="font-mono text-3xl font-bold tracking-tight transition-colors duration-200"
                        style={{ color: tempColor }}
                      >
                        {temp.toFixed(1)}°C
                      </div>
                      <div className="text-[10px] font-mono text-white/50 flex items-center gap-1 mt-0.5">
                        <Thermometer className="w-3 h-3" />
                        <span>Δ {temp > TARGET_TEMP ? `+${(temp - TARGET_TEMP).toFixed(1)}` : (temp - TARGET_TEMP).toFixed(1)}°C</span>
                      </div>
                    </div>

                    {/* Actuation Cooling Command Meter */}
                    <div className="space-y-2 text-[11px] font-mono">
                      <div>
                        <div className="flex justify-between text-white/60 text-[10px] mb-1">
                          <span>Cooling</span>
                          <span className="text-cyan-400 font-bold">{(cooling * 100).toFixed(0)}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-none overflow-hidden">
                          <div
                            className="h-full bg-cyan-400 transition-all duration-200"
                            style={{ width: `${Math.min(100, Math.max(0, cooling * 100))}%` }}
                          />
                        </div>
                      </div>

                      {/* Workload Meter */}
                      <div>
                        <div className="flex justify-between text-white/60 text-[10px] mb-1">
                          <span>Workload</span>
                          <span className="text-[#dfb15b]">{(workload * 100).toFixed(0)}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-none overflow-hidden">
                          <div
                            className="h-full bg-[#dfb15b] transition-all duration-200"
                            style={{ width: `${Math.min(100, Math.max(0, workload * 100))}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scrubber Timeline Bar */}
          <div className="px-5 sm:px-7 py-3 border-t border-white/10 bg-white/[0.01]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] text-white/40 w-12">t = {currentStep.step}</span>
              <input
                type="range"
                min={0}
                max={steps.length - 1}
                value={currentStepIndex}
                onChange={(e) => {
                  setIsPlaying(false);
                  setCurrentStepIndex(Number(e.target.value));
                }}
                className="w-full h-1.5 bg-white/10 accent-[#dfb15b] cursor-pointer"
              />
              <span className="font-mono text-[10px] text-white/40 w-12 text-right">t = {steps.length - 1}</span>
            </div>
          </div>

          {/* Bottom Controls Deck */}
          <div className="p-4 sm:p-5 border-t border-white/10 bg-[#010a0b] flex flex-wrap items-center justify-between gap-4">
            {/* Playback Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleStepForward}
                disabled={currentStepIndex >= steps.length - 1}
                className="px-3.5 py-2 font-mono text-xs font-bold bg-[#d4af37] text-black hover:bg-[#edd899] active:bg-[#c5a059] transition-all flex items-center gap-1.5 disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_0_12px_rgba(212,175,55,0.3)]"
                title="Advance single time step on the Python control engine"
              >
                <StepForward className="w-3.5 h-3.5 fill-current" />
                <span>STEP</span>
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-3 py-2 font-mono text-xs border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all flex items-center gap-1.5"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current text-[#dfb15b]" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current text-[#dfb15b]" />
                    <span>Run</span>
                  </>
                )}
              </button>

              <button
                onClick={handleReset}
                className="p-2 border border-white/15 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all"
                title="Reset simulation to step 0"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              {/* Speed toggle */}
              <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-white/50 pl-2">
                <span>Speed:</span>
                {[600, 300, 150].map((spd) => (
                  <button
                    key={spd}
                    onClick={() => setPlaybackSpeed(spd)}
                    className={`px-1.5 py-0.5 border ${
                      playbackSpeed === spd
                        ? 'border-[#dfb15b] text-[#dfb15b] bg-[#dfb15b]/10'
                        : 'border-white/10 text-white/40 hover:text-white/70'
                    }`}
                  >
                    {spd === 600 ? '1x' : spd === 300 ? '2x' : '4x'}
                  </button>
                ))}
              </div>
            </div>

            {/* Controller Selector */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[10px] uppercase text-white/40">Controller:</span>
                <div className="flex border border-white/10 bg-white/[0.02]">
                  {[
                    { id: 'rule_based', label: 'Rule-Based' },
                    { id: 'pid', label: 'PID' },
                    { id: 'ppo', label: 'PPO (RL)' },
                    { id: 'zero', label: 'Zero' },
                  ].map((ctrl) => (
                    <button
                      key={ctrl.id}
                      onClick={() => onControllerChange(ctrl.id)}
                      className={`px-2.5 py-1 font-mono text-xs transition-all ${
                        selectedController === ctrl.id
                          ? 'bg-[#d4af37]/20 text-[#dfb15b] border-b-2 border-[#d4af37] font-semibold'
                          : 'text-white/60 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {ctrl.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scenario Selector */}
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[10px] uppercase text-white/40">Task:</span>
                <select
                  value={task}
                  onChange={(e) => setTask(e.target.value as 'medium' | 'easy' | 'hard')}
                  className="bg-[#010a0b] border border-white/15 text-white/80 font-mono text-xs px-2 py-1 outline-none focus:border-[#dfb15b]"
                >
                  <option value="medium">Medium (5-Zone, Canonical)</option>
                  <option value="easy">Easy (3-Zone)</option>
                  <option value="hard">Hard (8-Zone)</option>
                </select>
              </div>

              {/* Fault Toggle */}
              <button
                onClick={() => setFaultEnabled(!faultEnabled)}
                className={`px-2.5 py-1 font-mono text-xs border transition-all flex items-center gap-1.5 ${
                  faultEnabled
                    ? 'border-red-500/40 text-red-400 bg-red-950/20'
                    : 'border-white/10 text-white/40 hover:text-white/70'
                }`}
                title="Toggle mid-episode chiller degradation fault at step 10 on Zone 03"
              >
                <AlertTriangle className="w-3 h-3" />
                <span>Fault: {faultEnabled ? 'ON' : 'OFF'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
