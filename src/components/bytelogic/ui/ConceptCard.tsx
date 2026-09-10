'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play, BookOpen, Eye, Code, Terminal, Sparkles } from 'lucide-react';
import { ContentItem } from '@/lib/bytelogic/tokens';
import { cn } from '@/lib/utils';

export interface ConceptCardProps {
  item: ContentItem;
  className?: string;
}

export const ConceptCard: React.FC<ConceptCardProps> = ({ item, className }) => {
  const formatIcons = {
    CONCEPT: <Sparkles className="w-3.5 h-3.5 text-[#019AA2]" />,
    ARTICLE: <BookOpen className="w-3.5 h-3.5 text-[#A8B3BA]" />,
    VIDEO: <Play className="w-3.5 h-3.5 text-[#019AA2]" />,
    VISUAL: <Eye className="w-3.5 h-3.5 text-[#019AA2]" />,
    IMPLEMENTATION: <Code className="w-3.5 h-3.5 text-[#A8B3BA]" />,
    EXPERIMENT: <Terminal className="w-3.5 h-3.5 text-[#019AA2]" />,
  };

  const actionLabels = {
    CONCEPT: 'Explore Concept',
    ARTICLE: 'Read Article',
    VIDEO: 'Watch Video',
    VISUAL: 'Launch Visual',
    IMPLEMENTATION: 'View Code',
    EXPERIMENT: 'Open Experiment',
  };

  return (
    <Link
      href={item.slug}
      className={cn(
        'group flex flex-col justify-between p-5 sm:p-6 rounded-[6px] bl-card-interactive bl-tick-box relative focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#019AA2]',
        className
      )}
    >
      {/* Top Meta Line: 01 / FORMAT & Duration */}
      <div>
        <div className="flex items-center justify-between text-xs font-mono mb-3">
          <div className="flex items-center gap-2">
            <span className="text-[#019AA2] font-semibold">{item.code} /</span>
            <span className="text-[#A8B3BA] uppercase tracking-wider flex items-center gap-1.5 font-medium">
              {formatIcons[item.type]}
              {item.type}
            </span>
          </div>
          <span className="text-[#68747D] text-[11px] font-medium tracking-tight">
            {item.durationOrReadTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-sans text-base sm:text-lg font-semibold text-[#F3F6F7] group-hover:text-[#feffff] tracking-tight transition-colors">
          {item.title}
        </h3>

        {/* Subtitle / Description */}
        <p className="mt-2 text-xs sm:text-sm text-[#A8B3BA] leading-relaxed font-sans line-clamp-2">
          {item.subtitle}
        </p>

        {/* Optional LaTeX snippet or code preview if provided */}
        {item.equationOrSnippet && (
          <div className="mt-3 px-3 py-1.5 rounded-[4px] bg-[#0A0F14] border border-[#1C2830] text-[11px] font-mono text-[#68747D] truncate group-hover:text-[#A8B3BA] transition-colors">
            <code>{item.equationOrSnippet}</code>
          </div>
        )}
      </div>

      {/* Bottom Metadata & Action */}
      <div className="mt-5 pt-4 border-t border-[#1C2830] flex items-center justify-between text-xs font-mono">
        <div className="flex flex-col">
          <span className="text-[11px] text-[#68747D] uppercase tracking-wider truncate max-w-[200px]">
            {item.domain}
          </span>
          <span className="text-[10px] text-[#A8B3BA]/70">
            {item.difficulty}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-[#019AA2] font-semibold tracking-wider group-hover:text-[#02b3bc] transition-colors shrink-0">
          <span>{actionLabels[item.type]}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};
