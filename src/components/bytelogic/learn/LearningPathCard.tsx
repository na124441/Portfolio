'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, BookOpen, Layers, ChevronDown, ChevronUp } from 'lucide-react';
import { LearnPath } from '@/lib/bytelogic/learnData';
import { cn } from '@/lib/utils';

interface LearningPathCardProps {
  path: LearnPath;
}

export const LearningPathCard: React.FC<LearningPathCardProps> = ({ path }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative flex flex-col justify-between rounded-[6px] border border-[#1C2830] bg-[#0E151B] p-6 sm:p-7 transition-all duration-300 hover:border-[#019AA2]/50 hover:bg-[#111A22] overflow-hidden">
      {/* Micro Corner Ticks */}
      <div className="bl-tick-box absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Top Meta Line: Code + Difficulty + Time */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono mb-3">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-[3px] bg-[#131C24] border border-[#1C2830] text-[#019AA2] font-bold text-xs">
              PATH // {path.code}
            </span>
            <span className="px-2 py-0.5 rounded-[3px] bg-[#132279]/40 border border-[#132279] text-[#F3F6F7] text-[10px]">
              {path.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-[#68747D]">
            <span className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-[#019AA2]" />
              <span>{path.conceptCount} Concepts</span>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#019AA2]" />
              <span>{path.estimatedTime}</span>
            </span>
          </div>
        </div>

        {/* Path Title & Description */}
        <h3 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-[#F3F6F7] group-hover:text-[#F3F6F7] transition-colors">
          {path.title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-[#A8B3BA] leading-relaxed">
          {path.description}
        </p>

        {/* Sequential Step Progression Flow Visual */}
        <div className="mt-5 pt-4 border-t border-[#1C2830]">
          <div className="flex items-center justify-between text-xs font-mono mb-3">
            <span className="text-[10px] text-[#68747D] uppercase tracking-wider">
              CURRICULUM PROGRESSION ({path.steps.length} STAGES):
            </span>
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[10px] text-[#019AA2] hover:underline flex items-center gap-1 focus:outline-none"
            >
              <span>{isExpanded ? 'Collapse' : 'Inspect Steps'}</span>
              {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>

          {/* Compact Horizontal Flow Chips */}
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] sm:text-xs text-[#A8B3BA]">
            {path.steps.map((st, i) => (
              <React.Fragment key={st.step}>
                <span className="px-2 py-1 rounded-[3px] bg-[#05070A] border border-[#1C2830] group-hover:border-[#019AA2]/40 transition-colors whitespace-nowrap">
                  <span className="text-[#019AA2] font-semibold mr-1">{st.step}</span>
                  <span>{st.title}</span>
                </span>
                {i < path.steps.length - 1 && (
                  <span className="text-[#019AA2] select-none">→</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Expandable Step-by-Step Curriculum Dossier */}
          {isExpanded && (
            <div className="mt-4 pt-3 border-t border-[#1C2830]/80 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono animate-in fade-in duration-200">
              {path.steps.map((st) => (
                <div
                  key={st.step}
                  className="p-2.5 rounded-[4px] bg-[#05070A]/80 border border-[#1C2830] flex flex-col"
                >
                  <div className="flex items-center gap-1.5 text-[#019AA2] font-semibold text-[11px]">
                    <span>STEP {st.step} //</span>
                    <span className="text-[#F3F6F7]">{st.title}</span>
                  </div>
                  <span className="mt-1 text-[10px] text-[#68747D] leading-tight">
                    {st.description}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="mt-6 pt-4 border-t border-[#1C2830] flex items-center justify-between text-xs font-mono">
        <div className="text-[10px] text-[#68747D]">
          <span>STARTING AT: </span>
          <span className="text-[#A8B3BA] font-semibold">{path.startPoint}</span>
        </div>

        <Link
          href={path.slug}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] bg-[#019AA2] hover:bg-[#01868D] text-[#05070A] font-bold transition-all group-hover:shadow-[0_0_16px_rgba(1,154,162,0.4)]"
        >
          <span>START PATH</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
