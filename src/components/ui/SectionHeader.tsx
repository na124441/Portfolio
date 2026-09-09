import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeaderProps {
  number?: string;
  title: string;
  subtitle?: string;
  tag?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  subtitle,
  tag,
  className,
}) => {
  return (
    <div className={cn('mb-10 sm:mb-14', className)}>
      <div className="flex items-center gap-3 mb-2">
        {number && (
          <span className="font-mono text-xs font-semibold tracking-wider text-[#dfb15b] px-1.5 py-0.5 border border-[#d4af37]/40 bg-[#d4af37]/10 shadow-[0_0_8px_rgba(212,175,55,0.1)]">
            {number}
          </span>
        )}
        {tag && (
          <span className="font-mono text-xs uppercase tracking-widest text-white/50">
            {tag}
          </span>
        )}
        <div className="h-[1px] flex-1 bg-white/10" />
      </div>
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#feffff]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
