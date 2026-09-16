'use client';

import React from 'react';
import { EquationBlock } from '@/components/bytelogic/ui/EquationBlock';
import { cn } from '@/lib/utils';

interface ArticleMathCalloutProps {
  className?: string;
}

export const ArticleMathCallout: React.FC<ArticleMathCalloutProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'my-8 p-4 sm:p-5 rounded-[6px] bg-[#0E151B] border border-[#1C2830] bl-tick-box max-w-xl mx-auto',
        className
      )}
    >
      <div className="flex items-center justify-between text-[11px] font-mono text-[#68747D] pb-2 mb-2 border-b border-[#1C2830]">
        <span className="text-[#019AA2] tracking-wider uppercase flex items-center gap-1.5 font-medium">
          <span className="w-1.5 h-1.5 bg-[#019AA2]" />
          MATHEMATICAL INTUITION
        </span>
        <span className="text-[#A8B3BA] tabular-nums">[EQ-01]</span>
      </div>

      <div className="py-2 text-center">
        <EquationBlock
          math="\text{Performance} = P(D) \implies \lim_{D \to \infty} \frac{dP}{dD} = 0"
          className="my-0 border-0 bg-transparent p-0"
        />
      </div>

      <p className="mt-3 text-xs sm:text-[13px] text-[#A8B3BA] leading-relaxed font-sans border-t border-[#1C2830]/60 pt-2.5 text-center">
        As useful data increases, the marginal improvement in performance can decrease.
      </p>
    </div>
  );
};
