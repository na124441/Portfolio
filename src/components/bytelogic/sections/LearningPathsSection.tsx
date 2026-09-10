'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Layers, GitBranch } from 'lucide-react';
import { LEARNING_PATHS } from '@/lib/bytelogic/tokens';
import { EquationBlock } from '@/components/bytelogic/ui/EquationBlock';

export const LearningPathsSection: React.FC = () => {
  return (
    <section id="paths" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-[#1C2830]">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-10 border-b border-[#1C2830] text-xs font-mono">
        <div className="flex items-center gap-2 text-[#019AA2]">
          <span className="font-semibold">03 / CURATED LEARNING PATHS</span>
        </div>
        <div className="text-[#68747D] text-[11px] flex items-center gap-3">
          <span>7 STRUCTURED DOMAINS</span>
          <span>•</span>
          <span>FIRST PRINCIPLES TO SYSTEMS</span>
        </div>
      </div>

      {/* Intro Header */}
      <div className="max-w-3xl mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-[#F3F6F7]">
          Rigorous Technical Domains
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#A8B3BA] leading-relaxed font-sans">
          Each path is built as a coherent mathematical and engineering trajectory. Begin with analytical foundations, visualize inner mechanics, implement the algorithms from scratch, and verify them in the lab.
        </p>
      </div>

      {/* Paths Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LEARNING_PATHS.map((path) => (
          <div
            key={path.id}
            className="group flex flex-col justify-between p-6 rounded-[6px] bl-card-interactive bl-tick-box relative"
          >
            <div>
              {/* Path Code & Difficulty */}
              <div className="flex items-center justify-between text-xs font-mono mb-4 pb-3 border-b border-[#1C2830]">
                <span className="text-[#019AA2] font-semibold text-sm">
                  {path.code} / PATH
                </span>
                <span className="px-2 py-0.5 rounded-[3px] bg-[#131C24] text-[#A8B3BA] text-[10px] uppercase tracking-wider border border-[#1C2830]">
                  {path.difficulty}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-lg font-bold font-sans text-[#F3F6F7] group-hover:text-[#019AA2] transition-colors tracking-tight">
                {path.title}
              </h3>
              <p className="mt-1 text-xs text-[#019AA2] font-mono leading-tight">
                {path.tagline}
              </p>

              {/* Description */}
              <p className="mt-3 text-xs sm:text-sm text-[#A8B3BA] leading-relaxed font-sans line-clamp-3">
                {path.description}
              </p>

              {/* Equation Preview snippet */}
              <div className="my-4 px-3 py-2 rounded-[4px] bg-[#070B0E] border border-[#1C2830] overflow-x-auto text-[11px] font-mono text-[#68747D] bl-scrollbar">
                <code>{path.equationPreview}</code>
              </div>

              {/* Key Topics Tag Clouds */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {path.topics.map((topic, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-[3px] bg-[#0A0F14] border border-[#1C2830] text-[#68747D]"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Meta & Action */}
            <div className="mt-6 pt-4 border-t border-[#1C2830] flex items-center justify-between text-xs font-mono">
              <span className="text-[#68747D] text-[11px]">
                {path.modulesCount} Modules · {path.conceptsCount} Concepts
              </span>
              <Link
                href={path.id === 'machine-learning' ? '/bytelogic/concepts/k-means' : '/bytelogic/concepts/k-means'}
                className="flex items-center gap-1.5 text-xs text-[#019AA2] font-semibold hover:text-[#02b3bc] transition-colors"
              >
                <span>Enter Path</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
