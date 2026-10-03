'use client';

import React, { useState, useEffect } from 'react';
import {
  Play,
  Send,
  CheckCircle2,
  XCircle,
  Clock,
  AlertTriangle,
  Plus,
  Terminal,
  HelpCircle,
  Code2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type {
  DsaProblem,
  DsaStatus,
  DsaTestCase,
} from '@/types/dsa-question';
import type { Verdict } from '@/lib/judging/types';
import { parseTestcaseParams } from '@/lib/bytelogic/leetcode-utils';
import { compareOutput } from '@/lib/judging/compare-output';

interface TestRunnerPanelProps {
  problem: DsaProblem;
  status: DsaStatus;
  currentCode: string;
  selectedLanguage: 'cpp' | 'python';
  onSetStatus: (status: DsaStatus, reason?: string) => void;
  onSubmissionSuccess?: () => void;
  onOpenSubmissions?: () => void;
  isExecutingExternal?: boolean;
  externalTrigger?: { mode: 'run' | 'submit'; timestamp: number } | null;
}

interface TestRunResult {
  mode: 'run' | 'submit';
  verdict: Verdict;
  passed: boolean;
  actualStdout?: string;
  expectedOutput?: string;
  runtimeMs?: number | null;
  memoryKb?: number | null;
  compileError?: string | null;
  runtimeError?: string | null;
  passedTests?: number;
  totalTests?: number;
  failedTestIndex?: number | null;
}

export function TestRunnerPanel({
  problem,
  status,
  currentCode,
  selectedLanguage,
  onSetStatus,
  onSubmissionSuccess,
  externalTrigger,
}: TestRunnerPanelProps) {
  const [activeTab, setActiveTab] = useState<'testcase' | 'result'>('testcase');
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);

  // Initialize test cases from problem
  const baseTestCases = (problem.testCases || []).filter((tc) => tc.visibility !== 'hidden');
  const [testCasesList, setTestCasesList] = useState<DsaTestCase[]>(
    baseTestCases.length > 0
      ? baseTestCases
      : (problem.examples || []).map((ex, i) => ({
          id: `tc-example-${i + 1}`,
          input: ex.input,
          expectedOutput: ex.output,
          explanation: ex.explanation,
        }))
  );

  const [isExecuting, setIsExecuting] = useState(false);
  const [executionMode, setExecutionMode] = useState<'run' | 'submit' | null>(null);
  const [lastResult, setLastResult] = useState<TestRunResult | null>(null);

  const currentCase = testCasesList[activeCaseIndex] || testCasesList[0];
  const parsedParams = parseTestcaseParams(currentCase?.input || '');

  // Add a new custom test case
  const handleAddCase = () => {
    const newIdx = testCasesList.length + 1;
    const newCase: DsaTestCase = {
      id: `tc-custom-${newIdx}-${Date.now()}`,
      input: currentCase?.input || '',
      expectedOutput: '',
      explanation: `Custom Test Case ${newIdx}`,
    };
    setTestCasesList((prev) => [...prev, newCase]);
    setActiveCaseIndex(testCasesList.length);
  };

  // Update input parameter of current case
  const handleParamChange = (paramIndex: number, newValue: string) => {
    const updatedParams = [...parsedParams];
    if (updatedParams[paramIndex]) {
      updatedParams[paramIndex].value = newValue;
      const reconstructedInput = updatedParams
        .map((p) => `${p.param} = ${p.value}`)
        .join(', ');
      setTestCasesList((prev) =>
        prev.map((c, idx) =>
          idx === activeCaseIndex ? { ...c, input: reconstructedInput } : c
        )
      );
    }
  };

  // Run or Submit Execution Engine
  const handleExecute = async (mode: 'run' | 'submit') => {
    if (isExecuting) return;
    setIsExecuting(true);
    setExecutionMode(mode);
    setActiveTab('result');

    try {
      if (mode === 'run') {
        const res = await fetch('/api/bytelogic/run', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            problemSlug: problem.slug,
            language: selectedLanguage,
            code: currentCode,
            customInput: currentCase?.input,
          }),
        });
        const data = await res.json();
        const expected = currentCase?.expectedOutput || '';
        const passed = compareOutput(data.stdout || '', expected);

        setLastResult({
          mode: 'run',
          verdict: data.verdict || (passed ? 'AC' : 'WA'),
          passed,
          actualStdout: data.stdout || '',
          expectedOutput: expected,
          runtimeMs: data.runtimeMs,
          memoryKb: data.memoryKb,
          compileError: data.compileError,
          runtimeError: data.runtimeError,
        });

        if (status === 'unattempted') {
          onSetStatus('attempted');
        }
      } else {
        const res = await fetch('/api/bytelogic/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            problemSlug: problem.slug,
            language: selectedLanguage,
            code: currentCode,
          }),
        });
        const data = await res.json();

        setLastResult({
          mode: 'submit',
          verdict: data.verdict || 'WA',
          passed: data.verdict === 'AC',
          runtimeMs: data.runtimeMs,
          memoryKb: data.memoryKb,
          compileError: data.compileError,
          runtimeError: data.runtimeError,
          passedTests: data.passedTests,
          totalTests: data.totalTests,
          failedTestIndex: data.failedTestIndex,
        });

        if (data.verdict === 'AC') {
          onSetStatus('solved');
          if (onSubmissionSuccess) onSubmissionSuccess();
        } else {
          onSetStatus('attempted');
        }
      }
    } catch (err) {
      setLastResult({
        mode,
        verdict: 'RE',
        passed: false,
        runtimeError: err instanceof Error ? err.message : 'Network execution failure',
      });
    } finally {
      setIsExecuting(false);
      setExecutionMode(null);
    }
  };

  // Listen to external trigger from header Run/Submit buttons
  useEffect(() => {
    if (externalTrigger && externalTrigger.timestamp > 0) {
      handleExecute(externalTrigger.mode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [externalTrigger?.timestamp]);

  // Keyboard shortcut: Ctrl+Enter = Run, Ctrl+Shift+Enter = Submit
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCode, selectedLanguage, activeCaseIndex]);

  return (
    <div className="flex flex-col bg-surface text-fg rounded-lg border border-line font-sans overflow-hidden h-full">
      {/* Testcase Tabs Header */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-bg-2 border-b border-line text-xs font-medium select-none shrink-0">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveTab('testcase')}
            className={cn(
              'flex items-center gap-1.5 px-3 py-1 rounded transition-colors cursor-pointer',
              activeTab === 'testcase'
                ? 'bg-surface-2 text-fg font-semibold'
                : 'text-fg-soft hover:text-fg hover:bg-surface-2'
            )}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-[#2cbb5d]" />
            <span>Testcase</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('result')}
            className={cn(
              'flex items-center gap-1.5 px-3 py-1 rounded transition-colors cursor-pointer',
              activeTab === 'result'
                ? 'bg-surface-2 text-fg font-semibold'
                : 'text-fg-soft hover:text-fg hover:bg-surface-2'
            )}
          >
            <Terminal className="w-3.5 h-3.5 text-accent" />
            <span>Test Result</span>
          </button>
        </div>

        {/* Action Buttons: Run & Submit */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleExecute('run')}
            disabled={isExecuting}
            className="flex items-center gap-1.5 px-3 py-1 rounded bg-surface-2 hover:bg-surface border border-line text-fg text-xs font-medium transition-colors cursor-pointer disabled:opacity-50"
            title="Run against sample test cases (Ctrl+Enter)"
          >
            <Play className={cn('w-3 h-3 fill-current', isExecuting && executionMode === 'run' && 'animate-spin')} />
            <span>Run</span>
          </button>

          <button
            type="button"
            onClick={() => handleExecute('submit')}
            disabled={isExecuting}
            className="flex items-center gap-1.5 px-3.5 py-1 rounded bg-accent hover:opacity-90 text-accent-ink text-xs font-semibold transition-opacity cursor-pointer disabled:opacity-50"
            title="Submit solution to official judge suite (Ctrl+Shift+Enter)"
          >
            <Send className={cn('w-3 h-3', isExecuting && executionMode === 'submit' && 'animate-pulse')} />
            <span>Submit</span>
          </button>
        </div>
      </div>

      {/* Panel Body */}
      <div className="p-3.5 sm:p-4 flex-1 overflow-y-auto bl-scrollbar flex flex-col justify-between">
        {activeTab === 'testcase' ? (
          <div className="flex flex-col gap-3">
            {/* Case selector pills: Case 1 | Case 2 | + */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {testCasesList.map((tc, idx) => (
                <button
                  key={tc.id}
                  type="button"
                  onClick={() => setActiveCaseIndex(idx)}
                  className={cn(
                    'px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer shrink-0',
                    activeCaseIndex === idx
                      ? 'bg-surface-2 text-fg font-semibold'
                      : 'bg-bg-2 text-fg-soft hover:text-fg hover:bg-surface-2'
                  )}
                >
                  Case {idx + 1}
                </button>
              ))}

              <button
                type="button"
                onClick={handleAddCase}
                className="p-1 rounded-md bg-bg-2 hover:bg-surface-2 text-fg-soft hover:text-fg transition-colors cursor-pointer shrink-0"
                title="Add Custom Test Case"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Parameter Input Fields */}
            <div className="flex flex-col gap-2.5 pt-1 font-mono text-xs">
              {parsedParams.map((p, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="text-fg-soft text-[11px]">
                    {p.param} =
                  </span>
                  <input
                    type="text"
                    value={p.value}
                    onChange={(e) => handleParamChange(idx, e.target.value)}
                    className="w-full bg-bg-2 text-fg px-3 py-2 rounded-md border border-line focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* TAB: TEST RESULT */
          <div className="flex flex-col gap-3 font-mono text-xs">
            {isExecuting ? (
              <div className="py-8 text-center text-fg-soft flex flex-col items-center justify-center gap-2 font-sans">
                <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                <span>
                  {executionMode === 'submit' ? 'Judging solution against test suite...' : 'Executing code in remote sandbox...'}
                </span>
              </div>
            ) : lastResult ? (
              <div className="flex flex-col gap-3">
                {/* Result Status Banner */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {lastResult.verdict === 'AC' ? (
                      <CheckCircle2 className="w-5 h-5 text-[#2cbb5d]" />
                    ) : lastResult.verdict === 'CE' ? (
                      <AlertTriangle className="w-5 h-5 text-[#facc15]" />
                    ) : lastResult.verdict === 'TLE' ? (
                      <Clock className="w-5 h-5 text-[#f97316]" />
                    ) : (
                      <XCircle className="w-5 h-5 text-[#ef4444]" />
                    )}

                    <span
                      className={cn(
                        'text-base font-bold font-sans',
                        lastResult.verdict === 'AC' ? 'text-[#2cbb5d]' :
                        lastResult.verdict === 'CE' ? 'text-[#facc15]' :
                        lastResult.verdict === 'TLE' ? 'text-[#f97316]' : 'text-[#ef4444]'
                      )}
                    >
                      {lastResult.verdict === 'AC' ? 'Accepted' :
                       lastResult.verdict === 'WA' ? 'Wrong Answer' :
                       lastResult.verdict === 'CE' ? 'Compilation Error' :
                       lastResult.verdict === 'TLE' ? 'Time Limit Exceeded' :
                       lastResult.verdict === 'MLE' ? 'Memory Limit Exceeded' :
                       lastResult.verdict === 'RE' ? 'Runtime Error' : 'Internal Error'}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-fg-soft">
                    {lastResult.runtimeMs !== undefined && lastResult.runtimeMs !== null && (
                      <span>Runtime: <strong className="text-fg">{lastResult.runtimeMs} ms</strong></span>
                    )}
                    {lastResult.memoryKb !== undefined && lastResult.memoryKb !== null && (
                      <span>Memory: <strong className="text-fg">{(lastResult.memoryKb / 1024).toFixed(1)} MB</strong></span>
                    )}
                  </div>
                </div>

                {/* Submit test progress breakdown */}
                {lastResult.mode === 'submit' && lastResult.totalTests !== undefined && (
                  <div className="text-xs text-fg-soft font-sans">
                    <span className="font-semibold text-fg">
                      {lastResult.passedTests} / {lastResult.totalTests}
                    </span>{' '}
                    test cases passed.
                    {lastResult.failedTestIndex !== undefined && lastResult.failedTestIndex !== null && (
                      <span className="text-[#ef4444] ml-2">
                        (Failed on test case #{lastResult.failedTestIndex + 1})
                      </span>
                    )}
                  </div>
                )}

                {/* Compilation Error Block */}
                {lastResult.compileError && (
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-[#facc15] font-sans font-semibold">Compiler Output:</span>
                    <pre className="p-3 rounded bg-bg border border-[#facc15]/30 text-[#fde047] whitespace-pre-wrap max-h-36 overflow-y-auto bl-scrollbar font-mono text-xs">
                      {lastResult.compileError}
                    </pre>
                  </div>
                )}

                {/* Runtime Error Block */}
                {lastResult.runtimeError && (
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-[#ef4444] font-sans font-semibold">Error Diagnostics:</span>
                    <pre className="p-3 rounded bg-bg border border-[#ef4444]/30 text-[#fca5a5] whitespace-pre-wrap max-h-36 overflow-y-auto bl-scrollbar font-mono text-xs">
                      {lastResult.runtimeError}
                    </pre>
                  </div>
                )}

                {/* Case Input & Output for Run Mode */}
                {lastResult.mode === 'run' && !lastResult.compileError && !lastResult.runtimeError && (
                  <div className="flex flex-col gap-2 p-3 rounded-lg bg-bg-2 border border-line">
                    <div>
                      <span className="text-fg-soft block text-[11px] mb-0.5">Input</span>
                      <div className="p-2 rounded bg-surface border border-line text-fg font-mono whitespace-pre-wrap">
                        {currentCase?.input || '(empty)'}
                      </div>
                    </div>
                    <div>
                      <span className="text-fg-soft block text-[11px] mb-0.5">Your Output (stdout)</span>
                      <div className="p-2 rounded bg-surface border border-line text-fg font-mono whitespace-pre-wrap">
                        {lastResult.actualStdout !== undefined && lastResult.actualStdout.length > 0
                          ? lastResult.actualStdout
                          : '(no output printed to stdout)'}
                      </div>
                    </div>
                    {lastResult.expectedOutput && (
                      <div>
                        <span className="text-fg-soft block text-[11px] mb-0.5">Expected Output</span>
                        <div className="p-2 rounded bg-surface border border-line text-[#2cbb5d] font-mono whitespace-pre-wrap">
                          {lastResult.expectedOutput}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="py-6 text-center text-fg-muted flex flex-col items-center justify-center gap-1 font-sans">
                <Terminal className="w-6 h-6 opacity-40 mb-1" />
                <span>Run or submit your solution to view sandbox execution output</span>
              </div>
            )}
          </div>
        )}

        {/* Footer: Keyboard shortcut help */}
        <div className="flex items-center justify-between pt-3 mt-3 border-t border-line text-[11px] text-fg-muted select-none font-sans shrink-0">
          <div className="flex items-center gap-1.5 hover:text-fg-soft transition-colors cursor-pointer">
            <Code2 className="w-3.5 h-3.5 text-accent" />
            <span>Sandboxed Engine</span>
            <HelpCircle className="w-3 h-3 text-fg-muted" />
          </div>

          <span className="font-mono text-[10px] text-fg-muted">
            Ctrl+Enter = Run | Ctrl+Shift+Enter = Submit
          </span>
        </div>
      </div>
    </div>
  );
}

export default TestRunnerPanel;
