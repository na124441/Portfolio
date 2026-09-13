'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Hash } from 'lucide-react';
import { LearnDomain } from '@/lib/bytelogic/learnData';
import { cn } from '@/lib/utils';

interface DomainCardProps {
  domain: LearnDomain;
  onSelectDomainFilter?: (domainTitle: string) => void;
}

export const DomainCard: React.FC<DomainCardProps> = ({
  domain,
  onSelectDomainFilter,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'group relative flex flex-col justify-between rounded-[6px] border bg-[#0E151B] p-5 sm:p-6 transition-all duration-300 select-none overflow-hidden min-h-[220px]',
        isHovered
          ? 'border-[#019AA2]/50 bg-[#111A22] shadow-[0_8px_30px_rgba(1,154,162,0.08)]'
          : 'border-[#1C2830] hover:border-[#1C2830]'
      )}
    >
      {/* Micro Corner Ticks */}
      <div className="bl-tick-box absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity" />

      {/* Top Meta Line: Number + Code */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono mb-3">
        <span className="text-[#019AA2] font-semibold text-xs tracking-wider">
          {domain.code} //
        </span>
        <span className="text-[10px] text-[#68747D] uppercase tracking-widest">
          {domain.conceptCount} CONCEPTS
        </span>
      </div>

      {/* Domain Title & Core Description */}
      <div className="relative z-10 flex-1">
        <h3 className="text-base sm:text-lg font-bold font-sans tracking-tight text-[#F3F6F7] group-hover:text-[#F3F6F7] transition-colors uppercase">
          {domain.title}
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-[#A8B3BA] leading-relaxed line-clamp-2">
          {domain.description}
        </p>

        {/* Dynamic Mini-Map: Subtopics revealed on hover or touch */}
        <div
          className={cn(
            'mt-3 pt-3 border-t border-[#1C2830]/80 transition-all duration-300 space-y-1.5',
            isHovered
              ? 'opacity-100 max-h-48'
              : 'opacity-70 sm:opacity-40 max-h-48 sm:max-h-24 overflow-hidden'
          )}
        >
          <span className="text-[9px] font-mono uppercase tracking-widest text-[#68747D] block">
            DOMAIN STRUCTURE:
          </span>
          <div className="grid grid-cols-1 gap-1 text-[11px] font-mono text-[#A8B3BA]">
            {domain.subtopics.map((sub) => (
              <div key={sub} className="flex items-center gap-1.5 truncate">
                <span className="w-1 h-1 rounded-full bg-[#019AA2]/80 shrink-0" />
                <span className="truncate group-hover:text-[#F3F6F7] transition-colors">
                  {sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="relative z-10 mt-5 pt-3 border-t border-[#1C2830] flex items-center justify-between text-xs font-mono">
        <button
          type="button"
          onClick={() => onSelectDomainFilter?.(domain.title)}
          className="text-[10px] text-[#68747D] hover:text-[#019AA2] transition-colors flex items-center gap-1 focus:outline-none"
        >
          <span>Filter topics</span>
        </button>

        <a
          href="#concepts"
          onClick={() => onSelectDomainFilter?.(domain.title)}
          className="inline-flex items-center gap-1.5 text-xs text-[#019AA2] group-hover:translate-x-1 transition-all duration-200 font-semibold"
        >
          <span>Explore</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
