'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { PORTFOLIO_METADATA } from '@/data/portfolio';
import { ArrowDown, ArrowRight, Terminal } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { AsciiDonutBackground } from '@/components/ui/AsciiDonutBackground';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const updateMedia = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    updateMedia();
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  // Technical pillars for the editorial domain focus bar
  const technicalPillars = [
    'Autonomous Telemetry Anomaly Reasoning',
    'Temporal Graph Networks',
    'Offline Reinforcement Learning',
    'Quantized Edge Execution',
  ];

  // 1. Scroll-driven progress tracking across the 200vh pinned track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth spring interpolation to eliminate any micro-stutters
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // 2. Motion Transforms for Identity -> Reveal Transition (Progress 0.0 -> 1.0)
  // On desktop: Text translates leftwards. On mobile: translates subtly upwards.
  const textTranslateX = useTransform(smoothProgress, [0, 0.75], ['0%', isDesktop ? '-27%' : '0%']);
  const textTranslateY = useTransform(smoothProgress, [0, 0.75], ['0%', isDesktop ? '0%' : '-8%']);
  const textScale = useTransform(smoothProgress, [0, 0.75], [1, isDesktop ? 0.94 : 0.92]);

  // Portrait emerges: On desktop translates rightwards. On mobile emerges centered below.
  const photoTranslateX = useTransform(smoothProgress, [0, 0.75], ['0%', isDesktop ? '28%' : '0%']);
  const photoTranslateY = useTransform(smoothProgress, [0, 0.75], ['0%', isDesktop ? '0%' : '18%']);
  const photoOpacity = useTransform(smoothProgress, [0.05, 0.65], [0.03, 1]);
  const photoScale = useTransform(smoothProgress, [0, 0.75], [1.12, 1]);
  const haloOpacity = useTransform(smoothProgress, [0.1, 0.7], [0, 1]);
  const photoFilter = useTransform(
    smoothProgress,
    [0.05, 0.7],
    ['grayscale(95%) brightness(0.25) contrast(0.85)', 'grayscale(0%) brightness(1) contrast(1)']
  );

  // Scroll indicator quickly dissolves on initial scroll
  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);
  const scrollIndicatorY = useTransform(smoothProgress, [0, 0.12], [0, 15]);

  // Bottom focus ticker emerges toward the end of the hero pinned sequence
  const bottomBarOpacity = useTransform(smoothProgress, [0.65, 0.95], [0, 1]);
  const bottomBarY = useTransform(smoothProgress, [0.65, 0.95], [20, 0]);

  // Fallback for users requesting reduced motion (skip scroll pinning)
  if (shouldReduceMotion) {
    return (
      <section
        id="top"
        className="min-h-screen flex flex-col justify-between bg-[#010a0b] text-[#feffff] border-b border-white/[0.08] relative overflow-hidden pt-28 pb-12 px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20"
      >
        <div className="absolute inset-y-0 left-0 w-full pointer-events-none z-0 overflow-hidden">
          <AsciiDonutBackground widthFraction={0.5} opacity={0.25} className="z-0" />
        </div>

        <div className="w-full my-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
            <div className="lg:col-span-7 flex flex-col space-y-6 z-10 text-left">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full font-mono text-xs text-white/80 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#f6d009] shadow-[0_0_8px_rgba(246,208,9,0.7)]" />
                <span>{PORTFOLIO_METADATA.statusBadge}</span>
              </div>
              <h1 className="font-display font-black tracking-[-0.03em] uppercase text-[clamp(2.8rem,6.5vw,5.5rem)] leading-[0.98]">
                <span>NAYANT</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-[#dfb15b]/80">
                  SRIVASTAVA
                </span>
              </h1>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#f6d009] font-semibold">
                AI / ML ENGINEER · {PORTFOLIO_METADATA.specialization}
              </p>
              <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl leading-relaxed">
                {PORTFOLIO_METADATA.thesis}
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="#projects"
                  className="px-5 py-2.5 bg-gradient-to-r from-[#d4af37] to-[#f6d009] text-black font-mono text-xs uppercase font-bold tracking-wider rounded-sm flex items-center gap-2"
                >
                  View Projects <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={PORTFOLIO_METADATA.resumeUrl}
                  className="px-5 py-2.5 bg-white/[0.03] border border-white/20 hover:border-[#f6d009]/60 text-white font-mono text-xs uppercase tracking-wider rounded-sm flex items-center gap-2"
                >
                  Resume / CV <ArrowDown className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center relative">
              <PortraitFrame haloOpacity={1} />
            </div>
          </div>
        </div>

        <div className="w-full pt-6 border-t border-white/[0.08]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/35">
              Research &amp; Engineering Focus:
            </span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-white/60">
              {technicalPillars.map((pillar) => (
                <span key={pillar} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f6d009]/60" />
                  <span>{pillar}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div ref={containerRef} className="relative h-[190vh] md:h-[210vh] bg-[#010a0b]">
      {/* 
        ========================================================================
        STICKY VIEWPORT STAGE (Pinned 100vh stage for the Identity -> Reveal)
        ======================================================================== 
      */}
      <section
        id="top"
        className="sticky top-0 h-screen h-[100dvh] w-full flex flex-col justify-between bg-[#010a0b] text-[#feffff] border-b border-white/[0.08] overflow-hidden pt-24 sm:pt-28 pb-6 sm:pb-8 px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20 z-10 select-none"
      >
        {/* Atmospheric Background Layer: Animated ASCII Donut with Radial Focus Falloff */}
        <div className="absolute inset-y-0 left-0 w-full pointer-events-none z-0 overflow-hidden">
          <AsciiDonutBackground widthFraction={0.65} opacity={0.28} className="z-0" />
          {/* Subtle center vignette to keep central typography completely crisp */}
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,10,11,0.85)_0%,rgba(1,10,11,0.5)_45%,transparent_85%)] pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* Secondary Technical Metadata at Top Right */}
        <div className="absolute top-24 right-6 sm:right-10 lg:right-12 xl:right-16 2xl:right-20 hidden md:flex flex-col items-end font-mono text-[10px] text-white/30 tracking-widest pointer-events-none space-y-0.5">
          <span>// GREATER NOIDA, IN</span>
          <span>// B.TECH CSE + AIML (AKTU 2028)</span>
          <span className="text-[#f6d009]/50">SYS: NEURAL_REASONING // v0.1</span>
        </div>

        {/* 
          ======================================================================
          CORE COMPOSITION STAGE: Identity (Text) + Reveal (Portrait)
          ======================================================================
        */}
        <div className="relative w-full max-w-7xl mx-auto my-auto flex items-center justify-center min-h-[55vh] z-10">
          
          {/* 
            LAYER A: PORTRAIT ENTITY (Centered/Behind at Progress 0 -> Right Column at Progress 1)
          */}
          <motion.div
            style={{
              x: photoTranslateX,
              y: photoTranslateY,
              opacity: photoOpacity,
              scale: photoScale,
              filter: photoFilter,
            }}
            className="absolute z-10 pointer-events-none flex items-center justify-center"
          >
            <PortraitFrame haloOpacity={haloOpacity} />
          </motion.div>

          {/* 
            LAYER B: TYPOGRAPHY & EDITORIAL CONTENT (Centered at Progress 0 -> Left Column at Progress 1)
          */}
          <motion.div
            style={{
              x: textTranslateX,
              y: textTranslateY,
              scale: textScale,
            }}
            className="relative z-20 flex flex-col items-center text-center max-w-3xl px-4 will-change-transform"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 rounded-full font-mono text-[11px] text-white/80 shadow-sm backdrop-blur-md mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#f6d009] shadow-[0_0_10px_rgba(246,208,9,0.8)] radar-dot inline-block" />
              <span className="text-[#feffff] font-medium">{PORTFOLIO_METADATA.statusBadge}</span>
            </div>

            {/* Monumental Editorial Headline */}
            <h1 className="font-display font-black tracking-[-0.035em] text-[#feffff] uppercase select-none text-[clamp(3.1rem,8.2vw,6.8rem)] leading-[0.93] drop-shadow-[0_4px_36px_rgba(0,0,0,0.9)]">
              <span className="inline-block whitespace-nowrap">NAYANT</span>{' '}
              <span className="inline-block whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-[#dfb15b]/85">
                SRIVASTAVA
              </span>
            </h1>

            {/* Role & Specialization */}
            <div className="mt-4 sm:mt-5 space-y-1">
              <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.26em] text-[#f6d009] font-bold">
                AI / ML Engineer
              </p>
              <p className="font-mono text-[11px] sm:text-xs text-white/50 tracking-wider">
                {PORTFOLIO_METADATA.specialization}
              </p>
            </div>

            {/* Thesis Statement / Bio */}
            <p className="font-sans text-sm sm:text-base text-white/70 font-normal leading-relaxed max-w-xl mt-4 sm:mt-5">
              {PORTFOLIO_METADATA.thesis}
            </p>

            {/* Technical foundations line */}
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-white/45 mt-3">
              <Terminal className="w-3.5 h-3.5 text-[#f6d009] flex-shrink-0" />
              <span>Foundations in {PORTFOLIO_METADATA.foundations}</span>
            </div>

            {/* Premium Compact CTA Buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="#projects"
                className="px-5 py-2.5 bg-gradient-to-r from-[#d4af37] to-[#f6d009] hover:from-[#e5c04a] hover:to-[#ffd829] text-[#010a0b] font-mono text-xs uppercase font-bold tracking-wider rounded-sm flex items-center gap-2 shadow-[0_0_20px_rgba(246,208,9,0.25)] transition-all transform active:scale-95"
              >
                View Projects
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>

              <a
                href={PORTFOLIO_METADATA.resumeUrl}
                className="px-5 py-2.5 bg-white/[0.03] hover:bg-white/[0.08] border border-white/20 hover:border-[#f6d009]/60 text-white/90 font-mono text-xs uppercase tracking-wider rounded-sm flex items-center gap-2 transition-all backdrop-blur-sm active:scale-95"
              >
                Resume / CV
                <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* 
          ======================================================================
          SCROLL INDICATOR AFFORDANCE (Fades out seamlessly upon scroll)
          ======================================================================
        */}
        <motion.div
          style={{
            opacity: scrollIndicatorOpacity,
            y: scrollIndicatorY,
          }}
          className="absolute bottom-16 sm:bottom-20 right-8 sm:right-12 hidden md:flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-white/40 pointer-events-none select-none"
        >
          <span className="uppercase">Scroll</span>
          <div className="w-[1px] h-7 bg-gradient-to-b from-[#f6d009] to-transparent animate-pulse" />
          <ArrowDown className="w-3 h-3 text-[#f6d009]" />
        </motion.div>

        {/* 
          ======================================================================
          BOTTOM: Technical Domains & Architecture Pillars Bar (Exit Transition)
          ======================================================================
        */}
        <motion.div
          style={{
            opacity: bottomBarOpacity,
            y: bottomBarY,
          }}
          className="w-full pt-4 sm:pt-6 border-t border-white/[0.08] z-20"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/35 flex-shrink-0">
              Research &amp; Engineering Focus:
            </span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-white/60">
              {technicalPillars.map((pillar) => (
                <span key={pillar} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f6d009]/60 flex-shrink-0" />
                  <span className="hover:text-white transition-colors">{pillar}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

/**
 * Reusable clean portrait photo frame with layered atmospheric gold halo.
 */
interface PortraitFrameProps {
  haloOpacity: any;
}

const PortraitFrame: React.FC<PortraitFrameProps> = ({ haloOpacity }) => {
  return (
    <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] 2xl:w-[29rem] 2xl:h-[29rem] flex items-center justify-center">
      {/* Dynamic atmospheric gold halo light emerging behind the headshot */}
      <motion.div
        style={{ opacity: haloOpacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] rounded-full bg-[radial-gradient(circle,rgba(246,208,9,0.16)_0%,rgba(246,208,9,0.04)_45%,transparent_70%)] blur-3xl pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Clean portrait render */}
      <div className="relative w-full h-full z-10">
        <Image
          src="/nayant-portrait-clean.png"
          alt="Nayant Srivastava — AI / ML Engineer"
          fill
          priority
          sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 460px"
          className="object-contain object-center select-none pointer-events-none drop-shadow-[0_12px_36px_rgba(0,0,0,0.85)]"
        />
      </div>
    </div>
  );
};
