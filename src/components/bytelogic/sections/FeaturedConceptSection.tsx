'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, RefreshCw, Play, Pause } from 'lucide-react';
import { ByteLogicButton } from '@/components/bytelogic/ui/ByteLogicButton';
import { EquationBlock } from '@/components/bytelogic/ui/EquationBlock';

export const FeaturedConceptSection: React.FC = () => {
  // Mini interactive clustering state for the preview
  const [iteration, setIteration] = useState(0);
  const [isAutoRunning, setIsAutoRunning] = useState(false);

  // 3 synthetic clusters
  const initialData = [
    // Cluster 1 (top-left)
    { x: 60, y: 70 }, { x: 75, y: 55 }, { x: 90, y: 80 }, { x: 70, y: 95 }, { x: 50, y: 85 },
    // Cluster 2 (top-right)
    { x: 230, y: 65 }, { x: 250, y: 85 }, { x: 270, y: 60 }, { x: 240, y: 100 }, { x: 260, y: 110 },
    // Cluster 3 (bottom-center)
    { x: 150, y: 180 }, { x: 170, y: 195 }, { x: 140, y: 215 }, { x: 165, y: 225 }, { x: 185, y: 205 }
  ];

  // Centroids shifting across iterations towards actual means
  const centroidStates = [
    // Iteration 0: Random positions
    [
      { x: 80, y: 140, color: '#019AA2', name: 'μ₁' },
      { x: 180, y: 80, color: '#132279', name: 'μ₂' },
      { x: 250, y: 180, color: '#A8B3BA', name: 'μ₃' }
    ],
    // Iteration 1: Moved partially
    [
      { x: 72, y: 95, color: '#019AA2', name: 'μ₁' },
      { x: 220, y: 80, color: '#132279', name: 'μ₂' },
      { x: 170, y: 175, color: '#A8B3BA', name: 'μ₃' }
    ],
    // Iteration 2: Converged
    [
      { x: 69, y: 77, color: '#019AA2', name: 'μ₁' },
      { x: 250, y: 84, color: '#132279', name: 'μ₂' },
      { x: 162, y: 204, color: '#A8B3BA', name: 'μ₃' }
    ]
  ];

  const currentCentroids = centroidStates[iteration % centroidStates.length];

  // Step function
  const stepForward = () => {
    setIteration((prev) => (prev + 1) % centroidStates.length);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoRunning) {
      interval = setInterval(() => {
        setIteration((prev) => (prev + 1) % centroidStates.length);
      }, 1200);
    }
    return () => clearInterval(interval);
  }, [isAutoRunning]);

  return (
    <section id="featured" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 border-t border-[#1C2830]">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-8 border-b border-[#1C2830] text-xs font-mono">
        <div className="flex items-center gap-2 text-[#019AA2]">
          <span className="font-semibold">02 / FEATURED CONCEPT</span>
        </div>
        <span className="text-[#68747D]">DEEP DIVE DOSSIER</span>
      </div>

      {/* Featured Card Wrapper */}
      <div className="rounded-[6px] bg-[#0E151B] border border-[#1C2830] p-4 sm:p-8 lg:p-10 bl-tick-box">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Metadata & Narrative */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-[4px] bg-[#131C24] border border-[#1C2830] text-[#019AA2] font-semibold">
                MACHINE LEARNING · CLUSTERING
              </span>
              <span className="text-[#68747D] hidden sm:inline">•</span>
              <span className="text-[#A8B3BA]">INTERMEDIATE</span>
              <span className="text-[#68747D] hidden sm:inline">•</span>
              <span className="text-[#68747D]">12 MIN DEEP DIVE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sans tracking-tight text-[#F3F6F7]">
              K-MEANS CLUSTERING
            </h2>

            <p className="text-sm sm:text-base text-[#A8B3BA] leading-relaxed font-sans">
              A visual and mathematical exploration of how K-Means discovers latent structure in unlabeled continuous data through iterative Voronoi partitioning and centroid relocation.
            </p>

            {/* LaTeX Equation Preview */}
            <div className="my-2 min-w-0">
              <EquationBlock
                math="J = \sum_{j=1}^k \sum_{x_i \in S_j} \|x_i - \mu_j\|^2"
                label="WCSS"
                title="Within-Cluster Sum of Squares"
                explanation="Minimizes the sum of squared Euclidean distances from each observation to its assigned centroid."
              />
            </div>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs font-mono text-[#A8B3BA]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#019AA2] shrink-0" />
                <span>Voronoi Partitions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#019AA2] shrink-0" />
                <span>Monotonic Proof</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#019AA2] shrink-0" />
                <span>NumPy from Scratch</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#019AA2] shrink-0" />
                <span>Interactive Playground</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <ByteLogicButton
                href="/bytelogic/concepts/k-means"
                variant="primary"
                size="md"
                showArrow
                className="w-full sm:w-auto"
              >
                Explore Concept
              </ByteLogicButton>
            </div>
          </div>

          {/* Right: Live Interactive Canvas Preview */}
          <div className="lg:col-span-6 min-w-0">
            <div className="rounded-[6px] bg-[#070B0E] border border-[#1C2830] overflow-hidden bl-tick-box">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-2 px-3.5 sm:px-4 py-2.5 bg-[#0A0F14] border-b border-[#1C2830] text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#019AA2]" />
                  <span className="text-[#F3F6F7] font-medium">CENTROID RELOCATION</span>
                </div>
                <div className="flex items-center gap-3 text-[#68747D] text-[11px]">
                  <span>STEP: {iteration} / 2</span>
                  <span className={iteration === 2 ? 'text-[#019AA2]' : 'text-[#68747D]'}>
                    {iteration === 2 ? 'CONVERGED' : 'OPTIMIZING'}
                  </span>
                </div>
              </div>

              {/* Coordinate Plane Preview */}
              <div className="relative h-[220px] sm:h-[280px] w-full p-4 flex items-center justify-center">
                <div className="absolute inset-0 bl-cartesian-grid opacity-40" />

                <svg className="w-full h-full" viewBox="0 0 320 260">
                  {/* Voronoi / Cluster Assignment Lines */}
                  {initialData.map((pt, idx) => {
                    // Find nearest centroid
                    let nearest = currentCentroids[0];
                    let minDist = Infinity;
                    currentCentroids.forEach((c) => {
                      const d = Math.hypot(c.x - pt.x, c.y - pt.y);
                      if (d < minDist) {
                        minDist = d;
                        nearest = c;
                      }
                    });

                    return (
                      <line
                        key={idx}
                        x1={pt.x}
                        y1={pt.y}
                        x2={nearest.x}
                        y2={nearest.y}
                        stroke={nearest.color}
                        strokeWidth="1"
                        strokeDasharray="2,2"
                        opacity="0.25"
                      />
                    );
                  })}

                  {/* Data Points */}
                  {initialData.map((pt, idx) => (
                    <circle
                      key={idx}
                      cx={pt.x}
                      cy={pt.y}
                      r="3"
                      fill="#A8B3BA"
                      stroke="#0E151B"
                      strokeWidth="1"
                    />
                  ))}

                  {/* Moving Centroids */}
                  {currentCentroids.map((c, idx) => (
                    <g key={idx}>
                      {/* Centroid ring */}
                      <circle
                        cx={c.x}
                        cy={c.y}
                        r="8"
                        fill="#0E151B"
                        stroke={c.color}
                        strokeWidth="2"
                        className="transition-all duration-500 ease-out"
                      />
                      {/* Centroid core */}
                      <circle
                        cx={c.x}
                        cy={c.y}
                        r="3"
                        fill={c.color}
                        className="transition-all duration-500 ease-out"
                      />
                      {/* Label */}
                      <text
                        x={c.x}
                        y={c.y - 12}
                        textAnchor="middle"
                        fill="#F3F6F7"
                        fontSize="10"
                        fontFamily="var(--font-jetbrains)"
                        fontWeight="600"
                        className="transition-all duration-500 ease-out"
                      >
                        {c.name}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>

              {/* Bottom Interactive Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 px-3.5 sm:px-4 py-2.5 bg-[#0A0F14] border-t border-[#1C2830] text-xs font-mono">
                <span className="text-[#68747D] text-[11px]">
                  {iteration === 0 && 'Initial random centroid placement'}
                  {iteration === 1 && 'Points assigned, recalculating mean vectors'}
                  {iteration === 2 && 'Optimal centroid positions converged'}
                </span>
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    onClick={stepForward}
                    className="min-h-[36px] sm:min-h-0 px-3 py-1.5 sm:py-1 rounded-[4px] bg-[#131C24] border border-[#1C2830] hover:border-[#019AA2] text-[#F3F6F7] text-[11px] transition-colors cursor-pointer"
                  >
                    Step Iteration
                  </button>
                  <button
                    onClick={() => setIsAutoRunning(!isAutoRunning)}
                    className="min-h-[36px] min-w-[36px] sm:min-h-0 sm:min-w-0 p-2 sm:p-1.5 rounded-[4px] bg-[#131C24] border border-[#1C2830] hover:border-[#019AA2] text-[#019AA2] cursor-pointer flex items-center justify-center"
                    aria-label={isAutoRunning ? 'Pause auto-run' : 'Auto run iterations'}
                  >
                    {isAutoRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
