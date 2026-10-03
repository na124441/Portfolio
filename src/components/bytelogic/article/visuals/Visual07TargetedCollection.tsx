'use client';

import React from 'react';
import { Check, X, ArrowRight, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Visual07TargetedCollection: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <figure
      className={cn(
        'my-10 sm:my-14 rounded-[8px] bg-surface border border-line overflow-hidden bl-tick-box w-full',
        className
      )}
      aria-label="Before and after comparison of targeted data collection addressing failure regions"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-line bg-bg-2 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-[2px] bg-accent" />
          <span className="text-fg font-semibold">VISUAL 07 // TARGETED UNCERTAINTY INTERVENTION</span>
        </div>
        <span className="text-[11px] text-fg-muted uppercase">BEFORE VS. AFTER</span>
      </div>

      <div className="p-4 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Before Panel */}
        <div className="p-5 rounded-[6px] bg-[#05070A] border border-line flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-line text-xs font-mono">
              <span className="text-fg-soft font-semibold uppercase tracking-wider">
                BEFORE // UNTARGETED BULK SAMPLING
              </span>
              <span className="text-[10px] text-fg-muted bg-[#131C24] px-1.5 py-0.5 rounded">
                +1,000,000 General
              </span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              {/* Common cases */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-fg-soft">
                  <span>Common cases (Daylight, Standard):</span>
                  <span className="text-[#10b981] font-semibold">Robust</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded bg-surface border border-line">
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
                <div className="flex items-center justify-between text-fg-soft">
                  <span>Rare cases (Occlusion, Night, Fog):</span>
                  <span className="text-[#ef4444] font-semibold">Failing</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded bg-surface border border-line">
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

          <div className="mt-5 pt-3 border-t border-line text-[11px] font-mono text-fg-muted">
            Diagnosing: Adding another million common examples will not resolve the rare failures.
          </div>
        </div>

        {/* After Panel */}
        <div className="p-5 rounded-[6px] bg-[#05070A] border border-accent/40 flex flex-col justify-between relative">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-line text-xs font-mono">
              <span className="text-accent font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-accent" />
                AFTER // TARGETED ERROR SAMPLING
              </span>
              <span className="text-[10px] text-accent bg-accent/15 px-1.5 py-0.5 rounded border border-accent/30">
                +1,000 Targeted
              </span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              {/* Common cases */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-fg-soft">
                  <span>Common cases (Maintained):</span>
                  <span className="text-[#10b981] font-semibold">Preserved</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded bg-surface border border-line">
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
                <div className="flex items-center justify-between text-fg-soft">
                  <span>Rare cases (Deliberately Sampled):</span>
                  <span className="text-accent font-semibold">Resolved</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded bg-surface border border-accent/30">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded bg-accent/20 border border-accent/50 flex items-center justify-center text-accent"
                    >
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-line text-[11px] font-mono text-accent">
            Result: Targeted acquisition directly eliminates the model&apos;s high-uncertainty regions.
          </div>
        </div>
      </div>

      {/* Synthesis footer callout */}
      <div className="px-4 sm:px-6 py-3.5 bg-bg-2 border-t border-line text-center font-mono text-xs sm:text-sm font-semibold text-fg">
        The next useful example may be more valuable than the next million ordinary examples.
      </div>

      {/* Caption footer */}
      <figcaption className="px-4 sm:px-6 py-2.5 border-t border-line bg-surface text-[11px] font-mono text-fg-muted text-center">
        <strong className="text-fg-soft">Figure 07:</strong> Error-directed curation vs volume-based ingestion. Deliberate sampling targets specific failure modes rather than accumulating redundant positives.
      </figcaption>
    </figure>
  );
};
