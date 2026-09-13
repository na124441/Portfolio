'use client';

import React, { useState, useMemo } from 'react';
import { LearnHero } from '@/components/bytelogic/learn/LearnHero';
import {
  LearnSearchAndFilter,
  DomainCategoryFilter,
  DifficultyFilter,
  FormatFilter,
} from '@/components/bytelogic/learn/LearnSearchAndFilter';
import { DomainGrid } from '@/components/bytelogic/learn/DomainGrid';
import { StartHereSection } from '@/components/bytelogic/learn/StartHereSection';
import { LearningPathsSection } from '@/components/bytelogic/learn/LearningPathsSection';
import { PopularConceptsSection } from '@/components/bytelogic/learn/PopularConceptsSection';
import { RecentlyAddedSection } from '@/components/bytelogic/learn/RecentlyAddedSection';
import { TeachingPhilosophySection } from '@/components/bytelogic/learn/TeachingPhilosophySection';
import { POPULAR_CONCEPTS, LearnConcept } from '@/lib/bytelogic/learnData';

export const LearnPageContent: React.FC = () => {
  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [domainFilter, setDomainFilter] = useState<DomainCategoryFilter>('ALL');
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('ALL');
  const [formatFilter, setFormatFilter] = useState<FormatFilter>('ALL');

  // Check if any filter is active
  const isFilterActive =
    searchQuery.trim().length > 0 ||
    domainFilter !== 'ALL' ||
    difficultyFilter !== 'ALL' ||
    formatFilter !== 'ALL';

  // Handle clicking a domain card to filter concepts
  const handleSelectDomainFilter = (domainTitle: string) => {
    // Map domain title to category if applicable
    const upper = domainTitle.toUpperCase();
    if (upper.includes('MACHINE') || upper.includes('DEEP') || upper.includes('REINFORCEMENT')) {
      setDomainFilter('AI / ML');
    } else if (upper.includes('MATH') || upper.includes('STAT')) {
      setDomainFilter('MATHEMATICS');
    } else if (upper.includes('ALGO')) {
      setDomainFilter('ALGORITHMS');
    } else if (upper.includes('SYS')) {
      setDomainFilter('SYSTEMS');
    } else if (upper.includes('COMPUTER')) {
      setDomainFilter('COMPUTER SCIENCE');
    }
    // Smooth scroll down to concepts
    const el = document.getElementById('concepts');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setDomainFilter('ALL');
    setDifficultyFilter('ALL');
    setFormatFilter('ALL');
  };

  // Filtered concepts dataset based on active inputs
  const filteredConcepts = useMemo(() => {
    return POPULAR_CONCEPTS.filter((concept) => {
      // Domain filter check
      if (domainFilter !== 'ALL' && concept.domainCategory !== domainFilter) {
        return false;
      }

      // Difficulty filter check
      if (difficultyFilter !== 'ALL' && concept.difficulty !== difficultyFilter) {
        return false;
      }

      // Format filter check
      if (formatFilter !== 'ALL' && !concept.formats.includes(formatFilter)) {
        return false;
      }

      // Search text query check
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = concept.title.toLowerCase().includes(q);
        const matchesDomain = concept.domain.toLowerCase().includes(q);
        const matchesSubdomain = concept.subdomain.toLowerCase().includes(q);
        const matchesDesc = concept.description.toLowerCase().includes(q);
        const matchesTags = concept.tags.some((t) => t.toLowerCase().includes(q));

        if (!matchesTitle && !matchesDomain && !matchesSubdomain && !matchesDesc && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, domainFilter, difficultyFilter, formatFilter]);

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#05070A] text-[#F3F6F7]">
      {/* 01 — Hero Section with Knowledge Graph Visual */}
      <LearnHero />

      {/* Discovery Search & Responsive Filters */}
      <LearnSearchAndFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        domainFilter={domainFilter}
        onDomainFilterChange={setDomainFilter}
        difficultyFilter={difficultyFilter}
        onDifficultyFilterChange={setDifficultyFilter}
        formatFilter={formatFilter}
        onFormatFilterChange={setFormatFilter}
        totalFilteredCount={filteredConcepts.length}
        filteredConcepts={filteredConcepts}
        onResetFilters={handleResetFilters}
        isFilterActive={isFilterActive}
      />

      {/* If filters or query are active, show matching concepts right below search */}
      {isFilterActive ? (
        <PopularConceptsSection
          concepts={filteredConcepts}
          isFiltered={true}
          totalAvailable={POPULAR_CONCEPTS.length}
        />
      ) : null}

      {/* 02 — Primary Knowledge Domains (8-Domain Grid) */}
      <DomainGrid onSelectDomainFilter={handleSelectDomainFilter} />

      {/* 03 — Start Here Sequence for Newcomers */}
      <StartHereSection />

      {/* 04 — Featured Structured Learning Paths */}
      <LearningPathsSection />

      {/* 05 — Popular Concepts Catalog (when not filtering) */}
      {!isFilterActive && (
        <PopularConceptsSection
          concepts={POPULAR_CONCEPTS}
          isFiltered={false}
          totalAvailable={POPULAR_CONCEPTS.length}
        />
      )}

      {/* 06 — Living Platform Recently Added Feed */}
      <RecentlyAddedSection />

      {/* 07 — How ByteLogic Teaches (Pedagogical Pipeline) */}
      <TeachingPhilosophySection />
    </div>
  );
};
