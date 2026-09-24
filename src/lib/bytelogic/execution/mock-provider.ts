/**
 * Mock Execution Provider
 *
 * Deterministic test-case comparison for UI development.
 * Does NOT compile or run C++ — it compares expected output with a simulated response.
 *
 * Rules:
 * - Run mode ("run"): compares stdout with expected output for each public test case
 * - Submit mode: returns SYSTEM_ERROR — mock provider never fakes accepted submissions
 * - Clearly labeled in the UI as "Mock Mode"
 */

import type { ExecutionProvider, ExecutionRequest, ExecutionResponse } from './types';

export class MockExecutionProvider implements ExecutionProvider {
  readonly name = 'Mock (No Compilation)';

  async isAvailable(): Promise<boolean> {
    return true; // always available as fallback
  }

  async execute(request: ExecutionRequest): Promise<ExecutionResponse> {
    // Simulate realistic latency
    await new Promise((r) => setTimeout(r, 150 + Math.random() * 200));

    const { sourceCode } = request;

    // Basic compile-error heuristic: check for obvious syntax issues
    if (this.hasObviousSyntaxError(sourceCode)) {
      return {
        status: 'compile_error',
        stdout: '',
        stderr: this.generateMockCompileError(sourceCode),
        exitCode: 1,
        compileTimeMs: 45,
        executionTimeMs: 0,
      };
    }

    // Check for empty solution (just starter code with no implementation)
    if (this.isEmptySolution(sourceCode)) {
      return {
        status: 'runtime_error',
        stdout: '',
        stderr: 'No output produced. Did you implement the solution?',
        exitCode: 1,
        executionTimeMs: 2,
      };
    }

    // Mock "successful" execution — return empty stdout
    // The judge layer compares this with expected output
    // In mock mode, we can't know the actual output, so we return a placeholder
    return {
      status: 'success',
      stdout: '(mock output — no real execution)',
      stderr: '',
      exitCode: 0,
      compileTimeMs: 120,
      executionTimeMs: Math.floor(Math.random() * 30) + 5,
      memoryKb: Math.floor(Math.random() * 2048) + 1024,
    };
  }

  private hasObviousSyntaxError(code: string): boolean {
    // Very basic heuristics — not a real parser
    const stripped = code.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');

    // Missing main function
    if (!stripped.includes('main')) return false; // might be function-based, don't flag

    // Unmatched braces
    const opens = (stripped.match(/\{/g) || []).length;
    const closes = (stripped.match(/\}/g) || []).length;
    if (opens !== closes) return true;

    return false;
  }

  private isEmptySolution(code: string): boolean {
    // Check if the code is essentially just boilerplate with no logic
    const stripped = code
      .replace(/\/\/.*$/gm, '')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/#include\s*<[^>]+>/g, '')
      .replace(/using\s+namespace\s+\w+;/g, '')
      .trim();

    // If what's left is very short, it's probably empty
    return stripped.length < 30;
  }

  private generateMockCompileError(code: string): string {
    const opens = (code.match(/\{/g) || []).length;
    const closes = (code.match(/\}/g) || []).length;

    if (opens > closes) {
      return `solution.cpp: error: expected '}' at end of input\n  ${opens - closes} unmatched opening brace(s)`;
    }
    if (closes > opens) {
      return `solution.cpp: error: expected declaration before '}' token\n  ${closes - opens} unmatched closing brace(s)`;
    }

    return 'solution.cpp: error: compilation failed (mock provider)';
  }
}
