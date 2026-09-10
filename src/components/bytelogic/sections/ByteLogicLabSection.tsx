'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Play, Pause, RotateCcw, SkipForward, BarChart2, Activity } from 'lucide-react';
import { ByteLogicButton } from '@/components/bytelogic/ui/ByteLogicButton';
import { cn } from '@/lib/utils';

type DatasetType = 'blobs' | 'iris' | 'anisotropic' | 'rings';
type InitType = 'kmeans++' | 'random';

interface Point {
  x: number;
  y: number;
  cluster?: number;
}

interface Centroid {
  x: number;
  y: number;
  color: string;
}

const PALETTE = ['#019AA2', '#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'];

export const ByteLogicLabSection: React.FC = () => {
  const [dataset, setDataset] = useState<DatasetType>('blobs');
  const [k, setK] = useState<number>(3);
  const [initMethod, setInitMethod] = useState<InitType>('kmeans++');
  const [iteration, setIteration] = useState<number>(0);
  const [status, setStatus] = useState<'READY' | 'RUNNING' | 'CONVERGED'>('READY');
  const [points, setPoints] = useState<Point[]>([]);
  const [centroids, setCentroids] = useState<Centroid[]>([]);
  const [wcss, setWcss] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // Generate synthetic points based on chosen dataset
  const generateData = (type: DatasetType): Point[] => {
    const pts: Point[] = [];
    if (type === 'blobs') {
      // 3 clear gaussian blobs
      const centers = [
        { cx: 80, cy: 70 },
        { cx: 240, cy: 70 },
        { cx: 160, cy: 190 },
      ];
      centers.forEach((c) => {
        for (let i = 0; i < 24; i++) {
          const r = Math.random() * 32;
          const a = Math.random() * 2 * Math.PI;
          pts.push({ x: c.cx + r * Math.cos(a), y: c.cy + r * Math.sin(a) });
        }
      });
    } else if (type === 'iris') {
      // Simulated 2D PCA projection of Iris (Setosa separated, Versicolor/Virginica close)
      for (let i = 0; i < 25; i++) {
        pts.push({ x: 60 + Math.random() * 40, y: 70 + Math.random() * 40 });
      }
      for (let i = 0; i < 25; i++) {
        pts.push({ x: 180 + Math.random() * 50, y: 140 + Math.random() * 50 });
      }
      for (let i = 0; i < 25; i++) {
        pts.push({ x: 230 + Math.random() * 50, y: 170 + Math.random() * 50 });
      }
    } else if (type === 'anisotropic') {
      // Stretched cluster along diagonal
      for (let i = 0; i < 60; i++) {
        const u = Math.random() * 200 + 40;
        pts.push({ x: u, y: u * 0.7 + (Math.random() - 0.5) * 35 });
      }
      for (let i = 0; i < 30; i++) {
        pts.push({ x: 70 + Math.random() * 45, y: 190 + Math.random() * 45 });
      }
    } else {
      // Concentric circles / rings
      for (let i = 0; i < 40; i++) {
        const a = (i / 40) * 2 * Math.PI;
        pts.push({ x: 160 + 40 * Math.cos(a) + (Math.random() - 0.5) * 8, y: 130 + 40 * Math.sin(a) + (Math.random() - 0.5) * 8 });
      }
      for (let i = 0; i < 50; i++) {
        const a = (i / 50) * 2 * Math.PI;
        pts.push({ x: 160 + 95 * Math.cos(a) + (Math.random() - 0.5) * 10, y: 130 + 85 * Math.sin(a) + (Math.random() - 0.5) * 10 });
      }
    }
    return pts;
  };

  // Initialize centroids
  const initializeCentroids = (currentPoints: Point[], numClusters: number, method: InitType): Centroid[] => {
    if (currentPoints.length === 0) return [];
    const cents: Centroid[] = [];

    if (method === 'random') {
      for (let i = 0; i < numClusters; i++) {
        const randPt = currentPoints[Math.floor(Math.random() * currentPoints.length)];
        cents.push({ x: randPt.x, y: randPt.y, color: PALETTE[i % PALETTE.length] });
      }
    } else {
      // K-Means++ Initialization (D^2 weighting)
      const first = currentPoints[Math.floor(Math.random() * currentPoints.length)];
      cents.push({ x: first.x, y: first.y, color: PALETTE[0] });

      while (cents.length < numClusters) {
        // compute distance squared from each point to nearest centroid
        let totalD2 = 0;
        const d2Arr: number[] = [];
        currentPoints.forEach((p) => {
          let minD = Infinity;
          cents.forEach((c) => {
            const distSq = (c.x - p.x) ** 2 + (c.y - p.y) ** 2;
            if (distSq < minD) minD = distSq;
          });
          d2Arr.push(minD);
          totalD2 += minD;
        });

        // sample proportional to D^2
        let randVal = Math.random() * totalD2;
        let chosenIdx = 0;
        for (let j = 0; j < d2Arr.length; j++) {
          randVal -= d2Arr[j];
          if (randVal <= 0) {
            chosenIdx = j;
            break;
          }
        }
        cents.push({
          x: currentPoints[chosenIdx].x,
          y: currentPoints[chosenIdx].y,
          color: PALETTE[cents.length % PALETTE.length],
        });
      }
    }
    return cents;
  };

  // Reset experiment
  const resetExperiment = () => {
    setIsRunning(false);
    const newPts = generateData(dataset);
    const newCents = initializeCentroids(newPts, k, initMethod);
    setPoints(newPts);
    setCentroids(newCents);
    setIteration(0);
    setStatus('READY');
    computeLoss(newPts, newCents);
  };

  // Compute WCSS Loss
  const computeLoss = (pts: Point[], cents: Centroid[]) => {
    if (pts.length === 0 || cents.length === 0) return;
    let sumSq = 0;
    pts.forEach((p) => {
      let minD2 = Infinity;
      cents.forEach((c) => {
        const d2 = (c.x - p.x) ** 2 + (c.y - p.y) ** 2;
        if (d2 < minD2) minD2 = d2;
      });
      sumSq += minD2;
    });
    setWcss(Math.round(sumSq));
  };

  // Perform one step of Lloyd's algorithm:
  // Step A: Assign points to nearest centroid
  // Step B: Update centroid coordinates to cluster means
  const performStep = () => {
    if (points.length === 0 || centroids.length === 0) return;

    // Step A: Assign
    const assignedPoints = points.map((p) => {
      let nearestIdx = 0;
      let minDist = Infinity;
      centroids.forEach((c, idx) => {
        const d2 = (c.x - p.x) ** 2 + (c.y - p.y) ** 2;
        if (d2 < minDist) {
          minDist = d2;
          nearestIdx = idx;
        }
      });
      return { ...p, cluster: nearestIdx };
    });

    // Step B: Recalculate centroids
    let maxShift = 0;
    const nextCentroids = centroids.map((c, cIdx) => {
      const clusterPoints = assignedPoints.filter((p) => p.cluster === cIdx);
      if (clusterPoints.length === 0) return c;
      const sumX = clusterPoints.reduce((acc, p) => acc + p.x, 0);
      const sumY = clusterPoints.reduce((acc, p) => acc + p.y, 0);
      const newX = sumX / clusterPoints.length;
      const newY = sumY / clusterPoints.length;
      const shift = Math.hypot(newX - c.x, newY - c.y);
      if (shift > maxShift) maxShift = shift;
      return { ...c, x: newX, y: newY };
    });

    setPoints(assignedPoints);
    setCentroids(nextCentroids);
    setIteration((prev) => prev + 1);
    computeLoss(assignedPoints, nextCentroids);

    if (maxShift < 0.5 || iteration >= 30) {
      setStatus('CONVERGED');
      setIsRunning(false);
    } else {
      setStatus('RUNNING');
    }
  };

  // Initialize on mount and when parameters change
  useEffect(() => {
    resetExperiment();
  }, [dataset, k, initMethod]);

  // Handle auto-running loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && status !== 'CONVERGED') {
      timer = setTimeout(() => {
        performStep();
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [isRunning, status, points, centroids]);

  return (
    <section id="lab" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 border-t border-[#1C2830]">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-8 border-b border-[#1C2830] text-xs font-mono">
        <div className="flex items-center gap-2 text-[#019AA2]">
          <Terminal className="w-4 h-4" />
          <span className="font-semibold">05 / BYTELOGIC LAB · INSTRUMENTATION</span>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[#68747D]">
          <span>EXPERIMENT 023</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-[#019AA2]">INTERACTIVE ALGORITHM PLAYGROUND</span>
        </div>
      </div>

      {/* Main Lab Instrument Chassis */}
      <div className="rounded-[6px] bg-[#0A0F14] border border-[#1C2830] overflow-hidden bl-tick-box shadow-2xl">
        {/* Instrument Title Bar */}
        <div className="p-4 sm:px-5 sm:py-3.5 bg-[#0E151B] border-b border-[#1C2830] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="text-[#019AA2] font-bold tracking-wider">LAB // 023</span>
            <span className="text-[#68747D]">|</span>
            <span className="text-[#F3F6F7] font-medium text-[11px] sm:text-xs">K-MEANS++ CONVERGENCE BENCHMARK</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[11px]">
            <div className="flex items-center gap-1.5">
              <span className="text-[#68747D]">STATUS:</span>
              <span
                className={cn(
                  'font-semibold px-2 py-0.5 rounded-[3px] border text-[10px]',
                  status === 'CONVERGED'
                    ? 'border-[#019AA2] bg-[#019AA2]/15 text-[#019AA2]'
                    : status === 'RUNNING'
                    ? 'border-[#f59e0b] bg-[#f59e0b]/15 text-[#f59e0b]'
                    : 'border-[#1C2830] bg-[#131C24] text-[#A8B3BA]'
                )}
              >
                {status}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[#68747D]">
              <span>ITERATIONS:</span>
              <span className="text-[#F3F6F7] font-semibold tabular-nums">{iteration}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#68747D]">
              <span>WCSS LOSS:</span>
              <span className="text-[#019AA2] font-semibold tabular-nums">{wcss.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Instrument Body: Left Controls, Center Canvas, Right Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-[#1C2830]">
          {/* Left Parameter Panel (4 cols) */}
          <div className="lg:col-span-4 p-4 sm:p-6 bg-[#0E151B] border-b lg:border-b-0 lg:border-r border-[#1C2830] space-y-5 text-xs font-mono">
            <div>
              <label className="text-[#68747D] uppercase tracking-wider block mb-2 font-semibold">
                01 / Dataset Topology
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'blobs', label: 'Gaussian Blobs' },
                  { id: 'iris', label: 'Iris Projection' },
                  { id: 'anisotropic', label: 'Anisotropic' },
                  { id: 'rings', label: 'Concentric Rings' },
                ].map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setDataset(d.id as any)}
                    className={cn(
                      'p-2 sm:p-2.5 rounded-[4px] border text-left text-[11px] transition-all cursor-pointer min-h-[38px]',
                      dataset === d.id
                        ? 'border-[#019AA2] bg-[#019AA2]/15 text-[#019AA2] font-semibold'
                        : 'border-[#1C2830] bg-[#0A0F14] text-[#A8B3BA] hover:text-[#F3F6F7]'
                    )}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-[#68747D] uppercase tracking-wider font-semibold">
                  02 / Cluster Count (K)
                </label>
                <span className="text-[#019AA2] font-bold text-sm tabular-nums">{k}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                {[2, 3, 4, 5, 6].map((num) => (
                  <button
                    key={num}
                    onClick={() => setK(num)}
                    className={cn(
                      'flex-1 py-2 sm:py-1.5 rounded-[4px] border text-center text-xs font-mono transition-all cursor-pointer min-h-[38px] sm:min-h-0 flex items-center justify-center',
                      k === num
                        ? 'border-[#019AA2] bg-[#019AA2]/15 text-[#019AA2] font-bold'
                        : 'border-[#1C2830] bg-[#0A0F14] text-[#A8B3BA] hover:text-[#F3F6F7]'
                    )}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[#68747D] uppercase tracking-wider block mb-2 font-semibold">
                03 / Initializer Strategy
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: 'kmeans++', label: 'K-Means++ (D²)', desc: 'Optimized dispersion' },
                  { id: 'random', label: 'Random (Lloyd)', desc: 'Standard uniform' },
                ].map((init) => (
                  <button
                    key={init.id}
                    onClick={() => setInitMethod(init.id as any)}
                    className={cn(
                      'p-2.5 rounded-[4px] border text-left transition-all cursor-pointer min-h-[44px]',
                      initMethod === init.id
                        ? 'border-[#019AA2] bg-[#019AA2]/15 text-[#019AA2]'
                        : 'border-[#1C2830] bg-[#0A0F14] text-[#A8B3BA] hover:text-[#F3F6F7]'
                    )}
                  >
                    <div className="font-semibold text-[11px]">{init.label}</div>
                    <div className="text-[9px] text-[#68747D] mt-0.5">{init.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Execution Controls */}
            <div className="pt-3 border-t border-[#1C2830] space-y-2">
              <label className="text-[#68747D] uppercase tracking-wider block mb-2 font-semibold">
                Control Pipeline
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsRunning(!isRunning)}
                  disabled={status === 'CONVERGED'}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 min-h-[44px] rounded-[4px] bg-[#019AA2] text-[#05070A] font-semibold text-xs hover:bg-[#02b3bc] transition-colors disabled:opacity-40 cursor-pointer"
                >
                  {isRunning ? (
                    <>
                      <Pause className="w-3.5 h-3.5" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" />
                      <span>Run Experiment</span>
                    </>
                  )}
                </button>
                <button
                  onClick={performStep}
                  disabled={status === 'CONVERGED' || isRunning}
                  className="flex items-center justify-center p-2.5 min-h-[44px] min-w-[44px] rounded-[4px] bg-[#131C24] border border-[#1C2830] text-[#A8B3BA] hover:text-[#019AA2] hover:border-[#019AA2] transition-colors disabled:opacity-40 cursor-pointer"
                  title="Step 1 Iteration"
                  aria-label="Step 1 Iteration"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
                <button
                  onClick={resetExperiment}
                  className="flex items-center justify-center p-2.5 min-h-[44px] min-w-[44px] rounded-[4px] bg-[#131C24] border border-[#1C2830] text-[#A8B3BA] hover:text-[#F3F6F7] hover:border-[#A8B3BA] transition-colors cursor-pointer"
                  title="Reset Points & Centroids"
                  aria-label="Reset Points & Centroids"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Center 2D Coordinate Plane Visualization (8 cols) */}
          <div className="lg:col-span-8 p-4 sm:p-6 bg-[#05070A] flex flex-col justify-between relative min-h-[300px] sm:min-h-[380px] overflow-hidden">
            {/* Coordinate Grid Canvas */}
            <div className="absolute inset-0 bl-cartesian-grid opacity-60 pointer-events-none" />

            {/* SVG Plot */}
            <div className="relative z-10 w-full h-[260px] sm:h-[320px] flex items-center justify-center">
              <svg className="w-full h-full max-w-[500px]" viewBox="0 0 320 260">
                {/* Voronoi Assignment Rays */}
                {points.map((pt, idx) => {
                  if (pt.cluster === undefined || !centroids[pt.cluster]) return null;
                  const c = centroids[pt.cluster];
                  return (
                    <line
                      key={`ray-${idx}`}
                      x1={pt.x}
                      y1={pt.y}
                      x2={c.x}
                      y2={c.y}
                      stroke={c.color}
                      strokeWidth="0.75"
                      opacity="0.25"
                      strokeDasharray="2,2"
                    />
                  );
                })}

                {/* Data Points */}
                {points.map((pt, idx) => {
                  const ptColor =
                    pt.cluster !== undefined && centroids[pt.cluster]
                      ? centroids[pt.cluster].color
                      : '#A8B3BA';
                  return (
                    <circle
                      key={`pt-${idx}`}
                      cx={pt.x}
                      cy={pt.y}
                      r="3.5"
                      fill={ptColor}
                      stroke="#05070A"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Centroids */}
                {centroids.map((c, idx) => (
                  <g key={`cent-${idx}`}>
                    {/* Outer ring */}
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r="9"
                      fill="#0E151B"
                      stroke={c.color}
                      strokeWidth="2.5"
                      className="transition-all duration-300 ease-out"
                    />
                    {/* Inner core */}
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r="3"
                      fill={c.color}
                      className="transition-all duration-300 ease-out"
                    />
                    {/* Crosshairs */}
                    <line
                      x1={c.x - 13}
                      y1={c.y}
                      x2={c.x + 13}
                      y2={c.y}
                      stroke={c.color}
                      strokeWidth="1"
                      opacity="0.6"
                    />
                    <line
                      x1={c.x}
                      y1={c.y - 13}
                      x2={c.x}
                      y2={c.y + 13}
                      stroke={c.color}
                      strokeWidth="1"
                      opacity="0.6"
                    />
                    {/* Coordinate Tag */}
                    <text
                      x={c.x}
                      y={c.y - 16}
                      textAnchor="middle"
                      fill="#F3F6F7"
                      fontSize="9"
                      fontFamily="var(--font-jetbrains)"
                      fontWeight="600"
                    >
                      μ{idx + 1} ({Math.round(c.x)}, {Math.round(c.y)})
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            {/* Bottom Real-time Telemetry Bar */}
            <div className="relative z-10 pt-4 border-t border-[#1C2830] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 text-[11px] sm:text-xs font-mono text-[#68747D]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#019AA2]" />
                <span>OBSERVATIONS: N = {points.length}</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span>CONVERGENCE CRITERION: Δμ &lt; 0.5px</span>
                <span className="hidden sm:inline">•</span>
                <span className="text-[#A8B3BA]">MANIFOLD: 2D EUCLIDEAN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Experiment Benchmark Results Table */}
        <div className="p-4 sm:p-6 bg-[#0E151B] text-xs font-mono">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[#1C2830]">
            <span className="text-[#A8B3BA] uppercase tracking-wider font-semibold flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-[#019AA2]" />
              Comparative Empirical Benchmark
            </span>
            <span className="text-[#68747D] text-[11px]">N = 100 Runs Monte-Carlo</span>
          </div>

          <div className="w-full overflow-x-auto bl-scrollbar">
            <table className="w-full min-w-[560px] text-left">
              <thead>
                <tr className="text-[#68747D] border-b border-[#1C2830] text-[11px]">
                  <th className="pb-2 font-medium">STRATEGY</th>
                  <th className="pb-2 font-medium">AVG ITERATIONS</th>
                  <th className="pb-2 font-medium">LOCAL MINIMA TRAP RATE</th>
                  <th className="pb-2 font-medium">FINAL WCSS VARIANCE</th>
                  <th className="pb-2 font-medium">CONVERGENCE SPEED</th>
                </tr>
              </thead>
              <tbody className="text-[#F3F6F7]">
                <tr className="border-b border-[#1C2830]/40">
                  <td className="py-2.5 text-[#019AA2] font-semibold">K-Means++ (D² Probability)</td>
                  <td className="py-2.5 tabular-nums text-[#F3F6F7]">8.4 ± 1.2</td>
                  <td className="py-2.5 tabular-nums text-[#019AA2]">3.2% (Low)</td>
                  <td className="py-2.5 tabular-nums text-[#F3F6F7]">± 1.4%</td>
                  <td className="py-2.5 text-[#10b981]">2.4x Faster</td>
                </tr>
                <tr>
                  <td className="py-2.5 text-[#A8B3BA]">Standard Random (Lloyd)</td>
                  <td className="py-2.5 tabular-nums text-[#A8B3BA]">17.8 ± 4.5</td>
                  <td className="py-2.5 tabular-nums text-[#f59e0b]">24.8% (High)</td>
                  <td className="py-2.5 tabular-nums text-[#A8B3BA]">± 12.6%</td>
                  <td className="py-2.5 text-[#68747D]">Baseline</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
