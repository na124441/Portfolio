'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ArticlePullQuoteProps {
  quote: string;
  attribution?: string;
  className?: string;
}

export const ArticlePullQuote: React.FC<ArticlePullQuoteProps> = ({
  quote,
  attribution,
  className,
}) => {
  return (
    <figure
      className={cn(
        'my-10 sm:my-14 py-6 sm:py-8 px-6 sm:px-10 border-l-2 border-[#019AA2] bg-gradient-to-r from-[#019AA2]/[0.06] to-transparent rounded-r-[6px] relative',
        className
      )}
    >
      <div className="text-[10px] font-mono tracking-widest text-[#019AA2] uppercase mb-2 flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-[#019AA2] inline-block" />
        <span>CORE THESIS</span>
      </div>
      <blockquote className="text-xl sm:text-2xl md:text-[1.7rem] font-sans font-medium text-[#F3F6F7] leading-snug tracking-tight text-balance">
        &ldquo;{quote}&rdquo;
      </blockquote>
      {attribution && (
        <figcaption className="mt-3 text-xs font-mono text-[#68747D] tracking-wide">
          — {attribution}
        </figcaption>
      )}
    </figure>
  );
};
