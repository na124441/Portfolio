'use client';

import React, { useState } from 'react';
import { Sparkles, Eye, Code, Terminal, Compass, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const PhilosophySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      code: '01',
      title: 'UNDERSTAND',
      subtitle: 'The "Why" and First Principles',
      icon: <Compass className="w-4 h-4 text-[#019AA2]" />,
      summary: 'Before writing code or running models, deconstruct the theoretical problem. Unpack the underlying assumptions, mathematical constraints, and analytical objectives.',
      example: 'Example: Formulating clustering as an integer programming problem minimizing Within-Cluster Sum of Squares (WCSS).',
      mathOrCode: '\\min_{S} \\sum_{i=1}^k \\sum_{x \\in S_i} \\|x - \\mu_i\\|^2, \\quad S_i \\cap S_j = \\emptyset',
    },
    {
      code: '02',
      title: 'VISUALIZE',
      subtitle: 'Geometric Intuition in Motion',
      icon: <Eye className="w-4 h-4 text-[#019AA2]" />,
      summary: 'Abstract equations reveal their true structure when represented spatially. Vector fields, loss surfaces, computational graphs, and coordinate partitions make the intangible concrete.',
      example: 'Example: Watching Voronoi cell boundaries warp in real time as centroids shift along the gradient of point dispersion.',
      mathOrCode: 'S_i^{(t)} = \\left\\{ x_p : \\|x_p - \\mu_i^{(t)}\\|^2 \\le \\|x_p - \\mu_j^{(t)}\\|^2 \\ \\forall j \\right\\}',
    },
    {
      code: '03',
      title: 'IMPLEMENT',
      subtitle: 'From Scratch in Pure Code',
      icon: <Code className="w-4 h-4 text-[#019AA2]" />,
      summary: 'High-level library calls hide critical edge cases and computational trade-offs. We implement algorithms from bare mathematics using vectorized primitives.',
      example: 'Example: Vectorizing pairwise distance calculations using broadcasting in pure NumPy without third-party ML frameworks.',
      mathOrCode: 'distances = np.linalg.norm(X[:, None] - centroids, axis=2)',
    },
    {
      code: '04',
      title: 'EXPERIMENT',
      subtitle: 'Interactive Empirical Testing',
      icon: <Terminal className="w-4 h-4 text-[#019AA2]" />,
      summary: 'A model is only understood when tested against adversarial conditions. Stress-test algorithms with pathological topologies, noise, outliers, and initialization variances.',
      example: 'Example: Evaluating how standard Lloyd initialization falls into local minima on concentric circles vs. K-Means++ D² sampling.',
      mathOrCode: 'P(x) = \\frac{D(x)^2}{\\sum_{x\' \\in X} D(x\')^2}',
    },
    {
      code: '05',
      title: 'DISCOVER',
      subtitle: 'Connecting the Knowledge Graph',
      icon: <Sparkles className="w-4 h-4 text-[#019AA2]" />,
      summary: 'Every concept is a node in a vast interconnected graph. Discover how K-Means connects to Expectation-Maximization, Gaussian Mixture Models, and Principal Component Analysis.',
      example: 'Example: K-Means is mathematically equivalent to a Gaussian Mixture Model with spherical covariance as temperature approaches zero.',
      mathOrCode: '\\lim_{\\sigma^2 \\to 0} \\gamma_{ik} = \\mathbb{I}\\left( k = \\arg\\min_j \\|x_i - \\mu_j\\|^2 \\right)',
    },
  ];

  return (
    <section id="philosophy" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 border-t border-[#1C2830]">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-8 sm:mb-10 border-b border-[#1C2830] text-xs font-mono">
        <div className="flex items-center gap-2 text-[#019AA2]">
          <span className="font-semibold">06 / PEDAGOGICAL PHILOSOPHY</span>
        </div>
        <span className="text-[#68747D]">THE 5-STAGE COGNITIVE LOOP</span>
      </div>

      {/* Narrative Headline */}
      <div className="max-w-3xl mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-[#F3F6F7]">
          The First-Principles Knowledge Loop
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#A8B3BA] leading-relaxed font-sans">
          ByteLogic rejects passive content consumption. We believe deep technical fluency is achieved when a learner moves systematically from conceptual derivation to spatial visualization, code construction, and rigorous empirical stress-testing.
        </p>
      </div>

      {/* 5-Stage Interactive Tabs & Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column: Stage Selector List (5 cols) */}
        <div className="lg:col-span-5 space-y-2 font-mono">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.code}
                onClick={() => setActiveStep(idx)}
                className={cn(
                  'w-full text-left p-3.5 sm:p-4 min-h-[52px] rounded-[6px] border transition-all duration-200 cursor-pointer flex items-center justify-between group',
                  isSelected
                    ? 'bg-[#0E151B] border-[#019AA2] text-[#F3F6F7] shadow-lg'
                    : 'bg-[#0A0F14] border-[#1C2830] text-[#A8B3BA] hover:text-[#F3F6F7] hover:border-[#1C2830]/80'
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      'text-xs font-bold px-2 py-0.5 rounded-[3px] border shrink-0',
                      isSelected
                        ? 'border-[#019AA2] text-[#019AA2] bg-[#019AA2]/15'
                        : 'border-[#1C2830] text-[#68747D] bg-[#131C24]'
                    )}
                  >
                    {step.code}
                  </span>
                  <div>
                    <div className="text-sm font-sans font-semibold tracking-tight text-[#F3F6F7]">
                      {step.title}
                    </div>
                    <div className="text-xs text-[#68747D] font-sans">
                      {step.subtitle}
                    </div>
                  </div>
                </div>

                <span
                  className={cn(
                    'text-xs transition-transform duration-200',
                    isSelected ? 'text-[#019AA2] translate-x-1' : 'text-[#68747D] group-hover:text-[#A8B3BA]'
                  )}
                >
                  →
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Column: Detailed Stage Dossier (7 cols) */}
        <div className="lg:col-span-7 rounded-[6px] bg-[#0E151B] border border-[#1C2830] p-4 sm:p-6 lg:p-8 bl-tick-box min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-[#1C2830] text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-[#019AA2] font-semibold">STAGE {steps[activeStep].code} /</span>
              <span className="text-[#F3F6F7] font-bold uppercase">{steps[activeStep].title}</span>
            </div>
            <span className="text-[#68747D] text-[11px] sm:text-xs">{steps[activeStep].subtitle}</span>
          </div>

          <p className="text-sm sm:text-base text-[#F3F6F7] leading-relaxed font-sans mb-4">
            {steps[activeStep].summary}
          </p>

          <div className="p-3.5 rounded-[4px] bg-[#0A0F14] border border-[#1C2830] text-xs font-sans text-[#A8B3BA] leading-relaxed mb-6">
            <span className="text-[#019AA2] font-mono font-semibold block mb-1">CONCRETE APPLICATION:</span>
            {steps[activeStep].example}
          </div>

          {/* Mathematical / Vector / Code Artifact */}
          <div className="min-w-0">
            <span className="text-xs font-mono text-[#68747D] uppercase tracking-wider block mb-2">
              Formal Expression / Syntax:
            </span>
            <div className="p-3 sm:p-4 rounded-[4px] bg-[#05070A] border border-[#1C2830] font-mono text-xs sm:text-sm text-[#019AA2] overflow-x-auto bl-scrollbar">
              <code>{steps[activeStep].mathOrCode}</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
