'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ByteLogicSignatureBlockProps {
  className?: string;
  articleCode?: string;
  articleRef?: string;
  statementHeading?: React.ReactNode;
  statementDescription?: React.ReactNode;
}

export const ByteLogicSignatureBlock: React.FC<ByteLogicSignatureBlockProps> = ({
  className,
  articleCode = 'ARTICLE 001',
  articleRef = 'BL-ART-001',
  statementHeading,
  statementDescription,
}) => {
  return (
    <section
      className={cn(
        'mt-16 sm:mt-24 pt-12 sm:pt-16 pb-12 sm:pb-16 border-t-2 border-accent/40 relative',
        className
      )}
    >
      {/* Background ambient gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
        {/* Monogram / Brand mark */}
        <div className="flex justify-center items-center gap-3">
          <div className="relative h-7 w-auto">
            <Image
              src="/images/bytelogic/bytelogic-logo.png"
              alt="ByteLogic"
              width={140}
              height={40}
              unoptimized
              className="h-7 w-auto object-contain"
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[4px] bg-surface border border-line text-[10px] font-mono tracking-widest text-accent uppercase">
          <Sparkles className="w-3 h-3" />
          <span>EDITORIAL SIGNATURE · {articleCode}</span>
        </div>

        {/* Core Statement */}
        <div className="space-y-4 px-4">
          {statementHeading || (
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-fg leading-snug tracking-tight">
              Data is not valuable because it is large.
              <br />
              <span className="text-accent">
                It is valuable because it tells us something we didn&apos;t already know.
              </span>
            </h2>
          )}

          {statementDescription !== undefined ? (
            statementDescription
          ) : (
            <p className="text-sm sm:text-base text-fg-soft font-sans leading-relaxed pt-2 max-w-xl mx-auto">
              If more data isn&apos;t necessarily more information, how do we find the data that
              actually matters? That question leads directly into our upcoming investigations on
              active learning, uncertainty quantification, and curriculum design.
            </p>
          )}
        </div>

        {/* Editorial Action Row */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
          <Link
            href="/bytelogic/learn"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[4px] bg-accent text-bg font-semibold hover:brightness-110 transition-colors"
          >
            <span>Explore All Concept Dossiers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/bytelogic#archive"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[4px] bg-surface border border-line text-fg-soft hover:text-fg hover:border-accent/40 transition-colors"
          >
            <Compass className="w-3.5 h-3.5 text-accent" />
            <span>Research & Editorial Index</span>
          </Link>
        </div>

        {/* Editorial Colophon */}
        <div className="pt-8 border-t border-line/60 flex items-center justify-between text-[11px] font-mono text-fg-muted">
          <span>REF: {articleRef}</span>
          <span>COMPUTATIONAL EDITORIAL SYSTEM</span>
          <span>CURATED BY BYTELOGIC</span>
        </div>
      </div>
    </section>
  );
};
