'use client';

import React, { useState } from 'react';
import {
  BarChart3,
  TrendingDown,
  Shield,
  Zap,
  Clock,
  Layers,
  CheckCircle2,
  AlertOctagon,
  ArrowRight,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { CANONICAL_BENCHMARK, TRAJECTORIES } from '@/data/adctm';

interface AdctmBenchmarkDashboardProps {
  selectedController: string;
  onSelectController: (ctrl: string) => void;
}

export const AdctmBenchmarkDashboard: React.FC<AdctmBenchmarkDashboardProps> = ({
  selectedController,
  onSelectController,
}) => {
  const [activeChartTab, setActiveChartTab] = useState<'temperature' | 'cooling' | 'workload'>('temperature');
  const [visibleControllers, setVisibleControllers] = useState<Record<string, boolean>>({
    rule_based: true,
    pid: true,
    ppo: true,
    zero: false,
  });

  const toggleControllerVisibility = (ctrl: string) => {
    setVisibleControllers((prev) => ({ ...prev, [ctrl]: !prev[ctrl] }));
  };

  const controllers = CANONICAL_BENCHMARK.controllers;

  // Colors for each controller curve
  const CONTROLLER_COLORS: Record<string, { stroke: string; label: string }> = {
    rule_based: { stroke: '#10b981', label: 'Rule-Based Baseline' },
    pid: { stroke: '#3b82f6', label: 'PID Classical Control' },
    ppo: { stroke: '#dfb15b', label: 'PPO Deep RL Agent' },
    zero: { stroke: '#ef4444', label: 'Zero (Passive Baseline)' },
  };

  // Trajectories from machine-readable JSON
  const trajRule = TRAJECTORIES.rule_based.steps;
  const trajPid = TRAJECTORIES.pid.steps;
  const trajPpo = TRAJECTORIES.ppo.steps;
  const trajZero = TRAJECTORIES.zero.steps;

  // Chart dimensions
  const svgWidth = 800;
  const svgHeight = 280;
  const padLeft = 55;
  const padRight = 20;
  const padTop = 30;
  const padBottom = 35;
  const plotWidth = svgWidth - padLeft - padRight;
  const plotHeight = svgHeight - padTop - padBottom;

  // Map step index (0 to 24) to X
  const getX = (step: number) => padLeft + (step / 24) * plotWidth;

  // Map temperature (40°C to 110°C) to Y
  const getTempY = (t: number) => {
    const minT = 40.0;
    const maxT = 110.0;
    const clamped = Math.max(minT, Math.min(maxT, t));
    return padTop + plotHeight - ((clamped - minT) / (maxT - minT)) * plotHeight;
  };

  // Map cooling (0.0 to 1.0) to Y
  const getCoolingY = (c: number) => {
    return padTop + plotHeight - c * plotHeight;
  };

  // Map workload (0.0 to 1.0) to Y
  const getWorkloadY = (w: number) => {
    return padTop + plotHeight - w * plotHeight;
  };

  // Build SVG polyline points for average rack temperature
  const makeTempPolyline = (steps: typeof trajRule) => {
    return steps
      .map((s) => {
        const avgT = s.temperatures.reduce((a, b) => a + b, 0) / s.temperatures.length;
        return `${getX(s.step)},${getTempY(avgT)}`;
      })
      .join(' ');
  };

  // Build SVG polyline for mean cooling power
  const makeCoolingPolyline = (steps: typeof trajRule) => {
    return steps
      .map((s) => {
        const avgC = s.cooling.reduce((a, b) => a + b, 0) / s.cooling.length;
        return `${getX(s.step)},${getCoolingY(avgC)}`;
      })
      .join(' ');
  };

  // Target and Safety Y
  const targetY = getTempY(61.0);
  const safeY = getTempY(74.0);

  return (
    <section id="benchmark" className="py-16 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs text-[#dfb15b]">SECTION 06</span>
              <span className="text-white/30 font-mono text-xs">·</span>
              <span className="font-mono text-xs uppercase tracking-wider text-white/50">
                EMPIRICAL VERIFICATION
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#feffff]">
              Canonical Benchmark Dashboard
            </h3>
            <p className="font-sans text-sm text-white/70 max-w-2xl mt-1 leading-relaxed">
              Deterministic evaluation on Task: Medium (5 zones, 24 steps, seed 202, chiller degradation at step 10)
              under the exact same computational workload sequence.
            </p>
          </div>

          <Badge variant="gold" size="sm">
            GROUND TRUTH RUN · SEED 202
          </Badge>
        </div>

        {/* ========================================================================= */}
        {/* TRADE-OFF QUADRANT: THERMAL PROTECTION VS COOLING ENERGY */}
        {/* ========================================================================= */}
        <div className="mb-10 p-6 border border-white/10 bg-[#010a0b] relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-white/10 pb-3">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#dfb15b] block">
                STRATEGIC POLICY TRADEOFF QUADRANT
              </span>
              <h4 className="font-display text-base font-bold text-[#feffff]">
                Thermal Quality vs. Actuation Energy Expenditure
              </h4>
            </div>
            <span className="text-xs font-mono text-white/40">
              Low Undercooling (Safety) vs. Low Total Energy
            </span>
          </div>

          {/* Quadrant Visual Map */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-mono text-xs">
            {/* Top-Left: PPO */}
            <div className="p-4 border border-[#dfb15b]/40 bg-[#dfb15b]/5 relative">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-[#dfb15b]">QUADRANT I // AGGRESSIVE PROTECTION</span>
                <Badge variant="gold" size="sm">
                  PPO POLICY
                </Badge>
              </div>
              <p className="font-sans text-xs text-white/80 leading-relaxed mb-3">
                Prioritizes thermal safety margin above all else. Drastically eliminates undercooling (-95.8%)
                and cuts response time to 2.0 steps, but expends 57.5% more cooling energy and produces 1,386°C·steps overcooling.
              </p>
              <div className="flex items-center gap-4 text-[11px] text-white/60">
                <span>Undercooling: <b className="text-emerald-400">19.48</b></span>
                <span>Energy: <b className="text-amber-400">100.16</b></span>
                <span>Overcooling: <b className="text-cyan-400">1386.92</b></span>
              </div>
            </div>

            {/* Top-Right: Ideal Frontier */}
            <div className="p-4 border border-dashed border-white/20 bg-white/[0.01] relative">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white/50">QUADRANT II // IDEAL PARETO OPTIMUM</span>
                <span className="text-[10px] text-white/40 uppercase">RESEARCH GOAL</span>
              </div>
              <p className="font-sans text-xs text-white/60 leading-relaxed mb-3">
                Zero thermal undercooling combined with minimal cooling actuation energy.
                This is the open research objective: optimizing thermal protection <em>per unit of cooling energy</em>.
              </p>
              <div className="text-[11px] text-[#dfb15b] italic">
                Target: Undercooling &lt; 25.0 · Cooling Energy &lt; 50.0
              </div>
            </div>

            {/* Bottom-Left: Zero / Unmanaged */}
            <div className="p-4 border border-red-500/30 bg-red-950/10 relative">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-red-400">QUADRANT III // PASSIVE RUNAWAY</span>
                <Badge variant="outline" size="sm">
                  ZERO BASELINE
                </Badge>
              </div>
              <p className="font-sans text-xs text-white/80 leading-relaxed mb-3">
                Zero active energy expended (0.00), but leads to immediate critical thermal failure:
                23 safety violations, 105.0°C peak temperature ceiling, and 3,653°C·steps of undercooling.
              </p>
              <div className="flex items-center gap-4 text-[11px] text-white/60">
                <span>Violations: <b className="text-red-400">23 steps</b></span>
                <span>Energy: <b className="text-white">0.00</b></span>
                <span>Headroom: <b className="text-red-400">-31.0°C</b></span>
              </div>
            </div>

            {/* Bottom-Right: Rule-Based & PID */}
            <div className="p-4 border border-emerald-500/30 bg-emerald-950/10 relative">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-emerald-400">QUADRANT IV // BALANCED CONSERVATISM</span>
                <Badge variant="outline" size="sm">
                  RULE-BASED & PID
                </Badge>
              </div>
              <p className="font-sans text-xs text-white/80 leading-relaxed mb-3">
                Moderate cooling energy expenditure (63.60 – 68.81) and minimal overcooling (1.10 – 10.18),
                but slower deadband convergence (6.2 – 21.8 steps) resulting in moderate sustained undercooling.
              </p>
              <div className="flex items-center gap-4 text-[11px] text-white/60">
                <span>Rule Energy: <b className="text-emerald-400">63.60</b></span>
                <span>PID Energy: <b className="text-emerald-400">68.81</b></span>
                <span>Overcooling: <b className="text-emerald-400">&lt; 11.0</b></span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PRECISION SVG BENCHMARK CHARTS */}
        {/* ========================================================================= */}
        <div className="border border-white/10 bg-[#010a0b] p-5 sm:p-7 mb-10">
          {/* Chart Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
            {/* Chart Type Tabs */}
            <div className="flex border border-white/10 bg-white/[0.02]">
              {[
                { id: 'temperature', label: 'Rack Temperature (°C)' },
                { id: 'cooling', label: 'Actuator Cooling Demand [0-1]' },
                { id: 'workload', label: 'Compute Workload [0-1]' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveChartTab(tab.id as any)}
                  className={`px-3 py-1.5 font-mono text-xs transition-all ${
                    activeChartTab === tab.id
                      ? 'bg-[#d4af37]/20 text-[#dfb15b] border-b-2 border-[#d4af37] font-semibold'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Controller Toggles */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="text-white/40 text-[10px] uppercase mr-1">Overlay:</span>
              {Object.entries(CONTROLLER_COLORS).map(([ctrlKey, meta]) => {
                const isVis = visibleControllers[ctrlKey];
                return (
                  <button
                    key={ctrlKey}
                    onClick={() => toggleControllerVisibility(ctrlKey)}
                    className={`px-2.5 py-1 border transition-all flex items-center gap-1.5 ${
                      isVis
                        ? 'border-white/25 bg-white/5 text-white'
                        : 'border-white/5 text-white/30 hover:text-white/50'
                    }`}
                  >
                    <span
                      className="w-2.5 h-0.5 inline-block"
                      style={{ backgroundColor: isVis ? meta.stroke : '#444' }}
                    />
                    <span>{meta.label.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SVG Chart Element */}
          <div className="w-full overflow-x-auto">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full min-w-[680px] h-auto select-none font-mono"
            >
              {/* Background Grid Lines */}
              <g stroke="rgba(254,255,255,0.06)" strokeWidth="1">
                {[0, 6, 12, 18, 24].map((step) => (
                  <line
                    key={step}
                    x1={getX(step)}
                    y1={padTop}
                    x2={getX(step)}
                    y2={padTop + plotHeight}
                  />
                ))}

                {activeChartTab === 'temperature' && (
                  <>
                    <line x1={padLeft} y1={getTempY(44)} x2={svgWidth - padRight} y2={getTempY(44)} />
                    <line x1={padLeft} y1={getTempY(61)} x2={svgWidth - padRight} y2={getTempY(61)} />
                    <line x1={padLeft} y1={getTempY(74)} x2={svgWidth - padRight} y2={getTempY(74)} />
                    <line x1={padLeft} y1={getTempY(90)} x2={svgWidth - padRight} y2={getTempY(90)} />
                    <line x1={padLeft} y1={getTempY(105)} x2={svgWidth - padRight} y2={getTempY(105)} />
                  </>
                )}

                {activeChartTab !== 'temperature' && (
                  <>
                    <line x1={padLeft} y1={getCoolingY(0.25)} x2={svgWidth - padRight} y2={getCoolingY(0.25)} />
                    <line x1={padLeft} y1={getCoolingY(0.50)} x2={svgWidth - padRight} y2={getCoolingY(0.50)} />
                    <line x1={padLeft} y1={getCoolingY(0.75)} x2={svgWidth - padRight} y2={getCoolingY(0.75)} />
                    <line x1={padLeft} y1={getCoolingY(1.00)} x2={svgWidth - padRight} y2={getCoolingY(1.00)} />
                  </>
                )}
              </g>

              {/* Fault Occurrence Step Marker (Step 10) */}
              <line
                x1={getX(10)}
                y1={padTop}
                x2={getX(10)}
                y2={padTop + plotHeight}
                stroke="#ef4444"
                strokeWidth="1.5"
                strokeDasharray="4,4"
              />
              <text
                x={getX(10) + 4}
                y={padTop + 14}
                fill="#ef4444"
                fontSize="10"
                fontFamily="monospace"
              >
                Chiller Degradation (Step 10)
              </text>

              {/* Temperature Target & Safety Lines */}
              {activeChartTab === 'temperature' && (
                <>
                  {/* Target Line: 61°C */}
                  <line
                    x1={padLeft}
                    y1={targetY}
                    x2={svgWidth - padRight}
                    y2={targetY}
                    stroke="#dfb15b"
                    strokeWidth="1.5"
                    strokeDasharray="5,3"
                  />
                  <text
                    x={svgWidth - padRight - 5}
                    y={targetY - 5}
                    fill="#dfb15b"
                    fontSize="10"
                    textAnchor="end"
                  >
                    Target 61.0°C
                  </text>

                  {/* Safe Threshold: 74°C */}
                  <line
                    x1={padLeft}
                    y1={safeY}
                    x2={svgWidth - padRight}
                    y2={safeY}
                    stroke="#ef4444"
                    strokeWidth="1.5"
                    strokeDasharray="5,3"
                  />
                  <text
                    x={svgWidth - padRight - 5}
                    y={safeY - 5}
                    fill="#ef4444"
                    fontSize="10"
                    textAnchor="end"
                  >
                    Safety Limit 74.0°C
                  </text>
                </>
              )}

              {/* Polylines for each active controller */}
              {activeChartTab === 'temperature' && (
                <>
                  {visibleControllers.zero && (
                    <polyline
                      fill="none"
                      stroke={CONTROLLER_COLORS.zero.stroke}
                      strokeWidth="2"
                      points={makeTempPolyline(trajZero)}
                    />
                  )}
                  {visibleControllers.rule_based && (
                    <polyline
                      fill="none"
                      stroke={CONTROLLER_COLORS.rule_based.stroke}
                      strokeWidth="2"
                      points={makeTempPolyline(trajRule)}
                    />
                  )}
                  {visibleControllers.pid && (
                    <polyline
                      fill="none"
                      stroke={CONTROLLER_COLORS.pid.stroke}
                      strokeWidth="2"
                      points={makeTempPolyline(trajPid)}
                    />
                  )}
                  {visibleControllers.ppo && (
                    <polyline
                      fill="none"
                      stroke={CONTROLLER_COLORS.ppo.stroke}
                      strokeWidth="2.5"
                      points={makeTempPolyline(trajPpo)}
                    />
                  )}
                </>
              )}

              {activeChartTab === 'cooling' && (
                <>
                  {visibleControllers.rule_based && (
                    <polyline
                      fill="none"
                      stroke={CONTROLLER_COLORS.rule_based.stroke}
                      strokeWidth="2"
                      points={makeCoolingPolyline(trajRule)}
                    />
                  )}
                  {visibleControllers.pid && (
                    <polyline
                      fill="none"
                      stroke={CONTROLLER_COLORS.pid.stroke}
                      strokeWidth="2"
                      points={makeCoolingPolyline(trajPid)}
                    />
                  )}
                  {visibleControllers.ppo && (
                    <polyline
                      fill="none"
                      stroke={CONTROLLER_COLORS.ppo.stroke}
                      strokeWidth="2.5"
                      points={makeCoolingPolyline(trajPpo)}
                    />
                  )}
                </>
              )}

              {activeChartTab === 'workload' && (
                <polyline
                  fill="none"
                  stroke="#dfb15b"
                  strokeWidth="2"
                  points={trajRule
                    .map((s) => {
                      const avgW = s.workloads.reduce((a, b) => a + b, 0) / s.workloads.length;
                      return `${getX(s.step)},${getWorkloadY(avgW)}`;
                    })
                    .join(' ')}
                />
              )}

              {/* Y-Axis Labels */}
              {activeChartTab === 'temperature' ? (
                <>
                  <text x={padLeft - 8} y={getTempY(105) + 4} fill="rgba(254,255,255,0.4)" fontSize="10" textAnchor="end">105°C</text>
                  <text x={padLeft - 8} y={getTempY(90) + 4} fill="rgba(254,255,255,0.4)" fontSize="10" textAnchor="end">90°C</text>
                  <text x={padLeft - 8} y={getTempY(74) + 4} fill="#ef4444" fontSize="10" textAnchor="end">74°C</text>
                  <text x={padLeft - 8} y={getTempY(61) + 4} fill="#dfb15b" fontSize="10" textAnchor="end">61°C</text>
                  <text x={padLeft - 8} y={getTempY(44) + 4} fill="rgba(254,255,255,0.4)" fontSize="10" textAnchor="end">44°C</text>
                </>
              ) : (
                <>
                  <text x={padLeft - 8} y={getCoolingY(1.0) + 4} fill="rgba(254,255,255,0.4)" fontSize="10" textAnchor="end">100%</text>
                  <text x={padLeft - 8} y={getCoolingY(0.75) + 4} fill="rgba(254,255,255,0.4)" fontSize="10" textAnchor="end">75%</text>
                  <text x={padLeft - 8} y={getCoolingY(0.50) + 4} fill="rgba(254,255,255,0.4)" fontSize="10" textAnchor="end">50%</text>
                  <text x={padLeft - 8} y={getCoolingY(0.25) + 4} fill="rgba(254,255,255,0.4)" fontSize="10" textAnchor="end">25%</text>
                  <text x={padLeft - 8} y={getCoolingY(0.0) + 4} fill="rgba(254,255,255,0.4)" fontSize="10" textAnchor="end">0%</text>
                </>
              )}

              {/* X-Axis Timestep Labels */}
              {[0, 4, 8, 12, 16, 20, 24].map((st) => (
                <text
                  key={st}
                  x={getX(st)}
                  y={padTop + plotHeight + 20}
                  fill="rgba(254,255,255,0.5)"
                  fontSize="10"
                  textAnchor="middle"
                >
                  t={st}
                </text>
              ))}
            </svg>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CANONICAL COMPARISON METRICS TABLE */}
        {/* ========================================================================= */}
        <div className="border border-white/10 bg-white/[0.01] overflow-x-auto">
          <div className="p-4 border-b border-white/10 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-[#dfb15b]">
              Canonical Ground-Truth Results Table (Task: Medium, 24 Steps, Seed 202)
            </span>
            <span className="font-mono text-[10px] text-white/40">
              Source: tests/test_canonical_benchmark_regression.py
            </span>
          </div>

          <table className="w-full text-left font-mono text-xs">
            <thead className="border-b border-white/10 bg-white/5 text-white/40">
              <tr>
                <th className="p-3">Industrial Metric</th>
                <th className="p-3 text-emerald-400">Rule-Based</th>
                <th className="p-3 text-blue-400">PID Controller</th>
                <th className="p-3 text-[#dfb15b]">PPO (RL Agent)</th>
                <th className="p-3 text-red-400">Zero (Passive)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-white/80">
              <tr className="hover:bg-white/[0.02]">
                <td className="p-3 font-semibold text-white">Mean Temperature</td>
                <td className="p-3">{controllers.rule_based.detailed_metrics.mean_temp.toFixed(2)}°C</td>
                <td className="p-3">{controllers.pid.detailed_metrics.mean_temp.toFixed(2)}°C</td>
                <td className="p-3 font-bold text-[#dfb15b]">{controllers.ppo.detailed_metrics.mean_temp.toFixed(2)}°C</td>
                <td className="p-3 text-red-400">{controllers.zero.detailed_metrics.mean_temp.toFixed(2)}°C</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="p-3 font-semibold text-white">Peak Temperature</td>
                <td className="p-3">{controllers.rule_based.detailed_metrics.peak_temp.toFixed(2)}°C</td>
                <td className="p-3">{controllers.pid.detailed_metrics.peak_temp.toFixed(2)}°C</td>
                <td className="p-3">{controllers.ppo.detailed_metrics.peak_temp.toFixed(2)}°C</td>
                <td className="p-3 text-red-400">{controllers.zero.detailed_metrics.peak_temp.toFixed(2)}°C</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="p-3 font-semibold text-white">Thermal Headroom</td>
                <td className="p-3">+{controllers.rule_based.detailed_metrics.thermal_headroom.toFixed(2)}°C</td>
                <td className="p-3">+{controllers.pid.detailed_metrics.thermal_headroom.toFixed(2)}°C</td>
                <td className="p-3 font-bold text-[#dfb15b]">+{controllers.ppo.detailed_metrics.thermal_headroom.toFixed(2)}°C</td>
                <td className="p-3 text-red-400">{controllers.zero.detailed_metrics.thermal_headroom.toFixed(2)}°C</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="p-3 font-semibold text-white">Safety Violations</td>
                <td className="p-3 text-emerald-400">0 steps</td>
                <td className="p-3 text-emerald-400">0 steps</td>
                <td className="p-3 text-emerald-400">0 steps</td>
                <td className="p-3 text-red-400 font-bold">{controllers.zero.detailed_metrics.safety_violations.toFixed(0)} steps</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="p-3 font-semibold text-white">Cooling Energy</td>
                <td className="p-3 text-emerald-400 font-bold">{controllers.rule_based.detailed_metrics.cooling_energy.toFixed(2)}</td>
                <td className="p-3">{controllers.pid.detailed_metrics.cooling_energy.toFixed(2)}</td>
                <td className="p-3 text-amber-400 font-bold">{controllers.ppo.detailed_metrics.cooling_energy.toFixed(2)} (+57.5%)</td>
                <td className="p-3 text-white/40">0.00</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="p-3 font-semibold text-white">Undercooling (°C·steps)</td>
                <td className="p-3">{controllers.rule_based.detailed_metrics.undercooling.toFixed(2)}</td>
                <td className="p-3">{controllers.pid.detailed_metrics.undercooling.toFixed(2)}</td>
                <td className="p-3 font-bold text-emerald-400">{controllers.ppo.detailed_metrics.undercooling.toFixed(2)} (-95.8%)</td>
                <td className="p-3 text-red-400">{controllers.zero.detailed_metrics.undercooling.toFixed(2)}</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="p-3 font-semibold text-white">Overcooling (°C·steps)</td>
                <td className="p-3 text-emerald-400">{controllers.rule_based.detailed_metrics.overcooling.toFixed(2)}</td>
                <td className="p-3">{controllers.pid.detailed_metrics.overcooling.toFixed(2)}</td>
                <td className="p-3 text-cyan-400 font-bold">{controllers.ppo.detailed_metrics.overcooling.toFixed(2)}</td>
                <td className="p-3 text-white/40">0.00</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="p-3 font-semibold text-white">Response Time (steps)</td>
                <td className="p-3">{controllers.rule_based.detailed_metrics.response_time.toFixed(1)}</td>
                <td className="p-3">{controllers.pid.detailed_metrics.response_time.toFixed(1)}</td>
                <td className="p-3 font-bold text-emerald-400">{controllers.ppo.detailed_metrics.response_time.toFixed(1)} (-90.8%)</td>
                <td className="p-3 text-red-400">Failed (24.0)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
