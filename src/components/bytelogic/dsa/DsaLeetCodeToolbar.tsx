'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search,
  X,
  ArrowUpDown,
  Filter,
  Shuffle,
  ChevronDown,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { DsaDifficulty, DsaStatus, DsaProblem } from '@/types/dsa-question';

export type SortField = 'order' | 'title' | 'difficulty' | 'acceptance';
export type SortOrder = 'asc' | 'desc';

interface DsaLeetCodeToolbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedDifficulty: 'ALL' | DsaDifficulty;
  onDifficultyChange: (diff: 'ALL' | DsaDifficulty) => void;
  selectedStatus: 'ALL' | DsaStatus;
  onStatusChange: (status: 'ALL' | DsaStatus) => void;
  sortField: SortField;
  sortOrder: SortOrder;
  onSortChange: (field: SortField, order: SortOrder) => void;
  totalCount: number;
  solvedCount: number;
  allProblems: DsaProblem[];
}

export function DsaLeetCodeToolbar({
  searchQuery,
  onSearchChange,
  selectedDifficulty,
  onDifficultyChange,
  selectedStatus,
  onStatusChange,
  sortField,
  sortOrder,
  onSortChange,
  totalCount,
  solvedCount,
  allProblems,
}: DsaLeetCodeToolbarProps) {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  // Close filter dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Pick random question
  const handleRandomQuestion = () => {
    if (allProblems.length === 0) return;
    const randomIndex = Math.floor(Math.random() * allProblems.length);
    const randomProblem = allProblems[randomIndex];
    if (randomProblem) {
      router.push(`/bytelogic/questions/dsa/${randomProblem.slug}`);
    }
  };

  // Toggle sort order
  const handleToggleSort = () => {
    if (sortField === 'order') {
      onSortChange('order', sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      onSortChange('order', 'asc');
    }
  };

  // Circular gauge calculations
  const radius = 10;
  const circumference = 2 * Math.PI * radius;
  const progressRatio = totalCount > 0 ? solvedCount / totalCount : 0;
  const strokeDashoffset = circumference - progressRatio * circumference;

  const hasActiveFilters = selectedDifficulty !== 'ALL' || selectedStatus !== 'ALL';

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 py-3 text-xs font-sans">
      {/* Left: Search Bar & Filter Buttons */}
      <div className="flex items-center gap-2 flex-1 max-w-xl">
        {/* Search Input Box */}
        <div className="relative flex-1 rounded-md bg-[#1a1a1a] border border-[#2b2b2b] focus-within:border-[#38bdf8] focus-within:ring-1 focus-within:ring-[#38bdf8] transition-all">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#71717a] pointer-events-none">
            <Search className="w-4 h-4" />
          </div>
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search questions"
            className="w-full bg-transparent pl-9 pr-8 py-2 text-xs sm:text-sm text-[#f4f4f5] placeholder-[#71717a] focus:outline-none"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#71717a] hover:text-white p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Sort Button */}
        <button
          type="button"
          onClick={handleToggleSort}
          title={`Sort: ${sortOrder === 'asc' ? 'Ascending' : 'Descending'}`}
          className={cn(
            'p-2 sm:px-2.5 rounded-md bg-[#1a1a1a] border border-[#2b2b2b] text-[#a1a1aa] hover:text-white hover:bg-[#262626] transition-colors cursor-pointer flex items-center gap-1.5'
          )}
        >
          <ArrowUpDown className="w-3.5 h-3.5" />
        </button>

        {/* Filter Dropdown Button */}
        <div ref={filterRef} className="relative">
          <button
            type="button"
            onClick={() => setIsFilterOpen((prev) => !prev)}
            title="Filter by Difficulty & Status"
            className={cn(
              'p-2 sm:px-2.5 rounded-md bg-[#1a1a1a] border border-[#2b2b2b] text-[#a1a1aa] hover:text-white hover:bg-[#262626] transition-colors cursor-pointer flex items-center gap-1.5 relative',
              hasActiveFilters && 'border-[#38bdf8] text-[#38bdf8]'
            )}
          >
            <Filter className="w-3.5 h-3.5" />
            {hasActiveFilters && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] absolute top-1 right-1" />
            )}
          </button>

          {/* Filter Popover Menu */}
          {isFilterOpen && (
            <div className="absolute left-0 sm:right-0 sm:left-auto top-full mt-1.5 w-64 rounded-lg bg-[#222222] border border-[#333333] shadow-xl p-3 z-40 flex flex-col gap-3 font-sans">
              <div>
                <span className="text-[11px] font-semibold text-[#a1a1aa] uppercase tracking-wider block mb-1.5">
                  Difficulty
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(['ALL', 'Easy', 'Medium', 'Hard'] as const).map((diff) => (
                    <button
                      key={diff}
                      type="button"
                      onClick={() => onDifficultyChange(diff)}
                      className={cn(
                        'px-2.5 py-1 rounded text-xs transition-colors cursor-pointer',
                        selectedDifficulty === diff
                          ? 'bg-[#3b82f6] text-white font-medium'
                          : 'bg-[#18181b] text-[#d4d4d8] hover:bg-[#27272a]'
                      )}
                    >
                      {diff === 'ALL' ? 'All' : diff}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[11px] font-semibold text-[#a1a1aa] uppercase tracking-wider block mb-1.5">
                  Status
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(
                    [
                      { id: 'ALL', label: 'All' },
                      { id: 'unattempted', label: 'Todo' },
                      { id: 'solved', label: 'Solved' },
                      { id: 'attempted', label: 'Attempted' },
                    ] as const
                  ).map((st) => (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => onStatusChange(st.id)}
                      className={cn(
                        'px-2.5 py-1 rounded text-xs transition-colors cursor-pointer',
                        selectedStatus === st.id
                          ? 'bg-[#3b82f6] text-white font-medium'
                          : 'bg-[#18181b] text-[#d4d4d8] hover:bg-[#27272a]'
                      )}
                    >
                      {st.label}
                    </button>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={() => {
                    onDifficultyChange('ALL');
                    onStatusChange('ALL');
                    setIsFilterOpen(false);
                  }}
                  className="mt-1 text-center text-xs text-[#38bdf8] hover:underline"
                >
                  Reset Filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Right: Solved Circular Progress Gauge + Random Shuffle Button */}
      <div className="flex items-center justify-end gap-3 shrink-0">
        {/* Solved Status Progress Gauge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-[#2b2b2b] text-xs font-sans text-[#d4d4d8]">
          <svg className="w-5 h-5 -rotate-90" viewBox="0 0 24 24">
            {/* Background Track */}
            <circle
              cx="12"
              cy="12"
              r={radius}
              className="text-[#2e2e2e]"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="transparent"
            />
            {/* Progress Stroke */}
            <circle
              cx="12"
              cy="12"
              r={radius}
              className="text-[#2cbb5d] transition-all duration-500 ease-out"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
            />
          </svg>
          <span className="font-medium text-[#eff2f6]">
            {solvedCount}/{totalCount} Solved
          </span>
        </div>

        {/* Shuffle Random Problem Button */}
        <button
          type="button"
          onClick={handleRandomQuestion}
          className="p-2 sm:px-2.5 rounded-md bg-[#1a1a1a] hover:bg-[#262626] border border-[#2b2b2b] text-[#a1a1aa] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
          title="Pick a Random Problem"
        >
          <Shuffle className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default DsaLeetCodeToolbar;
