'use client';

import React from 'react';
import { XCircle, CheckCircle2, Compass, Eye, Code, Terminal } from 'lucide-react';

export const TeachingMethodSection: React.FC = () => {
  const pillars = [
    {
      icon: <Compass className="w-4 h-4 text-accent" />,
      title: 'Analytical Rigor',
      description: 'Formal mathematical formulation without hand-waving or unjustified heuristics.',
    },
    {
      icon: <Eye className="w-4 h-4 text-accent" />,
      title: 'Spatial Geometry',
      description: 'Dynamic visual models that render mathematical abstractions tangible and intuitive.',
    },
    {
      icon: <Code className="w-4 h-4 text-accent" />,
      title: 'Zero-Abstraction Code',
      description: 'Vectorized implementations constructed from basic tensor primitives from scratch.',
    },
    {
      icon: <Terminal className="w-4 h-4 text-accent" />,
      title: 'Adversarial Stress',
      description: 'Systematic empirical benchmarking across edge cases, noise, and non-convex spaces.',
    },
  ];

  return (
    <section
      id="method"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 border-t border-line relative z-10"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-8 sm:mb-12 border-b border-line text-xs font-mono">
        <div className="flex items-center gap-2 text-accent">
          <span className="w-2 h-2 rounded-[2px] bg-accent" />
          <span className="font-semibold tracking-wider">07 / UNDERSTAND THE METHOD</span>
        </div>
        <div className="flex items-center gap-3 text-fg-muted text-[11px]">
          <span>PEDAGOGICAL PHILOSOPHY</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-fg-soft">INTUITION TO IMPLEMENTATION</span>
        </div>
      </div>

      {/* Narrative Headline */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-fg">
          From Intuition to Implementation
        </h2>
        <p className="mt-3 text-sm sm:text-base text-fg-soft leading-relaxed font-sans">
          Most online tutorials teach you how to call a function. ByteLogic teaches you how to build the engine. By dissecting algorithms from mathematical genesis to computational execution, you gain fluency that outlasts library versions.
        </p>
      </div>

      {/* Comparative Architecture: Black Box vs. ByteLogic */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
        {/* Left: The Black Box Approach */}
        <div className="p-6 sm:p-8 rounded-[6px] bg-bg-2 border border-line space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-line text-xs font-mono">
            <span className="text-fg-muted font-bold tracking-wider">THE CONVENTIONAL PATH</span>
            <span className="text-[#ec4899] text-[10px] px-2 py-0.5 rounded-[3px] bg-[#ec4899]/10 border border-[#ec4899]/30">
              BLACK BOX
            </span>
          </div>

          <h3 className="text-xl font-bold font-sans text-fg">
            Superficial API Consumption
          </h3>

          <div className="space-y-4 text-xs font-mono text-fg-soft">
            <div className="flex items-start gap-3">
              <XCircle className="w-4 h-4 text-[#ec4899] shrink-0 mt-0.5" />
              <span>Importing opaque libraries without knowing the underlying cost functions.</span>
            </div>
            <div className="flex items-start gap-3">
              <XCircle className="w-4 h-4 text-[#ec4899] shrink-0 mt-0.5" />
              <span>Copy-pasting hyperparameter configs without geometric intuition of manifolds.</span>
            </div>
            <div className="flex items-start gap-3">
              <XCircle className="w-4 h-4 text-[#ec4899] shrink-0 mt-0.5" />
              <span>Helpless when models fail on production edge cases or non-convex distributions.</span>
            </div>
          </div>

          <div className="p-3.5 rounded-[4px] bg-bg border border-line text-xs font-mono text-fg-muted">
            <code>from sklearn.cluster import KMeans # 0 insight into Lloyd dynamics</code>
          </div>
        </div>

        {/* Right: The ByteLogic Way */}
        <div className="p-6 sm:p-8 rounded-[6px] bg-surface border border-accent-line space-y-6 bl-tick-box">
          <div className="flex items-center justify-between pb-3 border-b border-line text-xs font-mono">
            <span className="text-accent font-bold tracking-wider">THE BYTELOGIC WAY</span>
            <span className="text-accent text-[10px] px-2 py-0.5 rounded-[3px] bg-accent-soft border border-accent-line">
              FIRST PRINCIPLES
            </span>
          </div>

          <h3 className="text-xl font-bold font-sans text-fg">
            End-to-End Mechanical Clarity
          </h3>

          <div className="space-y-4 text-xs font-mono text-fg">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>Analytical derivation of objective functions and convergence guarantees.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>Real-time spatial visualization of Voronoi partitions and loss surfaces.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>Vectorized NumPy implementation built from scratch without black boxes.</span>
            </div>
          </div>

          <div className="p-3.5 rounded-[4px] bg-bg border border-accent-line text-xs font-mono text-accent">
            <code>labels = np.argmin(np.sum((X[:, None] - μ)**2, axis=-1), axis=-1)</code>
          </div>
        </div>
      </div>

      {/* 4 Pillars of Pedagogical Commitment */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pillars.map((p, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 rounded-[6px] bg-bg-2 border border-line space-y-2.5"
          >
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-[3px] bg-surface border border-line">
                {p.icon}
              </div>
              <span className="font-sans font-bold text-sm text-fg">
                {p.title}
              </span>
            </div>
            <p className="text-xs text-fg-soft font-sans leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
