'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Play, Pause, SkipForward, RotateCcw, ArrowRight, Sparkles, Compass } from 'lucide-react';
import { ByteLogicButton } from '@/components/bytelogic/ui/ByteLogicButton';

export const ConceptShowcaseSection: React.FC = () => {
  const [iteration, setIteration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // 3 distinct synthetic 2D clusters
  const points = [
    // Cluster 1 (Top Left)
    { x: 65, y: 70 }, { x: 80, y: 55 }, { x: 92, y: 80 }, { x: 70, y: 95 }, { x: 50, y: 85 }, { x: 85, y: 72 },
    // Cluster 2 (Top Right)
    { x: 230, y: 65 }, { x: 250, y: 85 }, { x: 270, y: 60 }, { x: 240, y: 100 }, { x: 260, y: 110 }, { x: 245, y: 75 },
    // Cluster 3 (Bottom Center)
    { x: 150, y: 180 }, { x: 170, y: 195 }, { x: 140, y: 215 }, { x: 165, y: 225 }, { x: 185, y: 205 }, { x: 155, y: 200 }
  ];

  // Centroid trajectories across 3 steps: 0 (random), 1 (intermediate), 2 (converged)
  const states = [
    {
      step: 0,
      status: 'INITIALIZING',
      centroids: [
        { x: 90, y: 140, color: '#019AA2', name: 'μ₁' },
        { x: 180, y: 75, color: '#3b82f6', name: 'μ₂' },
        { x: 240, y: 180, color: '#10b981', name: 'μ₃' },
      ],
      desc: 'Step 0: Centroids initialized at random locations in the feature space.',
    },
    {
      step: 1,
      status: 'PARTITIONING',
      centroids: [
        { x: 76, y: 92, color: '#019AA2', name: 'μ₁' },
        { x: 228, y: 82, color: '#3b82f6', name: 'μ₂' },
        { x: 168, y: 178, color: '#10b981', name: 'μ₃' },
      ],
      desc: 'Step 1: Observations assigned to nearest centroid; centroids shift to new cluster means.',
    },
    {
      step: 2,
      status: 'CONVERGED',
      centroids: [
        { x: 73, y: 76, color: '#019AA2', name: 'μ₁' },
        { x: 249, y: 82, color: '#3b82f6', name: 'μ₂' },
        { x: 161, y: 203, color: '#10b981', name: 'μ₃' },
      ],
      desc: 'Step 2: Centroid movement drops below threshold (Δμ < 0.5px). Optimal Voronoi partition achieved.',
    },
  ];

  const current = states[iteration % states.length];

  // Auto playback
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setIteration((prev) => (prev + 1) % states.length);
      }, 1500);
    }
    return () => clearInterval(timer);
  }, [isPlaying, states.length]);

  return (
    <section
      id="concept"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 border-t border-[#1C2830] relative z-10"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-8 sm:mb-12 border-b border-[#1C2830] text-xs font-mono">
        <div className="flex items-center gap-2 text-[#019AA2]">
          <span className="w-2 h-2 rounded-[2px] bg-[#019AA2]" />
          <span className="font-semibold tracking-wider">03 / SEE A CONCEPT</span>
        </div>
        <div className="flex items-center gap-3 text-[#68747D] text-[11px]">
          <span>INTERACTIVE VISUAL PREVIEW</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-[#A8B3BA]">MACHINE LEARNING // CLUSTERING</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="rounded-[6px] bg-[#0E151B] border border-[#1C2830] p-6 sm:p-8 lg:p-10 bl-tick-box">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Narrative & Dossier Invitation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-[4px] bg-[#131C24] border border-[#1C2830] text-[#019AA2] font-semibold">
                K-MEANS CLUSTERING
              </span>
              <span className="text-[#68747D]">•</span>
              <span className="text-[#A8B3BA]">12 MIN DEEP DIVE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-[#F3F6F7]">
              Watch Geometry Settle Into Order.
            </h2>

            <p className="text-sm sm:text-base text-[#A8B3BA] leading-relaxed font-sans">
              K-Means partitions continuous space into Voronoi cells through an elegant dance between assignment and centroid relocation. What looks like intuition on the surface is governed by monotonic reduction in within-cluster variance.
            </p>

            {/* Micro What's Inside Callout */}
            <div className="p-4 rounded-[6px] bg-[#070B0E] border border-[#1C2830] space-y-2.5 text-xs font-mono">
              <div className="text-[#F3F6F7] font-semibold flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#019AA2]" />
                <span>Inside the Full Concept Dossier:</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#A8B3BA]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#019AA2]" />
                  <span>Monotonic convergence proof</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#019AA2]" />
                  <span>Voronoi boundary geometry</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#019AA2]" />
                  <span>NumPy broadcasting from scratch</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#019AA2]" />
                  <span>K-Means++ D² initialization</span>
                </li>
              </ul>
            </div>

            {/* Prominent CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <ByteLogicButton
                href="/bytelogic/concepts/k-means"
                variant="primary"
                size="md"
                showArrow
                className="w-full sm:w-auto"
              >
                Explore Full Concept Dossier
              </ByteLogicButton>
              <span className="text-xs text-[#68747D] font-mono text-center sm:text-left">
                Includes full derivation & interactive laboratory
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Coordinate Canvas Preview */}
          <div className="lg:col-span-6">
            <div className="rounded-[6px] bg-[#070B0E] border border-[#1C2830] overflow-hidden bl-tick-box">
              {/* Canvas Header & Status */}
              <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-[#0A0F14] border-b border-[#1C2830] text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      current.step === 2 ? 'bg-[#10b981]' : 'bg-[#019AA2] animate-pulse'
                    }`}
                  />
                  <span className="text-[#F3F6F7] font-medium">LLOYD PARTITIONING</span>
                </div>
                <div className="flex items-center gap-3 text-[#68747D] text-[11px]">
                  <span>ITERATION: {current.step} / 2</span>
                  <span
                    className={
                      current.step === 2
                        ? 'text-[#10b981] font-semibold'
                        : 'text-[#019AA2]'
                    }
                  >
                    {current.status}
                  </span>
                </div>
              </div>

              {/* 2D Coordinate SVG Stage */}
              <div className="relative h-[260px] sm:h-[300px] w-full p-4 flex items-center justify-center bg-[#05070A]">
                <div className="absolute inset-0 bl-cartesian-grid opacity-30 pointer-events-none" />

                <svg className="w-full h-full" viewBox="0 0 320 260">
                  {/* Dynamic Voronoi Assignment Rays */}
                  {points.map((pt, idx) => {
                    let nearest = current.centroids[0];
                    let minDist = Infinity;
                    current.centroids.forEach((c) => {
                      const d = Math.hypot(c.x - pt.x, c.y - pt.y);
                      if (d < minDist) {
                        minDist = d;
                        nearest = c;
                      }
                    });

                    return (
                      <line
                        key={`ray-${idx}`}
                        x1={pt.x}
                        y1={pt.y}
                        x2={nearest.x}
                        y2={nearest.y}
                        stroke={nearest.color}
                        strokeWidth="1"
                        strokeDasharray="2,2"
                        opacity="0.3"
                        className="transition-all duration-500 ease-out"
                      />
                    );
                  })}

                  {/* Data Points */}
                  {points.map((pt, idx) => {
                    let nearest = current.centroids[0];
                    let minDist = Infinity;
                    current.centroids.forEach((c) => {
                      const d = Math.hypot(c.x - pt.x, c.y - pt.y);
                      if (d < minDist) {
                        minDist = d;
                        nearest = c;
                      }
                    });

                    return (
                      <circle
                        key={`pt-${idx}`}
                        cx={pt.x}
                        cy={pt.y}
                        r="3.5"
                        fill={nearest.color}
                        fillOpacity="0.8"
                        stroke="#0E151B"
                        strokeWidth="1"
                        className="transition-colors duration-300"
                      />
                    );
                  })}

                  {/* Centroids with Pulse Rings */}
                  {current.centroids.map((c, idx) => (
                    <g key={`cent-${idx}`} className="transition-all duration-700 ease-out">
                      <circle
                        cx={c.x}
                        cy={c.y}
                        r="12"
                        fill={c.color}
                        fillOpacity="0.15"
                        stroke={c.color}
                        strokeWidth="1"
                        strokeDasharray="2,2"
                      />
                      <circle
                        cx={c.x}
                        cy={c.y}
                        r="6"
                        fill="#0E151B"
                        stroke={c.color}
                        strokeWidth="2.5"
                      />
                      <circle cx={c.x} cy={c.y} r="2" fill={c.color} />
                      <text
                        x={c.x}
                        y={c.y - 14}
                        textAnchor="middle"
                        fill="#F3F6F7"
                        fontSize="10"
                        fontFamily="var(--font-jetbrains)"
                        fontWeight="600"
                      >
                        {c.name}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>

              {/* Dynamic Step Explanation */}
              <div className="px-4 py-2.5 bg-[#0A0F14] border-t border-[#1C2830] text-xs font-mono text-[#A8B3BA] min-h-[44px] flex items-center">
                <span>{current.desc}</span>
              </div>

              {/* Interactive Playback Controls Toolbar */}
              <div className="px-4 py-3 bg-[#0E151B] border-t border-[#1C2830] flex items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="px-3 py-1.5 rounded-[4px] bg-[#019AA2] hover:bg-[#02b3bc] text-[#05070A] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Auto-Play</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      setIsPlaying(false);
                      setIteration((prev) => (prev + 1) % states.length);
                    }}
                    className="px-3 py-1.5 rounded-[4px] bg-[#131C24] hover:bg-[#1C2830] border border-[#1C2830] text-[#F3F6F7] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <SkipForward className="w-3.5 h-3.5" />
                    <span>Next Step</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsPlaying(false);
                      setIteration(0);
                    }}
                    className="p-1.5 rounded-[4px] bg-[#131C24] hover:bg-[#1C2830] border border-[#1C2830] text-[#68747D] hover:text-[#F3F6F7] transition-colors cursor-pointer"
                    title="Reset to Step 0"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-[11px] text-[#68747D]">
                  <span>SPACE: 2D EUCLIDEAN</span>
                  <span>•</span>
                  <span>K = 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
