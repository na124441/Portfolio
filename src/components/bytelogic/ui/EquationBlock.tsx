'use client';

import React, { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { cn } from '@/lib/utils';

export interface EquationBlockProps {
  math: string;
  label?: string;
  title?: string;
  explanation?: string;
  inline?: boolean;
  className?: string;
  annotations?: { symbol: string; meaning: string }[];
}

export const EquationBlock: React.FC<EquationBlockProps> = ({
  math,
  label,
  title,
  explanation,
  inline = false,
  className,
  annotations,
}) => {
  const renderedHtml = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: !inline,
        throwOnError: false,
      });
    } catch {
      return math;
    }
  }, [math, inline]);

  if (inline) {
    return (
      <span
        className={cn('inline-block font-mono text-[#F3F6F7] align-middle', className)}
        dangerouslySetInnerHTML={{ __html: renderedHtml }}
      />
    );
  }

  return (
    <div
      className={cn(
        'my-5 sm:my-6 p-3.5 sm:p-5 rounded-[6px] bg-[#0E151B] border border-[#1C2830] transition-colors hover:border-[#1C2830]/80 bl-tick-box min-w-0 w-full max-w-full overflow-hidden',
        className
      )}
    >
      {/* Header with Title and Label (e.g. 01 / OBJECTIVE FUNCTION) */}
      {(title || label) && (
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-2.5 sm:pb-3 sm:mb-3 border-b border-[#1C2830] text-xs font-mono">
          {title && (
            <span className="text-[#A8B3BA] uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#019AA2] shrink-0" />
              <span>{title}</span>
            </span>
          )}
          {label && (
            <span className="text-[#68747D] tabular-nums tracking-widest font-medium">
              [{label}]
            </span>
          )}
        </div>
      )}

      {/* Math Formula Rendered by KaTeX */}
      <div
        className="w-full max-w-full overflow-x-auto py-2 sm:py-2.5 text-center text-[#F3F6F7] bl-scrollbar [touch-action:pan-x]"
        dangerouslySetInnerHTML={{ __html: renderedHtml }}
      />

      {/* Mathematical Explanation / Intuition */}
      {explanation && (
        <p className="mt-3 text-xs sm:text-sm text-[#A8B3BA] leading-relaxed font-sans border-t border-[#1C2830]/60 pt-3">
          {explanation}
        </p>
      )}

      {/* Symbol Breakdown / Variable Annotations */}
      {annotations && annotations.length > 0 && (
        <div className="mt-4 pt-3 border-t border-[#1C2830]/60 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 min-w-0">
          {annotations.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs font-mono">
              <span className="text-[#019AA2] font-semibold shrink-0">{item.symbol}:</span>
              <span className="text-[#68747D] leading-tight break-words">{item.meaning}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
