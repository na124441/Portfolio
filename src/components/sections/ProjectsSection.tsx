'use client';

import React from 'react';
import {
  ADCTM_PROJECT,
  SPACECRAFT_PROJECT,
  MINDLITE_PROJECT,
  OMNIX_PROJECT,
  ASTRA_PROJECT,
} from '@/data/projects';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowRight, ArrowUpRight, Cpu, ShieldCheck, Zap, Layers, Activity } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export const ProjectsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Tier S Flagships Data with Architectural Signal Flow Pipelines & Invariants
  const FLAGSHIP_DATA = [
    {
      project: ADCTM_PROJECT,
      tagline: 'Hyperscale Thermal Control · Fourier Neural Operators · Safe RL',
      metrics: [
        { label: 'Energy Reduction', value: '28.4%', note: 'Safe-SAC vs PID baseline' },
        { label: 'Surrogate Latency', value: '4.1 ms', note: 'Zero-shot FNO spectral solve' },
        { label: 'Safety Violations', value: '0.000%', note: 'Analytical CBF barrier shield' },
        { label: 'CFD Acceleration', value: '48,000x', note: 'Over 1.2M cell finite volume' },
      ],
      pipeline: [
        { step: '00', name: 'Telemetry Bus', spec: '256 Nodes @ 10Hz', icon: Activity },
        { step: '01', name: 'FNO Surrogate', spec: '3D Heat Flux · 4.1ms', icon: Zap },
        { step: '02', name: 'Safe SAC Agent', spec: 'Continuous Control · 1.2ms', icon: Cpu },
        { step: '03', name: 'Barrier Shield', spec: 'OSQP Quadratic Program · 0.3ms', icon: ShieldCheck },
        { step: '04', name: 'VFD Dispatch', spec: '4-20mA Hardware Actuation', icon: Layers },
      ],
      invariants: [
        'Hard Control Barrier Functions guarantee zero overshoot beyond the 27.0°C ASHRAE thermal envelope.',
        'Decoupled telemetry ingestion runs asynchronously at 10Hz via ZeroMQ to safeguard real-time control deadlines.',
        'Spectral Fourier Neural Operator evaluates 3D convection thermodynamics in constant time without meshing.',
      ],
      primaryCta: {
        label: 'Explore Full Case Study & Live Simulator',
        href: '/projects/adctm',
      },
      secondaryCta: {
        label: 'Research Architecture',
        href: 'https://github.com/nayantsrivastava',
      },
    },
    {
      project: SPACECRAFT_PROJECT,
      tagline: 'Deep-Space Telemetry · Extreme Value Theory · Bare-Metal ARM',
      metrics: [
        { label: 'Inference Latency', value: '4.2 ms', note: 'Bare-metal ARM Cortex-M4' },
        { label: 'Static SRAM', value: '48 KB', note: 'Zero heap allocation runtime' },
        { label: 'Anomaly F1-Score', value: '99.1%', note: 'Heavy-tail EVT pre-filtering' },
        { label: 'Worst-Case WCET', value: '100%', note: 'Strict deterministic bounds' },
      ],
      pipeline: [
        { step: '00', name: 'Avionics Bus', spec: '100Hz RTOS Telemetry', icon: Activity },
        { step: '01', name: 'EVT Pre-Filter', spec: 'Heavy-Tail Generalized Pareto', icon: Zap },
        { step: '02', name: 'Sparse INT8 GAT', spec: 'Graph Attention Network', icon: Cpu },
        { step: '03', name: 'Anomaly Isolator', spec: 'Subsystem Root-Cause Attribution', icon: ShieldCheck },
        { step: '04', name: 'Safe Fallback', spec: 'Deterministic Attitude Guard', icon: Layers },
      ],
      invariants: [
        'Zero dynamic heap allocation: all tensor buffers pre-allocated statically at compile time.',
        'Extreme Value Theory (EVT) statistical pre-filtering for heavy-tailed aerospace radiation events.',
        'Quantized INT8 graph message passing verified for radiation-hardened space-grade microcontrollers.',
      ],
      primaryCta: {
        label: 'Read Architecture Case Study',
        href: '/projects/self-aware-spacecraft',
      },
      secondaryCta: {
        label: 'Avionics Notes',
        href: 'https://github.com/nayantsrivastava',
      },
    },
  ];

  // Tier A Systems Data
  const APPLIED_SYSTEMS = [
    {
      project: MINDLITE_PROJECT,
      discipline: 'C++20 RUNTIME & QUANTIZATION',
      highlightMetric: { value: '3.4x', label: 'Inference Speedup' },
      hardwareFootprint: '< 15 MB Binary',
      constraints: ['Zero External Dependencies', 'SIMD Intrinsics (AVX2/NEON)', 'INT8 Quantization', 'CMake'],
      actionLabel: 'Source Code & Benchmarks',
    },
    {
      project: OMNIX_PROJECT,
      discipline: 'GRAPHICS & COMPUTE SIMULATION',
      highlightMetric: { value: '< 1.8 ms', label: 'Frame Time' },
      hardwareFootprint: 'Vulkan 1.3 Pipeline',
      constraints: ['Bindless Descriptor Indexing', 'Custom VMA Memory Pools', 'Data-Oriented ECS', 'Tracy Profiler'],
      actionLabel: 'Engine Architecture & Specs',
    },
    {
      project: ASTRA_PROJECT,
      discipline: 'DISTRIBUTED SYSTEMS & GRAPH AI',
      highlightMetric: { value: '99.4%', label: 'Packet Recovery' },
      hardwareFootprint: 'Linux Kernel / ZeroMQ',
      constraints: ['Dynamic Graph Attention', 'Matrix Imputation Kernels', 'Protobuf Serialization', 'C++20'],
      actionLabel: 'Research Prototype Code',
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-white/10 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <SectionHeader
          number="02"
          tag="ENGINEERING / 02 · ARCHITECTURE & EVIDENCE"
          title="Flagship Systems & Engineering Architecture"
          subtitle="Autonomous reinforcement learning, radiation-tolerant neural avionics, and low-level C++ runtimes evaluated under physical and mathematical constraints."
        />

        {/* ================================================================= */}
        {/* TIER S: FLAGSHIP ARCHITECTURAL CASE STUDIES                      */}
        {/* ================================================================= */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 font-mono text-xs uppercase tracking-widest text-white/50">
            <span className="text-gold font-semibold">[ 01 ]</span>
            <span>FLAGSHIP CASE STUDIES // DEEP-DIVE SPECIFICATIONS</span>
            <div className="h-[1px] flex-1 bg-white/10" />
          </div>

          <div className="space-y-12">
            {FLAGSHIP_DATA.map(({ project, tagline, metrics, pipeline, invariants, primaryCta, secondaryCta }, idx) => (
              <motion.article
                key={project.slug}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.12 }}
                className="p-6 sm:p-8 md:p-10 border border-white/10 bg-surface/50 backdrop-blur-sm transition-colors duration-200 hover:border-gold/30 relative"
              >
                {/* Top Metadata Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <Badge variant="gold" size="sm">
                      TIER S · FLAGSHIP
                    </Badge>
                    <span className="font-mono text-xs text-white/60">
                      {project.timeline}
                    </span>
                    <span className="hidden sm:inline text-white/20">·</span>
                    <span className="hidden sm:inline font-mono text-xs text-white/40">
                      {project.role}
                    </span>
                  </div>
                  <div className="font-mono text-xs text-gold/80 tracking-wider">
                    {project.status}
                  </div>
                </div>

                {/* Monumental Title & Thesis */}
                <div className="mb-6">
                  <div className="font-mono text-xs text-gold/90 uppercase tracking-widest mb-2">
                    {tagline}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-3 leading-tight tracking-tight">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed max-w-3xl">
                    {project.oneLineThesis}
                  </p>
                </div>

                {/* 4-Column Quantitative Benchmarks Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-6">
                  {metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-3.5 sm:p-4 bg-white/[0.02] border border-white/8 hover:border-white/15 transition-colors"
                    >
                      <div className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-1.5">
                        {m.label}
                      </div>
                      <div className="font-mono text-2xl sm:text-3xl font-bold text-gold tabular-nums tracking-tight">
                        {m.value}
                      </div>
                      <div className="font-mono text-[11px] text-white/40 mt-1 leading-snug">
                        {m.note}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Architecture Signal Flow Pipeline */}
                <div className="my-7 p-4 sm:p-5 bg-white/[0.015] border border-white/8">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                      End-to-End Execution Pipeline
                    </span>
                    <span className="text-gold/70">Deterministic Signal Flow</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 font-mono">
                    {pipeline.map((node, i) => {
                      const IconComponent = node.icon;
                      return (
                        <div
                          key={node.step}
                          className="p-3 bg-white/[0.02] border border-white/6 flex flex-col justify-between relative group hover:border-white/20 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] text-gold font-bold">
                              {node.step}
                            </span>
                            <IconComponent className="w-3.5 h-3.5 text-white/40 group-hover:text-gold transition-colors" />
                          </div>
                          <div>
                            <div className="text-xs text-text font-medium leading-tight">
                              {node.name}
                            </div>
                            <div className="text-[10px] text-white/40 mt-1 leading-tight">
                              {node.spec}
                            </div>
                          </div>
                          {i < pipeline.length - 1 && (
                            <div className="hidden sm:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-white/20 pointer-events-none text-[10px]">
                              →
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Core Engineering Invariants */}
                <div className="my-6 space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">
                    Architectural Invariants & Design Principles
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {invariants.map((inv, i) => (
                      <div
                        key={i}
                        className="text-xs font-mono text-white/70 bg-white/[0.01] border-l-2 border-gold/40 pl-3 py-1.5 leading-relaxed"
                      >
                        {inv}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Domains */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5 items-center">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 mr-1">
                      Stack:
                    </span>
                    {project.technologies.flatMap((tech) =>
                      tech.items.slice(0, 3).map((item) => (
                        <Badge key={item} variant="outline" size="sm">
                          {item}
                        </Badge>
                      ))
                    )}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      href={secondaryCta.href}
                      variant="ghost"
                      size="sm"
                      isExternal
                    >
                      {secondaryCta.label}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Button>
                    <Button
                      href={primaryCta.href}
                      variant="primary"
                      size="sm"
                    >
                      {primaryCta.label}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* ================================================================= */}
        {/* TIER A: APPLIED SYSTEMS & RUNTIMES (3-COLUMN GRID)               */}
        {/* ================================================================= */}
        <div>
          <div className="flex items-center gap-3 mb-8 font-mono text-xs uppercase tracking-widest text-white/50">
            <span className="text-gold font-semibold">[ 02 ]</span>
            <span>APPLIED RUNTIMES & LOW-LEVEL SYSTEMS // TIER A</span>
            <div className="h-[1px] flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {APPLIED_SYSTEMS.map(({ project, discipline, highlightMetric, hardwareFootprint, constraints, actionLabel }, idx) => (
              <motion.article
                key={project.slug}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                className="p-6 border border-white/10 bg-surface/40 backdrop-blur-sm flex flex-col justify-between hover:border-gold/30 transition-colors duration-200"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-white/10">
                    <span className="font-mono text-[10px] text-gold uppercase tracking-wider font-semibold">
                      {discipline}
                    </span>
                    <span className="font-mono text-[10px] text-white/40">
                      {project.timeline}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h4 className="font-display text-xl font-bold text-text mb-2 leading-snug">
                    {project.title}
                  </h4>
                  <p className="font-sans text-xs text-text-secondary leading-relaxed mb-5">
                    {project.oneLineThesis}
                  </p>

                  {/* Highlight Metric */}
                  <div className="p-3 bg-white/[0.02] border border-white/8 mb-5 flex items-baseline justify-between">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-white/50">
                        {highlightMetric.label}
                      </div>
                      <div className="font-mono text-2xl font-bold text-gold tabular-nums">
                        {highlightMetric.value}
                      </div>
                    </div>
                    <div className="font-mono text-[11px] text-white/40 text-right">
                      {hardwareFootprint}
                    </div>
                  </div>

                  {/* Architectural Constraints */}
                  <div className="space-y-1.5 mb-6">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                      Runtime Invariants
                    </div>
                    <ul className="space-y-1">
                      {constraints.map((c) => (
                        <li key={c} className="font-mono text-[11px] text-white/65 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-gold/60 inline-block" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="pt-4 border-t border-white/10">
                  <Button
                    href={project.links[0]?.url || '#'}
                    variant="outline"
                    size="sm"
                    className="w-full justify-between"
                    isExternal
                  >
                    <span>{actionLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* ================================================================= */}
        {/* COMPREHENSIVE ARCHIVE & REPOSITORY FOOTER                         */}
        {/* ================================================================= */}
        <div className="mt-12 p-6 sm:p-8 border border-white/10 bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="font-mono text-xs text-gold uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Full Engineering Repository Directory
            </div>
            <p className="font-sans text-sm text-text-secondary max-w-xl leading-relaxed">
              Explore complete benchmark suites, mathematical derivations, ablation studies, and historical system prototypes across all engineering domains.
            </p>
          </div>
          <Button href="/work" variant="primary" size="sm" className="whitespace-nowrap">
            View All Systems & Archives
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
