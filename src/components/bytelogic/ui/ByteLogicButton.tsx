'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ByteLogicButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'lab';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  showArrow?: boolean;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export const ByteLogicButton: React.FC<ByteLogicButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  className,
  showArrow = false,
  icon,
  type = 'button',
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-mono font-medium transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed group';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 rounded-[4px] gap-1.5',
    md: 'text-xs tracking-wider px-4 py-2.5 rounded-[6px] gap-2',
    lg: 'text-sm tracking-wider px-6 py-3.5 rounded-[6px] gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-accent text-accent-ink hover:brightness-110 font-semibold active:translate-y-[1px]',
    secondary:
      'bg-[#132279] text-fg hover:bg-[#1a2f9e] border border-[#132279] active:translate-y-[1px]',
    outline:
      'bg-transparent text-fg border border-line hover:border-accent-line hover:text-accent hover:bg-surface',
    ghost:
      'bg-transparent text-fg-soft hover:text-fg hover:bg-surface',
    lab:
      'bg-surface text-accent border border-accent-line hover:border-accent hover:bg-accent-soft',
  };

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 shrink-0 text-current" />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
    >
      {content}
    </button>
  );
};
