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
        {/* Top Platform Thesis Eyebrow Badge */}
        <div className="mb-4 sm:mb-6 flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-[4px] bg-[#0A0F14]/90 backdrop-blur-sm border border-[#1C2830] text-[10px] sm:text-xs font-mono text-[#019AA2] bl-tick-box">
          <span className="w-1.5 h-1.5 bg-[#019AA2] rounded-full animate-pulse" />
          <span className="font-semibold tracking-wider">01 / PLATFORM THESIS</span>
          <span className="text-[#68747D] hidden xs:inline">•</span>
          <span className="text-[#A8B3BA] hidden xs:inline">FIRST-PRINCIPLES COMPUTATION</span>
        </div>

        {/* Centerpiece Hero ByteLogic Logo - Commands Primary Visual Attention */}
        <div className="relative flex flex-col items-center justify-center my-2 sm:my-3 group">
          {/* Atmospheric Cyan Backlight Glow */}
          <div className="absolute -inset-4 sm:-inset-8 bg-[radial-gradient(ellipse_at_center,rgba(1,154,162,0.22)_0%,rgba(19,34,121,0.12)_45%,transparent_70%)] pointer-events-none filter blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

          <h1 className="relative z-10 p-4 sm:p-6 md:p-8 rounded-[12px] bg-[#0A0F14]/85 backdrop-blur-xl border border-[#1C2830] shadow-[0_12px_40px_rgba(0,0,0,0.7)] hover:border-[#019AA2]/50 transition-all duration-300 bl-tick-box">
            <Image
              src="/images/bytelogic/bytelogic-logo.png"
              alt="ByteLogic"
              width={680}
              height={220}
              priority
              className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <span className="sr-only">ByteLogic</span>
          </h1>
        </div>

        {/* Subordinate Thesis Phrase - Positioned Beneath ByteLogic and Significantly Smaller */}
        <h2 className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl font-bold font-sans tracking-wide text-[#F3F6F7] max-w-2xl px-2">
          UNDERSTAND THE <span className="text-[#019AA2]">LOGIC BEHIND</span> COMPUTATION.
        </h2>

        {/* Technical Domain Line */}
        <div className="mt-2.5 sm:mt-3 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs md:text-sm font-mono tracking-wider text-[#A8B3BA]">
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
