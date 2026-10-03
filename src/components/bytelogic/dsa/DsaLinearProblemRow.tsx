'use client';

import React from 'react';
import Link from 'next/link';
import { Check, Calendar, Lock, BarChart2 } from 'lucide-react';
import type { DsaProblem, DsaStatus } from '@/types/dsa-question';
import { getAcceptanceRate, getDifficultyMeta } from '@/lib/bytelogic/leetcode-utils';
import { cn } from '@/lib/utils';

interface DsaLinearProblemRowProps {
  problem: DsaProblem;
  status: DsaStatus;
  index: number;
}

export function DsaLinearProblemRow({ problem, status, index }: DsaLinearProblemRowProps) {
  const diff = getDifficultyMeta(problem.difficulty);
  const acceptance = getAcceptanceRate(problem);
  const isEven = index % 2 === 0;

  // Let problem order 1 or items with order % 29 === 0 be marked with the daily challenge calendar icon
  const isDailyChallenge = problem.order === 1 || problem.order % 37 === 0;

  return (
    <Link
      href={`/bytelogic/questions/dsa/${problem.slug}`}
      className={cn(
        'group flex items-center justify-between px-3 sm:px-4 py-3 sm:py-3.5 transition-colors cursor-pointer text-xs sm:text-sm font-sans border-b border-line/40',
        isEven ? 'bg-surface' : 'bg-bg-2',
        'hover:bg-surface-2'
      )}
    >
      {/* Left: Status Check & Title */}
      <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1 pr-3">
        {/* Status Indicator */}
        <div className="w-5 h-5 flex items-center justify-center shrink-0">
          {status === 'solved' ? (
            <Check className="w-4 h-4 text-[#2cbb5d] stroke-[2.5]" />
          ) : status === 'attempted' ? (
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffa116]" title="Attempted" />
          ) : status === 'revisit' ? (
            <div className="w-2.5 h-2.5 rounded-full bg-[#a855f7]" title="Revisit" />
          ) : (
            <div className="w-2.5 h-2.5 rounded-full bg-transparent" />
          )}
        </div>

        {/* Daily icon if featured */}
        {isDailyChallenge && (
          <Calendar className="w-3.5 h-3.5 text-accent shrink-0 hidden xs:inline" />
        )}

        {/* Title */}
        <div className="truncate flex items-center gap-1.5 font-medium text-fg group-hover:text-accent transition-colors">
          <span className="font-semibold text-fg">
            {problem.order}.
          </span>
          <span className="truncate">
            {problem.title}
          </span>
        </div>
      </div>

      {/* Right Columns: Acceptance, Difficulty, Lock / Frequency */}
      <div className="flex items-center gap-4 sm:gap-8 shrink-0 text-right font-mono text-xs">
        {/* Acceptance Rate */}
        <span className="text-fg-soft hidden sm:inline-block w-14">
          {acceptance}
        </span>

        {/* Difficulty Badge */}
        <span
          className={cn(
            'w-12 text-center font-medium font-sans text-xs',
            diff.textClass
          )}
        >
          {diff.label}
        </span>

        {/* Lock / Action Icons */}
        <div className="w-8 flex items-center justify-end gap-1 text-fg-muted">
          <Lock className="w-3.5 h-3.5" />
          <BarChart2 className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
}

export default DsaLinearProblemRow;
