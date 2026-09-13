'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Gamepad2, Compass, Layers, Cpu, Radio, ChevronRight, BookOpen } from 'lucide-react';

interface JournalPhase {
  phase: string;
  title: string;
  timeline: string;
  status: 'Completed' | 'In Progress' | 'Research' | 'Planned';
  description: string;
  breakthrough: string;
  hardProblem: string;
  stack: string[];
}

const JOURNAL_PHASES: JournalPhase[] = [
  {
    phase: 'PHASE 00',
    title: 'Mathematical & Spatial Voxel Foundations',
    timeline: 'Q2 2025 — Q4 2025',
    status: 'Completed',
    description:
      'Designing custom 3D spatial partitioning grids and continuous Level of Detail (LOD) chunk generators capable of infinite procedural streaming without memory leaks.',
    breakthrough:
      'Developed a dual-contouring meshing kernel in C++ that extracts smooth manifold geometry from signed distance fields (SDF) in under 3.2ms per 32x32x32 voxel chunk.',
    hardProblem:
      'Eliminating crack artifacts at seams between neighboring chunks at different Level-of-Detail octree resolutions without expensive stitch geometries.',
    stack: ['C++20', 'Octrees', 'Signed Distance Fields', 'SIMD'],
  },
  {
    phase: 'PHASE 01',
    title: 'Omnix Vulkan Engine Integration & Compute Physics',
    timeline: 'Q1 2026 — Present',
    status: 'In Progress',
    description:
      'Coupling the game world directly with Omnix Engine: bindless GPU resource indexing, dynamic push descriptors, and compute-driven particle fields for environmental physics.',
    breakthrough:
      'Implemented GPU frustum culling via indirect multidraw commands, reducing CPU draw call dispatch overhead to under 0.8ms per frame across 10,000 instanced props.',
    hardProblem:
      'Handling GPU memory fragmentation when streaming high-resolution textures into memory pools during rapid player movement.',
    stack: ['Vulkan 1.3', 'GLSL Compute', 'VMA', 'Tracy Profiler'],
  },
  {
    phase: 'PHASE 02',
    title: 'Acoustic Obstruction & Spatial Audio Ray Tracing',
    timeline: 'Mid 2026 — Target',
    status: 'Research',
    description:
      'Simulating realistic audio propagation through metallic corridors, air vents, and airlocks using low-density BVH acoustic ray tracing.',
    breakthrough:
      'Demonstrated 16-ray sound emitter occlusion testing in <0.12ms on background worker thread using lightweight bounding hierarchies.',
    hardProblem:
      'Simulating low-frequency diffraction around doorways without computing full Wave-Equation Helmholtz finite-element grids.',
    stack: ['Acoustic Modeling', 'BVH Ray Casting', 'DSP Filters'],
  },
  {
    phase: 'PHASE 03',
    title: 'Autonomous Entity Intelligence & Behavior Trees',
    timeline: '2027 — Horizon',
    status: 'Planned',
    description:
      'Developing emergent non-player entity decision architectures combining hierarchical task networks (HTN) with sensory perception grids.',
    breakthrough:
      'Initial experiments in deterministic state transitions ensuring 100% reproducible agent simulations across parallel threads.',
    hardProblem:
      'Balancing high-dimensional sensory awareness against strict 16ms frame budget constraints.',
    stack: ['HTN Planning', 'Behavior Trees', 'Spatial Hash Grids'],
  },
];

export const LastTransistorJournal: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(1);

  const activePhase = JOURNAL_PHASES[activePhaseIndex] || JOURNAL_PHASES[0];

  return (
    <section className="p-6 sm:p-8 glass-panel corner-brackets border-[#a855f7]/30 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 border border-[#a855f7]/40 bg-[#a855f7]/10 flex items-center justify-center text-[#a855f7]">
            <Gamepad2 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-xl font-bold text-[#feffff]">
                Last Transistor: Architecture Journal
              </h3>
              <Badge variant="outline" size="sm" className="text-[#a855f7] border-[#a855f7]/40">
                Long-term Horizon
              </Badge>
            </div>
            <p className="font-mono text-xs text-white/50">
              An open engineering log detailing custom engine milestones, mathematical breakthroughs, and failure autopsies.
            </p>
          </div>
        </div>

        <span className="font-mono text-xs text-[#a855f7] uppercase tracking-wider">
          Living Document
        </span>
      </div>

      {/* Phase selection timeline bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {JOURNAL_PHASES.map((phase, idx) => {
          const isSelected = activePhaseIndex === idx;
          return (
            <button
              key={phase.phase}
              onClick={() => setActivePhaseIndex(idx)}
              className={`p-3 text-left border transition-all cursor-pointer ${
                isSelected
                  ? 'border-[#a855f7] bg-[#a855f7]/15 text-[#feffff]'
                  : 'border-white/10 bg-white/[0.02] text-white/60 hover:border-white/20 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                <span className={isSelected ? 'text-[#a855f7] font-bold' : 'text-white/40'}>
                  {phase.phase}
                </span>
                <span className="text-[9px] uppercase tracking-wider">{phase.status}</span>
              </div>
              <div className="font-display text-xs font-bold truncate">
                {phase.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Phase Deep Dive Card */}
      <div className="p-6 bg-black/40 border border-white/10 space-y-6 animate-in fade-in duration-150">
        <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 border-b border-white/5">
          <div>
            <span className="font-mono text-xs text-[#a855f7] uppercase tracking-wider font-semibold block mb-1">
              {activePhase.phase} // {activePhase.timeline}
            </span>
            <h4 className="font-display text-lg font-bold text-[#feffff]">
              {activePhase.title}
            </h4>
          </div>
          <Badge
            variant={activePhase.status === 'Completed' ? 'gold' : activePhase.status === 'In Progress' ? 'default' : 'outline'}
            size="sm"
          >
            {activePhase.status}
          </Badge>
        </div>

        <p className="font-sans text-sm text-white/80 leading-relaxed">
          {activePhase.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
          <div className="p-4 bg-white/[0.02] border border-white/5 space-y-1.5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#a855f7] block">
              Algorithmic Breakthrough:
            </span>
            <p className="text-white/80 leading-relaxed">{activePhase.breakthrough}</p>
          </div>

          <div className="p-4 bg-white/[0.02] border border-white/5 space-y-1.5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-red-400/80 block">
              Core Technical Challenge:
            </span>
            <p className="text-white/80 leading-relaxed">{activePhase.hardProblem}</p>
          </div>
        </div>

        {/* Stack chips */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-white/5">
          <div className="flex flex-wrap gap-1.5">
            {activePhase.stack.map((item) => (
              <span
                key={item}
                className="font-mono text-[10px] text-white/50 bg-white/[0.03] border border-white/10 px-2 py-0.5"
              >
                {item}
              </span>
            ))}
          </div>

          <span className="font-mono text-[11px] text-white/40">
            Recorded in internal dev logs
          </span>
        </div>
      </div>
    </section>
  );
};
