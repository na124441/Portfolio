/**
 * DSA Question Bank Type Definitions
 * Structured types for interactive algorithmic learning problems, hints, solutions, and test cases.
 * Extended with execution, submission, and judge types for the practice platform.
 */

/* ─── Difficulty & Status ─── */

export type DsaDifficulty = 'Warm-up' | 'Easy' | 'Medium' | 'Hard';

export type DsaStatus = 'unattempted' | 'attempted' | 'solved' | 'revisit';

/* ─── Problem Content Types ─── */

export interface DsaExample {
  input: string;
  output: string;
  explanation: string;
}

export interface DsaHint {
  level: 1 | 2 | 3;
  title: string;
  content: string;
}

export interface DsaSolutionStep {
  title: string;
  content: string;
}

export interface DsaSolution {
  bruteForce: {
    explanation: string;
    timeComplexity: string;
    spaceComplexity: string;
  };
  optimal: {
    keyObservation: string;
    algorithm: string;
    steps?: DsaSolutionStep[];
    correctness?: string;
    timeComplexity: string;
    spaceComplexity: string;
  };
}

export interface DsaCodeSnippet {
  language: 'cpp' | 'python';
  source: string;
  starterCode: string;
}

export interface DsaTestCase {
  id: string;
  input: string;
  expectedOutput: string;
  explanation?: string;
  visibility?: 'public' | 'hidden';
}

export interface ProblemLimits {
  timeLimitMs: number;    // default: 2000
  memoryLimitMb: number;  // default: 256
  outputLimitMb: number;  // default: 1
}

export interface DsaProblem {
  id: string;
  slug: string;
  title: string;
  topic: string; // e.g. "Arrays & Strings"
  tags: string[]; // e.g. ["Array", "Iteration"]
  difficulty: DsaDifficulty;
  order: number;
  statement: string;
  examples: DsaExample[];
  constraints: string[];
  hints: DsaHint[];
  solution: DsaSolution;
  code: DsaCodeSnippet[];
  followUp: string;
  testCases: DsaTestCase[];
  limits?: ProblemLimits;
  revisit?: boolean;
  prerequisites?: string[];
  relatedSlugs?: string[];
}

export interface DsaTopicMeta {
  id: string;
  name: string;
  phase: string;
  description: string;
}

/* ─── User State (localStorage) ─── */

export interface UserProblemState {
  status: DsaStatus;
  hintsRevealed: number; // 0..3
  selectedLanguage: 'cpp' | 'python';
  savedCode?: Record<string, string>; // language -> code
  solvedAt?: string;
  lastAttemptAt?: string;
}

/* ─── Execution & Submission Types ─── */

export type SubmissionVerdict =
  | 'QUEUED'
  | 'RUNNING'
  | 'ACCEPTED'
  | 'WRONG_ANSWER'
  | 'COMPILE_ERROR'
  | 'RUNTIME_ERROR'
  | 'TIME_LIMIT'
  | 'MEMORY_LIMIT'
  | 'OUTPUT_LIMIT'
  | 'SYSTEM_ERROR';

export interface ExecutionResult {
  status: 'success' | 'compile_error' | 'runtime_error' | 'timeout' | 'memory_limit';
  stdout: string;
  stderr: string;
  exitCode: number;
  compileTimeMs?: number;
  executionTimeMs: number;
  memoryKb?: number;
}

export interface JudgeResult {
  verdict: SubmissionVerdict;
  passedTests: number;
  totalTests: number;
  executionTimeMs: number;
  memoryKb: number;
  failedTestIndex?: number;
  compileError?: string;
  runtimeError?: string;
}

export interface SubmissionRecord {
  id: string;
  problemSlug: string;
  language: string;
  sourceCode: string;
  verdict: SubmissionVerdict;
  passedTests: number;
  totalTests: number;
  runtime: number | null;
  memory: number | null;
  compileError: string | null;
  runtimeError: string | null;
  createdAt: string;
}
