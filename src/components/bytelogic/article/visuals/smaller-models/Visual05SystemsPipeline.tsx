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
      color: 'var(--fg-muted)',
    },
    {
      num: '02',
      title: 'DATA DENSITY',
      subtitle: 'Signal-to-Noise Ratio',
      desc: 'Synthetic textbooks & curated deduplication',
      color: 'var(--accent)',
    },
    {
      num: '03',
      title: 'MODEL TOPOLOGY',
      subtitle: 'Capacity Allocation',
      desc: 'Dense layers, GQA, sparse MoE routing',
      color: 'var(--accent)',
    },
    {
      num: '04',
      title: 'COMPRESSION',
      subtitle: 'Redundancy Removal',
      desc: 'Distillation, 4-bit quantization, structural pruning',
      color: 'var(--accent)',
    },
    {
      num: '05',
      title: 'PHYSICAL SILICON',
      subtitle: 'Hardware Bounds',
      desc: 'HBM bandwidth, SRAM cache, thermal envelope',
      color: 'var(--fg)',
    },
  ];

  return (
    <figure
      className={cn(
        'my-10 sm:my-14 rounded-[8px] bg-surface border border-line overflow-hidden bl-tick-box w-full',
        className
      )}
      aria-label="Systems pipeline flowchart illustrating the journey from target task geometry to real-world useful capability"
    >
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-3 border-b border-line bg-bg-2 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-[2px] bg-accent" />
          <span className="text-fg font-semibold">
            VISUAL 05 // THE SYSTEMS OPTIMIZATION PIPELINE
          </span>
        </div>
        <span className="text-[11px] text-fg-muted uppercase tracking-wider">
          END-TO-END STACK
        </span>
      </div>

      {/* Grid Pipeline */}
      <div className="p-4 sm:p-8 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 font-mono text-xs">
          {stages.map((st, i) => (
            <div
              key={st.num}
              className="p-3.5 rounded-[6px] bg-bg-2 border border-line flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] text-fg-muted pb-1.5 border-b border-line">
                  <span>STAGE {st.num}</span>
                  {i < 4 && <span className="text-accent hidden md:inline">→</span>}
                </div>
                <div className="font-bold text-fg text-xs pt-2">{st.title}</div>
                <div className="text-[11px] text-accent pt-0.5">{st.subtitle}</div>
              </div>
              <div className="text-[10px] text-fg-soft font-sans pt-3 leading-tight">
                {st.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Synthesis Output Block */}
        <div className="p-4 rounded-[6px] bg-bg-2 border border-accent/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-fg font-semibold">
              OUTPUT: REAL-WORLD USEFUL CAPABILITY
            </span>
          </div>
          <span className="text-accent text-[11px]">
            MAXIMIZE UTILITY SUBJECT TO (VRAM ≤ M, LATENCY ≤ L, COST ≤ B)
          </span>
        </div>
      </div>

      {/* Caption footer */}
      <figcaption className="px-4 sm:px-6 py-3 border-t border-line bg-bg-2 text-xs text-fg-soft leading-relaxed">
        <span className="font-mono text-accent font-semibold mr-1">Holistic Stack:</span>
        Useful intelligence is not an intrinsic property of a raw weight file. It is the cumulative yield of this entire six-stage systems pipeline, where hardware limits and task constraints shape the optimal model geometry.
      </figcaption>
    </figure>
  );
};
