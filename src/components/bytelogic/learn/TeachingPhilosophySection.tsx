'use client';

import React, { useState } from 'react';
import { TEACHING_PHILOSOPHY_STEPS } from '@/lib/bytelogic/learnData';
import { Terminal, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const TeachingPhilosophySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="philosophy" className="relative w-full border-b border-[#1C2830] bg-[#0A0F14] py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Subtle Cartesian Blueprint Grid overlay */}
      <div className="absolute inset-0 pointer-events-none bl-cartesian-grid opacity-30 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 border-b border-[#1C2830]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-[#019AA2] font-semibold tracking-wider">
                07 //
              </span>
              <span className="text-xs font-mono text-[#68747D] uppercase tracking-widest">
                PEDAGOGICAL FRAMEWORK
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-sans tracking-tight text-[#F3F6F7] uppercase">
              HOW BYTELOGIC TEACHES
            </h2>
          </div>

          <p className="mt-3 md:mt-0 text-xs sm:text-sm text-[#A8B3BA] font-sans max-w-md leading-relaxed">
            The 5-stage first-principles cognitive loop. Every concept, algorithm, and system follows this rigorous progression.
          </p>
        </div>

        {/* 5-Stage Cognitive Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4 relative">
          {TEACHING_PHILOSOPHY_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
                className={cn(
                  'group relative flex flex-col justify-between rounded-[6px] border p-4 sm:p-5 transition-all duration-300 cursor-pointer select-none min-h-[220px]',
                  isActive
                    ? 'border-[#019AA2] bg-[#0E151B] shadow-[0_4px_24px_rgba(1,154,162,0.12)]'
                    : 'border-[#1C2830] bg-[#0A0F14] hover:border-[#1C2830] hover:bg-[#0E151B]'
                )}
              >
                {/* Micro tick marks */}
                <div className="bl-tick-box absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top Identifier */}
                  <div className="flex items-center justify-between text-xs font-mono mb-3">
                    <span
                      className={cn(
                        'font-bold tracking-wider text-xs',
                        isActive ? 'text-[#019AA2]' : 'text-[#68747D]'
                      )}
                    >
                      STAGE // {step.number}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#019AA2] animate-ping" />
                    )}
                  </div>

                  {/* Stage Title */}
                  <h3
                    className={cn(
                      'text-lg sm:text-xl font-bold font-sans tracking-tight uppercase transition-colors',
                      isActive ? 'text-[#F3F6F7]' : 'text-[#A8B3BA]'
                    )}
                  >
                    {step.title}
                  </h3>

                  {/* Inquiry Prompt */}
                  <h4 className="mt-1 text-xs font-mono text-[#019AA2] leading-snug">
                    {step.question}
                  </h4>

                  {/* Description */}
                  <p className="mt-2.5 text-xs text-[#68747D] leading-relaxed group-hover:text-[#A8B3BA] transition-colors">
                    {step.description}
                  </p>
                </div>

                {/* Deliverable Footer */}
                <div className="mt-4 pt-3 border-t border-[#1C2830] text-[10px] font-mono text-[#68747D]">
                  <span className="text-[#A8B3BA] block mb-0.5">OUTPUT:</span>
                  <span className="line-clamp-2">{step.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Lab Callout Banner */}
        <div className="mt-8 p-6 rounded-[6px] border border-[#1C2830] bg-[#0E151B] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded bg-[#131C24] border border-[#1C2830] text-[#019AA2]">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#F3F6F7]">
                See the Philosophy in Action
              </h4>
              <p className="text-xs text-[#A8B3BA]">
                Experience how K-Means Clustering applies this exact 5-stage loop with live interactive Voronoi diagrams.
              </p>
            </div>
          </div>

          <Link
            href="/bytelogic/concepts/k-means"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[4px] bg-[#019AA2] hover:bg-[#01868D] text-[#05070A] font-bold text-xs font-mono transition-all shrink-0"
          >
            <span>LAUNCH K-MEANS DOSSIER</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
