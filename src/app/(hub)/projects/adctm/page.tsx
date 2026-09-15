'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { AdctmHero } from '@/components/adctm/AdctmHero';
import { AdctmSimulationCanvas } from '@/components/adctm/AdctmSimulationCanvas';
import { AdctmArchitectureDiagram } from '@/components/adctm/AdctmArchitectureDiagram';
import { AdctmPhysicsModel } from '@/components/adctm/AdctmPhysicsModel';
import { AdctmBenchmarkDashboard } from '@/components/adctm/AdctmBenchmarkDashboard';
import { AdctmEngineeringInsights } from '@/components/adctm/AdctmEngineeringInsights';
import { AdctmStackAndCta } from '@/components/adctm/AdctmStackAndCta';

export default function AdctmProjectPage() {
  const [selectedController, setSelectedController] = useState<string>('rule_based');
  const [backendStatus, setBackendStatus] = useState<'checking' | 'online' | 'offline'>('checking');
  const [backendLatency, setBackendLatency] = useState<number | null>(null);

  // Poll health endpoint once on mount
  useEffect(() => {
    let isMounted = true;
    const checkHealth = async () => {
      try {
        const res = await fetch('/api/adctm/health', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          if (isMounted) {
            setBackendStatus(data.status === 'online' ? 'online' : 'offline');
            setBackendLatency(data.latencyMs ?? null);
          }
          return;
        }
      } catch {
        // Ignored
      }
      if (isMounted) {
        setBackendStatus('offline');
        setBackendLatency(null);
      }
    };

    checkHealth();
    return () => {
      isMounted = false;
    };
  }, []);

  const scrollToSimulation = () => {
    const el = document.getElementById('simulation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <article className="min-h-screen bg-[#010a0b] text-[#feffff]">
      {/* Top Back Navigation Bar */}
      <div className="border-b border-white/10 bg-[#010a0b]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between text-xs font-mono">
          <Link
            href="/work"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO WORK</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-white/40 hidden sm:inline">ADCTM // AUTONOMOUS THERMAL CONTROL</span>
            <span className="text-[#dfb15b]">LIVE DEMO</span>
          </div>
        </div>
      </div>

      {/* 01. Hero */}
      <AdctmHero
        backendStatus={backendStatus}
        backendLatency={backendLatency}
        onExploreClick={scrollToSimulation}
      />

      {/* 02. Live Interactive Simulation Canvas */}
      <AdctmSimulationCanvas
        backendOnline={backendStatus === 'online'}
        selectedController={selectedController}
        onControllerChange={setSelectedController}
      />

      {/* 03. Closed-Loop System Architecture */}
      <AdctmArchitectureDiagram
        activeController={selectedController}
      />

      {/* 04. Thermodynamic Physics Model (with expandable KaTeX derivation) */}
      <AdctmPhysicsModel />

      {/* 06. Canonical Benchmark Dashboard & Trade-Off Quadrant */}
      <AdctmBenchmarkDashboard
        selectedController={selectedController}
        onSelectController={setSelectedController}
      />

      {/* 07. Engineering Insights: What did the controller actually learn? */}
      <AdctmEngineeringInsights />

      {/* 09 & 10. Engineering Stack, CLI Reproducibility & Open Source */}
      <AdctmStackAndCta />
    </article>
  );
}
