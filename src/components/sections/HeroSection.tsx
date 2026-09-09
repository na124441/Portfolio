'use client';

import React from 'react';
import Image from 'next/image';
import { PORTFOLIO_METADATA } from '@/data/portfolio';
import { Button } from '@/components/ui/Button';
import { ArrowDown, ArrowUpRight, Terminal } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { motion, useReducedMotion } from 'framer-motion';
import { AsciiDonutBackground } from '@/components/ui/AsciiDonutBackground';

export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Technical pillars for the editorial trust/domain bar
  const technicalPillars = [
    'Autonomous Telemetry Anomaly Reasoning',
    'Temporal Graph Networks',
    'Offline Reinforcement Learning',
    'Quantized Edge Execution',
  ];

  return (
    <section
      id="top"
      className="min-h-screen min-h-[100dvh] flex flex-col justify-between bg-[#010a0b] text-[#feffff] border-b border-white/[0.08] relative overflow-hidden pt-24 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-12"
    >
      {/* 
        ========================================================================
        LAYER 1: Rotating 3D ASCII Donut (Torus) Mathematical Background
        ======================================================================== 
      */}
      <div className="absolute inset-y-0 left-0 w-full pointer-events-none z-0 overflow-hidden">
        <AsciiDonutBackground
          widthFraction={0.48}
          opacity={0.32}
          className="z-0"
        />
      </div>

      <div className="absolute top-24 right-6 hidden 2xl:flex flex-col items-end font-mono text-[10px] text-white/20 select-none tracking-widest pointer-events-none">
        <span>LOC: 12.9716° N, 77.5946° E</span>
        <span>SYS: NEURAL_REASONING // v0.1</span>
      </div>

      {/* 
        ========================================================================
        LAYER 2 & 3: Typography & Balanced Photo Composition
        Reading order:
          1. Status Badge ("Open to AI/ML & Systems Roles")
          2. Headline ("NAYANT SRIVASTAVA" - fluid clamp, never clips)
          3. Role Subtitle ("AI / ML ENGINEER", letter-spaced)
          4. 1-2 sentence Bio (~40-60 chars per line)
          5. CTA Buttons (Primary, Outline, Ghost)
          6. Balanced Photo with subtle gold radial glow backdrop
        ======================================================================== 
      */}
      <div className="w-full max-w-6xl mx-auto my-auto py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Editorial Text Stack (Top-to-Bottom Flow) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-7 z-10 text-left">
            
            {/* 1. Status Badge (Consolidated single source of truth) */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full font-mono text-xs text-white/80 shadow-sm backdrop-blur-sm w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-[#f6d009] shadow-[0_0_8px_rgba(246,208,9,0.7)] radar-dot inline-block" />
              <span className="text-[#feffff] font-medium">{PORTFOLIO_METADATA.statusBadge}</span>
            </motion.div>

            {/* 2. Dominant Headline (Fluid-sized, guaranteed never to clip) */}
            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold tracking-tight text-[#feffff] uppercase select-none text-[clamp(2.1rem,5.5vw,4.5rem)] leading-[1.06] text-left"
            >
              <span className="inline-block whitespace-nowrap">NAYANT</span>{' '}
              <span className="inline-block whitespace-nowrap">SRIVASTAVA</span>
            </motion.h1>

            {/* 3. Role Subtitle (Letter-spaced, balanced scale) */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-1"
            >
              <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-[#f6d009] font-semibold">
                AI / ML Engineer
              </p>
              <p className="font-mono text-[11px] sm:text-xs text-white/50 tracking-wider">
                {PORTFOLIO_METADATA.specialization}
              </p>
            </motion.div>

            {/* Mobile-only Photo Placement (Stacked between Subtitle and Bio) */}
            <div className="block lg:hidden my-2">
              <PortraitPhotoBlock shouldReduceMotion={shouldReduceMotion} />
            </div>

            {/* 4. Bio / Thesis Statement (~40-60 character line length for readability) */}
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-sm sm:text-base text-white/70 font-normal leading-relaxed max-w-xl"
            >
              {PORTFOLIO_METADATA.thesis}
            </motion.p>

            {/* Technical foundations line */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 text-xs font-mono text-white/45"
            >
              <Terminal className="w-3.5 h-3.5 text-[#f6d009] flex-shrink-0" />
              <span>Foundations in {PORTFOLIO_METADATA.foundations}</span>
            </motion.div>

            {/* 5. CTA Actions */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <Button href="#projects" variant="primary" size="md">
                View Projects
                <ArrowDown className="w-3.5 h-3.5" />
              </Button>

              <Button href={PORTFOLIO_METADATA.resumeUrl} variant="outline" size="md">
                Resume / CV
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>

              <Button
                href={PORTFOLIO_METADATA.githubUrl}
                variant="ghost"
                size="md"
                isExternal
                className="text-white/60 hover:text-[#f6d009]"
              >
                <GithubIcon size={16} />
                GitHub
              </Button>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Desktop Portrait with Soft Radial Gold Glow Backdrop */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative">
            <PortraitPhotoBlock shouldReduceMotion={shouldReduceMotion} />
          </div>

        </div>
      </div>

      {/* 
        ========================================================================
        BOTTOM: Technical Domains & Architecture Pillars Bar (Editorial Trust Bar)
        ======================================================================== 
      */}
      <div className="w-full max-w-6xl mx-auto pt-6 sm:pt-8 border-t border-white/[0.08]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
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
      </div>
    </section>
  );
};

/**
 * Reusable clean portrait photo component.
 * Displays the de-screened, smoothed portrait on a subtle, large-radius
 * gold radial glow backdrop (5-8% opacity) without hard lines or textures.
 */
const PortraitPhotoBlock: React.FC<{ shouldReduceMotion: boolean | null }> = ({
  shouldReduceMotion,
}) => {
  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] xl:w-[25rem] xl:h-[25rem] flex items-center justify-center mx-auto"
    >
      {/* 
        Soft Gold Radial Glow Backdrop (5-8% opacity, large blur radius)
        Provides gentle depth and warmth without visual noise or hard borders.
      */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full bg-[radial-gradient(circle,rgba(246,208,9,0.07)_0%,rgba(246,208,9,0.02)_45%,transparent_70%)] blur-2xl pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Clean, color-graded portrait with seamless circular/dissolved boundary */}
      <div className="relative w-full h-full z-10">
        <Image
          src="/nayant-portrait-clean.png"
          alt="Nayant Srivastava — AI / ML Engineer"
          fill
          priority
          sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 400px"
          className="object-contain object-center select-none pointer-events-none"
        />
      </div>
    </motion.div>
  );
};
