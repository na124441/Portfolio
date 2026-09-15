'use client';

import React from 'react';
import { ArrowUpRight, Cpu, Play, Terminal, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface AdctmHeroProps {
  backendStatus: 'checking' | 'online' | 'offline';
  backendLatency: number | null;
  onExploreClick: () => void;
}

export const AdctmHero: React.FC<AdctmHeroProps> = ({
  backendStatus,
  backendLatency,
  onExploreClick,
}) => {
  return (
    <section className="relative pt-24 pb-16 border-b border-white/10 overflow-hidden">
      {/* Subtle background coordinate grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(254,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(254,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Badges & Live Backend Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="gold" size="sm">
              ENGINEERING DEMONSTRATION
            </Badge>
            <Badge variant="outline" size="sm">
              Python
            </Badge>
            <Badge variant="outline" size="sm">
              Control Systems
            </Badge>
            <Badge variant="outline" size="sm">
              Reinforcement Learning
            </Badge>
          </div>

          {/* Engine Connectivity Indicator */}
          <div className="flex items-center gap-2 font-mono text-[11px] px-2.5 py-1 border rounded-none glass-panel">
            {backendStatus === 'online' ? (
              <>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-emerald-400 font-semibold">Python Engine Online</span>
                {backendLatency !== null && (
                  <span className="text-white/40">({backendLatency}ms)</span>
                )}
              </>
            ) : backendStatus === 'checking' ? (
              <>
                <span className="w-2 h-2 rounded-full bg-[#dfb15b] animate-pulse" />
                <span className="text-[#dfb15b]">Connecting to ADCTM API...</span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-amber-400">Backend Offline</span>
                <span className="text-white/40">(Canonical Ground Truth Active)</span>
              </>
            )}
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#feffff] leading-none mb-3">
          ADCTM
        </h1>

        {/* Subheading */}
        <h2 className="font-display text-xl sm:text-2xl text-metallic-gold font-medium mb-6">
          Autonomous Data Centre Thermal Management
        </h2>

        {/* Supporting Statement */}
        <p className="font-sans text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl mb-8">
          A physics-grounded simulation and control framework for evaluating autonomous thermal-management
          strategies under dynamic computational workloads, thermal disturbances, and hardware degradation.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center gap-4">
          <Button onClick={onExploreClick} variant="primary" size="md">
            <Play className="w-4 h-4 fill-current mr-1" />
            <span>Explore Simulation</span>
          </Button>

          <Button
            href="https://github.com/na124441/ADCTM"
            variant="outline"
            size="md"
            isExternal
          >
            <span>View on GitHub</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-white/50 pl-4 border-l border-white/10">
            <Terminal className="w-3.5 h-3.5 text-[#dfb15b]" />
            <span>pip install -e .</span>
          </div>
        </div>
      </div>
    </section>
  );
};
