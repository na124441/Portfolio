'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { PORTFOLIO_METADATA } from '@/data/portfolio';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { AsciiDonutBackground } from '@/components/ui/AsciiDonutBackground';
import { EnergyField } from '@/components/ui/EnergyField';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const portraitContainerRef = useRef<HTMLDivElement | null>(null);
  const portraitLayerRef = useRef<HTMLDivElement | null>(null);
  const portraitMaskRef = useRef<HTMLDivElement | null>(null);
  const haloRef = useRef<HTMLDivElement | null>(null);
  const energyFieldRef = useRef<HTMLDivElement | null>(null);
  const lightSweepRef = useRef<HTMLDivElement | null>(null);
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
  // GSAP + ScrollTrigger Desktop-Only Master Scrub & Mouse Micro-Interaction
  // Scoped strictly to >=1024px via gsap.matchMedia with clearProps cleanup
  // to guarantee zero style leakage or stuck states on live mobile resize.
  // =========================================================================
  useEffect(() => {
    if (typeof window === 'undefined' || prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      // Ensure all required target elements are mounted
      if (
        !portraitLayerRef.current ||
        !portraitMaskRef.current ||
        !haloRef.current ||
        !energyFieldRef.current ||
        !lightSweepRef.current ||
        !textRef.current ||
        !scrollIndicatorRef.current ||
        !bottomBarRef.current ||
        !containerRef.current
      ) {
        return;
      }

      // ---------------------------------------------------------------------
      // Initial Desktop State: Portrait deep in shadow, masked, subtle blur
      // ---------------------------------------------------------------------
      gsap.set(portraitLayerRef.current, {
        opacity: 0,
        scale: 1.1,
        y: 35,
        x: 65,
        filter: 'brightness(0.25) contrast(0.8) blur(8px)',
        transformOrigin: 'center center',
      });

      gsap.set(portraitMaskRef.current, {
        clipPath: 'circle(14% at 60% 46%)',
        WebkitClipPath: 'circle(14% at 60% 46%)',
      });

      gsap.set(haloRef.current, {
        opacity: 0,
        scale: 0.7,
        transformOrigin: 'center center',
      });

      gsap.set(energyFieldRef.current, {
        opacity: 0.05,
        scale: 1.12,
        y: 30,
        x: 50,
        filter: 'brightness(0.3) blur(5px)',
        transformOrigin: 'center center',
      });

      gsap.set(lightSweepRef.current, {
        xPercent: -130,
        opacity: 0,
      });

      gsap.set(textRef.current, {
        xPercent: 0,
        yPercent: 0,
        scale: 1,
        transformOrigin: 'center center',
      });

      gsap.set(scrollIndicatorRef.current, {
        opacity: 1,
        y: 0,
      });

      gsap.set(bottomBarRef.current, {
        opacity: 0,
        y: 20,
      });

      // ---------------------------------------------------------------------
      // Master ScrollTrigger Timeline: 135vh Streamlined Scrub (Desktop Only)
      // 3 Perceptual Phases: Establish -> Reveal -> Lock
      // ---------------------------------------------------------------------
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.8,
        },
      });

      // PHASE 1: Establish (0.00 -> 0.25)
      // Calm, grounded state. Portrait and EnergyField emerge gently from shadow.
      tl.to(
        portraitLayerRef.current,
        {
          opacity: 0.25,
          scale: 1.05,
          y: 20,
          x: 45,
          filter: 'brightness(0.35) contrast(0.85) blur(6px)',
          ease: 'power1.inOut',
          duration: 0.25,
        },
        0
      )
        .to(
          portraitMaskRef.current,
          {
            clipPath: 'circle(22% at 58% 48%)',
            WebkitClipPath: 'circle(22% at 58% 48%)',
            ease: 'power1.inOut',
            duration: 0.25,
          },
          0
        )
        .to(
          haloRef.current,
          {
            opacity: 0.2,
            scale: 0.82,
            ease: 'power1.inOut',
            duration: 0.25,
          },
          0
        )
        .to(
          energyFieldRef.current,
          {
            opacity: 0.25,
            scale: 1.08,
            y: 18,
            x: 35,
            filter: 'brightness(0.45) blur(3px)',
            ease: 'power1.inOut',
            duration: 0.25,
          },
          0
        )
        .to(
          scrollIndicatorRef.current,
          {
            opacity: 0,
            y: 16,
            ease: 'power2.out',
            duration: 0.15,
          },
          0
        );

      // PHASE 2: Reveal (0.25 -> 0.75)
      // Portrait achieves full crisp focus, EnergyField activates, typography smoothly splits.
      tl.to(
        portraitLayerRef.current,
        {
          opacity: 1,
          scale: 1.0,
          x: 0,
          y: 0,
          filter: 'brightness(1.0) contrast(1.02) blur(0px)',
          ease: 'power2.out',
          duration: 0.5,
        },
        0.25
      )
        .to(
          portraitMaskRef.current,
          {
            clipPath: 'circle(120% at 50% 50%)',
            WebkitClipPath: 'circle(120% at 50% 50%)',
            ease: 'power2.inOut',
            duration: 0.5,
          },
          0.25
        )
        .to(
          haloRef.current,
          {
            opacity: 0.55,
            scale: 1.0,
            ease: 'power2.out',
            duration: 0.5,
          },
          0.25
        )
        .to(
          energyFieldRef.current,
          {
            opacity: 0.95,
            scale: 1.0,
            x: 0,
            y: 0,
            filter: 'brightness(1.0) blur(0px)',
            ease: 'power2.out',
            duration: 0.5,
          },
          0.25
        )
        .to(
          textRef.current,
          {
            xPercent: -26,
            yPercent: 0,
            scale: 0.95,
            ease: 'power2.out',
            duration: 0.5,
          },
          0.25
        )
        .fromTo(
          lightSweepRef.current,
          { xPercent: -130, opacity: 0 },
          { xPercent: 140, opacity: 0.55, ease: 'power2.inOut', duration: 0.35 },
          0.35
        );

      // PHASE 3: Lock (0.75 -> 1.00)
      // Composition locks into perfect balance; bottom publication index smoothly settles.
      tl.to(
        bottomBarRef.current,
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          duration: 0.25,
        },
        0.75
      );

      // ---------------------------------------------------------------------
      // Micro-Interaction: Multi-Plane Mouse Depth Parallax (Calibrated Depth)
      // Amplitudes reduced by 50% to feel spatial and physical rather than floating.
      // ---------------------------------------------------------------------
      let cleanupMouse: (() => void) | undefined;
      if (portraitLayerRef.current && haloRef.current && energyFieldRef.current) {
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
          const progress = tl.scrollTrigger ? tl.scrollTrigger.progress : 0;
          if (progress < 0.25) return;

          const factor = Math.min(1, (progress - 0.25) / 0.4);
          const normX = (e.clientX / window.innerWidth - 0.5) * 2;
          const normY = (e.clientY / window.innerHeight - 0.5) * 2;

          quickPortraitX(normX * 4 * factor);
          quickPortraitY(normY * 2.5 * factor);
          quickHaloX(normX * 7 * factor);
          quickHaloY(normY * 4.5 * factor);
          quickEnergyX(normX * 5 * factor);
          quickEnergyY(normY * 3 * factor);
        };

        const handleMouseLeave = () => {
          quickPortraitX(0);
          quickHaloX(0);
          quickHaloY(0);
          quickEnergyX(0);
          quickEnergyY(0);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        cleanupMouse = () => {
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('mouseleave', handleMouseLeave);
        };
      }

      // ---------------------------------------------------------------------
      // Teardown / Cleanup for mm.add (called when leaving (min-width: 1024px))
      // Explicitly clear all GSAP inline styles to prevent residual state
      // leakage onto mobile/tablet layouts during live resize or orientation switch.
      // ---------------------------------------------------------------------
      return () => {
        if (cleanupMouse) cleanupMouse();

        const targets = [
          portraitLayerRef.current,
          portraitMaskRef.current,
          haloRef.current,
          energyFieldRef.current,
          lightSweepRef.current,
          textRef.current,
          scrollIndicatorRef.current,
          bottomBarRef.current,
        ].filter((el): el is HTMLDivElement | HTMLAnchorElement => Boolean(el));

        if (targets.length > 0) {
          gsap.set(targets, {
            clearProps: 'all',
          });
        }
      };
    });

    return () => {
      mm.revert();
    };
  }, [prefersReducedMotion]);

  // Accessible Reduced Motion Fallback
  if (prefersReducedMotion) {
    return (
      <section
        id="top"
        className="min-h-screen flex flex-col justify-between bg-[#010a0b] text-[#feffff] border-b border-white/[0.08] relative overflow-hidden pt-24 sm:pt-28 pb-8 sm:pb-12 px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20"
      >
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

        <div className="w-full my-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center w-full">
            <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left z-10">
              <div className="hero-badge-wrap inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full font-mono text-xs text-white/80 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#f6d009] shadow-[0_0_8px_rgba(246,208,9,0.7)]" />
                <span>{PORTFOLIO_METADATA.statusBadge}</span>
              </div>
              <h1 className="hero-headline hero-headline-wrap font-display font-black tracking-[-0.04em] uppercase text-5xl sm:text-6xl md:text-7xl lg:text-[clamp(3.5rem,7.5vw,7.2rem)] leading-[0.92]">
                <span className="block">NAYANT</span>
                <span className="block">SRIVASTAVA</span>
              </h1>
              <div className="hero-role-wrap">
                <p className="hero-role-line font-mono text-xs sm:text-sm tracking-[0.2em] uppercase">
                  {PORTFOLIO_METADATA.role}
                </p>
              </div>
              <p className="hero-subline hero-subline-wrap font-sans text-sm sm:text-base leading-relaxed max-w-xl">
                {PORTFOLIO_METADATA.thesis}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a
                  href="/work"
                  className="hero-btn-primary w-full sm:w-auto min-h-[44px]"
                >
                  Explore Work <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>
                <a
                  href="/lab"
                  className="hero-btn-secondary w-full sm:w-auto min-h-[44px]"
                >
                  Enter the Lab <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                </a>
              </div>
            </div>

            <div className="md:col-span-5 flex items-center justify-center relative my-6 md:my-0">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] 2xl:w-[29rem] 2xl:h-[29rem] flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] rounded-full bg-[radial-gradient(circle,rgba(246,208,9,0.14)_0%,rgba(246,208,9,0.03)_45%,transparent_70%)] blur-3xl pointer-events-none z-0" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none z-5 flex items-center justify-center">
                  <EnergyField className="w-full h-full" reducedMotion={true} />
                </div>
                <div className="relative w-full h-full z-10">
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

        <div className="w-full pt-6 border-t border-white/[0.08]">
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
  }

  return (
    <div ref={containerRef} className="relative w-full lg:h-[135vh] bg-[#010a0b] overflow-hidden">
      {/* 
        ========================================================================
        RESPONSIVE STAGE:
        - Mobile/Tablet (< 1024px): Relative natural flow (min-h-screen)
        - Desktop (≥ 1024px): Pinned 100dvh viewport stage for scrub choreography
        ======================================================================== 
      */}
      <section
        id="top"
        ref={stageRef}
        className="relative min-h-screen lg:sticky lg:top-0 lg:h-[100dvh] w-full flex flex-col justify-between bg-[#010a0b] text-[#feffff] border-b border-white/[0.08] overflow-hidden pt-24 sm:pt-28 pb-8 sm:pb-10 lg:py-0 lg:pt-28 lg:pb-8 px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 z-10 select-none"
      >
        {/* Atmospheric Background Layer: Subtle Environmental ASCII Donut */}
        <div className="absolute inset-0 w-full pointer-events-none z-0 overflow-hidden opacity-90 sm:opacity-95 lg:opacity-100">
          <AsciiDonutBackground widthFraction={1.0} opacity={0.22} className="z-0" />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(1,10,11,0.45)_75%,rgba(1,10,11,0.85)_100%)] pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* Editorial Publication Metadata at Top Right (Desktop/Tablet) */}
        <div className="absolute top-24 right-6 sm:right-10 lg:right-12 xl:right-16 2xl:right-20 hidden md:flex flex-col items-end font-mono text-[11px] text-white/40 tracking-[0.2em] pointer-events-none space-y-1">
          <span className="text-white/70 font-medium">ENGINEERING / 01</span>
          <span>GREATER NOIDA, IN</span>
        </div>

        {/* 
          ======================================================================
          3-TIER RESPONSIVE ARCHITECTURE:
          - Mobile (< 768px): Vertical single-column stack in normal document flow.
          - Tablet (768px–1023px, md:): 12-column grid. Left 7 cols for Text/CTAs, Right 5 cols for Portrait entity.
          - Desktop (≥ 1024px, lg:): Pinned 100dvh stage with relative/absolute composition.
          ======================================================================
        */}
        <div className="w-full max-w-7xl mx-auto my-auto flex flex-col items-center md:grid md:grid-cols-12 md:gap-8 md:items-center lg:relative lg:flex lg:flex-row lg:items-center lg:justify-center lg:min-h-[55vh] z-10">
          
          {/* 
            LAYER A: TYPOGRAPHY & EDITORIAL CONTENT
            (Monumental Two-Line Display -> Role -> Thesis -> CTAs)
          */}
          <div
            ref={textRef}
            className="relative z-20 flex flex-col items-center text-center max-w-xl md:max-w-none md:col-span-7 md:items-start md:text-left lg:relative lg:z-20 lg:flex lg:flex-col lg:items-center lg:text-center lg:max-w-3xl lg:px-4 will-change-transform"
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

            {/* CTA Hierarchy: Primary Action ([ EXPLORE WORK → ]) + Editorial Link (Enter the Lab →) */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start lg:justify-center gap-4 w-full sm:w-auto">
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

          {/* 
            LAYER B: PORTRAIT & COMPUTATIONAL ENERGY FIELD ENTITY
            (Human Anchor + Physical Computational Identity)
          */}
          <div
            ref={portraitContainerRef}
            className="relative z-10 w-full max-w-[240px] sm:max-w-[280px] aspect-square mx-auto mt-6 mb-4 md:my-0 md:col-span-5 md:max-w-none md:w-full md:flex md:items-center md:justify-center lg:absolute lg:inset-auto lg:z-10 lg:w-auto lg:h-auto lg:translate-x-[28%] pointer-events-none flex items-center justify-center will-change-transform"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] 2xl:w-[29rem] 2xl:h-[29rem] flex items-center justify-center">
              
              {/* 1. Atmospheric Ambient Glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] rounded-full bg-[radial-gradient(circle,rgba(246,208,9,0.05)_0%,rgba(246,208,9,0.015)_50%,transparent_70%)] blur-3xl pointer-events-none z-0"
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

              {/* 4. Masked Portrait Container with Light Sweep */}
              <div
                ref={portraitMaskRef}
                className="relative w-full h-full z-20 overflow-hidden flex items-center justify-center rounded-full lg:rounded-none"
              >
                <div ref={portraitLayerRef} className="relative w-full h-full will-change-transform">
                  <Image
                    src="/nayant-portrait-clean.png"
                    alt="Nayant Srivastava — AI / Systems Engineer"
                    fill
                    priority
                    sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 320px, 460px"
                    className="portrait-image object-contain object-center select-none pointer-events-none drop-shadow-[0_12px_36px_rgba(0,0,0,0.85)]"
                  />

                  {/* Restrained Light Sweep Sheen */}
                  <div
                    ref={lightSweepRef}
                    className="absolute inset-0 pointer-events-none z-30 opacity-0 will-change-transform"
                    style={{
                      background:
                        'linear-gradient(108deg, transparent 25%, rgba(255,255,255,0.4) 48%, rgba(246,208,9,0.45) 54%, transparent 72%)',
                      mixBlendMode: 'overlay',
                    }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 
          ======================================================================
          SCROLL INDICATOR AFFORDANCE (Desktop only — Interactive Quick Jump)
          ======================================================================
        */}
        <a
          ref={scrollIndicatorRef}
          href="#currently-building"
          title="Jump directly to active initiatives and systems"
          className="absolute bottom-16 sm:bottom-20 right-8 sm:right-12 hidden lg:flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-white/40 hover:text-white select-none will-change-transform transition-colors group cursor-pointer"
        >
          <span className="uppercase group-hover:text-[#f6d009] transition-colors">Work ↓</span>
          <div className="w-[1px] h-7 bg-gradient-to-b from-[#f6d009] to-transparent group-hover:from-white transition-colors" />
          <ArrowDown className="w-3 h-3 text-[#f6d009] group-hover:translate-y-1 transition-transform" />
        </a>

        {/* 
          ======================================================================
          BOTTOM: Publication-Style Engineering Index (Exit Transition)
          ======================================================================
        */}
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
    </div>
  );
};
