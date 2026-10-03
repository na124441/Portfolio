'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, FileText, Video, Eye, Code, Terminal, Sparkles } from 'lucide-react';
import { FEATURED_CONTENT, ContentFormat } from '@/lib/bytelogic/tokens';
import { cn } from '@/lib/utils';

export const LatestKnowledgeSection: React.FC = () => {
  const [selectedFormat, setSelectedFormat] = useState<string>('ALL');

  const filterTabs = [
    { key: 'ALL', label: 'All Catalog' },
    { key: 'CONCEPT', label: 'Concepts' },
    { key: 'ARTICLE', label: 'Articles' },
    { key: 'VIDEO', label: 'Lectures' },
    { key: 'VISUAL', label: 'Visuals' },
    { key: 'IMPLEMENTATION', label: 'Code' },
    { key: 'EXPERIMENT', label: 'Experiments' },
  ];

  const filteredContent = FEATURED_CONTENT.filter((item) => {
    if (selectedFormat === 'ALL') return true;
    return item.type === selectedFormat;
  });

  const getFormatIcon = (format: ContentFormat) => {
    switch (format) {
      case 'CONCEPT':
        return <Sparkles className="w-3.5 h-3.5 text-accent" />;
      case 'ARTICLE':
        return <FileText className="w-3.5 h-3.5 text-fg-soft" />;
      case 'VIDEO':
        return <Video className="w-3.5 h-3.5 text-[#3b82f6]" />;
      case 'VISUAL':
        return <Eye className="w-3.5 h-3.5 text-[#10b981]" />;
      case 'IMPLEMENTATION':
        return <Code className="w-3.5 h-3.5 text-[#f59e0b]" />;
      case 'EXPERIMENT':
        return <Terminal className="w-3.5 h-3.5 text-accent" />;
    }
  };

  return (
    <section
      id="archive"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 border-t border-line relative z-10"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-8 sm:mb-12 border-b border-line text-xs font-mono">
        <div className="flex items-center gap-2 text-accent">
          <span className="w-2 h-2 rounded-[2px] bg-accent" />
          <span className="font-semibold tracking-wider">05 / LATEST KNOWLEDGE</span>
        </div>
        <div className="flex items-center gap-3 text-fg-muted text-[11px]">
          <span>TECHNICAL ARCHIVE & INDEX</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-fg-soft">{filteredContent.length} ENTRIES</span>
        </div>
      </div>

      {/* Narrative Headline & Format Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-fg">
            Technical Research & Archive Index
          </h2>
          <p className="mt-2 text-sm text-fg-soft font-sans max-w-xl leading-relaxed">
            Multi-format computational knowledge indexed by analytical rigor: from complete mathematical dossiers to vectorized kernels and empirical simulations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 max-w-full overflow-x-auto py-1 bl-scrollbar text-xs font-mono">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedFormat(tab.key)}
              className={cn(
                'min-h-[36px] px-3 py-1.5 rounded-[4px] border text-[11px] whitespace-nowrap transition-colors cursor-pointer flex items-center justify-center',
                selectedFormat === tab.key
                  ? 'border-accent bg-accent-soft text-accent font-semibold'
                  : 'border-line bg-surface text-fg-soft hover:text-fg hover:border-line-strong'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Technical Archive Index Table (Desktop / Tablet) */}
      <div className="hidden md:block rounded-[6px] bg-surface border border-line overflow-hidden bl-tick-box">
        <div className="w-full overflow-x-auto bl-scrollbar">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="bg-bg-2 border-b border-line text-fg-muted text-[11px]">
                <th className="py-3 px-4 font-medium">REF ID</th>
                <th className="py-3 px-4 font-medium">TITLE & SUMMARY</th>
                <th className="py-3 px-4 font-medium">FORMAT</th>
                <th className="py-3 px-4 font-medium">DOMAIN</th>
                <th className="py-3 px-4 font-medium">DIFFICULTY</th>
                <th className="py-3 px-4 font-medium">DURATION</th>
                <th className="py-3 px-4 font-medium text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {filteredContent.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-surface-2/60 transition-colors group"
                >
                  {/* Ref ID */}
                  <td className="py-4 px-4 text-accent font-semibold whitespace-nowrap">
                    BL-PUB-{item.code}
                  </td>

                  {/* Title & Subtitle */}
                  <td className="py-4 px-4 max-w-sm">
                    <Link
                      href={item.slug}
                      className="font-sans font-bold text-sm text-fg group-hover:text-accent transition-colors block"
                    >
                      {item.title}
                    </Link>
                    <span className="text-[11px] text-fg-muted font-sans block truncate mt-0.5">
                      {item.subtitle}
                    </span>
                  </td>

                  {/* Format Badge */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[3px] bg-bg border border-line text-[10px] text-fg-soft">
                      {getFormatIcon(item.type)}
                      <span>{item.type}</span>
                    </span>
                  </td>

                  {/* Domain */}
                  <td className="py-4 px-4 text-fg-soft whitespace-nowrap">
                    {item.domain.split('·')[0].trim()}
                  </td>

                  {/* Difficulty */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span className="text-[11px] text-fg-muted">
                      {item.difficulty}
                    </span>
                  </td>

                  {/* Duration */}
                  <td className="py-4 px-4 text-fg-muted whitespace-nowrap">
                    {item.durationOrReadTime}
                  </td>

                  {/* Action Link */}
                  <td className="py-4 px-4 text-right whitespace-nowrap">
                    <Link
                      href={item.slug}
                      className="inline-flex items-center gap-1 text-accent hover:opacity-80 font-semibold text-xs transition-opacity"
                    >
                      <span>Access</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Catalog Cards (< 768px) */}
      <div className="md:hidden space-y-3">
        {filteredContent.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-[6px] bg-surface border border-line space-y-3 font-mono text-xs"
          >
            <div className="flex items-center justify-between">
              <span className="text-accent font-semibold">
                BL-PUB-{item.code}
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[3px] bg-bg border border-line text-[10px] text-fg-soft">
                {getFormatIcon(item.type)}
                <span>{item.type}</span>
              </span>
            </div>

            <div>
              <Link
                href={item.slug}
                className="font-sans font-bold text-base text-fg hover:text-accent transition-colors block"
              >
                {item.title}
              </Link>
              <p className="mt-1 text-xs text-fg-soft font-sans leading-relaxed">
                {item.subtitle}
              </p>
            </div>

            <div className="pt-2 border-t border-line flex items-center justify-between text-[11px] text-fg-muted">
              <span>{item.durationOrReadTime}</span>
              <Link
                href={item.slug}
                className="inline-flex items-center gap-1 text-accent font-semibold"
              >
                <span>Access Entry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
