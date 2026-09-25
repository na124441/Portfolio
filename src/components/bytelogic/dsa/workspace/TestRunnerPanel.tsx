'use client';

import React, { useState, useEffect } from 'react';
import {
  Play,
  Send,
  CheckCircle2,
  XCircle,
  Clock,
  AlertOctagon,
  Plus,
  Terminal,
  HelpCircle,
  ChevronRight,
  Code2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type {
  DsaProblem,
  DsaStatus,
  SubmissionVerdict,
  DsaTestCase,
} from '@/types/dsa-question';
import { parseTestcaseParams } from '@/lib/bytelogic/leetcode-utils';

interface TestRunnerPanelProps {
  problem: DsaProblem;
  status: DsaStatus;
  currentCode: string;
  selectedLanguage: 'cpp' | 'python';
  onSetStatus: (status: DsaStatus, reason?: string) => void;
  onSubmissionSuccess?: () => void;
  onOpenSubmissions?: () => void;
  isExecutingExternal?: boolean;
  executionModeExternal?: 'run' | 'submit' | null;
  onExecuteExternal?: (mode: 'run' | 'submit') => void;
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

export function TestRunnerPanel({
  problem,
  status,
  currentCode,
  selectedLanguage,
  onSetStatus,
  onSubmissionSuccess,
  onOpenSubmissions,
  isExecutingExternal,
  executionModeExternal,
  onExecuteExternal,
}: TestRunnerPanelProps) {
  // Tabs: 'testcase' vs 'result'
  const [activeTab, setActiveTab] = useState<'testcase' | 'result'>('testcase');
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);

  // Custom test cases state
  const baseTestCases = (problem.testCases || []).filter((tc) => tc.visibility !== 'hidden');
  const [testCasesList, setTestCasesList] = useState<DsaTestCase[]>(
    baseTestCases.length > 0
      ? baseTestCases
      : [
          {
            id: 'tc-default-1',
            input: 'nums = [2,7,11,15], target = 9',
            expectedOutput: '[0,1]',
            explanation: 'Base sample case',
          },
        ]
  );

  const [isExecutingLocal, setIsExecutingLocal] = useState(false);
  const [executionModeLocal, setExecutionModeLocal] = useState<'run' | 'submit' | null>(null);
  const [lastResult, setLastResult] = useState<RunResultData | null>(null);

  const isExecuting = isExecutingExternal ?? isExecutingLocal;
  const executionMode = executionModeExternal ?? executionModeLocal;

  const currentCase = testCasesList[activeCaseIndex] || testCasesList[0];
  const parsedParams = parseTestcaseParams(currentCase?.input || '');

  // Add a new custom testcase
  const handleAddCase = () => {
    const newIdx = testCasesList.length + 1;
    const newCase: DsaTestCase = {
      id: `tc-custom-${newIdx}-${Date.now()}`,
      input: currentCase?.input || '0',
      expectedOutput: '0',
      explanation: `Custom Test Case ${newIdx}`,
    };
    setTestCasesList((prev) => [...prev, newCase]);
    setActiveCaseIndex(testCasesList.length);
  };

  // Update input of current case
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

  const handleExecute = async (mode: 'run' | 'submit') => {
    if (onExecuteExternal) {
      onExecuteExternal(mode);
      return;
    }

    if (isExecuting) return;
    setIsExecutingLocal(true);
    setExecutionModeLocal(mode);

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
          totalTests: mode === 'run' ? testCasesList.length : testCasesList.length + 3,
          runtime: null,
          memory: null,
          runtimeError: errorData.error || 'Server execution failed',
          mode,
        });
        setActiveTab('result');
        return;
      }

      const data = await response.json();
      const verdict = data.verdict as SubmissionVerdict;

      setLastResult({
        verdict,
        passedTests: data.passedTests ?? 0,
        totalTests: data.totalTests ?? (mode === 'run' ? testCasesList.length : testCasesList.length + 3),
        runtime: data.runtime,
        memory: data.memory,
        compileError: data.compileError,
        runtimeError: data.runtimeError,
        failedTestIndex: data.failedTestIndex,
        mode,
      });

      setActiveTab('result');

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
        totalTests: testCasesList.length,
        runtime: null,
        memory: null,
        runtimeError: err instanceof Error ? err.message : 'Execution failed',
        mode,
      });
      setActiveTab('result');
    } finally {
      setIsExecutingLocal(false);
      setExecutionModeLocal(null);
    }
  };

  return (
    <div className="flex flex-col bg-[#1e1e1e] text-[#eff2f6] rounded-lg border border-[#2e2e2e] font-sans overflow-hidden">
      {/* Testcase Tabs Header matching Image 2 */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-[#262626] border-b border-[#2e2e2e] text-xs font-medium select-none">
        <div className="flex items-center gap-1">
          {/* ☑ Testcase Tab */}
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

          {/* >_ Test Result Tab */}
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

        {/* Quick Run / Submit buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleExecute('run')}
            disabled={isExecuting}
            className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#2e2e2e] hover:bg-[#383838] text-white text-xs font-medium transition-colors cursor-pointer disabled:opacity-50"
            title="Run against sample test cases"
          >
            <Play className={cn('w-3 h-3 fill-current', isExecuting && executionMode === 'run' && 'animate-spin')} />
            <span>Run</span>
          </button>

          <button
            type="button"
            onClick={() => handleExecute('submit')}
            disabled={isExecuting}
            className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#2cbb5d] hover:bg-[#27a852] text-white text-xs font-semibold transition-colors cursor-pointer disabled:opacity-50"
            title="Submit solution to full judge suite"
          >
            <Send className={cn('w-3 h-3', isExecuting && executionMode === 'submit' && 'animate-pulse')} />
            <span>Submit</span>
          </button>
        </div>
      </div>

      {/* Body: Testcase vs Test Result */}
      <div className="p-3.5 sm:p-4 min-h-[160px] flex flex-col justify-between">
        {activeTab === 'testcase' ? (
          <div className="flex flex-col gap-3">
            {/* Case selector pills: Case 1 | Case 2 | Case 3 | + */}
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

              {/* Add Case (+) Button */}
              <button
                type="button"
                onClick={handleAddCase}
                className="p-1 rounded-md bg-[#262626] hover:bg-[#333] text-[#a1a1aa] hover:text-white transition-colors cursor-pointer shrink-0"
                title="Add Test Case"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Parameter Input Fields matching Image 2 */}
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
            {lastResult ? (
              <div className="flex flex-col gap-3">
                {/* Result Status Banner */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {lastResult.verdict === 'ACCEPTED' ? (
                      <CheckCircle2 className="w-5 h-5 text-[#2cbb5d]" />
                    ) : (
                      <XCircle className="w-5 h-5 text-[#ef4444]" />
                    )}
                    <span
                      className={cn(
                        'text-base font-bold font-sans',
                        lastResult.verdict === 'ACCEPTED' ? 'text-[#2cbb5d]' : 'text-[#ef4444]'
                      )}
                    >
                      {lastResult.verdict === 'ACCEPTED' ? 'Accepted' : 'Wrong Answer'}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-[#a1a1aa]">
                    {lastResult.runtime !== null && (
                      <span>Runtime: <strong className="text-white">{lastResult.runtime} ms</strong></span>
                    )}
                    {lastResult.memory !== null && (
                      <span>Memory: <strong className="text-white">{Math.round(lastResult.memory / 1024)} MB</strong></span>
                    )}
                  </div>
                </div>

                {/* Compilation / Runtime Errors */}
                {lastResult.compileError && (
                  <div className="p-3 rounded bg-[#18181b] border border-[#eab308]/40 text-[#fde047] whitespace-pre-wrap max-h-36 overflow-y-auto">
                    {lastResult.compileError}
                  </div>
                )}
                {lastResult.runtimeError && (
                  <div className="p-3 rounded bg-[#18181b] border border-[#ef4444]/40 text-[#fca5a5] whitespace-pre-wrap max-h-36 overflow-y-auto">
                    {lastResult.runtimeError}
                  </div>
                )}

                {/* Case Input & Output Comparison */}
                <div className="flex flex-col gap-2 p-3 rounded-lg bg-[#262626] border border-[#333]">
                  <div>
                    <span className="text-[#a1a1aa] block text-[11px] mb-0.5">Input</span>
                    <div className="p-2 rounded bg-[#1c1c1c] text-white">
                      {currentCase?.input}
                    </div>
                  </div>
                  <div>
                    <span className="text-[#a1a1aa] block text-[11px] mb-0.5">Expected Output</span>
                    <div className="p-2 rounded bg-[#1c1c1c] text-[#2cbb5d]">
                      {currentCase?.expectedOutput}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-6 text-center text-[#71717a] flex flex-col items-center justify-center gap-1 font-sans">
                <Terminal className="w-6 h-6 opacity-40 mb-1" />
                <span>You must run your code first to see test evaluation results</span>
              </div>
            )}
          </div>
        )}

        {/* Footer matching Image 2: </> Source (?) */}
        <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#2e2e2e] text-[11px] text-[#71717a] select-none font-sans">
          <div className="flex items-center gap-1.5 hover:text-[#a1a1aa] transition-colors cursor-pointer">
            <Code2 className="w-3.5 h-3.5" />
            <span>Source</span>
            <HelpCircle className="w-3 h-3" />
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
