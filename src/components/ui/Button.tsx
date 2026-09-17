import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost' | 'secondary' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  isExternal?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  variant = 'primary',
  size = 'md',
  isExternal = false,
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none select-none rounded-none cursor-pointer';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-[11px] gap-1.5',
    md: 'px-5 py-2.5 text-xs gap-2',
    lg: 'px-7 py-3.5 text-sm gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-gold font-bold active:translate-y-[1px] text-bg hover:bg-gold-light tracking-wider',
    glass:
      'glass-surface text-text hover:text-gold active:translate-y-[1px]',
    outline:
      'border border-white/20 bg-transparent text-text hover:border-gold/60 hover:text-gold active:translate-y-[1px]',
    secondary:
      'bg-white/10 text-text border border-white/10 hover:bg-white/15 hover:border-white/25 active:translate-y-[1px]',
    ghost:
      'bg-transparent text-white/70 hover:text-gold hover:bg-white/5 active:translate-y-[1px]',
  };

  const combinedClasses = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
