'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, RefreshCw, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { DsaProblem, DsaStatus } from '@/types/dsa-question';

interface DsaProblemCardProps {
  problem: DsaProblem;
  status: DsaStatus;
}

const DIFFICULTY_STYLES: Record<string, { badge: string; border: string }> = {
  'Warm-up': {
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    border: 'border-l-blue-400',
  },
  Easy: {
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    border: 'border-l-emerald-400',
  },
  Medium: {
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    border: 'border-l-amber-400',
  },
  Hard: {
    badge: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    border: 'border-l-rose-400',
  },
};

export function DsaProblemCard({ problem, status }: DsaProblemCardProps) {
  const diffStyle = DIFFICULTY_STYLES[problem.difficulty] || DIFFICULTY_STYLES['Easy'];

  const renderStatus = () => {
    switch (status) {
      case 'solved':
        return (
          <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Solved</span>
          </span>
        );
      case 'attempted':
        return (
          <span className="flex items-center gap-1.5 text-xs font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
            <Clock className="w-3.5 h-3.5" />
            <span>In Progress</span>
          </span>
        );
      case 'revisit':
        return (
          <span className="flex items-center gap-1.5 text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Revisit</span>
          </span>
        );
      default:
        return (
          <span className="flex items-center gap-1.5 text-[11px] font-mono text-[#68747D]">
            <Circle className="w-3 h-3" />
            <span>Not attempted</span>
          </span>
        );
    }
  };

  const padOrder = String(problem.order).padStart(2, '0');

  return (
    <Link
      href={`/bytelogic/questions/dsa/${problem.slug}`}
      className={cn(
        'group flex flex-col justify-between p-5 sm:p-6 rounded-[6px] bl-card-interactive bl-tick-box relative border border-[#1C2830] border-l-4 transition-all',
        diffStyle.border
      )}
    >
      <div>
        {/* Top Meta Line: Order / Topic / Difficulty / Status */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono mb-3">
          <div className="flex items-center gap-2">
            <span className="text-[#019AA2] font-semibold">{padOrder} /</span>
            <span className="text-[#A8B3BA] uppercase tracking-wider font-medium text-[11px]">
              {problem.topic}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {problem.revisit && (
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded border border-purple-500/20">
                <RefreshCw className="w-2.5 h-2.5" />
                <span>Reinforcement</span>
              </span>
            )}
            <span
              className={cn(
                'inline-flex items-center rounded px-2 py-0.5 text-[11px] font-mono font-medium border uppercase tracking-wider',
                diffStyle.badge
              )}
            >
              {problem.difficulty}
            </span>
            {renderStatus()}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-sans text-lg sm:text-xl font-semibold text-[#F3F6F7] group-hover:text-[#feffff] tracking-tight transition-colors">
          {problem.title}
        </h3>

        {/* Statement Preview */}
        <p className="mt-2 text-xs sm:text-sm text-[#A8B3BA] leading-relaxed font-sans line-clamp-2">
          {problem.statement}
        </p>

        {/* Tags */}
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {problem.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#131C24] text-[#68747D] border border-[#1C2830]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="mt-5 pt-3.5 border-t border-[#1C2830] flex items-center justify-between text-xs font-mono">
        <span className="text-[11px] text-[#68747D]">
          {problem.hints.length} Progressive Hints · Solutions in C++ &amp; Python
        </span>

        <div className="flex items-center gap-1 text-[#019AA2] font-semibold group-hover:text-[#02b3bc] transition-colors">
          <span>Open Problem</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export default DsaProblemCard;
