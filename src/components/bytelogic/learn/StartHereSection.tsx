'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { START_HERE_STEPS } from '@/lib/bytelogic/learnData';

export const StartHereSection: React.FC = () => {
  return (
    <section id="start-here" className="relative w-full border-b border-line bg-bg-2 py-12 sm:py-16 md:py-20">
      {/* Subtle Cartesian drafting grid mask */}
      <div className="absolute inset-0 pointer-events-none bl-cartesian-grid opacity-30 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 border-b border-line">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-accent font-semibold tracking-wider">
                03 //
              </span>
              <span className="text-xs font-mono text-fg-muted uppercase tracking-widest">
                RECOMMENDED ONBOARDING SEQUENCE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-sans tracking-tight text-fg uppercase">
              NEW TO BYTELOGIC? <span className="text-accent">START HERE.</span>
            </h2>
          </div>

          <p className="mt-3 md:mt-0 text-xs sm:text-sm text-fg-soft font-sans max-w-md leading-relaxed">
            A non-intimidating, step-by-step entry path designed to build foundational intuitions before diving into specialized architectures.
          </p>
        </div>

        {/* 4-Stage Connected Progression Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          {START_HERE_STEPS.map((step, idx) => {
            const isLast = idx === START_HERE_STEPS.length - 1;

            return (
              <div
                key={step.number}
                className="group relative flex flex-col justify-between rounded-[6px] border border-line bg-surface p-5 sm:p-6 transition-all duration-300 hover:border-accent/50 hover:bg-surface-2"
              >
                {/* Micro tick box styling */}
                <div className="bl-tick-box absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top Meta Line: Number + Time */}
                  <div className="flex items-center justify-between text-xs font-mono mb-3">
                    <span className="px-2 py-0.5 rounded-[3px] bg-surface-2 border border-line text-accent font-bold text-xs">
                      STAGE // {step.number}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-fg-muted">
                      <Clock className="w-3 h-3 text-accent" />
                      <span>{step.estimatedTime}</span>
                    </span>
                  </div>

                  {/* Stage Category Tag */}
                  <span className="text-[9px] font-mono text-fg-muted uppercase tracking-widest block mb-1">
                    {step.tag}
                  </span>

                  {/* Step Title & Subtitle */}
                  <h3 className="text-base font-bold font-sans tracking-tight text-fg group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <h4 className="text-xs font-mono text-accent mt-0.5">
                    {step.subtitle}
                  </h4>

                  {/* Step Description */}
                  <p className="mt-3 text-xs text-fg-soft leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Entry Link */}
                <div className="mt-6 pt-3 border-t border-line flex items-center justify-between text-xs font-mono">
                  <span className="text-[10px] text-fg-muted">
                    {idx === 0 ? 'START FIRST' : `PREREQ: STAGE 0${idx}`}
                  </span>
                  <Link
                    href={step.conceptSlug}
                    className="inline-flex items-center gap-1 text-xs text-accent font-semibold group-hover:translate-x-1 transition-transform"
                  >
                    <span>Begin</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
