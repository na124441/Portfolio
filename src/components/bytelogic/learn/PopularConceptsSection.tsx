'use client';

import React from 'react';
import { LearnConcept } from '@/lib/bytelogic/learnData';
import { LearnConceptCard } from '@/components/bytelogic/learn/LearnConceptCard';
import { Sparkles, Terminal } from 'lucide-react';
import Link from 'next/link';

interface PopularConceptsSectionProps {
  concepts: LearnConcept[];
  isFiltered?: boolean;
  totalAvailable?: number;
}

export const PopularConceptsSection: React.FC<PopularConceptsSectionProps> = ({
  concepts,
  isFiltered,
  totalAvailable,
}) => {
  return (
    <section id="concepts" className="relative w-full border-b border-line bg-bg-2 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 border-b border-line">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-accent font-semibold tracking-wider">
                05 //
              </span>
              <span className="text-xs font-mono text-fg-muted uppercase tracking-widest">
                {isFiltered ? 'FILTERED EXPLORATION CATALOG' : 'DIRECT ENTRY CATALOG'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-sans tracking-tight text-fg uppercase">
              {isFiltered ? 'MATCHING CONCEPTS' : 'POPULAR CONCEPTS'}
            </h2>
          </div>

          <p className="mt-3 md:mt-0 text-xs sm:text-sm text-fg-soft font-sans max-w-md leading-relaxed">
            {isFiltered
              ? `Displaying ${concepts.length} active matching concepts. Click any card to launch interactive visualization or code implementation.`
              : 'Direct entry points into core algorithmic, mathematical, and machine learning principles with full derivations and interactive simulations.'}
          </p>
        </div>

        {/* 3-Column Grid on Desktop, 2 on Tablet, 1 on Mobile */}
        {concepts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {concepts.map((concept) => (
              <LearnConceptCard key={concept.id} concept={concept} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center border border-line rounded-[6px] bg-surface p-8">
            <Terminal className="w-8 h-8 text-accent mx-auto mb-3 opacity-60" />
            <h3 className="text-base font-mono text-fg uppercase tracking-wider">
              NO CONCEPTS MATCH YOUR CURRENT FILTERS
            </h3>
            <p className="text-xs text-fg-soft mt-1 max-w-md mx-auto">
              Try adjusting your query or resetting the domain and difficulty filters above to view the full knowledge index.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
