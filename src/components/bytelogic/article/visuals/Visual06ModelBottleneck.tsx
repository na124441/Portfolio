'use client';

import React from 'react';
import { ArrowDown, Cpu, Gauge } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Visual06ModelBottleneck: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <figure
      className={cn(
        'my-10 sm:my-14 rounded-[8px] bg-[#0E151B] border border-[#1C2830] overflow-hidden bl-tick-box w-full max-w-2xl mx-auto',
        className
      )}
      aria-label="Diagram showing the model capacity bottleneck constraining performance despite large data volume"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[#1C2830] bg-[#0A0F14] text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-[2px] bg-[#019AA2]" />
          <span className="text-[#F3F6F7] font-semibold">VISUAL 06 // THE ARCHITECTURAL BOTTLENECK</span>
        </div>
        <span className="text-[11px] text-[#68747D] uppercase">CAPACITY BOUNDS</span>
      </div>

      <div className="p-5 sm:p-8 flex flex-col items-center">
        {/* Top: Massive Data Volume Band */}
        <div className="w-full max-w-lg space-y-1.5 font-mono">
          <div className="flex items-center justify-between text-xs text-[#A8B3BA]">
            <span className="font-semibold text-[#F3F6F7]">DATA INGESTION VOLUME</span>
            <span className="text-[11px] text-[#019AA2]">Massive Sample Stream</span>
          </div>
          {/* Broad Data Strip */}
          <div className="h-10 w-full rounded-[4px] bg-gradient-to-r from-[#019AA2]/30 via-[#019AA2]/60 to-[#019AA2]/30 border border-[#019AA2]/60 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_8px,rgba(255,255,255,0.06)_8px,rgba(255,255,255,0.06)_16px)]" />
            <span className="relative z-10 text-xs font-mono font-bold text-[#F3F6F7] tracking-wider uppercase">
              Abundant Training Examples (D &gt;&gt; N)
            </span>
          </div>
        </div>

        {/* Funnel / Downward constriction */}
        <div className="relative my-2 w-full max-w-lg flex flex-col items-center">
          <svg viewBox="0 0 320 60" className="w-full max-w-xs h-12 overflow-visible">
            {/* Funnel convergence lines */}
            <line x1="20" y1="0" x2="110" y2="55" stroke="#1C2830" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="300" y1="0" x2="210" y2="55" stroke="#1C2830" strokeWidth="2" strokeDasharray="3 3" />
            <polygon points="156,50 160,58 164,50" fill="#019AA2" />
          </svg>
        </div>

        {/* Middle: MODEL BOTTLENECK BOX */}
        <div className="w-full max-w-sm p-4 sm:p-5 rounded-[6px] bg-[#05070A] border-2 border-[#019AA2] text-center font-mono relative">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#019AA2] uppercase tracking-wider mb-1">
            <Cpu className="w-4 h-4 text-[#019AA2]" />
            <span>MODEL CAPACITY BOTTLENECK</span>
          </div>
          <p className="text-[11px] text-[#A8B3BA] font-sans leading-relaxed">
            Representational capacity · Inductive bias · Parameter count · Architecture suitability
          </p>
          <div className="mt-2.5 pt-2 border-t border-[#1C2830] text-[10px] text-[#68747D] uppercase tracking-widest">
            Cannot absorb additional pattern complexity
          </div>
        </div>

        {/* Downward narrow flow */}
        <div className="flex flex-col items-center my-2 text-[#68747D]">
          <div className="w-[1.5px] h-6 bg-[#1C2830]" />
          <ArrowDown className="w-3.5 h-3.5 -mt-1 text-[#68747D]" />
        </div>

        {/* Bottom: Constrained Performance Output */}
        <div className="w-full max-w-xs space-y-1.5 font-mono text-center">
          <div className="text-xs text-[#A8B3BA] flex items-center justify-center gap-1.5">
            <Gauge className="w-3.5 h-3.5 text-[#A8B3BA]" />
            <span className="font-semibold text-[#F3F6F7]">CONSTRAINED PERFORMANCE</span>
          </div>
          <div className="h-8 w-full rounded-[4px] bg-[#0E151B] border border-[#1C2830] flex items-center justify-center">
            <span className="text-xs font-mono text-[#A8B3BA]">
              Plateau Ceiling (Marginal Gain ≈ 0)
            </span>
          </div>
        </div>
      </div>

      {/* Synthesis footer callout */}
      <div className="px-4 sm:px-6 py-3.5 bg-[#0A0F14] border-t border-[#1C2830] text-center font-mono text-xs sm:text-sm font-semibold text-[#F3F6F7]">
        The limiting factor can move from the dataset to the model.
      </div>

      {/* Caption footer */}
      <figcaption className="px-4 sm:px-6 py-2.5 border-t border-[#1C2830] bg-[#0E151B] text-[11px] font-mono text-[#68747D] text-center">
        <strong className="text-[#A8B3BA]">Figure 06:</strong> When model capacity is saturated, additional data throughput cannot be transformed into predictive performance.
      </figcaption>
    </figure>
  );
};
