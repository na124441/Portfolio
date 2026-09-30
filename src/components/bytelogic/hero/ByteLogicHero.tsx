'use client';

import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* -------------------------------------------------------
   ASCII Donut / 3D Rotating Computational Field
------------------------------------------------------- */

const AsciiDonut = dynamic(
  () => import('./AsciiDonut').then((m) => m.AsciiDonut),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-full w-full"
        aria-hidden="true"
        role="presentation"
      />
    ),
  }
);

/* -------------------------------------------------------
   Hero
------------------------------------------------------- */

export const ByteLogicHero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /* ==================================================
         MOTION
      ================================================== */

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const isMobile = window.innerWidth < 640;
        const targetBackgroundOpacity = isMobile ? 0.025 : 0.05;

        /* -----------------------------------------------
           Entrance Sequence
           Phase 1: Artifact arrives as the primary computational hero
           Phase 2: As the headline reveals, artifact gracefully dissolves
                    into an ambient peripheral texture, letting the slogan
                    command 100% of visual clarity
        ----------------------------------------------- */

        const entrance = gsap.timeline({
          defaults: {
            ease: 'power3.out',
          },
        });

        entrance
          // Phase 1: Artifact entrance
          .fromTo(
            '.binary-field',
            {
              opacity: 0,
              scale: 0.82,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 1.3,
              ease: 'power2.out',
            }
          )
          .from(
            '.top-meta',
            {
              opacity: 0,
              y: -8,
              duration: 0.45,
            },
            '-=0.7'
          )
          .from(
            '.hero-kicker',
            {
              opacity: 0,
              y: 12,
              duration: 0.45,
            },
            '-=0.3'
          )
          // Phase 2: Headline reveal begins — artifact progressively fades away
          .to(
            '.binary-field',
            {
              opacity: targetBackgroundOpacity,
              scale: 0.94,
              duration: 1.1,
              ease: 'power2.inOut',
            },
            '>-0.1'
          )
          .from(
            '.hero-title-line',
            {
              opacity: 0,
              y: 30,
              duration: 0.7,
              stagger: 0.09,
              ease: 'power3.out',
            },
            '<+0.1'
          )
          .from(
            '.hero-description',
            {
              opacity: 0,
              y: 14,
              duration: 0.55,
            },
            '-=0.3'
          )
          .from(
            '.hero-actions',
            {
              opacity: 0,
              y: 10,
              duration: 0.55,
            },
            '-=0.3'
          )
          .from(
            '.bottom-meta',
            {
              opacity: 0,
              duration: 0.7,
            },
            '-=0.25'
          );

        /* -----------------------------------------------
           Scroll transformation
        ----------------------------------------------- */

        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: () =>
              '+=' + (heroRef.current?.offsetHeight || window.innerHeight),
            scrub: 0.8,
          },
        });

        scrollTl
          .to(
            '.binary-field',
            {
              scale: 0.7,
              y: -80,
              opacity: 0,
              ease: 'none',
            },
            0
          )
          .to(
            '.hero-copy',
            {
              y: -70,
              ease: 'none',
            },
            0
          )
          .to(
            '.bottom-meta',
            {
              opacity: 0,
              ease: 'none',
            },
            0.15
          );
      });

      /* ==================================================
         REDUCED MOTION
      ================================================== */

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set('.binary-field', {
          opacity: 0.05,
          scale: 1,
          y: 0,
        });
        gsap.set(
          [
            '.top-meta',
            '.hero-kicker',
            '.hero-title-line',
            '.hero-description',
            '.hero-actions',
            '.bottom-meta',
          ],
          {
            opacity: 1,
            y: 0,
            scale: 1,
          }
        );
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="
        relative
        isolate
        min-h-[calc(100svh-48px)]
        w-full
        overflow-hidden
        border-b
        border-[#1C2830]
        bg-[#080C10]
        px-5
        sm:px-8
        lg:px-12
      "
    >
      {/* ==================================================
         ATMOSPHERIC FIELD
      ================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(to_right,#8A9296_1px,transparent_1px),linear-gradient(to_bottom,#8A9296_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      {/* Soft center atmosphere */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[43%]
          h-[65vh]
          w-[65vw]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#4FD8E8]/[0.025]
          blur-[120px]
        "
      />

      {/* ==================================================
         TOP METADATA
      ================================================== */}

      <div
        className="
          top-meta
          absolute
          left-5
          right-5
          top-6
          z-20
          flex
          items-center
          justify-between
          font-mono
          text-[9px]
          uppercase
          tracking-[0.2em]
          text-[#566168]
          sm:left-8
          sm:right-8
          sm:text-[10px]
          lg:left-12
          lg:right-12
        "
      >
        <span>BYTELOGIC / 01</span>

        <span className="hidden md:block">
          COMPUTATION · MATHEMATICS · LEARNING
        </span>

        <span>0x01</span>
      </div>

      {/* ==================================================
         ASCII COMPUTATIONAL FIELD
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          flex
          items-center
          justify-center
        "
        aria-hidden="true"
      >
        <div
          className="
            binary-field
            relative
            mt-[-9vh]
            h-[min(120vw,920px)]
            w-[min(120vw,920px)]
            sm:h-[min(95vw,920px)]
            sm:w-[min(95vw,920px)]
          "
        >
          <AsciiDonut className="h-full w-full" />

          {/* Bottom fade */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-[28%]
              bg-gradient-to-t
              from-[#080C10]
              to-transparent
            "
          />

          {/* Side fade */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              w-[20%]
              bg-gradient-to-r
              from-[#080C10]
              to-transparent
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              w-[20%]
              bg-gradient-to-l
              from-[#080C10]
              to-transparent
            "
          />
        </div>
      </div>

      {/* ==================================================
         HERO COPY
      ================================================== */}

      <div
        className="
          hero-copy
          relative
          z-10
          flex
          min-h-[calc(100svh-48px)]
          flex-col
          items-center
          justify-center
          pb-12
          pt-20
          text-center
          sm:pb-16
        "
      >
        {/* Kicker */}

        <div
          className="
            hero-kicker
            mb-6
            flex
            items-center
            gap-3
            font-mono
            text-[9px]
            uppercase
            tracking-[0.22em]
            text-[#4FD8E8]/75
            sm:text-[10px]
          "
        >
          <span className="h-px w-7 bg-[#4FD8E8]/40" />

          <span>FIELD NOTES / COMPUTATIONAL SYSTEMS</span>

          <span className="h-px w-7 bg-[#4FD8E8]/40" />
        </div>

        {/* ==================================================
           TITLE
        ================================================== */}

        <h1
          className="
            max-w-[1100px]
            font-sans
            text-[clamp(3.35rem,9vw,8.5rem)]
            font-medium
            leading-[0.82]
            tracking-[-0.075em]
            text-[#ECECEC]
          "
        >
          <span className="hero-title-line block">
            UNDERSTAND
          </span>

          <span className="hero-title-line block text-[#AEB6BA]">
            THE LOGIC
          </span>

          <span className="hero-title-line block">
            BEHIND
          </span>

          <span className="hero-title-line block text-[#4FD8E8]">
            COMPUTATION.
          </span>
        </h1>

        {/* ==================================================
           DESCRIPTION
        ================================================== */}

        <p
          className="
            hero-description
            mt-8
            max-w-[560px]
            font-sans
            text-[15px]
            leading-[1.6]
            text-[#7D878D]
            sm:text-[17px]
          "
        >
          Concepts, mathematics, models, and experiments
          for understanding how computation actually works.
        </p>

        {/* ==================================================
           ACTIONS
        ================================================== */}

        <div
          className="
            hero-actions
            mt-9
            flex
            items-center
            gap-8
            font-mono
            text-[10px]
            font-medium
            uppercase
            tracking-[0.15em]
            sm:text-[11px]
          "
        >
          <Link
            href="#featured"
            className="
              group
              relative
              text-[#ECECEC]
              transition-colors
              duration-300
              hover:text-[#4FD8E8]
            "
          >
            Explore concepts
            <span
              className="
                ml-2
                inline-block
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>

            <span
              className="
                absolute
                -bottom-2
                left-0
                h-px
                w-full
                origin-left
                bg-[#4FD8E8]/50
                transition-transform
                duration-300
              "
            />
          </Link>

          <Link
            href="#lab"
            className="
              text-[#69737A]
              transition-colors
              duration-300
              hover:text-[#ECECEC]
            "
          >
            Enter the lab →
          </Link>
        </div>
      </div>

      {/* ==================================================
         BOTTOM INFORMATION
      ================================================== */}

      <div
        className="
          bottom-meta
          absolute
          bottom-6
          left-5
          right-5
          z-20
          flex
          items-end
          justify-between
          font-mono
          text-[8px]
          uppercase
          tracking-[0.17em]
          text-[#4F595F]
          sm:left-8
          sm:right-8
          sm:text-[9px]
          lg:left-12
          lg:right-12
        "
      >
        {/* Left */}

        <div className="flex flex-col gap-1 text-left">
          <span className="text-[#69747A]">
            FIG. 01
          </span>

          <span>
            COMPUTATIONAL FIELD
          </span>
        </div>

        {/* Center */}

        <div className="hidden flex-col items-center gap-1 md:flex">
          <span className="text-[#69747A]">
            ARTIFACT
          </span>

          <span>
            ASCII / REAL-TIME
          </span>
        </div>

        {/* Right */}

        <div className="flex flex-col items-end gap-1 text-right">
          <span className="text-[#69747A]">
            MODE: ACTIVE
          </span>

          <span>
            SCROLL TO EXPLORE ↓
          </span>
        </div>
      </div>
    </section>
  );
};
