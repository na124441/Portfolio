'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search,
  X,
  ArrowRight,
  Terminal,
  Cpu,
  Layers,
  FlaskConical,
  BookOpen,
  Compass,
  FileText,
  Sparkles,
  CornerDownLeft,
} from 'lucide-react';
import { ALL_PROJECTS } from '@/data/projects';
import { INITIATIVES } from '@/data/initiatives';
import { LAB_EXPERIMENTS } from '@/data/experiments';
import { BUILD_LOG_ENTRIES } from '@/data/build-log';
import { cn } from '@/lib/utils';

export interface SearchItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Navigation' | 'Projects' | 'Initiatives' | 'Lab Experiments' | 'Build Log';
  href: string;
  icon: React.ElementType;
}

const STATIC_NAV_ITEMS: SearchItem[] = [
  { id: 'nav-home', title: 'Command Center', subtitle: 'Personal Tech Hub Homepage', category: 'Navigation', href: '/', icon: Terminal },
  { id: 'nav-work', title: 'Systems Portfolio', subtitle: 'Engineered Systems & Quantitative Benchmarks', category: 'Navigation', href: '/work', icon: Cpu },
  { id: 'nav-lab', title: 'The Laboratory', subtitle: 'Empirical Sweeps & Research Prototypes', category: 'Navigation', href: '/lab', icon: FlaskConical },
  { id: 'nav-bytelogic', title: 'ByteLogic Platform', subtitle: 'Interactive 3D Manifolds & Computer Science Textbooks', category: 'Navigation', href: '/bytelogic', icon: Sparkles },
  { id: 'nav-build', title: 'Build & Initiatives', subtitle: 'MINDLITE, Omnix Engine, Attack On Code & Last Transistor', category: 'Navigation', href: '/build', icon: Layers },
  { id: 'nav-writing', title: 'Writing & Build Log', subtitle: 'Chronological Technical Journal & Architecture Decisions', category: 'Navigation', href: '/writing', icon: FileText },
  { id: 'nav-now', title: 'Now', subtitle: 'Current Vectors & Operational Focus', category: 'Navigation', href: '/now', icon: Compass },
  { id: 'nav-about', title: 'About & Lineage', subtitle: 'Engineering Philosophy & Trajectory', category: 'Navigation', href: '/about', icon: BookOpen },
  { id: 'nav-contact', title: 'Contact Coordinates', subtitle: 'Direct Channels & Transmission Terminal', category: 'Navigation', href: '/contact', icon: Terminal },
];

export const CommandPalette: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Build searchable index from all datasets
  const allSearchableItems: SearchItem[] = [
    ...STATIC_NAV_ITEMS,
    ...ALL_PROJECTS.map((p) => ({
      id: `proj-${p.slug}`,
      title: p.title,
      subtitle: `${p.category.join(' · ')} · Tier ${p.tier}`,
      category: 'Projects' as const,
      href: `/projects/${p.slug}`,
      icon: Cpu,
    })),
    ...INITIATIVES.map((init) => ({
      id: `init-${init.id}`,
      title: init.name,
      subtitle: init.tagline,
      category: 'Initiatives' as const,
      href: `/build#${init.id}`,
      icon: Layers,
    })),
    ...LAB_EXPERIMENTS.map((exp) => ({
      id: `exp-${exp.id}`,
      title: exp.title,
      subtitle: `${exp.category} · Status: ${exp.status}`,
      category: 'Lab Experiments' as const,
      href: '/lab',
      icon: FlaskConical,
    })),
    ...BUILD_LOG_ENTRIES.map((log) => ({
      id: `log-${log.id}`,
      title: log.title,
      subtitle: `${log.date} · ${log.category}`,
      category: 'Build Log' as const,
      href: '/writing',
      icon: FileText,
    })),
  ];

  const filteredItems = query.trim() === ''
    ? STATIC_NAV_ITEMS
    : allSearchableItems.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.subtitle.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
        );
      }).slice(0, 10);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const selected = filteredItems[selectedIndex];
        if (selected) {
          onClose();
          router.push(selected.href);
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, router, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#010a0b] border border-[#d4af37]/40 shadow-[0_0_50px_rgba(0,0,0,0.9),0_0_20px_rgba(212,175,55,0.15)] corner-brackets overflow-hidden font-sans flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 sm:px-5 py-3.5 border-b border-white/10 bg-white/[0.02]">
          <Search className="w-4 h-4 text-[#dfb15b] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search projects, experiments, initiatives, build logs, or commands..."
            className="flex-1 bg-transparent border-none outline-none text-sm text-[#feffff] placeholder:text-white/30 font-mono"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-white/40 hover:text-white p-1 text-xs"
              aria-label="Clear query"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 font-mono text-[10px] uppercase text-white/40 bg-white/5 border border-white/10">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto divide-y divide-white/5 p-2">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center space-y-2">
              <p className="font-mono text-xs text-white/40">
                No matching telemetry found for "{query}".
              </p>
              <p className="font-sans text-xs text-white/30">
                Try searching for "ADCTM", "Vulkan", "MINDLITE", "Voronoi", or "Lab".
              </p>
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = selectedIndex === idx;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    onClose();
                    router.push(item.href);
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={cn(
                    'p-3 sm:px-4 sm:py-3 rounded-none flex items-center justify-between gap-3 cursor-pointer transition-colors',
                    isSelected
                      ? 'bg-white/[0.06] border-l-2 border-[#d4af37]'
                      : 'hover:bg-white/[0.03] border-l-2 border-transparent'
                  )}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={cn(
                        'w-7 h-7 rounded-sm border flex items-center justify-center shrink-0',
                        isSelected
                          ? 'border-[#d4af37]/60 bg-[#d4af37]/10 text-[#dfb15b]'
                          : 'border-white/10 bg-white/[0.02] text-white/40'
                      )}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-sm font-bold text-[#feffff] truncate">
                          {item.title}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#dfb15b] shrink-0">
                          [{item.category}]
                        </span>
                      </div>
                      <p className="font-sans text-xs text-white/50 truncate">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="hidden sm:flex items-center gap-1 font-mono text-[10px] text-white/50 shrink-0">
                      <span>Jump</span>
                      <CornerDownLeft className="w-3 h-3 text-[#dfb15b]" />
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-black/60 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-white/40">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="text-[#dfb15b]">Global Hub Palette</span>
        </div>
      </div>
    </div>
  );
};
