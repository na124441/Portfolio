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
          <span className="font-mono text-xs font-semibold tracking-wider text-accent px-2 py-0.5 border border-accent/30 bg-accent-soft">
            {number}
          </span>
        )}
        {tag && (
          <span className="font-mono text-xs uppercase tracking-widest text-fg-soft">
            {tag}
          </span>
        )}
        <div className="h-[1px] flex-1 bg-line" />
      </div>
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-fg">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-fg-soft max-w-2xl font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
