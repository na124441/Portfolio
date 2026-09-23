'use client';

import React from 'react';
import Link from 'next/link';
import { CURRENT_PROJECTS } from '@/data/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

/* ── Status theme map ── */
const STATUS_THEME: Record<string, { dot: string; border: string; glow: string; badge: string }> = {
  Active: {
    dot: 'bg-emerald-400 shadow-[0_0_8px_rgba(34,197,94,0.6)]',
    border: 'group-hover:border-l-emerald-400',
    glow: 'group-hover:shadow-[inset_0_0_40px_-12px_rgba(34,197,94,0.08)]',
    badge: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
  },
  Development: {
    dot: 'bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)]',
    border: 'group-hover:border-l-amber-400',
    glow: 'group-hover:shadow-[inset_0_0_40px_-12px_rgba(245,158,11,0.08)]',
    badge: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
  },
  Building: {
    dot: 'bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.6)]',
    border: 'group-hover:border-l-cyan-400',
    glow: 'group-hover:shadow-[inset_0_0_40px_-12px_rgba(6,182,212,0.08)]',
    badge: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
  },
  'Long-term': {
    dot: 'bg-violet-400 shadow-[0_0_8px_rgba(168,85,247,0.6)]',
    border: 'group-hover:border-l-violet-400',
    glow: 'group-hover:shadow-[inset_0_0_40px_-12px_rgba(168,85,247,0.08)]',
    badge: 'border-violet-500/30 text-violet-400 bg-violet-500/10',
  },
  Community: {
    dot: 'bg-emerald-400 shadow-[0_0_8px_rgba(34,197,94,0.6)]',
    border: 'group-hover:border-l-emerald-400',
    glow: 'group-hover:shadow-[inset_0_0_40px_-12px_rgba(34,197,94,0.08)]',
    badge: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
  },
};

const DEFAULT_THEME = STATUS_THEME.Active;

export const CurrentlyBuildingSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="currently-building" className="py-16 sm:py-20 border-b border-white/10 relative scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="02"
          title="Currently Building"
          subtitle="Active projects, frameworks, and long-term initiatives."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CURRENT_PROJECTS.map((project, idx) => {
            const theme = STATUS_THEME[project.status] || DEFAULT_THEME;

            return (
              <motion.div
                key={project.name}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
              >
                <Link
                  href={project.href || '#'}
                  className={[
                    'group relative block h-full',
                    'p-5 sm:p-6',
                    /* Surface */
                    'bg-white/[0.02] backdrop-blur-sm',
                    'border border-white/[0.07] border-l-2 border-l-white/[0.12]',
                    /* Hover transforms */
                    theme.border,
                    theme.glow,
                    'hover:bg-white/[0.05]',
                    'hover:border-white/[0.14]',
                    /* Transition */
                    'transition-all duration-300 ease-out',
                    'hover:-translate-y-1',
                  ].join(' ')}
                >
                  {/* ── Top Row: Category + Status Badge ── */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#dfb15b]/90">
                      {project.category}
                    </span>
                    <span
                      className={[
                        'inline-flex items-center gap-1.5',
                        'font-mono text-[10px] uppercase tracking-wider',
                        'px-2 py-0.5 rounded-full border',
                        theme.badge,
                      ].join(' ')}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
                      {project.status}
                    </span>
                  </div>

                  {/* ── Project Name ── */}
                  <h3 className="font-display text-lg font-bold text-[#feffff] mb-2 leading-snug group-hover:text-[#dfb15b] transition-colors duration-200">
                    {project.name}
                  </h3>

                  {/* ── Description ── */}
                  <p className="font-sans text-[13px] text-white/55 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* ── Bottom Row: Explore Indicator ── */}
                  <div className="flex items-center gap-1.5 mt-auto pt-3 border-t border-white/[0.06]">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-white/30 group-hover:text-[#dfb15b]/80 transition-colors duration-200">
                      Explore
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-white/20 group-hover:text-[#dfb15b]/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
