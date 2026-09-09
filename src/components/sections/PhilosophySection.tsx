'use client';

import React from 'react';
import { PHILOSOPHY_PRINCIPLES } from '@/data/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { motion, useReducedMotion } from 'framer-motion';

export const PhilosophySection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="philosophy" className="py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="03"
          tag="Methodology // Core"
          title="Engineering Philosophy"
          subtitle="Distinguishing disciplined systems engineering from speculative experimentation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PHILOSOPHY_PRINCIPLES.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className={`p-6 transition-all group glass-panel glass-panel-hover corner-brackets ${
                index === 4 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-[#dfb15b] tracking-wider">
                  // 0{index + 1}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">
                  {principle.subtitle}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-[#feffff] mb-2 group-hover:text-[#dfb15b] transition-colors">
                {principle.title}
              </h3>

              <p className="font-sans text-sm text-white/70 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
