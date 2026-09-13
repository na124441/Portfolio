'use client';

import React, { useRef, useEffect } from 'react';
import { Search, X, SlidersHorizontal, Sparkles, BookOpen, Terminal, Code, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { LearnConcept, ConceptFormat } from '@/lib/bytelogic/learnData';
import { cn } from '@/lib/utils';

export type DomainCategoryFilter = 'ALL' | 'AI / ML' | 'MATHEMATICS' | 'ALGORITHMS' | 'SYSTEMS' | 'COMPUTER SCIENCE';
export type DifficultyFilter = 'ALL' | 'FOUNDATION' | 'INTERMEDIATE' | 'ADVANCED' | 'RESEARCH';
export type FormatFilter = 'ALL' | ConceptFormat;

interface LearnSearchAndFilterProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  domainFilter: DomainCategoryFilter;
  onDomainFilterChange: (f: DomainCategoryFilter) => void;
  difficultyFilter: DifficultyFilter;
  onDifficultyFilterChange: (f: DifficultyFilter) => void;
  formatFilter: FormatFilter;
  onFormatFilterChange: (f: FormatFilter) => void;
  totalFilteredCount: number;
  filteredConcepts: LearnConcept[];
  onResetFilters: () => void;
  isFilterActive: boolean;
}

const DOMAIN_OPTIONS: DomainCategoryFilter[] = [
  'ALL',
  'AI / ML',
  'MATHEMATICS',
  'ALGORITHMS',
  'SYSTEMS',
  'COMPUTER SCIENCE',
];

const DIFFICULTY_OPTIONS: DifficultyFilter[] = [
  'ALL',
  'FOUNDATION',
  'INTERMEDIATE',
  'ADVANCED',
];

const FORMAT_OPTIONS: FormatFilter[] = [
  'ALL',
  'CONCEPT',
  'ARTICLE',
  'VIDEO',
  'VISUAL',
  'IMPLEMENTATION',
  'EXPERIMENT',
];

export const LearnSearchAndFilter: React.FC<LearnSearchAndFilterProps> = ({
  searchQuery,
  onSearchChange,
  domainFilter,
  onDomainFilterChange,
  difficultyFilter,
  onDifficultyFilterChange,
  formatFilter,
  onFormatFilterChange,
  totalFilteredCount,
  filteredConcepts,
  onResetFilters,
  isFilterActive,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut: Pressing '/' anywhere focuses the search input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape' && searchQuery) {
        onSearchChange('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchQuery, onSearchChange]);

  return (
    <section id="search" className="relative w-full border-b border-[#1C2830] bg-[#0A0F14]/90 backdrop-blur-md py-6 sm:py-8 sticky top-14 sm:top-16 z-30 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Prominent Technical Command Search Input */}
        <div className="relative w-full">
          <div className="relative flex items-center w-full rounded-[6px] bg-[#05070A] border border-[#1C2830] focus-within:border-[#019AA2] focus-within:ring-1 focus-within:ring-[#019AA2] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            <div className="pl-4 pr-2 text-[#68747D] flex items-center pointer-events-none">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#019AA2]" />
            </div>

            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search concepts, topics, algorithms, proofs, or implementations..."
              className="w-full py-3 sm:py-3.5 px-2 bg-transparent text-xs sm:text-sm text-[#F3F6F7] placeholder-[#68747D] font-sans focus:outline-none"
              aria-label="Search ByteLogic concepts"
            />

            {/* Clear button or Hotkey Indicator */}
            <div className="pr-3 flex items-center gap-1.5">
              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="p-1 text-[#68747D] hover:text-[#F3F6F7] transition-colors rounded hover:bg-[#131C24]"
                  aria-label="Clear search input"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : (
                <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#131C24] border border-[#1C2830] text-[10px] font-mono text-[#68747D]">
                  /
                </kbd>
              )}
            </div>
          </div>
        </div>

        {/* Filters Row: Domains, Difficulty, and Format Chips */}
        <div className="mt-4 space-y-3">
          {/* Domain Category Filter Chips (Horizontally scrollable on mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto bl-scrollbar pb-1 [touch-action:pan-x]">
            <span className="text-[10px] font-mono text-[#68747D] uppercase tracking-wider shrink-0 mr-1">
              DOMAIN:
            </span>
            {DOMAIN_OPTIONS.map((cat) => {
              const active = domainFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onDomainFilterChange(cat)}
                  className={cn(
                    'px-2.5 py-1 rounded-[4px] text-[11px] font-mono transition-all shrink-0 whitespace-nowrap',
                    active
                      ? 'bg-[#019AA2]/15 text-[#019AA2] border border-[#019AA2] font-semibold'
                      : 'bg-[#0E151B] text-[#A8B3BA] border border-[#1C2830] hover:text-[#F3F6F7] hover:border-[#68747D]'
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Secondary Sub-filters: Difficulty & Format */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-[#1C2830]/60 text-xs font-mono">
            {/* Difficulty Group */}
            <div className="flex items-center gap-1.5 overflow-x-auto bl-scrollbar [touch-action:pan-x]">
              <span className="text-[10px] text-[#68747D] uppercase tracking-wider shrink-0 mr-1">
                LEVEL:
              </span>
              {DIFFICULTY_OPTIONS.map((lvl) => {
                const active = difficultyFilter === lvl;
                return (
                  <button
                    key={lvl}
                    onClick={() => onDifficultyFilterChange(lvl)}
                    className={cn(
                      'px-2 py-0.5 rounded-[3px] text-[10px] transition-all shrink-0',
                      active
                        ? 'bg-[#132279] text-[#F3F6F7] border border-[#019AA2]'
                        : 'text-[#68747D] hover:text-[#A8B3BA]'
                    )}
                  >
                    {lvl}
                  </button>
                );
              })}
            </div>

            {/* Format Group */}
            <div className="flex items-center gap-1.5 overflow-x-auto bl-scrollbar [touch-action:pan-x]">
              <span className="text-[10px] text-[#68747D] uppercase tracking-wider shrink-0 mr-1">
                FORMAT:
              </span>
              {FORMAT_OPTIONS.map((fmt) => {
                const active = formatFilter === fmt;
                return (
                  <button
                    key={fmt}
                    onClick={() => onFormatFilterChange(fmt)}
                    className={cn(
                      'px-2 py-0.5 rounded-[3px] text-[10px] transition-all shrink-0',
                      active
                        ? 'bg-[#019AA2]/20 text-[#019AA2] border border-[#019AA2]'
                        : 'text-[#68747D] hover:text-[#A8B3BA]'
                    )}
                  >
                    {fmt}
                  </button>
                );
              })}

              {/* Reset filter button if any active */}
              {isFilterActive && (
                <button
                  onClick={onResetFilters}
                  className="ml-2 text-[10px] text-[#019AA2] hover:underline flex items-center gap-1 shrink-0"
                >
                  <X className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Live Filter / Search Active Notification Banner */}
        {isFilterActive && (
          <div className="mt-4 pt-3 border-t border-[#1C2830] flex items-center justify-between text-xs font-mono text-[#A8B3BA]">
            <div className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#019AA2]" />
              <span>
                Found <strong className="text-[#F3F6F7]">{totalFilteredCount}</strong> matching{' '}
                {totalFilteredCount === 1 ? 'concept' : 'concepts'} in repository
              </span>
            </div>

            {searchQuery && (
              <span className="text-[#68747D] hidden sm:inline">
                Query: &quot;{searchQuery}&quot;
              </span>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
