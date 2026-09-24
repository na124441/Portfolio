'use client';

import React, { useState, useEffect } from 'react';
import {
  Play,
  Send,
  CheckCircle2,
  XCircle,
  Clock,
  AlertOctagon,
  RefreshCw,
  Terminal,
  Cpu,
  Layers,
  ChevronRight,
  Info,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type {
  DsaProblem,
  DsaStatus,
  SubmissionVerdict,
} from '@/types/dsa-question';

interface TestRunnerPanelProps {
  problem: DsaProblem;
  status: DsaStatus;
  currentCode: string;
  selectedLanguage: 'cpp' | 'python';
  onSetStatus: (status: DsaStatus, reason?: string) => void;
  onSubmissionSuccess?: () => void;
  onOpenSubmissions?: () => void;
}

interface RunResultData {
  verdict: SubmissionVerdict;
  passedTests: number;
  totalTests: number;
  runtime: number | null;
  memory: number | null;
  compileError?: string | null;
  runtimeError?: string | null;
  failedTestIndex?: number | null;
  mode: 'run' | 'submit';
}

const VERDICT_DETAILS: Record<
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
    label: 'Judging Code...',
    textClass: 'text-cyan-400',
    bgClass: 'bg-cyan-500/10 border-cyan-500/30',
    icon: RefreshCw,
  },
};

export function TestRunnerPanel({
  problem,
  status,
  currentCode,
  selectedLanguage,
  onSetStatus,
  onSubmissionSuccess,
  onOpenSubmissions,
}: TestRunnerPanelProps) {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionMode, setExecutionMode] = useState<'run' | 'submit' | null>(null);
  const [lastResult, setLastResult] = useState<RunResultData | null>(null);

  const testCases = (problem.testCases || []).filter((tc) => tc.visibility !== 'hidden');
  const currentCase = testCases[activeCaseIndex] || testCases[0];

  const handleExecute = async (mode: 'run' | 'submit') => {
    if (isExecuting) return;
    setIsExecuting(true);
    setExecutionMode(mode);

    try {
      const response = await fetch('/api/dsa/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          problemSlug: problem.slug,
          language: selectedLanguage,
          sourceCode: currentCode,
          mode,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        setLastResult({
          verdict: 'SYSTEM_ERROR',
          passedTests: 0,
          totalTests: mode === 'run' ? testCases.length : testCases.length + 3,
          runtime: null,
          memory: null,
          runtimeError: errorData.error || 'Server request failed',
          mode,
        });
        return;
      }

      const data = await response.json();
      const verdict = data.verdict as SubmissionVerdict;

      setLastResult({
        verdict,
        passedTests: data.passedTests ?? 0,
        totalTests: data.totalTests ?? (mode === 'run' ? testCases.length : testCases.length + 3),
        runtime: data.runtime,
        memory: data.memory,
        compileError: data.compileError,
        runtimeError: data.runtimeError,
        failedTestIndex: data.failedTestIndex,
        mode,
      });

      if (mode === 'submit' && verdict === 'ACCEPTED') {
        onSetStatus('solved');
        onSubmissionSuccess?.();
      } else if (status === 'unattempted') {
        onSetStatus('attempted');
      }
    } catch (err) {
      setLastResult({
        verdict: 'SYSTEM_ERROR',
        passedTests: 0,
        totalTests: testCases.length,
        runtime: null,
        memory: null,
        runtimeError: err instanceof Error ? err.message : 'Execution failed',
        mode,
      });
    } finally {
      setIsExecuting(false);
      setExecutionMode(null);
    }
  };

  // Keyboard shortcut listener for Ctrl+Enter (Run) and Ctrl+Shift+Enter (Submit)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        if (e.shiftKey) {
          handleExecute('submit');
        } else {
          handleExecute('run');
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentCode, selectedLanguage, isExecuting]);

  const verdictDetail = lastResult ? VERDICT_DETAILS[lastResult.verdict] : null;

  return (
    <div className="flex flex-col bg-[#0A0F14] border border-[#1C2830] rounded-lg p-4 sm:p-5 bl-tick-box gap-4">
      {/* Header with Run / Submit / Status Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1C2830] pb-3">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#019AA2]" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F3F6F7]">
            Console &amp; Judge Runner
          </span>
          <span className="text-[11px] font-mono text-[#68747D]">
            ({testCases.length} Sample Cases)
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Revisit Toggle */}
          <button
            type="button"
            onClick={() => onSetStatus(status === 'revisit' ? 'attempted' : 'revisit', 'Marked for review')}
            className={cn(
              'flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-mono transition-all cursor-pointer',
              status === 'revisit'
                ? 'bg-purple-500/20 text-purple-400 border border-purple-500/40'
                : 'bg-[#0E151B] text-[#68747D] border border-[#1C2830] hover:text-purple-400 hover:border-purple-500/40'
            )}
            title="Mark for later spaced repetition review"
          >
            <RefreshCw className="w-3 h-3" />
            <span className="hidden sm:inline">Revisit</span>
          </button>

          {/* Run Code Action */}
          <button
            type="button"
            onClick={() => handleExecute('run')}
            disabled={isExecuting}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0E151B] border border-[#1C2830] hover:border-[#019AA2] text-[#F3F6F7] font-mono text-xs font-medium tracking-wider transition-colors cursor-pointer disabled:opacity-50"
            title="Run against public sample test cases (Ctrl + Enter)"
          >
            <Play className={cn('w-3.5 h-3.5 fill-current', isExecuting && executionMode === 'run' && 'animate-spin')} />
            <span>{isExecuting && executionMode === 'run' ? 'Running...' : 'Run Samples'}</span>
          </button>

          {/* Submit Code Action */}
          <button
            type="button"
            onClick={() => handleExecute('submit')}
            disabled={isExecuting}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#019AA2] hover:bg-[#02b3bc] text-[#05070A] font-mono text-xs font-semibold tracking-wider transition-colors cursor-pointer disabled:opacity-50"
            title="Submit to sandboxed judge with hidden test suite (Ctrl + Shift + Enter)"
          >
            <Send className={cn('w-3.5 h-3.5', isExecuting && executionMode === 'submit' && 'animate-pulse')} />
            <span>{isExecuting && executionMode === 'submit' ? 'Judging...' : 'Submit Solution'}</span>
          </button>
        </div>
      </div>

      {/* Test Case Tab Selector */}
      {testCases.length > 0 && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto bl-scrollbar pb-1">
            {testCases.map((tc, idx) => {
              const isFailedCase =
                lastResult?.failedTestIndex === idx && lastResult.mode === 'run';
              return (
                <button
                  key={tc.id}
                  type="button"
                  onClick={() => setActiveCaseIndex(idx)}
                  className={cn(
                    'px-3 py-1 text-xs font-mono rounded-[4px] border transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5',
                    activeCaseIndex === idx
                      ? 'bg-[#131C24] text-[#019AA2] border-[#019AA2]/50 font-semibold'
                      : 'bg-[#0E151B] text-[#68747D] border-[#1C2830] hover:text-[#A8B3BA]',
                    isFailedCase && 'border-rose-500/60 text-rose-400'
                  )}
                >
                  <span>Case {idx + 1}</span>
                  {isFailedCase && <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />}
                </button>
              );
            })}
          </div>

          {/* Active Test Case Inputs & Expectations */}
          {currentCase && (
            <div className="p-3.5 rounded-[6px] bg-[#05070A] border border-[#1C2830] font-mono text-xs flex flex-col gap-2">
              <div>
                <span className="text-[11px] text-[#68747D] block mb-0.5">Standard Input (stdin)</span>
                <pre className="text-[#F3F6F7] bg-[#0E151B] px-2.5 py-1.5 rounded border border-[#1C2830] block overflow-x-auto whitespace-pre font-mono text-[11px]">
                  {currentCase.input}
                </pre>
              </div>
              <div>
                <span className="text-[11px] text-[#68747D] block mb-0.5">Expected Output (stdout)</span>
                <pre className="text-emerald-400 bg-[#0E151B] px-2.5 py-1.5 rounded border border-[#1C2830] block overflow-x-auto whitespace-pre font-mono text-[11px]">
                  {currentCase.expectedOutput}
                </pre>
              </div>
              {currentCase.explanation && (
                <div className="text-[11px] font-sans text-[#A8B3BA] italic pt-0.5">
                  Note: {currentCase.explanation}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Execution / Judge Verdict Result Panel */}
      {lastResult && verdictDetail && (
        <div
          className={cn(
            'p-4 rounded-[6px] border flex flex-col gap-3 font-mono text-xs transition-all',
            verdictDetail.bgClass
          )}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              {React.createElement(verdictDetail.icon, {
                className: cn('w-4 h-4 shrink-0', verdictDetail.textClass),
              })}
              <span className={cn('font-semibold text-sm', verdictDetail.textClass)}>
                {verdictDetail.label}
              </span>
              <span className="text-[#68747D] text-xs">
                ({lastResult.mode === 'submit' ? 'Full Test Suite' : 'Sample Run'})
              </span>
            </div>

            <div className="flex items-center gap-3 text-[11px] text-[#A8B3BA]">
              <span>
                Tests Passed: <strong className="text-[#F3F6F7]">{lastResult.passedTests}</strong> / {lastResult.totalTests}
              </span>
              {lastResult.runtime !== null && (
                <span>
                  Runtime: <strong className="text-[#F3F6F7]">{lastResult.runtime} ms</strong>
                </span>
              )}
              {lastResult.memory !== null && (
                <span className="hidden sm:inline">
                  Memory: <strong className="text-[#F3F6F7]">{Math.round(lastResult.memory / 1024)} MB</strong>
                </span>
              )}
            </div>
          </div>

          {/* Compilation Error Output */}
          {lastResult.compileError && (
            <div className="p-3 rounded bg-[#070B0E] border border-yellow-500/30 text-yellow-300 text-[11px] font-mono whitespace-pre-wrap overflow-x-auto max-h-48 bl-scrollbar">
              <span className="text-yellow-500 font-bold block mb-1">Compiler Diagnostics:</span>
              {lastResult.compileError}
            </div>
          )}

          {/* Runtime Error Output */}
          {lastResult.runtimeError && (
            <div className="p-3 rounded bg-[#070B0E] border border-rose-500/30 text-rose-300 text-[11px] font-mono whitespace-pre-wrap overflow-x-auto max-h-48 bl-scrollbar">
              <span className="text-rose-500 font-bold block mb-1">Runtime Diagnostics:</span>
              {lastResult.runtimeError}
            </div>
          )}

          {/* Acceptance Feedback / Next Steps */}
          {lastResult.verdict === 'ACCEPTED' && (
            <div className="flex items-center justify-between pt-1 border-t border-emerald-500/20 text-[11px]">
              <span className="text-emerald-400">
                Problem automatically stamped as Solved in your personal progress record.
              </span>
              {onOpenSubmissions && (
                <button
                  type="button"
                  onClick={onOpenSubmissions}
                  className="text-[#019AA2] hover:underline flex items-center gap-1 font-semibold"
                >
                  View in History <ChevronRight className="w-3 h-3" />
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* Architecture Transparency Banner */}
      <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-[#68747D] bg-[#070B0E] p-2.5 rounded border border-[#1C2830]">
        <div className="flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5 text-[#019AA2] shrink-0" />
          <span>Execution Engine: Sandboxed C++17 Provider with isolated resource limits.</span>
        </div>
        <span className="text-[10px] text-[#A8B3BA] hidden sm:inline">
          Ctrl+Enter = Run | Ctrl+Shift+Enter = Submit
        </span>
      </div>
    </div>
  );
}

export default TestRunnerPanel;
