'use client';

import React from 'react';
import { ArrowDown, Layers, Sparkles, Filter, Cpu, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Visual09InformationFunnel: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <figure
      className={cn(
        'my-12 sm:my-16 rounded-[8px] bg-surface border border-accent/50 overflow-hidden bl-tick-box w-full max-w-2xl mx-auto',
        className
      )}
      aria-label="The ByteLogic Information Funnel: Data to Information to Model to Performance"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-line bg-bg-2 text-xs font-mono">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-fg font-semibold tracking-wider">
            VISUAL 09 // THE INFORMATION FUNNEL (SIGNATURE)
          </span>
        </div>
        <span className="text-[10px] text-accent font-mono tracking-widest uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 rounded">
          BYTELOGIC CANONICAL
        </span>
      </div>

      <div className="p-6 sm:p-8 flex flex-col items-center">
        {/* Stage 1: DATA */}
        <div className="w-full max-w-md p-4 rounded-[6px] bg-[#05070A] border border-line relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-mono mb-2">
            <span className="text-fg-soft font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-fg-muted" />
              01 // RAW DATA
            </span>
            <span className="text-[10px] text-fg-muted">Volume / Samples</span>
          </div>

          {/* Point Matrix representing high volume & redundancy */}
          <div className="grid grid-cols-12 gap-1.5 py-1.5">
            {Array.from({ length: 48 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  'w-2 h-2 rounded-full mx-auto',
                  i % 5 === 0
                    ? 'bg-accent'
                    : i % 7 === 0
                    ? 'bg-[#ef4444]/60'
                    : 'bg-fg-muted/40'
                )}
              />
            ))}
          </div>
          <div className="mt-2 text-[10px] font-mono text-fg-muted flex justify-between">
            <span>● Informative</span>
            <span>● Noise / Error</span>
            <span>● Redundant</span>
          </div>
        </div>

        {/* Transition Down: Distillation */}
        <div className="flex flex-col items-center my-2 text-accent">
          <div className="text-[10px] font-mono text-accent tracking-wider uppercase bg-surface px-2 py-0.5 rounded border border-line z-10 -my-2">
            Uncertainty Reduction (Entropy)
          </div>
          <div className="w-[1.5px] h-7 bg-accent/50" />
          <ArrowDown className="w-3.5 h-3.5 -mt-1" />
        </div>

        {/* Stage 2: USEFUL INFORMATION */}
        <div className="w-full max-w-sm p-3.5 rounded-[6px] bg-[#131C24] border border-accent/60 relative text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold text-accent tracking-wider uppercase mb-1">
            <Filter className="w-3.5 h-3.5" />
            <span>02 // USEFUL INFORMATION</span>
          </div>
          <p className="text-[11px] font-sans text-fg">
            Non-redundant signals · Novel invariants · Distributional coverage
          </p>
        </div>

        {/* Transition Down */}
        <div className="flex flex-col items-center my-2 text-accent">
          <div className="w-[1.5px] h-5 bg-accent/50" />
          <ArrowDown className="w-3.5 h-3.5 -mt-1" />
        </div>

        {/* Stage 3: MODEL CAPACITY */}
        <div className="w-full max-w-xs p-3 rounded-[6px] bg-[#05070A] border border-line text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-semibold text-fg-soft uppercase tracking-wider mb-0.5">
            <Cpu className="w-3.5 h-3.5 text-fg-soft" />
            <span>03 // MODEL ARCHITECTURE</span>
          </div>
          <p className="text-[10px] font-mono text-fg-muted">
            Representation capacity &amp; inductive bias
          </p>
        </div>

        {/* Transition Down */}
        <div className="flex flex-col items-center my-2 text-accent">
          <div className="w-[1.5px] h-5 bg-accent/50" />
          <ArrowDown className="w-3.5 h-3.5 -mt-1" />
        </div>

        {/* Stage 4: GENERALIZED PERFORMANCE */}
        <div className="w-full max-w-[260px] p-3 rounded-[6px] bg-accent/15 border border-accent text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold text-accent uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>04 // TRUE GENERALIZATION</span>
          </div>
          <p className="text-[10px] font-mono text-fg mt-0.5">
            Robust operational deployment
          </p>
        </div>
      </div>

      {/* Synthesis footer callout */}
      <div className="px-6 py-5 bg-bg-2 border-t border-line text-center space-y-1">
        <p className="text-sm sm:text-base font-sans font-bold text-fg">
          The objective is not maximum data.
        </p>
        <p className="text-sm sm:text-base font-sans font-bold text-accent">
          The objective is useful information.
        </p>
      </div>

      {/* Caption footer */}
      <figcaption className="px-4 sm:px-6 py-2.5 border-t border-line bg-surface text-[11px] font-mono text-fg-muted text-center">
        <strong className="text-fg-soft">Figure 09:</strong> The ByteLogic Information Funnel: transforming uncurated volume into compressed mathematical understanding.
      </figcaption>
    </figure>
  );
};
