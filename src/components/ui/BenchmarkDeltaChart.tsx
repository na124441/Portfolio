'use client';

import React, { useState } from 'react';

interface BenchmarkDeltaChartProps {
  projectSlug: string;
}

export const BenchmarkDeltaChart: React.FC<BenchmarkDeltaChartProps> = ({ projectSlug }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (projectSlug === 'adctm') {
    // 24-hour PUE progression data points
    const data = [
      { hour: '00:00', pid: 1.44, adctm: 1.12, delta: '-22.2%' },
      { hour: '04:00', pid: 1.41, adctm: 1.10, delta: '-22.0%' },
      { hour: '08:00', pid: 1.49, adctm: 1.14, delta: '-23.5%' },
      { hour: '12:00', pid: 1.58, adctm: 1.16, delta: '-26.6%' },
      { hour: '14:00', pid: 1.62, adctm: 1.16, delta: '-28.4%' }, // Peak burst
      { hour: '16:00', pid: 1.57, adctm: 1.15, delta: '-26.8%' },
      { hour: '20:00', pid: 1.48, adctm: 1.13, delta: '-23.6%' },
      { hour: '23:59', pid: 1.45, adctm: 1.11, delta: '-23.4%' },
    ];

    return (
      <div className="surface-workspace p-5 sm:p-7 my-8 border border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/10">
          <div>
            <span className="font-mono text-[10px] text-[#dfb15b] uppercase tracking-wider block">
              EMPIRICAL BENCHMARK // 24-HOUR TELEMETRY SWEEP
            </span>
            <h4 className="font-mono text-sm sm:text-base font-bold text-[#feffff] mt-0.5">
              Power Usage Effectiveness (PUE) vs. Traditional Reactive PID
            </h4>
          </div>
          <div className="flex items-center gap-4 font-mono text-xs">
            <span className="flex items-center gap-1.5 text-white/50">
              <span className="w-3 h-0.5 bg-white/40 inline-block" />
              Baseline PID (Mean: 1.51)
            </span>
            <span className="flex items-center gap-1.5 text-[#dfb15b]">
              <span className="w-3 h-0.5 bg-[#dfb15b] inline-block" />
              Safe-SAC + FNO (Mean: 1.14)
            </span>
          </div>
        </div>

        {/* SVG Chart */}
        <div className="w-full overflow-x-auto">
          <svg viewBox="0 0 760 260" className="w-full min-w-[620px] h-auto select-none">
            <defs>
              <linearGradient id="pueDeltaFill" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#dfb15b" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#dfb15b" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            {/* Background Grid Lines & Y-Axis Scale */}
            <g stroke="rgba(254,255,255,0.06)" strokeWidth="1">
              <line x1="60" y1="30" x2="730" y2="30" />
              <line x1="60" y1="80" x2="730" y2="80" />
              <line x1="60" y1="130" x2="730" y2="130" />
              <line x1="60" y1="180" x2="730" y2="180" />
              <line x1="60" y1="220" x2="730" y2="220" stroke="rgba(254,255,255,0.15)" />
            </g>

            <text x="50" y="34" fill="rgba(254,255,255,0.4)" fontSize="9" fontFamily="monospace" textAnchor="end">1.70</text>
            <text x="50" y="84" fill="rgba(254,255,255,0.4)" fontSize="9" fontFamily="monospace" textAnchor="end">1.50</text>
            <text x="50" y="134" fill="rgba(254,255,255,0.4)" fontSize="9" fontFamily="monospace" textAnchor="end">1.30</text>
            <text x="50" y="184" fill="rgba(254,255,255,0.4)" fontSize="9" fontFamily="monospace" textAnchor="end">1.10</text>
            <text x="50" y="224" fill="rgba(254,255,255,0.4)" fontSize="9" fontFamily="monospace" textAnchor="end">1.00</text>

            {/* Shaded Area between PID and ADCTM curves */}
            <polygon
              points="
                70,95 160,102 250,82 340,60 430,50 520,62 610,85 700,92
                700,172 610,168 520,163 430,160 340,160 250,165 160,175 70,170
              "
              fill="url(#pueDeltaFill)"
            />

            {/* Baseline PID Line (White/Gray with oscillation) */}
            <polyline
              points="70,95 160,102 250,82 340,60 430,50 520,62 610,85 700,92"
              fill="none"
              stroke="rgba(254,255,255,0.45)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* ADCTM Safe-SAC + FNO Line (Metallic Gold) */}
            <polyline
              points="70,170 160,175 250,165 340,160 430,160 520,163 610,168 700,172"
              fill="none"
              stroke="#dfb15b"
              strokeWidth="2.5"
            />

            {/* Data Points and X-Axis Labels */}
            {data.map((d, i) => {
              const x = 70 + i * 90;
              const yAdctm = [170, 175, 165, 160, 160, 163, 168, 172][i];
              const yPid = [95, 102, 82, 60, 50, 62, 85, 92][i];

              return (
                <g
                  key={d.hour}
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Vertical guide line on hover */}
                  {hoveredIndex === i && (
                    <line x1={x} y1={30} x2={x} y2={220} stroke="#dfb15b" strokeWidth="1" strokeDasharray="2 2" />
                  )}

                  {/* ADCTM Node */}
                  <circle cx={x} cy={yAdctm} r={hoveredIndex === i ? '5' : '3.5'} fill="#dfb15b" />
                  {/* PID Node */}
                  <circle cx={x} cy={yPid} r="3" fill="rgba(254,255,255,0.4)" />

                  {/* X-Axis Time Label */}
                  <text x={x} y="240" fill="rgba(254,255,255,0.5)" fontSize="9" fontFamily="monospace" textAnchor="middle">
                    {d.hour}
                  </text>
                </g>
              );
            })}

            {/* Peak Efficiency Callout */}
            <g transform="translate(430, 30)">
              <rect x="-65" y="-12" width="130" height="22" fill="#010a0b" stroke="#dfb15b" strokeWidth="1" />
              <text x="0" y="3" fill="#dfb15b" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                PEAK DELTA: -28.4%
              </text>
            </g>
          </svg>
        </div>

        {/* Hover Readout Bar */}
        <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between font-mono text-xs text-white/70">
          <div className="flex items-center gap-2">
            <span className="text-white/40">SELECTED INTERVAL:</span>
            <span className="text-[#feffff] font-semibold">
              {hoveredIndex !== null ? data[hoveredIndex].hour : '14:00 (Peak Compute Load)'}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span>
              Baseline PUE: <strong className="text-white/90">{hoveredIndex !== null ? data[hoveredIndex].pid : '1.62'}</strong>
            </span>
            <span>
              ADCTM PUE: <strong className="text-[#dfb15b]">{hoveredIndex !== null ? data[hoveredIndex].adctm : '1.16'}</strong>
            </span>
            <span>
              Cooling Energy Saved: <strong className="text-[#22c55e]">{hoveredIndex !== null ? data[hoveredIndex].delta : '-28.4%'}</strong>
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Spacecraft Pareto Frontier Chart
  if (projectSlug === 'self-aware-spacecraft') {
    return (
      <div className="surface-workspace p-5 sm:p-7 my-8 border border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/10">
          <div>
            <span className="font-mono text-[10px] text-[#06b6d4] uppercase tracking-wider block">
              PARETO FRONTIER // LATENCY VS ACCURACY
            </span>
            <h4 className="font-mono text-sm sm:text-base font-bold text-[#feffff] mt-0.5">
              Anomaly Isolation Latency vs. Diagnostic Precision
            </h4>
          </div>
          <span className="text-[11px] font-mono text-white/50">RAD-HARD MCU FOOTPRINT (&lt;64KB SRAM)</span>
        </div>

        {/* SVG Pareto Frontier */}
        <div className="w-full overflow-x-auto">
          <svg viewBox="0 0 720 250" className="w-full min-w-[580px] h-auto select-none">
            <defs>
              <linearGradient id="paretoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#dfb15b" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Grid */}
            <g stroke="rgba(254,255,255,0.06)" strokeWidth="1">
              <line x1="60" y1="30" x2="680" y2="30" />
              <line x1="60" y1="80" x2="680" y2="80" />
              <line x1="60" y1="130" x2="680" y2="130" />
              <line x1="60" y1="180" x2="680" y2="180" />
              <line x1="60" y1="210" x2="680" y2="210" stroke="rgba(254,255,255,0.15)" />
            </g>

            <text x="50" y="34" fill="rgba(254,255,255,0.4)" fontSize="9" fontFamily="monospace" textAnchor="end">100%</text>
            <text x="50" y="84" fill="rgba(254,255,255,0.4)" fontSize="9" fontFamily="monospace" textAnchor="end">90%</text>
            <text x="50" y="134" fill="rgba(254,255,255,0.4)" fontSize="9" fontFamily="monospace" textAnchor="end">80%</text>
            <text x="50" y="184" fill="rgba(254,255,255,0.4)" fontSize="9" fontFamily="monospace" textAnchor="end">70%</text>

            {/* Hard Real-Time 10ms Deadline Bar */}
            <line x1="380" y1="20" x2="380" y2="210" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
            <text x="385" y="40" fill="#ef4444" fontSize="8" fontFamily="monospace">
              HARD 10ms DEADLINE
            </text>

            {/* Pareto Curve */}
            <path
              d="M 120 180 Q 220 50 620 40"
              fill="none"
              stroke="url(#paretoGrad)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Point 1: Fixed Threshold */}
            <circle cx="120" cy="180" r="4.5" fill="#a855f7" />
            <text x="130" y="183" fill="rgba(254,255,255,0.7)" fontSize="9" fontFamily="monospace">
              Fixed Threshold (0.4ms, 71.4%)
            </text>

            {/* Point 2: Our Quantized T-GNN System (Optimal) */}
            <circle cx="280" cy="48" r="6" fill="#dfb15b" stroke="#010a0b" strokeWidth="2" />
            <rect x="230" y="60" width="165" height="34" fill="#010a0b" stroke="#dfb15b" strokeWidth="1" />
            <text x="240" y="74" fill="#dfb15b" fontSize="9" fontFamily="monospace" fontWeight="bold">
              ★ T-GNN (4.2ms, 99.1%)
            </text>
            <text x="240" y="87" fill="rgba(254,255,255,0.6)" fontSize="8" fontFamily="monospace">
              64KB SRAM · RAD-HARD
            </text>

            {/* Point 3: FP32 Cloud Baseline (Exceeds Deadline) */}
            <circle cx="620" cy="40" r="4.5" fill="rgba(254,255,255,0.4)" />
            <text x="520" y="28" fill="rgba(254,255,255,0.5)" fontSize="9" fontFamily="monospace">
              FP32 Dense GNN (148ms, 99.4%)
            </text>

            {/* X-Axis Labels */}
            <text x="120" y="225" fill="rgba(254,255,255,0.4)" fontSize="9" fontFamily="monospace" textAnchor="middle">0.4ms</text>
            <text x="280" y="225" fill="#dfb15b" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">4.2ms</text>
            <text x="380" y="225" fill="#ef4444" fontSize="9" fontFamily="monospace" textAnchor="middle">10.0ms</text>
            <text x="620" y="225" fill="rgba(254,255,255,0.4)" fontSize="9" fontFamily="monospace" textAnchor="middle">150ms</text>
          </svg>
        </div>
      </div>
    );
  }

  return null;
};
