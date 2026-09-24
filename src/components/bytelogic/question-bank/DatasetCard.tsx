'use client';

import React from 'react';
import { ArrowUpRight, Database } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { QuestionBankDataset } from '@/types/question-bank';

export interface DatasetCardProps {
  dataset: QuestionBankDataset;
  className?: string;
}

export function DatasetCard({ dataset, className }: DatasetCardProps) {
  const { name, source, sourceUrl, rationale } = dataset;

  const getPlatformBadge = (src: string) => {
    if (src.toLowerCase().includes('kaggle')) {
      return { label: 'Kaggle', color: 'bg-[#20BEFF]/10 text-[#20BEFF] border-[#20BEFF]/30' };
    }
    if (src.toLowerCase().includes('hf') || src.toLowerCase().includes('huggingface')) {
      return { label: 'Hugging Face', color: 'bg-[#FFD21E]/10 text-[#FFD21E] border-[#FFD21E]/30' };
    }
    if (src.toLowerCase().includes('uci')) {
      return { label: 'UCI ML', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' };
    }
    return { label: 'Dataset', color: 'bg-[#019AA2]/10 text-[#019AA2] border-[#019AA2]/30' };
  };

  const badge = getPlatformBadge(source);

  return (
    <a
      href={sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group block p-4 sm:p-5 bg-[#0A0F14] border border-[#1C2830] rounded-lg transition-all duration-200 bl-tick-box relative',
        'hover:border-[#019AA2]/50 hover:-translate-y-[2px] hover:bg-[#0E151B] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#019AA2]',
        className
      )}
      aria-label={`Open dataset ${name} on ${source}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
        <div className="flex items-center gap-2.5">
          <Database className="w-4 h-4 text-[#019AA2] shrink-0" />
          <h3 className="font-sans font-semibold text-[#F3F6F7] text-base group-hover:text-[#feffff] transition-colors">
            {name}
          </h3>
          <span
            className={cn(
              'inline-flex items-center font-mono text-[11px] px-2 py-0.5 rounded border font-medium',
              badge.color
            )}
          >
            {badge.label}
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs font-mono text-[#019AA2] group-hover:text-[#02b3bc] transition-colors self-start sm:self-auto shrink-0">
          <span>Explore Dataset</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3 text-xs">
        <span className="font-mono text-[11px] text-[#68747D] shrink-0">
          Source: <span className="text-[#A8B3BA]">{source}</span>
        </span>
        <span className="hidden sm:inline text-[#1C2830]">•</span>
        <p className="text-[#A8B3BA] italic font-sans leading-relaxed">
          &ldquo;{rationale}&rdquo;
        </p>
      </div>
    </a>
  );
}

export default DatasetCard;
