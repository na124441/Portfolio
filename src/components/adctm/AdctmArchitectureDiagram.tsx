'use client';

import React, { useState } from 'react';
import {
  Activity,
  Cpu,
  Flame,
  Gauge,
  Layers,
  Repeat,
  Shield,
  Sliders,
  Wind,
  Zap,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

interface AdctmArchitectureDiagramProps {
  activeController: string;
}

interface SystemNode {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  specifications: Record<string, string>;
}

const NODES: Record<string, SystemNode> = {
  workload: {
    id: 'workload',
    title: 'Computational Workload',
    subtitle: 'LAYER 0 // DISTURBANCE',
    category: 'Input',
    description: 'Dynamic server CPU/GPU compute demand producing instantaneous heat generation in each rack zone.',
    specifications: {
      'Volatilities': '0.03 (Easy), 0.08 (Medium), 0.18 (Hard)',
      'Bounds': 'Bounded random-walk in [0.0, 1.0]',
      'Generation Constant': 'ALPHA = 7.5 °C / unit',
    },
  },
  environment: {
    id: 'environment',
    title: 'Thermal Environment',
    subtitle: 'LAYER 1 // THERMODYNAMICS',
    category: 'Physics',
    description: 'Multi-zone server rack thermodynamics modeling heat influx, ambient thermal bleed, and mid-episode hardware chiller degradation.',
    specifications: {
      'Ambient Exchange': 'GAMMA = 0.10 (Tamb = 44.0°C)',
      'Diffusion': '1D Laplacian (KAPPA = 0.05)',
      'Fault Mode': 'Chiller degradation -50% capacity at step 10',
    },
  },
  monitoring: {
    id: 'monitoring',
    title: 'Telemetry & Monitoring',
    subtitle: 'LAYER 2 // OBSERVABILITY',
    category: 'Sensing',
    description: 'Continuous telemetry observation vector containing zone temperatures, historical workloads, actuator commands, and ambient state.',
    specifications: {
      'Observation Vector': 'Temperatures, Workloads, Cooling, Tamb, t, Ttarget, Tsafe',
      'Target Deadband': '61.0°C ± 1.5°C tolerance',
      'Safety Ceiling': '74.0°C critical junction limit',
    },
  },
  controller: {
    id: 'controller',
    title: 'Autonomous Controller',
    subtitle: 'LAYER 3 // POLICY DECISION',
    category: 'Control',
    description: 'Unified BaseController interface dispatching continuous per-zone cooling actions in [0.0, 1.0].',
    specifications: {
      'Supported Paradigms': 'Rule-Based, PID, PPO (RL), Zero',
      'Action Space': 'Continuous [0.0, 1.0] per zone',
      'PPO Inference': 'Stable-Baselines3 MLP continuous actor',
    },
  },
  cooling: {
    id: 'cooling',
    title: 'Cooling Actuation',
    subtitle: 'LAYER 4 // ACTUATION',
    category: 'Execution',
    description: 'Actuator command dispatch driving Computer Room Air Handlers (CRAHs) and variable-frequency cooling fans.',
    specifications: {
      'Cooling Constant': 'BETA = 8.0 °C / unit',
      'Degraded BETA': '4.0 °C / unit on Zone 03 (Index 2)',
      'Floor': 'Ambient facility temperature clamping',
    },
  },
  evaluation: {
    id: 'evaluation',
    title: 'Multi-Objective Evaluation',
    subtitle: 'LAYER 5 // TELEMETRY & METRICS',
    category: 'Scoring',
    description: 'Rigorous benchmark evaluator combining composite grading and 10 industrial thermal metrics.',
    specifications: {
      'Safety Weight': '40% (Safety-gated)',
      'Target Tracking': '30% (Deadband precision)',
      'Energy Efficiency': '20% (Actuation minimization)',
      'Control Smoothness': '10% (Jitter penalty)',
    },
  },
};

export const AdctmArchitectureDiagram: React.FC<AdctmArchitectureDiagramProps> = ({
  activeController,
}) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('controller');
  const selectedNode = NODES[selectedNodeId] || NODES.controller;

  return (
    <section id="architecture" className="py-16 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs text-[#dfb15b]">SECTION 03</span>
            <span className="text-white/30 font-mono text-xs">·</span>
            <span className="font-mono text-xs uppercase tracking-wider text-white/50">
              CLOSED-LOOP CONTROL TOPOLOGY
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#feffff]">
            System Architecture
          </h3>
          <p className="font-sans text-sm text-white/70 max-w-2xl mt-1 leading-relaxed">
            The closed-loop interaction between dynamic computational heat generation, physical multi-zone thermal diffusion,
            real-time telemetry monitoring, autonomous controller decision, and multi-objective performance evaluation.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE DATAFLOW PIPELINE */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left 2 Cols: Pipeline Visual */}
          <div className="lg:col-span-2 border border-white/10 bg-[#010a0b] p-6 space-y-4 relative">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#dfb15b] mb-4 flex items-center justify-between">
              <span>PIPELINE DATA FLOW</span>
              <span className="text-white/40">CLICK ANY NODE TO INSPECT SUBSYSTEM</span>
            </div>

            {/* Stage 1: Workload */}
            <div
              onClick={() => setSelectedNodeId('workload')}
              className={`p-4 border cursor-pointer transition-all ${
                selectedNodeId === 'workload'
                  ? 'border-[#dfb15b] bg-[#dfb15b]/5'
                  : 'border-white/10 bg-white/[0.01] hover:border-white/25'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <div>
                    <span className="font-mono text-xs font-bold text-[#feffff]">01. Computational Workload</span>
                    <span className="text-[10px] font-mono text-white/40 block">CPU & GPU dynamic stochastic walks (W_i,t)</span>
                  </div>
                </div>
                <Badge variant="outline" size="sm">
                  HEAT INFLUX
                </Badge>
              </div>
            </div>

            {/* Downward Connector */}
            <div className="flex justify-center my-1">
              <span className="font-mono text-xs text-[#dfb15b] animate-bounce">↓</span>
            </div>

            {/* Stage 2: Environment & Thermodynamics */}
            <div
              onClick={() => setSelectedNodeId('environment')}
              className={`p-4 border cursor-pointer transition-all ${
                selectedNodeId === 'environment'
                  ? 'border-[#dfb15b] bg-[#dfb15b]/5'
                  : 'border-white/10 bg-white/[0.01] hover:border-white/25'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <div>
                    <span className="font-mono text-xs font-bold text-[#feffff]">02. Thermal Dynamics Environment</span>
                    <span className="text-[10px] font-mono text-white/40 block">
                      Multi-zone racks · 1D Laplacian diffusion · Chiller fault
                    </span>
                  </div>
                </div>
                <Badge variant="outline" size="sm">
                  PHYSICS ODE
                </Badge>
              </div>
            </div>

            {/* Downward Connector */}
            <div className="flex justify-center my-1">
              <span className="font-mono text-xs text-[#dfb15b] animate-bounce">↓</span>
            </div>

            {/* Stage 3: Monitoring & Telemetry */}
            <div
              onClick={() => setSelectedNodeId('monitoring')}
              className={`p-4 border cursor-pointer transition-all ${
                selectedNodeId === 'monitoring'
                  ? 'border-[#dfb15b] bg-[#dfb15b]/5'
                  : 'border-white/10 bg-white/[0.01] hover:border-white/25'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Gauge className="w-4 h-4 text-cyan-400" />
                  <div>
                    <span className="font-mono text-xs font-bold text-[#feffff]">03. Telemetry & Sensor Monitoring</span>
                    <span className="text-[10px] font-mono text-white/40 block">
                      Zone temperatures, workloads, Tamb, target, safe limits
                    </span>
                  </div>
                </div>
                <Badge variant="outline" size="sm">
                  OBSERVATION
                </Badge>
              </div>
            </div>

            {/* Downward Connector */}
            <div className="flex justify-center my-1">
              <span className="font-mono text-xs text-[#dfb15b] animate-bounce">↓</span>
            </div>

            {/* Stage 4: Controller Layer with Active Highlighting */}
            <div
              onClick={() => setSelectedNodeId('controller')}
              className={`p-4 border cursor-pointer transition-all ${
                selectedNodeId === 'controller'
                  ? 'border-[#dfb15b] bg-[#dfb15b]/5 shadow-[0_0_20px_rgba(212,175,55,0.1)]'
                  : 'border-white/10 bg-white/[0.01] hover:border-white/25'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <Cpu className="w-4 h-4 text-[#dfb15b]" />
                  <div>
                    <span className="font-mono text-xs font-bold text-[#feffff]">04. Autonomous Controller</span>
                    <span className="text-[10px] font-mono text-white/40 block">Decoupled or neural policy dispatching C_i in [0, 1]</span>
                  </div>
                </div>
                <Badge variant="gold" size="sm">
                  ACTIVE: {activeController.toUpperCase()}
                </Badge>
              </div>

              {/* Controller Sub-grid with dynamic active highlight */}
              <div className="grid grid-cols-4 gap-2 font-mono text-[10px]">
                {[
                  { id: 'rule_based', label: 'Rule-Based', type: 'Heuristic' },
                  { id: 'pid', label: 'PID', type: 'Classical' },
                  { id: 'ppo', label: 'PPO (RL)', type: 'Neural Net' },
                  { id: 'zero', label: 'Zero', type: 'Passive' },
                ].map((c) => {
                  const isActive = activeController === c.id;
                  return (
                    <div
                      key={c.id}
                      className={`p-2 border text-center transition-all ${
                        isActive
                          ? 'border-[#d4af37] bg-[#d4af37]/20 text-[#feffff] font-bold shadow-[0_0_12px_rgba(212,175,55,0.3)]'
                          : 'border-white/10 bg-black/40 text-white/50'
                      }`}
                    >
                      <div className="truncate">{c.label}</div>
                      <div className="text-[8px] text-white/40 uppercase">{c.type}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Downward Connector */}
            <div className="flex justify-center my-1">
              <span className="font-mono text-xs text-[#dfb15b] animate-bounce">↓</span>
            </div>

            {/* Stage 5: Cooling Actuation & Evaluation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                onClick={() => setSelectedNodeId('cooling')}
                className={`p-3.5 border cursor-pointer transition-all ${
                  selectedNodeId === 'cooling'
                    ? 'border-[#dfb15b] bg-[#dfb15b]/5'
                    : 'border-white/10 bg-white/[0.01] hover:border-white/25'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Wind className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-mono text-xs font-bold text-[#feffff]">05. Cooling Actuation</span>
                </div>
                <p className="text-[10px] font-sans text-white/60">
                  Continuous CRAH fan RPM & chilled-water valve extraction.
                </p>
              </div>

              <div
                onClick={() => setSelectedNodeId('evaluation')}
                className={`p-3.5 border cursor-pointer transition-all ${
                  selectedNodeId === 'evaluation'
                    ? 'border-[#dfb15b] bg-[#dfb15b]/5'
                    : 'border-white/10 bg-white/[0.01] hover:border-white/25'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-mono text-xs font-bold text-[#feffff]">06. Evaluation & Scoring</span>
                </div>
                <p className="text-[10px] font-sans text-white/60">
                  4-part composite score + 10 industrial metrics feedback.
                </p>
              </div>
            </div>

            {/* Feedback Loop Indicator */}
            <div className="p-2 border border-white/5 bg-white/[0.01] flex items-center justify-between text-[10px] font-mono text-white/40">
              <span className="flex items-center gap-1.5">
                <Repeat className="w-3 h-3 text-[#dfb15b]" />
                <span>Closed-Loop Telemetry Recirculation (t → t+1)</span>
              </span>
              <span className="text-[#dfb15b]">24 Steps / Episode</span>
            </div>
          </div>

          {/* Right Col: Node Detail Inspector */}
          <div className="border border-white/10 bg-[#010a0b] p-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono text-[#dfb15b] uppercase tracking-wider block mb-1">
                  {selectedNode.subtitle}
                </span>
                <h4 className="font-display text-lg font-bold text-[#feffff]">
                  {selectedNode.title}
                </h4>
              </div>

              <p className="font-sans text-xs text-white/70 leading-relaxed">
                {selectedNode.description}
              </p>

              <div className="border-t border-white/10 pt-3 space-y-2.5">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">
                  TECHNICAL SPECIFICATIONS
                </span>
                {Object.entries(selectedNode.specifications).map(([key, val]) => (
                  <div key={key} className="p-2.5 bg-white/[0.02] border border-white/5 font-mono text-xs">
                    <span className="text-white/40 block text-[10px] uppercase mb-0.5">{key}</span>
                    <span className="text-white/90 text-[11px] font-medium">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-[10px] font-mono text-white/40">
              Active in live Python simulation runtime.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
