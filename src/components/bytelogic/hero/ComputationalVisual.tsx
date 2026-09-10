'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Network, GitGraph, Activity, Binary, Play, Pause, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

type VisualMode = 'graph' | 'equation' | 'vector' | 'state';

export const ComputationalVisual: React.FC = () => {
  const [mode, setMode] = useState<VisualMode>('graph');
  const [isPlaying, setIsPlaying] = useState(true);
  const [step, setStep] = useState(0);
  const animationRef = useRef<number | null>(null);

  // Smooth computational tick animation
  useEffect(() => {
    let lastTime = performance.now();
    const loop = (time: number) => {
      if (isPlaying && time - lastTime > 60) {
        setStep((s) => (s + 1) % 1000);
        lastTime = time;
      }
      animationRef.current = requestAnimationFrame(loop);
    };
    animationRef.current = requestAnimationFrame(loop);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPlaying]);

  const modes: { id: VisualMode; label: string; code: string; icon: React.ReactNode }[] = [
    { id: 'graph', label: 'Graph', code: '01', icon: <Network className="w-3 h-3" /> },
    { id: 'equation', label: 'Matrix', code: '02', icon: <GitGraph className="w-3 h-3" /> },
    { id: 'vector', label: 'Vector Field', code: '03', icon: <Activity className="w-3 h-3" /> },
    { id: 'state', label: '01 State', code: '04', icon: <Binary className="w-3 h-3" /> },
  ];

  // Computational Graph Data
  const nodes = [
    { id: 'x1', x: 60, y: 70, label: 'x₁', val: '0.84' },
    { id: 'x2', x: 60, y: 150, label: 'x₂', val: '-0.31' },
    { id: 'x3', x: 60, y: 230, label: 'x₃', val: '0.59' },
    { id: 'h1', x: 190, y: 100, label: 'h₁', val: 'σ(z₁)' },
    { id: 'h2', x: 190, y: 200, label: 'h₂', val: 'σ(z₂)' },
    { id: 'y', x: 320, y: 150, label: 'ŷ', val: '0.92' },
  ];

  const edges = [
    { from: 'x1', to: 'h1', w: '0.72' },
    { from: 'x1', to: 'h2', w: '-0.45' },
    { from: 'x2', to: 'h1', w: '0.88' },
    { from: 'x2', to: 'h2', w: '0.34' },
    { from: 'x3', to: 'h1', w: '-0.12' },
    { from: 'x3', to: 'h2', w: '0.65' },
    { from: 'h1', to: 'y', w: '1.04' },
    { from: 'h2', to: 'y', w: '-0.77' },
  ];

  return (
    <div className="w-full rounded-[6px] bg-[#0E151B] border border-[#1C2830] overflow-hidden bl-tick-box shadow-xl">
      {/* Top Instrumentation Toolbar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0A0F14] border-b border-[#1C2830] text-xs font-mono">
        <div className="flex items-center gap-1 sm:gap-2">
          {modes.map((m) => (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              className={cn(
                'flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] border text-[11px] transition-all cursor-pointer',
                mode === m.id
                  ? 'border-[#019AA2] bg-[#019AA2]/15 text-[#019AA2] font-semibold'
                  : 'border-transparent text-[#68747D] hover:text-[#A8B3BA] hover:bg-[#131C24]'
              )}
            >
              <span>{m.code}</span>
              <span className="hidden sm:inline">{m.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[#68747D] font-mono tabular-nums hidden sm:inline">
            T: {(step * 0.05).toFixed(2)}s
          </span>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1 rounded-[4px] bg-[#131C24] border border-[#1C2830] text-[#A8B3BA] hover:text-[#019AA2] cursor-pointer"
            aria-label={isPlaying ? 'Pause simulation' : 'Play simulation'}
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </button>
          <button
            onClick={() => setStep(0)}
            className="p-1 rounded-[4px] bg-[#131C24] border border-[#1C2830] text-[#A8B3BA] hover:text-[#019AA2] cursor-pointer"
            aria-label="Reset simulation"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Computational Stage Canvas */}
      <div className="relative h-[280px] sm:h-[320px] w-full bg-[#070B0E] p-4 flex items-center justify-center select-none overflow-hidden">
        {/* Subtle Cartesian Coordinate Grid */}
        <div className="absolute inset-0 bl-cartesian-grid opacity-50" />

        {/* MODE 01: Computational Directed Graph */}
        {mode === 'graph' && (
          <svg className="w-full h-full max-w-[400px]" viewBox="0 0 380 290">
            {/* Edge Connections */}
            {edges.map((e, idx) => {
              const fromNode = nodes.find((n) => n.id === e.from)!;
              const toNode = nodes.find((n) => n.id === e.to)!;
              const pulsePos = (step * 2 + idx * 25) % 100;
              const pulseX = fromNode.x + ((toNode.x - fromNode.x) * pulsePos) / 100;
              const pulseY = fromNode.y + ((toNode.y - fromNode.y) * pulsePos) / 100;

              return (
                <g key={idx}>
                  <line
                    x1={fromNode.x}
                    y1={fromNode.y}
                    x2={toNode.x}
                    y2={toNode.y}
                    stroke="#1C2830"
                    strokeWidth="1.5"
                  />
                  {/* Subtle data pulse moving forward */}
                  {isPlaying && (
                    <circle
                      cx={pulseX}
                      cy={pulseY}
                      r="2"
                      fill="#019AA2"
                      opacity="0.8"
                    />
                  )}
                </g>
              );
            })}

            {/* Nodes */}
            {nodes.map((node) => (
              <g key={node.id} className="cursor-pointer">
                {/* Outer ring */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="18"
                  fill="#0E151B"
                  stroke="#1C2830"
                  strokeWidth="1.5"
                />
                {/* Node center highlight */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="3"
                  fill="#019AA2"
                />
                {/* Node Label */}
                <text
                  x={node.x}
                  y={node.y + 4}
                  textAnchor="middle"
                  fill="#F3F6F7"
                  fontSize="11"
                  fontFamily="var(--font-jetbrains)"
                  fontWeight="600"
                >
                  {node.label}
                </text>
                {/* Value annotation below */}
                <text
                  x={node.x}
                  y={node.y + 28}
                  textAnchor="middle"
                  fill="#68747D"
                  fontSize="9"
                  fontFamily="var(--font-jetbrains)"
                >
                  {node.val}
                </text>
              </g>
            ))}
          </svg>
        )}

        {/* MODE 02: Matrix & Tensor Transformation */}
        {mode === 'equation' && (
          <div className="w-full h-full flex flex-col items-center justify-center font-mono">
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <div className="flex items-center">
                <span className="text-xl sm:text-2xl text-[#68747D] mr-1">[</span>
                <div className="flex flex-col text-center space-y-1 text-[#F3F6F7]">
                  <span>cos(θ)</span>
                  <span>-sin(θ)</span>
                </div>
                <div className="flex flex-col text-center space-y-1 text-[#F3F6F7] ml-3">
                  <span>sin(θ)</span>
                  <span>cos(θ)</span>
                </div>
                <span className="text-xl sm:text-2xl text-[#68747D] ml-1">]</span>
              </div>

              <span className="text-[#019AA2] text-sm">×</span>

              <div className="flex items-center">
                <span className="text-xl sm:text-2xl text-[#68747D] mr-1">[</span>
                <div className="flex flex-col text-center space-y-1 text-[#A8B3BA]">
                  <span>x₁</span>
                  <span>x₂</span>
                </div>
                <span className="text-xl sm:text-2xl text-[#68747D] ml-1">]</span>
              </div>

              <span className="text-[#68747D] text-sm">=</span>

              <div className="flex items-center">
                <span className="text-xl sm:text-2xl text-[#68747D] mr-1">[</span>
                <div className="flex flex-col text-center space-y-1 text-[#019AA2] font-semibold">
                  <span>x′₁</span>
                  <span>x′₂</span>
                </div>
                <span className="text-xl sm:text-2xl text-[#68747D] ml-1">]</span>
              </div>
            </div>

            {/* Rotating 2D Coordinate Projection */}
            <div className="mt-6 w-32 h-32 relative border border-[#1C2830] rounded-[4px] bg-[#0E151B]">
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#1C2830]" />
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#1C2830]" />
              
              {/* Rotating vector */}
              {(() => {
                const angle = (step * 0.04) % (2 * Math.PI);
                const r = 45;
                const vx = Math.cos(angle) * r;
                const vy = -Math.sin(angle) * r;
                return (
                  <svg className="w-full h-full" viewBox="-64 -64 128 128">
                    <line x1="0" y1="0" x2={vx} y2={vy} stroke="#019AA2" strokeWidth="2" />
                    <circle cx={vx} cy={vy} r="3" fill="#019AA2" />
                    <line x1="0" y1="0" x2={-vy} y2={vx} stroke="#132279" strokeWidth="1.5" strokeDasharray="2,2" />
                  </svg>
                );
              })()}
              <div className="absolute bottom-1 right-2 text-[9px] text-[#68747D]">
                θ = {(((step * 0.04) % (2 * Math.PI)) * (180 / Math.PI)).toFixed(1)}°
              </div>
            </div>
          </div>
        )}

        {/* MODE 03: Vector Field & Loss Gradient Descent */}
        {mode === 'vector' && (
          <svg className="w-full h-full max-w-[380px]" viewBox="0 0 320 240">
            {/* Contour ellipses of loss surface */}
            <ellipse cx="160" cy="120" rx="130" ry="85" fill="none" stroke="#1C2830" strokeWidth="1" />
            <ellipse cx="160" cy="120" rx="90" ry="55" fill="none" stroke="#1C2830" strokeWidth="1" />
            <ellipse cx="160" cy="120" rx="50" ry="30" fill="none" stroke="#1C2830" strokeWidth="1" />
            <ellipse cx="160" cy="120" rx="20" ry="12" fill="none" stroke="#132279" strokeWidth="1.5" />

            {/* Global Optimum Target */}
            <circle cx="160" cy="120" r="3" fill="#019AA2" />
            <text x="160" y="140" textAnchor="middle" fill="#019AA2" fontSize="9" fontFamily="var(--font-jetbrains)">
              min L(θ)
            </text>

            {/* Gradient Descent Step Trajectory */}
            {(() => {
              const t = (step * 0.03) % 10;
              // Points along descent path
              const pathPoints = [
                { x: 50, y: 40 },
                { x: 95, y: 75 },
                { x: 130, y: 95 },
                { x: 148, y: 110 },
                { x: 160, y: 120 },
              ];

              return (
                <g>
                  {pathPoints.map((p, i) => i < pathPoints.length - 1 && (
                    <line
                      key={i}
                      x1={p.x}
                      y1={p.y}
                      x2={pathPoints[i + 1].x}
                      y2={pathPoints[i + 1].y}
                      stroke="#019AA2"
                      strokeWidth="1.5"
                      strokeDasharray={i > t ? '2,2' : undefined}
                      opacity={i <= t ? 1 : 0.3}
                    />
                  ))}
                  {pathPoints.map((p, i) => (
                    <circle
                      key={i}
                      cx={p.x}
                      cy={p.y}
                      r={i === 0 ? 4 : 2.5}
                      fill={i === 0 ? '#F3F6F7' : '#019AA2'}
                    />
                  ))}
                </g>
              );
            })()}

            <text x="50" y="30" fill="#A8B3BA" fontSize="9" fontFamily="var(--font-jetbrains)">
              θ₀ (Initial)
            </text>
          </svg>
        )}

        {/* MODE 04: Binary '01' Circuit State Machine */}
        {mode === 'state' && (
          <div className="w-full h-full flex flex-col items-center justify-center font-mono">
            {/* Circuit Traces & Binary State Grid */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
              {[
                { state: 'S₀₀', bin: '0000', label: 'FETCH' },
                { state: 'S₀₁', bin: '0001', label: 'DECODE' },
                { state: 'S₁₀', bin: '0010', label: 'EXEC' },
                { state: 'S₁₁', bin: '0011', label: 'WRITE' },
              ].map((s, idx) => {
                const active = Math.floor((step * 0.1) % 4) === idx;
                return (
                  <div
                    key={s.state}
                    className={cn(
                      'p-2 sm:p-3 rounded-[4px] border transition-all duration-150',
                      active
                        ? 'border-[#019AA2] bg-[#019AA2]/15 text-[#F3F6F7]'
                        : 'border-[#1C2830] bg-[#0E151B] text-[#68747D]'
                    )}
                  >
                    <div className="text-[10px] text-[#019AA2] font-semibold">{s.state}</div>
                    <div className="text-xs sm:text-sm font-bold tracking-widest text-[#F3F6F7] my-0.5">
                      {s.bin}
                    </div>
                    <div className="text-[9px] text-[#A8B3BA]">{s.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Binary Stream Bitstream */}
            <div className="mt-6 px-4 py-1.5 rounded-[4px] bg-[#0A0F14] border border-[#1C2830] text-xs text-[#019AA2] tracking-widest">
              <span>01001001 01001110 01010011 01010100</span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#0A0F14] border-t border-[#1C2830] text-[11px] font-mono text-[#68747D]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#019AA2] animate-pulse" />
          <span className="text-[#A8B3BA] uppercase tracking-wider">
            {mode === 'graph' && 'DIRECTED COMPUTATIONAL GRAPH • AUTODIFF'}
            {mode === 'equation' && 'SO(2) ROTATION MATRIX • AFFINE TRANSFORM'}
            {mode === 'vector' && 'L(θ) LOSS MANIFOLD • GRADIENT DESCENT'}
            {mode === 'state' && 'SYNCHRONOUS CLOCK CYCLE • 01 STATE MACHINE'}
          </span>
        </div>
        <span className="text-[#019AA2] font-medium hidden sm:inline">
          f(x) = σ(W · x + b)
        </span>
      </div>
    </div>
  );
};
