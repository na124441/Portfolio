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
      const combinedInput = updatedParams
        .map((p) => (p.param === 'input' ? p.value : `${p.param} = ${p.value}`))
        .join(', ');

      setTestCasesList((prev) =>
        prev.map((c, idx) =>
          idx === activeCaseIndex ? { ...c, input: combinedInput } : c
        )
      );
    }
  };

  // Core execution handler: Run (custom input) or Submit (official test cases)
  const handleExecute = async (mode: 'run' | 'submit') => {
    if (isExecuting) return;
    setIsExecuting(true);
    setExecutionMode(mode);
    setActiveTab('result');

    try {
      if (mode === 'run') {
        // Run: POST /api/execute
        const stdinInput = currentCase?.input || '';
        const response = await fetch('/api/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            language: selectedLanguage,
            code: currentCode,
            stdin: stdinInput,
          }),
        });

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          setLastResult({
            mode: 'run',
            verdict: 'IE',
            passed: false,
            runtimeError: errData.error || `Server returned HTTP ${response.status}`,
          });
          return;
        }

        const data = await response.json();

        if (data.compileError) {
          setLastResult({
            mode: 'run',
            verdict: 'CE',
            passed: false,
            compileError: data.compileError,
            runtimeMs: data.timeMs,
          });
        } else if (data.isTimeout) {
          setLastResult({
            mode: 'run',
            verdict: 'TLE',
            passed: false,
            runtimeMs: data.timeMs,
          });
        } else if (data.runtimeError || (data.exitCode !== null && data.exitCode !== 0)) {
          setLastResult({
            mode: 'run',
            verdict: 'RE',
            passed: false,
            runtimeError: data.runtimeError || data.stderr || `Process exited with code ${data.exitCode}`,
            runtimeMs: data.timeMs,
          });
        } else {
          // Execution completed normally — compare with expectedOutput if available
          const actual = data.stdout ?? '';
          const expected = currentCase?.expectedOutput || '';
          const hasExpected = expected.trim().length > 0;
          const isCorrect = hasExpected ? compareOutput(actual, expected, { mode: 'token' }) : true;

          setLastResult({
            mode: 'run',
            verdict: isCorrect ? 'AC' : 'WA',
            passed: isCorrect,
            actualStdout: actual,
            expectedOutput: expected,
            runtimeMs: data.timeMs,
            memoryKb: data.memoryKb,
          });
        }
      } else {
        // Submit: POST /api/submit
        const response = await fetch('/api/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            problemSlug: problem.slug,
            language: selectedLanguage,
            code: currentCode,
          }),
        });

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          setLastResult({
            mode: 'submit',
            verdict: 'IE',
            passed: false,
            runtimeError: errData.error || `Server returned HTTP ${response.status}`,
          });
          return;
        }

        const data = await response.json();
        const verdict = (data.verdict || 'IE') as Verdict;
        const isAccepted = verdict === 'AC';

        setLastResult({
          mode: 'submit',
          verdict,
          passed: isAccepted,
          passedTests: data.passedTests ?? 0,
          totalTests: data.totalTests ?? 0,
          runtimeMs: data.runtime,
          memoryKb: data.memory,
          compileError: data.compileError,
          runtimeError: data.runtimeError,
          failedTestIndex: data.failedTestIndex,
        });

        if (isAccepted) {
          onSetStatus('solved');
          onSubmissionSuccess?.();
        } else if (status === 'unattempted') {
          onSetStatus('attempted');
        }
      }
    } catch (err: unknown) {
      setLastResult({
        mode,
        verdict: 'IE',
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
    <div className="flex flex-col bg-[#1e1e1e] text-[#eff2f6] rounded-lg border border-[#2e2e2e] font-sans overflow-hidden h-full">
      {/* Testcase Tabs Header */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-[#262626] border-b border-[#2e2e2e] text-xs font-medium select-none shrink-0">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveTab('testcase')}
            className={cn(
              'flex items-center gap-1.5 px-3 py-1 rounded transition-colors cursor-pointer',
              activeTab === 'testcase'
                ? 'bg-[#333] text-white font-semibold'
                : 'text-[#a1a1aa] hover:text-white hover:bg-[#2d2d2d]'
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
                ? 'bg-[#333] text-white font-semibold'
                : 'text-[#a1a1aa] hover:text-white hover:bg-[#2d2d2d]'
            )}
          >
            <Terminal className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>Test Result</span>
          </button>
        </div>

        {/* Action Buttons: Run & Submit */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleExecute('run')}
            disabled={isExecuting}
            className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#2e2e2e] hover:bg-[#383838] text-white text-xs font-medium transition-colors cursor-pointer disabled:opacity-50"
            title="Run against sample test cases (Ctrl+Enter)"
          >
            <Play className={cn('w-3 h-3 fill-current', isExecuting && executionMode === 'run' && 'animate-spin')} />
            <span>Run</span>
          </button>

          <button
            type="button"
            onClick={() => handleExecute('submit')}
            disabled={isExecuting}
            className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#2cbb5d] hover:bg-[#27a852] text-white text-xs font-semibold transition-colors cursor-pointer disabled:opacity-50"
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
                      ? 'bg-[#333] text-white font-semibold'
                      : 'bg-[#262626] text-[#a1a1aa] hover:text-white hover:bg-[#2d2d2d]'
                  )}
                >
                  Case {idx + 1}
                </button>
              ))}

              <button
                type="button"
                onClick={handleAddCase}
                className="p-1 rounded-md bg-[#262626] hover:bg-[#333] text-[#a1a1aa] hover:text-white transition-colors cursor-pointer shrink-0"
                title="Add Custom Test Case"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Parameter Input Fields */}
            <div className="flex flex-col gap-2.5 pt-1 font-mono text-xs">
              {parsedParams.map((p, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="text-[#a1a1aa] text-[11px]">
                    {p.param} =
                  </span>
                  <input
                    type="text"
                    value={p.value}
                    onChange={(e) => handleParamChange(idx, e.target.value)}
                    className="w-full bg-[#262626] text-[#eff2f6] px-3 py-2 rounded-md border border-[#333] focus:border-[#38bdf8] focus:outline-none transition-colors"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* TAB: TEST RESULT */
          <div className="flex flex-col gap-3 font-mono text-xs">
            {isExecuting ? (
              <div className="py-8 text-center text-[#a1a1aa] flex flex-col items-center justify-center gap-2 font-sans">
                <div className="w-6 h-6 border-2 border-[#38bdf8] border-t-transparent rounded-full animate-spin" />
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

                  <div className="flex items-center gap-3 text-xs text-[#a1a1aa]">
                    {lastResult.runtimeMs !== undefined && lastResult.runtimeMs !== null && (
                      <span>Runtime: <strong className="text-white">{lastResult.runtimeMs} ms</strong></span>
                    )}
                    {lastResult.memoryKb !== undefined && lastResult.memoryKb !== null && (
                      <span>Memory: <strong className="text-white">{(lastResult.memoryKb / 1024).toFixed(1)} MB</strong></span>
                    )}
                  </div>
                </div>

                {/* Submit test progress breakdown */}
                {lastResult.mode === 'submit' && lastResult.totalTests !== undefined && (
                  <div className="text-xs text-[#a1a1aa] font-sans">
                    <span className="font-semibold text-white">
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
                    <pre className="p-3 rounded bg-[#18181b] border border-[#facc15]/30 text-[#fde047] whitespace-pre-wrap max-h-36 overflow-y-auto bl-scrollbar font-mono text-xs">
                      {lastResult.compileError}
                    </pre>
                  </div>
                )}

                {/* Runtime Error Block */}
                {lastResult.runtimeError && (
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-[#ef4444] font-sans font-semibold">Error Diagnostics:</span>
                    <pre className="p-3 rounded bg-[#18181b] border border-[#ef4444]/30 text-[#fca5a5] whitespace-pre-wrap max-h-36 overflow-y-auto bl-scrollbar font-mono text-xs">
                      {lastResult.runtimeError}
                    </pre>
                  </div>
                )}

                {/* Case Input & Output for Run Mode */}
                {lastResult.mode === 'run' && !lastResult.compileError && !lastResult.runtimeError && (
                  <div className="flex flex-col gap-2 p-3 rounded-lg bg-[#262626] border border-[#333]">
                    <div>
                      <span className="text-[#a1a1aa] block text-[11px] mb-0.5">Input</span>
                      <div className="p-2 rounded bg-[#1c1c1c] text-white font-mono whitespace-pre-wrap">
                        {currentCase?.input || '(empty)'}
                      </div>
                    </div>
                    <div>
                      <span className="text-[#a1a1aa] block text-[11px] mb-0.5">Your Output (stdout)</span>
                      <div className="p-2 rounded bg-[#1c1c1c] text-[#eff2f6] font-mono whitespace-pre-wrap">
                        {lastResult.actualStdout !== undefined && lastResult.actualStdout.length > 0
                          ? lastResult.actualStdout
                          : '(no output printed to stdout)'}
                      </div>
                    </div>
                    {lastResult.expectedOutput && (
                      <div>
                        <span className="text-[#a1a1aa] block text-[11px] mb-0.5">Expected Output</span>
                        <div className="p-2 rounded bg-[#1c1c1c] text-[#2cbb5d] font-mono whitespace-pre-wrap">
                          {lastResult.expectedOutput}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="py-6 text-center text-[#71717a] flex flex-col items-center justify-center gap-1 font-sans">
                <Terminal className="w-6 h-6 opacity-40 mb-1" />
                <span>Run or submit your solution to view sandbox execution output</span>
              </div>
            )}
          </div>
        )}

        {/* Footer: Keyboard shortcut help */}
        <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#2e2e2e] text-[11px] text-[#71717a] select-none font-sans shrink-0">
          <div className="flex items-center gap-1.5 hover:text-[#a1a1aa] transition-colors cursor-pointer">
            <Code2 className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>Sandboxed Engine</span>
            <HelpCircle className="w-3 h-3 text-[#71717a]" />
          </div>

          <span className="font-mono text-[10px] text-[#52525b]">
            Ctrl+Enter = Run | Ctrl+Shift+Enter = Submit
          </span>
        </div>
      </div>
    </div>
  );
}

export default TestRunnerPanel;
