import React from 'react';
import { cn } from '@/lib/utils';

export interface MetricCardProps {
  label: string;
  value: string;
  subtext?: string;
  highlight?: boolean;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  subtext,
  highlight = false,
  className,
}) => {
  return (
    <div
      className={cn(
        'p-5 transition-all duration-200 glass-panel relative overflow-hidden group',
        highlight
          ? 'border-[#d4af37]/45 hover:border-[#d4af37] shadow-[0_0_24px_rgba(212,175,55,0.1)]'
          : 'hover:border-white/20',
        className
      )}
    >
      {highlight && (
        <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#d4af37] shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
      )}
      <div className="text-[11px] font-mono uppercase tracking-widest text-white/50 mb-2 flex items-center justify-between">
        <span>{label}</span>
        {highlight && (
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/80 group-hover:bg-[#dfb15b] transition-colors" />
        )}
      </div>
      <div
        className={cn(
          'font-mono text-3xl sm:text-4xl font-semibold tracking-tight tabular-nums',
          highlight ? 'text-metallic-gold' : 'text-[#feffff]'
        )}
      >
        {value}
      </div>
      {subtext && (
        <div className="text-xs text-white/60 font-mono mt-2.5 flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-[#d4af37]/60 inline-block" />
          <span>{subtext}</span>
        </div>
      )}
    </div>
  );
};
