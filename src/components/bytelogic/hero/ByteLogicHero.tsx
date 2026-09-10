'use client';

import React from 'react';
import { ByteLogicButton } from '@/components/bytelogic/ui/ByteLogicButton';
import { ComputationalVisual } from '@/components/bytelogic/hero/ComputationalVisual';
import { Sparkles, Terminal, ArrowDown } from 'lucide-react';

export const ByteLogicHero: React.FC = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 sm:py-20">
      {/* Top Technical Metadata Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-6 mb-8 sm:mb-12 border-b border-[#1C2830] text-xs font-mono">
        <div className="flex items-center gap-2 text-[#019AA2]">
          <span className="w-1.5 h-1.5 bg-[#019AA2]" />
          <span className="font-semibold tracking-wider">01 / PLATFORM THESIS</span>
        </div>
        <div className="flex items-center gap-4 text-[#68747D] text-[11px]">
          <span>INDEX: 7 DOMAINS</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">FIRST-PRINCIPLES KNOWLEDGE</span>
          <span>•</span>
          <span className="text-[#A8B3BA]">OPEN KERNEL</span>
        </div>
      </div>

      {/* Main Editorial Grid: Left Copy & Right Computational Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Serious Editorial Typography */}
        <div className="lg:col-span-7 space-y-6">
          {/* Domain Subtitle */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#0E151B] border border-[#1C2830] text-xs font-mono text-[#019AA2]">
            <span>AI · ML · MATHEMATICS · CS · SYSTEMS</span>
          </div>

          {/* Primary Editorial Heading */}
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F3F6F7] leading-[1.08]">
            UNDERSTAND THE <br />
            <span className="text-[#F3F6F7]">LOGIC BEHIND</span> <br />
            <span className="text-[#019AA2]">COMPUTATION.</span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-base sm:text-lg text-[#A8B3BA] leading-relaxed max-w-2xl font-sans">
            A technical learning platform for understanding ideas, visualizing algorithms, implementing concepts, and experimenting with systems. Built for engineers and researchers seeking depth beyond the abstractions.
          </p>

          {/* Five Stage Loop Visual Micro-Sequence */}
          <div className="pt-1 flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-[#68747D]">
            <span className="text-[#F3F6F7]">UNDERSTAND</span>
            <span>→</span>
            <span className="text-[#019AA2]">VISUALIZE</span>
            <span>→</span>
            <span className="text-[#F3F6F7]">IMPLEMENT</span>
            <span>→</span>
            <span className="text-[#019AA2]">EXPERIMENT</span>
            <span>→</span>
            <span className="text-[#A8B3BA]">DISCOVER</span>
          </div>

          {/* CTA Group */}
          <div className="pt-4 flex flex-wrap items-center gap-3.5">
            <ByteLogicButton
              href="#featured"
              variant="primary"
              size="lg"
              showArrow
            >
              Explore Concepts
            </ByteLogicButton>
            <ByteLogicButton
              href="#lab"
              variant="outline"
              size="lg"
              icon={<Terminal className="w-4 h-4 text-[#019AA2]" />}
            >
              Enter Lab
            </ByteLogicButton>
          </div>
        </div>

        {/* Right Column: Hero Computational Visual */}
        <div className="lg:col-span-5">
          <div className="relative">
            {/* Header label above visual */}
            <div className="flex items-center justify-between pb-2 text-[11px] font-mono text-[#68747D]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#019AA2]" />
                COMPUTATIONAL RUNTIME
              </span>
              <span>FOUR MODES</span>
            </div>
            <ComputationalVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
