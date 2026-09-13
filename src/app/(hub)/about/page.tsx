'use client';

import React from 'react';
import {
  PORTFOLIO_METADATA,
  ABOUT_LAYERS,
  PHILOSOPHY_PRINCIPLES,
  JOURNEY_ITEMS,
} from '@/data/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { motion, useReducedMotion } from 'framer-motion';

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 max-w-4xl mx-auto px-4 sm:px-6 space-y-20">
      {/* Page Header */}
      <div>
        <SectionHeader
          number="00"
          tag="Identity // Architecture"
          title="About & Engineering Lineage"
          subtitle="A comprehensive view of cognitive models, engineering methodology, and technical trajectory."
        />
        <div className="p-6 sm:p-8 surface-signature corner-brackets space-y-4">
          <div className="flex flex-wrap items-baseline gap-3">
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#feffff]">
              {PORTFOLIO_METADATA.name}
            </h1>
            <span className="font-mono text-xs text-[#dfb15b]">
              // {PORTFOLIO_METADATA.role}
            </span>
          </div>
          <p className="font-sans text-base text-white/80 leading-relaxed max-w-2xl">
            {PORTFOLIO_METADATA.tagline}
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-white/70">
            <span className="px-2.5 py-1 bg-white/5 border border-white/10">Location: {PORTFOLIO_METADATA.location}</span>
            <span className="px-2.5 py-1 bg-white/5 border border-white/10">Status: {PORTFOLIO_METADATA.statusBadge}</span>
          </div>
        </div>
      </div>

      {/* Layered Identity */}
      <section className="space-y-8">
        <SectionHeader
          number="01"
          tag="Dimensions // Depth"
          title="Core Dimensions"
          subtitle="Four layers structuring the cognitive and execution model."
        />
        <div className="space-y-5">
          {ABOUT_LAYERS.map((layer, idx) => (
            <motion.div
              key={layer.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="p-6 sm:p-7 surface-workspace surface-workspace-hover"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="font-mono text-xs font-semibold text-[#dfb15b]">
                  0{idx + 1}.
                </span>
                <h3 className="font-display text-lg font-bold text-[#feffff]">
                  {layer.title}
                </h3>
                <span className="text-white/30 font-mono text-xs">/</span>
                <span className="font-mono text-xs text-white/65 uppercase tracking-wider">
                  {layer.subtitle}
                </span>
              </div>
              <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl">
                {layer.content}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="space-y-8">
        <SectionHeader
          number="02"
          tag="Axioms // Principles"
          title="Engineering Philosophy"
          subtitle="Foundational tenets distinguishing disciplined systems design from speculative experimentation."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PHILOSOPHY_PRINCIPLES.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className={`p-6 transition-all group surface-workspace surface-workspace-hover ${
                index === 4 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-[#dfb15b] tracking-wider">
                  // 0{index + 1}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-white/60">
                  {principle.subtitle}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-[#feffff] mb-2 group-hover:text-[#dfb15b] transition-colors">
                {principle.title}
              </h3>
              <p className="font-sans text-sm text-white/70 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trajectory & Experience */}
      <section className="space-y-8">
        <SectionHeader
          number="03"
          tag="Trajectory // Milestones"
          title="Experience & Trajectory"
          subtitle="Academic path, community leadership, and autonomous systems research."
        />
        <div className="relative border-l-2 border-[#dfb15b]/30 pl-6 sm:pl-8 ml-3 sm:ml-4 space-y-10">
          {JOURNEY_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? false : { opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="relative group p-5 surface-workspace surface-workspace-hover"
            >
              <div className="absolute -left-[32px] sm:-left-[41px] top-5 w-3.5 h-3.5 bg-[#010a0b] border-2 border-[#dfb15b] group-hover:bg-[#dfb15b] transition-all shadow-[0_0_10px_rgba(223,177,91,0.5)] flex items-center justify-center">
                <span className="w-1 h-1 bg-[#dfb15b] group-hover:bg-[#010a0b] block" />
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-xs font-semibold text-[#dfb15b]">
                    {item.period}
                  </span>
                  <span className="text-white/30 font-mono text-xs">·</span>
                  <Badge variant="outline" size="sm">
                    {item.type}
                  </Badge>
                </div>
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="font-display text-lg font-bold text-[#feffff]">
                    {item.role}
                  </h3>
                  <span className="font-mono text-xs text-white/65">
                    @ {item.organization}
                  </span>
                </div>
                <p className="font-sans text-sm text-white/70 leading-relaxed max-w-2xl pt-1">
                  {item.description}
                </p>
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[10px] text-white/65 bg-white/5 px-2 py-0.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
