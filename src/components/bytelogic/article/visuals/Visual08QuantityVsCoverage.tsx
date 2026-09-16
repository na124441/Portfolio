'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const Visual08QuantityVsCoverage: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <figure
      className={cn(
        'my-10 sm:my-14 rounded-[8px] bg-[#0E151B] border border-[#1C2830] overflow-hidden bl-tick-box w-full',
        className
      )}
      aria-label="Conceptual 2-axis graph comparing dataset size against domain coverage"
    >
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-3 border-b border-[#1C2830] bg-[#0A0F14] text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-[2px] bg-[#019AA2]" />
          <span className="text-[#F3F6F7] font-semibold">VISUAL 08 // QUANTITY VS. COVERAGE</span>
        </div>
        <span className="text-[11px] text-[#019AA2] bg-[#019AA2]/10 px-2 py-0.5 rounded border border-[#019AA2]/30">
          CONCEPTUAL DUAL-TRAJECTORY MODEL
        </span>
      </div>

      <div className="p-4 sm:p-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl aspect-[16/9] sm:aspect-[2.1/1] relative">
          <svg viewBox="0 0 640 320" className="w-full h-full select-none font-mono">
            {/* Subtle Grid */}
            <g opacity="0.15" stroke="#A8B3BA" strokeDasharray="3 3">
              <line x1="80" y1="70" x2="580" y2="70" />
              <line x1="80" y1="130" x2="580" y2="130" />
              <line x1="80" y1="190" x2="580" y2="190" />
              <line x1="220" y1="50" x2="220" y2="250" />
              <line x1="360" y1="50" x2="360" y2="250" />
              <line x1="500" y1="50" x2="500" y2="250" />
            </g>

            {/* Axes */}
            {/* Y-Axis: Coverage */}
            <line x1="80" y1="40" x2="80" y2="250" stroke="#1C2830" strokeWidth="2" />
            <polygon points="77,42 80,34 83,42" fill="#A8B3BA" />
            <text
              x="35"
              y="145"
              fill="#A8B3BA"
              fontSize="12"
              fontWeight="500"
              textAnchor="middle"
              transform="rotate(-90 35 145)"
            >
              Coverage of Problem Space
            </text>

            {/* X-Axis: Dataset Size */}
            <line x1="80" y1="250" x2="600" y2="250" stroke="#1C2830" strokeWidth="2" />
            <polygon points="598,247 606,250 598,253" fill="#A8B3BA" />
            <text
              x="340"
              y="285"
              fill="#A8B3BA"
              fontSize="12"
              fontWeight="500"
              textAnchor="middle"
            >
              Dataset Size (Sample Count)
            </text>

            {/* Trajectory 1: More samples -> same region (Gray dashed, early plateau) */}
            <motion.path
              d="M 80,250 Q 140,175 220,165 T 570,160"
              fill="none"
              stroke="#68747D"
              strokeWidth="2.5"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
            {/* Trajectory 1 points */}
            <circle cx="150" cy="188" r="3.5" fill="#68747D" />
            <circle cx="280" cy="163" r="3.5" fill="#68747D" />
            <circle cx="450" cy="161" r="3.5" fill="#68747D" />
            <text x="565" y="152" fill="#68747D" fontSize="10" textAnchor="end" fontWeight="600">
              More samples → same region (Plateau)
            </text>

            {/* Trajectory 2: More samples -> new regions (Cyan solid, sustained rise) */}
            <motion.path
              d="M 80,250 Q 180,140 340,95 T 570,60"
              fill="none"
              stroke="#019AA2"
              strokeWidth="3.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* Trajectory 2 points */}
            <circle cx="160" cy="160" r="4" fill="#019AA2" />
            <circle cx="280" cy="112" r="4" fill="#019AA2" />
            <circle cx="420" cy="80" r="4" fill="#019AA2" />
            <circle cx="540" cy="64" r="4" fill="#019AA2" />
            <text x="565" y="50" fill="#019AA2" fontSize="11" textAnchor="end" fontWeight="bold">
              More samples → new regions (Expanding Coverage)
            </text>

            {/* Conceptual badge watermark */}
            <g opacity="0.6">
              <text x="340" y="225" fill="#68747D" fontSize="9.5" textAnchor="middle" letterSpacing="0.08em">
                CONCEPTUAL ILLUSTRATION — NO FABRICATED EMPIRICAL DATA
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Caption footer */}
      <figcaption className="px-4 sm:px-6 py-3 border-t border-[#1C2830] bg-[#0A0F14] text-xs font-mono text-[#A8B3BA] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <span>
          <strong className="text-[#F3F6F7]">Figure 08:</strong> Disentangling raw sample count from distributional coverage.
        </span>
        <span className="text-[#68747D] text-[11px]">
          Dataset size and coverage are correlated only when acquisition targets new regions.
        </span>
      </figcaption>
    </figure>
  );
};
