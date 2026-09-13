'use client';

import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles, Terminal, Cpu, Network, Layers, Binary } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const DOMAINS = [
  {
    title: 'AI / Machine Learning',
    icon: Binary,
    desc: 'Unsupervised learning, efficient inference, model quantization & agent systems.',
    status: 'Active Lab',
    link: '/lab',
  },
  {
    title: 'Systems & Runtime',
    icon: Cpu,
    desc: 'Low-latency C++, memory architectures, concurrency & OS primitives.',
    status: 'In Development',
    link: '/lab',
  },
  {
    title: 'Graphics & Engine Architecture',
    icon: Layers,
    desc: 'Vulkan/C++ rendering pipelines, procedural shaders & simulation physics.',
    status: 'Omnix Engine',
    link: '/build#omnix',
  },
  {
    title: 'ByteLogic Learning Systems',
    icon: Sparkles,
    desc: 'Interactive 3D manifolds, geometric algorithms & first-principles pedagogy.',
    status: 'Live Platform',
    link: '/bytelogic',
  },
];

export const LabPreviewSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-16 sm:py-24 border-b border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="04"
          tag="Laboratory // Research"
          title="Knowledge Domains & The Lab"
          subtitle="Explorations across computational theory, machine intelligence, high-performance engines, and interactive textbooks."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {DOMAINS.map((domain, idx) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
              >
                <Link
                  href={domain.link}
                  className="block p-6 glass-panel glass-panel-hover corner-brackets h-full group transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded border border-white/10 bg-white/[0.02] flex items-center justify-center text-[#dfb15b] group-hover:border-[#d4af37]/40 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#dfb15b] bg-[#d4af37]/10 border border-[#d4af37]/20 px-2 py-0.5">
                      {domain.status}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-[#feffff] mb-2 group-hover:text-[#dfb15b] transition-colors">
                    {domain.title}
                  </h3>

                  <p className="font-sans text-xs text-white/70 leading-relaxed">
                    {domain.desc}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Action Bar */}
        <div className="p-6 glass-panel corner-brackets flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-display text-sm font-bold text-[#feffff]">
              Explore Interactive Experiments & Textbooks
            </div>
            <p className="font-sans text-xs text-white/60">
              Run simulations, explore Voronoi manifolds, and inspect mathematical derivations directly.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button href="/lab" variant="outline" size="sm">
              Enter Lab
            </Button>
            <Button href="/bytelogic" variant="primary" size="sm">
              Launch ByteLogic
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
