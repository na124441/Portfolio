'use client';

import React from 'react';
import Link from 'next/link';
import { Terminal, Compass } from 'lucide-react';
import { ByteLogicButton } from '@/components/bytelogic/ui/ByteLogicButton';

export const FinalCTASection: React.FC = () => {
  return (
    <section
      id="cta"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 border-t border-line relative z-10"
    >
      <div className="rounded-[6px] bg-bg-2 border border-line p-8 sm:p-12 lg:p-16 relative overflow-hidden bl-tick-box shadow-2xl text-center flex flex-col items-center">
        {/* Subtle Cartesian Grid Background */}
        <div className="absolute inset-0 bl-cartesian-grid opacity-25 pointer-events-none" />

        {/* Section Pill Badge */}
        <div className="relative z-10 flex items-center gap-2 px-3 py-1 rounded-[4px] bg-surface border border-line text-xs font-mono text-accent mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="font-semibold">08 / START EXPLORING</span>
          <span className="text-fg-muted">•</span>
          <span className="text-fg-soft">OPEN KNOWLEDGE REPOSITORY</span>
        </div>

        {/* Confident Headline */}
        <h2 className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-fg max-w-2xl leading-tight">
          Your Next Concept is Waiting.
        </h2>

        {/* Subcopy */}
        <p className="relative z-10 mt-4 text-sm sm:text-base text-fg-soft font-sans max-w-xl leading-relaxed">
          Enter the computational index and explore machine learning, mathematics, and systems from first principles. No hand-waving. Zero black boxes.
        </p>

        {/* Action Group */}
        <div className="relative z-10 mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <ByteLogicButton
            href="/bytelogic/concepts/k-means"
            variant="primary"
            size="lg"
            showArrow
            className="w-full sm:w-auto"
          >
            Launch K-Means Deep Dive
          </ByteLogicButton>

          <Link
            href="#domains"
            className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-[4px] border border-line bg-surface hover:bg-surface-2 text-fg font-mono text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Compass className="w-3.5 h-3.5 text-accent" />
            <span>Browse Domains</span>
          </Link>
        </div>

        {/* Terminal Telemetry Strip */}
        <div className="relative z-10 mt-10 pt-6 border-t border-line w-full flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[11px] font-mono text-fg-muted">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-accent" />
            <span>INDEX: 7 DOMAINS // 100+ MODULES</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <span>LICENSED FOR OPEN TECHNICAL INQUIRY</span>
          </div>
        </div>
      </div>
    </section>
  );
};
