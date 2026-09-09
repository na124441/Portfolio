'use client';

import React from 'react';
import { ALL_PROJECTS } from '@/data/projects';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export const ProjectsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="projects" className="py-16 sm:py-24 border-b border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="02"
          tag="Work // Evidence"
          title="Selected Projects"
          subtitle="Engineered systems evaluated against quantitative benchmarks, hardware constraints, and failure modes."
        />

        <div className="space-y-8">
          {ALL_PROJECTS.map((project, idx) => {
            const isFlagship = project.tier === 'S';

            return (
              <motion.article
                key={project.slug}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                onMouseMove={handleMouseMove}
                className={`p-6 sm:p-8 relative transition-all duration-200 glass-panel glass-panel-hover spotlight-card corner-brackets ${
                  isFlagship
                    ? 'border-[#d4af37]/35 hover:border-[#d4af37]/80 shadow-[0_0_24px_rgba(212,175,55,0.08)]'
                    : 'border-white/10 hover:border-white/25'
                }`}
              >
                {/* Header Metadata Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-white/10 relative z-10">
                  <div className="flex items-center gap-2.5">
                    <Badge variant={isFlagship ? 'gold' : 'default'} size="sm">
                      TIER {project.tier} · {isFlagship ? 'FLAGSHIP' : 'MAJOR'}
                    </Badge>
                    <span className="font-mono text-xs text-white/40">
                      {project.timeline}
                    </span>
                  </div>
                  <div className="font-mono text-xs text-white/50">
                    {project.status}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#feffff] mb-3 leading-snug relative z-10">
                  {project.title}
                </h3>

                {/* Thesis */}
                <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed mb-6 relative z-10">
                  {project.oneLineThesis}
                </p>

                {/* Quantitative Metric Callout with Glass Tint */}
                <div className="mb-6 p-4 bg-white/[0.03] border border-white/10 backdrop-blur-sm flex items-baseline justify-between max-w-sm relative z-10">
                  <span className="font-mono text-xs uppercase tracking-widest text-white/50">
                    {project.featuredMetric.label}
                  </span>
                  <span className="font-mono text-xl sm:text-2xl font-semibold text-metallic-gold tabular-nums">
                    {project.featuredMetric.value}
                  </span>
                </div>

                {/* Tech Stack List */}
                <div className="space-y-2 mb-8 relative z-10">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-white/40">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.flatMap((tech) =>
                      tech.items.map((item) => (
                        <Badge key={item} variant="outline" size="sm">
                          {item}
                        </Badge>
                      ))
                    )}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between relative z-10">
                  {isFlagship ? (
                    <Button
                      href={`/projects/${project.slug}`}
                      variant="primary"
                      size="sm"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  ) : (
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-white/40 italic">
                        [Case study in documentation]
                      </span>
                      <Button
                        href={project.links[0]?.url || '#'}
                        variant="ghost"
                        size="sm"
                        isExternal
                      >
                        Source Code
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  )}

                  {isFlagship && (
                    <div className="hidden sm:flex items-center gap-1 font-mono text-[11px] text-white/40">
                      <span>12 Sections</span>
                      <span>·</span>
                      <span>Deep Dive & Architecture</span>
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
