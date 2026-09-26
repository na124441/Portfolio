/**
 * Judging & Output Comparison Types
 */

export type Verdict = 'AC' | 'WA' | 'TLE' | 'MLE' | 'RE' | 'CE' | 'IE';

export type ComparisonMode = 'exact' | 'trimmed' | 'token' | 'float';

export interface CompareOptions {
  mode?: ComparisonMode;
  floatTolerance?: number; // default 1e-6
}

export interface JudgeTestCaseResult {
  testIndex: number;
  verdict: Verdict;
  passed: boolean;
  actualOutput?: string;
  expectedOutput?: string;
  timeMs?: number;
  memoryKb?: number;
  error?: string;
}

export interface JudgeSubmissionResult {
  verdict: Verdict;
  passedTests: number;
  totalTests: number;
  executionTimeMs: number;
  memoryKb: number;
  compileError?: string | null;
  runtimeError?: string | null;
  failedTestIndex?: number | null;
}
