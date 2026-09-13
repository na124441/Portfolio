'use client';

import React from 'react';
import { LEARN_DOMAINS, LearnDomain } from '@/lib/bytelogic/learnData';
import { DomainCard } from '@/components/bytelogic/learn/DomainCard';
import { Compass } from 'lucide-react';

interface DomainGridProps {
  onSelectDomainFilter?: (domainTitle: string) => void;
}

export const DomainGrid: React.FC<DomainGridProps> = ({ onSelectDomainFilter }) => {
  return (
    <section id="domains" className="relative w-full border-b border-[#1C2830] bg-[#05070A] py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 border-b border-[#1C2830]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-[#019AA2] font-semibold tracking-wider">
                02 //
              </span>
              <span className="text-xs font-mono text-[#68747D] uppercase tracking-widest">
                PRIMARY KNOWLEDGE DOMAINS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-sans tracking-tight text-[#F3F6F7] uppercase">
              LEARNING DOMAINS
            </h2>
          </div>

          <p className="mt-3 md:mt-0 text-xs sm:text-sm text-[#A8B3BA] font-sans max-w-md leading-relaxed">
            Eight foundational disciplines. Hover over any domain card to inspect its internal structure and subtopics.
          </p>
        </div>

        {/* 4-Column Editorial Grid on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {LEARN_DOMAINS.map((domain) => (
            <DomainCard
              key={domain.id}
              domain={domain}
              onSelectDomainFilter={onSelectDomainFilter}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
