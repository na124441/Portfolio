/**
 * Judge0 Execution Adapter
 * Interfaces with a remote Judge0 CE or Extra CE execution server.
 * API specification: https://ce.judge0.com / https://github.com/judge0/judge0
 */

import type { ExecutionRequest, ExecutionResult, ExecutionService } from './types';

// Standard Judge0 language IDs
const JUDGE0_LANGUAGE_IDS = {
  cpp: 54, // C++ (GCC 9.2.0) / default C++
  python: 71, // Python (3.8.1) / Python 3
};

export class Judge0ExecutionService implements ExecutionService {
  readonly name = 'Judge0 Execution Engine';
  private baseUrl: string;
  private token?: string;

  constructor(baseUrl: string, token?: string) {
    this.baseUrl = baseUrl.replace(/\/+$/, '');
    this.token = token;
  }

  async isHealthy(): Promise<boolean> {
    try {
      const res = await fetch(`${this.baseUrl}/system_info`, {
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
    const { language, code, stdin = '', timeLimitMs = 3000, memoryLimitKb = 262144 } = request;

    const languageId = language === 'cpp' ? JUDGE0_LANGUAGE_IDS.cpp : JUDGE0_LANGUAGE_IDS.python;
    const timeLimitSec = Math.max(1, Math.min(Math.ceil(timeLimitMs / 1000), 10));

    const payload = {
      source_code: code,
      language_id: languageId,
      stdin: stdin,
      cpu_time_limit: timeLimitSec,
      memory_limit: memoryLimitKb,
    };

    const startTime = Date.now();

    try {
      const response = await fetch(`${this.baseUrl}/submissions?base64_encoded=false&wait=true`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(timeLimitMs + 10000),
      });

      const elapsedMs = Date.now() - startTime;

      if (!response.ok) {
        const errorText = await response.text().catch(() => 'Unknown error');
        return {
          status: 'failed',
          stdout: '',
          stderr: `Judge0 server returned HTTP ${response.status}: ${errorText}`,
          exitCode: null,
          timeMs: elapsedMs,
          memoryKb: null,
          runtimeError: `Judge0 server HTTP error ${response.status}`,
        };
      }

      const data = await response.json();
      const statusId = data.status?.id;

      // Status 6: Compilation Error
      if (statusId === 6) {
        const compileErr = data.compile_output || data.stderr || 'Compilation error';
        return {
          status: 'completed',
          stdout: '',
          stderr: compileErr,
          exitCode: 1,
          timeMs: elapsedMs,
          memoryKb: null,
          compileError: compileErr,
        };
      }

      // Status 5: Time Limit Exceeded
      const isTimeout = statusId === 5;

      // Status 7-12: Runtime Errors
      let runtimeError: string | null = null;
      if (statusId >= 7 && statusId <= 12) {
        runtimeError = data.stderr || data.message || `Runtime error (${data.status?.description || 'SIGSEGV/NZEC'})`;
      }

      // Status 13: Internal Error
      if (statusId === 13) {
        return {
          status: 'failed',
          stdout: '',
          stderr: data.message || 'Judge0 Internal Error',
          exitCode: 1,
          timeMs: elapsedMs,
          memoryKb: null,
          runtimeError: 'Execution server internal failure',
        };
      }

      return {
        status: 'completed',
        stdout: data.stdout ?? '',
        stderr: data.stderr ?? '',
        exitCode: data.exit_code ?? 0,
        timeMs: data.time ? Math.round(parseFloat(data.time) * 1000) : elapsedMs,
        memoryKb: data.memory ?? null,
        compileError: null,
        runtimeError,
        isTimeout,
        isMemoryLimit: statusId === 4 && data.status?.description?.includes('Memory'),
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
      headers['X-Auth-Token'] = this.token;
      headers['X-RapidAPI-Key'] = this.token;
      headers['Authorization'] = `Bearer ${this.token}`;
    }
    return headers;
  }
}
