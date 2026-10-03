'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Visual03Redundancy: React.FC<{ className?: string }> = ({ className }) => {
  const [isMerged, setIsMerged] = useState(false);

  const repeatedList = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const distinctList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <figure
      className={cn(
        'my-10 sm:my-14 rounded-[8px] bg-surface border border-line overflow-hidden bl-tick-box w-full',
        className
      )}
      aria-label="Interactive demonstration of redundancy vs information coverage"
    >
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-3 border-b border-line bg-bg-2 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-[2px] bg-accent" />
          <span className="text-fg font-semibold">VISUAL 03 // REDUNDANCY & INFORMATION DENSITY</span>
        </div>
        <button
          onClick={() => setIsMerged(!isMerged)}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#131C24] border border-line hover:border-accent/40 text-fg-soft hover:text-fg transition-all cursor-pointer text-[11px]"
        >
          {isMerged ? <RotateCcw className="w-3 h-3 text-accent" /> : <Layers className="w-3 h-3 text-accent" />}
          <span>{isMerged ? 'Expand Sequence' : 'Simulate Entropy Collapse'}</span>
        </button>
      </div>

      <div className="p-4 sm:p-8 space-y-8">
        {/* Sequence A: 1 1 1 1 1 1 1 1 1 1 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-fg-soft flex items-center gap-2">
              <span className="text-fg-muted">01 //</span> REPETITIVE SEQUENCE (10 SAMPLES)
            </span>
            <span className="text-fg-muted text-[11px]">
              Unique States: <strong className="text-fg">1</strong>
            </span>
          </div>

          <div className="relative p-4 sm:p-6 rounded-[6px] bg-[#05070A] border border-line min-h-[90px] flex items-center justify-center overflow-hidden">
            <div className="flex items-center justify-center gap-2 sm:gap-3 w-full max-w-lg">
              {repeatedList.map((val, idx) => (
                <motion.div
                  key={idx}
                  layout
                  animate={
                    isMerged
                      ? {
                          x: (4.5 - idx) * 28,
                          opacity: idx === 4 ? 1 : 0.15,
                          scale: idx === 4 ? 1.15 : 0.9,
                        }
                      : { x: 0, opacity: 1, scale: 1 }
                  }
                  transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                  className={cn(
                    'w-9 h-11 sm:w-11 sm:h-13 rounded-[4px] border flex flex-col items-center justify-center font-mono font-bold text-sm sm:text-base transition-colors shadow-sm',
                    idx === 4 && isMerged
                      ? 'border-accent bg-accent/20 text-accent'
                      : 'border-line bg-surface text-fg-soft'
                  )}
                >
                  <span>{val}</span>
                  <span className="text-[8px] font-normal text-fg-muted mt-0.5">#{idx + 1}</span>
                </motion.div>
              ))}
            </div>

            {isMerged && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-2 text-[10px] font-mono text-accent tracking-wider uppercase"
              >
                10 duplicate observations collapse to a single point in state space
              </motion.div>
            )}
          </div>
        </div>

        {/* Sequence B: 0 1 2 3 4 5 6 7 8 9 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-accent flex items-center gap-2 font-medium">
              <span className="text-fg-muted">02 //</span> INFORMATIVE SEQUENCE (10 SAMPLES)
            </span>
            <span className="text-accent text-[11px]">
              Unique States: <strong className="text-accent">10 (100% Support)</strong>
            </span>
          </div>

          <div className="p-4 sm:p-6 rounded-[6px] bg-[#05070A] border border-accent/30 min-h-[90px] flex items-center justify-center overflow-x-auto bl-scrollbar">
            <div className="flex items-center justify-center gap-2 sm:gap-3 w-full max-w-lg">
              {distinctList.map((val, idx) => (
                <div
                  key={idx}
                  className="w-9 h-11 sm:w-11 sm:h-13 rounded-[4px] border border-accent/40 bg-surface flex flex-col items-center justify-center font-mono font-bold text-sm sm:text-base text-fg shadow-sm hover:border-accent transition-colors"
                >
                  <span className="text-accent">{val}</span>
                  <span className="text-[8px] font-normal text-fg-muted mt-0.5">#{idx + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Caption footer */}
      <figcaption className="px-4 sm:px-6 py-3 border-t border-line bg-bg-2 text-xs font-mono text-center">
        <span className="text-fg font-semibold">
          More examples are not necessarily more new information.
        </span>
        <span className="block sm:inline text-fg-muted sm:ml-2">
          Ten samples of state &lsquo;1&rsquo; yield negligible marginal entropy reduction compared to full partition coverage.
        </span>
      </figcaption>
    </figure>
  );
};
