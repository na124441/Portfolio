/**
 * DSA Question Bank Type Definitions
 * Structured types for interactive algorithmic learning problems, hints, solutions, and test cases.
 */

export type DsaDifficulty = 'Warm-up' | 'Easy' | 'Medium' | 'Hard';

export type DsaStatus = 'unattempted' | 'attempted' | 'solved' | 'revisit';

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

export interface UserProblemState {
  status: DsaStatus;
  hintsRevealed: number; // 0..3
  selectedLanguage: 'cpp' | 'python';
  savedCode?: Record<string, string>; // language -> code
  solvedAt?: string;
  lastAttemptAt?: string;
}
