'use client';

import React, { useState, useEffect } from 'react';
import {
  BarChart3,
  CheckCircle2,
  Clock,
  Layers,
  Award,
  RefreshCw,
  X,
  TrendingUp,
  Cpu,
  Flame,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { DSA_TOPICS } from '@/data/bytelogic/dsa/topics';
import type { DsaTopicMeta } from '@/types/dsa-question';

interface DsaStatsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface StatsSummary {
  totalProblems: number;
  totalSolved: number;
  totalAttempted: number;
  totalRevisit: number;
  totalSubmissions: number;
  acceptedSubmissions: number;
  acceptanceRate: number;
}

interface DifficultyStats {
  total: number;
  solved: number;
  attempted: number;
}

export function DsaStatsPanel({ isOpen, onClose }: DsaStatsPanelProps) {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<{
    summary: StatsSummary;
    difficulty: Record<string, DifficultyStats>;
    topics: Record<string, { total: number; solved: number; attempted: number }>;
    recentSubmissions: Array<{
      id: string;
      problemSlug: string;
      language: string;
      verdict: string;
      runtime: number | null;
      memory: number | null;
      createdAt: string;
    }>;
  } | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    setLoading(true);
    fetch('/api/dsa/stats')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) setStats(data);
      })
      .catch((err) => console.error('Failed to load DSA stats:', err))
      .finally(() => setLoading(false));
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#05070A]/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0F14] border border-[#1C2830] rounded-xl overflow-hidden shadow-2xl flex flex-col bl-tick-box">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#0E151B] border-b border-[#1C2830]">
          <div className="flex items-center gap-2.5">
            <BarChart3 className="w-5 h-5 text-[#019AA2]" />
            <div>
              <h2 className="font-sans text-sm sm:text-base font-semibold text-[#F3F6F7]">
                DSA Performance &amp; Mastery Telemetry
              </h2>
              <p className="font-mono text-[11px] text-[#A8B3BA]">
                Metrics computed strictly from real submission logs &amp; judge records
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#68747D] hover:text-[#F3F6F7] hover:bg-[#131C24] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 bl-scrollbar">
          {loading || !stats ? (
            <div className="flex items-center justify-center py-16 font-mono text-xs text-[#68747D] gap-2">
              <RefreshCw className="w-4 h-4 animate-spin text-[#019AA2]" />
              <span>Aggregating judge logs and telemetry...</span>
            </div>
          ) : (
            <>
              {/* Primary KPI Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="p-4 rounded-lg bg-[#0E151B] border border-[#1C2830] font-mono">
                  <span className="text-[10px] uppercase tracking-wider text-[#68747D] block mb-1">
                    Problems Solved
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold text-emerald-400">
                      {stats.summary.totalSolved}
                    </span>
                    <span className="text-xs text-[#68747D]">
                      / {stats.summary.totalProblems}
                    </span>
                  </div>
                  <div className="w-full bg-[#131C24] h-1.5 rounded-full mt-2 overflow-hidden">
                    <div
                      className="bg-emerald-400 h-full rounded-full transition-all"
                      style={{
                        width: `${Math.round((stats.summary.totalSolved / (stats.summary.totalProblems || 1)) * 100)}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#0E151B] border border-[#1C2830] font-mono">
                  <span className="text-[10px] uppercase tracking-wider text-[#68747D] block mb-1">
                    Acceptance Rate
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold text-[#019AA2]">
                      {stats.summary.acceptanceRate}%
                    </span>
                  </div>
                  <span className="text-[10px] text-[#A8B3BA] mt-1 block">
                    {stats.summary.acceptedSubmissions} of {stats.summary.totalSubmissions} submissions
                  </span>
                </div>

                <div className="p-4 rounded-lg bg-[#0E151B] border border-[#1C2830] font-mono">
                  <span className="text-[10px] uppercase tracking-wider text-[#68747D] block mb-1">
                    In Progress / Attempted
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold text-amber-400">
                      {stats.summary.totalAttempted}
                    </span>
                    <span className="text-xs text-[#68747D]">active</span>
                  </div>
                  <span className="text-[10px] text-[#A8B3BA] mt-1 block">
                    Open problems being worked on
                  </span>
                </div>

                <div className="p-4 rounded-lg bg-[#0E151B] border border-[#1C2830] font-mono">
                  <span className="text-[10px] uppercase tracking-wider text-[#68747D] block mb-1">
                    Spaced Revisit Backlog
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold text-purple-400">
                      {stats.summary.totalRevisit}
                    </span>
                    <span className="text-xs text-[#68747D]">marked</span>
                  </div>
                  <span className="text-[10px] text-[#A8B3BA] mt-1 block">
                    Needs reinforcement review
                  </span>
                </div>
              </div>

              {/* Difficulty Breakdown */}
              <div className="p-4 rounded-lg bg-[#0E151B] border border-[#1C2830] font-mono space-y-3">
                <span className="text-xs uppercase tracking-wider text-[#F3F6F7] font-semibold block">
                  Difficulty Distribution
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  {(['Warm-up', 'Easy', 'Medium', 'Hard'] as const).map((diff) => {
                    const d = stats.difficulty[diff] || { total: 0, solved: 0 };
                    const pct = d.total > 0 ? Math.round((d.solved / d.total) * 100) : 0;

                    let colorClass = 'text-blue-400';
                    let barColor = 'bg-blue-400';
                    if (diff === 'Easy') {
                      colorClass = 'text-emerald-400';
                      barColor = 'bg-emerald-400';
                    } else if (diff === 'Medium') {
                      colorClass = 'text-amber-400';
                      barColor = 'bg-amber-400';
                    } else if (diff === 'Hard') {
                      colorClass = 'text-rose-400';
                      barColor = 'bg-rose-400';
                    }

                    return (
                      <div key={diff} className="p-3 bg-[#070B0E] border border-[#1C2830] rounded">
                        <div className="flex justify-between items-center text-xs mb-1.5">
                          <span className={cn('font-semibold', colorClass)}>{diff}</span>
                          <span className="text-[#A8B3BA]">
                            {d.solved} / {d.total}
                          </span>
                        </div>
                        <div className="w-full bg-[#131C24] h-1.5 rounded-full overflow-hidden">
                          <div
                            className={cn('h-full rounded-full transition-all', barColor)}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Topic Mastery Progress */}
              <div className="p-4 rounded-lg bg-[#0E151B] border border-[#1C2830] font-mono space-y-3">
                <span className="text-xs uppercase tracking-wider text-[#F3F6F7] font-semibold block">
                  Curriculum Topic Coverage
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {DSA_TOPICS.map((topic: DsaTopicMeta) => {
                    const tStats = stats.topics[topic.name] || { total: 0, solved: 0 };
                    const pct = tStats.total > 0 ? Math.round((tStats.solved / tStats.total) * 100) : 0;

                    return (
                      <div
                        key={topic.id}
                        className="flex items-center justify-between p-2.5 rounded bg-[#070B0E] border border-[#1C2830]"
                      >
                        <div className="min-w-0 pr-2">
                          <span className="text-[#F3F6F7] truncate block text-[11px]">
                            {topic.name}
                          </span>
                          <span className="text-[10px] text-[#68747D]">
                            {tStats.solved} of {tStats.total} solved
                          </span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <div className="w-16 bg-[#131C24] h-1.5 rounded-full overflow-hidden">
                            <div
                              className="bg-[#019AA2] h-full rounded-full"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                          <span className="text-[10px] text-[#A8B3BA] tabular-nums w-7 text-right">
                            {pct}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DsaStatsPanel;
