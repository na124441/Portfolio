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
    default: 'bg-surface-soft text-fg-soft border border-line',
    gold: 'bg-accent-soft text-accent border border-accent/40',
    outline: 'bg-transparent text-fg-soft border border-line',
    muted: 'bg-surface-soft text-fg-muted border border-line',
  };

  return (
    <span className={cn(base, sizes[size], variants[variant], className)}>
      {children}
    </span>
  );
};
