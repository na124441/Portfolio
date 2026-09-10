'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ByteLogicButton } from '@/components/bytelogic/ui/ByteLogicButton';
import { Ascii3DBackground, AsciiShape } from '@/components/bytelogic/hero/Ascii3DBackground';
import { Terminal, Sparkles, ArrowRight, Activity, Binary } from 'lucide-react';

export const ByteLogicHero: React.FC = () => {
  const [activeTopology, setActiveTopology] = useState<AsciiShape>('torus');

  return (
    <section className="relative w-full overflow-hidden border-b border-[#1C2830]">
      {/* 3D ASCII Animation Canvas in the Background */}
      <div className="absolute inset-0 z-0">
        <Ascii3DBackground onShapeChange={(shape) => setActiveTopology(shape)} />
      </div>

      {/* Hero Foreground Content - Centered Layout */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 flex flex-col items-center text-center">
        {/* Top Centered Authoritative ByteLogic Logo Badge */}
        <div className="mb-6 flex flex-col items-center">
          <div className="p-3 sm:p-4 rounded-[8px] bg-[#0E151B]/90 backdrop-blur-md border border-[#1C2830] shadow-2xl hover:border-[#019AA2]/50 transition-all duration-300 bl-tick-box group">
            <Image
              src="/images/bytelogic/bytelogic-logo.png"
              alt="ByteLogic Authoritative Identity"
              width={260}
              height={86}
              priority
              className="h-10 sm:h-12 w-auto object-contain transition-opacity duration-200 group-hover:opacity-95"
            />
          </div>

          <div className="mt-4 flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#0A0F14]/90 backdrop-blur-sm border border-[#1C2830] text-xs font-mono text-[#019AA2]">
            <span className="w-1.5 h-1.5 bg-[#019AA2] rounded-full animate-pulse" />
            <span className="font-semibold tracking-wider">01 / PLATFORM THESIS</span>
            <span className="text-[#68747D]">•</span>
            <span className="text-[#A8B3BA]">FIRST-PRINCIPLES COMPUTATION</span>
          </div>
        </div>

        {/* Centered Editorial Heading */}
        <h1 className="font-sans text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F3F6F7] leading-[1.1] max-w-4xl">
          UNDERSTAND THE <br />
          <span className="text-[#019AA2]">LOGIC BEHIND</span> COMPUTATION.
        </h1>

        {/* Technical Domain Line */}
        <div className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider text-[#A8B3BA]">
          <span>AI</span>
          <span className="text-[#019AA2]">•</span>
          <span>MACHINE LEARNING</span>
          <span className="text-[#019AA2]">•</span>
          <span>MATHEMATICS</span>
          <span className="text-[#019AA2]">•</span>
          <span>SYSTEMS</span>
        </div>

        {/* Supporting Paragraph */}
        <p className="mt-6 text-base sm:text-lg text-[#A8B3BA] leading-relaxed max-w-2xl font-sans">
          An independent technical learning platform for understanding ideas, visualizing algorithms, implementing concepts, and experimenting with systems. Built for engineers seeking depth beyond abstractions.
        </p>

        {/* 5-Stage Cognitive Loop */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-2 rounded-[6px] bg-[#0E151B]/80 backdrop-blur-md border border-[#1C2830] text-xs font-mono text-[#68747D]">
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

        {/* Primary Action Buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
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

        {/* Bottom Technical Telemetry Indicator */}
        <div className="mt-14 pt-6 border-t border-[#1C2830]/80 w-full flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#68747D]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#019AA2]" />
            <span>3D ASCII ENGINE: ACTIVE</span>
            <span>•</span>
            <span className="text-[#A8B3BA] uppercase">TOPOLOGY: {activeTopology}</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>7 CORE DOMAINS</span>
            <span>•</span>
            <span>OPEN KERNEL</span>
            <span>•</span>
            <span className="text-[#019AA2]">V0.1-STABLE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
