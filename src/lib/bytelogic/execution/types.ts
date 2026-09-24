/**
 * Execution Provider Interface
 * Defines the contract for any code execution backend (Docker, cloud, mock).
 * The frontend and API routes never bypass this abstraction.
 */

export interface ExecutionRequest {
  language: 'cpp';
  sourceCode: string;
  stdin: string;
  limits: {
    timeLimitMs: number;
    memoryLimitMb: number;
    outputLimitMb: number;
  };
}

export interface ExecutionResponse {
  status:
    | 'success'
    | 'compile_error'
    | 'runtime_error'
    | 'timeout'
    | 'memory_limit'
    | 'output_limit';
  stdout: string;
  stderr: string;
  exitCode: number;
  compileTimeMs?: number;
  executionTimeMs: number;
  memoryKb?: number;
}

export interface ExecutionProvider {
  /** Run a single compilation + execution with the given stdin. */
  execute(request: ExecutionRequest): Promise<ExecutionResponse>;

  /** Check whether this provider can currently accept work. */
  isAvailable(): Promise<boolean>;

  /** Human-readable provider name for UI display. */
  readonly name: string;
}
