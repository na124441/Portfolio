'use client';

import React, { useRef, useEffect } from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { DsaDifficulty, DsaStatus } from '@/types/dsa-question';
import { DSA_TOPICS } from '@/data/bytelogic/dsa/topics';

export interface DsaFilterToolbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedTopic: string;
  onTopicChange: (topic: string) => void;
  selectedDifficulty: 'ALL' | DsaDifficulty;
  onDifficultyChange: (diff: 'ALL' | DsaDifficulty) => void;
  selectedStatus: 'ALL' | DsaStatus;
  onStatusChange: (status: 'ALL' | DsaStatus) => void;
  filteredCount: number;
  totalCount: number;
  onResetFilters: () => void;
  isFilterActive: boolean;
}

const DIFFICULTIES: ('ALL' | DsaDifficulty)[] = [
  'ALL',
  'Warm-up',
  'Easy',
  'Medium',
  'Hard',
];

const STATUSES: { id: 'ALL' | DsaStatus; label: string }[] = [
  { id: 'ALL', label: 'All Status' },
  { id: 'unattempted', label: 'Unattempted' },
  { id: 'attempted', label: 'Attempted' },
  { id: 'solved', label: 'Solved' },
  { id: 'revisit', label: 'Revisit' },
];

export function DsaFilterToolbar({
  searchQuery,
  onSearchChange,
  selectedTopic,
  onTopicChange,
  selectedDifficulty,
  onDifficultyChange,
  selectedStatus,
  onStatusChange,
  filteredCount,
  totalCount,
  onResetFilters,
  isFilterActive,
}: DsaFilterToolbarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut: Press '/' to focus search input
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
    <div className="w-full bg-[#0A0F14]/90 backdrop-blur-md border-b border-[#1C2830] sticky top-14 sm:top-16 z-30 py-4 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col gap-3.5">
        {/* Row 1: Search + Topic Dropdown */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1 rounded-[6px] bg-[#05070A] border border-[#1C2830] focus-within:border-[#019AA2] focus-within:ring-1 focus-within:ring-[#019AA2] transition-all">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#68747D] pointer-events-none">
              <Search className="w-4 h-4 text-[#019AA2]" />
            </div>
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search problem title, tag, or topic... (Press '/' to focus)"
              className="w-full bg-transparent pl-10 pr-10 py-2.5 text-xs sm:text-sm font-sans text-[#F3F6F7] placeholder-[#68747D] focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#68747D] hover:text-[#F3F6F7] p-1"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Topic Dropdown */}
          <div className="w-full sm:w-72 shrink-0">
            <select
              value={selectedTopic}
              onChange={(e) => onTopicChange(e.target.value)}
              className="w-full bg-[#05070A] text-[#F3F6F7] border border-[#1C2830] rounded-[6px] px-3.5 py-2.5 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#019AA2] focus:ring-1 focus:ring-[#019AA2] cursor-pointer"
            >
              <option value="ALL">All Topics ({DSA_TOPICS.length})</option>
              {(() => {
                const phaseGroups: Record<string, typeof DSA_TOPICS> = {};
                for (const t of DSA_TOPICS) {
                  if (!phaseGroups[t.phase]) phaseGroups[t.phase] = [];
                  phaseGroups[t.phase].push(t);
                }
                return Object.entries(phaseGroups).map(([phaseName, topics]) => (
                  <optgroup
                    key={phaseName}
                    label={phaseName}
                    className="bg-[#0A0F14] text-[#019AA2] font-semibold"
                  >
                    {topics.map((topic) => (
                      <option
                        key={topic.id}
                        value={topic.name}
                        className="bg-[#05070A] text-[#F3F6F7] font-normal"
                      >
                        {topic.name}
                      </option>
                    ))}
                  </optgroup>
                ));
              })()}
            </select>
          </div>
        </div>

        {/* Row 2: Filter Chips & Reset */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-2">
            {/* Difficulty Chips */}
            <span className="text-[#68747D] uppercase text-[10px] tracking-wider mr-1">
              Tier:
            </span>
            {DIFFICULTIES.map((diff) => {
              const active = selectedDifficulty === diff;
              return (
                <button
                  key={diff}
                  type="button"
                  onClick={() => onDifficultyChange(diff)}
                  className={cn(
                    'px-2.5 py-1 rounded-[4px] border transition-colors cursor-pointer',
                    active
                      ? 'bg-[#019AA2]/15 text-[#019AA2] border-[#019AA2] font-semibold'
                      : 'bg-[#0E151B] text-[#A8B3BA] border-[#1C2830] hover:text-[#F3F6F7] hover:border-[#1C2830]/80'
                  )}
                >
                  {diff}
                </button>
              );
            })}

            <div className="h-4 w-[1px] bg-[#1C2830] mx-1 hidden sm:block" />

            {/* Status Chips */}
            <span className="text-[#68747D] uppercase text-[10px] tracking-wider mr-1 hidden sm:inline">
              Status:
            </span>
            {STATUSES.map((st) => {
              const active = selectedStatus === st.id;
              return (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => onStatusChange(st.id)}
                  className={cn(
                    'px-2.5 py-1 rounded-[4px] border transition-colors cursor-pointer',
                    active
                      ? 'bg-[#019AA2]/15 text-[#019AA2] border-[#019AA2] font-semibold'
                      : 'bg-[#0E151B] text-[#A8B3BA] border-[#1C2830] hover:text-[#F3F6F7] hover:border-[#1C2830]/80'
                  )}
                >
                  {st.label}
                </button>
              );
            })}
          </div>

          {/* Results count & Reset action */}
          <div className="flex items-center gap-3 ml-auto">
            <span className="text-[#68747D] font-mono text-[11px]">
              Showing <span className="text-[#F3F6F7] font-semibold">{filteredCount}</span> of {totalCount}
            </span>
            {isFilterActive && (
              <button
                type="button"
                onClick={onResetFilters}
                className="text-[#019AA2] hover:text-[#02b3bc] text-[11px] underline underline-offset-2 transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DsaFilterToolbar;
