'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface VisualProps {
  className?: string;
}

export const Visual03ParetoFrontier: React.FC<VisualProps> = ({ className }) => {
  return (
    <figure
      className={cn(
        'my-10 sm:my-14 rounded-[8px] bg-[#0E151B] border border-[#1C2830] overflow-hidden bl-tick-box w-full',
        className
      )}
      aria-label="Pareto frontier curve showing performance versus compute and latency cost"
    >
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-3 border-b border-[#1C2830] bg-[#0A0F14] text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-[2px] bg-[#019AA2]" />
          <span className="text-[#F3F6F7] font-semibold">
            VISUAL 03 // THE PARETO FRONTIER
          </span>
        </div>
        <span className="text-[11px] text-[#68747D] uppercase tracking-wider">
          COMPUTE VS. PERFORMANCE
        </span>
      </div>

      {/* SVG Canvas */}
      <div className="p-4 sm:p-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl aspect-[16/9] sm:aspect-[2.1/1] relative">
          <svg
            viewBox="0 0 680 320"
            className="w-full h-full overflow-visible font-mono select-none"
          >
            <defs>
              <linearGradient id="paretoGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#019AA2" />
                <stop offset="60%" stopColor="#019AA2" />
                <stop offset="100%" stopColor="#d4af37" />
              </linearGradient>
            </defs>

            {/* Grid */}
            <g opacity="0.12" stroke="#A8B3BA" strokeDasharray="3 3">
              <line x1="80" y1="60" x2="620" y2="60" />
              <line x1="80" y1="120" x2="620" y2="120" />
              <line x1="80" y1="180" x2="620" y2="180" />
              <line x1="80" y1="240" x2="620" y2="240" />
              <line x1="220" y1="40" x2="220" y2="250" />
              <line x1="380" y1="40" x2="380" y2="250" />
              <line x1="540" y1="40" x2="540" y2="250" />
            </g>

            {/* Axes */}
            <line x1="80" y1="250" x2="630" y2="250" stroke="#68747D" strokeWidth="1.5" />
            <line x1="80" y1="250" x2="80" y2="40" stroke="#68747D" strokeWidth="1.5" />

            {/* Axis Labels */}
            <text x="630" y="270" fill="#A8B3BA" fontSize="10" textAnchor="end">
              Inference Cost / Latency / FLOPs →
            </text>
            <text
              x="25"
              y="130"
              fill="#A8B3BA"
              fontSize="10"
              textAnchor="middle"
              transform="rotate(-90 25 130)"
            >
              Task Capability (%) →
            </text>

            {/* Y Axis ticks */}
            <text x="70" y="64" fill="#68747D" fontSize="9" textAnchor="end">95%</text>
            <text x="70" y="124" fill="#68747D" fontSize="9" textAnchor="end">85%</text>
            <text x="70" y="184" fill="#68747D" fontSize="9" textAnchor="end">65%</text>
            <text x="70" y="244" fill="#68747D" fontSize="9" textAnchor="end">0%</text>

            {/* Pareto Frontier Curve */}
            <path
              d="M 80 250 C 130 180, 180 95, 260 85 C 360 75, 480 65, 600 55"
              fill="none"
              stroke="url(#paretoGrad)"
              strokeWidth="3"
            />

            {/* Infeasible / Suboptimal regions */}
            <text x="440" y="150" fill="#68747D" fontSize="11" opacity="0.4" letterSpacing="1">
              SUBOPTIMAL REGION
            </text>

            {/* Key Operating Points */}
            {/* Point 1: 1.5B Model */}
            <circle cx="150" cy="160" r="5" fill="#019AA2" />
            <text x="140" y="185" fill="#A8B3BA" fontSize="9" textAnchor="middle">
              1.5B Base
            </text>

            {/* Point 2: The Efficiency Knee: 8B Distilled/Quantized */}
            <circle cx="260" cy="85" r="7" fill="#019AA2" stroke="#d4af37" strokeWidth="2" />
            <g transform="translate(230, 40)">
              <rect x="-10" y="-14" width="180" height="34" rx="4" fill="#0A0F14" stroke="#019AA2" strokeWidth="1" />
              <text x="80" y="2" fill="#019AA2" fontSize="10" textAnchor="middle" fontWeight="bold">
                THE EFFICIENCY KNEE (8B)
              </text>
              <text x="80" y="14" fill="#F3F6F7" fontSize="8.5" textAnchor="middle">
                92% Capability · 5% Operating Cost
              </text>
            </g>

            {/* Point 3: 70B Frontier */}
            <circle cx="580" cy="56" r="6" fill="#d4af37" />
            <g transform="translate(520, 75)">
              <rect x="-10" y="-12" width="120" height="30" rx="4" fill="#0A0F14" stroke="#68747D" strokeWidth="1" />
              <text x="50" y="2" fill="#d4af37" fontSize="9.5" textAnchor="middle" fontWeight="bold">
                70B Frontier
              </text>
              <text x="50" y="13" fill="#68747D" fontSize="8" textAnchor="middle">
                95% Cap. · 100% Cost
              </text>
            </g>

            {/* Annotation connecting knee to cost savings */}
            <path
              d="M 275 90 L 565 62"
              fill="none"
              stroke="#d4af37"
              strokeWidth="1"
              strokeDasharray="2 3"
              opacity="0.6"
            />
            <text x="410" y="100" fill="#d4af37" fontSize="9" textAnchor="middle">
              +3% Accuracy costs +1900% Compute
            </text>
          </svg>
        </div>
      </div>

      {/* Caption footer */}
      <figcaption className="px-4 sm:px-6 py-3 border-t border-[#1C2830] bg-[#0A0F14] text-xs text-[#A8B3BA] leading-relaxed">
        <span className="font-mono text-[#019AA2] font-semibold mr-1">Engineering Tradeoff:</span>
        The Pareto frontier demonstrates diminishing marginal capability returns. The efficiency knee represents the practical production sweet spot where a compressed, high-density model achieves nearly full frontier competence at a fraction of the serving latency and cloud bill.
      </figcaption>
    </figure>
  );
};
