'use client';

import React, { useState, useEffect } from 'react';
import {
  Compass,
  Eye,
  Code2,
  PlayCircle,
  Network,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  Sparkles,
  Layers,
  Activity,
  Zap,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { EquationBlock } from '@/components/bytelogic/ui/EquationBlock';

interface LoopStage {
  step: string;
  category: string;
  title: string;
  tagline: string;
  icon: React.ReactNode;
  input: string;
  operation: string;
  output: string;
  mathSnippet?: string;
  description: string;
  telemetry: string;
  color: string;
  gradient: string;
}

export const LearningLoopSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [copied, setCopied] = useState(false);

  // Keyboard navigation: 1-5 and Arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid triggering when user is typing in an input
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
      category: 'DERIVATION',
      title: 'UNDERSTAND',
      tagline: 'Objective & Analytical Formulation',
      icon: <Compass className="w-4 h-4 text-[#019AA2]" />,
      input: 'Continuous Observations & Invariants (X ∈ ℝ^(N×D))',
      operation: 'Variational calculus & cost formulation',
      output: 'Closed-form loss function (WCSS objective J)',
      mathSnippet: 'J = \\sum_{k=1}^K \\sum_{x_i \\in S_k} \\|x_i - \\mu_k\\|^2',
      description:
        'Every concept begins with the exact problem statement. Deconstruct the objective function, identify mathematical invariants, and derive convergence boundaries before touching code.',
      telemetry: 'ANALYTICAL RIGOR // DERIVATION',
      color: '#019AA2',
      gradient: 'from-[#019AA2] to-[#01868D]',
    },
    {
      step: '02',
      category: 'GEOMETRY',
      title: 'VISUALIZE',
      tagline: 'Spatial Geometry & Manifold Dynamics',
      icon: <Eye className="w-4 h-4 text-[#019AA2]" />,
      input: 'Abstract Loss Surface & Metric Space (L2 Euclidean)',
      operation: 'Dynamic Voronoi partitioning & vector projection',
      output: 'Geometric intuition of centroid velocity field',
      mathSnippet: 'S_k^{(t)} = \\{ x_p : \\|x_p - \\mu_k^{(t)}\\|^2 \\le \\|x_p - \\mu_j^{(t)}\\|^2 \\ \\forall j \\}',
      description:
        'Equations become intuitive when rendered spatially. Observe how boundaries warp, gradients flow along manifolds, and optimization trajectories settle into local minima.',
      telemetry: 'COORDINATE PROJECTION // GEOMETRY',
      color: '#019AA2',
      gradient: 'from-[#019AA2] to-[#A8B3BA]',
    },
    {
      step: '03',
      category: 'VECTORIZED',
      title: 'IMPLEMENT',
      tagline: 'Zero-Abstraction Vectorized Primitives',
      icon: <Code2 className="w-4 h-4 text-[#d4af37]" />,
      input: 'Raw NumPy Multi-Dimensional Tensors (X, C)',
      operation: 'Vectorized broadcasting without third-party frameworks',
      output: 'Production-ready numerical kernel (O(N·K·D))',
      description:
        'Discard opaque library abstractions. Implement algorithms from bare mathematical equations using vectorized matrix operations to understand runtime and memory complexity.',
      telemetry: 'NUMPY PRIMITIVES // NO BLACK BOXES',
      color: '#d4af37',
      gradient: 'from-[#d4af37] to-[#A8B3BA]',
    },
    {
      step: '04',
      category: 'STRESS TEST',
      title: 'EXPERIMENT',
      tagline: 'Empirical Stress-Testing & Topologies',
      icon: <PlayCircle className="w-4 h-4 text-[#d4af37]" />,
      input: 'Non-Convex Topologies & Adversarial Noise',
      operation: 'Monte-Carlo parameter sweep & initialization trials',
      output: 'Empirical convergence rate & variance bounds',
      mathSnippet: 'P(x) = \\frac{D(x)^2}{\\sum_{x\' \\in X} D(x\')^2} \\quad \\text{[K-Means++]}',
      description:
        'Subject the algorithm to adversarial topologies: concentric rings, anisotropic stretches, and poor initializations. Experience firsthand why heuristics fail and principled techniques succeed.',
      telemetry: 'MONTE-CARLO STRESS // 100 ITERATIONS',
      color: '#d4af37',
      gradient: 'from-[#d4af37] to-[#019AA2]',
    },
    {
      step: '05',
      category: 'TOPOLOGY',
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
      color: '#019AA2',
      gradient: 'from-[#019AA2] to-[#1C2830]',
    },
  ];

  const current = stages[activeStage];

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
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 border-t border-[#1C2830] relative z-10"
    >
      {/* 1. Header with Metadata */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-8 sm:mb-12 border-b border-[#1C2830] text-xs font-mono">
        <div className="flex items-center gap-2 text-[#019AA2]">
          <span className="w-2 h-2 rounded-[2px] bg-[#019AA2]" />
          <span className="font-semibold tracking-wider">02 / HOW DOES IT TEACH?</span>
        </div>
        <div className="flex items-center gap-3 text-[#68747D] text-[11px]">
          <span className="text-[#A8B3BA] flex items-center gap-1.5">
            <Activity className="w-3 h-3 text-[#019AA2]" />
            THE FIRST-PRINCIPLES ENGINE
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="text-[#019AA2]">CYCLE: 5 CONTINUOUS NODES</span>
        </div>
      </div>

      {/* 2. Narrative Headline & Subtitle */}
      <div className="max-w-3xl mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-[#F3F6F7] leading-[1.14]">
          The 5-Stage First-Principles Loop
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#A8B3BA] leading-relaxed font-sans">
          Permanent technical mastery requires moving seamlessly between analytical derivation,
          geometric intuition, from-scratch coding, adversarial stress-testing, and graph synthesis.
        </p>
      </div>

      {/* 3. The Interactive Cybernetic Pipeline Stepper */}
      <div className="relative mb-8 sm:mb-10">
        {/* Background Interconnected Signal Bus Line (Desktop) */}
        <div className="hidden sm:block absolute top-1/2 left-[5%] right-[5%] -translate-y-1/2 h-[2px] bg-[#1C2830] -z-10">
          <div
            className="h-full bg-[#019AA2] transition-all duration-500"
            style={{ width: `${(activeStage / 4) * 100}%` }}
          />
        </div>

        {/* 5 Connected Node Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
          {stages.map((stage, idx) => {
            const isActive = activeStage === idx;
            const isCompleted = idx < activeStage;

            return (
              <button
                key={stage.step}
                onClick={() => setActiveStage(idx)}
                className={cn(
                  'p-3.5 sm:p-4 rounded-[8px] border text-left font-mono transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden',
                  isActive
                    ? 'bg-[#0E151B] border-[#019AA2] -translate-y-1'
                    : isCompleted
                    ? 'bg-[#0A0F14] border-[#019AA2]/40 hover:border-[#019AA2]/80 hover:bg-[#0E151B]'
                    : 'bg-[#0A0F14] border-[#1C2830] hover:border-[#A8B3BA]/40 hover:bg-[#0E151B]/60'
                )}
              >
                {/* Active Top Accent Hairline */}
                {isActive && (
                  <div
                    className={cn(
                      'absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r',
                      stage.gradient
                    )}
                  />
                )}

                {/* Node Top Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={cn(
                        'text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-[3px] transition-colors',
                        isActive
                          ? 'bg-[#019AA2] text-[#05070A]'
                          : isCompleted
                          ? 'bg-[#019AA2]/20 text-[#019AA2]'
                          : 'bg-[#131C24] text-[#68747D]'
                      )}
                    >
                      {stage.step}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#019AA2]" />
                    )}
                  </div>

                  <div
                    className={cn(
                      'p-1.5 rounded-[4px] border transition-all duration-200',
                      isActive
                        ? 'bg-[#019AA2]/15 border-[#019AA2]/50 text-[#019AA2]'
                        : 'bg-[#070B0E] border-[#1C2830] text-[#68747D] group-hover:text-[#A8B3BA]'
                    )}
                  >
                    {stage.icon}
                  </div>
                </div>

                {/* Node Title & Subtitle */}
                <div className="mt-3.5">
                  <div
                    className={cn(
                      'text-xs sm:text-sm font-bold font-sans tracking-tight truncate',
                      isActive ? 'text-[#F3F6F7]' : 'text-[#A8B3BA] group-hover:text-[#F3F6F7]'
                    )}
                  >
                    {stage.title}
                  </div>
                  <div
                    className={cn(
                      'text-[9.5px] font-mono tracking-wider uppercase mt-0.5 truncate',
                      isActive ? 'text-[#019AA2]' : 'text-[#68747D]'
                    )}
                  >
                    {stage.category}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Main Console: The First-Principles Engine */}
      <div className="rounded-[10px] bg-[#0A0F14] border border-[#1C2830] overflow-hidden bl-tick-box shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
        {/* Terminal Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-[#070B0E] border-b border-[#1C2830] text-xs font-mono">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80" />
            </div>
            <span className="text-[#68747D] hidden sm:inline">|</span>
            <div className="flex items-center gap-2 text-[#019AA2] font-semibold text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#019AA2] animate-pulse" />
              <span>LLOYD_EM_CYCLE // NODE_{current.step}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#68747D]">
            <span className="hidden md:inline">HOTKEYS: [1-5] · [←] [→]</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-[#A8B3BA] font-semibold">STAGE {activeStage + 1} OF 5</span>
          </div>
        </div>

        {/* Console Interior: 2-Column Responsive Layout */}
        <div className="p-5 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Stage Specification & Vertical Dataflow Bus */}
          <div className="lg:col-span-5 space-y-6">
            {/* Stage Identification Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="px-2.5 py-0.5 rounded-[4px] bg-[#019AA2]/15 border border-[#019AA2]/40 text-[#019AA2] font-bold">
                  STAGE {current.step}
                </span>
                <span className="text-[#68747D]">•</span>
                <span className="text-[#A8B3BA] font-medium tracking-wide text-[11px]">
                  {current.telemetry}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-sans text-[#F3F6F7] tracking-tight leading-tight">
                {current.title}:{' '}
                <span className="text-[#019AA2] block sm:inline">{current.tagline}</span>
              </h3>
            </div>

            <p className="text-sm sm:text-[15px] text-[#A8B3BA] leading-relaxed font-sans">
              {current.description}
            </p>

            {/* Vertical Dataflow Architecture Circuit */}
            <div className="p-4 rounded-[8px] bg-[#070B0E] border border-[#1C2830] space-y-3 font-mono text-xs">
              <div className="text-[10px] text-[#68747D] font-bold tracking-widest uppercase pb-2 border-b border-[#1C2830] flex items-center justify-between">
                <span>DATAFLOW CIRCUIT</span>
                <span className="text-[#019AA2]">STAGE SPECIFICATION</span>
              </div>

              {/* Node 1: Input */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-[4px] bg-[#0E151B] border border-[#1C2830] flex items-center justify-center text-[10px] text-[#68747D] shrink-0 mt-0.5">
                  IN
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] text-[#68747D] uppercase">Observation Bus</div>
                  <div className="text-xs text-[#F3F6F7] font-semibold truncate">{current.input}</div>
                </div>
              </div>

              {/* Vector connection arrow */}
              <div className="pl-2.5 text-[#019AA2] text-[10px] leading-none opacity-60">
                ↓ [Transform Kernel]
              </div>

              {/* Node 2: Operator */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-[4px] bg-[#019AA2]/15 border border-[#019AA2]/40 flex items-center justify-center text-[10px] text-[#019AA2] shrink-0 mt-0.5">
                  OP
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] text-[#019AA2] uppercase">Variational Operator</div>
                  <div className="text-xs text-[#019AA2] font-semibold">{current.operation}</div>
                </div>
              </div>

              {/* Vector connection arrow */}
              <div className="pl-2.5 text-[#019AA2] text-[10px] leading-none opacity-60">
                ↓ [Convergence Bound]
              </div>

              {/* Node 3: Output */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-[4px] bg-[#0E151B] border border-[#d4af37]/40 flex items-center justify-center text-[10px] text-[#d4af37] shrink-0 mt-0.5">
                  OUT
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] text-[#d4af37] uppercase">Verified Artifact</div>
                  <div className="text-xs text-[#F3F6F7] font-semibold">{current.output}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bespoke Rich Exhibits For Each Stage */}
          <div className="lg:col-span-7">
            <div className="rounded-[8px] bg-[#070B0E] border border-[#1C2830] overflow-hidden bl-tick-box">
              {/* Exhibit Window Top Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0E151B] border-b border-[#1C2830] text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#019AA2]" />
                  <span className="text-[#F3F6F7] font-semibold text-[11px]">
                    {activeStage === 0 && 'MATHEMATICAL SPECIFICATION // WCSS DERIVATION'}
                    {activeStage === 1 && 'GEOMETRIC MANIFOLD // VORONOI PARTITION'}
                    {activeStage === 2 && 'NUMERICAL KERNEL // VECTORIZED NUMPY'}
                    {activeStage === 3 && 'ADVERSARIAL LAB // STRESS TEST SIMULATION'}
                    {activeStage === 4 && 'GLOBAL TOPOLOGY // UNIFIED KNOWLEDGE GRAPH'}
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-[3px] bg-[#019AA2]/15 text-[#019AA2] text-[10px] font-bold border border-[#019AA2]/30">
                  VERIFIED
                </span>
              </div>

              {/* Exhibit Body per Stage */}
              <div className="p-4 sm:p-6 min-h-[320px] flex flex-col justify-between">
                {/* ---------------------------------------------------- */}
                {/* EXHIBIT 01: Mathematical Derivation & Parameter Table */}
                {/* ---------------------------------------------------- */}
                {activeStage === 0 && (
                  <div className="space-y-5">
                    <div className="p-4 rounded-[6px] bg-[#0A0F14] border border-[#1C2830]">
                      <div className="text-[10px] font-mono text-[#019AA2] mb-1 font-semibold uppercase">
                        OBJECTIVE FUNCTION // WCSS
                      </div>
                      <EquationBlock
                        math="J = \sum_{k=1}^K \sum_{x_i \in S_k} \|x_i - \mu_k\|^2"
                        className="my-0 border-0 bg-transparent p-0"
                      />
                    </div>

                    {/* Parameter Decomposition Grid */}
                    <div className="space-y-2 font-mono text-xs">
                      <div className="text-[10px] text-[#68747D] uppercase tracking-wider">
                        PARAMETER DECOMPOSITION
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2.5 rounded bg-[#0A0F14] border border-[#1C2830]">
                          <span className="text-[#019AA2] font-bold">x_i ∈ ℝ^D</span>
                          <p className="text-[#A8B3BA] text-[10px] font-sans mt-0.5">
                            Observation feature vector in D-dimensional metric space.
                          </p>
                        </div>
                        <div className="p-2.5 rounded bg-[#0A0F14] border border-[#1C2830]">
                          <span className="text-[#019AA2] font-bold">μ_k ∈ ℝ^D</span>
                          <p className="text-[#A8B3BA] text-[10px] font-sans mt-0.5">
                            Centroid mean coordinate for cluster partition k.
                          </p>
                        </div>
                        <div className="p-2.5 rounded bg-[#0A0F14] border border-[#1C2830]">
                          <span className="text-[#d4af37] font-bold">S_k ⊂ X</span>
                          <p className="text-[#A8B3BA] text-[10px] font-sans mt-0.5">
                            Partition set containing points assigned to centroid k.
                          </p>
                        </div>
                        <div className="p-2.5 rounded bg-[#0A0F14] border border-[#1C2830]">
                          <span className="text-[#F3F6F7] font-bold">||·||^2</span>
                          <p className="text-[#A8B3BA] text-[10px] font-sans mt-0.5">
                            Squared L2 norm measuring intra-cluster dispersion.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded bg-[#019AA2]/10 border border-[#019AA2]/30 text-[10px] font-mono text-[#A8B3BA] flex items-center justify-between">
                      <span>CONVEXITY BOUND:</span>
                      <span className="text-[#019AA2] font-bold">J^(t+1) ≤ J^(t) [MONOTONIC]</span>
                    </div>
                  </div>
                )}

                {/* ---------------------------------------------------- */}
                {/* EXHIBIT 02: Spatial Geometry & Voronoi Partitioning */}
                {/* ---------------------------------------------------- */}
                {activeStage === 1 && (
                  <div className="space-y-4">
                    <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] rounded-[6px] bg-[#0A0F14] border border-[#1C2830] overflow-hidden p-2">
                      <svg viewBox="0 0 320 160" className="w-full h-full select-none font-mono">
                        {/* Background Coordinate Grid */}
                        <g opacity="0.1" stroke="#A8B3BA" strokeDasharray="3 3">
                          <line x1="0" y1="40" x2="320" y2="40" />
                          <line x1="0" y1="80" x2="320" y2="80" />
                          <line x1="0" y1="120" x2="320" y2="120" />
                          <line x1="80" y1="0" x2="80" y2="160" />
                          <line x1="160" y1="0" x2="160" y2="160" />
                          <line x1="240" y1="0" x2="240" y2="160" />
                        </g>

                        {/* Voronoi Partition Regions (Polygons) */}
                        <path d="M 0 0 L 140 0 L 160 85 L 0 110 Z" fill="#019AA2" fillOpacity="0.08" />
                        <path d="M 140 0 L 320 0 L 320 95 L 160 85 Z" fill="#A8B3BA" fillOpacity="0.05" />
                        <path d="M 0 110 L 160 85 L 320 95 L 320 160 L 0 160 Z" fill="#d4af37" fillOpacity="0.08" />

                        {/* Voronoi Boundary Lines */}
                        <line x1="140" y1="0" x2="160" y2="85" stroke="#019AA2" strokeWidth="1.5" strokeDasharray="3 3" />
                        <line x1="0" y1="110" x2="160" y2="85" stroke="#019AA2" strokeWidth="1.5" strokeDasharray="3 3" />
                        <line x1="160" y1="85" x2="320" y2="95" stroke="#A8B3BA" strokeWidth="1.5" strokeDasharray="3 3" />

                        {/* Cluster 1 Points (Teal) */}
                        <g fill="#019AA2">
                          <circle cx="50" cy="40" r="2.5" opacity="0.8" />
                          <circle cx="70" cy="55" r="2.5" opacity="0.8" />
                          <circle cx="45" cy="70" r="2.5" opacity="0.8" />
                          <circle cx="85" cy="35" r="2.5" opacity="0.8" />
                          <circle cx="100" cy="65" r="2.5" opacity="0.8" />
                        </g>

                        {/* Cluster 2 Points (Muted Silver) */}
                        <g fill="#A8B3BA">
                          <circle cx="210" cy="30" r="2.5" opacity="0.8" />
                          <circle cx="250" cy="45" r="2.5" opacity="0.8" />
                          <circle cx="270" cy="30" r="2.5" opacity="0.8" />
                          <circle cx="225" cy="60" r="2.5" opacity="0.8" />
                          <circle cx="280" cy="65" r="2.5" opacity="0.8" />
                        </g>

                        {/* Cluster 3 Points (Gold) */}
                        <g fill="#d4af37">
                          <circle cx="90" cy="130" r="2.5" opacity="0.8" />
                          <circle cx="140" cy="135" r="2.5" opacity="0.8" />
                          <circle cx="170" cy="140" r="2.5" opacity="0.8" />
                          <circle cx="210" cy="125" r="2.5" opacity="0.8" />
                          <circle cx="240" cy="135" r="2.5" opacity="0.8" />
                        </g>

                        {/* Centroids μ_k with Halos and Velocity Arrows */}
                        {/* Centroid 1 */}
                        <circle cx="68" cy="50" r="6" fill="#019AA2" fillOpacity="0.25" stroke="#019AA2" strokeWidth="1.5" />
                        <circle cx="68" cy="50" r="2.5" fill="#F3F6F7" />
                        <line x1="68" y1="50" x2="80" y2="44" stroke="#019AA2" strokeWidth="2" />
                        <text x="60" y="38" fill="#019AA2" fontSize="9" fontWeight="bold">μ_1</text>

                        {/* Centroid 2 */}
                        <circle cx="245" cy="42" r="6" fill="#A8B3BA" fillOpacity="0.25" stroke="#A8B3BA" strokeWidth="1.5" />
                        <circle cx="245" cy="42" r="2.5" fill="#F3F6F7" />
                        <line x1="245" y1="42" x2="235" y2="48" stroke="#A8B3BA" strokeWidth="2" />
                        <text x="250" y="38" fill="#A8B3BA" fontSize="9" fontWeight="bold">μ_2</text>

                        {/* Centroid 3 */}
                        <circle cx="160" cy="132" r="6" fill="#d4af37" fillOpacity="0.25" stroke="#d4af37" strokeWidth="1.5" />
                        <circle cx="160" cy="132" r="2.5" fill="#F3F6F7" />
                        <line x1="160" y1="132" x2="165" y2="124" stroke="#d4af37" strokeWidth="2" />
                        <text x="168" y="145" fill="#d4af37" fontSize="9" fontWeight="bold">μ_3</text>
                      </svg>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-[#A8B3BA] bg-[#0A0F14] p-2.5 rounded border border-[#1C2830]">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#019AA2]" />
                        VORONOI CELLS: 3
                      </span>
                      <span>DRIFT VELOCITY: 0.042 ms^-1</span>
                      <span className="text-[#019AA2]">METRIC: L2 EUCLIDEAN</span>
                    </div>
                  </div>
                )}

                {/* ---------------------------------------------------- */}
                {/* EXHIBIT 03: Vectorized NumPy Implementation          */}
                {/* ---------------------------------------------------- */}
                {activeStage === 2 && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#68747D] pb-1">
                      <span>PYTHON 3.11 · PURE VECTORIZED NUMPY</span>
                      <button
                        onClick={() => handleCopyCode(codeString)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-[#0A0F14] border border-[#1C2830] hover:border-[#019AA2] text-[#A8B3BA] hover:text-[#019AA2] transition-colors cursor-pointer text-[10px]"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3 h-3 text-[#019AA2]" />
                            <span className="text-[#019AA2]">COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>COPY CODE</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="p-3.5 rounded-[6px] bg-[#05070A] border border-[#1C2830] font-mono text-xs text-[#A8B3BA] overflow-x-auto bl-scrollbar">
                      <pre className="leading-relaxed">
                        <code>
                          <span className="text-[#68747D]"># 1. Pairwise squared Euclidean broadcast: (N, 1, D) - (1, K, D)</span>{'\n'}
                          <span className="text-[#019AA2]">dists</span> = np.sum((X[:, <span className="text-[#d4af37]">None</span>, :] - centroids[<span className="text-[#d4af37]">None</span>, :, :]) ** <span className="text-[#f59e0b]">2</span>, axis=-<span className="text-[#f59e0b]">1</span>){'\n'}
                          <span className="text-[#019AA2]">labels</span> = np.argmin(dists, axis=-<span className="text-[#f59e0b]">1</span>)  <span className="text-[#68747D]"># Voronoi assignment</span>{'\n\n'}
                          <span className="text-[#68747D]"># 2. Vectorized center-of-mass recomputation</span>{'\n'}
                          <span className="text-[#019AA2]">new_centroids</span> = np.array([X[labels == k].mean(axis=<span className="text-[#f59e0b]">0</span>) for k in range(K)]){'\n'}
                          <span className="text-[#d4af37]">return</span> labels, new_centroids
                        </code>
                      </pre>
                    </div>

                    <div className="grid grid-cols-3 gap-2 font-mono text-[10px] text-center">
                      <div className="p-2 rounded bg-[#0A0F14] border border-[#1C2830]">
                        <span className="text-[#68747D] block">MEMORY</span>
                        <span className="text-[#F3F6F7] font-bold">O(N·K·D)</span>
                      </div>
                      <div className="p-2 rounded bg-[#0A0F14] border border-[#1C2830]">
                        <span className="text-[#68747D] block">FRAMEWORK</span>
                        <span className="text-[#019AA2] font-bold">ZERO DEPS</span>
                      </div>
                      <div className="p-2 rounded bg-[#0A0F14] border border-[#1C2830]">
                        <span className="text-[#68747D] block">SPEEDUP</span>
                        <span className="text-[#d4af37] font-bold">42x vs LOOPS</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ---------------------------------------------------- */}
                {/* EXHIBIT 04: Adversarial Stress-Testing Exhibit       */}
                {/* ---------------------------------------------------- */}
                {activeStage === 3 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                      {/* Adversarial Test 1 */}
                      <div className="p-3.5 rounded-[6px] bg-[#0A0F14] border border-[#dfb15b]/30 space-y-2">
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-[#dfb15b] font-bold">TOPOLOGY 01: CONCENTRIC</span>
                          <span className="text-[#68747D]">FAIL</span>
                        </div>
                        <div className="h-16 flex items-center justify-center">
                          <svg viewBox="0 0 100 60" className="h-full">
                            <circle cx="50" cy="30" r="12" fill="none" stroke="#dfb15b" strokeWidth="1.5" strokeDasharray="2 2" />
                            <circle cx="50" cy="30" r="26" fill="none" stroke="#dfb15b" strokeWidth="1.5" />
                          </svg>
                        </div>
                        <p className="text-[10px] text-[#A8B3BA] font-sans">
                          Linear hyperplanes cannot separate non-convex nested ring manifolds.
                        </p>
                      </div>

                      {/* Adversarial Test 2 */}
                      <div className="p-3.5 rounded-[6px] bg-[#0A0F14] border border-[#019AA2]/30 space-y-2">
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-[#019AA2] font-bold">INIT TRIAL: K-MEANS++</span>
                          <span className="text-[#019AA2]">99.4% OPT</span>
                        </div>
                        <div className="h-16 flex items-center justify-center">
                          <svg viewBox="0 0 120 50" className="w-full h-full">
                            <path d="M 10 45 Q 30 15, 60 10 T 110 8" fill="none" stroke="#019AA2" strokeWidth="2" />
                            <path d="M 10 45 Q 40 40, 70 30 T 110 25" fill="none" stroke="#68747D" strokeWidth="1.5" strokeDasharray="3 3" />
                            <text x="115" y="10" fill="#019AA2" fontSize="7">k++</text>
                            <text x="115" y="27" fill="#68747D" fontSize="7">rand</text>
                          </svg>
                        </div>
                        <p className="text-[10px] text-[#A8B3BA] font-sans">
                          D(x)^2 probability spreading prevents degenerate centroid collisions.
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded bg-[#0A0F14] border border-[#1C2830] font-mono text-xs flex items-center justify-between">
                      <span className="text-[#68747D]">VARIANCE REDUCTION:</span>
                      <span className="text-[#019AA2] font-bold">O(log K) COMPETITIVE BOUND</span>
                    </div>
                  </div>
                )}

                {/* ---------------------------------------------------- */}
                {/* EXHIBIT 05: Global Knowledge Graph & Unified Theory  */}
                {/* ---------------------------------------------------- */}
                {activeStage === 4 && (
                  <div className="space-y-4">
                    <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] rounded-[6px] bg-[#0A0F14] border border-[#1C2830] overflow-hidden p-3">
                      <svg viewBox="0 0 320 150" className="w-full h-full select-none font-mono">
                        {/* Connecting Graph Edges */}
                        <line x1="160" y1="75" x2="60" y2="40" stroke="#019AA2" strokeWidth="1.5" />
                        <line x1="160" y1="75" x2="260" y2="40" stroke="#A8B3BA" strokeWidth="1.5" />
                        <line x1="160" y1="75" x2="160" y2="130" stroke="#d4af37" strokeWidth="1.5" />

                        {/* Center Node: K-Means */}
                        <circle cx="160" cy="75" r="22" fill="#0E151B" stroke="#019AA2" strokeWidth="2" />
                        <text x="160" y="78" fill="#F3F6F7" fontSize="9" textAnchor="middle" fontWeight="bold">
                          K-MEANS
                        </text>

                        {/* Connected Node 1: EM */}
                        <circle cx="60" cy="40" r="18" fill="#0E151B" stroke="#019AA2" strokeWidth="1.5" />
                        <text x="60" y="43" fill="#019AA2" fontSize="8" textAnchor="middle">
                          EM ALGO
                        </text>
                        <text x="105" y="50" fill="#68747D" fontSize="6.5">Hard E-step</text>

                        {/* Connected Node 2: GMM */}
                        <circle cx="260" cy="40" r="18" fill="#0E151B" stroke="#A8B3BA" strokeWidth="1.5" />
                        <text x="260" y="43" fill="#A8B3BA" fontSize="8" textAnchor="middle">
                          GMM
                        </text>
                        <text x="215" y="50" fill="#68747D" fontSize="6.5">σ² → 0 Limit</text>

                        {/* Connected Node 3: PCA */}
                        <circle cx="160" cy="130" r="16" fill="#0E151B" stroke="#d4af37" strokeWidth="1.5" />
                        <text x="160" y="133" fill="#d4af37" fontSize="8" textAnchor="middle">
                          PCA
                        </text>
                        <text x="175" y="105" fill="#68747D" fontSize="6.5">Subspace</text>
                      </svg>
                    </div>

                    <div className="p-3 rounded bg-[#0E151B] border border-[#1C2830] font-sans text-xs text-[#A8B3BA] leading-relaxed">
                      <strong className="text-[#019AA2] font-mono block mb-1">
                        UNIFIED THEORETICAL THEOREM:
                      </strong>
                      K-Means is not an ad-hoc clustering heuristic. It is the exact asymptotic limit
                      of the Expectation-Maximization algorithm operating on Gaussian Mixture Models
                      as covariance approaches zero isotropic variance.
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Navigation Footer inside Card */}
            <div className="mt-5 flex items-center justify-between text-xs font-mono">
              <button
                disabled={activeStage === 0}
                onClick={() => setActiveStage((p) => Math.max(0, p - 1))}
                className="px-4 py-2 rounded-[6px] border border-[#1C2830] bg-[#070B0E] text-[#A8B3BA] hover:text-[#F3F6F7] hover:border-[#A8B3BA]/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Previous Stage</span>
              </button>

              <div className="flex items-center gap-1.5">
                {stages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStage(i)}
                    aria-label={`Jump to stage ${i + 1}`}
                    className={cn(
                      'w-2 h-2 rounded-full transition-all cursor-pointer',
                      activeStage === i
                        ? 'w-6 bg-[#019AA2]'
                        : 'bg-[#1C2830] hover:bg-[#68747D]'
                    )}
                  />
                ))}
              </div>

              <button
                disabled={activeStage === stages.length - 1}
                onClick={() => setActiveStage((p) => Math.min(stages.length - 1, p + 1))}
                className="px-4 py-2 rounded-[6px] border border-[#019AA2]/50 bg-[#019AA2]/15 text-[#019AA2] hover:bg-[#019AA2]/25 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1.5 cursor-pointer font-semibold"
              >
                <span>Next Stage</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
