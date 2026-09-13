'use client';

import React from 'react';
import { ArrowRight, Compass, Layers, Terminal } from 'lucide-react';
import { KnowledgeGraphVisual } from '@/components/bytelogic/learn/KnowledgeGraphVisual';

export const LearnHero: React.FC = () => {
  return (
    <section className="relative w-full border-b border-[#1C2830] bg-[#05070A] pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 overflow-hidden">
      {/* Subtle Cartesian Blueprint Coordinate Grid */}
      <div className="absolute inset-0 pointer-events-none bl-cartesian-grid bl-grid-mask opacity-60 z-0" />

      {/* Atmospheric subtle radial glow in the background */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(1,154,162,0.08)_0%,transparent_70%)] pointer-events-none filter blur-3xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Authoritative Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Meta Eyebrow */}
            <div className="flex items-center gap-2 mb-4 sm:mb-5">
              <span className="px-2.5 py-1 rounded-[4px] bg-[#131C24] border border-[#1C2830] text-[11px] font-mono text-[#019AA2] font-semibold tracking-wider">
                01 / LEARN
              </span>
              <span className="text-[#68747D] text-xs font-mono">
                TECHNICAL KNOWLEDGE INDEX
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-sans tracking-tight text-[#F3F6F7] leading-[1.08] uppercase">
              UNDERSTAND <br />
              <span className="text-[#019AA2]">THE FUNDAMENTALS.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#A8B3BA] font-sans max-w-2xl leading-relaxed">
              Explore structured explanations across AI, machine learning, mathematics,
              algorithms, computer science, and systems. Understand the ideas, visualize how they
              behave, and implement them from first principles.
            </p>

            {/* Micro Quick-Jumps Bar */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2 text-xs font-mono">
              <a
                href="#domains"
                className="px-3 py-1.5 rounded-[4px] bg-[#0E151B] border border-[#1C2830] hover:border-[#019AA2] text-[#F3F6F7] flex items-center gap-1.5 transition-colors"
              >
                <Layers className="w-3.5 h-3.5 text-[#019AA2]" />
                <span>02 Domains</span>
              </a>
              <a
                href="#start-here"
                className="px-3 py-1.5 rounded-[4px] bg-[#0E151B] border border-[#1C2830] hover:border-[#019AA2] text-[#F3F6F7] flex items-center gap-1.5 transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-[#019AA2]" />
                <span>03 Start Here</span>
              </a>
              <a
                href="#paths"
                className="px-3 py-1.5 rounded-[4px] bg-[#0E151B] border border-[#1C2830] hover:border-[#019AA2] text-[#F3F6F7] flex items-center gap-1.5 transition-colors"
              >
                <Terminal className="w-3.5 h-3.5 text-[#019AA2]" />
                <span>04 Learning Paths</span>
              </a>
            </div>
          </div>

          {/* Right Column: Subtle Computational Knowledge Graph */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <KnowledgeGraphVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
