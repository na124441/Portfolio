'use client';

import React, { useState, useMemo } from 'react';
import { DsaHero } from './DsaHero';
import { DsaFilterToolbar } from './DsaFilterToolbar';
import { DsaProblemCard } from './DsaProblemCard';
import { DsaProgressOverview } from './DsaProgressOverview';
import { getAllDsaProblems } from '@/data/bytelogic/dsa';
import { useDsaProgress } from '@/lib/bytelogic/dsaProgress';
import type { DsaDifficulty, DsaStatus } from '@/types/dsa-question';
import { BookOpen } from 'lucide-react';

export function DsaPageContent() {
  const allProblems = useMemo(() => getAllDsaProblems(), []);
  const { stateMap, isLoaded } = useDsaProgress();

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'ALL' | DsaDifficulty>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<'ALL' | DsaStatus>('ALL');

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

  const solvedCount = useMemo(() => {
    return allProblems.filter((p) => stateMap[p.slug]?.status === 'solved').length;
  }, [allProblems, stateMap]);

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#05070A] text-[#F3F6F7]">
      {/* Hero Section */}
      <DsaHero totalCount={allProblems.length} solvedCount={solvedCount} />

      {/* Sticky Filter Toolbar */}
      <DsaFilterToolbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedTopic={selectedTopic}
        onTopicChange={setSelectedTopic}
        selectedDifficulty={selectedDifficulty}
        onDifficultyChange={setSelectedDifficulty}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
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
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#019AA2] font-semibold">03 //</span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#68747D]">
                Problem Catalog
              </span>
            </div>
            <span className="text-xs font-mono text-[#68747D]">
              Ordered along learning curve
            </span>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {filteredProblems.map((problem) => (
                <DsaProblemCard
                  key={problem.slug}
                  problem={problem}
                  status={stateMap[problem.slug]?.status || 'unattempted'}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DsaPageContent;
