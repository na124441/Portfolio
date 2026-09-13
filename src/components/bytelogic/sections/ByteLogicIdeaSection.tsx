'use client';

import React, { useEffect, useRef } from 'react';
import { Compass, Eye, Terminal, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const ByteLogicIdeaSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const blob1Ref = useRef<HTMLDivElement | null>(null);
  const blob2Ref = useRef<HTMLDivElement | null>(null);
  const blob3Ref = useRef<HTMLDivElement | null>(null);

  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const ledeRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 640;

    const ctx = gsap.context(() => {
      // 1. Mesh Blobs Drift Animation (skipped on reduced-motion or mobile < 640px)
      if (!prefersReducedMotion && !isMobile) {
        if (blob1Ref.current) {
          gsap.to(blob1Ref.current, {
            x: '+=8%',
            y: '-=6%',
            duration: 18,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
          });
        }
        if (blob2Ref.current) {
          gsap.to(blob2Ref.current, {
            x: '-=10%',
            y: '+=8%',
            duration: 24,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
          });
        }
        if (blob3Ref.current) {
          gsap.to(blob3Ref.current, {
            x: '+=7%',
            y: '+=9%',
            duration: 20,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
          });
        }
      }

      // 2. Scroll-Entrance Stagger Motion
      if (prefersReducedMotion) {
        gsap.from(sectionRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        });
      } else {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        });

        if (eyebrowRef.current) {
          tl.from(eyebrowRef.current, {
            opacity: 0,
            y: 12,
            duration: 0.5,
            ease: 'power2.out',
          });
        }

        if (headlineRef.current) {
          tl.from(
            headlineRef.current,
            {
              opacity: 0,
              y: 20,
              duration: 0.6,
              ease: 'power3.out',
            },
            '-=0.2'
          );
        }

        if (ledeRef.current) {
          tl.from(
            ledeRef.current.children,
            {
              opacity: 0,
              y: 16,
              duration: 0.5,
              stagger: 0.1,
              ease: 'power2.out',
            },
            '-=0.3'
          );
        }

        const cardElements = cardsRef.current
          ? Array.from(cardsRef.current.children)
          : [];
        if (cardElements.length > 0) {
          tl.from(
            cardElements,
            {
              opacity: 0,
              y: 24,
              duration: 0.6,
              stagger: 0.12,
              ease: 'power3.out',
            },
            '-=0.2'
          );
        }
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.innerWidth < 640) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mx', `${x}px`);
    e.currentTarget.style.setProperty('--my', `${y}px`);
  };

  const pillars = [
    {
      code: '01',
      title: 'UNDERSTAND',
      tagline: 'Analytical Rigor',
      description:
        'Deconstruct theoretical foundations, objective formulations, and mathematical constraints before writing a single line of code. No hand-waving, no ungrounded heuristics.',
      icon: <Compass className="w-5 h-5 text-[#019AA2]" />,
      detail: 'Analytical Derivation & Constraints',
      metric: 'FIRST PRINCIPLES',
    },
    {
      code: '02',
      title: 'VISUALIZE',
      tagline: 'Geometric Intuition',
      description:
        'Transform abstract symbols and equations into dynamic spatial representations, loss manifolds, and vector fields. Build enduring intuition by seeing algorithms execute in coordinate space.',
      icon: <Eye className="w-5 h-5 text-[#019AA2]" />,
      detail: 'Coordinate Manifolds & Vector Fields',
      metric: 'SPATIAL GEOMETRY',
    },
    {
      code: '03',
      title: 'BUILD',
      tagline: 'Zero-Abstraction Code',
      description:
        'Implement algorithms from bare mathematical primitives in pure vectorized code. Reject opaque library imports until the mechanics of every matrix dot product and gradient update are understood.',
      icon: <Terminal className="w-5 h-5 text-[#019AA2]" />,
      detail: 'Vectorized NumPy & C++ Primitives',
      metric: 'FROM SCRATCH',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="idea"
      className="relative w-full overflow-hidden isolate bg-[#05070a] border-t border-[#1C2830]"
    >
      {/* 1. Background — Animated Mesh / Aurora Gradient */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Blob 1: Teal accent (dominant, ByteLogic identity) */}
        <div
          ref={blob1Ref}
          className="absolute -top-[15%] -left-[10%] w-[65vw] max-w-[750px] h-[65vw] max-h-[750px] rounded-full opacity-60 mix-blend-screen pointer-events-none filter blur-[40px] sm:blur-[50px] lg:blur-[70px]"
          style={{
            background:
              'radial-gradient(circle, rgba(1, 154, 162, 0.55) 0%, rgba(45, 212, 191, 0.25) 35%, transparent 70%)',
          }}
        />

        {/* Blob 2: Violet accent (top right) */}
        <div
          ref={blob2Ref}
          className="absolute -top-[10%] -right-[15%] w-[55vw] max-w-[650px] h-[55vw] max-h-[650px] rounded-full opacity-45 mix-blend-screen pointer-events-none filter blur-[40px] sm:blur-[50px] lg:blur-[70px]"
          style={{
            background:
              'radial-gradient(circle, rgba(139, 92, 246, 0.45) 0%, rgba(124, 58, 237, 0.20) 40%, transparent 70%)',
          }}
        />

        {/* Blob 3: Deep blue accent (bottom center/right) */}
        <div
          ref={blob3Ref}
          className="absolute -bottom-[20%] left-[25%] w-[60vw] max-w-[700px] h-[60vw] max-h-[700px] rounded-full opacity-40 mix-blend-screen pointer-events-none filter blur-[40px] sm:blur-[50px] lg:blur-[70px]"
          style={{
            background:
              'radial-gradient(circle, rgba(37, 99, 235, 0.40) 0%, rgba(19, 34, 121, 0.25) 40%, transparent 70%)',
          }}
        />

        {/* Subtle noise/grain SVG overlay */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Container Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 relative z-10">
        {/* 2. Section Header Row */}
        <div
          ref={eyebrowRef}
          className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-8 sm:mb-12 text-xs font-mono"
          style={{
            borderBottom: '1px solid transparent',
            borderImage: 'linear-gradient(90deg, rgba(45, 212, 191, 0.4), transparent) 1',
          }}
        >
          <div className="flex items-center gap-2 text-[#019AA2]">
            <span className="w-2 h-2 rounded-[2px] bg-[#019AA2]" />
            <span className="font-semibold tracking-wider">01 / WHAT IS BYTELOGIC?</span>
          </div>
          <div className="flex items-center gap-3 text-[#68747D] text-[11px]">
            <span>FOUNDATIONAL MANIFESTO</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-[#A8B3BA]">SYS.REF // 01-CORE</span>
          </div>
        </div>

        {/* 3. Main Narrative Headline & Lede Paragraphs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <h2
              ref={headlineRef}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-[#F3F6F7] leading-[1.12]"
            >
              Technical Knowledge{' '}
              <span className="text-[#019AA2]">Without the Black Box.</span>
            </h2>
          </div>
          <div ref={ledeRef} className="lg:col-span-5 space-y-4">
            <p className="text-sm sm:text-base text-[#A8B3BA] leading-relaxed font-sans">
              Modern technical education often abstracts away foundational mathematics or reduces complex algorithms to opaque library calls. We believe that true engineering mastery demands deconstructing the machine from first principles.
            </p>
            <p className="text-xs sm:text-sm text-[#68747D] leading-relaxed font-mono">
              ByteLogic connects analytical proofs, interactive coordinate geometry, and vectorized implementations into a unified computational canvas.
            </p>
          </div>
        </div>

        {/* 4. Pillar Cards — Glassmorphism + Spotlight Hover */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.code}
              onMouseMove={handleMouseMove}
              className="bl-glass-pillar-card p-6 sm:p-7 flex flex-col justify-between group relative"
            >
              {/* Spotlight cursor glow overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{
                  background:
                    'radial-gradient(250px circle at var(--mx, 50%) var(--my, 50%), rgba(45, 212, 191, 0.12), transparent 70%)',
                }}
              />

              {/* Pillar Top Meta */}
              <div className="relative z-10">
                <div className="flex items-center justify-between text-xs font-mono mb-5 pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-[4px] bg-[#0E151B] border border-[#1C2830] transition-shadow duration-300 group-hover:shadow-[0_0_16px_rgba(45,212,191,0.25)]">
                      {pillar.icon}
                    </div>
                    <span className="text-[#019AA2] font-semibold tracking-wider">
                      {pillar.code} // PILLAR
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-[3px] bg-white/[0.04] border border-white/[0.12] text-[#A8B3BA]">
                    {pillar.metric}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold font-sans text-[#F3F6F7] tracking-tight group-hover:text-[#019AA2] transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-1 text-xs text-[#019AA2] font-mono tracking-wide">
                  {pillar.tagline}
                </p>

                {/* Description */}
                <p className="mt-3.5 text-xs sm:text-sm text-[#A8B3BA] leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>

              {/* Pillar Footnote */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#68747D] relative z-10">
                <span>{pillar.detail}</span>
                <span className="text-[#019AA2] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 5. Telemetry Footer Callout with Shimmer Button CTA */}
        <div className="mt-8 p-4 rounded-[10px] bg-white/[0.03] backdrop-blur-md border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-3 text-[#A8B3BA]">
            <span className="w-2 h-2 rounded-full bg-[#019AA2] animate-pulse" />
            <span>METHODOLOGY: FIRST-PRINCIPLES DECONSTRUCTION</span>
          </div>
          <Link
            href="#loop"
            className="bl-btn-shimmer px-3.5 py-1.5 text-xs font-mono inline-flex items-center gap-2 hover:brightness-110 transition-all font-medium"
          >
            <span>Examine the Learning Loop</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#2dd4bf]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
