'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Tag, BookOpen, Layers, ArrowRight } from 'lucide-react';
import { ArticleMetadata } from '@/types/bytelogic-article';
import { ARTICLE_001_METADATA } from '@/data/bytelogic/articles/more-data';
import { cn } from '@/lib/utils';

export interface FrameworkNode {
  num: string;
  label: string;
  title: string;
  sub: string;
  highlight?: boolean;
}

export interface ArticleHeroProps {
  metadata?: ArticleMetadata;
  frameworkNodes?: FrameworkNode[];
  frameworkLabel?: string;
  className?: string;
}

export const ArticleHero: React.FC<ArticleHeroProps> = ({
  metadata,
  frameworkNodes,
  frameworkLabel = 'CONCEPTUAL CHAIN OF INFERENCE',
  className,
}) => {
  const meta = metadata || ARTICLE_001_METADATA;
  const nodes: FrameworkNode[] = frameworkNodes || [
    { num: '01', label: 'OBSERVATIONS', title: 'DATA', sub: 'Volume / Cardinality' },
    { num: '02', label: 'ENTROPY', title: 'INFORMATION', sub: 'Uncertainty Removed', highlight: true },
    { num: '03', label: 'CAPACITY', title: 'MODEL', sub: 'Inductive Biases' },
    { num: '04', label: 'UTILITY', title: 'PERFORMANCE', sub: 'Generalization Bound' },
  ];

  return (
    <header
      className={cn(
        'w-full pt-28 sm:pt-36 pb-12 sm:pb-16 border-b border-[#1C2830] relative overflow-hidden',
        className
      )}
    >
      {/* Background Cartesian lines */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#68747D]">
          <Link
            href="/bytelogic"
            className="hover:text-[#019AA2] transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>ByteLogic</span>
          </Link>
          <span>/</span>
          <Link href="/bytelogic#archive" className="hover:text-[#019AA2] transition-colors">
            Editorial
          </Link>
          <span>/</span>
          <span className="text-[#019AA2] font-semibold">{meta.articleNumber}</span>
        </div>

        {/* Editorial Publication Badges */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono">
          <span className="px-2.5 py-1 rounded-[4px] bg-[#019AA2]/15 border border-[#019AA2]/40 text-[#019AA2] font-semibold tracking-wider">
            {meta.articleNumber}
          </span>
          <span className="px-2.5 py-1 rounded-[4px] bg-[#0E151B] border border-[#1C2830] text-[#A8B3BA] flex items-center gap-1.5">
            <Tag className="w-3 h-3 text-[#019AA2]" />
            <span>{meta.domain}</span>
          </span>
          <span className="px-2.5 py-1 rounded-[4px] bg-[#0E151B] border border-[#1C2830] text-[#A8B3BA] flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-[#019AA2]" />
            <span>{meta.readingTime}</span>
          </span>
          <span className="text-[#68747D] hidden sm:inline">•</span>
          <span className="text-[#68747D] hidden sm:inline">{meta.publishedDate}</span>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-display font-bold text-[#F3F6F7] tracking-tight leading-[1.12] text-balance">
            {meta.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#A8B3BA] font-sans font-normal leading-snug max-w-3xl">
            {meta.subtitle}
          </p>
        </div>

        {/* Minimal Abstract Vector Visual: DATA → INFORMATION → MODEL → PERFORMANCE */}
        <div className="pt-6 sm:pt-8">
          <div className="p-4 sm:p-6 rounded-[6px] bg-[#0A0F14] border border-[#1C2830] bl-tick-box">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#68747D] pb-3 mb-4 border-b border-[#1C2830]">
              <span className="uppercase tracking-widest text-[#019AA2] font-medium">
                {frameworkLabel}
              </span>
              <span>ANALYTICAL FRAMEWORK</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 font-mono text-xs">
              {nodes.map((node) => (
                <div
                  key={node.num}
                  className={cn(
                    'p-3 rounded bg-[#0E151B] border flex flex-col justify-between transition-colors',
                    node.highlight
                      ? 'border-[#019AA2]/60'
                      : 'border-[#1C2830]'
                  )}
                >
                  <div
                    className={cn(
                      'flex items-center justify-between text-[10px]',
                      node.highlight ? 'text-[#019AA2]' : 'text-[#68747D]'
                    )}
                  >
                    <span>{node.num}</span>
                    <span>{node.label}</span>
                  </div>
                  <div
                    className={cn(
                      'text-sm font-bold my-1',
                      node.highlight ? 'text-[#019AA2]' : 'text-[#F3F6F7]'
                    )}
                  >
                    {node.title}
                  </div>
                  <div className="text-[10px] text-[#A8B3BA]">{node.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
