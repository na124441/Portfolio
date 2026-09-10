'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { PORTFOLIO_METADATA } from '@/data/portfolio';
import { ArrowDown, ArrowRight, Terminal } from 'lucide-react';
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
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement | null>(null);
  const bottomBarRef = useRef<HTMLDivElement | null>(null);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Technical pillars for the editorial domain focus bar
  const technicalPillars = [
    'Autonomous Telemetry Anomaly Reasoning',
    'Temporal Graph Networks',
    'Offline Reinforcement Learning',
    'Quantized Edge Execution',
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
      // ---------------------------------------------------------------------
      // Initial Desktop State: Portrait shrouded in shadow, masked, blurred
      // ---------------------------------------------------------------------
      gsap.set(portraitLayerRef.current, {
        opacity: 0,
        scale: 1.12,
        y: 40,
        x: 80,
        filter: 'brightness(0.25) contrast(0.8) blur(8px)',
        transformOrigin: 'center center',
      });

      gsap.set(portraitMaskRef.current, {
        clipPath: 'circle(12% at 65% 45%)',
        WebkitClipPath: 'circle(12% at 65% 45%)',
      });

      gsap.set(haloRef.current, {
        opacity: 0,
        scale: 0.7,
        rotation: -8,
        transformOrigin: 'center center',
      });

      gsap.set(energyFieldRef.current, {
        opacity: 0.04,
        scale: 1.15,
        y: 35,
        x: 60,
        filter: 'brightness(0.3) blur(6px)',
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
        y: 24,
      });

      // ---------------------------------------------------------------------
      // Master ScrollTrigger Timeline: 180vh-215vh Pinned Scrub (Desktop Only)
      // ---------------------------------------------------------------------
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
        },
      });

      // PHASE 1: Hidden Entity (0% -> 15%)
      tl.to(
        portraitLayerRef.current,
        {
          opacity: 0.12,
          scale: 1.08,
          y: 25,
          x: 55,
          filter: 'brightness(0.25) contrast(0.8) blur(8px)',
          ease: 'power1.inOut',
          duration: 0.15,
        },
        0
      )
        .to(
          portraitMaskRef.current,
          {
            clipPath: 'circle(18% at 62% 46%)',
            WebkitClipPath: 'circle(18% at 62% 46%)',
            ease: 'power1.inOut',
            duration: 0.15,
          },
          0
        )
        .to(
          haloRef.current,
          {
            opacity: 0.15,
            scale: 0.78,
            rotation: -6,
            ease: 'power1.inOut',
            duration: 0.15,
          },
          0
        )
        .to(
          energyFieldRef.current,
          {
            opacity: 0.16,
            scale: 1.1,
            y: 20,
            x: 45,
            filter: 'brightness(0.4) blur(4px)',
            ease: 'power1.inOut',
            duration: 0.15,
          },
          0
        )
        .to(
          scrollIndicatorRef.current,
          {
            opacity: 0,
            y: 16,
            ease: 'power2.out',
            duration: 0.1,
          },
          0
        );

      // PHASE 2: Emergence (15% -> 45%)
      tl.to(
        portraitLayerRef.current,
        {
          opacity: 0.65,
          scale: 1.02,
          x: 20,
          y: 0,
          filter: 'brightness(0.75) contrast(0.9) blur(2px)',
          ease: 'power2.out',
          duration: 0.3,
        },
        0.15
      )
        .to(
          portraitMaskRef.current,
          {
            clipPath: 'circle(56% at 55% 50%)',
            WebkitClipPath: 'circle(56% at 55% 50%)',
            ease: 'power2.inOut',
            duration: 0.3,
          },
          0.15
        )
        .to(
          haloRef.current,
          {
            opacity: 0.5,
            scale: 1.0,
            rotation: 0,
            ease: 'power2.out',
            duration: 0.3,
          },
          0.15
        )
        .to(
          energyFieldRef.current,
          {
            opacity: 0.75,
            scale: 1.03,
            x: 15,
            y: 0,
            filter: 'brightness(0.8) blur(1px)',
            ease: 'power2.out',
            duration: 0.3,
          },
          0.15
        )
        .to(
          textRef.current,
          {
            xPercent: -14,
            yPercent: 0,
            scale: 0.97,
            ease: 'power1.out',
            duration: 0.3,
          },
          0.15
        )
        .fromTo(
          lightSweepRef.current,
          { xPercent: -130, opacity: 0 },
          { xPercent: 140, opacity: 0.75, ease: 'power2.inOut', duration: 0.25 },
          0.2
        );

      // PHASE 3: Hero Moment (45% -> 70%)
      tl.to(
        portraitLayerRef.current,
        {
          opacity: 1,
          scale: 0.985,
          x: 0,
          y: -5,
          filter: 'brightness(1.0) contrast(1.05) blur(0px)',
          ease: 'power3.out',
          duration: 0.2,
        },
        0.45
      )
        .to(
          portraitLayerRef.current,
          {
            scale: 1,
            ease: 'power2.out',
            duration: 0.05,
          },
          0.65
        )
        .to(
          portraitMaskRef.current,
          {
            clipPath: 'circle(120% at 50% 50%)',
            WebkitClipPath: 'circle(120% at 50% 50%)',
            ease: 'expo.out',
            duration: 0.25,
          },
          0.45
        )
        .to(
          haloRef.current,
          {
            opacity: 0.65,
            ease: 'power2.out',
            duration: 0.25,
          },
          0.45
        )
        .to(
          energyFieldRef.current,
          {
            opacity: 1,
            scale: 1,
            x: 0,
            y: -5,
            filter: 'brightness(1.0) blur(0px)',
            ease: 'power3.out',
            duration: 0.25,
          },
          0.45
        )
        .to(
          textRef.current,
          {
            xPercent: -27,
            yPercent: 0,
            scale: 0.94,
            ease: 'power3.out',
            duration: 0.25,
          },
          0.45
        );

      // PHASE 4: Cinematic Lock (70% -> 100%)
      tl.to(
        portraitLayerRef.current,
        {
          y: -20,
          scale: 1.015,
          ease: 'none',
          duration: 0.3,
        },
        0.7
      )
        .to(
          energyFieldRef.current,
          {
            y: -20,
            scale: 1.015,
            ease: 'none',
            duration: 0.3,
          },
          0.7
        )
        .to(
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
      // Micro-Interaction: Multi-Plane Mouse Depth Parallax via gsap.quickTo
      // ---------------------------------------------------------------------
      let cleanupMouse: (() => void) | undefined;
      if (portraitLayerRef.current && haloRef.current && overlayRef.current && energyFieldRef.current) {
        const quickPortraitX = gsap.quickTo(portraitLayerRef.current, 'x', {
          duration: 0.6,
          ease: 'power3.out',
        });
        const quickPortraitY = gsap.quickTo(portraitLayerRef.current, 'y', {
          duration: 0.6,
          ease: 'power3.out',
        });
        const quickHaloX = gsap.quickTo(haloRef.current, 'x', {
          duration: 0.9,
          ease: 'power3.out',
        });
        const quickHaloY = gsap.quickTo(haloRef.current, 'y', {
          duration: 0.9,
          ease: 'power3.out',
        });
        const quickEnergyX = gsap.quickTo(energyFieldRef.current, 'x', {
          duration: 0.75,
          ease: 'power3.out',
        });
        const quickEnergyY = gsap.quickTo(energyFieldRef.current, 'y', {
          duration: 0.75,
          ease: 'power3.out',
        });
        const quickOverlayX = gsap.quickTo(overlayRef.current, 'x', {
          duration: 0.45,
          ease: 'power3.out',
        });
        const quickOverlayY = gsap.quickTo(overlayRef.current, 'y', {
          duration: 0.45,
          ease: 'power3.out',
        });

        const handleMouseMove = (e: MouseEvent) => {
          if (!window.matchMedia('(pointer: fine)').matches) return;
          const progress = tl.scrollTrigger ? tl.scrollTrigger.progress : 0;
          if (progress < 0.35) return;

          const factor = Math.min(1, (progress - 0.35) / 0.35);
          const normX = (e.clientX / window.innerWidth - 0.5) * 2;
          const normY = (e.clientY / window.innerHeight - 0.5) * 2;

          quickPortraitX(normX * 8 * factor);
          quickPortraitY(normY * 5 * factor - 5 - (progress > 0.7 ? ((progress - 0.7) / 0.3) * 15 : 0));
          quickHaloX(normX * 15 * factor);
          quickHaloY(normY * 10 * factor);
          quickEnergyX(normX * 10 * factor);
          quickEnergyY(normY * 6 * factor - 5 - (progress > 0.7 ? ((progress - 0.7) / 0.3) * 15 : 0));
          quickOverlayX(normX * 4 * factor);
          quickOverlayY(normY * 3 * factor);
        };

        const handleMouseLeave = () => {
          quickPortraitX(0);
          quickHaloX(0);
          quickHaloY(0);
          quickEnergyX(0);
          quickEnergyY(0);
          quickOverlayX(0);
          quickOverlayY(0);
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

        gsap.set(
          [
            portraitLayerRef.current,
            portraitMaskRef.current,
            haloRef.current,
            energyFieldRef.current,
            lightSweepRef.current,
            textRef.current,
            scrollIndicatorRef.current,
            bottomBarRef.current,
          ],
          {
            clearProps: 'all',
          }
        );
      };
    });

    return () => {
      mm.revert();
    };
  }, [prefersReducedMotion]);

  // Reduced motion accessible fallback
  if (prefersReducedMotion) {
    return (
      <section
        id="top"
        className="min-h-screen flex flex-col justify-between bg-[#010a0b] text-[#feffff] border-b border-white/[0.08] relative overflow-hidden pt-24 sm:pt-28 pb-8 sm:pb-12 px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20"
      >
        <div className="absolute inset-0 w-full pointer-events-none z-0 overflow-hidden opacity-30 sm:opacity-50 lg:opacity-100">
          <AsciiDonutBackground widthFraction={0.5} opacity={0.25} className="z-0" />
        </div>

        <div className="w-full my-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center w-full">
            <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left space-y-5 z-10">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full font-mono text-xs text-white/80 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#f6d009] shadow-[0_0_8px_rgba(246,208,9,0.7)]" />
                <span>{PORTFOLIO_METADATA.statusBadge}</span>
              </div>
              <h1 className="font-display font-black tracking-[-0.03em] uppercase text-4xl sm:text-5xl lg:text-[clamp(2.8rem,6.5vw,5.5rem)] leading-[0.98]">
                <span>NAYANT</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-[#dfb15b]/80">
                  SRIVASTAVA
                </span>
              </h1>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#f6d009] font-semibold">
                AI / ML ENGINEER · {PORTFOLIO_METADATA.specialization}
              </p>
              <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl leading-relaxed">
                {PORTFOLIO_METADATA.thesis}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full sm:w-auto">
                <a
                  href="#projects"
                  className="w-full sm:w-auto min-h-[44px] px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#f6d009] text-black font-mono text-xs uppercase font-bold tracking-wider rounded-sm flex items-center justify-center gap-2"
                >
                  View Projects <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={PORTFOLIO_METADATA.resumeUrl}
                  className="w-full sm:w-auto min-h-[44px] px-6 py-3 bg-white/[0.03] border border-white/20 hover:border-[#f6d009]/60 text-white font-mono text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2"
                >
                  Resume / CV <ArrowDown className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="md:col-span-5 flex items-center justify-center relative my-6 md:my-0">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] 2xl:w-[29rem] 2xl:h-[29rem] flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] rounded-full bg-[radial-gradient(circle,rgba(246,208,9,0.16)_0%,rgba(246,208,9,0.04)_45%,transparent_70%)] blur-3xl pointer-events-none z-0" />
                {/* N-01 / ENERGY FIELD Static Fallback */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none z-5 flex items-center justify-center">
                  <EnergyField className="w-full h-full" reducedMotion={true} />
                </div>
                <div className="relative w-full h-full z-10">
                  <Image
                    src="/nayant-portrait-clean.png"
                    alt="Nayant Srivastava — AI / ML Engineer"
                    fill
                    priority
                    sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 320px, 460px"
                    className="object-contain object-center select-none pointer-events-none drop-shadow-[0_12px_36px_rgba(0,0,0,0.85)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pt-6 border-t border-white/[0.08]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/35">
              Research &amp; Engineering Focus:
            </span>
            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs font-mono text-white/60">
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
    <div ref={containerRef} className="relative w-full lg:h-[215vh] bg-[#010a0b] overflow-hidden">
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
        {/* Atmospheric Background Layer: Animated ASCII Donut with Radial Focus Falloff */}
        <div className="absolute inset-0 w-full pointer-events-none z-0 overflow-hidden opacity-30 sm:opacity-50 lg:opacity-100">
          <AsciiDonutBackground widthFraction={0.65} opacity={0.25} className="z-0" />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,10,11,0.85)_0%,rgba(1,10,11,0.5)_45%,transparent_85%)] pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* Secondary Technical Metadata at Top Right (Desktop/Tablet) */}
        <div className="absolute top-24 right-6 sm:right-10 lg:right-12 xl:right-16 2xl:right-20 hidden md:flex flex-col items-end font-mono text-[10px] text-white/30 tracking-widest pointer-events-none space-y-0.5">
          <span>// GREATER NOIDA, IN</span>
          <span>// B.TECH CSE + AIML (AKTU 2028)</span>
          <span className="text-[#f6d009]/50">SYS: NEURAL_REASONING // v0.1</span>
        </div>

        {/* 
          ======================================================================
          3-TIER RESPONSIVE ARCHITECTURE:
          - Mobile (< 768px): Vertical single-column stack in normal document flow.
            Order: Text/CTAs (top) -> Headshot image (below CTAs) -> Focus tags.
          - Tablet (768px–1023px, md:): 12-column grid. Left 7 cols for Text/CTAs,
            Right 5 cols for Headshot entity.
          - Desktop (≥ 1024px, lg:): Pinned 100dvh stage with relative/absolute composition.
            Text centered-to-left scrub (-27%), portrait centered-to-right (28%).
          
          Note: These three tiers are mutually exclusive by design via Tailwind
          responsive breakpoint cascades (mobile default -> md: -> lg:).
          ======================================================================
        */}
        <div className="w-full max-w-7xl mx-auto my-auto flex flex-col items-center md:grid md:grid-cols-12 md:gap-8 md:items-center lg:relative lg:flex lg:flex-row lg:items-center lg:justify-center lg:min-h-[55vh] z-10">
          
          {/* 
            LAYER A: TYPOGRAPHY & EDITORIAL CONTENT
            (DOM Order 1: Badge -> Headline -> Role -> Thesis -> Foundations -> CTAs)
          */}
          <div
            ref={textRef}
            className="relative z-20 flex flex-col items-center text-center max-w-xl md:max-w-none md:col-span-7 md:items-start md:text-left lg:relative lg:z-20 lg:flex lg:flex-col lg:items-center lg:text-center lg:max-w-3xl lg:px-4 will-change-transform"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 rounded-full font-mono text-[11px] text-white/80 shadow-sm backdrop-blur-md mb-3 sm:mb-4 lg:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#f6d009] shadow-[0_0_10px_rgba(246,208,9,0.8)] radar-dot inline-block" />
              <span className="text-[#feffff] font-medium">{PORTFOLIO_METADATA.statusBadge}</span>
            </div>

            {/* Monumental Editorial Headline */}
            <h1 className="font-display font-black tracking-[-0.035em] text-[#feffff] uppercase select-none text-4xl sm:text-5xl md:text-5xl lg:text-[clamp(3.1rem,8.2vw,6.8rem)] leading-[0.98] drop-shadow-[0_4px_36px_rgba(0,0,0,0.9)]">
              <span className="inline-block whitespace-nowrap">NAYANT</span>{' '}
              <span className="inline-block whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-[#dfb15b]/85">
                SRIVASTAVA
              </span>
            </h1>

            {/* Role & Specialization */}
            <div className="mt-3 sm:mt-4 lg:mt-5 space-y-1">
              <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-[#f6d009] font-bold">
                AI / ML Engineer
              </p>
              <p className="font-mono text-[11px] sm:text-xs text-white/50 tracking-wider">
                {PORTFOLIO_METADATA.specialization}
              </p>
            </div>

            {/* Thesis Statement / Bio */}
            <p className="font-sans text-sm sm:text-base text-white/70 font-normal leading-relaxed max-w-[34ch] sm:max-w-xl mt-3 sm:mt-4 lg:mt-5">
              {PORTFOLIO_METADATA.thesis}
            </p>

            {/* Technical foundations line */}
            <div className="flex items-center justify-center md:justify-start lg:justify-center gap-2 text-xs font-mono text-white/45 mt-3 max-w-full">
              <Terminal className="w-3.5 h-3.5 text-[#f6d009] flex-shrink-0" />
              <span className="text-[11px] sm:text-xs">Foundations in {PORTFOLIO_METADATA.foundations}</span>
            </div>

            {/* Premium Touch-Optimized CTA Buttons (min-h-[44px] tap target) */}
            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start lg:justify-center gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto min-h-[44px] px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#f6d009] hover:from-[#e5c04a] hover:to-[#ffd829] text-[#010a0b] font-mono text-xs uppercase font-bold tracking-wider rounded-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(246,208,9,0.25)] transition-all transform active:scale-95"
              >
                View Projects
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>

              <a
                href={PORTFOLIO_METADATA.resumeUrl}
                className="w-full sm:w-auto min-h-[44px] px-6 py-3 bg-white/[0.03] hover:bg-white/[0.08] border border-white/20 hover:border-[#f6d009]/60 text-white/90 font-mono text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-all backdrop-blur-sm active:scale-95"
              >
                Resume / CV
                <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* 
            LAYER B: PORTRAIT ENTITY
            (DOM Order 2: Follows CTAs in document flow on mobile; 
             Right column on tablet; Absolute centered-to-split on desktop)
          */}
          <div
            ref={portraitContainerRef}
            className="relative z-10 w-full max-w-[240px] sm:max-w-[280px] aspect-square mx-auto mt-6 mb-4 md:my-0 md:col-span-5 md:max-w-none md:w-full md:flex md:items-center md:justify-center lg:absolute lg:inset-auto lg:z-10 lg:w-auto lg:h-auto lg:translate-x-[28%] pointer-events-none flex items-center justify-center will-change-transform"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] 2xl:w-[29rem] 2xl:h-[29rem] flex items-center justify-center">
              
              {/* 1. Atmospheric Ambient Glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] rounded-full bg-[radial-gradient(circle,rgba(246,208,9,0.06)_0%,rgba(246,208,9,0.015)_50%,transparent_70%)] blur-3xl pointer-events-none z-0"
                aria-hidden="true"
              />

              {/* 2. Dynamic Gold Radial Halo */}
              <div
                ref={haloRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] rounded-full bg-[radial-gradient(circle,rgba(246,208,9,0.18)_0%,rgba(246,208,9,0.05)_45%,transparent_70%)] blur-2xl pointer-events-none z-10 will-change-transform"
                aria-hidden="true"
              />

              {/* 3. N-01 / ENERGY FIELD: 3D Computational Torus + Traveling Flux + Particles */}
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
                    alt="Nayant Srivastava — AI / ML Engineer"
                    fill
                    priority
                    sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 320px, 460px"
                    className="object-contain object-center select-none pointer-events-none drop-shadow-[0_12px_36px_rgba(0,0,0,0.85)]"
                  />

                  {/* 4. Diagonal Light Sweep Sheen */}
                  <div
                    ref={lightSweepRef}
                    className="absolute inset-0 pointer-events-none z-30 opacity-0 will-change-transform"
                    style={{
                      background:
                        'linear-gradient(108deg, transparent 25%, rgba(255,255,255,0.45) 48%, rgba(246,208,9,0.55) 54%, transparent 72%)',
                      mixBlendMode: 'overlay',
                    }}
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* 5. Technical Reticle Overlay (Hidden below md to eliminate mobile clutter) */}
              <div
                ref={overlayRef}
                className="absolute inset-[-10px] pointer-events-none z-30 hidden md:flex flex-col justify-between p-1 font-mono text-[9px] text-[#f6d009]/40 select-none tracking-widest will-change-transform"
                aria-hidden="true"
              >
                <div className="flex justify-between items-start">
                  <span>+ [ REC:01</span>
                  <span>SYS:NEURAL ] +</span>
                </div>
                <div className="flex justify-between items-end">
                  <span>+ [ 12.97°N</span>
                  <span>77.59°E ] +</span>
                </div>
              </div>

              {/* 6. Subtle Atmospheric Grain Layer */}
              <div
                className="absolute inset-0 pointer-events-none z-40 rounded-full opacity-[0.035] mix-blend-overlay bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px]"
                aria-hidden="true"
              />
            </div>
          </div>

        </div>

        {/* 
          ======================================================================
          SCROLL INDICATOR AFFORDANCE (Desktop only)
          ======================================================================
        */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-16 sm:bottom-20 right-8 sm:right-12 hidden lg:flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-white/40 pointer-events-none select-none will-change-transform"
        >
          <span className="uppercase">Scroll</span>
          <div className="w-[1px] h-7 bg-gradient-to-b from-[#f6d009] to-transparent animate-pulse" />
          <ArrowDown className="w-3 h-3 text-[#f6d009]" />
        </div>

        {/* 
          ======================================================================
          BOTTOM: Technical Domains & Architecture Pillars Bar (Exit Transition)
          ======================================================================
        */}
        <div
          ref={bottomBarRef}
          className="w-full pt-4 sm:pt-6 border-t border-white/[0.08] z-20 will-change-transform"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/35 flex-shrink-0">
              Research &amp; Engineering Focus:
            </span>
            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs font-mono text-white/60">
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
    </div>
  );
};
