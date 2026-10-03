'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Terminal } from 'lucide-react';

export const ByteLogicFooter: React.FC = () => {
  const pathname = usePathname();
  const isDsaWorkspace = pathname.includes('/questions/dsa/') && Boolean(pathname.split('/questions/dsa/')[1]);

  if (isDsaWorkspace) {
    return null;
  }
  return (
    <footer className="w-full bg-bg border-t border-line pt-16 pb-12 text-xs font-mono relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-line">
          {/* Brand Info */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <Link href="/bytelogic" className="inline-block">
              <Image
                src="/images/bytelogic/bytelogic-logo.png"
                alt="ByteLogic"
                width={150}
                height={50}
                unoptimized
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </Link>
            <p className="text-fg-soft font-sans text-xs leading-relaxed max-w-sm">
              An independent technical learning and computational knowledge platform. Investigating algorithms, mathematics, neural systems, and computational theory from first principles.
            </p>
            <div className="pt-2 flex items-center gap-2 text-accent text-[11px] font-mono">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
              <span>UNDERSTAND → VISUALIZE → IMPLEMENT → EXPERIMENT</span>
            </div>
          </div>

          {/* Navigation Sections */}
          <div>
            <h4 className="text-fg uppercase tracking-wider text-xs font-semibold mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-accent" />
              Platform
            </h4>
            <ul className="space-y-2 text-fg-soft">
              <li>
                <Link href="/bytelogic#idea" className="hover:text-accent transition-colors py-0.5 inline-block">
                  01 / The Idea
                </Link>
              </li>
              <li>
                <Link href="/bytelogic#loop" className="hover:text-accent transition-colors py-0.5 inline-block">
                  02 / The Loop
                </Link>
              </li>
              <li>
                <Link href="/bytelogic/concepts/k-means" className="hover:text-accent transition-colors py-0.5 inline-block">
                  03 / Featured Concept
                </Link>
              </li>
              <li>
                <Link href="/bytelogic#domains" className="hover:text-accent transition-colors py-0.5 inline-block">
                  04 / Knowledge Domains
                </Link>
              </li>
              <li>
                <Link href="/bytelogic#archive" className="hover:text-accent transition-colors py-0.5 inline-block">
                  05 / Technical Archive
                </Link>
              </li>
              <li>
                <Link href="/bytelogic#lab" className="hover:text-accent transition-colors py-0.5 inline-block">
                  06 / Computational Lab
                </Link>
              </li>
              <li>
                <Link href="/bytelogic#method" className="hover:text-accent transition-colors py-0.5 inline-block">
                  07 / Teaching Method
                </Link>
              </li>
              <li>
                <Link href="/bytelogic/learn/question-bank" className="hover:text-accent transition-colors py-0.5 inline-block text-accent">
                  08 / Question Bank
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Domains */}
          <div>
            <h4 className="text-fg uppercase tracking-wider text-xs font-semibold mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#132279]" />
              Domains
            </h4>
            <ul className="space-y-2 text-fg-soft">
              <li>
                <Link href="/bytelogic/concepts/k-means" className="hover:text-accent transition-colors py-0.5 inline-block">
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/bytelogic#paths" className="hover:text-accent transition-colors py-0.5 inline-block">
                  Deep Learning
                </Link>
              </li>
              <li>
                <Link href="/bytelogic#paths" className="hover:text-accent transition-colors py-0.5 inline-block">
                  Mathematics & Optimization
                </Link>
              </li>
              <li>
                <Link href="/bytelogic#paths" className="hover:text-accent transition-colors py-0.5 inline-block">
                  Reinforcement Learning
                </Link>
              </li>
              <li>
                <Link href="/bytelogic#paths" className="hover:text-accent transition-colors py-0.5 inline-block">
                  Systems & Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Meta */}
          <div>
            <h4 className="text-fg uppercase tracking-wider text-xs font-semibold mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-fg-muted" />
              Channels
            </h4>
            <ul className="space-y-2 text-fg-soft">
              <li>
                <a
                  href="https://github.com/na124441"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors flex items-center gap-1 py-0.5 inline-flex"
                >
                  <span>GitHub Source</span>
                  <ArrowUpRight className="w-3 h-3 text-fg-muted" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors flex items-center gap-1 py-0.5 inline-flex"
                >
                  <span>YouTube Channel</span>
                  <ArrowUpRight className="w-3 h-3 text-fg-muted" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors flex items-center gap-1 py-0.5 inline-flex"
                >
                  <span>Research & LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-fg-muted" />
                </a>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-accent transition-colors flex items-center gap-1 pt-1 text-fg inline-flex"
                >
                  <span>Engineer Portfolio</span>
                  <ArrowUpRight className="w-3 h-3 text-accent" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-fg-muted text-[11px]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span>© {new Date().getFullYear()} BYTELOGIC. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Independent Engineering Publication</span>
          </div>

          {/* Technical System Status */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-[4px] bg-surface border border-line">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-fg-soft">KERNEL: NOMINAL</span>
            <span className="text-fg-muted">|</span>
            <span className="text-accent">V0.1-PROTOTYPE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
