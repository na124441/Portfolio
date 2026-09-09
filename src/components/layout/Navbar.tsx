'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PORTFOLIO_METADATA } from '@/data/portfolio';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Now', href: '/#now' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Philosophy', href: '/#philosophy' },
    { label: 'Journey', href: '/#journey' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b',
        isScrolled
          ? 'glass-panel py-3 shadow-[0_8px_32px_rgba(0,0,0,0.8)]'
          : 'bg-[#010a0b]/80 backdrop-blur-md border-white/10 py-4'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
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
              className="font-mono text-xs uppercase tracking-widest text-white/70 hover:text-[#dfb15b] transition-colors relative py-1 focus-visible:outline-none focus-visible:text-[#dfb15b]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Nav Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={PORTFOLIO_METADATA.resumeUrl}
            className="px-3 py-1 border border-white/15 bg-white/[0.03] hover:border-[#f6d009]/40 hover:text-[#f6d009] backdrop-blur-sm text-[11px] font-mono text-white/80 transition-colors"
          >
            Resume / CV
          </a>
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

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 text-white/80 hover:text-[#dfb15b] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37]"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#010a0b] border-b border-white/10 px-4 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm uppercase tracking-wider text-white/80 hover:text-[#dfb15b] py-1"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              <span>Available for hire</span>
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
  );
};
