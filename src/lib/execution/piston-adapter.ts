/**
 * Piston Execution Adapter
 * Interfaces with a remote Piston execution server (via Docker or hosted VPS).
 * API specification: https://github.com/engineer-man/piston
 */

import type { ExecutionRequest, ExecutionResult, ExecutionService } from './types';

export class PistonExecutionService implements ExecutionService {
  readonly name = 'Piston Execution Engine';
  private baseUrl: string;
  private token?: string;

  constructor(baseUrl: string, token?: string) {
    // Strip trailing slash
    this.baseUrl = baseUrl.replace(/\/+$/, '');
    this.token = token;
  }

  async isHealthy(): Promise<boolean> {
    try {
      const res = await fetch(`${this.baseUrl}/api/v2/runtimes`, {
        method: 'GET',
        headers: this.getHeaders(),
        signal: AbortSignal.timeout(4000),
      });
      return res.ok;
    } catch {
      return false;
    }
  }

  async execute(request: ExecutionRequest): Promise<ExecutionResult> {
    const { language, code, stdin = '', timeLimitMs = 3000 } = request;

    const pistonLang = language === 'cpp' ? 'cpp' : 'python';
    const fileName = language === 'cpp' ? 'solution.cpp' : 'solution.py';

    const payload = {
      language: pistonLang,
      version: '*',
      files: [{ name: fileName, content: code }],
      stdin: stdin,
      run_timeout: Math.max(1000, Math.min(timeLimitMs, 10000)),
      compile_timeout: 10000,
    };

    const startTime = Date.now();

    try {
      const response = await fetch(`${this.baseUrl}/api/v2/execute`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(timeLimitMs + 8000), // Buffer for network + compile time
      });

      const elapsedMs = Date.now() - startTime;

      if (!response.ok) {
        const errorText = await response.text().catch(() => 'Unknown error');
        return {
          status: 'failed',
          stdout: '',
          stderr: `Execution server returned HTTP ${response.status}: ${errorText}`,
          exitCode: null,
          timeMs: elapsedMs,
          memoryKb: null,
          runtimeError: `Execution server HTTP error ${response.status}`,
        };
      }

      const data = await response.json();

      // Check if the service returned an error message (e.g. whitelist notice)
      if (data.message && !data.run) {
        return {
          status: 'failed',
          stdout: '',
          stderr: data.message,
          exitCode: 1,
          timeMs: elapsedMs,
          memoryKb: null,
          runtimeError: data.message,
        };
      }

      // 1. Check for compilation error in C++
      if (data.compile && data.compile.code !== 0) {
        const compileErr = data.compile.stderr || data.compile.output || 'Compilation failed';
        return {
          status: 'completed',
          stdout: '',
          stderr: compileErr,
          exitCode: data.compile.code,
          timeMs: elapsedMs,
          memoryKb: null,
          compileError: compileErr,
        };
      }

      const run = data.run || {};
      const stdout = run.stdout ?? '';
      const stderr = run.stderr ?? '';
      const exitCode = typeof run.code === 'number' ? run.code : 0;

      // 2. Check for Time Limit Exceeded
      const isTimeout =
        run.signal === 'SIGKILL' ||
        run.signal === 'SIGTERM' ||
        run.code === 124 ||
        run.output?.includes?.('timed out') ||
        elapsedMs > timeLimitMs + 3000;

      // 3. Check for Runtime Error
      let runtimeError: string | null = null;
      if (!isTimeout && exitCode !== 0) {
        runtimeError = stderr || run.output || `Process exited with code ${exitCode}`;
      }

      return {
        status: 'completed',
        stdout,
        stderr,
        exitCode,
        timeMs: elapsedMs,
        memoryKb: 4096, // Piston default container baseline
        compileError: null,
        runtimeError,
        isTimeout,
      };
    } catch (err: unknown) {
      const elapsedMs = Date.now() - startTime;
      const errorMsg = err instanceof Error ? err.message : 'Network execution failure';
      const isAbort = err instanceof Error && err.name === 'TimeoutError';

      return {
        status: 'failed',
        stdout: '',
        stderr: errorMsg,
        exitCode: null,
        timeMs: elapsedMs,
        memoryKb: null,
        runtimeError: isAbort ? 'Execution timed out waiting for server response' : errorMsg,
        isTimeout: isAbort,
      };
    }
  }

  private getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
      headers['X-Piston-Key'] = this.token;
    }
    return headers;
  }
}
