'use client';

import React from 'react';
import { ABOUT_LAYERS } from '@/data/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { motion, useReducedMotion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-16 sm:py-24 border-b border-line">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="06"
          tag="Identity // Depth"
          title="About Me"
          subtitle="Four layers of professional identity, engineering lineage, cognitive model, and technical trajectory."
        />

        <div className="space-y-6">
          {ABOUT_LAYERS.map((layer, idx) => (
            <motion.div
              key={layer.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="p-6 sm:p-7 glass-panel glass-panel-hover corner-brackets"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="font-mono text-xs font-semibold text-accent">
                  0{idx + 1}.
                </span>
                <h3 className="font-display text-lg font-bold text-fg">
                  {layer.title}
                </h3>
                <span className="text-fg-muted font-mono text-xs">/</span>
                <span className="font-mono text-xs text-fg-muted uppercase tracking-wider">
                  {layer.subtitle}
                </span>
              </div>

              <p className="font-sans text-sm sm:text-base text-fg-soft leading-relaxed max-w-3xl">
                {layer.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
