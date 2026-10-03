'use client';

import React from 'react';
import { NOW_FOCUS } from '@/data/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { motion, useReducedMotion } from 'framer-motion';

export const NowSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="now" className="py-16 sm:py-20 border-b border-line relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="01"
          tag="Status // Real-Time"
          title="Current Focus"
          subtitle="A persistent log of active engineering work, ongoing research questions, and technical explorations."
        />

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="glass-panel corner-brackets divide-y divide-line"
        >
          {NOW_FOCUS.map((item, idx) => {
            const isFirst = idx === 0;
            return (
              <div
                key={item.key}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 hover:bg-surface-soft transition-colors group"
              >
                <div className="w-32 flex-shrink-0 font-mono text-xs uppercase tracking-widest text-accent flex items-center gap-2">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isFirst
                        ? 'bg-accent radar-dot'
                        : 'bg-accent/60 group-hover:bg-accent'
                    } transition-colors`}
                  />
                  <span>{item.label}</span>
                </div>
                <div className="text-sm font-sans text-fg-soft leading-relaxed group-hover:text-fg transition-colors">
                  {item.description}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
