'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { PORTFOLIO_METADATA } from '@/data/portfolio';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { AsciiDonutBackground } from '@/components/ui/AsciiDonutBackground';
import { EnergyField } from '@/components/ui/EnergyField';
import gsap from 'gsap';
export const HeroSection: React.FC = () => {
  const stageRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const portraitLayerRef = useRef<HTMLDivElement | null>(null);
  const haloRef = useRef<HTMLDivElement | null>(null);
  const energyFieldRef = useRef<HTMLDivElement | null>(null);
  const scrollIndicatorRef = useRef<HTMLAnchorElement | null>(null);
  const bottomBarRef = useRef<HTMLDivElement | null>(null);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Technical pillars for the publication-style engineering index
  const technicalPillars = [
    { index: '01', title: 'ARTIFICIAL INTELLIGENCE' },
    { index: '02', title: 'SYSTEMS ENGINEERING' },
    { index: '03', title: 'COMPUTATION & MATHEMATICS' },
    { index: '04', title: 'GRAPHICS & INTERACTIVE TECHNOLOGY' },
  ];

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // =========================================================================
  // GSAP Entrance & Mouse Depth Parallax Micro-Interaction
  // Clean, seamless load animation without scroll-jacking or empty height gaps.
  // =========================================================================
  useEffect(() => {
    if (typeof window === 'undefined' || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Entrance timeline on mount
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      if (textRef.current) {
        tl.fromTo(
          textRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.1 }
        );
      }

      if (portraitLayerRef.current) {
        tl.fromTo(
          portraitLayerRef.current,
          { opacity: 0, scale: 0.94 },
          { opacity: 1, scale: 1, duration: 0.9 },
          '-=0.6'
        );
      }

      if (haloRef.current) {
        tl.fromTo(
          haloRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 0.55, scale: 1, duration: 1.0 },
          '-=0.7'
        );
      }

      if (energyFieldRef.current) {
        tl.fromTo(
          energyFieldRef.current,
          { opacity: 0 },
          { opacity: 0.95, duration: 1.0 },
          '-=0.8'
        );
      }

      if (bottomBarRef.current) {
        tl.fromTo(
          bottomBarRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.5'
        );
      }

      if (scrollIndicatorRef.current) {
        tl.fromTo(
          scrollIndicatorRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.4'
        );
      }

      // 2. Multi-Plane Mouse Depth Parallax
      if (
        portraitLayerRef.current &&
        haloRef.current &&
        energyFieldRef.current &&
        stageRef.current
      ) {
        const quickPortraitX = gsap.quickTo(portraitLayerRef.current, 'x', {
          duration: 0.7,
          ease: 'power3.out',
        });
        const quickPortraitY = gsap.quickTo(portraitLayerRef.current, 'y', {
          duration: 0.7,
          ease: 'power3.out',
        });
        const quickHaloX = gsap.quickTo(haloRef.current, 'x', {
          duration: 1.0,
          ease: 'power3.out',
        });
        const quickHaloY = gsap.quickTo(haloRef.current, 'y', {
          duration: 1.0,
          ease: 'power3.out',
        });
        const quickEnergyX = gsap.quickTo(energyFieldRef.current, 'x', {
          duration: 0.85,
          ease: 'power3.out',
        });
        const quickEnergyY = gsap.quickTo(energyFieldRef.current, 'y', {
          duration: 0.85,
          ease: 'power3.out',
        });

        const handleMouseMove = (e: MouseEvent) => {
          if (!window.matchMedia('(pointer: fine)').matches) return;
          const rect = stageRef.current?.getBoundingClientRect();
          if (!rect) return;

          const normX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
          const normY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

          quickPortraitX(normX * 8);
          quickPortraitY(normY * 5);
          quickHaloX(normX * 14);
          quickHaloY(normY * 9);
          quickEnergyX(normX * 10);
          quickEnergyY(normY * 6);
        };

        const handleMouseLeave = () => {
          quickPortraitX(0);
          quickHaloX(0);
          quickHaloY(0);
          quickEnergyX(0);
          quickEnergyY(0);
        };

        const stageEl = stageRef.current;
        stageEl.addEventListener('mousemove', handleMouseMove);
        stageEl.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          stageEl.removeEventListener('mousemove', handleMouseMove);
          stageEl.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    }, stageRef);

    return () => {
      ctx.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      id="top"
      ref={stageRef}
      className="relative min-h-screen lg:min-h-[100dvh] w-full flex flex-col justify-between bg-[#010a0b] text-[#feffff] border-b border-white/[0.08] overflow-hidden pt-24 sm:pt-28 pb-6 sm:pb-8 px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 z-10 select-none"
    >
      {/* Atmospheric Background Layer: Subtle Environmental ASCII Donut */}
      <div className="absolute inset-0 w-full pointer-events-none z-0 overflow-hidden opacity-90 sm:opacity-95 lg:opacity-100">
        <AsciiDonutBackground widthFraction={1.0} opacity={0.22} className="z-0" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(1,10,11,0.45)_75%,rgba(1,10,11,0.85)_100%)] pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Editorial Publication Metadata at Top Right */}
      <div className="absolute top-24 right-6 sm:right-10 lg:right-12 xl:right-16 2xl:right-20 hidden md:flex flex-col items-end font-mono text-[11px] text-white/40 tracking-[0.2em] pointer-events-none space-y-1">
        <span className="text-white/70 font-medium">ENGINEERING / 01</span>
        <span>GREATER NOIDA, IN</span>
      </div>

      {/* Main Content Area: Responsive 12-Column Editorial Showcase */}
      <div className="w-full max-w-7xl mx-auto my-auto py-6 sm:py-8 lg:py-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center w-full">
          {/* Typography & Actions */}
          <div
            ref={textRef}
            className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left z-10 will-change-transform"
          >
            {/* Status Pill */}
            <div className="hero-badge-wrap inline-flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 rounded-full font-mono text-[11px] text-white/80 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#f6d009] shadow-[0_0_10px_rgba(246,208,9,0.8)] radar-dot inline-block" />
              <span className="text-[#feffff] font-medium">{PORTFOLIO_METADATA.statusBadge}</span>
            </div>

            {/* Monumental Two-Line Editorial Headline */}
            <h1 className="hero-headline hero-headline-wrap font-display font-black tracking-[-0.04em] uppercase select-none text-5xl sm:text-6xl md:text-7xl lg:text-[clamp(3.5rem,7.5vw,7.2rem)] leading-[0.92] drop-shadow-[0_4px_36px_rgba(0,0,0,0.9)]">
              <span className="block">NAYANT</span>
              <span className="block">SRIVASTAVA</span>
            </h1>

            {/* Role & Positioning */}
            <div className="hero-role-wrap">
              <p className="hero-role-line font-mono text-xs sm:text-sm tracking-[0.2em] uppercase">
                {PORTFOLIO_METADATA.role}
              </p>
            </div>

            {/* Thesis Statement / Editorial Bio */}
            <p className="hero-subline hero-subline-wrap font-sans text-sm sm:text-base leading-relaxed max-w-[34ch] sm:max-w-xl">
              {PORTFOLIO_METADATA.thesis}
            </p>

            {/* CTA Hierarchy */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="/work"
                className="hero-btn-primary w-full sm:w-auto min-h-[44px]"
              >
                Explore Work
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>

              <a
                href="/lab"
                className="hero-btn-secondary w-full sm:w-auto min-h-[44px]"
              >
                Enter the Lab
                <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
              </a>
            </div>
          </div>

          {/* Portrait & Computational Energy Field */}
          <div className="md:col-span-5 flex items-center justify-center relative my-6 md:my-0">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] 2xl:w-[29rem] 2xl:h-[29rem] flex items-center justify-center">
              {/* 1. Atmospheric Ambient Glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] rounded-full bg-[radial-gradient(circle,rgba(246,208,9,0.06)_0%,rgba(246,208,9,0.015)_50%,transparent_70%)] blur-3xl pointer-events-none z-0"
                aria-hidden="true"
              />

              {/* 2. Dynamic Gold Radial Halo */}
              <div
                ref={haloRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] rounded-full bg-[radial-gradient(circle,rgba(246,208,9,0.14)_0%,rgba(246,208,9,0.04)_45%,transparent_70%)] blur-2xl pointer-events-none z-10 will-change-transform"
                aria-hidden="true"
              />

              {/* 3. N-01 / ENERGY FIELD: 3D Computational Torus */}
              <div
                ref={energyFieldRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none z-15 will-change-transform flex items-center justify-center"
              >
                <EnergyField className="w-full h-full" reducedMotion={prefersReducedMotion} />
              </div>

              {/* 4. Masked Portrait Container with Clean Drop Shadow */}
              <div
                ref={portraitLayerRef}
                className="relative w-full h-full z-20 will-change-transform"
              >
                <Image
                  src="/nayant-portrait-clean.png"
                  alt="Nayant Srivastava — AI / Systems Engineer"
                  fill
                  priority
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 320px, 460px"
                  className="portrait-image object-contain object-center select-none pointer-events-none drop-shadow-[0_12px_36px_rgba(0,0,0,0.85)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (Desktop only) */}
      <a
        ref={scrollIndicatorRef}
        href="#currently-building"
        title="Jump directly to active initiatives and systems"
        className="absolute bottom-16 sm:bottom-20 right-8 sm:right-12 hidden lg:flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-white/40 hover:text-white select-none will-change-transform transition-colors group cursor-pointer z-20"
      >
        <span className="uppercase group-hover:text-[#f6d009] transition-colors">Work ↓</span>
        <div className="w-[1px] h-7 bg-gradient-to-b from-[#f6d009] to-transparent group-hover:from-white transition-colors" />
        <ArrowDown className="w-3 h-3 text-[#f6d009] group-hover:translate-y-1 transition-transform" />
      </a>

      {/* Publication-Style Engineering Index */}
      <div
        ref={bottomBarRef}
        className="w-full pt-4 sm:pt-6 border-t border-white/[0.08] z-20 will-change-transform"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35 flex-shrink-0">
            ENGINEERING INDEX
          </span>
          <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-2 text-xs font-mono">
            {technicalPillars.map((item) => (
              <span key={item.index} className="flex items-center gap-2">
                <span className="text-[#f6d009] font-medium">{item.index}</span>
                <span className="text-white/30">—</span>
                <span className="text-white/65 hover:text-white transition-colors tracking-wide">
                  {item.title}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

