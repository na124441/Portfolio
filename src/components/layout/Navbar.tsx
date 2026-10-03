'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PORTFOLIO_METADATA } from '@/data/portfolio';
import { Menu, X, ArrowUpRight, Search } from 'lucide-react';
import { CommandPalette } from '@/components/ui/CommandPalette';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global ⌘K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Work', href: '/work' },
    { label: 'Lab', href: '/lab' },
    { label: 'Learn', href: '/bytelogic' },
    { label: 'Build', href: '/build' },
    { label: 'Writing', href: '/writing' },
    { label: 'About', href: '/about' },
  ];

  const isActive = (href: string) => {
    if (href === '/bytelogic') return pathname.startsWith('/bytelogic');
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b',
          isScrolled
            ? 'glass-panel py-3 shadow-[0_8px_32px_rgba(0,0,0,0.8)]'
            : 'bg-bg/80 backdrop-blur-md border-line py-4'
        )}
      >
        <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto flex items-center justify-between">
          {/* Monogram / Title */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
          >
            <div className="w-6 h-6 border border-accent/60 flex items-center justify-center bg-accent-soft group-hover:bg-accent transition-all shadow-[0_0_12px_var(--accent-glow)]">
              <span className="font-mono text-[11px] font-bold text-accent group-hover:text-accent-ink transition-colors">
                NS
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold tracking-tight text-fg">
                {PORTFOLIO_METADATA.name}
              </span>
              <span className="font-mono text-[10px] text-fg-muted tracking-wider hidden sm:block">
                {PORTFOLIO_METADATA.role}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'font-mono text-xs uppercase tracking-widest transition-colors relative py-1 focus-visible:outline-none focus-visible:text-accent',
                  isActive(link.href)
                    ? 'text-accent'
                    : 'text-fg-soft hover:text-accent'
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-accent" />
                )}
              </Link>
            ))}
          </nav>

          {/* Nav Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Command Palette Trigger */}
            <button
              onClick={() => setCommandPaletteOpen(true)}
              className="flex items-center gap-2 px-2.5 py-1.5 border border-line bg-surface-soft hover:border-accent/50 hover:bg-surface text-[11px] font-mono text-fg-soft hover:text-fg transition-all cursor-pointer"
              aria-label="Open command palette (Press Cmd+K)"
            >
              <Search className="w-3.5 h-3.5 text-accent" />
              <span>Search...</span>
              <kbd className="px-1.5 py-0.5 text-[9px] bg-surface-soft border border-line text-fg-muted">
                ⌘K
              </kbd>
            </button>

            <Link
              href="/now"
              className="px-3 py-1 border border-line bg-surface-soft hover:border-accent/40 hover:text-accent backdrop-blur-sm text-[11px] font-mono text-fg-soft transition-colors flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
              Now
            </Link>
            <a
              href={PORTFOLIO_METADATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-fg-soft hover:text-accent flex items-center gap-1 transition-colors"
            >
              GitHub
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-1">
            <button
              onClick={() => setCommandPaletteOpen(true)}
              className="p-2 text-fg-soft hover:text-accent"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-accent" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden p-2 text-fg-soft hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-bg border-b border-line px-4 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150">
            {/* Quick search button in drawer */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setCommandPaletteOpen(true);
              }}
              className="w-full flex items-center justify-between p-2.5 bg-surface-soft border border-line text-xs font-mono text-fg-soft mb-2"
            >
              <div className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-accent" />
                <span>Search Hub...</span>
              </div>
              <span className="text-[10px] text-accent border border-accent/30 px-1 py-0.5">
                ⌘K
              </span>
            </button>

            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'font-mono text-sm uppercase tracking-wider py-1',
                    isActive(link.href)
                      ? 'text-accent'
                      : 'text-fg-soft hover:text-accent'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/now"
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm uppercase tracking-wider text-fg-soft hover:text-accent py-1"
              >
                Now
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm uppercase tracking-wider text-fg-soft hover:text-accent py-1"
              >
                Contact
              </Link>
            </div>

            <div className="pt-4 border-t border-line flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-fg-soft">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                <span>Building & Learning</span>
              </div>
              <a
                href={PORTFOLIO_METADATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent flex items-center gap-1"
              >
                GitHub <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </>
  );
};
