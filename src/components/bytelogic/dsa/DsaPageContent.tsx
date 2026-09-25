'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAllDsaProblems } from '@/data/bytelogic/dsa';
import { useDsaProgress } from '@/lib/bytelogic/dsaProgress';
import type { DsaDifficulty, DsaStatus, DsaProblem } from '@/types/dsa-question';
import { DsaTopicPills } from './DsaTopicPills';
import { DsaLeetCodeToolbar, type SortField, type SortOrder } from './DsaLeetCodeToolbar';
import { DsaLinearProblemRow } from './DsaLinearProblemRow';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ArrowUp,
  Calendar,
  Layers,
  BookOpen,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { getAcceptanceRate } from '@/lib/bytelogic/leetcode-utils';

export function DsaPageContent() {
  const router = useRouter();
  const allProblems = useMemo(() => getAllDsaProblems(), []);
  const { stateMap } = useDsaProgress();
  const tableTopRef = useRef<HTMLDivElement>(null);

  // Filter States
  const [selectedTopic, setSelectedTopic] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'ALL' | DsaDifficulty>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<'ALL' | DsaStatus>('ALL');

  // Sorting
  const [sortField, setSortField] = useState<SortField>('order');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  // Pagination
  const [itemsPerPage, setItemsPerPage] = useState<number>(50);
  const [currentPage, setCurrentPage] = useState(1);

  // Floating controls
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTopicSelect = (topicId: string) => {
    setSelectedTopic(topicId);
    setCurrentPage(1);
  };

  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    setCurrentPage(1);
  };

  const handleDifficultyChange = (diff: 'ALL' | DsaDifficulty) => {
    setSelectedDifficulty(diff);
    setCurrentPage(1);
  };

  const handleStatusChange = (status: 'ALL' | DsaStatus) => {
    setSelectedStatus(status);
    setCurrentPage(1);
  };

  const handleSortChange = (field: SortField, order: SortOrder) => {
    setSortField(field);
    setSortOrder(order);
  };

  // Filter problems
  const filteredProblems = useMemo(() => {
    return allProblems.filter((p) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesOrder = String(p.order) === q;
        const matchesTopic = p.topic.toLowerCase().includes(q);
        const matchesTag = p.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesOrder && !matchesTopic && !matchesTag) {
          return false;
        }
      }

      // 2. Topic Filter
      if (selectedTopic !== 'ALL') {
        const pTopic = p.topic.toLowerCase();
        const filterTopic = selectedTopic.toLowerCase();
        const matchesDirect = pTopic.includes(filterTopic);
        const matchesTag = p.tags.some((t) => t.toLowerCase().includes(filterTopic));
        if (!matchesDirect && !matchesTag) {
          return false;
        }
      }

      // 3. Difficulty Filter
      if (selectedDifficulty !== 'ALL') {
        if (selectedDifficulty === 'Easy' && p.difficulty === 'Warm-up') {
          // Warm-up matches Easy tier
        } else if (p.difficulty !== selectedDifficulty) {
          return false;
        }
      }

      // 4. Status Filter
      if (selectedStatus !== 'ALL') {
        const userStatus = stateMap[p.slug]?.status || 'unattempted';
        if (userStatus !== selectedStatus) {
          return false;
        }
      }

      return true;
    });
  }, [allProblems, searchQuery, selectedTopic, selectedDifficulty, selectedStatus, stateMap]);

  // Sort filtered problems
  const sortedProblems = useMemo(() => {
    const list = [...filteredProblems];

    list.sort((a, b) => {
      let comparison = 0;
      if (sortField === 'order') {
        comparison = a.order - b.order;
      } else if (sortField === 'title') {
        comparison = a.title.localeCompare(b.title);
      } else if (sortField === 'difficulty') {
        const diffRank: Record<string, number> = { 'Warm-up': 1, Easy: 1, Medium: 2, Hard: 3 };
        comparison = (diffRank[a.difficulty] || 1) - (diffRank[b.difficulty] || 1);
      } else if (sortField === 'acceptance') {
        const rateA = parseFloat(getAcceptanceRate(a));
        const rateB = parseFloat(getAcceptanceRate(b));
        comparison = rateA - rateB;
      }

      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return list;
  }, [filteredProblems, sortField, sortOrder]);

  // Solved Count
  const solvedCount = useMemo(() => {
    return allProblems.filter((p) => stateMap[p.slug]?.status === 'solved').length;
  }, [allProblems, stateMap]);

  // Pagination calculation
  const totalPages = itemsPerPage >= sortedProblems.length
    ? 1
    : Math.max(1, Math.ceil(sortedProblems.length / itemsPerPage));

  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);

  const paginatedProblems = useMemo(() => {
    if (itemsPerPage >= sortedProblems.length) {
      return sortedProblems;
    }
    const start = (safeCurrentPage - 1) * itemsPerPage;
    return sortedProblems.slice(start, start + itemsPerPage);
  }, [sortedProblems, safeCurrentPage, itemsPerPage]);

  const goToPage = (page: number) => {
    const target = Math.min(Math.max(1, page), totalPages);
    setCurrentPage(target);
    if (tableTopRef.current) {
      tableTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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

  // Jump to daily challenge (problem #1 or featured)
  const handleJumpToDaily = () => {
    const dailyProblem = allProblems.find((p) => p.order === 1) || allProblems[0];
    if (dailyProblem) {
      router.push(`/bytelogic/questions/dsa/${dailyProblem.slug}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#e4e4e7] pt-14 sm:pt-16 pb-20 font-sans selection:bg-[#38bdf8]/30">
      <div className="max-w-[1240px] mx-auto px-3 sm:px-6 lg:px-8 flex flex-col gap-4">
        {/* Top Topic Filter Pills */}
        <DsaTopicPills
          selectedTopic={selectedTopic}
          onSelectTopic={handleTopicSelect}
        />

        {/* LeetCode Search & Filter Controls Toolbar */}
        <DsaLeetCodeToolbar
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          selectedDifficulty={selectedDifficulty}
          onDifficultyChange={handleDifficultyChange}
          selectedStatus={selectedStatus}
          onStatusChange={handleStatusChange}
          sortField={sortField}
          sortOrder={sortOrder}
          onSortChange={handleSortChange}
          totalCount={allProblems.length}
          solvedCount={solvedCount}
          allProblems={allProblems}
        />

        {/* Linear Scrollable Problem List Table */}
        <div
          ref={tableTopRef}
          className="rounded-lg overflow-hidden border border-[#2b2b2b] shadow-xl bg-[#1a1a1a]"
        >
          {/* Table Header Row */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-[#202020] border-b border-[#2e2e2e] text-xs font-medium text-[#a1a1aa] select-none">
            <div className="flex items-center gap-3 sm:gap-4 flex-1">
              <span className="w-5 text-center">Status</span>
              <span>Title</span>
            </div>
            <div className="flex items-center gap-4 sm:gap-8 shrink-0 text-right">
              <span className="hidden sm:inline-block w-14">Acceptance</span>
              <span className="w-12 text-center">Difficulty</span>
              <span className="w-8 text-right">Solution</span>
            </div>
          </div>

          {/* Problem Rows (Zebra striped matching Image 1) */}
          {paginatedProblems.length === 0 ? (
            <div className="py-16 text-center text-[#71717a] flex flex-col items-center justify-center gap-2">
              <BookOpen className="w-8 h-8 opacity-40 mb-1" />
              <p className="text-sm font-medium text-[#d4d4d8]">No questions match your criteria</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTopic('ALL');
                  setSelectedDifficulty('ALL');
                  setSelectedStatus('ALL');
                }}
                className="text-xs text-[#38bdf8] hover:underline mt-1 cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="divide-y divide-[#2b2b2b]/30">
              {paginatedProblems.map((problem, idx) => (
                <DsaLinearProblemRow
                  key={problem.slug}
                  problem={problem}
                  status={stateMap[problem.slug]?.status || 'unattempted'}
                  index={idx}
                />
              ))}
            </div>
          )}
        </div>

        {/* Bottom Pagination Controls & Per-Page Selector */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 text-xs font-sans text-[#a1a1aa]">
          {/* Items info */}
          <div className="flex items-center gap-2">
            <span>
              Showing {sortedProblems.length === 0 ? 0 : (safeCurrentPage - 1) * itemsPerPage + 1}–
              {Math.min(safeCurrentPage * itemsPerPage, sortedProblems.length)} of {sortedProblems.length} questions
            </span>
            <span className="text-[#52525b]">|</span>
            <div className="flex items-center gap-1.5">
              <span>Per page:</span>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="bg-[#1f1f1f] text-[#f4f4f5] border border-[#333] rounded px-2 py-0.5 focus:outline-none cursor-pointer"
              >
                <option value={50}>50</option>
                <option value={100}>100</option>
                <option value={200}>200</option>
                <option value={1000}>All ({sortedProblems.length})</option>
              </select>
            </div>
          </div>

          {/* Page numbers navigation */}
          {totalPages > 1 && (
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => goToPage(1)}
                disabled={safeCurrentPage === 1}
                className="p-1.5 rounded bg-[#1c1c1c] border border-[#2e2e2e] text-[#a1a1aa] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                title="First Page"
              >
                <ChevronsLeft className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => goToPage(safeCurrentPage - 1)}
                disabled={safeCurrentPage === 1}
                className="p-1.5 rounded bg-[#1c1c1c] border border-[#2e2e2e] text-[#a1a1aa] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                title="Previous Page"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>

              {pageNumbers.map((num, i) =>
                typeof num === 'number' ? (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goToPage(num)}
                    className={cn(
                      'min-w-7 h-7 px-2 rounded text-xs font-medium transition-colors',
                      safeCurrentPage === num
                        ? 'bg-[#3b82f6] text-white font-semibold'
                        : 'bg-[#1c1c1c] border border-[#2e2e2e] text-[#a1a1aa] hover:text-white'
                    )}
                  >
                    {num}
                  </button>
                ) : (
                  <span key={i} className="px-1 text-[#71717a] select-none">
                    ...
                  </span>
                )
              )}

              <button
                type="button"
                onClick={() => goToPage(safeCurrentPage + 1)}
                disabled={safeCurrentPage === totalPages}
                className="p-1.5 rounded bg-[#1c1c1c] border border-[#2e2e2e] text-[#a1a1aa] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                title="Next Page"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => goToPage(totalPages)}
                disabled={safeCurrentPage === totalPages}
                className="p-1.5 rounded bg-[#1c1c1c] border border-[#2e2e2e] text-[#a1a1aa] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                title="Last Page"
              >
                <ChevronsRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Floating Action Buttons Matching Image 1 (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-2.5 z-40">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#27272a] hover:bg-[#3f3f46] text-[#e4e4e7] border border-[#3f3f46] shadow-lg flex items-center justify-center transition-all cursor-pointer hover:scale-105"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Daily Challenge Button (Green Circle matching screenshot) */}
        <button
          type="button"
          onClick={handleJumpToDaily}
          className="w-11 h-11 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-black shadow-xl flex items-center justify-center transition-all cursor-pointer hover:scale-105"
          title="Daily Challenge: Jump to Featured Problem"
        >
          <Calendar className="w-5 h-5 text-white" />
        </button>

        {/* Quick Problem List Button (Amber/Gold Circle matching screenshot) */}
        <button
          type="button"
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-[#fde047] hover:bg-[#facc15] text-black shadow-xl flex items-center justify-center transition-all cursor-pointer hover:scale-105"
          title="Scroll to Question List"
        >
          <Layers className="w-5 h-5 text-black" />
        </button>
      </div>
    </div>
  );
}

export default DsaPageContent;
