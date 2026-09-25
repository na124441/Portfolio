'use client';

import React, { useState, useMemo, useRef } from 'react';
import { DsaHero } from './DsaHero';
import { DsaFilterToolbar } from './DsaFilterToolbar';
import { DsaProblemCard } from './DsaProblemCard';
import { DsaProgressOverview } from './DsaProgressOverview';
import { getAllDsaProblems } from '@/data/bytelogic/dsa';
import { useDsaProgress } from '@/lib/bytelogic/dsaProgress';
import type { DsaDifficulty, DsaStatus } from '@/types/dsa-question';
import { BookOpen, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const ITEMS_PER_PAGE = 24;

export function DsaPageContent() {
  const allProblems = useMemo(() => getAllDsaProblems(), []);
  const { stateMap } = useDsaProgress();
  const catalogRef = useRef<HTMLDivElement>(null);

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'ALL' | DsaDifficulty>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<'ALL' | DsaStatus>('ALL');
  const [currentPage, setCurrentPage] = useState(1);

  const isFilterActive =
    searchQuery.trim().length > 0 ||
    selectedTopic !== 'ALL' ||
    selectedDifficulty !== 'ALL' ||
    selectedStatus !== 'ALL';

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedTopic('ALL');
    setSelectedDifficulty('ALL');
    setSelectedStatus('ALL');
    setCurrentPage(1);
  };

  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    setCurrentPage(1);
  };

  const handleTopicChange = (topic: string) => {
    setSelectedTopic(topic);
    setCurrentPage(1);
  };

  const handleDifficultyChange = (diff: 'ALL' | DsaDifficulty) => {
    setSelectedDifficulty(diff);
    setCurrentPage(1);
  };

  const handleStatusChange = (st: 'ALL' | DsaStatus) => {
    setSelectedStatus(st);
    setCurrentPage(1);
  };

  // Filtered problems list
  const filteredProblems = useMemo(() => {
    return allProblems.filter((p) => {
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesTopic = p.topic.toLowerCase().includes(q);
        const matchesTag = p.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesTopic && !matchesTag) {
          return false;
        }
      }

      // Topic filter
      if (selectedTopic !== 'ALL') {
        if (p.topic.toLowerCase() !== selectedTopic.toLowerCase()) {
          return false;
        }
      }

      // Difficulty filter
      if (selectedDifficulty !== 'ALL') {
        if (p.difficulty !== selectedDifficulty) {
          return false;
        }
      }

      // Status filter
      if (selectedStatus !== 'ALL') {
        const userStatus = stateMap[p.slug]?.status || 'unattempted';
        if (userStatus !== selectedStatus) {
          return false;
        }
      }

      return true;
    });
  }, [allProblems, searchQuery, selectedTopic, selectedDifficulty, selectedStatus, stateMap]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredProblems.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);

  const paginatedProblems = useMemo(() => {
    const start = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
    return filteredProblems.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProblems, safeCurrentPage]);

  const goToPage = (page: number) => {
    const target = Math.min(Math.max(1, page), totalPages);
    setCurrentPage(target);
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const solvedCount = useMemo(() => {
    return allProblems.filter((p) => stateMap[p.slug]?.status === 'solved').length;
  }, [allProblems, stateMap]);

  // Generate pagination page numbers
  const pageNumbers = useMemo(() => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (safeCurrentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, '...', totalPages);
      } else if (safeCurrentPage >= totalPages - 3) {
        pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', safeCurrentPage - 1, safeCurrentPage, safeCurrentPage + 1, '...', totalPages);
      }
    }
    return pages;
  }, [totalPages, safeCurrentPage]);

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#05070A] text-[#F3F6F7]">
      {/* Hero Section */}
      <DsaHero totalCount={allProblems.length} solvedCount={solvedCount} />

      {/* Sticky Filter Toolbar */}
      <DsaFilterToolbar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        selectedTopic={selectedTopic}
        onTopicChange={handleTopicChange}
        selectedDifficulty={selectedDifficulty}
        onDifficultyChange={handleDifficultyChange}
        selectedStatus={selectedStatus}
        onStatusChange={handleStatusChange}
        filteredCount={filteredProblems.length}
        totalCount={allProblems.length}
        onResetFilters={handleResetFilters}
        isFilterActive={isFilterActive}
      />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 w-full flex flex-col gap-10">
        {/* Progress Overview Section */}
        <DsaProgressOverview problems={allProblems} stateMap={stateMap} />

        {/* Problem Cards Grid */}
        <div ref={catalogRef} className="flex flex-col gap-4 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1C2830] pb-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#019AA2] font-semibold">03 //</span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#68747D]">
                Problem Catalog
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-[#68747D]">
              <span>
                Showing {filteredProblems.length === 0 ? 0 : (safeCurrentPage - 1) * ITEMS_PER_PAGE + 1}–
                {Math.min(safeCurrentPage * ITEMS_PER_PAGE, filteredProblems.length)} of{' '}
                {filteredProblems.length} {filteredProblems.length === 1 ? 'problem' : 'problems'}
              </span>
              {filteredProblems.length > ITEMS_PER_PAGE && (
                <span className="text-[#019AA2]">
                  (Page {safeCurrentPage} of {totalPages})
                </span>
              )}
            </div>
          </div>

          {filteredProblems.length === 0 ? (
            <div className="p-12 text-center rounded-lg bg-[#0A0F14] border border-[#1C2830] flex flex-col items-center justify-center gap-3">
              <BookOpen className="w-8 h-8 text-[#68747D]" />
              <h3 className="font-sans text-base font-semibold text-[#F3F6F7]">
                No matching problems found
              </h3>
              <p className="text-xs text-[#A8B3BA] max-w-sm">
                No DSA problems match your selected combination of topic, tier, or status filters.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="mt-2 text-xs font-mono px-3 py-1.5 rounded bg-[#0E151B] border border-[#019AA2]/40 text-[#019AA2] hover:bg-[#019AA2]/10 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                {paginatedProblems.map((problem) => (
                  <DsaProblemCard
                    key={problem.slug}
                    problem={problem}
                    status={stateMap[problem.slug]?.status || 'unattempted'}
                  />
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-6 pb-2">
                  {/* First Page */}
                  <button
                    type="button"
                    onClick={() => goToPage(1)}
                    disabled={safeCurrentPage === 1}
                    className="p-2 rounded bg-[#0E151B] border border-[#1C2830] text-[#A8B3BA] hover:text-[#019AA2] hover:border-[#019AA2]/40 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    aria-label="First page"
                  >
                    <ChevronsLeft className="w-4 h-4" />
                  </button>

                  {/* Previous Page */}
                  <button
                    type="button"
                    onClick={() => goToPage(safeCurrentPage - 1)}
                    disabled={safeCurrentPage === 1}
                    className="p-2 rounded bg-[#0E151B] border border-[#1C2830] text-[#A8B3BA] hover:text-[#019AA2] hover:border-[#019AA2]/40 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Page Numbers */}
                  {pageNumbers.map((num, i) =>
                    typeof num === 'number' ? (
                      <button
                        key={i}
                        type="button"
                        onClick={() => goToPage(num)}
                        className={cn(
                          'min-w-9 h-9 px-2.5 rounded font-mono text-xs border transition-colors',
                          safeCurrentPage === num
                            ? 'bg-[#019AA2]/20 border-[#019AA2] text-[#019AA2] font-semibold'
                            : 'bg-[#0E151B] border-[#1C2830] text-[#A8B3BA] hover:text-[#F3F6F7] hover:border-[#1C2830]/80'
                        )}
                      >
                        {num}
                      </button>
                    ) : (
                      <span
                        key={i}
                        className="px-2 font-mono text-xs text-[#68747D] select-none"
                      >
                        ...
                      </span>
                    )
                  )}

                  {/* Next Page */}
                  <button
                    type="button"
                    onClick={() => goToPage(safeCurrentPage + 1)}
                    disabled={safeCurrentPage === totalPages}
                    className="p-2 rounded bg-[#0E151B] border border-[#1C2830] text-[#A8B3BA] hover:text-[#019AA2] hover:border-[#019AA2]/40 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    aria-label="Next page"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Last Page */}
                  <button
                    type="button"
                    onClick={() => goToPage(totalPages)}
                    disabled={safeCurrentPage === totalPages}
                    className="p-2 rounded bg-[#0E151B] border border-[#1C2830] text-[#A8B3BA] hover:text-[#019AA2] hover:border-[#019AA2]/40 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    aria-label="Last page"
                  >
                    <ChevronsRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DsaPageContent;
