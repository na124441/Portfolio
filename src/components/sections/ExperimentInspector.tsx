'use client';

import React, { useState } from 'react';
import { LAB_EXPERIMENTS } from '@/data/experiments';
import { Experiment } from '@/types/content';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CodeViewer } from '@/components/ui/CodeViewer';
import {
  ChevronDown,
  ChevronUp,
  FlaskConical,
  CheckCircle2,
  AlertCircle,
  Clock,
  Terminal,
  Layers,
  ArrowRight,
} from 'lucide-react';

const STATUS_VARIANTS: Record<string, 'gold' | 'outline' | 'default' | 'muted'> = {
  Validated: 'gold',
  Prototype: 'default',
  Exploring: 'outline',
  Experiment: 'default',
  Idea: 'muted',
  Archived: 'muted',
};

// Interactive code snippets corresponding to key experiments
const EXPERIMENT_CODE_SNIPPETS: Record<string, { language: string; filename: string; code: string }[]> = {
  'exp-01-adctm-surrogate': [
    {
      language: 'Python',
      filename: 'fno_surrogate.py',
      code: `import torch
import torch.nn as nn
from torch.fft import rfft2, irfft2

class SpectralConv2d(nn.Module):
    """Fourier Neural Operator layer for 2D convective temperature fields."""
    def __init__(self, in_channels: int, out_channels: int, modes1: int, modes2: int):
        super().__init__()
        self.modes1, self.modes2 = modes1, modes2
        self.scale = 1.0 / (in_channels * out_channels)
        self.weights1 = nn.Parameter(self.scale * torch.rand(in_channels, out_channels, modes1, modes2, 2))
        self.weights2 = nn.Parameter(self.scale * torch.rand(in_channels, out_channels, modes1, modes2, 2))

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        batch, c, h, w = x.shape
        x_ft = rfft2(x) # 2D Real-to-Complex Fourier Transform
        out_ft = torch.zeros(batch, x.shape[1], h, w // 2 + 1, dtype=torch.cfloat, device=x.device)
        # Complex multiplication in frequency domain
        out_ft[:, :, :self.modes1, :self.modes2] = torch.einsum(
            "bixy,ioxy->boxy", x_ft[:, :, :self.modes1, :self.modes2],
            torch.view_as_complex(self.weights1)
        )
        return irfft2(out_ft, s=(h, w)) # Inverse FFT back to spatial mesh`,
    },
    {
      language: 'C++',
      filename: 'cbf_safety_shield.cpp',
      code: `// Analytical Control Barrier Function (CBF) safe action projection
#include <vector>
#include <algorithm>
#include <cmath>

struct ActuatorAction { double fan_rpm_target; double chilled_water_temp; };

ActuatorAction project_safe_action(const ActuatorAction& raw, double current_max_t, double lookahead_heat_flux) {
    const double ASHRAE_MAX_T = 27.0; // Celsius
    const double gamma_decay = 0.85;   // Barrier convergence parameter
    double h_x = ASHRAE_MAX_T - current_max_t;
    
    ActuatorAction safe = raw;
    // Condition: dot(h) + gamma * h(x) >= 0
    double predicted_temp_rise = lookahead_heat_flux * 0.12 - (raw.fan_rpm_target * 0.003);
    if (predicted_temp_rise > gamma_decay * h_x) {
        // Enforce minimum fan speed to ensure invariant set invariance
        safe.fan_rpm_target = std::clamp((predicted_temp_rise - gamma_decay * h_x) / 0.003, 1200.0, 3200.0);
    }
    return safe;
}`,
    },
  ],
  'exp-04-lockfree-ring': [
    {
      language: 'C++',
      filename: 'lockfree_ring.hpp',
      code: `#include <atomic>
#include <cstdint>
#include <new>

// Cache-line aligned Multi-Producer Single-Consumer queue
template <typename T, size_t Capacity = 65536>
class MPSCQueue {
    static_assert((Capacity & (Capacity - 1)) == 0, "Capacity must be power of 2");
    struct alignas(64) Cell {
        std::atomic<size_t> sequence;
        T data;
    };

    alignas(64) Cell buffer_[Capacity];
    alignas(64) std::atomic<size_t> head_{0}; // Cache line isolated producer pointer
    alignas(64) size_t tail_{0};               // Cache line isolated consumer pointer

public:
    bool try_enqueue(const T& item) {
        size_t head = head_.load(std::memory_order_relaxed);
        for (;;) {
            Cell& cell = buffer_[head & (Capacity - 1)];
            size_t seq = cell.sequence.load(std::memory_order_acquire);
            intptr_t diff = static_cast<intptr_t>(seq) - static_cast<intptr_t>(head);
            if (diff == 0) {
                if (head_.compare_exchange_weak(head, head + 1, std::memory_order_relaxed)) {
                    cell.data = item;
                    cell.sequence.store(head + 1, std::memory_order_release);
                    return true;
                }
            } else if (diff < 0) {
                return false; // Queue full
            } else {
                head = head_.load(std::memory_order_relaxed);
            }
        }
    }
};`,
    },
  ],
};

export const ExperimentInspector: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [expandedExpId, setExpandedExpId] = useState<string | null>('exp-01-adctm-surrogate');

  const categories = ['ALL', 'AI / ML', 'Systems', 'Graphics', 'Algorithms', 'Game Technology'];

  const filteredExperiments =
    selectedCategory === 'ALL'
      ? LAB_EXPERIMENTS
      : LAB_EXPERIMENTS.filter((exp) => exp.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedExpId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-8">
      {/* Category filter pills */}
      <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
        <span className="text-white/40 uppercase tracking-wider mr-2">Filter Lab:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 border transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'border-[#d4af37] bg-[#d4af37]/10 text-[#dfb15b]'
                : 'border-white/10 bg-white/[0.02] text-white/60 hover:text-white hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Experiments Stream */}
      <div className="space-y-6">
        {filteredExperiments.map((exp) => {
          const isExpanded = expandedExpId === exp.id;
          const codeSnippets = EXPERIMENT_CODE_SNIPPETS[exp.id];

          return (
            <article
              key={exp.id}
              className={`p-6 sm:p-8 glass-panel corner-brackets transition-all duration-200 ${
                isExpanded
                  ? 'border-[#d4af37]/45 shadow-[0_0_24px_rgba(212,175,55,0.06)]'
                  : 'hover:border-white/25'
              }`}
            >
              {/* Header metadata bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-semibold text-[#dfb15b]">
                    {exp.category}
                  </span>
                  <span className="text-white/30 font-mono text-xs">·</span>
                  <span className="font-mono text-xs text-white/40">{exp.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={STATUS_VARIANTS[exp.status] || 'default'} size="sm">
                    {exp.status}
                  </Badge>
                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="p-1 text-white/50 hover:text-[#dfb15b] transition-colors"
                    aria-label={isExpanded ? 'Collapse inspection' : 'Expand inspection'}
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Title */}
              <h3
                onClick={() => toggleExpand(exp.id)}
                className="font-display text-lg sm:text-xl font-bold text-[#feffff] hover:text-[#dfb15b] transition-colors cursor-pointer mb-3"
              >
                {exp.title}
              </h3>

              {/* Hypothesis callout */}
              <div className="p-4 bg-white/[0.02] border-l-2 border-[#d4af37] mb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#dfb15b] block mb-1">
                  Core Hypothesis:
                </span>
                <p className="font-sans text-xs sm:text-sm text-white/90 italic leading-relaxed">
                  "{exp.hypothesis}"
                </p>
              </div>

              {/* Setup & Observation side-by-side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans mb-4">
                <div className="p-4 border border-white/5 bg-white/[0.01] space-y-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white/40 block">
                    Experimental Setup:
                  </span>
                  <p className="text-white/70 leading-relaxed">{exp.setup}</p>
                </div>
                <div className="p-4 border border-white/5 bg-white/[0.01] space-y-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#dfb15b] block">
                    Observed Empirical Result:
                  </span>
                  <p className="text-white/80 leading-relaxed">{exp.observation}</p>
                </div>
              </div>

              {/* EXPANDED SECTION: Detailed telemetry, code, and conclusions */}
              {isExpanded && (
                <div className="pt-4 mt-4 border-t border-white/10 space-y-5 animate-in fade-in duration-200">
                  {/* Detailed conclusion */}
                  <div className="p-4 border border-white/10 bg-black/40 space-y-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#dfb15b] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e]" />
                      Scientific Conclusion & Verification:
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-white/90 leading-relaxed">
                      {exp.conclusion}
                    </p>
                  </div>

                  {/* Implementation code tabs if available */}
                  {codeSnippets && codeSnippets.length > 0 && (
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-wider text-white/50 mb-2 flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-[#dfb15b]" />
                        <span>Core Mathematical Implementation Kernel:</span>
                      </div>
                      <CodeViewer title={exp.title} tabs={codeSnippets} />
                    </div>
                  )}
                </div>
              )}

              {/* Action and metric footer */}
              <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                {exp.metrics && exp.metrics.length > 0 ? (
                  <div className="flex flex-wrap items-center gap-4">
                    {exp.metrics.map((m) => (
                      <div key={m.label} className="font-mono text-xs flex items-baseline gap-2">
                        <span className="text-white/40 text-[11px]">{m.label}:</span>
                        <span className="text-metallic-gold font-semibold">{m.value}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="font-mono text-[11px] text-white/40">In development</div>
                )}

                <button
                  onClick={() => toggleExpand(exp.id)}
                  className="inline-flex items-center gap-1 font-mono text-xs text-[#dfb15b] hover:text-white transition-colors cursor-pointer"
                >
                  <span>{isExpanded ? 'Collapse Inspector' : 'Inspect Details & Code'}</span>
                  {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
