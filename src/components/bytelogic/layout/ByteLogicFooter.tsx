'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Terminal } from 'lucide-react';

export const ByteLogicFooter: React.FC = () => {
  return (
    <footer className="w-full bg-[#05070A] border-t border-[#1C2830] pt-16 pb-12 text-xs font-mono relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-[#1C2830]">
          {/* Brand Info */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <Link href="/bytelogic" className="inline-block">
              <Image
                src="/images/bytelogic/bytelogic-logo.png"
                alt="ByteLogic"
                width={150}
                height={50}
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </Link>
            <p className="text-[#A8B3BA] font-sans text-xs leading-relaxed max-w-sm">
              An independent technical learning and computational knowledge platform. Investigating algorithms, mathematics, neural systems, and computational theory from first principles.
            </p>
            <div className="pt-2 flex items-center gap-2 text-[#019AA2] text-[11px] font-mono">
              <span className="w-2 h-2 rounded-full bg-[#019AA2] animate-pulse shrink-0" />
              <span>UNDERSTAND → VISUALIZE → IMPLEMENT → EXPERIMENT</span>
            </div>
          </div>

          {/* Navigation Sections */}
          <div>
            <h4 className="text-[#F3F6F7] uppercase tracking-wider text-xs font-semibold mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#019AA2]" />
              Platform
            </h4>
            <ul className="space-y-2 text-[#A8B3BA]">
              <li>
                <Link href="/bytelogic#idea" className="hover:text-[#019AA2] transition-colors py-0.5 inline-block">
                  01 / The Idea
                </Link>
              </li>
              <li>
                <Link href="/bytelogic#loop" className="hover:text-[#019AA2] transition-colors py-0.5 inline-block">
                  02 / The Loop
                </Link>
              </li>
              <li>
                <Link href="/bytelogic/concepts/k-means" className="hover:text-[#019AA2] transition-colors py-0.5 inline-block">
                  03 / Featured Concept
                </Link>
              </li>
              <li>
                <Link href="/bytelogic#domains" className="hover:text-[#019AA2] transition-colors py-0.5 inline-block">
                  04 / Knowledge Domains
                </Link>
              </li>
              <li>
                <Link href="/bytelogic#archive" className="hover:text-[#019AA2] transition-colors py-0.5 inline-block">
                  05 / Technical Archive
                </Link>
              </li>
              <li>
                <Link href="/bytelogic#lab" className="hover:text-[#019AA2] transition-colors py-0.5 inline-block">
                  06 / Computational Lab
                </Link>
              </li>
              <li>
                <Link href="/bytelogic#method" className="hover:text-[#019AA2] transition-colors py-0.5 inline-block">
                  07 / Teaching Method
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Domains */}
          <div>
            <h4 className="text-[#F3F6F7] uppercase tracking-wider text-xs font-semibold mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#132279]" />
              Domains
            </h4>
            <ul className="space-y-2 text-[#A8B3BA]">
              <li>
                <Link href="/bytelogic/concepts/k-means" className="hover:text-[#019AA2] transition-colors py-0.5 inline-block">
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/bytelogic#paths" className="hover:text-[#019AA2] transition-colors py-0.5 inline-block">
                  Deep Learning
                </Link>
              </li>
              <li>
                <Link href="/bytelogic#paths" className="hover:text-[#019AA2] transition-colors py-0.5 inline-block">
                  Mathematics & Optimization
                </Link>
              </li>
              <li>
                <Link href="/bytelogic#paths" className="hover:text-[#019AA2] transition-colors py-0.5 inline-block">
                  Reinforcement Learning
                </Link>
              </li>
              <li>
                <Link href="/bytelogic#paths" className="hover:text-[#019AA2] transition-colors py-0.5 inline-block">
                  Systems & Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Meta */}
          <div>
            <h4 className="text-[#F3F6F7] uppercase tracking-wider text-xs font-semibold mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#68747D]" />
              Channels
            </h4>
            <ul className="space-y-2 text-[#A8B3BA]">
              <li>
                <a
                  href="https://github.com/na124441"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#019AA2] transition-colors flex items-center gap-1 py-0.5 inline-flex"
                >
                  <span>GitHub Source</span>
                  <ArrowUpRight className="w-3 h-3 text-[#68747D]" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#019AA2] transition-colors flex items-center gap-1 py-0.5 inline-flex"
                >
                  <span>YouTube Channel</span>
                  <ArrowUpRight className="w-3 h-3 text-[#68747D]" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#019AA2] transition-colors flex items-center gap-1 py-0.5 inline-flex"
                >
                  <span>Research & LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[#68747D]" />
                </a>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#019AA2] transition-colors flex items-center gap-1 pt-1 text-[#F3F6F7] inline-flex"
                >
                  <span>Engineer Portfolio</span>
                  <ArrowUpRight className="w-3 h-3 text-[#019AA2]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[#68747D] text-[11px]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span>© {new Date().getFullYear()} BYTELOGIC. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Independent Engineering Publication</span>
          </div>

          {/* Technical System Status */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#0E151B] border border-[#1C2830]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#019AA2]" />
            <span className="text-[#A8B3BA]">KERNEL: NOMINAL</span>
            <span className="text-[#68747D]">|</span>
            <span className="text-[#019AA2]">V0.1-PROTOTYPE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
