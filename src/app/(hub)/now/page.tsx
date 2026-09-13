import React from 'react';
import type { Metadata } from 'next';
import { NOW_FOCUS, CURRENT_PROJECTS } from '@/data/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Now — Nayant Srivastava',
  description: 'What Nayant Srivastava is currently building, learning, exploring, and thinking about.',
};

const STATUS_COLORS: Record<string, string> = {
  Active: 'bg-[#22c55e] shadow-[0_0_8px_rgba(34,197,94,0.6)]',
  Development: 'bg-[#f59e0b] shadow-[0_0_8px_rgba(245,158,11,0.6)]',
  Building: 'bg-[#06b6d4] shadow-[0_0_8px_rgba(6,182,212,0.6)]',
  'Long-term': 'bg-[#a855f7] shadow-[0_0_8px_rgba(168,85,247,0.6)]',
  Community: 'bg-[#22c55e] shadow-[0_0_8px_rgba(34,197,94,0.6)]',
};

export default function NowPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 max-w-4xl mx-auto px-4 sm:px-6">
      <SectionHeader
        number="01"
        tag="Current Vector // Live State"
        title="Now"
        subtitle="A public record of active vectors, operational focus, current study domains, and technical priorities."
      />

      <div className="space-y-8">
        {/* Building Section */}
        <div className="glass-panel corner-brackets p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_8px_rgba(34,197,94,0.7)]" />
              <h2 className="font-display text-lg font-bold text-[#feffff]">
                Currently Building
              </h2>
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#dfb15b]">
              Active Initiatives
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CURRENT_PROJECTS.map((project) => (
              <div
                key={project.name}
                className="p-4 border border-white/10 bg-white/[0.02] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-white/50">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${STATUS_COLORS[project.status] || 'bg-[#22c55e]'}`}
                      />
                      <span className="font-mono text-[10px] text-white/40">
                        {project.status}
                      </span>
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-[#feffff] mb-1">
                    {project.name}
                  </h3>
                  <p className="font-sans text-xs text-white/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Focus Areas from NOW_FOCUS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {NOW_FOCUS.map((item, idx) => (
            <div
              key={item.key}
              className={`p-6 glass-panel corner-brackets space-y-3 ${
                idx === NOW_FOCUS.length - 1 && NOW_FOCUS.length % 2 !== 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="font-mono text-xs font-semibold text-[#dfb15b] uppercase tracking-wider">
                  // {item.label}
                </span>
                <span className="font-mono text-[10px] text-white/40">
                  VECTOR 0{idx + 1}
                </span>
              </div>
              <p className="font-sans text-sm text-white/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="p-4 border border-white/10 bg-white/[0.01] flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs text-white/50">
          <div>Updated periodically — inspired by Derek Sivers' /now page concept.</div>
          <div className="text-[#dfb15b]">Greater Noida, India</div>
        </div>
      </div>
    </div>
  );
}
