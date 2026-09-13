'use client';

import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Cpu, Radio, RefreshCw, ShieldCheck, Zap } from 'lucide-react';

interface SubsystemInfo {
  id: string;
  name: string;
  layer: string;
  latency: string;
  math: string;
  description: string;
  metrics: Record<string, string>;
}

const SUBSYSTEMS: Record<string, SubsystemInfo> = {
  telemetry: {
    id: 'telemetry',
    name: 'Triple-Modular SPI Aggregator',
    layer: 'LAYER 0 // INGESTION',
    latency: '0.4 ms',
    math: 'X_t \\in \\mathbb{R}^{128} \\quad \\text{Triple-Voted SPI Majority}',
    description: 'Polls 128 analog propulsion, inertial, and thermal telemetry lines through radiation-hardened triple-modular redundant (TMR) SPI channels.',
    metrics: { 'Channel Count': '128 Analog', 'Polling Rate': '100 Hz', 'SRAM Budget': '8 KB' },
  },
  evt: {
    id: 'evt',
    name: 'Extreme Value Tail Detector',
    layer: 'LAYER 1 // PRE-FILTER',
    latency: '0.8 ms',
    math: 'P(X - u > y \\mid X > u) \\approx \\left(1 + \\xi \\frac{y}{\\sigma}\\right)^{-1/\\xi}',
    description: 'Sliding-window Generalized Pareto Distribution (GPD) modeling of extreme tails, filtering transient cosmic ray noise from real hardware degradation.',
    metrics: { 'Algorithm': 'POT Peak-Over-Threshold', 'Math Engine': 'Fixed-Point Q15', 'False Positive': '< 0.01%' },
  },
  gnn: {
    id: 'gnn',
    name: 'Temporal Graph Neural Engine',
    layer: 'LAYER 2 // ATTRIBUTION',
    latency: '2.6 ms',
    math: 'H^{(l+1)} = \\sigma\\left(\\tilde{D}^{-\\frac{1}{2}} \\tilde{A} \\tilde{D}^{-\\frac{1}{2}} H^{(l)} W^{(l)}\\right)',
    description: 'Sparse adjacency tensor inference mapping causal failure propagation between RCS thrusters, momentum wheels, and power distribution buses.',
    metrics: { 'Graph Nodes': '48 Entities', 'Tensor Weights': 'INT8 Quantized', 'Attribution Acc': '99.2%' },
  },
  arbiter: {
    id: 'arbiter',
    name: 'Autonomous Mitigation Arbiter',
    layer: 'LAYER 3 // SAFE FSM',
    latency: '0.4 ms',
    math: '\\mathcal{S}_{next} = \\delta(\\mathcal{S}_{curr}, \\text{FaultVector})',
    description: 'Deterministic finite-state machine with hard-wired fail-safe overrides. Commands electronic valve isolation and reconfigures attitude reaction wheel torque.',
    metrics: { 'Isolation Time': '14.2 ms', 'Safe-Mode Tripping': 'Zero False Trips', 'Interlocks': 'Hardware Gated' },
  },
  journal: {
    id: 'journal',
    name: 'Radiation-Hardened Flash Journal',
    layer: 'LAYER 4 // BLACK-BOX',
    latency: '5.0 ms',
    math: '\\text{CRC32} + \\text{Hamming(7,4) Single-Error Correct}',
    description: 'ECC-protected non-volatile ring buffer persisting 10-second pre-fault high-frequency telemetry snapshots for subsequent Deep Space Network downlinks.',
    metrics: { 'Storage Medium': 'NOR Flash (Rad-Hard)', 'ECC Protection': 'SEU Tolerant', 'Snapshot Window': '10.0 seconds' },
  },
};

export const SpacecraftAvionicsSvg: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('gnn');
  const [faultState, setFaultState] = useState<'nominal' | 'simulated'>('nominal');
  const [signalFlowing, setSignalFlowing] = useState<boolean>(true);

  const selected = SUBSYSTEMS[activeNode];

  const triggerFaultInjection = () => {
    setFaultState('simulated');
    setActiveNode('gnn');
    setTimeout(() => {
      // Keep simulated state for user to explore
    }, 100);
  };

  const clearFault = () => {
    setFaultState('nominal');
  };

  return (
    <div className="surface-workspace rounded-none border border-white/10 p-5 sm:p-7 relative overflow-hidden">
      {/* Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] radar-dot inline-block" />
          <span className="font-mono text-xs text-white/90 tracking-wider font-semibold">
            AVIONICS TELEMETRY & FAULT-ISOLATION BUS // BESPOKE SCHEMATIC
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-[#06b6d4] bg-[#06b6d4]/10 border border-[#06b6d4]/20">
            TMR RAD-HARDENED EDGE
          </span>
        </div>

        {/* Fault Injection Simulator Trigger */}
        <div className="flex items-center gap-2 font-mono text-xs">
          {faultState === 'nominal' ? (
            <button
              onClick={triggerFaultInjection}
              className="px-3 py-1 text-[10px] bg-red-500/10 border border-red-500/40 text-red-300 hover:bg-red-500/20 hover:border-red-400 transition-all flex items-center gap-1.5"
            >
              <Zap className="w-3 h-3 text-red-400" />
              <span>INJECT SEU RADIATION FAULT</span>
            </button>
          ) : (
            <button
              onClick={clearFault}
              className="px-3 py-1 text-[10px] bg-[#22c55e]/20 border border-[#22c55e] text-[#22c55e] hover:bg-[#22c55e]/30 transition-all flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-3 h-3 text-[#22c55e]" />
              <span>FAULT ISOLATED // RESET TELEMETRY</span>
            </button>
          )}

          <button
            onClick={() => setSignalFlowing(!signalFlowing)}
            title="Toggle animated signal flow"
            className="p-1.5 border border-white/10 text-white/60 hover:text-[#d4af37] hover:border-[#d4af37]/50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${signalFlowing ? 'text-[#d4af37]' : 'text-white/30'}`} />
          </button>
        </div>
      </div>

      {/* SVG Canvas Schematic */}
      <div className="w-full overflow-x-auto pb-2">
        <svg
          viewBox="0 0 940 320"
          className="w-full min-w-[780px] h-auto select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker
              id="sp-arrow-gold"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#dfb15b" />
            </marker>

            <marker
              id="sp-arrow-red"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#ef4444" />
            </marker>

            <linearGradient id="redundantBus" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#d4af37" stopOpacity="0.4" />
            </linearGradient>

            <filter id="spNodeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#dfb15b" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* Background Grid */}
          <g stroke="rgba(254, 255, 255, 0.04)" strokeWidth="1">
            <line x1="20" y1="50" x2="920" y2="50" />
            <line x1="20" y1="130" x2="920" y2="130" />
            <line x1="20" y1="210" x2="920" y2="210" />
            <line x1="20" y1="290" x2="920" y2="290" />
            <line x1="110" y1="20" x2="110" y2="300" />
            <line x1="300" y1="20" x2="300" y2="300" />
            <line x1="490" y1="20" x2="490" y2="300" />
            <line x1="680" y1="20" x2="680" y2="300" />
            <line x1="860" y1="20" x2="860" y2="300" />
          </g>

          {/* Primary Signal Conduits */}
          {/* Conduit 0: Telemetry -> EVT */}
          <line
            x1="180"
            y1="100"
            x2="230"
            y2="100"
            stroke={faultState === 'simulated' ? '#ef4444' : (signalFlowing ? '#dfb15b' : 'rgba(254,255,255,0.2)')}
            strokeWidth="2"
            markerEnd={faultState === 'simulated' ? 'url(#sp-arrow-red)' : 'url(#sp-arrow-gold)'}
            className={signalFlowing ? 'animate-signal-pulse' : ''}
          />
          <text x="205" y="90" fill="rgba(254,255,255,0.45)" fontSize="9" fontFamily="monospace" textAnchor="middle">
            0.4ms
          </text>

          {/* Conduit 1: EVT -> GNN */}
          <line
            x1="370"
            y1="100"
            x2="420"
            y2="100"
            stroke={faultState === 'simulated' ? '#ef4444' : (signalFlowing ? '#dfb15b' : 'rgba(254,255,255,0.2)')}
            strokeWidth="2"
            markerEnd={faultState === 'simulated' ? 'url(#sp-arrow-red)' : 'url(#sp-arrow-gold)'}
            className={signalFlowing ? 'animate-signal-pulse' : ''}
          />
          <text x="395" y="90" fill="rgba(254,255,255,0.45)" fontSize="9" fontFamily="monospace" textAnchor="middle">
            0.8ms
          </text>

          {/* Conduit 2: GNN -> Arbiter */}
          <line
            x1="560"
            y1="100"
            x2="610"
            y2="100"
            stroke={signalFlowing ? '#dfb15b' : 'rgba(254,255,255,0.2)'}
            strokeWidth="2"
            markerEnd="url(#sp-arrow-gold)"
            className={signalFlowing ? 'animate-signal-pulse' : ''}
          />
          <text x="585" y="90" fill="rgba(254,255,255,0.45)" fontSize="9" fontFamily="monospace" textAnchor="middle">
            2.6ms
          </text>

          {/* Conduit 3: Arbiter -> Flash Journal */}
          <line
            x1="750"
            y1="100"
            x2="800"
            y2="100"
            stroke={signalFlowing ? '#dfb15b' : 'rgba(254,255,255,0.2)'}
            strokeWidth="2"
            markerEnd="url(#sp-arrow-gold)"
            className={signalFlowing ? 'animate-signal-pulse' : ''}
          />
          <text x="775" y="90" fill="rgba(254,255,255,0.45)" fontSize="9" fontFamily="monospace" textAnchor="middle">
            Log
          </text>

          {/* TMR BYPASS CONDUIT (Deterministic Safe Override) */}
          <path
            d="M 110 145 L 110 240 L 680 240 L 680 145"
            fill="none"
            stroke="url(#redundantBus)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <rect x="330" y="228" width="220" height="24" fill="#010a0b" stroke="rgba(254,255,255,0.15)" />
          <text x="440" y="244" fill="#06b6d4" fontSize="10" fontFamily="monospace" textAnchor="middle">
            TRIPLE-MODULAR REDUNDANT BYPASS BUS
          </text>

          {/* NODE 0: Telemetry Aggregator */}
          <g
            onClick={() => setActiveNode('telemetry')}
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            filter={activeNode === 'telemetry' ? 'url(#spNodeGlow)' : undefined}
          >
            <rect
              x="40"
              y="55"
              width="140"
              height="90"
              fill={activeNode === 'telemetry' ? 'rgba(212, 175, 55, 0.12)' : 'rgba(1, 10, 11, 0.85)'}
              stroke={activeNode === 'telemetry' ? '#dfb15b' : 'rgba(254, 255, 255, 0.15)'}
              strokeWidth={activeNode === 'telemetry' ? '2' : '1'}
            />
            <text x="52" y="74" fill="#dfb15b" fontSize="8" fontFamily="monospace" fontWeight="bold">
              LAYER 0 // INGEST
            </text>
            <text x="52" y="92" fill="#feffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
              TELEMETRY BUS
            </text>
            <text x="52" y="106" fill="#feffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
              AGGREGATOR
            </text>
            <text x="52" y="128" fill="rgba(254,255,255,0.6)" fontSize="9" fontFamily="sans-serif">
              128 SPI/CAN Channels
            </text>
            <circle cx="165" cy="70" r="3" fill="#06b6d4" />
          </g>

          {/* NODE 1: EVT Tail Detector */}
          <g
            onClick={() => setActiveNode('evt')}
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            filter={activeNode === 'evt' ? 'url(#spNodeGlow)' : undefined}
          >
            <rect
              x="230"
              y="55"
              width="140"
              height="90"
              fill={activeNode === 'evt' ? 'rgba(212, 175, 55, 0.12)' : 'rgba(1, 10, 11, 0.85)'}
              stroke={
                faultState === 'simulated'
                  ? '#ef4444'
                  : activeNode === 'evt'
                  ? '#dfb15b'
                  : 'rgba(254, 255, 255, 0.15)'
              }
              strokeWidth={activeNode === 'evt' || faultState === 'simulated' ? '2' : '1'}
            />
            <text x="242" y="74" fill={faultState === 'simulated' ? '#ef4444' : '#dfb15b'} fontSize="8" fontFamily="monospace" fontWeight="bold">
              LAYER 1 // PRE-FILTER
            </text>
            <text x="242" y="92" fill="#feffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
              EVT TAIL
            </text>
            <text x="242" y="106" fill="#feffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
              DETECTOR
            </text>
            <text x="242" y="128" fill="rgba(254,255,255,0.6)" fontSize="9" fontFamily="sans-serif">
              POT Filter (0.8ms)
            </text>
            <circle cx="355" cy="70" r="3" fill={faultState === 'simulated' ? '#ef4444' : '#22c55e'} />
          </g>

          {/* NODE 2: Temporal GNN Engine (Signature) */}
          <g
            onClick={() => setActiveNode('gnn')}
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            filter={activeNode === 'gnn' ? 'url(#spNodeGlow)' : undefined}
          >
            <rect
              x="420"
              y="55"
              width="140"
              height="90"
              fill={activeNode === 'gnn' ? 'rgba(212, 175, 55, 0.16)' : 'rgba(1, 10, 11, 0.85)'}
              stroke={activeNode === 'gnn' ? '#dfb15b' : 'rgba(212, 175, 55, 0.6)'}
              strokeWidth={activeNode === 'gnn' ? '2.5' : '1.5'}
            />
            {/* Corner brackets on GNN */}
            <path d="M 417 63 L 417 52 L 428 52" fill="none" stroke="#dfb15b" strokeWidth="1.5" />
            <path d="M 553 137 L 553 148 L 542 148" fill="none" stroke="#dfb15b" strokeWidth="1.5" />

            <text x="432" y="74" fill="#dfb15b" fontSize="8" fontFamily="monospace" fontWeight="bold">
              LAYER 2 // ATTRIBUTION
            </text>
            <text x="432" y="92" fill="#feffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
              TEMPORAL GNN
            </text>
            <text x="432" y="106" fill="#feffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
              GRAPH ENGINE
            </text>
            <text x="432" y="128" fill="#dfb15b" fontSize="9" fontFamily="monospace">
              Root-Cause (2.6ms)
            </text>
            <circle cx="545" cy="70" r="3.5" fill="#dfb15b" className="radar-dot" />
          </g>

          {/* NODE 3: Mitigation Arbiter */}
          <g
            onClick={() => setActiveNode('arbiter')}
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            filter={activeNode === 'arbiter' ? 'url(#spNodeGlow)' : undefined}
          >
            <rect
              x="610"
              y="55"
              width="140"
              height="90"
              fill={activeNode === 'arbiter' ? 'rgba(212, 175, 55, 0.12)' : 'rgba(1, 10, 11, 0.85)'}
              stroke={activeNode === 'arbiter' ? '#dfb15b' : 'rgba(254, 255, 255, 0.15)'}
              strokeWidth={activeNode === 'arbiter' ? '2' : '1'}
            />
            <text x="622" y="74" fill="#dfb15b" fontSize="8" fontFamily="monospace" fontWeight="bold">
              LAYER 3 // POLICY
            </text>
            <text x="622" y="92" fill="#feffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
              MITIGATION
            </text>
            <text x="622" y="106" fill="#feffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
              ARBITER FSM
            </text>
            <text x="622" y="128" fill="#22c55e" fontSize="9" fontFamily="monospace">
              Safe Interlocks (0.4ms)
            </text>
            <circle cx="735" cy="70" r="3" fill="#22c55e" />
          </g>

          {/* NODE 4: Black-Box Flash Journal */}
          <g
            onClick={() => setActiveNode('journal')}
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            filter={activeNode === 'journal' ? 'url(#spNodeGlow)' : undefined}
          >
            <rect
              x="800"
              y="55"
              width="130"
              height="90"
              fill={activeNode === 'journal' ? 'rgba(212, 175, 55, 0.12)' : 'rgba(1, 10, 11, 0.85)'}
              stroke={activeNode === 'journal' ? '#dfb15b' : 'rgba(254, 255, 255, 0.15)'}
              strokeWidth={activeNode === 'journal' ? '2' : '1'}
            />
            <text x="812" y="74" fill="#dfb15b" fontSize="8" fontFamily="monospace" fontWeight="bold">
              LAYER 4 // JOURNAL
            </text>
            <text x="812" y="92" fill="#feffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
              BLACK-BOX
            </text>
            <text x="812" y="106" fill="#feffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
              FLASH ECC
            </text>
            <text x="812" y="128" fill="rgba(254,255,255,0.6)" fontSize="9" fontFamily="sans-serif">
              Ring Buffer Persist
            </text>
            <circle cx="915" cy="70" r="3" fill="#a855f7" />
          </g>
        </svg>
      </div>

      {/* Subsystem Details & Fault HUD */}
      <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono text-[#dfb15b] uppercase tracking-wider block">
                {selected.layer} · LATENCY: {selected.latency}
              </span>
              <h4 className="text-base sm:text-lg font-mono font-bold text-[#feffff] flex items-center gap-2 mt-0.5">
                {selected.name}
              </h4>
            </div>
            <span className="px-2.5 py-1 text-[11px] font-mono text-white/80 bg-white/5 border border-white/10">
              INSPECTOR ACTIVE
            </span>
          </div>

          <div className="p-3.5 bg-black/40 border border-white/10 font-mono text-xs text-[#edd899] overflow-x-auto">
            <span className="text-[9px] text-white/40 block mb-1 uppercase tracking-wider">Governing Formulation:</span>
            <code>{selected.math}</code>
          </div>

          <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
            {selected.description}
          </p>

          <div className="grid grid-cols-3 gap-2.5 pt-1">
            {Object.entries(selected.metrics).map(([key, val]) => (
              <div key={key} className="p-2.5 bg-white/[0.02] border border-white/5">
                <span className="text-[10px] font-mono text-white/40 block uppercase">{key}</span>
                <span className="font-mono text-xs font-semibold text-[#feffff] mt-0.5 block">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Spacecraft Health Status Panel */}
        <div className="lg:col-span-4 p-4 bg-white/[0.02] border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3 font-mono text-xs">
              <span className="text-white/60">AVIONICS HEALTH</span>
              {faultState === 'nominal' ? (
                <span className="text-[#22c55e] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e] inline-block" />
                  NOMINAL CRUISE
                </span>
              ) : (
                <span className="text-red-400 flex items-center gap-1.5 animate-pulse">
                  <AlertCircle className="w-3.5 h-3.5 text-red-400" />
                  SEU ISOLATED (14ms)
                </span>
              )}
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center">
                <span className="text-white/50">Cosmic Flux Rate:</span>
                <span className="font-bold text-[#feffff]">
                  {faultState === 'nominal' ? '12.4 rad/h' : '480.0 rad/h (SURGE)'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/50">Attitude Lock:</span>
                <span className="font-bold text-[#22c55e]">LOCKED (Star Tracker A)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/50">Active Thrusters:</span>
                <span className="font-bold text-white/90">
                  {faultState === 'nominal' ? '12 / 12 Operational' : '11 / 12 (V-03 Quarantined)'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/50">Total Loop Latency:</span>
                <span className="font-bold text-[#dfb15b]">4.2 ms (Limit: 10 ms)</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-mono text-white/40 flex items-center gap-1.5">
            <ShieldCheck className="w-3 h-3 text-[#06b6d4]" />
            <span>ECC ZERO HEAP ALLOCATIONS: SECURED</span>
          </div>
        </div>
      </div>
    </div>
  );
};
