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
            : 'bg-[#010a0b]/80 backdrop-blur-md border-white/10 py-4'
        )}
      >
        <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto flex items-center justify-between">
          {/* Monogram / Title */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37]"
          >
            <div className="w-6 h-6 border border-[#d4af37]/60 flex items-center justify-center bg-[#d4af37]/10 group-hover:bg-[#d4af37] transition-all shadow-[0_0_12px_rgba(212,175,55,0.2)]">
              <span className="font-mono text-[11px] font-bold text-[#dfb15b] group-hover:text-[#010a0b] transition-colors">
                NS
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold tracking-tight text-[#feffff]">
                {PORTFOLIO_METADATA.name}
              </span>
              <span className="font-mono text-[10px] text-white/50 tracking-wider hidden sm:block">
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
                  'font-mono text-xs uppercase tracking-widest transition-colors relative py-1 focus-visible:outline-none focus-visible:text-[#dfb15b]',
                  isActive(link.href)
                    ? 'text-[#dfb15b]'
                    : 'text-white/70 hover:text-[#dfb15b]'
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#d4af37]" />
                )}
              </Link>
            ))}
          </nav>

          {/* Nav Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Command Palette Trigger */}
            <button
              onClick={() => setCommandPaletteOpen(true)}
              className="flex items-center gap-2 px-2.5 py-1.5 border border-white/15 bg-white/[0.03] hover:border-[#d4af37]/50 hover:bg-white/[0.06] text-[11px] font-mono text-white/70 hover:text-white transition-all cursor-pointer"
              aria-label="Open command palette (Press Cmd+K)"
            >
              <Search className="w-3.5 h-3.5 text-[#dfb15b]" />
              <span>Search...</span>
              <kbd className="px-1.5 py-0.5 text-[9px] bg-white/5 border border-white/15 text-white/50">
                ⌘K
              </kbd>
            </button>

            <Link
              href="/now"
              className="px-3 py-1 border border-white/15 bg-white/[0.03] hover:border-[#f6d009]/40 hover:text-[#f6d009] backdrop-blur-sm text-[11px] font-mono text-white/80 transition-colors flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
              Now
            </Link>
            <a
              href={PORTFOLIO_METADATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-white/70 hover:text-[#f6d009] flex items-center gap-1 transition-colors"
            >
              GitHub
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-1">
            <button
              onClick={() => setCommandPaletteOpen(true)}
              className="p-2 text-white/80 hover:text-[#dfb15b]"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-[#dfb15b]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden p-2 text-white/80 hover:text-[#dfb15b] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#010a0b] border-b border-white/10 px-4 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150">
            {/* Quick search button in drawer */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setCommandPaletteOpen(true);
              }}
              className="w-full flex items-center justify-between p-2.5 bg-white/[0.03] border border-white/15 text-xs font-mono text-white/70 mb-2"
            >
              <div className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-[#dfb15b]" />
                <span>Search Hub...</span>
              </div>
              <span className="text-[10px] text-[#dfb15b] border border-[#d4af37]/30 px-1 py-0.5">
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
                      ? 'text-[#dfb15b]'
                      : 'text-white/80 hover:text-[#dfb15b]'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/now"
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm uppercase tracking-wider text-white/80 hover:text-[#dfb15b] py-1"
              >
                Now
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm uppercase tracking-wider text-white/80 hover:text-[#dfb15b] py-1"
              >
                Contact
              </Link>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                <span>Building & Learning</span>
              </div>
              <a
                href={PORTFOLIO_METADATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dfb15b] flex items-center gap-1"
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
