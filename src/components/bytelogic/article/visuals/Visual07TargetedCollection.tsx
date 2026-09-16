'use client';

import React from 'react';
import { Check, X, ArrowRight, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Visual07TargetedCollection: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <figure
      className={cn(
        'my-10 sm:my-14 rounded-[8px] bg-[#0E151B] border border-[#1C2830] overflow-hidden bl-tick-box w-full',
        className
      )}
      aria-label="Before and after comparison of targeted data collection addressing failure regions"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[#1C2830] bg-[#0A0F14] text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-[2px] bg-[#019AA2]" />
          <span className="text-[#F3F6F7] font-semibold">VISUAL 07 // TARGETED UNCERTAINTY INTERVENTION</span>
        </div>
        <span className="text-[11px] text-[#68747D] uppercase">BEFORE VS. AFTER</span>
      </div>

      <div className="p-4 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Before Panel */}
        <div className="p-5 rounded-[6px] bg-[#05070A] border border-[#1C2830] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1C2830] text-xs font-mono">
              <span className="text-[#A8B3BA] font-semibold uppercase tracking-wider">
                BEFORE // UNTARGETED BULK SAMPLING
              </span>
              <span className="text-[10px] text-[#68747D] bg-[#131C24] px-1.5 py-0.5 rounded">
                +1,000,000 General
              </span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              {/* Common cases */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[#A8B3BA]">
                  <span>Common cases (Daylight, Standard):</span>
                  <span className="text-[#10b981] font-semibold">Robust</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded bg-[#0E151B] border border-[#1C2830]">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded bg-[#10b981]/15 border border-[#10b981]/40 flex items-center justify-center text-[#10b981]"
                    >
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Rare cases */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[#A8B3BA]">
                  <span>Rare cases (Occlusion, Night, Fog):</span>
                  <span className="text-[#ef4444] font-semibold">Failing</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded bg-[#0E151B] border border-[#1C2830]">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded bg-[#ef4444]/15 border border-[#ef4444]/40 flex items-center justify-center text-[#ef4444]"
                    >
                      <X className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-[#1C2830] text-[11px] font-mono text-[#68747D]">
            Diagnosing: Adding another million common examples will not resolve the rare failures.
          </div>
        </div>

        {/* After Panel */}
        <div className="p-5 rounded-[6px] bg-[#05070A] border border-[#019AA2]/40 flex flex-col justify-between relative shadow-[0_0_20px_rgba(1,154,162,0.06)]">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1C2830] text-xs font-mono">
              <span className="text-[#019AA2] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-[#019AA2]" />
                AFTER // TARGETED ERROR SAMPLING
              </span>
              <span className="text-[10px] text-[#019AA2] bg-[#019AA2]/15 px-1.5 py-0.5 rounded border border-[#019AA2]/30">
                +1,000 Targeted
              </span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              {/* Common cases */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[#A8B3BA]">
                  <span>Common cases (Maintained):</span>
                  <span className="text-[#10b981] font-semibold">Preserved</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded bg-[#0E151B] border border-[#1C2830]">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded bg-[#10b981]/15 border border-[#10b981]/40 flex items-center justify-center text-[#10b981]"
                    >
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Rare cases resolved */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[#A8B3BA]">
                  <span>Rare cases (Deliberately Sampled):</span>
                  <span className="text-[#019AA2] font-semibold">Resolved</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded bg-[#0E151B] border border-[#019AA2]/30">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded bg-[#019AA2]/20 border border-[#019AA2]/50 flex items-center justify-center text-[#019AA2]"
                    >
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-[#1C2830] text-[11px] font-mono text-[#019AA2]">
            Result: Targeted acquisition directly eliminates the model&apos;s high-uncertainty regions.
          </div>
        </div>
      </div>

      {/* Synthesis footer callout */}
      <div className="px-4 sm:px-6 py-3.5 bg-[#0A0F14] border-t border-[#1C2830] text-center font-mono text-xs sm:text-sm font-semibold text-[#F3F6F7]">
        The next useful example may be more valuable than the next million ordinary examples.
      </div>

      {/* Caption footer */}
      <figcaption className="px-4 sm:px-6 py-2.5 border-t border-[#1C2830] bg-[#0E151B] text-[11px] font-mono text-[#68747D] text-center">
        <strong className="text-[#A8B3BA]">Figure 07:</strong> Error-directed curation vs volume-based ingestion. Deliberate sampling targets specific failure modes rather than accumulating redundant positives.
      </figcaption>
    </figure>
  );
};
