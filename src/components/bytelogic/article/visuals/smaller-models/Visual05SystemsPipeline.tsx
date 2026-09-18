'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface VisualProps {
  className?: string;
}

export const Visual05SystemsPipeline: React.FC<VisualProps> = ({ className }) => {
  const stages = [
    {
      num: '01',
      title: 'TASK GEOMETRY',
      subtitle: 'Intrinsic Dimensionality',
      desc: 'Bounded manifold vs. open-ended trivia space',
      color: '#68747D',
    },
    {
      num: '02',
      title: 'DATA DENSITY',
      subtitle: 'Signal-to-Noise Ratio',
      desc: 'Synthetic textbooks & curated deduplication',
      color: '#019AA2',
    },
    {
      num: '03',
      title: 'MODEL TOPOLOGY',
      subtitle: 'Capacity Allocation',
      desc: 'Dense layers, GQA, sparse MoE routing',
      color: '#019AA2',
    },
    {
      num: '04',
      title: 'COMPRESSION',
      subtitle: 'Redundancy Removal',
      desc: 'Distillation, 4-bit quantization, structural pruning',
      color: '#d4af37',
    },
    {
      num: '05',
      title: 'PHYSICAL SILICON',
      subtitle: 'Hardware Bounds',
      desc: 'HBM bandwidth, SRAM cache, thermal envelope',
      color: '#F3F6F7',
    },
  ];

  return (
    <figure
      className={cn(
        'my-10 sm:my-14 rounded-[8px] bg-[#0E151B] border border-[#1C2830] overflow-hidden bl-tick-box w-full',
        className
      )}
      aria-label="Systems pipeline flowchart illustrating the journey from target task geometry to real-world useful capability"
    >
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-3 border-b border-[#1C2830] bg-[#0A0F14] text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-[2px] bg-[#019AA2]" />
          <span className="text-[#F3F6F7] font-semibold">
            VISUAL 05 // THE SYSTEMS OPTIMIZATION PIPELINE
          </span>
        </div>
        <span className="text-[11px] text-[#68747D] uppercase tracking-wider">
          END-TO-END STACK
        </span>
      </div>

      {/* Grid Pipeline */}
      <div className="p-4 sm:p-8 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 font-mono text-xs">
          {stages.map((st, i) => (
            <div
              key={st.num}
              className="p-3.5 rounded-[6px] bg-[#0A0F14] border border-[#1C2830] flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] text-[#68747D] pb-1.5 border-b border-[#1C2830]">
                  <span>STAGE {st.num}</span>
                  {i < 4 && <span className="text-[#019AA2] hidden md:inline">→</span>}
                </div>
                <div className="font-bold text-[#F3F6F7] text-xs pt-2">{st.title}</div>
                <div className="text-[11px] text-[#019AA2] pt-0.5">{st.subtitle}</div>
              </div>
              <div className="text-[10px] text-[#A8B3BA] font-sans pt-3 leading-tight">
                {st.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Synthesis Output Block */}
        <div className="p-4 rounded-[6px] bg-[#0A0F14] border border-[#019AA2]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#019AA2] animate-pulse" />
            <span className="text-[#F3F6F7] font-semibold">
              OUTPUT: REAL-WORLD USEFUL CAPABILITY
            </span>
          </div>
          <span className="text-[#019AA2] text-[11px]">
            MAXIMIZE UTILITY SUBJECT TO (VRAM ≤ M, LATENCY ≤ L, COST ≤ B)
          </span>
        </div>
      </div>

      {/* Caption footer */}
      <figcaption className="px-4 sm:px-6 py-3 border-t border-[#1C2830] bg-[#0A0F14] text-xs text-[#A8B3BA] leading-relaxed">
        <span className="font-mono text-[#019AA2] font-semibold mr-1">Holistic Stack:</span>
        Useful intelligence is not an intrinsic property of a raw weight file. It is the cumulative yield of this entire six-stage systems pipeline, where hardware limits and task constraints shape the optimal model geometry.
      </figcaption>
    </figure>
  );
};
