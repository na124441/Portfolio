'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Activity, Sparkles, BookOpen, Terminal, Play } from 'lucide-react';
import { RECENTLY_ADDED, ConceptFormat } from '@/lib/bytelogic/learnData';

const FORMAT_ICONS: Record<ConceptFormat, React.ReactNode> = {
  CONCEPT: <BookOpen className="w-3.5 h-3.5 text-accent" />,
  VISUAL: <Sparkles className="w-3.5 h-3.5 text-accent" />,
  IMPLEMENTATION: <Terminal className="w-3.5 h-3.5 text-accent" />,
  EXPERIMENT: <Terminal className="w-3.5 h-3.5 text-accent" />,
  VIDEO: <Play className="w-3.5 h-3.5 text-accent" />,
  ARTICLE: <BookOpen className="w-3.5 h-3.5 text-accent" />,
};

export const RecentlyAddedSection: React.FC = () => {
  return (
    <section id="recent" className="relative w-full border-b border-line bg-bg py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 border-b border-line">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-accent font-semibold tracking-wider">
                06 //
              </span>
              <span className="text-xs font-mono text-fg-muted uppercase tracking-widest">
                LIVING PLATFORM LOG
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-sans tracking-tight text-fg uppercase">
              RECENTLY ADDED
            </h2>
          </div>

          <p className="mt-3 md:mt-0 text-xs sm:text-sm text-fg-soft font-sans max-w-md leading-relaxed">
            ByteLogic is continuously expanding its repository of foundational derivations, interactive visual models, and vectorized implementations.
          </p>
        </div>

        {/* Clean Editorial Feed List */}
        <div className="border border-line rounded-[6px] bg-surface divide-y divide-line overflow-hidden">
          {RECENTLY_ADDED.map((item) => (
            <Link
              key={item.id}
              href={item.slug}
              className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 hover:bg-surface-2 transition-colors gap-3"
            >
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="p-2 rounded bg-bg border border-line shrink-0 group-hover:border-accent/40 transition-colors">
                  {FORMAT_ICONS[item.type]}
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-mono text-accent font-semibold tracking-wider">
                      {item.domain}
                    </span>
                    <span className="text-fg-muted text-xs">•</span>
                    <span className="px-1.5 py-0.2 rounded bg-surface-2 text-[9px] font-mono text-fg-soft">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-fg group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4 text-xs font-mono shrink-0 pl-11 sm:pl-0">
                <div className="flex items-center gap-1.5 text-fg-muted text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-accent" />
                  <span>{item.relativeTime}</span>
                </div>

                <span className="text-accent group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold text-xs">
                  <span>Open</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
