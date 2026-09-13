import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LAB_DOMAINS, LAB_EXPERIMENTS } from '@/data/experiments';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, Sparkles, CheckCircle2, FlaskConical } from 'lucide-react';
import { ExperimentInspector } from '@/components/sections/ExperimentInspector';

export const metadata: Metadata = {
  title: 'Lab — Nayant Srivastava',
  description: 'Experiments, empirical sweeps, research prototypes, and computational investigations.',
};

const STATUS_VARIANTS: Record<string, 'gold' | 'outline' | 'default' | 'muted'> = {
  Validated: 'gold',
  Prototype: 'default',
  Exploring: 'outline',
  Experiment: 'default',
  Idea: 'muted',
  Archived: 'muted',
};

export default function LabPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 max-w-4xl mx-auto px-4 sm:px-6 space-y-20">
      {/* Header */}
      <div>
        <SectionHeader
          number="01"
          tag="Experiments // Research"
          title="The Engineering Laboratory"
          subtitle="Empirical investigations, numerical simulations, hypothesis tests, and prototype systems across computational domains."
        />

        {/* Live Lab Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 glass-panel corner-brackets font-mono text-xs">
          <div>
            <div className="text-white/40 uppercase tracking-widest text-[10px] mb-1">
              Active Domains
            </div>
            <div className="text-white/90 text-sm font-semibold">6 Research Areas</div>
          </div>
          <div>
            <div className="text-white/40 uppercase tracking-widest text-[10px] mb-1">
              Documented Sweeps
            </div>
            <div className="text-[#dfb15b] text-sm font-semibold">{LAB_EXPERIMENTS.length} Published</div>
          </div>
          <div>
            <div className="text-white/40 uppercase tracking-widest text-[10px] mb-1">
              Interactive Tools
            </div>
            <div className="text-white/90 text-sm font-semibold">ByteLogic Platform</div>
          </div>
          <div>
            <div className="text-white/40 uppercase tracking-widest text-[10px] mb-1">
              Methodology
            </div>
            <div className="text-white/90 text-sm font-semibold">Empirical Rigor</div>
          </div>
        </div>
      </div>

      {/* 01. Empirical Experiments Stream & Inspector */}
      <section className="space-y-8">
        <SectionHeader
          number="02"
          tag="Empirical Sweeps // Evidence"
          title="Documented Experiments"
          subtitle="Testing specific engineering hypotheses through measurement, ablation baselines, and synthetic stress injection. Click any experiment to inspect code kernels and mathematical derivations."
        />

        <ExperimentInspector />
      </section>

      {/* 02. Research Domains Grid */}
      <section className="space-y-8">
        <SectionHeader
          number="03"
          tag="Foundations // Curricula"
          title="Research Domains"
          subtitle="Long-term computational categories defining current investigations and development goals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LAB_DOMAINS.map((domain) => (
            <div
              key={domain.id}
              className="glass-panel glass-panel-hover corner-brackets p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-[#dfb15b] font-semibold">
                    // DOMAIN {domain.code}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                    {domain.status}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-[#feffff] mb-1.5">
                  {domain.name}
                </h3>
                <p className="font-mono text-xs text-[#dfb15b]/80 mb-3">
                  {domain.tagline}
                </p>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                  {domain.description}
                </p>

                {/* Subtopics chips */}
                <div className="flex flex-wrap gap-1.5 pt-2 mb-4">
                  {domain.subtopics.map((topic) => (
                    <span
                      key={topic}
                      className="font-mono text-[10px] text-white/50 bg-white/[0.03] border border-white/10 px-2 py-0.5"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-white/40">
                <span>Active: {domain.activeProjects.join(', ')}</span>
                <span>{domain.experimentCount} Sweeps</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 03. Interactive Visual Textbook Bridge */}
      <section className="p-6 sm:p-8 glass-panel corner-brackets border-[#019AA2]/30 space-y-4">
        <div className="flex items-center gap-2 text-[#019AA2] font-mono text-xs uppercase tracking-widest">
          <Sparkles className="w-4 h-4" />
          <span>Interactive Computational Visualizer</span>
        </div>
        <h3 className="font-display text-xl font-bold text-[#feffff]">
          Interactive Experiments on ByteLogic
        </h3>
        <p className="font-sans text-sm text-white/75 leading-relaxed max-w-2xl">
          Don't just read static telemetry logs. Step through dynamic K-Means expectation-maximization manifolds, inspect 3D ASCII projection tori, and evaluate algorithm convergence live in the browser.
        </p>
        <div className="pt-2 flex flex-wrap gap-3">
          <Link
            href="/bytelogic/concepts/k-means"
            className="px-4 py-2 border border-[#019AA2] bg-[#019AA2]/10 hover:bg-[#019AA2]/20 text-[#019AA2] font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-colors"
          >
            Launch K-Means Manifold
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/bytelogic"
            className="px-4 py-2 border border-white/15 bg-white/5 hover:border-white/30 text-white/80 font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-colors"
          >
            Explore ByteLogic Hub
          </Link>
        </div>
      </section>
    </div>
  );
}
