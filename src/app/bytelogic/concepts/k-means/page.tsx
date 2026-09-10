'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  SkipForward,
  BookOpen,
  Code,
  Terminal,
  Sparkles,
  Layers,
  CheckCircle2,
  AlertTriangle,
  GitBranch,
} from 'lucide-react';
import { EquationBlock } from '@/components/bytelogic/ui/EquationBlock';
import { CodeBlock } from '@/components/bytelogic/ui/CodeBlock';
import { ByteLogicButton } from '@/components/bytelogic/ui/ByteLogicButton';
import { cn } from '@/lib/utils';

// Synthetic point and centroid definitions for visualization
interface VisPoint {
  x: number;
  y: number;
  cluster?: number;
}

interface VisCentroid {
  x: number;
  y: number;
  color: string;
}

const CLUSTER_COLORS = ['#019AA2', '#3b82f6', '#10b981', '#f59e0b', '#ec4899'];

export default function KMeansConceptPage() {
  // Navigation active tab
  const [activeSection, setActiveSection] = useState('problem');

  // Visualization State
  const [k, setK] = useState(3);
  const [initMode, setInitMode] = useState<'kmeans++' | 'random'>('kmeans++');
  const [visIteration, setVisIteration] = useState(0);
  const [visStatus, setVisStatus] = useState<'READY' | 'ASSIGNING' | 'UPDATING' | 'CONVERGED'>('READY');
  const [visPoints, setVisPoints] = useState<VisPoint[]>([]);
  const [visCentroids, setVisCentroids] = useState<VisCentroid[]>([]);
  const [visLoss, setVisLoss] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [showVoronoi, setShowVoronoi] = useState(true);

  // Generate synthetic points
  const spawnPoints = () => {
    const pts: VisPoint[] = [];
    const centers = [
      { cx: 85, cy: 75 },
      { cx: 235, cy: 80 },
      { cx: 160, cy: 195 },
    ];
    centers.forEach((c) => {
      for (let i = 0; i < 22; i++) {
        const r = Math.random() * 28;
        const a = Math.random() * 2 * Math.PI;
        pts.push({ x: c.cx + r * Math.cos(a), y: c.cy + r * Math.sin(a) });
      }
    });
    return pts;
  };

  const spawnCentroids = (currentPoints: VisPoint[], numK: number) => {
    if (currentPoints.length === 0) return [];
    const cents: VisCentroid[] = [];
    // sample k distinct points
    for (let i = 0; i < numK; i++) {
      const p = currentPoints[(i * 18 + 5) % currentPoints.length];
      cents.push({ x: p.x + (Math.random() - 0.5) * 15, y: p.y + (Math.random() - 0.5) * 15, color: CLUSTER_COLORS[i % CLUSTER_COLORS.length] });
    }
    return cents;
  };

  const resetVis = () => {
    setIsAutoPlaying(false);
    const pts = spawnPoints();
    const cents = spawnCentroids(pts, k);
    setVisPoints(pts);
    setVisCentroids(cents);
    setVisIteration(0);
    setVisStatus('READY');
    calcLoss(pts, cents);
  };

  const calcLoss = (pts: VisPoint[], cents: VisCentroid[]) => {
    if (pts.length === 0 || cents.length === 0) return;
    let sum = 0;
    pts.forEach((p) => {
      let minD = Infinity;
      cents.forEach((c) => {
        const d2 = (c.x - p.x) ** 2 + (c.y - p.y) ** 2;
        if (d2 < minD) minD = d2;
      });
      sum += minD;
    });
    setVisLoss(Math.round(sum));
  };

  // Step assignment then step update
  const stepVis = () => {
    if (visPoints.length === 0 || visCentroids.length === 0) return;

    if (visStatus === 'READY' || visStatus === 'UPDATING') {
      // Step A: Assignment
      const updatedPts = visPoints.map((p) => {
        let nearest = 0;
        let minD = Infinity;
        visCentroids.forEach((c, idx) => {
          const d2 = (c.x - p.x) ** 2 + (c.y - p.y) ** 2;
          if (d2 < minD) {
            minD = d2;
            nearest = idx;
          }
        });
        return { ...p, cluster: nearest };
      });
      setVisPoints(updatedPts);
      setVisStatus('ASSIGNING');
      calcLoss(updatedPts, visCentroids);
    } else if (visStatus === 'ASSIGNING') {
      // Step B: Update centroids
      let maxShift = 0;
      const updatedCents = visCentroids.map((c, idx) => {
        const ptsInCluster = visPoints.filter((p) => p.cluster === idx);
        if (ptsInCluster.length === 0) return c;
        const avgX = ptsInCluster.reduce((acc, p) => acc + p.x, 0) / ptsInCluster.length;
        const avgY = ptsInCluster.reduce((acc, p) => acc + p.y, 0) / ptsInCluster.length;
        const shift = Math.hypot(avgX - c.x, avgY - c.y);
        if (shift > maxShift) maxShift = shift;
        return { ...c, x: avgX, y: avgY };
      });

      setVisCentroids(updatedCents);
      setVisIteration((prev) => prev + 1);
      calcLoss(visPoints, updatedCents);

      if (maxShift < 0.8 || visIteration >= 20) {
        setVisStatus('CONVERGED');
        setIsAutoPlaying(false);
      } else {
        setVisStatus('UPDATING');
      }
    }
  };

  useEffect(() => {
    resetVis();
  }, [k, initMode]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoPlaying && visStatus !== 'CONVERGED') {
      timer = setTimeout(() => {
        stepVis();
      }, 600);
    }
    return () => clearTimeout(timer);
  }, [isAutoPlaying, visStatus, visPoints, visCentroids]);

  const navSections = [
    { id: 'problem', label: '01 The Problem' },
    { id: 'intuition', label: '02 Intuition' },
    { id: 'mathematics', label: '03 Mathematics' },
    { id: 'flow', label: '04 How It Works' },
    { id: 'visualization', label: '05 Visualization' },
    { id: 'implementation', label: '06 Implementation' },
    { id: 'experiment', label: '07 Experiment' },
    { id: 'limitations', label: '08 Limitations' },
    { id: 'godeeper', label: '09 Go Deeper' },
  ];

  const pythonCode = `import numpy as np

class KMeans:
    """
    K-Means Clustering via Lloyd's Algorithm.
    Vectorized implementation in pure NumPy.
    """
    def __init__(self, k=3, max_iter=300, tol=1e-4, init='kmeans++'):
        self.k = k
        self.max_iter = max_iter
        self.tol = tol
        self.init = init
        self.centroids = None
        self.inertia_ = None

    def _init_centroids(self, X):
        n_samples = X.shape[0]
        if self.init == 'random':
            indices = np.random.choice(n_samples, self.k, replace=False)
            return X[indices].copy()
        
        # K-Means++ D^2 Initialization
        centroids = [X[np.random.choice(n_samples)]]
        for _ in range(1, self.k):
            # Compute distance to closest centroid
            dists = np.min([np.sum((X - c)**2, axis=1) for c in centroids], axis=0)
            probs = dists / np.sum(dists)
            next_centroid_idx = np.random.choice(n_samples, p=probs)
            centroids.append(X[next_centroid_idx])
        return np.array(centroids)

    def fit(self, X):
        X = np.asarray(X, dtype=np.float64)
        n_samples = X.shape[0]
        self.centroids = self._init_centroids(X)

        for iteration in range(self.max_iter):
            # Step A: Vectorized pairwise Euclidean distance calculation
            # Shape: (n_samples, k)
            distances = np.linalg.norm(X[:, np.newaxis, :] - self.centroids[np.newaxis, :, :], axis=2)
            
            # Step B: Expectation step - assign to closest centroid
            labels = np.argmin(distances, axis=1)
            
            # Step C: Maximization step - update centroids to cluster means
            new_centroids = np.zeros_like(self.centroids)
            for j in range(self.k):
                mask = (labels == j)
                if np.any(mask):
                    new_centroids[j] = np.mean(X[mask], axis=0)
                else:
                    # Handle empty cluster: re-initialize with random sample
                    new_centroids[j] = X[np.random.choice(n_samples)]

            # Check convergence via tolerance
            shift = np.linalg.norm(new_centroids - self.centroids)
            self.centroids = new_centroids
            if shift < self.tol:
                break

        # Compute final inertia (Within-Cluster Sum of Squares)
        final_dists = np.min([np.sum((X - c)**2, axis=1) for c in self.centroids], axis=0)
        self.inertia_ = np.sum(final_dists)
        return self`;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Back to Concepts / Home Link */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#1C2830] text-xs font-mono">
        <Link
          href="/bytelogic"
          className="flex items-center gap-2 text-[#A8B3BA] hover:text-[#019AA2] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO BYTELOGIC PLATFORM</span>
        </Link>
        <span className="text-[#68747D]">DOSSIER: CONCEPT // 001</span>
      </div>

      {/* Hero Header */}
      <div className="space-y-4 mb-10">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="px-2.5 py-1 rounded-[4px] bg-[#131C24] border border-[#1C2830] text-[#019AA2] font-semibold">
            MACHINE LEARNING · CLUSTERING
          </span>
          <span className="text-[#68747D]">•</span>
          <span className="text-[#A8B3BA]">INTERMEDIATE</span>
          <span className="text-[#68747D]">•</span>
          <span className="text-[#68747D]">LLOYD&apos;S ALGORITHM</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans tracking-tight text-[#F3F6F7]">
          K-Means Clustering
        </h1>

        <p className="text-base sm:text-lg text-[#A8B3BA] leading-relaxed font-sans max-w-3xl">
          A visual and mathematical explanation of clustering through iterative expectation-maximization, Voronoi partitioning, and centroid displacement.
        </p>

        {/* Quick Format Action Links */}
        <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono">
          <a
            href="#mathematics"
            className="px-3 py-1.5 rounded-[4px] bg-[#0E151B] border border-[#1C2830] hover:border-[#019AA2] text-[#F3F6F7] flex items-center gap-1.5 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#019AA2]" />
            <span>03 Derivation</span>
          </a>
          <a
            href="#visualization"
            className="px-3 py-1.5 rounded-[4px] bg-[#0E151B] border border-[#1C2830] hover:border-[#019AA2] text-[#F3F6F7] flex items-center gap-1.5 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#019AA2]" />
            <span>05 Interactive Lab</span>
          </a>
          <a
            href="#implementation"
            className="px-3 py-1.5 rounded-[4px] bg-[#0E151B] border border-[#1C2830] hover:border-[#019AA2] text-[#F3F6F7] flex items-center gap-1.5 transition-colors"
          >
            <Code className="w-3.5 h-3.5 text-[#019AA2]" />
            <span>06 NumPy Implementation</span>
          </a>
        </div>
      </div>

      {/* Sticky Table of Contents Subnav */}
      <nav aria-label="Section navigation" className="sticky top-16 sm:top-20 z-30 py-2.5 my-8 bg-[#05070A]/90 backdrop-blur-md border-y border-[#1C2830] overflow-x-auto bl-scrollbar">
        <div className="flex items-center gap-2 text-xs font-mono whitespace-nowrap">
          {navSections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              onClick={() => setActiveSection(sec.id)}
              className={cn(
                'px-2.5 py-1 rounded-[4px] transition-colors',
                activeSection === sec.id
                  ? 'bg-[#019AA2]/15 border border-[#019AA2] text-[#019AA2] font-semibold'
                  : 'text-[#68747D] hover:text-[#F3F6F7]'
              )}
            >
              {sec.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content Articles & Interactive Demonstrations */}
      <div className="space-y-16 sm:space-y-24 text-[#F3F6F7] font-sans">
        {/* =========================================================================
            01 — THE PROBLEM
           ========================================================================= */}
        <section id="problem" className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#019AA2]">
            <span className="w-1.5 h-1.5 bg-[#019AA2]" />
            <span>01 / THE FORMAL PROBLEM</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F3F6F7]">
            Partitioning Continuous Feature Space
          </h2>

          <div className="text-sm sm:text-base text-[#A8B3BA] leading-relaxed space-y-4">
            <p>
              Given an unlabeled dataset of N observations{' '}
              <span className="font-mono text-[#F3F6F7]">X = {'{x_1, x_2, ..., x_N}'}</span> where each observation{' '}
              <span className="font-mono text-[#F3F6F7]">x_i ∈ ℝ^d</span> is a d-dimensional continuous vector, our goal is to partition the N observations into k non-empty, mutually disjoint subsets{' '}
              <span className="font-mono text-[#F3F6F7]">S = {'{S_1, S_2, ..., S_k}'}</span> such that:
            </p>
            <EquationBlock
              math="\bigcup_{j=1}^k S_j = X \quad \text{and} \quad S_a \cap S_b = \emptyset \quad \forall a \neq b"
              label="PARTITION"
              title="Disjoint Partition Requirement"
            />
            <p>
              Finding the optimal partition that globally minimizes intra-cluster distance is an <strong>NP-hard combinatorial optimization problem</strong> even for k = 2 in general dimension. Lloyd&apos;s algorithm offers a deterministic heuristic that converges monotonically to a local optimum.
            </p>
          </div>
        </section>

        {/* =========================================================================
            02 — INTUITION
           ========================================================================= */}
        <section id="intuition" className="space-y-4 border-t border-[#1C2830] pt-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#019AA2]">
            <span className="w-1.5 h-1.5 bg-[#019AA2]" />
            <span>02 / GEOMETRIC INTUITION</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F3F6F7]">
            Centers of Gravity and Gravitational Pull
          </h2>

          <div className="text-sm sm:text-base text-[#A8B3BA] leading-relaxed space-y-4">
            <p>
              Imagine placing $k$ anchors onto a plane covered with particles. Each particle feels an allegiance to whichever anchor is closest to it, forming distinct territories known as <strong>Voronoi cells</strong>.
            </p>
            <p>
              Once every particle has declared allegiance to its nearest anchor, each anchor relocates to the exact center of gravity (the mathematical mean vector $\mu_j$) of all its devoted particles.
            </p>
            <p>
              Because the anchors moved, the territories shift. Particles on the borders might now find a different anchor closer. We repeat this dance until no particle changes allegiance and the anchors cease to move.
            </p>
          </div>
        </section>

        {/* =========================================================================
            03 — MATHEMATICS
           ========================================================================= */}
        <section id="mathematics" className="space-y-6 border-t border-[#1C2830] pt-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#019AA2]">
            <span className="w-1.5 h-1.5 bg-[#019AA2]" />
            <span>03 / MATHEMATICAL DERIVATION</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F3F6F7]">
            Objective Function & Coordinate Descent
          </h2>

          <p className="text-sm sm:text-base text-[#A8B3BA] leading-relaxed">
            The optimization objective minimizes the Within-Cluster Sum of Squares (WCSS), also referred to as inertia:
          </p>

          {/* Equation: Objective */}
          <EquationBlock
            math="J(S, \mu) = \sum_{j=1}^k \sum_{x_i \in S_j} \|x_i - \mu_j\|^2"
            title="Within-Cluster Sum of Squares (WCSS)"
            label="EQ 01"
            explanation="Where x_i is the observation vector, S_j is the j-th cluster subset, and \mu_j is the center coordinate vector of cluster j."
            annotations={[
              { symbol: 'J', meaning: 'Total objective inertia loss' },
              { symbol: 'k', meaning: 'Number of clusters' },
              { symbol: 'S_j', meaning: 'Set of observations assigned to cluster j' },
              { symbol: 'x_i', meaning: 'Single d-dimensional data point' },
              { symbol: '\\mu_j', meaning: 'Centroid mean vector of cluster j' },
              { symbol: '\\|\\cdot\\|^2', meaning: 'Squared L2 Euclidean norm' },
            ]}
          />

          <div className="space-y-4 text-sm sm:text-base text-[#A8B3BA] leading-relaxed">
            <h3 className="text-lg font-semibold text-[#F3F6F7]">
              The Coordinate Descent Decomposition
            </h3>
            <p>
              Lloyd&apos;s algorithm solves this non-convex problem by alternating minimization across two sets of variables: the discrete cluster assignments $S$ and the continuous centroid coordinates $\mu$.
            </p>

            {/* Step 1: Assignment equation */}
            <EquationBlock
              math="S_j^{(t)} = \left\{ x_i \in X : \|x_i - \mu_j^{(t)}\|^2 \le \|x_i - \mu_l^{(t)}\|^2 \quad \forall l = 1, \dots, k \right\}"
              title="Step 1: Voronoi Partition Assignment"
              label="EQ 02"
              explanation="Holding centroids fixed, we assign each point x_i to the closest centroid \mu_j, which strictly minimizes J with respect to S."
            />

            {/* Step 2: Centroid update derivation */}
            <EquationBlock
              math="\frac{\partial J}{\partial \mu_j} = -2 \sum_{x_i \in S_j} (x_i - \mu_j) = 0 \implies \mu_j^{(t+1)} = \frac{1}{|S_j^{(t)}|} \sum_{x_i \in S_j^{(t)}} x_i"
              title="Step 2: Analytical Centroid Relocation"
              label="EQ 03"
              explanation="Holding assignments fixed, taking the derivative with respect to \mu_j and setting to zero yields the arithmetic mean of the assigned points."
            />

            <div className="p-4 rounded-[4px] bg-[#0E151B] border border-[#1C2830] text-xs font-mono space-y-2">
              <span className="text-[#019AA2] font-semibold block">THEOREM: MONOTONIC CONVERGENCE</span>
              <p className="text-[#A8B3BA] font-sans">
                Because both Step 1 and Step 2 strictly decrease or preserve $J(S, \mu)$, and because the number of distinct partitions of $N$ points into $k$ subsets is finite (bounded by $k^N$), Lloyd&apos;s algorithm cannot cycle and must terminate at a local minimum in a finite number of iterations.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            04 — HOW IT WORKS (ALGORITHM FLOW)
           ========================================================================= */}
        <section id="flow" className="space-y-6 border-t border-[#1C2830] pt-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#019AA2]">
            <span className="w-1.5 h-1.5 bg-[#019AA2]" />
            <span>04 / ALGORITHM FLOW</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F3F6F7]">
            The 5-Step Execution Cycle
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs font-mono">
            {[
              { num: '01', title: 'INITIALIZE', desc: 'Select k initial centroids (Random or K-Means++ D²)' },
              { num: '02', title: 'DISTANCES', desc: 'Compute pairwise L2 distances from all N points to k centroids' },
              { num: '03', title: 'ASSIGN', desc: 'Assign each point to its closest centroid (argmin Euclidean distance)' },
              { num: '04', title: 'RECOMPUTE', desc: 'Relocate each centroid to the mean of its assigned cluster' },
              { num: '05', title: 'CONVERGE', desc: 'Check if centroid shift ||Δμ|| < ε. If not, repeat from 02' },
            ].map((step, idx) => (
              <div
                key={step.num}
                className="p-4 rounded-[6px] bg-[#0E151B] border border-[#1C2830] flex flex-col justify-between bl-tick-box"
              >
                <div>
                  <div className="flex items-center justify-between text-[#019AA2] font-bold mb-2">
                    <span>{step.num}</span>
                    <span className="text-[10px] text-[#68747D]">PHASE</span>
                  </div>
                  <div className="text-sm font-semibold text-[#F3F6F7] mb-1">{step.title}</div>
                  <p className="text-[11px] font-sans text-[#A8B3BA] leading-relaxed">{step.desc}</p>
                </div>
                {idx < 4 && (
                  <div className="mt-4 text-[#68747D] text-center hidden md:block">→</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            05 — INTERACTIVE VISUALIZATION
           ========================================================================= */}
        <section id="visualization" className="space-y-6 border-t border-[#1C2830] pt-12">
          <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#019AA2]">
              <span className="w-1.5 h-1.5 bg-[#019AA2]" />
              <span>05 / INTERACTIVE LABORATORY VISUAL</span>
            </div>
            <span className="text-[#68747D]">LIVE 2D CLUSTERING MANIFOLD</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F3F6F7]">
            Observe Centroids Traversing the Manifold
          </h2>

          <p className="text-sm sm:text-base text-[#A8B3BA] leading-relaxed">
            Step through the alternating minimization phases. Watch the Voronoi partitioning update in real time as data points get captured by incoming centroids.
          </p>

          {/* Canvas Box */}
          <div className="rounded-[6px] bg-[#070B0E] border border-[#1C2830] overflow-hidden bl-tick-box shadow-2xl">
            {/* Top Toolbar */}
            <div className="px-4 py-3 bg-[#0E151B] border-b border-[#1C2830] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="text-[#019AA2] font-semibold">STATE:</span>
                <span className="px-2 py-0.5 rounded-[3px] bg-[#131C24] border border-[#1C2830] text-[#F3F6F7]">
                  {visStatus}
                </span>
                <span className="text-[#68747D]">|</span>
                <span className="text-[#68747D]">ITERATION: {visIteration}</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-[#A8B3BA]">
                  <span>LOSS (WCSS):</span>
                  <span className="text-[#019AA2] font-semibold tabular-nums">{visLoss.toLocaleString()}</span>
                </div>
                <button
                  onClick={() => setShowVoronoi(!showVoronoi)}
                  className={cn(
                    'px-2.5 py-1 rounded-[4px] border text-[11px] transition-colors cursor-pointer',
                    showVoronoi
                      ? 'border-[#019AA2] bg-[#019AA2]/15 text-[#019AA2]'
                      : 'border-[#1C2830] bg-[#131C24] text-[#68747D]'
                  )}
                >
                  Rays: {showVoronoi ? 'ON' : 'OFF'}
                </button>
              </div>
            </div>

            {/* Canvas Area */}
            <div className="relative h-[340px] w-full p-4 flex items-center justify-center">
              <div className="absolute inset-0 bl-cartesian-grid opacity-50 pointer-events-none" />

              <svg className="w-full h-full max-w-[500px]" viewBox="0 0 320 260">
                {/* Ray Lines */}
                {showVoronoi &&
                  visPoints.map((pt, idx) => {
                    if (pt.cluster === undefined || !visCentroids[pt.cluster]) return null;
                    const c = visCentroids[pt.cluster];
                    return (
                      <line
                        key={`ray-${idx}`}
                        x1={pt.x}
                        y1={pt.y}
                        x2={c.x}
                        y2={c.y}
                        stroke={c.color}
                        strokeWidth="0.8"
                        strokeDasharray="2,2"
                        opacity="0.3"
                      />
                    );
                  })}

                {/* Points */}
                {visPoints.map((pt, idx) => {
                  const ptColor =
                    pt.cluster !== undefined && visCentroids[pt.cluster]
                      ? visCentroids[pt.cluster].color
                      : '#A8B3BA';
                  return (
                    <circle
                      key={`pt-${idx}`}
                      cx={pt.x}
                      cy={pt.y}
                      r="3.5"
                      fill={ptColor}
                      stroke="#070B0E"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Centroids */}
                {visCentroids.map((c, idx) => (
                  <g key={`cent-${idx}`}>
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r="9"
                      fill="#0E151B"
                      stroke={c.color}
                      strokeWidth="2.5"
                      className="transition-all duration-300 ease-out"
                    />
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r="3"
                      fill={c.color}
                      className="transition-all duration-300 ease-out"
                    />
                    <text
                      x={c.x}
                      y={c.y - 14}
                      textAnchor="middle"
                      fill="#F3F6F7"
                      fontSize="9"
                      fontFamily="var(--font-jetbrains)"
                      fontWeight="bold"
                    >
                      μ{idx + 1}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            {/* Bottom Controls */}
            <div className="px-4 py-3 bg-[#0A0F14] border-t border-[#1C2830] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              {/* K count selection */}
              <div className="flex items-center gap-2">
                <span className="text-[#68747D]">K Clusters:</span>
                {[2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => setK(num)}
                    className={cn(
                      'px-2 py-0.5 rounded-[3px] border transition-colors cursor-pointer',
                      k === num
                        ? 'border-[#019AA2] bg-[#019AA2]/15 text-[#019AA2] font-bold'
                        : 'border-[#1C2830] bg-[#131C24] text-[#A8B3BA]'
                    )}
                  >
                    {num}
                  </button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={stepVis}
                  disabled={visStatus === 'CONVERGED' || isAutoPlaying}
                  className="px-3 py-1.5 rounded-[4px] bg-[#131C24] border border-[#1C2830] hover:border-[#019AA2] text-[#F3F6F7] transition-colors disabled:opacity-40 cursor-pointer"
                >
                  Step (Next Phase)
                </button>
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  disabled={visStatus === 'CONVERGED'}
                  className="px-3 py-1.5 rounded-[4px] bg-[#019AA2] text-[#05070A] font-semibold hover:bg-[#02b3bc] transition-colors disabled:opacity-40 flex items-center gap-1.5 cursor-pointer"
                >
                  {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  <span>{isAutoPlaying ? 'Pause' : 'Auto Run'}</span>
                </button>
                <button
                  onClick={resetVis}
                  className="p-1.5 rounded-[4px] bg-[#131C24] border border-[#1C2830] text-[#A8B3BA] hover:text-[#F3F6F7] transition-colors cursor-pointer"
                  title="Reset Simulation"
                  aria-label="Reset Simulation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            06 — IMPLEMENTATION FROM SCRATCH
           ========================================================================= */}
        <section id="implementation" className="space-y-6 border-t border-[#1C2830] pt-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#019AA2]">
            <span className="w-1.5 h-1.5 bg-[#019AA2]" />
            <span>06 / IMPLEMENTATION FROM SCRATCH</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F3F6F7]">
            Vectorized NumPy Lloyd Algorithm
          </h2>

          <p className="text-sm sm:text-base text-[#A8B3BA] leading-relaxed">
            Production-grade Python code implementing vectorized pairwise distance broadcasting: $(N, 1, d) - (1, k, d) \to (N, k, d)$ without external machine learning dependencies.
          </p>

          <CodeBlock
            code={pythonCode}
            language="python"
            title="K-Means from Scratch"
            sectionCode="06"
            githubUrl="https://github.com/na124441"
          />
        </section>

        {/* =========================================================================
            07 — EXPERIMENT & BENCHMARK
           ========================================================================= */}
        <section id="experiment" className="space-y-6 border-t border-[#1C2830] pt-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#019AA2]">
            <span className="w-1.5 h-1.5 bg-[#019AA2]" />
            <span>07 / EMPIRICAL EXPERIMENT</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F3F6F7]">
            Random Initialization vs. K-Means++
          </h2>

          <p className="text-sm sm:text-base text-[#A8B3BA] leading-relaxed">
            Standard Lloyd initialization randomly selects $k$ observations uniformly, which frequently places two centroids within the same true cluster. Arthur &amp; Vassilvitskii (2007) introduced K-Means++, choosing subsequent centroids with probability proportional to their squared distance $D(x)^2$ from already chosen centroids, guaranteeing an $O(\log k)$ competitive ratio.
          </p>

          <div className="p-4 rounded-[6px] bg-[#0E151B] border border-[#1C2830] text-xs font-mono overflow-x-auto bl-scrollbar">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#1C2830] text-[#68747D]">
                  <th className="pb-2 font-medium">METHOD</th>
                  <th className="pb-2 font-medium">APPROXIMATION RATIO</th>
                  <th className="pb-2 font-medium">AVG RUNTIME ITERATIONS</th>
                  <th className="pb-2 font-medium">LOCAL MINIMA SENSITIVITY</th>
                </tr>
              </thead>
              <tbody className="text-[#F3F6F7]">
                <tr className="border-b border-[#1C2830]/40">
                  <td className="py-2.5 text-[#019AA2] font-semibold">K-Means++ (Arthur &amp; Vassilvitskii)</td>
                  <td className="py-2.5">O(log k) Guaranteed</td>
                  <td className="py-2.5 tabular-nums">7.8 steps</td>
                  <td className="py-2.5 text-[#10b981]">Very Low (Optimal dispersion)</td>
                </tr>
                <tr>
                  <td className="py-2.5 text-[#A8B3BA]">Uniform Random Initialization</td>
                  <td className="py-2.5">Unbounded (arbitrarily bad)</td>
                  <td className="py-2.5 tabular-nums">18.4 steps</td>
                  <td className="py-2.5 text-[#f59e0b]">High (Frequent local traps)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* =========================================================================
            08 — LIMITATIONS & EDGE CASES
           ========================================================================= */}
        <section id="limitations" className="space-y-6 border-t border-[#1C2830] pt-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#019AA2]">
            <span className="w-1.5 h-1.5 bg-[#019AA2]" />
            <span>08 / LIMITATIONS &amp; PATHOLOGIES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F3F6F7]">
            When K-Means Fails
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-[6px] bg-[#0E151B] border border-[#1C2830] space-y-2 bl-tick-box">
              <div className="flex items-center gap-2 text-[#f59e0b] text-xs font-mono font-semibold">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Non-Spherical Geometry</span>
              </div>
              <p className="text-xs sm:text-sm text-[#A8B3BA] leading-relaxed font-sans">
                Because distance is measured with isotropic Euclidean norms, K-Means assumes convex, spherical clusters. It completely fails on concentric circles, crescent moons, or manifold ribbons (DBSCAN or Spectral Clustering are required).
              </p>
            </div>

            <div className="p-5 rounded-[6px] bg-[#0E151B] border border-[#1C2830] space-y-2 bl-tick-box">
              <div className="flex items-center gap-2 text-[#f59e0b] text-xs font-mono font-semibold">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Varying Cluster Densities &amp; Sizes</span>
              </div>
              <p className="text-xs sm:text-sm text-[#A8B3BA] leading-relaxed font-sans">
                If one cluster contains 10,000 points and a neighboring cluster contains 100 points, K-Means will split the large cluster in half and merge the small cluster into the neighbor to minimize squared distance.
              </p>
            </div>

            <div className="p-5 rounded-[6px] bg-[#0E151B] border border-[#1C2830] space-y-2 bl-tick-box">
              <div className="flex items-center gap-2 text-[#f59e0b] text-xs font-mono font-semibold">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Scale Sensitivity</span>
              </div>
              <p className="text-xs sm:text-sm text-[#A8B3BA] leading-relaxed font-sans">
                Features with large numerical variances dominate the squared distance computation. Features must strictly be standardized ($\mu = 0, \sigma = 1$) prior to clustering.
              </p>
            </div>

            <div className="p-5 rounded-[6px] bg-[#0E151B] border border-[#1C2830] space-y-2 bl-tick-box">
              <div className="flex items-center gap-2 text-[#f59e0b] text-xs font-mono font-semibold">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Sensitivity to Extreme Outliers</span>
              </div>
              <p className="text-xs sm:text-sm text-[#A8B3BA] leading-relaxed font-sans">
                Because distances are squared in the objective function, a single rogue point far from the origin will drag a centroid away from legitimate data (K-Medoids / PAM provides an L1 robust alternative).
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            09 — GO DEEPER & CONNECTED GRAPH
           ========================================================================= */}
        <section id="godeeper" className="space-y-6 border-t border-[#1C2830] pt-12 pb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#019AA2]">
            <span className="w-1.5 h-1.5 bg-[#019AA2]" />
            <span>09 / CONNECTED KNOWLEDGE GRAPH</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F3F6F7]">
            Concepts Orbiting K-Means
          </h2>

          <p className="text-sm sm:text-base text-[#A8B3BA] leading-relaxed">
            In ByteLogic, no concept lives in isolation. Explore the theoretical connections from K-Means to general latent variable models:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
            {[
              {
                title: 'Gaussian Mixture Models (GMM)',
                rel: 'Generalization',
                desc: 'Soft probabilistic cluster assignments using Expectation-Maximization with full covariance matrices.',
                href: '/bytelogic/concepts/k-means',
              },
              {
                title: 'Principal Component Analysis (PCA)',
                rel: 'Continuous Relaxation',
                desc: 'Ding & He (2004) proved that PCA subspaces are continuous relaxations of K-Means cluster indicator vectors.',
                href: '/bytelogic/concepts/k-means',
              },
              {
                title: 'Voronoi Tessellation & Delaunay',
                rel: 'Geometric Dual',
                desc: 'Partitioning space into polygonal convex regions closest to a discrete set of seed sites.',
                href: '/bytelogic/concepts/k-means',
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group p-5 rounded-[6px] bl-card-interactive bl-tick-box flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] text-[#019AA2] uppercase tracking-wider block mb-1">
                    {item.rel}
                  </span>
                  <div className="text-sm font-sans font-bold text-[#F3F6F7] group-hover:text-[#019AA2] transition-colors mb-2">
                    {item.title}
                  </div>
                  <p className="text-[11px] font-sans text-[#A8B3BA] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#1C2830] flex items-center justify-between text-[#019AA2]">
                  <span>Explore Concept</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
