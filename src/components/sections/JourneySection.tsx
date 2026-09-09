'use client';

import React from 'react';
import { JOURNEY_ITEMS } from '@/data/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { motion, useReducedMotion } from 'framer-motion';

export const JourneySection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="journey" className="py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="04"
          tag="Trajectory // History"
          title="Experience & Journey"
          subtitle="Formal engineering roles, technical research positions, systems milestones, and competitive achievements."
        />

        <div className="relative border-l border-white/15 pl-6 sm:pl-8 ml-3 sm:ml-4 space-y-10">
          {JOURNEY_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? false : { opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 bg-[#010a0b] border-2 border-[#d4af37] group-hover:bg-[#d4af37] transition-all shadow-[0_0_8px_rgba(212,175,55,0.4)]" />

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
                  <span className="font-mono text-xs text-white/50">
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
                      className="font-mono text-[10px] text-white/50 bg-white/5 px-2 py-0.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
