'use client';

import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, Flame, Wind, Globe, Layers, AlertTriangle } from 'lucide-react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { Badge } from '@/components/ui/Badge';

export const AdctmPhysicsModel: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // KaTeX rendered equation string
  const renderedOde = useMemo(() => {
    const math = `T_{i, t+1} = \\text{clip}\\Big(T_{i, t} + \\alpha W_{i, t} - \\beta_{\\text{eff}} C_{i, t} + \\gamma (T_{\\text{amb}} - T_{i, t}) + \\kappa \\nabla^2 T_{i, t},\\, T_{\\text{amb}},\\, 105.0^\\circ\\text{C}\\Big)`;
    try {
      return katex.renderToString(math, { displayMode: true, throwOnError: false });
    } catch {
      return math;
    }
  }, []);

  const renderedDiffusion = useMemo(() => {
    const math = `\\nabla^2 T_{i, t} = T_{i-1, t} + T_{i+1, t} - 2 T_{i, t} \\quad \\text{with zero-flux Neumann boundaries } (\\nabla T = 0)`;
    try {
      return katex.renderToString(math, { displayMode: true, throwOnError: false });
    } catch {
      return math;
    }
  }, []);

  return (
    <section id="physics" className="py-16 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs text-[#dfb15b]">SECTION 04</span>
            <span className="text-white/30 font-mono text-xs">·</span>
            <span className="font-mono text-xs uppercase tracking-wider text-white/50">
              FIRST-PRINCIPLES SIMULATION
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#feffff]">
            Thermodynamic Physics Engine
          </h3>
          <p className="font-sans text-sm text-white/70 max-w-2xl mt-1 leading-relaxed">
            ADCTM models multi-zone rack cooling using a physics-grounded discrete-time thermal ordinary
            differential equation (ODE), incorporating heat generation, active extraction, ambient dissipation, and inter-zone conduction.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* INTUITIVE 4-PART VISUAL THERMAL MODEL */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 font-mono text-xs">
          {/* Workload */}
          <div className="p-4 border border-white/10 bg-[#010a0b] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-orange-400 mb-2">
                <Flame className="w-4 h-4" />
                <span className="font-bold text-[11px] uppercase tracking-wider">Heat Generation</span>
              </div>
              <p className="font-sans text-xs text-white/70 leading-relaxed mb-3">
                Server computation drives temperature rises linearly with processor utilization.
              </p>
            </div>
            <div className="pt-2 border-t border-white/5 text-[11px] text-[#dfb15b]">
              α = 7.5 °C / unit load
            </div>
          </div>

          {/* Cooling Actuation */}
          <div className="p-4 border border-white/10 bg-[#010a0b] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 mb-2">
                <Wind className="w-4 h-4" />
                <span className="font-bold text-[11px] uppercase tracking-wider">Active Extraction</span>
              </div>
              <p className="font-sans text-xs text-white/70 leading-relaxed mb-3">
                CRAH fan modulation and chilled water loops actively extract thermal energy from server racks.
              </p>
            </div>
            <div className="pt-2 border-t border-white/5 text-[11px] text-cyan-400">
              β = 8.0 °C / unit cooling
            </div>
          </div>

          {/* Ambient Bleed */}
          <div className="p-4 border border-white/10 bg-[#010a0b] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 mb-2">
                <Globe className="w-4 h-4" />
                <span className="font-bold text-[11px] uppercase tracking-wider">Ambient Bleed</span>
              </div>
              <p className="font-sans text-xs text-white/70 leading-relaxed mb-3">
                Passive Newtonian convective thermal exchange with facility hall ambient air.
              </p>
            </div>
            <div className="pt-2 border-t border-white/5 text-[11px] text-emerald-400">
              γ = 0.10 · (Tamb = 44.0°C)
            </div>
          </div>

          {/* Inter-Zone Diffusion */}
          <div className="p-4 border border-white/10 bg-[#010a0b] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#dfb15b] mb-2">
                <Layers className="w-4 h-4" />
                <span className="font-bold text-[11px] uppercase tracking-wider">Thermal Diffusion</span>
              </div>
              <p className="font-sans text-xs text-white/70 leading-relaxed mb-3">
                Conduction between adjacent rack zones governed by a discrete 1D spatial Laplacian.
              </p>
            </div>
            <div className="pt-2 border-t border-white/5 text-[11px] text-[#dfb15b]">
              κ = 0.05 conduction factor
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* EXPANDABLE MATHEMATICAL DERIVATION PANEL */}
        {/* ========================================================================= */}
        <div className="border border-white/10 bg-[#010a0b]">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full p-4 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
          >
            <div className="flex items-center gap-2.5 font-mono text-xs">
              <span className="text-[#dfb15b]">▶</span>
              <span className="text-white/90 font-semibold uppercase tracking-wider">
                {isExpanded ? 'Hide Mathematical Thermal ODE Specification' : 'Show Mathematical Thermal ODE Specification & Boundary Conditions'}
              </span>
            </div>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-[#dfb15b]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-white/40" />
            )}
          </button>

          {isExpanded && (
            <div className="p-6 border-t border-white/10 bg-white/[0.01] space-y-6">
              {/* Equation Display */}
              <div>
                <span className="font-mono text-[10px] text-white/40 uppercase tracking-wider block mb-2">
                  Discrete-Time Thermal State Transition Equation:
                </span>
                <div
                  className="p-4 bg-black/60 border border-white/10 overflow-x-auto text-center font-mono text-sm sm:text-base text-[#dfb15b]"
                  dangerouslySetInnerHTML={{ __html: renderedOde }}
                />
              </div>

              {/* 1D Laplacian */}
              <div>
                <span className="font-mono text-[10px] text-white/40 uppercase tracking-wider block mb-2">
                  Inter-Zone 1D Laplacian Conduction Boundary:
                </span>
                <div
                  className="p-3 bg-black/60 border border-white/10 overflow-x-auto text-center font-mono text-xs sm:text-sm text-white/80"
                  dangerouslySetInnerHTML={{ __html: renderedDiffusion }}
                />
              </div>

              {/* Parameter Specification Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 bg-white/[0.02] border border-white/5">
                  <span className="text-[#dfb15b] block text-[10px] uppercase">α (Alpha) = 7.5</span>
                  <span className="text-white/70 text-[11px]">Workload heating coefficient</span>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/5">
                  <span className="text-cyan-400 block text-[10px] uppercase">β (Beta) = 8.0 / 4.0</span>
                  <span className="text-white/70 text-[11px]">Cooling capacity (halved on chiller fault)</span>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/5">
                  <span className="text-emerald-400 block text-[10px] uppercase">γ (Gamma) = 0.10</span>
                  <span className="text-white/70 text-[11px]">Convective ambient bleed rate</span>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/5">
                  <span className="text-[#dfb15b] block text-[10px] uppercase">κ (Kappa) = 0.05</span>
                  <span className="text-white/70 text-[11px]">Inter-zone thermal diffusion constant</span>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/5">
                  <span className="text-red-400 block text-[10px] uppercase">Ceiling = 105.0°C</span>
                  <span className="text-white/70 text-[11px]">Silicon junction physical clamping limit</span>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/5">
                  <span className="text-white/80 block text-[10px] uppercase">Floor = Tamb (44.0°C)</span>
                  <span className="text-white/70 text-[11px]">Thermodynamic ambient minimum floor</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
