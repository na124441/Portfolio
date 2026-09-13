'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Sparkles, Code, Play, Terminal } from 'lucide-react';
import { LearnConcept, ConceptFormat } from '@/lib/bytelogic/learnData';
import { cn } from '@/lib/utils';

interface LearnConceptCardProps {
  concept: LearnConcept;
}

const FORMAT_ICONS: Record<ConceptFormat, React.ReactNode> = {
  CONCEPT: <BookOpen className="w-3 h-3 text-[#019AA2]" />,
  VISUAL: <Sparkles className="w-3 h-3 text-[#019AA2]" />,
  IMPLEMENTATION: <Code className="w-3 h-3 text-[#019AA2]" />,
  EXPERIMENT: <Terminal className="w-3 h-3 text-[#019AA2]" />,
  VIDEO: <Play className="w-3 h-3 text-[#019AA2]" />,
  ARTICLE: <BookOpen className="w-3 h-3 text-[#019AA2]" />,
};

export const LearnConceptCard: React.FC<LearnConceptCardProps> = ({ concept }) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-[6px] border border-[#1C2830] bg-[#0E151B] p-5 sm:p-6 transition-all duration-300 hover:border-[#019AA2]/50 hover:bg-[#111A22] overflow-hidden">
      {/* Micro Corner Ticks */}
      <div className="bl-tick-box absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Top Meta Line: Domain + Subdomain + Difficulty */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono mb-2.5">
          <div className="flex items-center gap-1.5 truncate">
            <span className="text-[#019AA2] font-semibold text-[11px] truncate">
              {concept.domain}
            </span>
            <span className="text-[#68747D]">/</span>
            <span className="text-[10px] text-[#A8B3BA] truncate">
              {concept.subdomain}
            </span>
          </div>

          <span
            className={cn(
              'px-2 py-0.5 rounded-[3px] text-[9px] font-mono uppercase tracking-wider',
              concept.difficulty === 'FOUNDATION'
                ? 'bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30'
                : concept.difficulty === 'INTERMEDIATE'
                ? 'bg-[#019AA2]/15 text-[#019AA2] border border-[#019AA2]/30'
                : 'bg-[#ec4899]/15 text-[#ec4899] border border-[#ec4899]/30'
            )}
          >
            {concept.difficulty}
          </span>
        </div>

        {/* Concept Title */}
        <h3 className="text-base sm:text-lg font-bold font-sans tracking-tight text-[#F3F6F7] group-hover:text-[#019AA2] transition-colors line-clamp-1">
          {concept.title}
        </h3>

        {/* Concept Description */}
        <p className="mt-2 text-xs text-[#A8B3BA] leading-relaxed line-clamp-2 font-sans">
          {concept.description}
        </p>

        {/* Available Format Chips */}
        <div className="mt-3.5 pt-3 border-t border-[#1C2830] flex flex-wrap items-center gap-1.5">
          {concept.formats.map((fmt) => (
            <span
              key={fmt}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[3px] bg-[#05070A] border border-[#1C2830] text-[9.5px] font-mono text-[#A8B3BA]"
            >
              {FORMAT_ICONS[fmt]}
              <span>{fmt}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="mt-5 pt-3 border-t border-[#1C2830] flex items-center justify-between text-xs font-mono">
        <span className="text-[10px] text-[#68747D]">
          {concept.estimatedTime}
        </span>

        <Link
          href={concept.slug}
          className="inline-flex items-center gap-1 text-xs text-[#019AA2] font-semibold group-hover:translate-x-1 transition-transform"
        >
          <span>Explore</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
