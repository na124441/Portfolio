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
        'my-10 sm:my-14 py-6 sm:py-8 px-6 sm:px-10 border-l-2 border-accent bg-gradient-to-r from-accent/[0.06] to-transparent rounded-r-[6px] relative',
        className
      )}
    >
      <div className="text-[10px] font-mono tracking-widest text-accent uppercase mb-2 flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-accent inline-block" />
        <span>CORE THESIS</span>
      </div>
      <blockquote className="text-xl sm:text-2xl md:text-[1.7rem] font-sans font-medium text-fg leading-snug tracking-tight text-balance">
        &ldquo;{quote}&rdquo;
      </blockquote>
      {attribution && (
        <figcaption className="mt-3 text-xs font-mono text-fg-muted tracking-wide">
          — {attribution}
        </figcaption>
      )}
    </figure>
  );
};
