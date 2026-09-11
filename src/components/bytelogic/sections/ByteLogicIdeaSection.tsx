'use client';

import React from 'react';
import { Compass, Eye, Terminal, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const ByteLogicIdeaSection: React.FC = () => {
  const pillars = [
    {
      code: '01',
      title: 'UNDERSTAND',
      tagline: 'Analytical Rigor',
      description:
        'Deconstruct theoretical foundations, objective formulations, and mathematical constraints before writing a single line of code. No hand-waving, no ungrounded heuristics.',
      icon: <Compass className="w-5 h-5 text-[#019AA2]" />,
      detail: 'Analytical Derivation & Constraints',
      metric: 'FIRST PRINCIPLES',
    },
    {
      code: '02',
      title: 'VISUALIZE',
      tagline: 'Geometric Intuition',
      description:
        'Transform abstract symbols and equations into dynamic spatial representations, loss manifolds, and vector fields. Build enduring intuition by seeing algorithms execute in coordinate space.',
      icon: <Eye className="w-5 h-5 text-[#019AA2]" />,
      detail: 'Coordinate Manifolds & Vector Fields',
      metric: 'SPATIAL GEOMETRY',
    },
    {
      code: '03',
      title: 'BUILD',
      tagline: 'Zero-Abstraction Code',
      description:
        'Implement algorithms from bare mathematical primitives in pure vectorized code. Reject opaque library imports until the mechanics of every matrix dot product and gradient update are understood.',
      icon: <Terminal className="w-5 h-5 text-[#019AA2]" />,
      detail: 'Vectorized NumPy & C++ Primitives',
      metric: 'FROM SCRATCH',
    },
  ];

  return (
    <section
      id="idea"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 border-t border-[#1C2830] relative z-10"
    >
      {/* Section Header Meta */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-8 sm:mb-12 border-b border-[#1C2830] text-xs font-mono">
        <div className="flex items-center gap-2 text-[#019AA2]">
          <span className="w-2 h-2 rounded-[2px] bg-[#019AA2]" />
          <span className="font-semibold tracking-wider">01 / WHAT IS BYTELOGIC?</span>
        </div>
        <div className="flex items-center gap-3 text-[#68747D] text-[11px]">
          <span>FOUNDATIONAL MANIFESTO</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-[#A8B3BA]">SYS.REF // 01-CORE</span>
        </div>
      </div>

      {/* Main Narrative Headline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
        <div className="lg:col-span-7">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-[#F3F6F7] leading-[1.12]">
            Technical Knowledge{' '}
            <span className="text-[#019AA2]">Without the Black Box.</span>
          </h2>
        </div>
        <div className="lg:col-span-5 space-y-4">
          <p className="text-sm sm:text-base text-[#A8B3BA] leading-relaxed font-sans">
            Modern technical education often abstracts away foundational mathematics or reduces complex algorithms to opaque library calls. We believe that true engineering mastery demands deconstructing the machine from first principles.
          </p>
          <p className="text-xs sm:text-sm text-[#68747D] leading-relaxed font-mono">
            ByteLogic connects analytical proofs, interactive coordinate geometry, and vectorized implementations into a unified computational canvas.
          </p>
        </div>
      </div>

      {/* 3 Core Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {pillars.map((pillar) => (
          <div
            key={pillar.code}
            className="group flex flex-col justify-between p-6 sm:p-7 rounded-[6px] bg-[#0A0F14] border border-[#1C2830] hover:border-[#019AA2]/40 transition-all duration-200 bl-tick-box relative"
          >
            {/* Pillar Top Meta */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-5 pb-3 border-b border-[#1C2830]">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-[4px] bg-[#0E151B] border border-[#1C2830]">
                    {pillar.icon}
                  </div>
                  <span className="text-[#019AA2] font-semibold tracking-wider">
                    {pillar.code} // PILLAR
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-[3px] bg-[#0E151B] border border-[#1C2830] text-[#68747D]">
                  {pillar.metric}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl font-bold font-sans text-[#F3F6F7] tracking-tight group-hover:text-[#019AA2] transition-colors">
                {pillar.title}
              </h3>
              <p className="mt-1 text-xs text-[#019AA2] font-mono tracking-wide">
                {pillar.tagline}
              </p>

              {/* Description */}
              <p className="mt-3.5 text-xs sm:text-sm text-[#A8B3BA] leading-relaxed font-sans">
                {pillar.description}
              </p>
            </div>

            {/* Pillar Footnote */}
            <div className="mt-6 pt-4 border-t border-[#1C2830] flex items-center justify-between text-[11px] font-mono text-[#68747D]">
              <span>{pillar.detail}</span>
              <span className="text-[#019AA2] opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Telemetry Footer Callout */}
      <div className="mt-8 p-4 rounded-[6px] bg-[#0E151B]/70 border border-[#1C2830] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-3 text-[#A8B3BA]">
          <span className="w-2 h-2 rounded-full bg-[#019AA2] animate-pulse" />
          <span>METHODOLOGY: FIRST-PRINCIPLES DECONSTRUCTION</span>
        </div>
        <Link
          href="#loop"
          className="text-[#019AA2] hover:text-[#02b3bc] transition-colors flex items-center gap-1.5"
        >
          <span>Examine the Learning Loop</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
};
