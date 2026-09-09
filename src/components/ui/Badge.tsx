import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'gold' | 'outline' | 'muted';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className,
}) => {
  const base = 'inline-flex items-center font-mono uppercase tracking-wider select-none';
  
  const sizes = {
    sm: 'text-[10px] px-2 py-0.5',
    md: 'text-[11px] px-2.5 py-1',
  };

  const variants = {
    default: 'bg-white/[0.04] text-white/80 border border-white/10',
    gold: 'bg-[#d4af37]/10 text-[#dfb15b] border border-[#d4af37]/40 shadow-[0_0_10px_rgba(212,175,55,0.12)]',
    outline: 'bg-transparent text-white/60 border border-white/15',
    muted: 'bg-white/[0.02] text-white/40 border border-white/5',
  };

  return (
    <span className={cn(base, sizes[size], variants[variant], className)}>
      {children}
    </span>
  );
};
