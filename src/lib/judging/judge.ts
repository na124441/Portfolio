/**
 * Judge Engine
 * Orchestrates multi-test evaluation using the remote ExecutionService and output comparison.
 * Keeps official test cases securely on the server.
 */

import type { DsaTestCase, ProblemLimits } from '@/types/dsa-question';
import { getDsaProblemBySlug } from '@/data/bytelogic/dsa';
import { getExecutionService } from '@/lib/execution/service';
import type { SupportedLanguage } from '@/lib/execution/types';
import { compareOutput } from './compare-output';
import type { JudgeSubmissionResult, Verdict } from './types';

const DEFAULT_LIMITS: ProblemLimits = {
  timeLimitMs: 3000,
  memoryLimitMb: 256,
  outputLimitMb: 1,
};

/**
 * Load server-only hidden test cases if present in filesystem.
 */
async function loadServerHiddenTests(slug: string): Promise<DsaTestCase[]> {
  try {
    const mod = await import(`@/data/bytelogic/dsa/tests/${slug}.tests`);
    return mod.hiddenTests || [];
  } catch {
    return [];
  }
}

export async function judgeSubmission(
  problemSlug: string,
  sourceCode: string,
  language: SupportedLanguage,
  mode: 'run' | 'submit',
  customStdin?: string
): Promise<JudgeSubmissionResult> {
  // 1. Load problem
  const problem = getDsaProblemBySlug(problemSlug);
  if (!problem) {
    return {
      verdict: 'IE',
      passedTests: 0,
      totalTests: 0,
      executionTimeMs: 0,
      memoryKb: 0,
      runtimeError: `Problem not found: ${problemSlug}`,
    };
  }

  // 2. Select test cases
  let testCases: DsaTestCase[];

  if (mode === 'run' && customStdin !== undefined) {
    // Run against custom user input
    testCases = [
      {
        id: 'tc-custom',
        input: customStdin,
        expectedOutput: '', // No authoritative expected output for arbitrary custom inputs
        visibility: 'public',
      },
    ];
  } else if (mode === 'run') {
    // Run against public sample test cases
    testCases = (problem.testCases || []).filter((tc) => tc.visibility !== 'hidden');
    if (testCases.length === 0) {
      testCases = problem.examples.map((ex, i) => ({
        id: `tc-example-${i + 1}`,
        input: ex.input,
        expectedOutput: ex.output,
        visibility: 'public',
      }));
    }
  } else {
    // Submit: Combine public test cases + hidden test cases
    const serverHidden = await loadServerHiddenTests(problemSlug);
    const existingTests = problem.testCases || [];
    testCases = [...existingTests, ...serverHidden];

    if (testCases.length === 0) {
      // Fallback to examples if no explicit test cases configured
      testCases = problem.examples.map((ex, i) => ({
        id: `tc-example-${i + 1}`,
        input: ex.input,
        expectedOutput: ex.output,
        visibility: 'public',
      }));
    }
  }

  if (testCases.length === 0) {
    return {
      verdict: 'IE',
      passedTests: 0,
      totalTests: 0,
      executionTimeMs: 0,
      memoryKb: 0,
      runtimeError: 'No test suite configured for this problem',
    };
  }

  // 3. Execution service
  const service = getExecutionService();
  const limits = problem.limits || DEFAULT_LIMITS;

  let passedTests = 0;
  let totalTimeMs = 0;
  let maxMemoryKb = 0;

  for (let i = 0; i < testCases.length; i++) {
    const tc = testCases[i];

    const result = await service.execute({
      language,
      code: sourceCode,
      stdin: tc.input,
      timeLimitMs: limits.timeLimitMs,
      memoryLimitKb: limits.memoryLimitMb * 1024,
    });

    totalTimeMs += result.timeMs || 0;
    maxMemoryKb = Math.max(maxMemoryKb, result.memoryKb || 0);

    // 4. Handle Infrastructure / Server Errors -> IE (Internal Error)
    if (result.status === 'failed') {
      return {
        verdict: 'IE',
        passedTests,
        totalTests: testCases.length,
        executionTimeMs: totalTimeMs,
        memoryKb: maxMemoryKb,
        runtimeError:
          result.runtimeError ||
          'Execution server connection failed. Please ensure the execution server is reachable.',
      };
    }

    // 5. Handle Compilation Error -> CE
    if (result.compileError) {
      return {
        verdict: 'CE',
        passedTests: 0,
        totalTests: testCases.length,
        executionTimeMs: 0,
        memoryKb: 0,
        compileError: result.compileError,
      };
    }

    // 6. Handle Time Limit Exceeded -> TLE
    if (result.isTimeout) {
      return {
        verdict: 'TLE',
        passedTests,
        totalTests: testCases.length,
        executionTimeMs: totalTimeMs,
        memoryKb: maxMemoryKb,
        failedTestIndex: i,
      };
    }

    // 7. Handle Memory Limit Exceeded -> MLE
    if (result.isMemoryLimit) {
      return {
        verdict: 'MLE',
        passedTests,
        totalTests: testCases.length,
        executionTimeMs: totalTimeMs,
        memoryKb: maxMemoryKb,
        failedTestIndex: i,
      };
    }

    // 8. Handle Runtime Error -> RE
    if (result.runtimeError || (result.exitCode !== null && result.exitCode !== 0)) {
      return {
        verdict: 'RE',
        passedTests,
        totalTests: testCases.length,
        executionTimeMs: totalTimeMs,
        memoryKb: maxMemoryKb,
        failedTestIndex: i,
        runtimeError: result.runtimeError || result.stderr || `Exit code ${result.exitCode}`,
      };
    }

    // In custom run mode without expected output, successful exit is sufficient
    if (mode === 'run' && customStdin !== undefined) {
      passedTests++;
      continue;
    }

    // 9. Compare Output
    const isCorrect = compareOutput(result.stdout, tc.expectedOutput, { mode: 'token' });

    if (isCorrect) {
      passedTests++;
    } else {
      // Wrong Answer -> WA
      return {
        verdict: 'WA',
        passedTests,
        totalTests: testCases.length,
        executionTimeMs: totalTimeMs,
        memoryKb: maxMemoryKb,
        failedTestIndex: i,
      };
    }
  }

  // All tests passed -> AC
  return {
    verdict: 'AC',
    passedTests,
    totalTests: testCases.length,
    executionTimeMs: totalTimeMs,
    memoryKb: maxMemoryKb,
  };
}
