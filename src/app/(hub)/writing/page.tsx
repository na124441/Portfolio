'use client';

import React, { useState } from 'react';
import { BUILD_LOG_ENTRIES } from '@/data/build-log';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Calendar, Tag, Terminal, ArrowRight } from 'lucide-react';

export default function WritingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Architecture', 'Research', 'AI / ML', 'Graphics', 'Engineering'];

  const filteredEntries = selectedCategory === 'ALL'
    ? BUILD_LOG_ENTRIES
    : BUILD_LOG_ENTRIES.filter((e) => e.category === selectedCategory);

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
      <SectionHeader
        number="01"
        tag="Journal // Log"
        title="Technical Journal & Build Log"
        subtitle="Chronological records of architectural decisions, systems profiling, benchmark evaluations, and engineering milestones."
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
        <span className="text-white/40 uppercase tracking-wider mr-2">Filter Stream:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 border transition-colors ${
              selectedCategory === cat
                ? 'border-[#d4af37] bg-[#d4af37]/10 text-[#dfb15b]'
                : 'border-white/10 bg-white/[0.02] text-white/60 hover:text-white hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Chronological Timeline Entries */}
      <div className="space-y-6">
        {filteredEntries.map((entry) => (
          <article
            key={entry.id}
            className="p-6 sm:p-8 glass-panel glass-panel-hover corner-brackets space-y-4"
          >
            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-semibold text-[#dfb15b]">
                  {entry.date}
                </span>
                <span className="text-white/30 font-mono text-xs">·</span>
                <Badge variant="outline" size="sm">
                  {entry.category}
                </Badge>
              </div>

              {entry.relatedProject && (
                <span className="font-mono text-[11px] text-white/50 bg-white/[0.03] border border-white/10 px-2 py-0.5">
                  Project: {entry.relatedProject}
                </span>
              )}
            </div>

            {/* Title */}
            <h2 className="font-display text-lg sm:text-xl font-bold text-[#feffff]">
              {entry.title}
            </h2>

            {/* Summary */}
            <p className="font-sans text-sm text-white/80 leading-relaxed">
              {entry.summary}
            </p>

            {/* Bulleted Technical Details */}
            {entry.details && entry.details.length > 0 && (
              <div className="p-4 bg-white/[0.02] border border-white/5 space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#dfb15b] block">
                  Key Technical Observations:
                </span>
                <ul className="space-y-1.5 text-xs font-sans text-white/70">
                  {entry.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#dfb15b] font-mono mt-0.5">▸</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags */}
            <div className="pt-2 flex flex-wrap gap-1.5 border-t border-white/5">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] text-white/40 bg-white/5 px-2 py-0.5"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Footer Colophon */}
      <div className="p-6 border border-white/10 bg-white/[0.01] text-center space-y-2">
        <p className="font-mono text-xs text-white/50">
          This log is maintained as an engineering habit: document every invariant, benchmark, and failure mode.
        </p>
        <p className="font-sans text-xs text-white/40">
          Full-length technical essays on reinforcement learning architectures and Vulkan memory allocators are currently being prepared.
        </p>
      </div>
    </div>
  );
}
