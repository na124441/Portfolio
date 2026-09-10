'use client';

import React from 'react';
import Image from 'next/image';
import { ByteLogicButton } from '@/components/bytelogic/ui/ByteLogicButton';
import { Ascii3DBackground } from '@/components/bytelogic/hero/Ascii3DBackground';
import { Terminal } from 'lucide-react';

export const ByteLogicHero: React.FC = () => {
  return (
    <section className="relative w-full max-w-full overflow-hidden border-b border-[#1C2830]">
      {/* 3D ASCII Animation Canvas in the Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Ascii3DBackground />
      </div>

      {/* Hero Foreground Content - Centered Adaptive Layout */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-12 pb-16 sm:pt-20 sm:pb-24 md:pt-24 md:pb-28 flex flex-col items-center text-center">
        {/* Top Centered Authoritative ByteLogic Logo Badge */}
        <div className="mb-5 sm:mb-6 flex flex-col items-center">
          <div className="p-2 sm:p-3.5 md:p-4 rounded-[8px] bg-[#0E151B]/90 backdrop-blur-md border border-[#1C2830] shadow-2xl hover:border-[#019AA2]/50 transition-all duration-300 bl-tick-box group">
            <Image
              src="/images/bytelogic/bytelogic-logo.png"
              alt="ByteLogic Authoritative Identity"
              width={240}
              height={80}
              priority
              className="h-8 sm:h-10 md:h-12 w-auto object-contain transition-opacity duration-200 group-hover:opacity-95"
            />
          </div>

          <div className="mt-3 sm:mt-4 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-[4px] bg-[#0A0F14]/90 backdrop-blur-sm border border-[#1C2830] text-[10px] sm:text-xs font-mono text-[#019AA2]">
            <span className="w-1.5 h-1.5 bg-[#019AA2] rounded-full animate-pulse" />
            <span className="font-semibold tracking-wider">01 / PLATFORM THESIS</span>
            <span className="text-[#68747D] hidden xs:inline">•</span>
            <span className="text-[#A8B3BA] hidden xs:inline">FIRST-PRINCIPLES</span>
          </div>
        </div>

        {/* Centered Editorial Heading with Fluid clamp() Sizing */}
        <h1 className="font-sans bl-hero-title font-extrabold tracking-tight text-[#F3F6F7] max-w-4xl px-1">
          UNDERSTAND THE <br className="hidden xs:inline" />
          <span className="text-[#019AA2]">LOGIC BEHIND</span> COMPUTATION.
        </h1>

        {/* Technical Domain Line */}
        <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs md:text-sm font-mono tracking-wider text-[#A8B3BA]">
          <span>AI</span>
          <span className="text-[#019AA2]">•</span>
          <span>MACHINE LEARNING</span>
          <span className="text-[#019AA2]">•</span>
          <span>MATHEMATICS</span>
          <span className="text-[#019AA2]">•</span>
          <span>SYSTEMS</span>
        </div>

        {/* Supporting Paragraph */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#A8B3BA] leading-relaxed max-w-2xl font-sans px-2">
          An independent technical learning platform for understanding ideas, visualizing algorithms, implementing concepts, and experimenting with systems. Built for engineers seeking depth beyond abstractions.
        </p>

        {/* 5-Stage Cognitive Loop with Adaptive Wrapping */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-2 rounded-[6px] bg-[#0E151B]/85 backdrop-blur-md border border-[#1C2830] text-[10px] sm:text-xs font-mono text-[#68747D] max-w-full">
          <span className="text-[#F3F6F7] font-semibold">UNDERSTAND</span>
          <span className="text-[#019AA2]">→</span>
          <span className="text-[#019AA2] font-semibold">VISUALIZE</span>
          <span className="text-[#019AA2]">→</span>
          <span className="text-[#F3F6F7] font-semibold">IMPLEMENT</span>
          <span className="text-[#019AA2]">→</span>
          <span className="text-[#019AA2] font-semibold">EXPERIMENT</span>
          <span className="text-[#019AA2]">→</span>
          <span className="text-[#A8B3BA] font-semibold">DISCOVER</span>
        </div>

        {/* Primary Action Buttons (Stacked full-width on mobile, side-by-side on tablet/desktop) */}
        <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto max-w-xs sm:max-w-none">
          <ByteLogicButton
            href="#featured"
            variant="primary"
            size="lg"
            showArrow
            className="w-full sm:w-auto min-h-[44px]"
          >
            Explore Concepts
          </ByteLogicButton>

          <ByteLogicButton
            href="#lab"
            variant="outline"
            size="lg"
            icon={<Terminal className="w-4 h-4 text-[#019AA2]" />}
            className="w-full sm:w-auto min-h-[44px]"
          >
            Enter Lab
          </ByteLogicButton>
        </div>
      </div>
    </section>
  );
};
