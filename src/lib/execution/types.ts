/**
 * Remote Code Execution Engine Abstraction
 * Normalized interfaces for sandboxed C++ and Python execution backends (Piston, Judge0, etc.)
 */

export type SupportedLanguage = 'cpp' | 'python';

export interface ExecutionRequest {
  language: SupportedLanguage;
  code: string;
  stdin?: string;
  timeLimitMs?: number;
  memoryLimitKb?: number;
}

export type ExecutionStatus = 'queued' | 'running' | 'completed' | 'failed';

export interface ExecutionResult {
  status: ExecutionStatus;
  stdout: string;
  stderr: string;
  exitCode: number | null;
  timeMs: number | null;
  memoryKb: number | null;
  compileError?: string | null;
  runtimeError?: string | null;
  isTimeout?: boolean;
  isMemoryLimit?: boolean;
}

export interface ExecutionService {
  readonly name: string;

  /** Execute code against a single stdin input within given limits. */
  execute(request: ExecutionRequest): Promise<ExecutionResult>;

  /** Check whether the execution service is reachable and healthy. */
  isHealthy(): Promise<boolean>;
}
