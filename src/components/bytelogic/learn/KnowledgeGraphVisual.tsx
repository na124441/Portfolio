'use client';

import React, { useState, useEffect } from 'react';
import { Network, Sparkles, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Node {
  id: string;
  label: string;
  code: string;
  x: number;
  y: number;
  domain: string;
  connections: string[];
}

const NODES: Node[] = [
  { id: 'math', label: 'MATH', code: '04', x: 75, y: 70, domain: 'Spectral & Calculus', connections: ['stat', 'ml', 'algo'] },
  { id: 'stat', label: 'STATS', code: '05', x: 215, y: 60, domain: 'Likelihood & Inference', connections: ['math', 'ml'] },
  { id: 'algo', label: 'ALGO', code: '06', x: 335, y: 85, domain: 'Graphs & Optimization', connections: ['math', 'cs', 'ml'] },
  { id: 'ml', label: 'ML', code: '01', x: 130, y: 175, domain: 'Empirical Loss & Voronoi', connections: ['math', 'stat', 'dl', 'algo'] },
  { id: 'dl', label: 'DL', code: '02', x: 255, y: 185, domain: 'Tensors & Autodiff', connections: ['ml', 'sys', 'rl'] },
  { id: 'cs', label: 'CS', code: '07', x: 345, y: 200, domain: 'Automata & Memory Models', connections: ['algo', 'sys'] },
  { id: 'rl', label: 'RL', code: '03', x: 165, y: 280, domain: 'Bellman & Sequential Decision', connections: ['ml', 'dl'] },
  { id: 'sys', label: 'SYS', code: '08', x: 295, y: 285, domain: 'SIMD & Parallel Kernels', connections: ['dl', 'cs'] },
];

export const KnowledgeGraphVisual: React.FC<{ className?: string }> = ({ className }) => {
  const [activeNode, setActiveNode] = useState<string | null>('ml');
  const [pulseIndex, setPulseIndex] = useState(0);

  // Periodic signal pulse moving between connected nodes
  useEffect(() => {
    const timer = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % NODES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const activeNodeData = NODES.find((n) => n.id === activeNode);

  // Compute unique edges
  const edges = React.useMemo(() => {
    const pairSet = new Set<string>();
    const list: { from: Node; to: Node; id: string }[] = [];

    NODES.forEach((source) => {
      source.connections.forEach((targetId) => {
        const target = NODES.find((n) => n.id === targetId);
        if (target) {
          const key = [source.id, target.id].sort().join('--');
          if (!pairSet.has(key)) {
            pairSet.add(key);
            list.push({ from: source, to: target, id: key });
          }
        }
      });
    });

    return list;
  }, []);

  return (
    <div
      className={cn(
        'relative w-full max-w-[440px] rounded-[6px] border border-[#1C2830] bg-[#0A0F14]/90 backdrop-blur-md p-4 sm:p-5 text-[#F3F6F7] shadow-[0_12px_36px_rgba(0,0,0,0.65)] select-none overflow-hidden group',
        className
      )}
    >
      {/* Subtle Cartesian Blueprint Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bl-cartesian-grid" />

      {/* Header bar / Telemetry */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#1C2830] pb-2.5 mb-3 text-[10px] font-mono tracking-widest text-[#68747D]">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#019AA2] animate-pulse" />
          <span className="text-[#A8B3BA] font-semibold">KNOWLEDGE GRAPH</span>
          <span className="text-[#68747D]">SYS.01</span>
        </div>
        <div className="flex items-center gap-1 text-[#68747D]">
          <span>RELATIONS // 12</span>
        </div>
      </div>

      {/* SVG Computational Canvas */}
      <div className="relative w-full aspect-[4/3] flex items-center justify-center">
        <svg
          viewBox="0 0 420 340"
          className="w-full h-full"
          style={{ overflow: 'visible' }}
          aria-label="ByteLogic Knowledge Network Graph"
        >
          <defs>
            {/* Cyan glowing drop filter for active nodes */}
            <filter id="cyanGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Subtle line gradient */}
            <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1C2830" />
              <stop offset="50%" stopColor="#019AA2" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1C2830" />
            </linearGradient>
          </defs>

          {/* Graph Edges / Interconnections */}
          {edges.map((edge) => {
            const isConnectedToActive =
              activeNode && (edge.from.id === activeNode || edge.to.id === activeNode);

            return (
              <g key={edge.id}>
                {/* Background edge line */}
                <line
                  x1={edge.from.x}
                  y1={edge.from.y}
                  x2={edge.to.x}
                  y2={edge.to.y}
                  stroke={isConnectedToActive ? '#019AA2' : '#1C2830'}
                  strokeWidth={isConnectedToActive ? 1.75 : 1}
                  strokeOpacity={isConnectedToActive ? 0.85 : 0.6}
                  strokeDasharray={isConnectedToActive ? 'none' : '3 3'}
                  className="transition-all duration-300"
                />

                {/* Animated traveling signal particle if connected to active or pulsed */}
                {isConnectedToActive && (
                  <circle r="2.5" fill="#019AA2">
                    <animateMotion
                      path={`M ${edge.from.x} ${edge.from.y} L ${edge.to.x} ${edge.to.y}`}
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            );
          })}

          {/* Graph Nodes */}
          {NODES.map((node, i) => {
            const isActive = activeNode === node.id;
            const isConnected =
              activeNodeData?.connections.includes(node.id) || isActive;

            return (
              <g
                key={node.id}
                className="cursor-pointer group/node"
                onClick={() => setActiveNode(node.id)}
                onMouseEnter={() => setActiveNode(node.id)}
              >
                {/* Outer halo on active/connected */}
                {isActive && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="20"
                    fill="none"
                    stroke="#019AA2"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    className="animate-ping"
                    style={{ animationDuration: '3s' }}
                  />
                )}

                {/* Node boundary ring */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="15"
                  fill="#0E151B"
                  stroke={isActive ? '#019AA2' : isConnected ? '#132279' : '#1C2830'}
                  strokeWidth={isActive ? 2 : 1.25}
                  filter={isActive ? 'url(#cyanGlow)' : undefined}
                  className="transition-colors duration-200"
                />

                {/* Center dot */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="4"
                  fill={isActive ? '#019AA2' : isConnected ? '#F3F6F7' : '#68747D'}
                  className="transition-colors duration-200"
                />

                {/* Node Technical Label */}
                <text
                  x={node.x}
                  y={node.y + 26}
                  textAnchor="middle"
                  fill={isActive ? '#019AA2' : isConnected ? '#F3F6F7' : '#68747D'}
                  fontSize="9.5"
                  fontFamily="'JetBrains Mono', monospace"
                  fontWeight={isActive ? '700' : '500'}
                  letterSpacing="0.08em"
                  className="transition-colors duration-200"
                >
                  {node.label}
                </text>

                {/* Micro Code Identifier */}
                <text
                  x={node.x + 18}
                  y={node.y - 8}
                  fill="#68747D"
                  fontSize="7.5"
                  fontFamily="'JetBrains Mono', monospace"
                  opacity="0.8"
                >
                  {node.code}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Active Node Telemetry Footer */}
      <div className="relative z-10 mt-3 pt-2.5 border-t border-[#1C2830] flex items-center justify-between text-xs font-mono">
        <div className="flex flex-col">
          <span className="text-[10px] text-[#68747D] uppercase tracking-wider">
            Active Node // {activeNodeData?.code}
          </span>
          <span className="text-xs font-bold text-[#F3F6F7] mt-0.5">
            {activeNodeData?.label} — <span className="text-[#019AA2] font-normal">{activeNodeData?.domain}</span>
          </span>
        </div>

        <div className="flex items-center gap-1.5 px-2 py-1 rounded-[4px] bg-[#131C24] border border-[#1C2830] text-[10px] text-[#A8B3BA]">
          <Cpu className="w-3 h-3 text-[#019AA2]" />
          <span>{activeNodeData?.connections.length} Links</span>
        </div>
      </div>
    </div>
  );
};
