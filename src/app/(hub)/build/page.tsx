import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink, Terminal, Cpu } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { INITIATIVES } from '@/data/initiatives';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { LastTransistorJournal } from '@/components/sections/LastTransistorJournal';

export const metadata: Metadata = {
  title: 'Build — Nayant Srivastava',
  description: 'Initiatives, engines, frameworks, communities, and long-term creative projects.',
};

function getStatusBadge(status: string) {
  switch (status) {
    case 'Active':
      return { dot: 'bg-[#22c55e]', variant: 'gold' as const };
    case 'Development':
      return { dot: 'bg-[#f59e0b]', variant: 'default' as const };
    case 'Building':
      return { dot: 'bg-[#06b6d4]', variant: 'default' as const };
    case 'Long-term':
      return { dot: 'bg-[#a855f7]', variant: 'outline' as const };
    case 'Community':
      return { dot: 'bg-[#22c55e]', variant: 'gold' as const };
    default:
      return { dot: 'bg-white/40', variant: 'muted' as const };
  }
}

export default function BuildPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
      <SectionHeader
        number="01"
        tag="Initiatives // Long-term"
        title="Engineering Initiatives & Systems"
        subtitle="Active frameworks, custom engines, developer communities, and long-term world-building architectures."
      />

      <div className="space-y-10">
        {INITIATIVES.map((item) => {
          const badgeConfig = getStatusBadge(item.status);

          return (
            <article
              key={item.id}
              id={item.id}
              className="scroll-mt-32 p-6 sm:p-8 glass-panel glass-panel-hover corner-brackets space-y-6"
            >
              {/* Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#dfb15b] px-2 py-0.5 border border-[#d4af37]/30 bg-[#d4af37]/5">
                    {item.category}
                  </span>
                  <span className="text-white/30 font-mono text-xs">·</span>
                  <span className="font-mono text-xs text-white/50">{item.relatedDomain}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${badgeConfig.dot} shadow-[0_0_8px_currentColor]`}
                  />
                  <Badge variant={badgeConfig.variant} size="sm">
                    {item.status}
                  </Badge>
                </div>
              </div>

              {/* Title & Tagline */}
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#feffff] mb-1.5">
                  {item.name}
                </h2>
                <p className="font-mono text-xs sm:text-sm text-[#dfb15b] leading-relaxed">
                  {item.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="font-sans text-sm text-white/80 leading-relaxed">
                {item.description}
              </p>

              {/* Overview Points */}
              <div className="p-4 bg-white/[0.02] border border-white/5 space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 block">
                  Design Architecture & Motivation:
                </span>
                <ul className="space-y-1.5 text-xs font-sans text-white/70">
                  {item.overview.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#dfb15b] font-mono mt-0.5">▸</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture Highlights */}
              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#dfb15b] block">
                  Technical Pillars:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.architectureHighlights.map((hl, i) => (
                    <div
                      key={i}
                      className="p-2.5 bg-black/40 border border-white/5 text-xs font-mono text-white/80 flex items-start gap-2"
                    >
                      <span className="text-white/30 text-[10px]">0{i + 1}.</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantitative Metrics if Available */}
              {item.metrics && item.metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  {item.metrics.map((m) => (
                    <div key={m.label} className="p-3 bg-white/[0.02] border border-white/10">
                      <span className="font-mono text-[10px] uppercase text-white/40 block mb-1">
                        {m.label}
                      </span>
                      <span className="font-mono text-sm sm:text-base text-metallic-gold font-bold">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack & Action Links */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {item.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {item.githubUrl && (
                    <Button
                      href={item.githubUrl}
                      variant="outline"
                      size="sm"
                      isExternal
                    >
                      <GithubIcon size={14} />
                      <span>Source</span>
                    </Button>
                  )}
                  {item.liveUrl && (
                    <Button
                      href={item.liveUrl}
                      variant="primary"
                      size="sm"
                    >
                      <span>Launch</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Button>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Last Transistor Development Journal */}
      <LastTransistorJournal />
    </div>
  );
}
