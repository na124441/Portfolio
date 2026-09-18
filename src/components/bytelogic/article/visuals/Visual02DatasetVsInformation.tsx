'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const Visual02DatasetVsInformation: React.FC<{ className?: string }> = ({ className }) => {
  // Generate coordinates for Dataset A (tight cluster / repetitive in a narrow zone)
  const datasetAPoints = Array.from({ length: 48 }, (_, i) => {
    const angle = (i / 48) * 2 * Math.PI;
    const radius = 12 + ((i * 17) % 25);
    return {
      x: 120 + Math.cos(angle) * radius,
      y: 110 + Math.sin(angle) * (radius * 0.7),
      id: `a-${i}`,
    };
  });

  // Generate coordinates for Dataset B (distributed widely across the feature plane)
  const datasetBPoints = [
    { x: 35, y: 40 }, { x: 70, y: 30 }, { x: 120, y: 25 }, { x: 180, y: 35 }, { x: 215, y: 55 },
    { x: 45, y: 80 }, { x: 95, y: 70 }, { x: 145, y: 85 }, { x: 195, y: 95 },
    { x: 30, y: 120 }, { x: 75, y: 115 }, { x: 125, y: 120 }, { x: 165, y: 130 }, { x: 210, y: 125 },
    { x: 50, y: 160 }, { x: 105, y: 155 }, { x: 155, y: 165 }, { x: 190, y: 175 },
    { x: 35, y: 195 }, { x: 80, y: 200 }, { x: 135, y: 190 }, { x: 175, y: 205 }, { x: 215, y: 190 },
    { x: 60, y: 60 }, { x: 160, y: 50 }, { x: 40, y: 150 }, { x: 140, y: 150 }, { x: 110, y: 100 },
  ];

  return (
    <figure
      className={cn(
        'my-10 sm:my-14 rounded-[8px] bg-[#0E151B] border border-[#1C2830] overflow-hidden bl-tick-box w-full',
        className
      )}
      aria-label="Comparison between Dataset A (large and repetitive) and Dataset B (large and diverse)"
    >
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-3 border-b border-[#1C2830] bg-[#0A0F14] text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-[2px] bg-[#019AA2]" />
          <span className="text-[#F3F6F7] font-semibold">VISUAL 02 // DATASET SIZE VS. INFORMATION</span>
        </div>
        <span className="text-[11px] text-[#68747D] uppercase tracking-wider">
          FEATURE SPACE EXPLORATION
        </span>
      </div>

      {/* Side-by-side visual panels */}
      <div className="p-4 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Panel A: Dataset A (Large + Repetitive) */}
        <div className="p-4 sm:p-5 rounded-[6px] bg-[#05070A] border border-[#1C2830] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-mono pb-3 mb-3 border-b border-[#1C2830]">
              <span className="text-[#F3F6F7] font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#68747D]" />
                DATASET A
              </span>
              <span className="text-[11px] text-[#A8B3BA] bg-[#131C24] px-2 py-0.5 rounded border border-[#1C2830]">
                100,000 SAMPLES
              </span>
            </div>

            <div className="text-xs text-[#A8B3BA] font-mono mb-3 space-y-1">
              <div className="text-[11px] text-[#68747D]">Conditions:</div>
              <div className="text-[#A8B3BA]">Same room · Same camera · Identical lighting</div>
            </div>

            {/* Canvas representation */}
            <div className="relative w-full aspect-[4/3] rounded bg-[#0A0F14] border border-[#1C2830]/80 overflow-hidden flex items-center justify-center p-3">
              <svg viewBox="0 0 240 220" className="w-full h-full">
                {/* Feature plane boundary */}
                <rect x="15" y="15" width="210" height="190" fill="none" stroke="#1C2830" strokeDasharray="3 3" />
                <text x="25" y="32" fill="#68747D" fontSize="9" fontFamily="monospace">
                  Feature Space Ω
                </text>

                {/* Overly dense cluster zone */}
                <circle cx="120" cy="110" r="45" fill="rgba(1, 154, 162, 0.08)" stroke="#019AA2" strokeWidth="1" strokeDasharray="2 2" />

                {/* Dense stacked points */}
                {datasetAPoints.map((pt) => (
                  <circle
                    key={pt.id}
                    cx={pt.x}
                    cy={pt.y}
                    r="2.8"
                    fill="#A8B3BA"
                    opacity="0.85"
                  />
                ))}

                {/* High redundancy warning tag */}
                <rect x="65" y="165" width="110" height="20" rx="3" fill="#0E151B" stroke="#1C2830" />
                <text x="120" y="179" fill="#68747D" fontSize="9" fontFamily="monospace" textAnchor="middle">
                  High Local Redundancy
                </text>
              </svg>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#1C2830] flex items-center justify-between text-xs font-mono">
            <span className="text-[#68747D]">Status:</span>
            <span className="text-[#F3F6F7] font-semibold">Large + Repetitive</span>
          </div>
        </div>

        {/* Panel B: Dataset B (Large + Diverse) */}
        <div className="p-4 sm:p-5 rounded-[6px] bg-[#05070A] border border-[#019AA2]/40 flex flex-col justify-between relative">
          <div>
            <div className="flex items-center justify-between text-xs font-mono pb-3 mb-3 border-b border-[#1C2830]">
              <span className="text-[#019AA2] font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#019AA2]" />
                DATASET B
              </span>
              <span className="text-[11px] text-[#019AA2] bg-[#019AA2]/10 px-2 py-0.5 rounded border border-[#019AA2]/30">
                100,000 SAMPLES
              </span>
            </div>

            <div className="text-xs text-[#A8B3BA] font-mono mb-3 space-y-1">
              <div className="text-[11px] text-[#68747D]">Conditions:</div>
              <div className="text-[#019AA2]">Diverse angles · Multi-lighting · Occlusions</div>
            </div>

            {/* Canvas representation */}
            <div className="relative w-full aspect-[4/3] rounded bg-[#0A0F14] border border-[#1C2830]/80 overflow-hidden flex items-center justify-center p-3">
              <svg viewBox="0 0 240 220" className="w-full h-full">
                {/* Feature plane boundary */}
                <rect x="15" y="15" width="210" height="190" fill="none" stroke="#1C2830" strokeDasharray="3 3" />
                <text x="25" y="32" fill="#019AA2" fontSize="9" fontFamily="monospace">
                  Feature Space Ω (Broad Span)
                </text>

                {/* Hull / Coverage glow */}
                <polygon
                  points="35,40 180,35 215,55 210,125 215,190 135,190 35,195 30,120"
                  fill="rgba(1, 154, 162, 0.07)"
                  stroke="#019AA2"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />

                {/* Widely scattered points */}
                {datasetBPoints.map((pt, idx) => (
                  <motion.circle
                    key={idx}
                    cx={pt.x}
                    cy={pt.y}
                    r="3.2"
                    fill="#019AA2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx % 10) * 0.05, duration: 0.3 }}
                  />
                ))}

                {/* High information coverage tag */}
                <rect x="65" y="165" width="110" height="20" rx="3" fill="#0E151B" stroke="#019AA2" strokeWidth="0.75" />
                <text x="120" y="179" fill="#019AA2" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                  Broad Domain Span
                </text>
              </svg>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#1C2830] flex items-center justify-between text-xs font-mono">
            <span className="text-[#68747D]">Status:</span>
            <span className="text-[#019AA2] font-semibold">Large + Diverse</span>
          </div>
        </div>
      </div>

      {/* Synthesis footer callout */}
      <div className="px-4 sm:px-6 py-4 bg-[#0A0F14] border-t border-[#1C2830] text-center">
        <p className="text-sm sm:text-base font-sans font-semibold text-[#F3F6F7] tracking-tight">
          Same number of samples <span className="text-[#019AA2] font-mono">≠</span> same amount of useful information
        </p>
      </div>

      {/* Caption */}
      <figcaption className="px-4 sm:px-6 py-3 border-t border-[#1C2830] bg-[#0E151B] text-xs font-mono text-[#68747D]">
        <strong className="text-[#A8B3BA]">Figure 02:</strong> Comparing sample count against coverage in problem space. Dataset A concentrates 100,000 observations into a tiny subspace, whereas Dataset B distributes equal sample density across diverse environmental invariants.
      </figcaption>
    </figure>
  );
};
