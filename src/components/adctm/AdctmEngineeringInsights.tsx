'use client';

import React from 'react';
import {
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  Zap,
  Cpu,
  Target,
  ArrowRight,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export const AdctmEngineeringInsights: React.FC = () => {
  return (
    <section id="insights" className="py-16 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs text-[#dfb15b]">SECTION 07</span>
            <span className="text-white/30 font-mono text-xs">·</span>
            <span className="font-mono text-xs uppercase tracking-wider text-white/50">
              EMPIRICAL INTERPRETATION
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#feffff]">
            What Did the Controller Actually Learn?
          </h3>
          <p className="font-sans text-sm text-white/70 max-w-2xl mt-1 leading-relaxed">
            Interpreting reinforcement learning benchmarks requires intellectual honesty.
            A lower mean temperature is not an unqualified victory in industrial facility management.
          </p>
        </div>

        {/* 3 Major Findings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Finding 1 */}
          <div className="p-6 border border-white/10 bg-[#010a0b] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-[#dfb15b]">FINDING 01</span>
                <Badge variant="gold" size="sm">
                  REACTION TIME
                </Badge>
              </div>
              <h4 className="font-display text-base font-bold text-[#feffff] mb-2">
                Rapid Convergence to Safe Deadband
              </h4>
              <p className="font-sans text-xs text-white/70 leading-relaxed">
                PPO reaches the target thermal deadband in <strong>2.0 steps</strong>, compared to <strong>21.8 steps</strong> for the rule-based heuristic and <strong>6.2 steps</strong> for PID.
                By proactively saturating cooling actuators immediately upon workload spikes, it reduces total undercooling by <strong>95.8%</strong> (19.48 vs. 463.92 °C·steps).
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 font-mono text-[11px] text-emerald-400">
              Response speedup: -90.8%
            </div>
          </div>

          {/* Finding 2 */}
          <div className="p-6 border border-white/10 bg-[#010a0b] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-[#dfb15b]">FINDING 02</span>
                <Badge variant="outline" size="sm">
                  ENERGY PENALTY
                </Badge>
              </div>
              <h4 className="font-display text-base font-bold text-[#feffff] mb-2">
                The Cost of Aggressive Overcooling
              </h4>
              <p className="font-sans text-xs text-white/70 leading-relaxed">
                Because the reward function penalizes safety violations heavily, PPO learned that being
                substantially too cold (mean 49.60°C) is safer than approaching the 74.0°C threshold.
                Consequently, it consumes <strong>57.5% more cooling energy</strong> (100.16 vs 63.60) and incurs <strong>1,386.92 °C·steps of overcooling</strong>.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 font-mono text-[11px] text-amber-400">
              Energy delta: +57.5% Actuation
            </div>
          </div>

          {/* Finding 3 */}
          <div className="p-6 border border-white/10 bg-[#010a0b] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-[#dfb15b]">FINDING 03</span>
                <Badge variant="outline" size="sm">
                  DISTURBANCE
                </Badge>
              </div>
              <h4 className="font-display text-base font-bold text-[#feffff] mb-2">
                Chiller Degradation Robustness
              </h4>
              <p className="font-sans text-xs text-white/70 leading-relaxed">
                When the step 10 hardware fault halves Zone 03 chiller effectiveness, the baseline rule-based
                controller exhibits a thermal transient spike to 68.78°C. PPO, already maintaining high thermal headroom (+8.77°C),
                absorbs the 50% capacity loss with zero safety boundary violations.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 font-mono text-[11px] text-cyan-400">
              Safety Headroom: +8.77°C
            </div>
          </div>
        </div>

        {/* Central Takeaway Quote Callout */}
        <div className="p-6 sm:p-8 border-l-4 border-[#d4af37] bg-white/[0.02] relative">
          <div className="flex items-start gap-4">
            <Lightbulb className="w-6 h-6 text-[#dfb15b] flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#dfb15b] block mb-2">
                Core Systems Conclusion
              </span>
              <blockquote className="font-display text-lg sm:text-xl font-bold text-[#feffff] leading-relaxed mb-3">
                "The next optimization frontier is not simply better thermal control.
                It is better thermal control per unit of cooling energy."
              </blockquote>
              <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed">
                ADCTM demonstrates that naive reinforcement learning agents readily discover safety-first policies
                by aggressively overcooling. Achieving industrial sustainability requires multi-objective Pareto optimization,
                asymmetric temperature deadband rewards, and explicit chiller actuator slew-rate constraints.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
