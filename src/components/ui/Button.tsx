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
  const baseStyles = 'inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none select-none rounded-none cursor-pointer';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-[11px] gap-1.5',
    md: 'px-5 py-2.5 text-xs gap-2',
    lg: 'px-7 py-3.5 text-sm gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-accent font-bold active:translate-y-[1px] text-accent-ink hover:bg-accent-hi tracking-wider',
    glass:
      'surface-raised text-fg hover:text-accent active:translate-y-[1px]',
    outline:
      'border border-line bg-transparent text-fg hover:border-accent/60 hover:text-accent active:translate-y-[1px]',
    secondary:
      'bg-surface-soft text-fg border border-line hover:bg-surface hover:border-line-hi active:translate-y-[1px]',
    ghost:
      'bg-transparent text-fg-soft hover:text-accent hover:bg-surface-soft active:translate-y-[1px]',
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
