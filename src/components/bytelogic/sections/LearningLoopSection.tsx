'use client';

import React, { useState } from 'react';
import { Compass, Eye, Code2, PlayCircle, Network, ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { EquationBlock } from '@/components/bytelogic/ui/EquationBlock';

interface LoopStage {
  step: string;
  title: string;
  tagline: string;
  icon: React.ReactNode;
  input: string;
  operation: string;
  output: string;
  mathSnippet?: string;
  codeSnippet?: string;
  description: string;
  telemetry: string;
}

export const LearningLoopSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages: LoopStage[] = [
    {
      step: '01',
      title: 'UNDERSTAND',
      tagline: 'Objective & Analytical Formulation',
      icon: <Compass className="w-4 h-4 text-[#019AA2]" />,
      input: 'Continuous Observations & Invariants',
      operation: 'Variational calculus & cost formulation',
      output: 'Closed-form loss function (WCSS)',
      mathSnippet: 'J = \\sum_{k=1}^K \\sum_{x_i \\in S_k} \\|x_i - \\mu_k\\|^2',
      description:
        'Every concept begins with the exact problem statement. Deconstruct the objective function, identify mathematical invariants, and derive convergence boundaries before touching code.',
      telemetry: 'ANALYTICAL RIGOR // DERIVATION',
    },
    {
      step: '02',
      title: 'VISUALIZE',
      tagline: 'Spatial Geometry & Manifold Dynamics',
      icon: <Eye className="w-4 h-4 text-[#019AA2]" />,
      input: 'Abstract Loss Surface & Metric Space',
      operation: 'Dynamic Voronoi partitioning & vector projection',
      output: 'Geometric intuition of centroid velocity',
      mathSnippet: 'S_k^{(t)} = \\{ x_p : \\|x_p - \\mu_k^{(t)}\\|^2 \\le \\|x_p - \\mu_j^{(t)}\\|^2 \\ \\forall j \\}',
      description:
        'Equations become intuitive when rendered spatially. Observe how boundaries warp, gradients flow along manifolds, and optimization trajectories settle into local minima.',
      telemetry: 'COORDINATE PROJECTION // GEOMETRY',
    },
    {
      step: '03',
      title: 'IMPLEMENT',
      tagline: 'Zero-Abstraction Vectorized Primitives',
      icon: <Code2 className="w-4 h-4 text-[#019AA2]" />,
      input: 'Raw NumPy Multi-Dimensional Tensors',
      operation: 'Vectorized broadcasting without third-party frameworks',
      output: 'Production-ready numerical kernel',
      codeSnippet: `def lloyd_step(X, centroids):\n    # Pairwise squared Euclidean broadcast\n    dists = np.sum((X[:, None, :] - centroids[None, :, :])**2, axis=-1)\n    labels = np.argmin(dists, axis=-1)\n    new_centroids = np.array([X[labels == k].mean(axis=0) for k in range(len(centroids))])\n    return labels, new_centroids`,
      description:
        'Discard opaque library abstractions. Implement algorithms from bare mathematical equations using vectorized matrix operations to understand runtime and memory complexity.',
      telemetry: 'NUMPY PRIMITIVES // NO BLACK BOXES',
    },
    {
      step: '04',
      title: 'EXPERIMENT',
      tagline: 'Empirical Stress-Testing & Topologies',
      icon: <PlayCircle className="w-4 h-4 text-[#019AA2]" />,
      input: 'Non-Convex Topologies & Adversarial Noise',
      operation: 'Monte-Carlo parameter sweep & initialization trials',
      output: 'Empirical convergence rate & variance bounds',
      mathSnippet: 'P(x) = \\frac{D(x)^2}{\\sum_{x\' \\in X} D(x\')^2} \\quad \\text{[K-Means++]}',
      description:
        'Subject the algorithm to adversarial topologies: concentric rings, anisotropic stretches, and poor initializations. Experience firsthand why heuristics fail and principled techniques succeed.',
      telemetry: 'MONTE-CARLO STRESS // 100 ITERATIONS',
    },
    {
      step: '05',
      title: 'DISCOVER',
      tagline: 'Interconnected Knowledge Topology',
      icon: <Network className="w-4 h-4 text-[#019AA2]" />,
      input: 'Isolated Algorithmic Mechanism',
      operation: 'Graph theoretical mapping & topological unification',
      output: 'Synthesis with EM, GMM, and PCA',
      mathSnippet: '\\lim_{\\sigma^2 \\to 0} \\mathbb{E}[z_{ik}] = \\mathbb{I}\\left(k = \\arg\\min_j \\|x_i - \\mu_j\\|^2\\right)',
      description:
        'No algorithm exists in isolation. Connect K-Means to Expectation-Maximization, Gaussian Mixture Models with spherical covariance, and spectral projections in the global knowledge graph.',
      telemetry: 'GRAPH TOPOLOGY // UNIFIED THEORY',
    },
  ];

  const current = stages[activeStage];

  return (
    <section
      id="loop"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 border-t border-[#1C2830] relative z-10"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-8 sm:mb-12 border-b border-[#1C2830] text-xs font-mono">
        <div className="flex items-center gap-2 text-[#019AA2]">
          <span className="w-2 h-2 rounded-[2px] bg-[#019AA2]" />
          <span className="font-semibold tracking-wider">02 / HOW DOES IT TEACH?</span>
        </div>
        <div className="flex items-center gap-3 text-[#68747D] text-[11px]">
          <span>THE FIRST-PRINCIPLES ENGINE</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-[#A8B3BA]">CYCLE: 5 NODES</span>
        </div>
      </div>

      {/* Narrative Headline */}
      <div className="max-w-3xl mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-[#F3F6F7]">
          The 5-Stage First-Principles Loop
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#A8B3BA] leading-relaxed font-sans">
          Permanent technical mastery requires moving seamlessly between analytical derivation, geometric intuition, from-scratch coding, adversarial stress-testing, and graph synthesis.
        </p>
      </div>

      {/* Loop Progress Bar / Node Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 mb-8">
        {stages.map((stage, idx) => {
          const isActive = activeStage === idx;
          return (
            <button
              key={stage.step}
              onClick={() => setActiveStage(idx)}
              className={cn(
                'p-3 sm:p-4 rounded-[6px] border text-left font-mono transition-all duration-200 cursor-pointer min-h-[72px] flex flex-col justify-between group',
                isActive
                  ? 'bg-[#0E151B] border-[#019AA2] shadow-[0_0_15px_rgba(1,154,162,0.15)]'
                  : 'bg-[#0A0F14] border-[#1C2830] hover:border-[#1C2830]/80 hover:bg-[#0E151B]/50'
              )}
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    'text-[10px] sm:text-xs font-semibold px-1.5 py-0.5 rounded-[3px]',
                    isActive
                      ? 'bg-[#019AA2]/20 text-[#019AA2]'
                      : 'bg-[#131C24] text-[#68747D]'
                  )}
                >
                  {stage.step}
                </span>
                <span
                  className={cn(
                    'transition-colors',
                    isActive ? 'text-[#019AA2]' : 'text-[#68747D] group-hover:text-[#A8B3BA]'
                  )}
                >
                  {stage.icon}
                </span>
              </div>
              <div className="mt-2">
                <div
                  className={cn(
                    'text-xs font-bold font-sans tracking-tight truncate',
                    isActive ? 'text-[#F3F6F7]' : 'text-[#A8B3BA]'
                  )}
                >
                  {stage.title}
                </div>
                <div className="text-[10px] text-[#68747D] hidden sm:block truncate mt-0.5">
                  {stage.tagline.split(' ')[0]}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Stage Detail Visualizer */}
      <div className="rounded-[6px] bg-[#0E151B] border border-[#1C2830] p-5 sm:p-8 lg:p-10 bl-tick-box">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative & Pipeline Readout */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="px-2 py-0.5 rounded-[3px] bg-[#131C24] border border-[#1C2830] text-[#019AA2]">
                NODE {current.step} OF 05
              </span>
              <span className="text-[#68747D]">•</span>
              <span className="text-[#A8B3BA]">{current.telemetry}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-sans text-[#F3F6F7]">
              {current.title}: <span className="text-[#019AA2]">{current.tagline}</span>
            </h3>

            <p className="text-sm sm:text-base text-[#A8B3BA] leading-relaxed font-sans">
              {current.description}
            </p>

            {/* In/Out Micro Circuit */}
            <div className="pt-2 space-y-2 text-xs font-mono">
              <div className="p-3 rounded-[4px] bg-[#070B0E] border border-[#1C2830] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-[#68747D]">STAGE INPUT:</span>
                <span className="text-[#F3F6F7]">{current.input}</span>
              </div>
              <div className="p-3 rounded-[4px] bg-[#070B0E] border border-[#1C2830] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-[#68747D]">OPERATOR:</span>
                <span className="text-[#019AA2]">{current.operation}</span>
              </div>
              <div className="p-3 rounded-[4px] bg-[#070B0E] border border-[#1C2830] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-[#68747D]">OUTPUT ARTIFACT:</span>
                <span className="text-[#F3F6F7] font-semibold">{current.output}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Code or Math Artifact */}
          <div className="lg:col-span-6">
            <div className="rounded-[6px] bg-[#070B0E] border border-[#1C2830] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0A0F14] border-b border-[#1C2830] text-xs font-mono">
                <span className="text-[#68747D]">
                  {current.codeSnippet ? 'KERNEL PRIMITIVE // PYTHON' : 'MATHEMATICAL SPECIFICATION'}
                </span>
                <span className="text-[#019AA2] text-[10px]">VERIFIED</span>
              </div>

              <div className="p-4 sm:p-6 overflow-x-auto bl-scrollbar">
                {current.mathSnippet && (
                  <div className="py-2">
                    <EquationBlock
                      math={current.mathSnippet}
                      label={current.title}
                      title={current.tagline}
                    />
                  </div>
                )}

                {current.codeSnippet && (
                  <pre className="font-mono text-xs sm:text-[13px] text-[#A8B3BA] leading-relaxed whitespace-pre overflow-x-auto">
                    <code>{current.codeSnippet}</code>
                  </pre>
                )}
              </div>
            </div>

            {/* Quick Navigation Footer inside Card */}
            <div className="mt-4 flex items-center justify-between text-xs font-mono">
              <button
                disabled={activeStage === 0}
                onClick={() => setActiveStage((p) => Math.max(0, p - 1))}
                className="px-3 py-1.5 rounded-[4px] border border-[#1C2830] bg-[#0A0F14] text-[#A8B3BA] hover:text-[#F3F6F7] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                ← Previous Stage
              </button>

              <span className="text-[#68747D]">
                {activeStage + 1} / {stages.length}
              </span>

              <button
                disabled={activeStage === stages.length - 1}
                onClick={() => setActiveStage((p) => Math.min(stages.length - 1, p + 1))}
                className="px-3 py-1.5 rounded-[4px] border border-[#019AA2]/40 bg-[#019AA2]/10 text-[#019AA2] hover:bg-[#019AA2]/20 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next Stage →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
