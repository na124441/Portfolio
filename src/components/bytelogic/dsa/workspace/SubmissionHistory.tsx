'use client';

import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  XCircle,
  Clock,
  AlertOctagon,
  Cpu,
  Code2,
  RefreshCw,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { SubmissionRecord, SubmissionVerdict } from '@/types/dsa-question';

interface SubmissionHistoryProps {
  problemSlug: string;
  onLoadCode?: (code: string) => void;
  refreshTrigger?: number;
}

const VERDICT_STYLES: Record<
  SubmissionVerdict,
  { label: string; textClass: string; bgClass: string; icon: React.ComponentType<{ className?: string }> }
> = {
  ACCEPTED: {
    label: 'Accepted',
    textClass: 'text-emerald-400',
    bgClass: 'bg-emerald-500/10 border-emerald-500/30',
    icon: CheckCircle2,
  },
  WRONG_ANSWER: {
    label: 'Wrong Answer',
    textClass: 'text-rose-400',
    bgClass: 'bg-rose-500/10 border-rose-500/30',
    icon: XCircle,
  },
  TIME_LIMIT: {
    label: 'Time Limit Exceeded',
    textClass: 'text-amber-400',
    bgClass: 'bg-amber-500/10 border-amber-500/30',
    icon: Clock,
  },
  MEMORY_LIMIT: {
    label: 'Memory Limit Exceeded',
    textClass: 'text-purple-400',
    bgClass: 'bg-purple-500/10 border-purple-500/30',
    icon: AlertOctagon,
  },
  COMPILE_ERROR: {
    label: 'Compilation Error',
    textClass: 'text-yellow-400',
    bgClass: 'bg-yellow-500/10 border-yellow-500/30',
    icon: AlertOctagon,
  },
  RUNTIME_ERROR: {
    label: 'Runtime Error',
    textClass: 'text-rose-400',
    bgClass: 'bg-rose-500/10 border-rose-500/30',
    icon: AlertOctagon,
  },
  OUTPUT_LIMIT: {
    label: 'Output Limit Exceeded',
    textClass: 'text-orange-400',
    bgClass: 'bg-orange-500/10 border-orange-500/30',
    icon: AlertOctagon,
  },
  SYSTEM_ERROR: {
    label: 'System Error',
    textClass: 'text-zinc-400',
    bgClass: 'bg-zinc-500/10 border-zinc-500/30',
    icon: AlertOctagon,
  },
  QUEUED: {
    label: 'Queued',
    textClass: 'text-blue-400',
    bgClass: 'bg-blue-500/10 border-blue-500/30',
    icon: RefreshCw,
  },
  RUNNING: {
    label: 'Running',
    textClass: 'text-cyan-400',
    bgClass: 'bg-cyan-500/10 border-cyan-500/30',
    icon: RefreshCw,
  },
};

export function SubmissionHistory({
  problemSlug,
  onLoadCode,
  refreshTrigger,
}: SubmissionHistoryProps) {
  const [submissions, setSubmissions] = useState<SubmissionRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const fetchHistory = () => {
    setLoading(true);
    fetch(`/api/dsa/submissions?problemSlug=${problemSlug}&limit=20`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.submissions) {
          setSubmissions(data.submissions);
        }
      })
      .catch((err) => console.error('Failed to load submission history:', err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchHistory();
  }, [problemSlug, refreshTrigger]);

  if (loading) {
    return (
      <div className="flex flex-col gap-2 p-4 text-xs font-mono text-[#68747D]">
        <div className="flex items-center gap-2">
          <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#019AA2]" />
          <span>Retrieving submission records...</span>
        </div>
      </div>
    );
  }

  if (submissions.length === 0) {
    return (
      <div className="p-6 text-center border border-[#1C2830] rounded-lg bg-[#070B0E] font-mono text-xs text-[#68747D]">
        <p>No submitted solutions recorded yet for this problem.</p>
        <p className="text-[11px] text-[#A8B3BA] mt-1">
          Submit your C++ implementation to evaluate against the hidden test suite.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 font-mono text-xs">
      <div className="flex items-center justify-between px-1">
        <span className="text-[11px] uppercase tracking-wider text-[#A8B3BA] font-semibold">
          Submission History ({submissions.length})
        </span>
        <button
          type="button"
          onClick={fetchHistory}
          className="text-[#68747D] hover:text-[#019AA2] p-1 transition-colors"
          title="Refresh history"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex flex-col divide-y divide-[#1C2830] border border-[#1C2830] rounded-lg bg-[#070B0E] overflow-hidden">
        {submissions.map((sub) => {
          const config = VERDICT_STYLES[sub.verdict] || VERDICT_STYLES.SYSTEM_ERROR;
          const Icon = config.icon;
          const isExpanded = expandedId === sub.id;

          const dateStr = new Date(sub.createdAt).toLocaleString(undefined, {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          });

          return (
            <div key={sub.id} className="flex flex-col p-3 hover:bg-[#0E151B]/60 transition-colors">
              <div className="flex items-center justify-between gap-2">
                {/* Left: Verdict and badge */}
                <div className="flex items-center gap-2 min-w-0">
                  <div
                    className={cn(
                      'flex items-center gap-1.5 px-2 py-0.5 rounded border text-[11px] font-semibold',
                      config.bgClass,
                      config.textClass
                    )}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{config.label}</span>
                  </div>
                  <span className="text-[11px] text-[#68747D] hidden sm:inline">
                    {sub.passedTests}/{sub.totalTests} tests
                  </span>
                </div>

                {/* Right: Telemetry metrics & expand toggle */}
                <div className="flex items-center gap-3 shrink-0 text-[11px] text-[#A8B3BA]">
                  {sub.runtime !== null && (
                    <span className="tabular-nums">{sub.runtime} ms</span>
                  )}
                  {sub.memory !== null && (
                    <span className="tabular-nums hidden sm:inline">
                      {Math.round(sub.memory / 1024)} MB
                    </span>
                  )}
                  <span className="text-[#68747D]">{dateStr}</span>
                  <button
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? null : sub.id)}
                    className="p-1 text-[#68747D] hover:text-[#F3F6F7] transition-colors"
                    title={isExpanded ? 'Hide code' : 'View submitted code'}
                  >
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Expanded: Code and error output */}
              {isExpanded && (
                <div className="mt-3 pt-3 border-t border-[#1C2830] flex flex-col gap-2">
                  {sub.compileError && (
                    <div className="p-2.5 rounded bg-rose-950/30 border border-rose-900/50 text-rose-300 text-[11px] whitespace-pre-wrap font-mono overflow-x-auto">
                      {sub.compileError}
                    </div>
                  )}

                  {sub.runtimeError && (
                    <div className="p-2.5 rounded bg-amber-950/30 border border-amber-900/50 text-amber-300 text-[11px] whitespace-pre-wrap font-mono overflow-x-auto">
                      {sub.runtimeError}
                    </div>
                  )}

                  <div className="relative">
                    <pre className="p-3 bg-[#05070A] border border-[#1C2830] rounded text-[11px] text-[#F3F6F7] overflow-x-auto bl-scrollbar max-h-60 leading-relaxed font-mono whitespace-pre">
                      {sub.sourceCode}
                    </pre>

                    {onLoadCode && (
                      <button
                        type="button"
                        onClick={() => onLoadCode(sub.sourceCode)}
                        className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 bg-[#0E151B] border border-[#1C2830] hover:border-[#019AA2] text-[#A8B3BA] hover:text-[#019AA2] rounded text-[10px] transition-colors"
                        title="Load this code into the active editor"
                      >
                        <Code2 className="w-3 h-3" />
                        <span>Load in Editor</span>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SubmissionHistory;
