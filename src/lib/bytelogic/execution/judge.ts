/**
 * Judge Module
 *
 * Core judging logic for DSA submissions:
 * 1. Loads problem data (server-side only)
 * 2. Gets test cases (public for "run", public + hidden for "submit")
 * 3. Compiles and runs against each test case via ExecutionProvider
 * 4. Compares stdout with expected output
 * 5. Returns aggregate verdict
 */

import type { DsaTestCase, JudgeResult, SubmissionVerdict, ProblemLimits } from '@/types/dsa-question';
import { getDsaProblemBySlug } from '@/data/bytelogic/dsa';
import { getExecutionProvider } from './provider-factory';
import type { ExecutionResponse } from './types';

const DEFAULT_LIMITS: ProblemLimits = {
  timeLimitMs: 2000,
  memoryLimitMb: 256,
  outputLimitMb: 1,
};

/**
 * Load hidden test cases for a problem (server-side only).
 * These files live in src/data/bytelogic/dsa/tests/ and are never sent to the browser.
 */
async function loadHiddenTests(slug: string): Promise<DsaTestCase[]> {
  try {
    // Dynamic import of hidden test files — only works server-side
    const mod = await import(`@/data/bytelogic/dsa/tests/${slug}.tests`);
    return mod.hiddenTests || [];
  } catch {
    // No hidden tests file for this problem yet
    return [];
  }
}

/** Normalize output for comparison: trim trailing whitespace/newlines per line. */
function normalizeOutput(output: string): string {
  return output
    .split('\n')
    .map((line) => line.trimEnd())
    .join('\n')
    .trim();
}

export async function judgeSubmission(
  problemSlug: string,
  sourceCode: string,
  language: 'cpp',
  mode: 'run' | 'submit'
): Promise<JudgeResult> {
  // 1. Load problem data
  const problem = getDsaProblemBySlug(problemSlug);
  if (!problem) {
    return {
      verdict: 'SYSTEM_ERROR',
      passedTests: 0,
      totalTests: 0,
      executionTimeMs: 0,
      memoryKb: 0,
      runtimeError: `Problem not found: ${problemSlug}`,
    };
  }

  // 2. Gather test cases based on mode
  const publicTests = (problem.testCases || []).filter(
    (tc) => !tc.visibility || tc.visibility === 'public'
  );
  let testCases: DsaTestCase[];

  if (mode === 'run') {
    testCases = publicTests;
  } else {
    // Submit: use all tests (public + hidden)
    const hiddenTests = await loadHiddenTests(problemSlug);
    testCases = [...publicTests, ...hiddenTests];
  }

  if (testCases.length === 0) {
    return {
      verdict: 'SYSTEM_ERROR',
      passedTests: 0,
      totalTests: 0,
      executionTimeMs: 0,
      memoryKb: 0,
      runtimeError: 'No test cases available for this problem.',
    };
  }

  // 3. Get execution provider
  const provider = await getExecutionProvider();
  const limits = problem.limits || DEFAULT_LIMITS;

  // 4. Execute against each test case
  let passedTests = 0;
  let totalTimeMs = 0;
  let maxMemoryKb = 0;

  for (let i = 0; i < testCases.length; i++) {
    const tc = testCases[i];

    let result: ExecutionResponse;
    try {
      result = await provider.execute({
        language,
        sourceCode,
        stdin: tc.input,
        limits,
      });
    } catch (err) {
      return {
        verdict: 'SYSTEM_ERROR',
        passedTests,
        totalTests: testCases.length,
        executionTimeMs: totalTimeMs,
        memoryKb: maxMemoryKb,
        runtimeError: `Execution failed on test ${i + 1}: ${err instanceof Error ? err.message : 'Unknown error'}`,
      };
    }

    totalTimeMs += result.executionTimeMs;
    maxMemoryKb = Math.max(maxMemoryKb, result.memoryKb || 0);

    // Handle non-success statuses
    if (result.status === 'compile_error') {
      return {
        verdict: 'COMPILE_ERROR',
        passedTests: 0,
        totalTests: testCases.length,
        executionTimeMs: 0,
        memoryKb: 0,
        compileError: result.stderr,
      };
    }

    if (result.status === 'timeout') {
      return {
        verdict: 'TIME_LIMIT',
        passedTests,
        totalTests: testCases.length,
        executionTimeMs: totalTimeMs,
        memoryKb: maxMemoryKb,
        failedTestIndex: i,
      };
    }

    if (result.status === 'memory_limit') {
      return {
        verdict: 'MEMORY_LIMIT',
        passedTests,
        totalTests: testCases.length,
        executionTimeMs: totalTimeMs,
        memoryKb: maxMemoryKb,
        failedTestIndex: i,
      };
    }

    if (result.status === 'runtime_error') {
      return {
        verdict: 'RUNTIME_ERROR',
        passedTests,
        totalTests: testCases.length,
        executionTimeMs: totalTimeMs,
        memoryKb: maxMemoryKb,
        failedTestIndex: i,
        runtimeError: result.stderr,
      };
    }

    if (result.status === 'output_limit') {
      return {
        verdict: 'OUTPUT_LIMIT',
        passedTests,
        totalTests: testCases.length,
        executionTimeMs: totalTimeMs,
        memoryKb: maxMemoryKb,
        failedTestIndex: i,
      };
    }

    // 5. Compare output
    const actual = normalizeOutput(result.stdout);
    const expected = normalizeOutput(tc.expectedOutput);

    if (actual === expected) {
      passedTests++;
    } else {
      // Wrong answer on this test case
      const verdict: SubmissionVerdict = 'WRONG_ANSWER';
      return {
        verdict,
        passedTests,
        totalTests: testCases.length,
        executionTimeMs: totalTimeMs,
        memoryKb: maxMemoryKb,
        failedTestIndex: i,
      };
    }
  }

  // All tests passed
  return {
    verdict: 'ACCEPTED',
    passedTests,
    totalTests: testCases.length,
    executionTimeMs: totalTimeMs,
    memoryKb: maxMemoryKb,
  };
}
