'use client';

import React, { useEffect, useRef } from 'react';
import { Compass, Eye, Terminal, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EquationBlock } from '@/components/bytelogic/ui/EquationBlock';

export const ByteLogicIdeaSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const ledeRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      // 1. Scroll-Entrance Stagger Motion
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
      specBadge: 'DERIVATION // L2-ERM',
      accentLine: 'from-[#019AA2] via-[#01868D] to-transparent',
      hoverBorder: 'hover:border-[#019AA2]/60',
      actionText: 'Inspect Proof',
      actionHref: '/bytelogic/concepts/k-means',
      visualType: 'math' as const,
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
      specBadge: 'MANIFOLD // SGD CONTOUR',
      accentLine: 'from-[#A8B3BA] via-[#68747D] to-transparent',
      hoverBorder: 'hover:border-[#A8B3BA]/50',
      actionText: 'Explore Manifold',
      actionHref: '/bytelogic/concepts/k-means#visualization',
      visualType: 'contour' as const,
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
      specBadge: 'KERNEL // VECTORIZED GEMM',
      accentLine: 'from-[#d4af37] via-[#A8B3BA] to-transparent',
      hoverBorder: 'hover:border-[#d4af37]/50',
      actionText: 'Review Kernel',
      actionHref: '/bytelogic/concepts/k-means#implementation',
      visualType: 'code' as const,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="idea"
      className="relative w-full overflow-hidden isolate bg-[#05070a] border-t border-[#1C2830]"
    >
      {/* 1. Background — Clean Technical Drafting Grid (Zero Neon Bloom) */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden bl-cartesian-grid opacity-60">
        {/* Subtle noise/grain SVG overlay */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
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
          className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-8 sm:mb-12 text-xs font-mono border-b border-[#1C2830]"
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

        {/* 4. Pillar Cards — Enhanced Technical Architecture */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {pillars.map((pillar) => (
            <div
              key={pillar.code}
              onMouseMove={handleMouseMove}
              className={`bl-glass-pillar-card p-6 sm:p-7 flex flex-col justify-between group relative ${pillar.hoverBorder}`}
            >
              {/* Corner Mechanical Crosshairs / Tick Marks */}
              <span className="absolute top-2 left-2.5 font-mono text-[9px] text-[#68747D] opacity-40 group-hover:opacity-100 group-hover:text-[#019AA2] transition-colors select-none">
                +
              </span>
              <span className="absolute top-2 right-2.5 font-mono text-[9px] text-[#68747D] opacity-40 group-hover:opacity-100 group-hover:text-[#019AA2] transition-colors select-none">
                +
              </span>
              <span className="absolute bottom-2 left-2.5 font-mono text-[9px] text-[#68747D] opacity-40 group-hover:opacity-100 group-hover:text-[#019AA2] transition-colors select-none">
                +
              </span>
              <span className="absolute bottom-2 right-2.5 font-mono text-[9px] text-[#68747D] opacity-40 group-hover:opacity-100 group-hover:text-[#019AA2] transition-colors select-none">
                +
              </span>

              {/* Dynamic Top Gradient Accent Hairline */}
              <div
                className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${pillar.accentLine} opacity-80 group-hover:opacity-100 transition-opacity`}
              />

              {/* Spotlight cursor glow overlay - subtle neutral */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{
                  background:
                    'radial-gradient(300px circle at var(--mx, 50%) var(--my, 50%), rgba(255, 255, 255, 0.03), transparent 75%)',
                }}
              />

              {/* Card Body */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Pillar Top Meta Header */}
                  <div className="flex items-center justify-between text-xs font-mono mb-5 pb-3 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-[5px] bg-[#070B0E] border border-[#1C2830] transition-all duration-300 group-hover:border-[#019AA2]/60">
                        {pillar.icon}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#019AA2] animate-pulse" />
                        <span className="text-[#019AA2] font-semibold tracking-wider text-[11px]">
                          {pillar.code} PILLAR
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-[3px] bg-[#070B0E] border border-white/[0.12] text-[#A8B3BA] group-hover:text-[#F3F6F7] group-hover:border-[#019AA2]/40 transition-colors">
                      {pillar.metric}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#F3F6F7] tracking-tight group-hover:text-[#019AA2] transition-colors">
                        {pillar.title}
                      </h3>
                      <span className="text-[9px] font-mono text-[#68747D] tracking-widest uppercase">
                        {pillar.specBadge}
                      </span>
                    </div>
                    <p className="text-xs text-[#019AA2] font-mono tracking-wide font-medium">
                      {pillar.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-[13px] text-[#A8B3BA] leading-relaxed font-sans">
                    {pillar.description}
                  </p>

                  {/* Micro Technical Artifact / Computational Graphic */}
                  <div className="mt-4 mb-4 rounded-[6px] bg-[#070B0E] border border-[#1C2830] p-3 overflow-hidden bl-tick-box group-hover:border-[#1C2830]/80 transition-colors">
                    {pillar.visualType === 'math' && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[10px] font-mono text-[#68747D] border-b border-[#1C2830]/60 pb-1.5">
                          <span className="text-[#019AA2]">OBJECTIVE MANIFOLD</span>
                          <span>\min_\theta L(\theta)</span>
                        </div>
                        <div className="py-1 text-center font-mono text-xs sm:text-[13px] text-[#F3F6F7] tracking-tight overflow-x-auto bl-scrollbar">
                          <EquationBlock
                            math="\min_{\theta} \frac{1}{N}\sum_{i=1}^N \mathcal{L}(f_\theta(x_i), y_i) + \frac{\lambda}{2}\|\theta\|_2^2"
                            className="my-0 border-0 bg-transparent p-0"
                          />
                        </div>
                        <div className="flex items-center justify-between text-[9px] font-mono text-[#68747D] pt-1 border-t border-[#1C2830]/40">
                          <span>GRADIENT: \nabla L \to 0</span>
                          <span className="text-[#019AA2]">STATIONARY POINT</span>
                        </div>
                      </div>
                    )}

                    {pillar.visualType === 'contour' && (
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-[10px] font-mono text-[#68747D] border-b border-[#1C2830]/60 pb-1.5">
                          <span className="text-[#019AA2]">LOSS CONTOUR MAP</span>
                          <span>LEVEL SETS R^2</span>
                        </div>
                        <div className="w-full h-20 flex items-center justify-center relative">
                          <svg viewBox="0 0 240 80" className="w-full h-full select-none overflow-visible">
                            {/* Elliptical Contours */}
                            <ellipse cx="150" cy="40" rx="75" ry="32" fill="none" stroke="#1C2830" strokeWidth="1" strokeDasharray="3 3" />
                            <ellipse cx="150" cy="40" rx="55" ry="23" fill="none" stroke="#1C2830" strokeWidth="1" />
                            <ellipse cx="150" cy="40" rx="35" ry="14" fill="none" stroke="#A8B3BA" strokeWidth="1" strokeOpacity="0.4" />
                            <ellipse cx="150" cy="40" rx="18" ry="7" fill="#019AA2" fillOpacity="0.06" stroke="#019AA2" strokeWidth="1.2" />

                            {/* Coordinate Axis crosshairs */}
                            <line x1="20" y1="40" x2="225" y2="40" stroke="#1C2830" strokeWidth="1" strokeDasharray="2 2" />
                            <line x1="150" y1="5" x2="150" y2="75" stroke="#1C2830" strokeWidth="1" strokeDasharray="2 2" />
                            <text x="25" y="36" fill="#68747D" fontSize="8" fontFamily="monospace">w_1</text>
                            <text x="154" y="14" fill="#68747D" fontSize="8" fontFamily="monospace">w_2</text>

                            {/* Optimization Trajectory */}
                            <path
                              d="M 45 68 L 85 46 L 115 52 L 136 38 L 150 40"
                              fill="none"
                              stroke="#019AA2"
                              strokeWidth="1.8"
                            />
                            {/* Step points */}
                            <circle cx="45" cy="68" r="2.5" fill="#F3F6F7" />
                            <circle cx="85" cy="46" r="2" fill="#019AA2" />
                            <circle cx="115" cy="52" r="2" fill="#019AA2" />
                            <circle cx="136" cy="38" r="2" fill="#019AA2" />
                            <circle cx="150" cy="40" r="3" fill="#d4af37" stroke="#019AA2" strokeWidth="1" />

                            {/* Labels */}
                            <text x="40" y="77" fill="#A8B3BA" fontSize="7" fontFamily="monospace">w_0</text>
                            <text x="158" y="44" fill="#d4af37" fontSize="8" fontFamily="monospace" fontWeight="bold">w*</text>
                          </svg>
                        </div>
                        <div className="flex items-center justify-between text-[9px] font-mono text-[#68747D] pt-1 border-t border-[#1C2830]/40">
                          <span>STEPPING: SGD + MOMENTUM</span>
                          <span className="text-[#019AA2]">ORTHOGONAL ∇L</span>
                        </div>
                      </div>
                    )}

                    {pillar.visualType === 'code' && (
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-[10px] font-mono text-[#68747D] border-b border-[#1C2830]/60 pb-1.5">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                            <span className="text-[#A8B3BA] ml-1">matrix_kernel.py</span>
                          </div>
                          <span className="text-[#d4af37]">BLAS GEMM</span>
                        </div>
                        <pre className="font-mono text-[11px] text-[#A8B3BA] leading-tight overflow-x-auto bl-scrollbar py-0.5">
                          <code>
                            <span className="text-[#68747D]"># Vectorized gradient update</span>{'\n'}
                            <span className="text-[#019AA2]">dW</span> = (X.T @ (<span className="text-[#d4af37]">sigma</span>(X @ W) - Y)) / N{'\n'}
                            W -= <span className="text-[#019AA2]">eta</span> * (dW + <span className="text-[#f59e0b]">lmbda</span> * W)
                          </code>
                        </pre>
                        <div className="flex items-center justify-between text-[9px] font-mono text-[#68747D] pt-1 border-t border-[#1C2830]/40">
                          <span>ZERO BLACK-BOX CALLS</span>
                          <span className="text-[#d4af37]">0.18ms EXEC</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Pillar Footnote & Action CTA */}
                <div className="mt-2 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#68747D]">
                  <span className="truncate max-w-[170px] sm:max-w-[190px]">{pillar.detail}</span>
                  <Link
                    href={pillar.actionHref}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[4px] bg-[#0E151B] border border-[#1C2830] text-[10px] text-[#019AA2] font-semibold group-hover:border-[#019AA2]/50 group-hover:bg-[#019AA2]/15 transition-all shrink-0"
                  >
                    <span>{pillar.actionText}</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                  </Link>
                </div>
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
            <ArrowRight className="w-3.5 h-3.5 text-[#019AA2]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
