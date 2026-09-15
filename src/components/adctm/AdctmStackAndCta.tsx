'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Terminal, FileText, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const AdctmStackAndCta: React.FC = () => {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const STACK_ITEMS = [
    { name: 'Python 3.10+', role: 'Core runtime & physical ODE simulation harness' },
    { name: 'NumPy', role: 'Vectorized 1D Laplacian thermal diffusion & bounded walks' },
    { name: 'Pydantic v2', role: 'Strict schema validation for observations, configs & telemetry' },
    { name: 'Stable-Baselines3', role: 'Continuous Proximal Policy Optimization (PPO) actor-critic' },
    { name: 'FastAPI', role: 'Asynchronous simulation execution & telemetry bridge' },
    { name: 'Next.js 15 / React 19', role: 'High-density technical instrumentation & SVG data visualization' },
    { name: 'TypeScript', role: 'Static end-to-end interface typing & client safety' },
  ];

  return (
    <section id="open-source" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Engineering Stack Breakdown */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs text-[#dfb15b]">SECTION 09</span>
            <span className="text-white/30 font-mono text-xs">·</span>
            <span className="font-mono text-xs uppercase tracking-wider text-white/50">
              SYSTEM FOUNDATIONS
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#feffff] mb-6">
            Production Engineering Stack
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 font-mono text-xs">
            {STACK_ITEMS.map((item) => (
              <div
                key={item.name}
                className="p-4 border border-white/10 bg-white/[0.01] hover:border-white/20 transition-colors flex flex-col justify-between"
              >
                <div className="font-bold text-[#feffff] text-sm mb-1">{item.name}</div>
                <p className="font-sans text-xs text-white/60 leading-relaxed">{item.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* REPRODUCIBILITY & CLI COMMANDS */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 border border-white/15 bg-[#010a0b] relative overflow-hidden mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Terminal className="w-4 h-4 text-[#dfb15b]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#dfb15b]">
                  REPRODUCIBILITY & CLI
                </span>
              </div>
              <h4 className="font-display text-xl font-bold text-[#feffff]">
                Run the Benchmark on Your Own Machine
              </h4>
            </div>

            <Badge variant="gold" size="sm">
              PEP 517 / 621 PACKAGED
            </Badge>
          </div>

          <p className="font-sans text-xs sm:text-sm text-white/70 max-w-2xl leading-relaxed mb-6">
            ADCTM is packaged under <code className="text-[#dfb15b] font-mono">src/adctm</code> and includes
            an automated 91-test pytest regression suite locking down all numerical ground truths.
          </p>

          {/* Terminal Command Snippets */}
          <div className="space-y-3 font-mono text-xs">
            {[
              {
                id: 'install',
                label: 'Install package in editable mode with RL dependencies:',
                cmd: 'pip install -e ".[rl,server]"',
              },
              {
                id: 'bench',
                label: 'Run the canonical comparative benchmark across all controllers:',
                cmd: 'adctm benchmark --task medium --controller all',
              },
              {
                id: 'test',
                label: 'Verify canonical benchmark numerical regression test suite:',
                cmd: 'pytest tests/test_canonical_benchmark_regression.py',
              },
            ].map((snippet) => (
              <div key={snippet.id} className="p-3 bg-black/60 border border-white/10 rounded-none">
                <div className="text-[10px] text-white/40 mb-1.5">{snippet.label}</div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[#dfb15b] select-all font-semibold break-all">
                    $ {snippet.cmd}
                  </span>
                  <button
                    onClick={() => copyToClipboard(snippet.cmd, snippet.id)}
                    className="p-1 text-white/40 hover:text-white transition-colors"
                    title="Copy command"
                  >
                    {copiedCmd === snippet.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Open-Source Final Call to Action */}
        <div className="p-6 sm:p-8 border border-white/10 bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#dfb15b] block mb-1">
              OPEN SOURCE REPOSITORY
            </span>
            <h4 className="font-display text-lg font-bold text-[#feffff] mb-1">
              Inspect the Full Implementation on GitHub
            </h4>
            <p className="font-sans text-xs text-white/60 max-w-lg leading-relaxed">
              Explore the environment dynamics, controller implementations, benchmark runner,
              and Docker containerization. Distributed under the MIT License.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              href="https://github.com/na124441/ADCTM"
              variant="primary"
              size="md"
              isExternal
            >
              <GithubIcon size={16} className="mr-2 inline-block" />
              <span>Explore GitHub Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
