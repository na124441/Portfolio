'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronDown } from 'lucide-react';

interface CaseStudyFlightDeckHudProps {
  projectTitle: string;
  projectSlug: string;
  tier: string;
  status: string;
}

const SECTIONS = [
  { id: 'problem', label: '01. Problem' },
  { id: 'approach', label: '03. Approach' },
  { id: 'system', label: '04. Architecture' },
  { id: 'deep-dive', label: '05. Deep Dive' },
  { id: 'results', label: '08. Results' },
  { id: 'failure', label: '09. Autopsy' },
  { id: 'lessons', label: '11. Lessons' },
];

export const CaseStudyFlightDeckHud: React.FC<CaseStudyFlightDeckHudProps> = ({
  projectTitle,
  projectSlug,
  tier,
  status,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('problem');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }

      // Track active section
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="border-b border-white/10 bg-[#010a0b]/85 backdrop-blur-md sticky top-[61px] z-30 transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 font-mono text-xs">
        {/* Left: Return Anchor */}
        <Link
          href="/work"
          className="flex items-center gap-2 text-white/70 hover:text-[#dfb15b] transition-colors flex-shrink-0"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">RETURN TO SYSTEMS</span>
          <span className="sm:hidden">SYSTEMS</span>
        </Link>

        {/* Center: Section Anchor Jumpers (Desktop/Tablet) */}
        <div className="hidden md:flex items-center gap-1.5 overflow-x-auto py-0.5">
          {SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className={`px-2 py-0.5 text-[10px] tracking-wider transition-colors ${
                activeSection === sec.id
                  ? 'bg-[#dfb15b]/15 text-[#dfb15b] border border-[#dfb15b]/30'
                  : 'text-white/50 hover:text-white/80 border border-transparent'
              }`}
            >
              {sec.label}
            </button>
          ))}
        </div>

        {/* Right: Tier & Telemetry Status */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <span className="px-2 py-0.5 bg-[#dfb15b]/10 border border-[#dfb15b]/30 text-[#dfb15b] text-[10px] font-bold">
            TIER {tier}
          </span>
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] inline-block" />
            <span>{status}</span>
          </div>
        </div>
      </div>

      {/* Reading Scroll Progress Bar */}
      <div className="w-full h-[2px] bg-white/5 relative overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#d4af37] to-[#dfb15b] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
};
