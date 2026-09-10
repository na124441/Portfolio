'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { ByteLogicSearchModal } from '@/components/bytelogic/search/ByteLogicSearchModal';
import { cn } from '@/lib/utils';

export const ByteLogicNavbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Background scroll lock when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Global ⌘K / Ctrl+K keyboard shortcut & ESC listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Learn', href: '/bytelogic#paths' },
    { label: 'Watch', href: '/bytelogic#content' },
    { label: 'Read', href: '/bytelogic/concepts/k-means#read' },
    { label: 'Lab', href: '/bytelogic#lab' },
    { label: 'About', href: '/bytelogic#philosophy' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b w-full max-w-full',
          isScrolled
            ? 'bg-[#05070A]/94 backdrop-blur-md border-[#1C2830] py-2 sm:py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.6)]'
            : 'bg-[#05070A]/80 backdrop-blur-sm border-transparent py-3 sm:py-4'
        )}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          {/* ByteLogic Authoritative Brand Identity */}
          <Link
            href="/bytelogic"
            className="group flex items-center gap-2 sm:gap-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#019AA2] shrink-0"
            aria-label="ByteLogic Home"
          >
            {/* Authoritative Logo Image with Responsive Sizing down to 320px */}
            <div className="relative h-6 sm:h-7 md:h-8 w-auto flex items-center">
              <Image
                src="/images/bytelogic/bytelogic-logo.png"
                alt="ByteLogic"
                width={150}
                height={50}
                priority
                className="h-6 sm:h-7 md:h-8 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
              />
            </div>
            <span className="hidden lg:inline-block font-mono text-[10px] tracking-widest uppercase text-[#68747D] border-l border-[#1C2830] pl-3 py-0.5">
              PLATFORM V0.1
            </span>
          </Link>

          {/* Desktop & Tablet Navigation Links */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8" aria-label="ByteLogic Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'font-mono text-xs uppercase tracking-wider transition-colors relative py-1 focus-visible:outline-none focus-visible:text-[#019AA2]',
                    isActive
                      ? 'text-[#019AA2] font-semibold'
                      : 'text-[#A8B3BA] hover:text-[#F3F6F7]'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#019AA2]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop & Tablet Nav Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Search Trigger (⌘K) */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 lg:gap-3 px-2.5 lg:px-3 py-1.5 rounded-[4px] bg-[#0E151B] border border-[#1C2830] hover:border-[#019AA2]/50 text-[#A8B3BA] hover:text-[#F3F6F7] transition-all text-xs font-mono cursor-pointer"
              aria-label="Open search (Press Cmd+K)"
            >
              <Search className="w-3.5 h-3.5 text-[#019AA2]" />
              <span className="text-xs hidden lg:inline">Search...</span>
              <kbd className="text-[10px] bg-[#131C24] text-[#68747D] px-1.5 py-0.5 rounded border border-[#1C2830]">
                ⌘K
              </kbd>
            </button>

            {/* Bridge to Parent Portfolio */}
            <Link
              href="/"
              className="flex items-center gap-1 px-2.5 lg:px-3 py-1.5 rounded-[4px] border border-[#1C2830] bg-transparent text-[#68747D] hover:text-[#A8B3BA] hover:border-[#A8B3BA]/40 text-xs font-mono transition-colors"
            >
              <span className="hidden lg:inline">Portfolio</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Mobile Menu & Search Buttons (Touch-friendly 44px min hit targets) */}
          <div className="flex md:hidden items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className="min-h-[40px] min-w-[40px] flex items-center justify-center p-2 text-[#A8B3BA] hover:text-[#019AA2] rounded-[4px] border border-[#1C2830] bg-[#0E151B] active:bg-[#131C24]"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="min-h-[40px] flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-mono text-[#F3F6F7] rounded-[4px] border border-[#1C2830] bg-[#0E151B] hover:border-[#019AA2]/50 active:bg-[#131C24]"
            >
              {mobileMenuOpen ? (
                <>
                  <X className="w-4 h-4 text-[#019AA2]" />
                  <span className="text-[11px] font-semibold">CLOSE</span>
                </>
              ) : (
                <>
                  <Menu className="w-4 h-4 text-[#019AA2]" />
                  <span className="text-[11px] font-semibold">MENU</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Backdrop Dimming and Overflow Control */}
        {mobileMenuOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            className="md:hidden bg-[#05070A]/98 backdrop-blur-xl border-b border-[#1C2830] px-4 py-5 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[calc(100dvh-60px)] overflow-y-auto bl-scrollbar shadow-2xl"
          >
            {/* Quick Search inside Drawer */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setSearchOpen(true);
              }}
              className="w-full min-h-[44px] flex items-center justify-between px-3.5 py-2.5 rounded-[4px] bg-[#0E151B] border border-[#1C2830] text-xs font-mono text-[#A8B3BA] active:border-[#019AA2]"
            >
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-[#019AA2]" />
                <span className="text-xs">Search all concepts...</span>
              </div>
              <span className="text-[10px] text-[#019AA2] font-semibold px-1.5 py-0.5 rounded bg-[#019AA2]/10 border border-[#019AA2]/20">
                TAP
              </span>
            </button>

            {/* Navigation links with minimum 44px tap target */}
            <div className="flex flex-col space-y-1 pt-1">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-[44px] flex items-center justify-between font-mono text-sm uppercase tracking-wider text-[#F3F6F7] hover:text-[#019AA2] p-3 rounded-[4px] hover:bg-[#0E151B] active:bg-[#131C24] transition-colors border-b border-[#1C2830]/40"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#019AA2] text-xs font-semibold">0{idx + 1} /</span>
                    <span className="text-sm font-medium">{link.label}</span>
                  </div>
                  <span className="text-xs text-[#68747D]">→</span>
                </Link>
              ))}
            </div>

            {/* Quick Actions in Mobile Drawer */}
            <div className="pt-2 border-t border-[#1C2830] flex flex-col gap-2.5">
              <Link
                href="/bytelogic/concepts/k-means"
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] flex items-center justify-between p-3 rounded-[4px] bg-[#0E151B] border border-[#019AA2]/40 text-xs font-mono text-[#F3F6F7] active:border-[#019AA2]"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#019AA2]" />
                  <span className="font-sans font-medium">Featured: K-Means Clustering</span>
                </div>
                <span className="text-[#019AA2] font-semibold">Explore →</span>
              </Link>

              <div className="flex items-center justify-between text-xs font-mono pt-1">
                <span className="text-[#68747D]">Return to portfolio:</span>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-[36px] flex items-center gap-1 text-[#A8B3BA] hover:text-[#019AA2] py-1 px-2 rounded hover:bg-[#0E151B]"
                >
                  <span>Portfolio</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Search Modal */}
      <ByteLogicSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
