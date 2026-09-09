'use client';

import React from 'react';
import { CONTRIBUTIONS } from '@/data/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export const ContributionsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contributions" className="py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="05"
          tag="Community // Impact"
          title="Contributions"
          subtitle="Open-source optimizations, technical writing, benchmark reproductions, and developer tooling."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CONTRIBUTIONS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="p-5 glass-panel glass-panel-hover corner-brackets flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#dfb15b]">
                    {item.category}
                  </span>
                  {item.impactBadge && (
                    <Badge variant="outline" size="sm">
                      {item.impactBadge}
                    </Badge>
                  )}
                </div>

                <h3 className="font-mono text-sm font-semibold text-[#feffff] mb-2">
                  {item.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.linkText && item.linkUrl && (
                <div className="pt-4 mt-4 border-t border-white/5">
                  <a
                    href={item.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-white/60 hover:text-[#dfb15b] transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
