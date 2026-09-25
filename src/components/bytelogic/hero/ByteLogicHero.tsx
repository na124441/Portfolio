'use client';

import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Client-only dynamic import of BinaryGlobe prevents any hydration mismatch
const BinaryGlobe = dynamic(
  () => import('./BinaryGlobe').then((m) => m.BinaryGlobe),
  {
    ssr: false,
    loading: () => (
      <div
        className="binary-globe flex items-center justify-center"
        aria-hidden="true"
        role="presentation"
      >
        <div className="globe-logo-wrapper" aria-hidden="true">
          <Image
            src="/images/bytelogic/bytelogic-logo.png"
            alt="ByteLogic"
            width={1024}
            height={341}
            priority
            unoptimized
            className="w-full h-auto max-h-[140px] sm:max-h-[220px] md:max-h-[280px] lg:max-h-[320px] object-contain drop-shadow-[0_16px_45px_rgba(0,0,0,0.9)]"
          />
        </div>
      </div>
    ),
  }
);

export const ByteLogicHero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Respect prefers-reduced-motion
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Load Entrance Timeline
        const entranceTl = gsap.timeline();

        entranceTl
          .from('.binary-globe', {
            opacity: 0,
            scale: 0.94,
            duration: 1.2,
            ease: 'power2.out',
          })
          .from(
            '.eyebrow',
            {
              opacity: 0,
              y: 8,
              duration: 0.4,
              ease: 'power2.out',
            },
            '-=0.6'
          )
          .from(
            '.headline',
            {
              opacity: 0,
              y: 12,
              duration: 0.6,
              ease: 'power3.out',
            },
            '-=0.3'
          )
          .from(
            '.description',
            {
              opacity: 0,
              y: 12,
              duration: 0.75,
              ease: 'power2.out',
            },
            '-=0.3'
          )
          .from(
            '.cta-group',
            {
              opacity: 0,
              y: 8,
              duration: 0.9,
              ease: 'power2.out',
            },
            '-=0.4'
          )
          .from(
            '.scroll-indicator',
            {
              opacity: 0,
              duration: 0.8,
              ease: 'power2.out',
            },
            '-=0.4'
          );

        // Scroll Scrubbed Timeline
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: () => '+=' + (heroRef.current?.offsetHeight || 800),
            scrub: 0.6,
          },
        });

        scrollTl
          .to(
            '.binary-globe',
            {
              scale: 0.35,
              y: -120,
              opacity: 0.85,
              ease: 'none',
            },
            0
          )
          .to(
            '.editorial-block',
            {
              y: -60,
              ease: 'none',
            },
            0
          )
          .to(
            '.binary-globe',
            {
              opacity: 0.4,
              ease: 'none',
            },
            0.6
          );
      });

      // Reduced motion: instant visibility without motion
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(
          [
            '.binary-globe',
            '.eyebrow',
            '.headline',
            '.description',
            '.cta-group',
            '.scroll-indicator',
            '.fig-label',
          ],
          {
            opacity: 1,
            y: 0,
            scale: 1,
          }
        );
      });
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero relative w-full min-h-[calc(100svh-48px)] flex flex-col items-center justify-between overflow-hidden px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-8 sm:pb-10 border-b border-[#1C2830]"
    >
      {/* Central Artifact: Binary Globe */}
      <div className="w-full flex flex-col items-center justify-center flex-shrink-0">
        <BinaryGlobe className="binary-globe" />

        {/* Mobile-only Figure Label (Hidden on desktop via .fig-label) */}
        <span className="fig-label font-mono text-[9px] tracking-[0.16em] uppercase mt-2.5 text-[#4FD8E8]/70">
          FIG. 01 / COMPUTATIONAL FIELD
        </span>
      </div>

      {/* Editorial Content Block */}
      <div className="editorial-block w-full max-w-[720px] mx-auto text-center flex flex-col items-center mt-6 md:mt-8">
        {/* Eyebrow */}
        <p className="eyebrow font-mono text-[10px] md:text-[11px] uppercase tracking-[0.16em] text-[#4FD8E8]/70">
          COMPUTATION · MATHEMATICS · LEARNING
        </p>

        {/* Headline — Primary accessible H1 */}
        <h1 className="headline hero-headline mt-4 md:mt-6">
          UNDERSTAND THE LOGIC
          <br />
          BEHIND COMPUTATION.
        </h1>

        {/* Description */}
        <p className="description font-sans text-[17px] md:text-[19px] leading-[1.5] max-w-[560px] text-[#8A9296] mt-5 md:mt-6">
          Ideas, models, mathematics, and experiments for understanding how computation works.
        </p>

        {/* Action CTAs */}
        <div className="cta-group flex flex-row items-center justify-center gap-6 sm:gap-8 mt-7 md:mt-9">
          <Link
            href="#featured"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-[4px] border border-[#1C2830] bg-[#0E151B] text-[#ECECEC] font-mono text-xs uppercase tracking-[0.12em] font-semibold hover:border-[#4FD8E8]/60 hover:text-[#ECECEC] hover:bg-[#131C24] transition-all"
          >
            EXPLORE CONCEPTS →
          </Link>
          <Link
            href="#lab"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] font-semibold text-[#8A9296] hover:text-[#4FD8E8] transition-colors"
          >
            ENTER LAB →
          </Link>
        </div>
      </div>

      {/* Scroll to Field Notes Indicator */}
      <div className="scroll-indicator font-mono text-[10px] md:text-[11px] uppercase tracking-[0.16em] text-[#8A9296] mt-8 sm:mt-10 mb-1 select-none">
        ↓ SCROLL TO FIELD NOTES
      </div>
    </section>
  );
};
