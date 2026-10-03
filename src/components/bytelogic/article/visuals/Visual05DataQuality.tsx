'use client';

import React from 'react';
import { ArrowDown, AlertTriangle, Filter, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Visual05DataQuality: React.FC<{ className?: string }> = ({ className }) => {
  const noiseFactors = [
    { label: 'Duplicates & Clones', desc: 'Zero incremental entropy, artificially weights prior modes' },
    { label: 'Incorrect / Noisy Labels', desc: 'Introduces contradictory supervisory gradients during optimization' },
    { label: 'Corrupted Payloads', desc: 'Artifacts, blank frames, invalid encodings, broken sensor streams' },
    { label: 'Irrelevant Out-of-Domain', desc: 'Data from tasks orthogonal to intended target distribution' },
    { label: 'Measurement & Systematic Bias', desc: 'Drift in calibration, temporal misalignment, skewed sampling' },
  ];

  return (
    <figure
      className={cn(
        'my-10 sm:my-14 rounded-[8px] bg-surface border border-line overflow-hidden bl-tick-box w-full max-w-2xl mx-auto',
        className
      )}
      aria-label="Pipeline illustrating data quality and noise degradation in large datasets"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-line bg-bg-2 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-[2px] bg-accent" />
          <span className="text-fg font-semibold">VISUAL 05 // THE DATA QUALITY PIPELINE</span>
        </div>
        <span className="text-[11px] text-fg-muted uppercase">NOISE DECAY</span>
      </div>

      <div className="p-5 sm:p-7 flex flex-col items-center">
        {/* Top Node: 10M Samples */}
        <div className="w-full max-w-md p-3 rounded-[6px] bg-[#05070A] border border-line text-center font-mono">
          <div className="text-[11px] text-fg-muted tracking-wider uppercase">RAW ACQUISITION</div>
          <div className="text-base sm:text-lg font-bold text-fg mt-0.5">
            10,000,000 Raw Samples
          </div>
          <div className="text-[11px] text-fg-soft mt-0.5">Apparent scale: 10x dataset expansion</div>
        </div>

        {/* Down connector */}
        <div className="flex flex-col items-center my-2 text-accent">
          <div className="w-[1.5px] h-5 bg-accent/50" />
          <ArrowDown className="w-3.5 h-3.5 -mt-1" />
        </div>

        {/* Middle Stage: DATA QUALITY ASSESSMENT */}
        <div className="w-full max-w-md p-3.5 rounded-[6px] bg-[#131C24] border border-accent/40 text-center font-mono relative">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-accent" />
            <span>DATA QUALITY & PURITY FILTER</span>
          </div>
        </div>

        {/* Branching Noise Factors */}
        <div className="w-full max-w-md my-4 pl-4 sm:pl-6 border-l-2 border-line space-y-2.5 font-mono text-xs">
          {noiseFactors.map((factor, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <span className="text-fg-muted font-mono mt-0.5">├──</span>
              <div className="flex-1">
                <span className="text-fg font-medium">{factor.label}</span>
                <p className="text-[11px] text-fg-muted font-sans leading-tight mt-0.5">
                  {factor.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Down connector */}
        <div className="flex flex-col items-center my-1 text-accent">
          <div className="w-[1.5px] h-5 bg-accent/50" />
          <ArrowDown className="w-3.5 h-3.5 -mt-1" />
        </div>

        {/* Output Node: Effective Informative Signal */}
        <div className="w-full max-w-md p-3 rounded-[6px] bg-[#05070A] border border-accent/40 text-center font-mono">
          <div className="text-[11px] text-accent tracking-wider uppercase font-semibold">
            TRUE INFORMATIVE SIGNAL
          </div>
          <div className="text-sm font-semibold text-fg mt-0.5">
            Fractional Effective Signal
          </div>
          <div className="text-[11px] text-fg-muted mt-0.5">
            Optimization burdened by elevated variance and gradient noise
          </div>
        </div>
      </div>

      {/* Synthesis footer callout */}
      <div className="px-4 sm:px-6 py-3.5 bg-bg-2 border-t border-line text-center">
        <p className="text-xs sm:text-sm font-mono font-semibold text-fg">
          More data <span className="text-accent">→</span> not necessarily more useful information
        </p>
      </div>

      {/* Caption footer */}
      <figcaption className="px-4 sm:px-6 py-2.5 border-t border-line bg-surface text-[11px] font-mono text-fg-muted text-center">
        <strong className="text-fg-soft">Figure 05:</strong> Raw sample scale vs effective informative throughput after noise filtration.
      </figcaption>
    </figure>
  );
};
