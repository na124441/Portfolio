'use client';

import React from 'react';
import Link from 'next/link';
import { CURRENT_PROJECTS } from '@/data/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { motion, useReducedMotion } from 'framer-motion';

const STATUS_COLORS: Record<string, string> = {
  Active: 'bg-[#22c55e] shadow-[0_0_8px_rgba(34,197,94,0.6)]',
  Development: 'bg-[#f59e0b] shadow-[0_0_8px_rgba(245,158,11,0.6)]',
  Building: 'bg-[#06b6d4] shadow-[0_0_8px_rgba(6,182,212,0.6)]',
  'Long-term': 'bg-[#a855f7] shadow-[0_0_8px_rgba(168,85,247,0.6)]',
  Community: 'bg-[#22c55e] shadow-[0_0_8px_rgba(34,197,94,0.6)]',
};

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CURRENT_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
            >
              <Link
                href={project.href || '#'}
                className="block p-5 surface-workspace surface-workspace-hover project-card h-full group transition-all"
              >
                {/* Status + Category */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#dfb15b]">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${STATUS_COLORS[project.status] || STATUS_COLORS.Active}`}
                    />
                    <span className="font-mono text-[10px] text-white/65 uppercase tracking-wider">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="font-display text-base font-bold text-[#feffff] mb-1.5 group-hover:text-[#dfb15b] transition-colors">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs text-white/60 leading-relaxed">
                  {project.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
