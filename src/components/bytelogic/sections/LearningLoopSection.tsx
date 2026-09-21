'use client';

import React, { useState, useEffect } from 'react';
import {
  Compass,
  Eye,
  Code2,
  PlayCircle,
  Network,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { EquationBlock } from '@/components/bytelogic/ui/EquationBlock';

interface LoopStage {
  step: string;
  category: string;
  title: string;
  tagline: string;
  icon: React.ElementType;
  input: string;
  operation: string;
  output: string;
  mathSnippet?: string;
  description: string;
  color: string;
  accentClass: string;
}

export const LearningLoopSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [copied, setCopied] = useState(false);

  // Keyboard navigation: 1-5 and Arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key === 'ArrowRight') {
        setActiveStage((p) => Math.min(4, p + 1));
      } else if (e.key === 'ArrowLeft') {
        setActiveStage((p) => Math.max(0, p - 1));
      } else if (['1', '2', '3', '4', '5'].includes(e.key)) {
        setActiveStage(parseInt(e.key, 10) - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const stages: LoopStage[] = [
    {
      step: '01',
      category: 'Derivation',
      title: 'Understand',
      tagline: 'Objective & Analytical Formulation',
      icon: Compass,
      input: 'Continuous Observations & Invariants (X ∈ ℝ^(N×D))',
      operation: 'Variational calculus & cost formulation',
      output: 'Closed-form loss function (WCSS objective J)',
      mathSnippet: 'J = \\sum_{k=1}^K \\sum_{x_i \\in S_k} \\|x_i - \\mu_k\\|^2',
      description:
        'Every concept begins with the exact problem statement. Deconstruct the objective function, identify mathematical invariants, and derive convergence boundaries before touching code.',
      color: '#019AA2',
      accentClass: 'text-[#019AA2]',
    },
    {
      step: '02',
      category: 'Geometry',
      title: 'Visualize',
      tagline: 'Spatial Geometry & Manifold Dynamics',
      icon: Eye,
      input: 'Abstract Loss Surface & Metric Space (L2 Euclidean)',
      operation: 'Dynamic Voronoi partitioning & vector projection',
      output: 'Geometric intuition of centroid velocity field',
      mathSnippet:
        'S_k^{(t)} = \\{ x_p : \\|x_p - \\mu_k^{(t)}\\|^2 \\le \\|x_p - \\mu_j^{(t)}\\|^2 \\ \\forall j \\}',
      description:
        'Equations become intuitive when rendered spatially. Observe how boundaries warp, gradients flow along manifolds, and optimization trajectories settle into local minima.',
      color: '#019AA2',
      accentClass: 'text-[#019AA2]',
    },
    {
      step: '03',
      category: 'Implementation',
      title: 'Implement',
      tagline: 'Zero-Abstraction Vectorized Primitives',
      icon: Code2,
      input: 'Raw NumPy Multi-Dimensional Tensors (X, C)',
      operation: 'Vectorized broadcasting without third-party frameworks',
      output: 'Production-ready numerical kernel (O(N·K·D))',
      description:
        'Discard opaque library abstractions. Implement algorithms from bare mathematical equations using vectorized matrix operations to understand runtime and memory complexity.',
      color: '#C4703F',
      accentClass: 'text-[#C4703F]',
    },
    {
      step: '04',
      category: 'Experimentation',
      title: 'Experiment',
      tagline: 'Empirical Stress-Testing & Topologies',
      icon: PlayCircle,
      input: 'Non-Convex Topologies & Adversarial Noise',
      operation: 'Monte-Carlo parameter sweep & initialization trials',
      output: 'Empirical convergence rate & variance bounds',
      mathSnippet:
        "P(x) = \\frac{D(x)^2}{\\sum_{x' \\in X} D(x')^2} \\quad \\text{[K-Means++]}",
      description:
        'Subject the algorithm to adversarial topologies: concentric rings, anisotropic stretches, and poor initializations. Experience firsthand why heuristics fail and principled techniques succeed.',
      color: '#C4703F',
      accentClass: 'text-[#C4703F]',
    },
    {
      step: '05',
      category: 'Synthesis',
      title: 'Discover',
      tagline: 'Interconnected Knowledge Topology',
      icon: Network,
      input: 'Isolated Algorithmic Mechanism',
      operation: 'Graph theoretical mapping & topological unification',
      output: 'Synthesis with EM, GMM, and PCA',
      mathSnippet:
        '\\lim_{\\sigma^2 \\to 0} \\mathbb{E}[z_{ik}] = \\mathbb{I}\\left(k = \\arg\\min_j \\|x_i - \\mu_j\\|^2\\right)',
      description:
        'No algorithm exists in isolation. Connect K-Means to Expectation-Maximization, Gaussian Mixture Models with spherical covariance, and spectral projections in the global knowledge graph.',
      color: '#019AA2',
      accentClass: 'text-[#019AA2]',
    },
  ];

  const current = stages[activeStage];
  const CurrentIcon = current.icon;

  const handleCopyCode = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const codeString = `def lloyd_expectation_maximization(X, K, max_iter=100):
    # 1. Pairwise squared Euclidean broadcast: (N, 1, D) - (1, K, D)
    dists = np.sum((X[:, None, :] - centroids[None, :, :]) ** 2, axis=-1)
    labels = np.argmin(dists, axis=-1)  # Voronoi partition assignment
    
    # 2. Vectorized center-of-mass recomputation
    new_centroids = np.array([X[labels == k].mean(axis=0) for k in range(K)])
    return labels, new_centroids`;

  return (
    <section
      id="loop"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative z-10"
    >
      {/* ================================================================
          Section Header — Editorial style, not terminal metadata
          ================================================================ */}
      <div className="relative mb-16 sm:mb-20">
        {/* Oversized decorative number */}
        <div className="bl-stage-number-deco absolute -top-6 -left-2 sm:-left-4 select-none" aria-hidden="true">
          02
        </div>
        <div className="relative">
          <p className="text-sm sm:text-base font-sans text-[#C4703F] font-medium tracking-wide mb-3">
            How it teaches
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold font-sans tracking-tight text-[#F3F6F7] leading-[1.1]">
            The First-Principles Loop
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A8B3BA]/80 leading-relaxed font-sans max-w-2xl">
            Five stages, one cycle. Derive the math, see it spatially,
            build it from nothing, break it on purpose, then connect it to everything else.
          </p>
        </div>
      </div>

      {/* ================================================================
          Stage Stepper — Clean tabs with left-bar accent
          ================================================================ */}
      <div className="mb-10 sm:mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
          {stages.map((stage, idx) => {
            const isActive = activeStage === idx;
            const StageIcon = stage.icon;

            return (
              <button
                key={stage.step}
                onClick={() => setActiveStage(idx)}
                className={cn(
                  'bl-editorial-bar-left pl-4 pr-3 py-3.5 sm:py-4 text-left transition-all duration-200 cursor-pointer rounded-r-md group',
                  isActive
                    ? 'bg-[#0A0F14]'
                    : 'hover:bg-[#0A0F14]/50'
                )}
                data-active={isActive}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={cn(
                      'text-2xl sm:text-3xl font-sans font-extralight tabular-nums transition-colors',
                      isActive ? stage.accentClass : 'text-[#68747D]/60'
                    )}
                  >
                    {stage.step}
                  </span>
                  <StageIcon
                    className={cn(
                      'w-4 h-4 transition-colors',
                      isActive ? stage.accentClass : 'text-[#68747D]/40 group-hover:text-[#68747D]'
                    )}
                  />
                </div>
                <div
                  className={cn(
                    'text-sm font-sans font-semibold transition-colors leading-tight',
                    isActive ? 'text-[#F3F6F7]' : 'text-[#A8B3BA]/70 group-hover:text-[#A8B3BA]'
                  )}
                >
                  {stage.title}
                </div>
                <div
                  className={cn(
                    'text-[11px] font-sans mt-0.5 transition-colors',
                    isActive ? 'text-[#A8B3BA]' : 'text-[#68747D]/50'
                  )}
                >
                  {stage.category}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ================================================================
          Main Content Panel — Clean card, no terminal cosplay
          ================================================================ */}
      <div className="rounded-xl bg-[#0A0F14]/80 overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
        {/* Minimal top accent line — color follows active stage */}
        <div
          className="h-[2px] transition-colors duration-500"
          style={{ background: `linear-gradient(90deg, ${current.color}, transparent)` }}
        />

        {/* Interior: Asymmetric 2-column layout */}
        <div className="p-6 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* ──────────────────────────────────────────────────
              Left Column — 5 of 12 cols: stage identity + dataflow
              ────────────────────────────────────────────────── */}
          <div className="lg:col-span-5 space-y-8">
            {/* Stage Identity */}
            <div>
              {/* Large decorative number + title */}
              <div className="flex items-baseline gap-4 mb-3">
                <span
                  className="text-5xl sm:text-6xl font-sans font-extralight tabular-nums leading-none"
                  style={{ color: current.color }}
                >
                  {current.step}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#F3F6F7] tracking-tight leading-tight">
                    {current.title}
                  </h3>
                  <p className="text-sm font-sans mt-0.5" style={{ color: current.color }}>
                    {current.tagline}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-[15px] text-[#A8B3BA]/90 leading-relaxed font-sans">
                {current.description}
              </p>
            </div>

            {/* Dataflow — clean vertical list with dot markers */}
            <div className="bl-dataflow-connector space-y-5">
              {/* Input */}
              <div className="bl-dataflow-dot text-[#A8B3BA]">
                <div className="text-[11px] font-sans font-medium text-[#68747D] uppercase tracking-wide">
                  Input
                </div>
                <div className="text-sm font-sans text-[#F3F6F7] mt-0.5 leading-snug">
                  {current.input}
                </div>
              </div>

              {/* Transform */}
              <div className="bl-dataflow-dot" style={{ color: current.color }}>
                <div className="text-[11px] font-sans font-medium uppercase tracking-wide" style={{ color: current.color }}>
                  Transform
                </div>
                <div className="text-sm font-sans mt-0.5 leading-snug" style={{ color: current.color }}>
                  {current.operation}
                </div>
              </div>

              {/* Output */}
              <div className="bl-dataflow-dot text-[#C4703F]">
                <div className="text-[11px] font-sans font-medium text-[#C4703F]/70 uppercase tracking-wide">
                  Output
                </div>
                <div className="text-sm font-sans text-[#F3F6F7] mt-0.5 leading-snug">
                  {current.output}
                </div>
              </div>
            </div>
          </div>

          {/* ──────────────────────────────────────────────────
              Right Column — 7 of 12 cols: bespoke exhibit per stage
              ────────────────────────────────────────────────── */}
          <div className="lg:col-span-7">
            <div className="rounded-lg bg-[#070B0E] overflow-hidden min-h-[340px] flex flex-col">
              {/* Exhibit content — no window chrome, content speaks */}
              <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between">
                {/* ─── EXHIBIT 01: Mathematical Derivation ─── */}
                {activeStage === 0 && (
                  <div className="space-y-6">
                    {/* Main equation — clean, centered, prominent */}
                    <div className="py-6 sm:py-8">
                      <div className="text-[11px] font-sans text-[#68747D] mb-3 uppercase tracking-wide">
                        Objective Function — WCSS
                      </div>
                      <EquationBlock
                        math="J = \sum_{k=1}^K \sum_{x_i \in S_k} \|x_i - \mu_k\|^2"
                        className="my-0 border-0 bg-transparent p-0"
                      />
                    </div>

                    {/* Parameter definitions — minimal, two-column, no boxes */}
                    <div className="space-y-3">
                      <div className="text-[11px] font-sans text-[#68747D] uppercase tracking-wide">
                        Parameters
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                        <div>
                          <span className="font-mono text-[#019AA2]">x_i ∈ ℝ^D</span>
                          <span className="text-[#68747D] mx-2">—</span>
                          <span className="text-[#A8B3BA] font-sans text-[13px]">
                            Feature vector in D-dimensional space
                          </span>
                        </div>
                        <div>
                          <span className="font-mono text-[#019AA2]">μ_k ∈ ℝ^D</span>
                          <span className="text-[#68747D] mx-2">—</span>
                          <span className="text-[#A8B3BA] font-sans text-[13px]">
                            Centroid for cluster partition k
                          </span>
                        </div>
                        <div>
                          <span className="font-mono text-[#C4703F]">S_k ⊂ X</span>
                          <span className="text-[#68747D] mx-2">—</span>
                          <span className="text-[#A8B3BA] font-sans text-[13px]">
                            Points assigned to centroid k
                          </span>
                        </div>
                        <div>
                          <span className="font-mono text-[#F3F6F7]">||·||²</span>
                          <span className="text-[#68747D] mx-2">—</span>
                          <span className="text-[#A8B3BA] font-sans text-[13px]">
                            Squared L2 norm (dispersion)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Convergence note — inline, not a separate bar */}
                    <p className="text-[13px] font-sans text-[#A8B3BA]/60 italic border-l-2 border-[#019AA2]/30 pl-3">
                      The objective is monotonically non-increasing: J^(t+1) ≤ J^(t), guaranteeing convergence.
                    </p>
                  </div>
                )}

                {/* ─── EXHIBIT 02: Voronoi Geometry ─── */}
                {activeStage === 1 && (
                  <div className="space-y-4">
                    <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] rounded-lg bg-[#0A0F14] overflow-hidden p-2">
                      <svg viewBox="0 0 320 160" className="w-full h-full select-none font-mono">
                        {/* Background Coordinate Grid */}
                        <g opacity="0.07" stroke="#A8B3BA" strokeDasharray="3 3">
                          <line x1="0" y1="40" x2="320" y2="40" />
                          <line x1="0" y1="80" x2="320" y2="80" />
                          <line x1="0" y1="120" x2="320" y2="120" />
                          <line x1="80" y1="0" x2="80" y2="160" />
                          <line x1="160" y1="0" x2="160" y2="160" />
                          <line x1="240" y1="0" x2="240" y2="160" />
                        </g>

                        {/* Voronoi Partition Regions */}
                        <path d="M 0 0 L 140 0 L 160 85 L 0 110 Z" fill="#019AA2" fillOpacity="0.06" />
                        <path d="M 140 0 L 320 0 L 320 95 L 160 85 Z" fill="#A8B3BA" fillOpacity="0.04" />
                        <path d="M 0 110 L 160 85 L 320 95 L 320 160 L 0 160 Z" fill="#C4703F" fillOpacity="0.06" />

                        {/* Voronoi Boundary Lines */}
                        <line x1="140" y1="0" x2="160" y2="85" stroke="#019AA2" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                        <line x1="0" y1="110" x2="160" y2="85" stroke="#019AA2" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                        <line x1="160" y1="85" x2="320" y2="95" stroke="#A8B3BA" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />

                        {/* Cluster 1 Points (Teal) */}
                        <g fill="#019AA2">
                          <circle cx="50" cy="40" r="2.5" opacity="0.7" />
                          <circle cx="70" cy="55" r="2.5" opacity="0.7" />
                          <circle cx="45" cy="70" r="2.5" opacity="0.7" />
                          <circle cx="85" cy="35" r="2.5" opacity="0.7" />
                          <circle cx="100" cy="65" r="2.5" opacity="0.7" />
                        </g>

                        {/* Cluster 2 Points (Silver) */}
                        <g fill="#A8B3BA">
                          <circle cx="210" cy="30" r="2.5" opacity="0.7" />
                          <circle cx="250" cy="45" r="2.5" opacity="0.7" />
                          <circle cx="270" cy="30" r="2.5" opacity="0.7" />
                          <circle cx="225" cy="60" r="2.5" opacity="0.7" />
                          <circle cx="280" cy="65" r="2.5" opacity="0.7" />
                        </g>

                        {/* Cluster 3 Points (Warm) */}
                        <g fill="#C4703F">
                          <circle cx="90" cy="130" r="2.5" opacity="0.7" />
                          <circle cx="140" cy="135" r="2.5" opacity="0.7" />
                          <circle cx="170" cy="140" r="2.5" opacity="0.7" />
                          <circle cx="210" cy="125" r="2.5" opacity="0.7" />
                          <circle cx="240" cy="135" r="2.5" opacity="0.7" />
                        </g>

                        {/* Centroids μ_k with Halos and Velocity Arrows */}
                        {/* Centroid 1 */}
                        <circle cx="68" cy="50" r="6" fill="#019AA2" fillOpacity="0.2" stroke="#019AA2" strokeWidth="1" />
                        <circle cx="68" cy="50" r="2" fill="#F3F6F7" />
                        <line x1="68" y1="50" x2="80" y2="44" stroke="#019AA2" strokeWidth="1.5" />
                        <text x="60" y="38" fill="#019AA2" fontSize="8" fontWeight="600" fontFamily="var(--font-inter)">μ₁</text>

                        {/* Centroid 2 */}
                        <circle cx="245" cy="42" r="6" fill="#A8B3BA" fillOpacity="0.2" stroke="#A8B3BA" strokeWidth="1" />
                        <circle cx="245" cy="42" r="2" fill="#F3F6F7" />
                        <line x1="245" y1="42" x2="235" y2="48" stroke="#A8B3BA" strokeWidth="1.5" />
                        <text x="250" y="38" fill="#A8B3BA" fontSize="8" fontWeight="600" fontFamily="var(--font-inter)">μ₂</text>

                        {/* Centroid 3 */}
                        <circle cx="160" cy="132" r="6" fill="#C4703F" fillOpacity="0.2" stroke="#C4703F" strokeWidth="1" />
                        <circle cx="160" cy="132" r="2" fill="#F3F6F7" />
                        <line x1="160" y1="132" x2="165" y2="124" stroke="#C4703F" strokeWidth="1.5" />
                        <text x="168" y="145" fill="#C4703F" fontSize="8" fontWeight="600" fontFamily="var(--font-inter)">μ₃</text>
                      </svg>
                    </div>

                    <p className="text-[13px] font-sans text-[#A8B3BA]/60 italic border-l-2 border-[#019AA2]/30 pl-3">
                      Voronoi cells partition the space around each centroid. As centroids drift,
                      boundaries warp and points reassign — the geometric heartbeat of Lloyd&apos;s algorithm.
                    </p>
                  </div>
                )}

                {/* ─── EXHIBIT 03: Vectorized Code ─── */}
                {activeStage === 2 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-sans text-[#68747D] uppercase tracking-wide">
                        Pure NumPy — no frameworks
                      </span>
                      <button
                        onClick={() => handleCopyCode(codeString)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[#A8B3BA] hover:text-[#C4703F] transition-colors cursor-pointer text-[11px] font-sans"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3 h-3 text-[#C4703F]" />
                            <span className="text-[#C4703F]">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="p-4 sm:p-5 rounded-lg bg-[#05070A] font-mono text-xs sm:text-[13px] text-[#A8B3BA] overflow-x-auto bl-scrollbar leading-relaxed">
                      <pre>
                        <code>
                          <span className="text-[#68747D]"># 1. Pairwise squared Euclidean broadcast: (N, 1, D) - (1, K, D)</span>{'\n'}
                          <span className="text-[#019AA2]">dists</span> = np.sum((X[:, <span className="text-[#C4703F]">None</span>, :] - centroids[<span className="text-[#C4703F]">None</span>, :, :]) ** <span className="text-[#C4703F]">2</span>, axis=-<span className="text-[#C4703F]">1</span>){'\n'}
                          <span className="text-[#019AA2]">labels</span> = np.argmin(dists, axis=-<span className="text-[#C4703F]">1</span>)  <span className="text-[#68747D]"># Voronoi assignment</span>{'\n\n'}
                          <span className="text-[#68747D]"># 2. Vectorized center-of-mass recomputation</span>{'\n'}
                          <span className="text-[#019AA2]">new_centroids</span> = np.array([X[labels == k].mean(axis=<span className="text-[#C4703F]">0</span>) for k in range(K)]){'\n'}
                          <span className="text-[#C4703F]">return</span> labels, new_centroids
                        </code>
                      </pre>
                    </div>

                    {/* Simple inline stats, not a 3-column grid of boxed cards */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] font-sans text-[#68747D]">
                      <span>Complexity: <span className="text-[#F3F6F7] font-medium">O(N·K·D)</span></span>
                      <span>Dependencies: <span className="text-[#019AA2] font-medium">None</span></span>
                      <span>Speedup: <span className="text-[#C4703F] font-medium">42× vs loops</span></span>
                    </div>
                  </div>
                )}

                {/* ─── EXHIBIT 04: Adversarial Stress Testing ─── */}
                {activeStage === 3 && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Test 1: Concentric failure */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm font-sans">
                          <span className="text-[#C4703F] font-semibold">Concentric Rings</span>
                          <span className="text-[#68747D] text-xs">fails</span>
                        </div>
                        <div className="h-20 flex items-center justify-center">
                          <svg viewBox="0 0 100 60" className="h-full">
                            <circle cx="50" cy="30" r="12" fill="none" stroke="#C4703F" strokeWidth="1.5" strokeDasharray="2 2" />
                            <circle cx="50" cy="30" r="26" fill="none" stroke="#C4703F" strokeWidth="1.5" opacity="0.7" />
                          </svg>
                        </div>
                        <p className="text-[12px] text-[#A8B3BA]/60 font-sans leading-relaxed">
                          Linear hyperplanes can&apos;t separate non-convex nested ring manifolds.
                        </p>
                      </div>

                      {/* Test 2: K-Means++ success */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm font-sans">
                          <span className="text-[#019AA2] font-semibold">K-Means++ Init</span>
                          <span className="text-[#019AA2] text-xs font-medium">99.4% optimal</span>
                        </div>
                        <div className="h-20 flex items-center justify-center">
                          <svg viewBox="0 0 120 50" className="w-full h-full">
                            <path d="M 10 45 Q 30 15, 60 10 T 110 8" fill="none" stroke="#019AA2" strokeWidth="1.5" />
                            <path d="M 10 45 Q 40 40, 70 30 T 110 25" fill="none" stroke="#68747D" strokeWidth="1" strokeDasharray="3 3" />
                            <text x="113" y="10" fill="#019AA2" fontSize="7" fontFamily="var(--font-inter)">k++</text>
                            <text x="113" y="27" fill="#68747D" fontSize="7" fontFamily="var(--font-inter)">rand</text>
                          </svg>
                        </div>
                        <p className="text-[12px] text-[#A8B3BA]/60 font-sans leading-relaxed">
                          D(x)² probability spreading prevents degenerate centroid collisions.
                        </p>
                      </div>
                    </div>

                    <p className="text-[13px] font-sans text-[#A8B3BA]/60 italic border-l-2 border-[#C4703F]/30 pl-3">
                      Variance reduction follows an O(log K) competitive bound with proper initialization.
                    </p>
                  </div>
                )}

                {/* ─── EXHIBIT 05: Knowledge Graph ─── */}
                {activeStage === 4 && (
                  <div className="space-y-5">
                    <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] rounded-lg bg-[#0A0F14] overflow-hidden p-3">
                      <svg viewBox="0 0 320 150" className="w-full h-full select-none">
                        {/* Connecting Graph Edges */}
                        <line x1="160" y1="75" x2="60" y2="40" stroke="#019AA2" strokeWidth="1" opacity="0.5" />
                        <line x1="160" y1="75" x2="260" y2="40" stroke="#A8B3BA" strokeWidth="1" opacity="0.5" />
                        <line x1="160" y1="75" x2="160" y2="130" stroke="#C4703F" strokeWidth="1" opacity="0.5" />

                        {/* Edge labels */}
                        <text x="100" y="50" fill="#68747D" fontSize="7" fontFamily="var(--font-inter)">Hard E-step</text>
                        <text x="210" y="50" fill="#68747D" fontSize="7" fontFamily="var(--font-inter)">σ² → 0</text>
                        <text x="168" y="108" fill="#68747D" fontSize="7" fontFamily="var(--font-inter)">Subspace</text>

                        {/* Center Node: K-Means */}
                        <circle cx="160" cy="75" r="22" fill="#0E151B" stroke="#019AA2" strokeWidth="1.5" />
                        <text x="160" y="73" fill="#F3F6F7" fontSize="8" textAnchor="middle" fontWeight="700" fontFamily="var(--font-inter)">
                          K-Means
                        </text>
                        <text x="160" y="82" fill="#68747D" fontSize="6" textAnchor="middle" fontFamily="var(--font-inter)">
                          Lloyd&apos;s
                        </text>

                        {/* Node: EM */}
                        <circle cx="60" cy="40" r="18" fill="#0E151B" stroke="#019AA2" strokeWidth="1" />
                        <text x="60" y="43" fill="#019AA2" fontSize="8" textAnchor="middle" fontFamily="var(--font-inter)">
                          EM
                        </text>

                        {/* Node: GMM */}
                        <circle cx="260" cy="40" r="18" fill="#0E151B" stroke="#A8B3BA" strokeWidth="1" />
                        <text x="260" y="43" fill="#A8B3BA" fontSize="8" textAnchor="middle" fontFamily="var(--font-inter)">
                          GMM
                        </text>

                        {/* Node: PCA */}
                        <circle cx="160" cy="130" r="16" fill="#0E151B" stroke="#C4703F" strokeWidth="1" />
                        <text x="160" y="133" fill="#C4703F" fontSize="8" textAnchor="middle" fontFamily="var(--font-inter)">
                          PCA
                        </text>
                      </svg>
                    </div>

                    <p className="text-[13px] sm:text-sm font-sans text-[#A8B3BA]/80 leading-relaxed">
                      K-Means is the exact asymptotic limit of Expectation-Maximization on Gaussian
                      Mixture Models as covariance approaches zero isotropic variance — not an
                      ad-hoc clustering heuristic, but a principled special case.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation — simple, understated */}
            <div className="mt-6 flex items-center justify-between">
              <button
                disabled={activeStage === 0}
                onClick={() => setActiveStage((p) => Math.max(0, p - 1))}
                className="px-3 py-2 text-sm font-sans text-[#68747D] hover:text-[#F3F6F7] disabled:opacity-25 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous</span>
              </button>

              <div className="flex items-center gap-2">
                {stages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStage(i)}
                    aria-label={`Stage ${i + 1}`}
                    className={cn(
                      'h-1.5 rounded-full transition-all cursor-pointer',
                      activeStage === i
                        ? 'w-8'
                        : 'w-1.5 bg-[#1C2830] hover:bg-[#68747D]'
                    )}
                    style={activeStage === i ? { background: current.color } : undefined}
                  />
                ))}
              </div>

              <button
                disabled={activeStage === stages.length - 1}
                onClick={() => setActiveStage((p) => Math.min(stages.length - 1, p + 1))}
                className="px-3 py-2 text-sm font-sans font-medium hover:text-[#F3F6F7] disabled:opacity-25 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5 cursor-pointer"
                style={{ color: current.color }}
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
