'use client';

import React from 'react';
import Link from 'next/link';
import { Terminal, BrainCircuit, Sparkles, BookOpen, Layers, ArrowLeft } from 'lucide-react';

interface DsaHeroProps {
  totalCount: number;
  solvedCount: number;
}

export function DsaHero({ totalCount, solvedCount }: DsaHeroProps) {
  const percent = totalCount === 0 ? 0 : Math.round((solvedCount / totalCount) * 100);

  return (
    <section className="relative w-full border-b border-[#1C2830] bg-[#05070A] pt-12 sm:pt-16 pb-10 overflow-hidden">
      {/* Subtle Cartesian drafting grid mask */}
      <div className="absolute inset-0 pointer-events-none bl-cartesian-grid bl-grid-mask opacity-60 z-0" />

      {/* Atmospheric radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(1,154,162,0.08)_0%,transparent_70%)] pointer-events-none filter blur-3xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col gap-4">
          {/* Breadcrumb back to Learn & Question hubs */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#68747D]">
            <Link
              href="/bytelogic/learn"
              className="flex items-center gap-1 hover:text-[#019AA2] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Learn</span>
            </Link>
            <span>/</span>
            <span className="text-[#A8B3BA]">DSA Question Bank</span>
            <span>/</span>
            <Link
              href="/bytelogic/learn/question-bank"
              className="text-[#68747D] hover:text-[#019AA2] transition-colors"
            >
              ML Problem Set →
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="flex flex-col items-start text-left max-w-3xl">
              {/* Meta Eyebrow */}
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-[4px] bg-[#131C24] border border-[#1C2830] text-[11px] font-mono text-[#019AA2] font-semibold tracking-wider uppercase">
                  02 // CURRICULUM PRACTICE
                </span>
                <span className="text-[#68747D] text-xs font-mono">
                  ALGORITHMS & DATA STRUCTURES
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans tracking-tight text-[#F3F6F7] leading-[1.1] uppercase">
                DSA QUESTION BANK <br />
                <span className="text-[#019AA2]">LEARNING CURVE ENGINE.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="mt-3.5 text-sm sm:text-base text-[#A8B3BA] font-sans leading-relaxed">
                Progression-driven problem solving from Warm-up to Hard. Master the underlying invariants,
                unlock progressive hints on demand, write verified C++ / Python implementations, and dissect optimal complexity.
              </p>
            </div>

            {/* Overall Progress Telemetry Pill */}
            <div className="p-4 rounded-lg bg-[#0A0F14] border border-[#1C2830] bl-tick-box flex flex-col gap-2 min-w-[240px] shrink-0">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#68747D] uppercase tracking-wider">Completion</span>
                <span className="text-[#019AA2] font-semibold">{solvedCount} / {totalCount} Solved ({percent}%)</span>
              </div>
              <div className="w-full h-1.5 bg-[#131C24] rounded-full overflow-hidden border border-[#1C2830]">
                <div
                  className="h-full bg-gradient-to-r from-[#019AA2] to-[#20BEFF] rounded-full transition-all duration-300"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-[#68747D] pt-1 border-t border-[#1C2830]">
                <span className="flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-[#019AA2]" />
                  <span>C++ &amp; Python</span>
                </span>
                <span>Tier Curve: 1 → 4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DsaHero;
