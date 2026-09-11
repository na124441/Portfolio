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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-10 pb-10 sm:pt-14 sm:pb-14 md:pt-16 md:pb-16 flex flex-col items-center text-center">
        {/* Top Platform Thesis Eyebrow Badge */}
        <div className="mb-3 sm:mb-5 flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-[4px] bg-[#0A0F14]/90 backdrop-blur-sm border border-[#1C2830] text-[10px] sm:text-xs font-mono text-[#019AA2] bl-tick-box">
          <span className="w-1.5 h-1.5 bg-[#019AA2] rounded-full animate-pulse" />
          <span className="font-semibold tracking-wider">01 / PLATFORM THESIS</span>
          <span className="text-[#68747D] hidden xs:inline">•</span>
          <span className="text-[#A8B3BA] hidden xs:inline">FIRST-PRINCIPLES COMPUTATION</span>
        </div>

        {/* Centerpiece Hero ByteLogic Logo - Takes ~75% of the middle space to command primary attention */}
        <div className="w-full flex flex-col items-center justify-center my-3 sm:my-5 md:my-6">
          <div className="relative w-[92%] sm:w-[82%] md:w-[75%] max-w-5xl flex items-center justify-center group">
            {/* Atmospheric Cyan Radial Backlight */}
            <div className="absolute -inset-6 sm:-inset-10 md:-inset-16 bg-[radial-gradient(ellipse_at_center,rgba(1,154,162,0.22)_0%,rgba(19,34,121,0.12)_45%,transparent_75%)] pointer-events-none filter blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

            <h1 className="relative z-10 w-full flex items-center justify-center select-none">
              <Image
                src="/images/bytelogic/bytelogic-logo.png"
                alt="ByteLogic"
                width={1024}
                height={341}
                priority
                className="w-full h-auto max-h-[130px] sm:max-h-[200px] md:max-h-[260px] lg:max-h-[320px] object-contain drop-shadow-[0_12px_40px_rgba(0,0,0,0.85)] transition-transform duration-300 hover:scale-[1.01]"
              />
              <span className="sr-only">ByteLogic</span>
            </h1>
          </div>
        </div>

        {/* Subordinate Thesis Phrase - Positioned Beneath ByteLogic and Significantly Smaller */}
        <h2 className="mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm md:text-base lg:text-lg font-bold font-sans tracking-[0.18em] sm:tracking-[0.24em] text-[#A8B3BA] uppercase max-w-3xl text-center px-4">
          UNDERSTAND THE <span className="text-[#019AA2] font-extrabold">LOGIC BEHIND</span> COMPUTATION.
        </h2>

        {/* Technical Domain Line */}
        <div className="mt-2.5 sm:mt-3 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-[10px] sm:text-xs md:text-sm font-mono tracking-wider text-[#68747D]">
          <span className="hover:text-[#A8B3BA] transition-colors">AI</span>
          <span className="text-[#019AA2]">•</span>
          <span className="hover:text-[#A8B3BA] transition-colors">MACHINE LEARNING</span>
          <span className="text-[#019AA2]">•</span>
          <span className="hover:text-[#A8B3BA] transition-colors">MATHEMATICS</span>
          <span className="text-[#019AA2]">•</span>
          <span className="hover:text-[#A8B3BA] transition-colors">SYSTEMS</span>
        </div>

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

      {/* Bottom Technical Focus Bar at Base of Hero */}
      <div className="relative z-10 w-full border-t border-[#1C2830] bg-[#0A0F14]/85 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-center text-center">
          <p className="text-xs sm:text-sm text-[#A8B3BA] leading-relaxed font-display tracking-wide font-normal">
            An independent technical learning platform for understanding ideas, visualizing algorithms, implementing concepts, and experimenting with systems. Built for engineers seeking depth beyond abstractions.
          </p>
        </div>
      </div>
    </section>
  );
};
