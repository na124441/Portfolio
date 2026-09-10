'use client';

import React, { useState } from 'react';
import { ConceptCard } from '@/components/bytelogic/ui/ConceptCard';
import { FEATURED_CONTENT, ContentFormat } from '@/lib/bytelogic/tokens';
import { cn } from '@/lib/utils';

export const ContentShowcaseSection: React.FC = () => {
  const [selectedFormat, setSelectedFormat] = useState<string>('ALL');

  const filterTabs = [
    { key: 'ALL', label: 'All Formats' },
    { key: 'CONCEPT', label: 'Concepts' },
    { key: 'ARTICLE', label: 'Articles' },
    { key: 'VIDEO', label: 'Videos' },
    { key: 'VISUAL', label: 'Visuals' },
    { key: 'IMPLEMENTATION', label: 'Code' },
    { key: 'EXPERIMENT', label: 'Experiments' },
  ];

  const filteredContent = FEATURED_CONTENT.filter((item) => {
    if (selectedFormat === 'ALL') return true;
    return item.type === selectedFormat;
  });

  return (
    <section id="content" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 border-t border-[#1C2830]">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-8 border-b border-[#1C2830] text-xs font-mono">
        <div className="flex items-center gap-2 text-[#019AA2]">
          <span className="font-semibold">04 / LATEST TECHNICAL CONTENT</span>
        </div>
        <span className="text-[#68747D]">MULTI-FORMAT KNOWLEDGE</span>
      </div>

      {/* Title & Format Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-[#F3F6F7]">
            Publications, Visuals & Implementations
          </h2>
          <p className="mt-2 text-sm text-[#A8B3BA] font-sans max-w-xl leading-relaxed">
            Technical knowledge delivered in the format that best conveys the underlying logic: mathematical write-ups, interactive visual models, and clean from-scratch code.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 max-w-full overflow-x-auto py-1 bl-scrollbar text-xs font-mono">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedFormat(tab.key)}
              className={cn(
                'min-h-[36px] sm:min-h-0 px-3 py-1.5 rounded-[4px] border text-[11px] whitespace-nowrap transition-colors cursor-pointer flex items-center justify-center',
                selectedFormat === tab.key
                  ? 'border-[#019AA2] bg-[#019AA2]/15 text-[#019AA2] font-semibold'
                  : 'border-[#1C2830] bg-[#0E151B] text-[#A8B3BA] hover:text-[#F3F6F7] hover:border-[#A8B3BA]/40'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredContent.map((item) => (
          <ConceptCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
