'use client';

import React, { useState } from 'react';
import { Cpu, ShieldCheck, Thermometer, Wind, Zap, RefreshCw, CheckCircle2 } from 'lucide-react';

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
  sensors: {
    id: 'sensors',
    name: 'Data Hall Sensor Grid',
    layer: 'LAYER 0 // INGESTION',
    latency: '10 Hz (100 ms)',
    math: 's_t = [T_{in}^{1..256}, T_{out}^{1..256}, \\Delta P, W_{cpu}]',
    description: '256 Modbus/BACnet physical telemetry nodes polling rack intake/exhaust temperatures and server airflow differential pressure.',
    metrics: { 'Sensor Count': '256 Channels', 'Bus Protocol': 'Modbus TCP / ZeroMQ', 'Junction Limit': '< 82.0°C' },
  },
  fno: {
    id: 'fno',
    name: 'Fourier Neural Operator',
    layer: 'LAYER 1 // SURROGATE',
    latency: '4.1 ms',
    math: 'v_{t+\\Delta t} = \\mathcal{F}^{-1}(R \\cdot \\mathcal{F}(v_t)) + W v_t',
    description: 'Reduced-order spectral operator mapping 2D/3D non-linear Navier-Stokes convection airflow fields across a 5-minute forward predictive horizon.',
    metrics: { 'Speedup vs CFD': '48,000x', 'Inference Device': 'Edge TensorRT', 'Forward Horizon': '300 seconds' },
  },
  sac: {
    id: 'sac',
    name: 'Safe Soft Actor-Critic',
    layer: 'LAYER 2 // POLICY',
    latency: '1.2 ms',
    math: 'J(\\pi) = \\mathbb{E}[\\sum \\gamma^t (R(s_t, a_t) + \\alpha \\mathcal{H}(\\pi(\\cdot|s_t)))]',
    description: 'Maximum-entropy deep reinforcement learning policy proposing continuous control actions for CRAH fan RPM and chiller water supply setpoints.',
    metrics: { 'Action Space': 'Continuous (16 Dim)', 'Exploration': 'Entropy Regulated', 'Objective': 'Min kW/TR' },
  },
  cbf: {
    id: 'cbf',
    name: 'Control Barrier Shield',
    layer: 'LAYER 3 // VERIFICATION',
    latency: '0.3 ms',
    math: '\\dot{h}(x) + \\gamma(h(x)) \\ge 0 \\quad \\text{where } h(x) = 27.0 - T_{intake}',
    description: 'Analytical safety envelope solved via Quadratic Programming (OSQP). Projects raw policy actions onto admissible safe control space before physical actuation.',
    metrics: { 'ASHRAE Boundary': '27.0°C Max', 'Solver': 'OSQP C++ Kernel', 'Violation Rate': '0.000%' },
  },
  actuators: {
    id: 'actuators',
    name: 'VFD & Chiller Dispatch',
    layer: 'LAYER 4 // EXECUTION',
    latency: '15 ms',
    math: 'u_t = \\text{clamp}(u^*, u_{min}, u_{max}) \\quad |\\Delta u| \\le \\text{slew\\_rate}',
    description: 'Translates certified control vectors into smooth 4-20mA current signals driving CRAH variable-frequency drives and chiller modulating valves.',
    metrics: { 'CRAH Slew Rate': '±5% RPM/s', 'Chiller Lag': '180–480s', 'Power Saved': '28.4% Mean' },
  },
};

export const AdctmControlLoopSvg: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('cbf');
  const [workloadLevel, setWorkloadLevel] = useState<'nominal' | 'burst' | 'low'>('nominal');
  const [signalFlowing, setSignalFlowing] = useState<boolean>(true);

  const selected = SUBSYSTEMS[activeNode];

  // Dynamic status based on workload
  const getThermalState = () => {
    switch (workloadLevel) {
      case 'burst':
        return {
          color: '#f59e0b',
          status: 'BURST LOAD (1.4 MW)',
          intakeT: '24.8°C',
          pue: '1.18',
          fanRpm: '88%',
          cbfMargin: '+2.2°C to Boundary',
        };
      case 'low':
        return {
          color: '#06b6d4',
          status: 'IDLE LOAD (280 kW)',
          intakeT: '19.4°C',
          pue: '1.09',
          fanRpm: '42%',
          cbfMargin: '+7.6°C to Boundary',
        };
      default:
        return {
          color: '#22c55e',
          status: 'NOMINAL LOAD (720 kW)',
          intakeT: '22.1°C',
          pue: '1.14',
          fanRpm: '64%',
          cbfMargin: '+4.9°C to Boundary',
        };
    }
  };

  const thermal = getThermalState();

  return (
    <div className="surface-workspace rounded-none border border-white/10 p-5 sm:p-7 relative overflow-hidden">
      {/* Schematic Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] radar-dot inline-block" />
          <span className="font-mono text-xs text-white/90 tracking-wider font-semibold">
            CYBER-PHYSICAL CONTROL LOOP // BESPOKE SCHEMATIC
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/20">
            CLOSED-LOOP RL + SURROGATE
          </span>
        </div>

        {/* Live Simulator Controls */}
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="text-white/50 text-[11px] mr-1 hidden sm:inline">WORKLOAD:</span>
          <button
            onClick={() => setWorkloadLevel('low')}
            className={`px-2.5 py-1 text-[10px] border transition-all ${
              workloadLevel === 'low'
                ? 'bg-[#06b6d4]/20 border-[#06b6d4] text-[#06b6d4]'
                : 'border-white/10 text-white/50 hover:text-white'
            }`}
          >
            LOW (280kW)
          </button>
          <button
            onClick={() => setWorkloadLevel('nominal')}
            className={`px-2.5 py-1 text-[10px] border transition-all ${
              workloadLevel === 'nominal'
                ? 'bg-[#22c55e]/20 border-[#22c55e] text-[#22c55e]'
                : 'border-white/10 text-white/50 hover:text-white'
            }`}
          >
            NOMINAL (720kW)
          </button>
          <button
            onClick={() => setWorkloadLevel('burst')}
            className={`px-2.5 py-1 text-[10px] border transition-all ${
              workloadLevel === 'burst'
                ? 'bg-[#f59e0b]/20 border-[#f59e0b] text-[#f59e0b]'
                : 'border-white/10 text-white/50 hover:text-white'
            }`}
          >
            BURST (1.4MW)
          </button>

          <button
            onClick={() => setSignalFlowing(!signalFlowing)}
            title="Toggle animated signal flow"
            className="ml-2 p-1.5 border border-white/10 text-white/60 hover:text-[#d4af37] hover:border-[#d4af37]/50"
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
            {/* Gradients */}
            <linearGradient id="goldGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#dfb15b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#edd899" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient id="feedbackGlow" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#dfb15b" stopOpacity="0.7" />
            </linearGradient>

            {/* Marker Arrows */}
            <marker
              id="arrow-gold"
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
              id="arrow-green"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#22c55e" />
            </marker>

            {/* Glow Filter */}
            <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#dfb15b" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* Technical Background Grid Lines */}
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

          {/* Forward Pipeline Conduits */}
          {/* Conduit 0: Sensors -> FNO */}
          <line
            x1="180"
            y1="100"
            x2="230"
            y2="100"
            stroke={signalFlowing ? '#dfb15b' : 'rgba(254,255,255,0.2)'}
            strokeWidth="2"
            markerEnd="url(#arrow-gold)"
            className={signalFlowing ? 'animate-signal-pulse' : ''}
          />
          <text x="205" y="90" fill="rgba(254,255,255,0.45)" fontSize="9" fontFamily="monospace" textAnchor="middle">
            10Hz
          </text>

          {/* Conduit 1: FNO -> SAC */}
          <line
            x1="370"
            y1="100"
            x2="420"
            y2="100"
            stroke={signalFlowing ? '#dfb15b' : 'rgba(254,255,255,0.2)'}
            strokeWidth="2"
            markerEnd="url(#arrow-gold)"
            className={signalFlowing ? 'animate-signal-pulse' : ''}
          />
          <text x="395" y="90" fill="rgba(254,255,255,0.45)" fontSize="9" fontFamily="monospace" textAnchor="middle">
            4.1ms
          </text>

          {/* Conduit 2: SAC -> CBF */}
          <line
            x1="560"
            y1="100"
            x2="610"
            y2="100"
            stroke={signalFlowing ? '#dfb15b' : 'rgba(254,255,255,0.2)'}
            strokeWidth="2"
            markerEnd="url(#arrow-gold)"
            className={signalFlowing ? 'animate-signal-pulse' : ''}
          />
          <text x="585" y="90" fill="rgba(254,255,255,0.45)" fontSize="9" fontFamily="monospace" textAnchor="middle">
            a_raw
          </text>

          {/* Conduit 3: CBF -> Actuators */}
          <line
            x1="750"
            y1="100"
            x2="800"
            y2="100"
            stroke={signalFlowing ? '#22c55e' : 'rgba(254,255,255,0.2)'}
            strokeWidth="2"
            markerEnd="url(#arrow-green)"
            className={signalFlowing ? 'animate-signal-pulse' : ''}
          />
          <text x="775" y="90" fill="#22c55e" fontSize="9" fontFamily="monospace" textAnchor="middle">
            u_safe
          </text>

          {/* RETURN FEEDBACK LOOP CONDUIT (Thermodynamic Physical Loop) */}
          <path
            d="M 865 145 L 865 240 L 110 240 L 110 145"
            fill="none"
            stroke="url(#feedbackGlow)"
            strokeWidth="2"
            markerEnd="url(#arrow-gold)"
            className={signalFlowing ? 'animate-signal-pulse-fast' : ''}
          />
          {/* Feedback annotation */}
          <rect x="390" y="228" width="180" height="24" fill="#010a0b" stroke="rgba(254,255,255,0.15)" />
          <text x="480" y="244" fill="#edd899" fontSize="10" fontFamily="monospace" textAnchor="middle">
            ↻ CONVECTIVE HEAT TRANSFER & DELAY
          </text>

          {/* NODE 0: Data Hall Sensor Grid */}
          <g
            onClick={() => setActiveNode('sensors')}
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            filter={activeNode === 'sensors' ? 'url(#nodeGlow)' : undefined}
          >
            <rect
              x="40"
              y="55"
              width="140"
              height="90"
              fill={activeNode === 'sensors' ? 'rgba(212, 175, 55, 0.12)' : 'rgba(1, 10, 11, 0.85)'}
              stroke={activeNode === 'sensors' ? '#dfb15b' : 'rgba(254, 255, 255, 0.15)'}
              strokeWidth={activeNode === 'sensors' ? '2' : '1'}
            />
            <text x="52" y="74" fill="#dfb15b" fontSize="8" fontFamily="monospace" fontWeight="bold">
              LAYER 0 // INGEST
            </text>
            <text x="52" y="92" fill="#feffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
              DATA HALL
            </text>
            <text x="52" y="106" fill="#feffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
              SENSOR GRID
            </text>
            <text x="52" y="128" fill="rgba(254,255,255,0.6)" fontSize="9" fontFamily="sans-serif">
              256 Telemetry Nodes
            </text>
            <circle cx="165" cy="70" r="3" fill="#22c55e" />
          </g>

          {/* NODE 1: FNO Neural Surrogate */}
          <g
            onClick={() => setActiveNode('fno')}
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            filter={activeNode === 'fno' ? 'url(#nodeGlow)' : undefined}
          >
            <rect
              x="230"
              y="55"
              width="140"
              height="90"
              fill={activeNode === 'fno' ? 'rgba(212, 175, 55, 0.12)' : 'rgba(1, 10, 11, 0.85)'}
              stroke={activeNode === 'fno' ? '#dfb15b' : 'rgba(254, 255, 255, 0.15)'}
              strokeWidth={activeNode === 'fno' ? '2' : '1'}
            />
            <text x="242" y="74" fill="#dfb15b" fontSize="8" fontFamily="monospace" fontWeight="bold">
              LAYER 1 // SURROGATE
            </text>
            <text x="242" y="92" fill="#feffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
              FNO NEURAL
            </text>
            <text x="242" y="106" fill="#feffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
              SURROGATE
            </text>
            <text x="242" y="128" fill="rgba(254,255,255,0.6)" fontSize="9" fontFamily="sans-serif">
              3D Fluid Airflow (4.1ms)
            </text>
            <circle cx="355" cy="70" r="3" fill="#06b6d4" />
          </g>

          {/* NODE 2: Safe Soft Actor-Critic */}
          <g
            onClick={() => setActiveNode('sac')}
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            filter={activeNode === 'sac' ? 'url(#nodeGlow)' : undefined}
          >
            <rect
              x="420"
              y="55"
              width="140"
              height="90"
              fill={activeNode === 'sac' ? 'rgba(212, 175, 55, 0.12)' : 'rgba(1, 10, 11, 0.85)'}
              stroke={activeNode === 'sac' ? '#dfb15b' : 'rgba(254, 255, 255, 0.15)'}
              strokeWidth={activeNode === 'sac' ? '2' : '1'}
            />
            <text x="432" y="74" fill="#dfb15b" fontSize="8" fontFamily="monospace" fontWeight="bold">
              LAYER 2 // POLICY
            </text>
            <text x="432" y="92" fill="#feffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
              SAFE SOFT
            </text>
            <text x="432" y="106" fill="#feffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
              ACTOR-CRITIC
            </text>
            <text x="432" y="128" fill="rgba(254,255,255,0.6)" fontSize="9" fontFamily="sans-serif">
              Action Proposal (1.2ms)
            </text>
            <circle cx="545" cy="70" r="3" fill="#a855f7" />
          </g>

          {/* NODE 3: Control Barrier Function Shield (Signature Node) */}
          <g
            onClick={() => setActiveNode('cbf')}
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            filter={activeNode === 'cbf' ? 'url(#nodeGlow)' : undefined}
          >
            <rect
              x="610"
              y="55"
              width="140"
              height="90"
              fill={activeNode === 'cbf' ? 'rgba(212, 175, 55, 0.16)' : 'rgba(1, 10, 11, 0.85)'}
              stroke={activeNode === 'cbf' ? '#dfb15b' : 'rgba(212, 175, 55, 0.6)'}
              strokeWidth={activeNode === 'cbf' ? '2.5' : '1.5'}
            />
            {/* Corner brackets on CBF Node */}
            <path d="M 607 63 L 607 52 L 618 52" fill="none" stroke="#dfb15b" strokeWidth="1.5" />
            <path d="M 743 137 L 743 148 L 732 148" fill="none" stroke="#dfb15b" strokeWidth="1.5" />
            
            <text x="622" y="74" fill="#dfb15b" fontSize="8" fontFamily="monospace" fontWeight="bold">
              LAYER 3 // SHIELD
            </text>
            <text x="622" y="92" fill="#feffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
              BARRIER SHIELD
            </text>
            <text x="622" y="106" fill="#feffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
              (CBF QP)
            </text>
            <text x="622" y="128" fill="#22c55e" fontSize="9" fontFamily="monospace">
              h(x) ≥ 0 [OSQP Safe]
            </text>
            <circle cx="735" cy="70" r="3.5" fill="#22c55e" className="radar-dot" />
          </g>

          {/* NODE 4: Actuator Dispatch */}
          <g
            onClick={() => setActiveNode('actuators')}
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            filter={activeNode === 'actuators' ? 'url(#nodeGlow)' : undefined}
          >
            <rect
              x="800"
              y="55"
              width="130"
              height="90"
              fill={activeNode === 'actuators' ? 'rgba(212, 175, 55, 0.12)' : 'rgba(1, 10, 11, 0.85)'}
              stroke={activeNode === 'actuators' ? '#dfb15b' : 'rgba(254, 255, 255, 0.15)'}
              strokeWidth={activeNode === 'actuators' ? '2' : '1'}
            />
            <text x="812" y="74" fill="#dfb15b" fontSize="8" fontFamily="monospace" fontWeight="bold">
              LAYER 4 // ACTUATE
            </text>
            <text x="812" y="92" fill="#feffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
              VFD & CHILLER
            </text>
            <text x="812" y="106" fill="#feffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
              DISPATCH
            </text>
            <text x="812" y="128" fill="rgba(254,255,255,0.6)" fontSize="9" fontFamily="sans-serif">
              4-20mA Signal Bus
            </text>
            <circle cx="915" cy="70" r="3" fill="#dfb15b" />
          </g>
        </svg>
      </div>

      {/* Interactive Subsystem Inspector HUD */}
      <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Active Selected Node Specs */}
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

          {/* Mathematical Formulation Display */}
          <div className="p-3.5 bg-black/40 border border-white/10 font-mono text-xs text-[#edd899] overflow-x-auto">
            <span className="text-[9px] text-white/40 block mb-1 uppercase tracking-wider">Governing Formulation:</span>
            <code>{selected.math}</code>
          </div>

          <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
            {selected.description}
          </p>

          {/* Subsystem Metrics Matrix */}
          <div className="grid grid-cols-3 gap-2.5 pt-1">
            {Object.entries(selected.metrics).map(([key, val]) => (
              <div key={key} className="p-2.5 bg-white/[0.02] border border-white/5">
                <span className="text-[10px] font-mono text-white/40 block uppercase">{key}</span>
                <span className="font-mono text-xs font-semibold text-[#feffff] mt-0.5 block">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Live Telemetry State Monitor */}
        <div className="lg:col-span-4 p-4 bg-white/[0.02] border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3 font-mono text-xs">
              <span className="text-white/60">LIVE FACILITY STATE</span>
              <span className="flex items-center gap-1.5" style={{ color: thermal.color }}>
                <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: thermal.color }} />
                {thermal.status}
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center">
                <span className="text-white/50 flex items-center gap-1.5">
                  <Thermometer className="w-3.5 h-3.5 text-[#dfb15b]" /> Rack Intake T:
                </span>
                <span className="font-bold text-[#feffff]">{thermal.intakeT}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-white/50 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#22c55e]" /> Facility PUE:
                </span>
                <span className="font-bold text-[#22c55e]">{thermal.pue}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-white/50 flex items-center gap-1.5">
                  <Wind className="w-3.5 h-3.5 text-[#06b6d4]" /> CRAH Fan Speed:
                </span>
                <span className="font-bold text-white/90">{thermal.fanRpm}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-white/50 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#dfb15b]" /> CBF Safe Margin:
                </span>
                <span className="font-bold text-[#dfb15b]">{thermal.cbfMargin}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-mono text-white/40 flex items-center gap-1.5">
            <CheckCircle2 className="w-3 h-3 text-[#22c55e]" />
            <span>ASHRAE A1 COMPLIANCE: 100.0% SECURED</span>
          </div>
        </div>
      </div>
    </div>
  );
};
