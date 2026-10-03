'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { LEARNING_PATHS } from '@/lib/bytelogic/tokens';
import { cn } from '@/lib/utils';

export const KnowledgeDomainsSection: React.FC = () => {
  const [selectedDomainId, setSelectedDomainId] = useState<string>(LEARNING_PATHS[0].id);

  const selectedPath = LEARNING_PATHS.find((p) => p.id === selectedDomainId) || LEARNING_PATHS[0];

  return (
    <section
      id="domains"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 border-t border-line relative z-10"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-8 sm:mb-12 border-b border-line text-xs font-mono">
        <div className="flex items-center gap-2 text-accent">
          <span className="w-2 h-2 rounded-[2px] bg-accent" />
          <span className="font-semibold tracking-wider">04 / EXPLORE KNOWLEDGE</span>
        </div>
        <div className="flex items-center gap-3 text-fg-muted text-[11px]">
          <span>MODULAR TECHNICAL INDEX</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-fg-soft">7 RIGOROUS DOMAINS</span>
        </div>
      </div>

      {/* Narrative Headline */}
      <div className="max-w-3xl mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-fg">
          7 Rigorous Technical Domains
        </h2>
        <p className="mt-3 text-sm sm:text-base text-fg-soft leading-relaxed font-sans">
          Built as coherent engineering trajectories. Begin with analytical foundations, inspect spatial mechanics, implement algorithms from scratch, and verify them under empirical conditions.
        </p>
      </div>

      {/* Technical Modular Index Split: Left Master List / Right Interactive Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Interactive Domain Roster (5 cols) */}
        <div className="lg:col-span-5 space-y-2 font-mono">
          <div className="text-[11px] text-fg-muted px-2 pb-1 uppercase tracking-wider flex items-center justify-between">
            <span>INDEX ROSTER</span>
            <span>MODULES / CONCEPTS</span>
          </div>

          {LEARNING_PATHS.map((path) => {
            const isSelected = selectedDomainId === path.id;
            return (
              <button
                key={path.id}
                onClick={() => setSelectedDomainId(path.id)}
                className={cn(
                  'w-full text-left p-3.5 sm:p-4 rounded-[6px] border transition-all duration-200 cursor-pointer flex items-center justify-between group min-h-[58px]',
                  isSelected
                    ? 'bg-surface border-accent text-fg'
                    : 'bg-bg-2 border-line text-fg-soft hover:text-fg hover:border-line-strong'
                )}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className={cn(
                      'text-xs font-bold px-2 py-0.5 rounded-[3px] border shrink-0',
                      isSelected
                        ? 'border-accent text-accent bg-accent-soft'
                        : 'border-line text-fg-muted bg-surface'
                    )}
                  >
                    {path.code}
                  </span>
                  <div className="truncate">
                    <span className="font-sans font-bold text-sm block truncate group-hover:text-accent transition-colors">
                      {path.title}
                    </span>
                    <span className="text-[10px] text-fg-muted font-mono block truncate">
                      {path.tagline}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 ml-2">
                  <span className="text-[11px] text-fg-muted font-mono hidden sm:inline">
                    {path.modulesCount}M · {path.conceptsCount}C
                  </span>
                  <ChevronRight
                    className={cn(
                      'w-4 h-4 transition-transform duration-200',
                      isSelected ? 'text-accent translate-x-0.5' : 'text-fg-muted'
                    )}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Detailed Domain Specification Panel (7 cols) */}
        <div className="lg:col-span-7">
          <div className="rounded-[6px] bg-surface border border-line p-6 sm:p-8 bl-tick-box">
            {/* Header Meta */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-line text-xs font-mono">
              <div className="flex items-center gap-2 text-accent">
                <span className="font-semibold">DOMAIN SPECIFICATION</span>
                <span>//</span>
                <span>{selectedPath.code}</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-[3px] bg-surface-2 border border-line text-fg-soft text-[10px] uppercase tracking-wider">
                LEVEL: {selectedPath.difficulty}
              </span>
            </div>

            {/* Title & Tagline */}
            <h3 className="text-2xl sm:text-3xl font-bold font-sans text-fg tracking-tight">
              {selectedPath.title}
            </h3>
            <p className="mt-1 text-sm text-accent font-mono">
              {selectedPath.tagline}
            </p>

            {/* Description */}
            <p className="mt-4 text-sm text-fg-soft leading-relaxed font-sans">
              {selectedPath.description}
            </p>

            {/* Mathematical Snippet Preview */}
            <div className="my-5 p-4 rounded-[4px] bg-bg border border-line overflow-x-auto bl-scrollbar">
              <div className="text-[10px] font-mono text-fg-muted mb-2 uppercase tracking-wider">
                Core Formulation / Invariant
              </div>
              <code className="text-xs sm:text-sm font-mono text-fg">
                {selectedPath.equationPreview}
              </code>
            </div>

            {/* Topics Covered Grid */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-mono text-fg-muted uppercase tracking-wider">
                Core Curriculum Modules
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                {selectedPath.topics.map((topic, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-[4px] bg-bg-2 border border-line text-fg-soft flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                    <span className="truncate">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-8 pt-5 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs font-mono text-fg-muted">
                <span>{selectedPath.modulesCount} Modules</span>
                <span className="mx-2">•</span>
                <span>{selectedPath.conceptsCount} Verified Concepts</span>
              </div>

              <Link
                href="/bytelogic/concepts/k-means"
                className="px-4 py-2 rounded-[4px] bg-accent hover:opacity-90 text-accent-ink font-semibold text-xs font-mono flex items-center justify-center gap-2 transition-opacity cursor-pointer"
              >
                <span>Enter Curriculum Track</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
