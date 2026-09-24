/**
 * Docker Execution Provider
 *
 * Runs C++ submissions inside disposable Docker containers with:
 * - CPU limit (1 core)
 * - Memory limit (from problem config)
 * - Network disabled
 * - Read-only filesystem
 * - Process limit (32)
 * - Automatic cleanup
 *
 * Requires Docker to be installed and the judge image to be built:
 *   docker build -t bytelogic-judge docker/judge/
 */

import { execFile } from 'child_process';
import { promisify } from 'util';
import type { ExecutionProvider, ExecutionRequest, ExecutionResponse } from './types';

const execFileAsync = promisify(execFile);

const JUDGE_IMAGE = 'bytelogic-judge';
const MAX_OUTPUT_BYTES = 1024 * 1024; // 1MB

export class DockerExecutionProvider implements ExecutionProvider {
  readonly name = 'Docker Sandbox';

  async isAvailable(): Promise<boolean> {
    try {
      await execFileAsync('docker', ['info'], { timeout: 5000 });
      // Also check if the judge image exists
      const { stdout } = await execFileAsync('docker', ['images', '-q', JUDGE_IMAGE], {
        timeout: 5000,
      });
      return stdout.trim().length > 0;
    } catch {
      return false;
    }
  }

  async execute(request: ExecutionRequest): Promise<ExecutionResponse> {
    const { sourceCode, stdin, limits } = request;
    const startTime = Date.now();

    // Build Docker run command with security constraints
    const dockerArgs = [
      'run',
      '--rm',                          // Remove container after execution
      '--network=none',                // No network access
      '--read-only',                   // Read-only root filesystem
      '--tmpfs', '/tmp:rw,noexec,nosuid,size=64m', // Writable tmp with size limit
      '--memory', `${limits.memoryLimitMb}m`,
      '--memory-swap', `${limits.memoryLimitMb}m`, // No swap
      '--cpus', '1',                   // Single CPU core
      '--pids-limit', '32',            // Process limit
      '--ulimit', 'fsize=1048576',     // Max file size 1MB
      '--ulimit', 'nproc=32',          // Process limit
      '-i',                            // Accept stdin
      JUDGE_IMAGE,
      '/bin/sh', '-c',
      this.buildExecutionScript(limits.timeLimitMs),
    ];

    try {
      const child = execFileAsync('docker', dockerArgs, {
        timeout: limits.timeLimitMs + 10000, // Docker overhead buffer
        maxBuffer: MAX_OUTPUT_BYTES,
        encoding: 'utf-8',
      });

      // Pipe source code and stdin together
      const proc = (child as unknown as { child: import('child_process').ChildProcess }).child;
      if (proc?.stdin) {
        // Write source code length marker, source code, then stdin
        const payload = `${sourceCode}\n---END_SOURCE---\n${stdin}`;
        proc.stdin.write(payload);
        proc.stdin.end();
      }

      const { stdout, stderr } = await child;
      const totalTime = Date.now() - startTime;

      // Parse execution metadata from stderr markers
      const meta = this.parseExecutionMeta(stderr);

      return {
        status: 'success',
        stdout: stdout.substring(0, MAX_OUTPUT_BYTES),
        stderr: meta.cleanStderr,
        exitCode: 0,
        compileTimeMs: meta.compileTimeMs,
        executionTimeMs: meta.executionTimeMs || totalTime,
        memoryKb: meta.memoryKb,
      };
    } catch (error: unknown) {
      const totalTime = Date.now() - startTime;
      const err = error as {
        code?: string | number;
        killed?: boolean;
        stderr?: string;
        stdout?: string;
      };

      // Timeout
      if (err.killed || err.code === 'ERR_CHILD_PROCESS_TIMEOUT') {
        return {
          status: 'timeout',
          stdout: err.stdout?.substring(0, MAX_OUTPUT_BYTES) || '',
          stderr: 'Time Limit Exceeded',
          exitCode: 124,
          executionTimeMs: totalTime,
        };
      }

      // OOM / memory limit
      if (err.code === 137) {
        return {
          status: 'memory_limit',
          stdout: err.stdout?.substring(0, MAX_OUTPUT_BYTES) || '',
          stderr: 'Memory Limit Exceeded',
          exitCode: 137,
          executionTimeMs: totalTime,
        };
      }

      const stderr = err.stderr || '';

      // Compile error
      if (stderr.includes('error:') && stderr.includes('.cpp')) {
        return {
          status: 'compile_error',
          stdout: '',
          stderr: stderr.substring(0, 4096),
          exitCode: 1,
          compileTimeMs: totalTime,
          executionTimeMs: 0,
        };
      }

      // Runtime error (non-zero exit)
      return {
        status: 'runtime_error',
        stdout: err.stdout?.substring(0, MAX_OUTPUT_BYTES) || '',
        stderr: stderr.substring(0, 4096) || 'Runtime Error',
        exitCode: typeof err.code === 'number' ? err.code : 1,
        executionTimeMs: totalTime,
      };
    }
  }

  private buildExecutionScript(timeLimitMs: number): string {
    const timeLimitSec = Math.ceil(timeLimitMs / 1000);
    return [
      // Read source code from stdin until marker
      `head_src=$(sed '/^---END_SOURCE---$/q' | head -c 65536)`,
      // Save source code
      `echo "$head_src" > /tmp/solution.cpp`,
      // Compile with C++17
      `g++ -std=c++17 -O2 -o /tmp/solution /tmp/solution.cpp 2>&1`,
      // Check compilation
      `if [ $? -ne 0 ]; then exit 1; fi`,
      // Run with timeout, piping remaining stdin
      `timeout ${timeLimitSec} /tmp/solution`,
    ].join(' && ');
  }

  private parseExecutionMeta(stderr: string): {
    compileTimeMs?: number;
    executionTimeMs?: number;
    memoryKb?: number;
    cleanStderr: string;
  } {
    // In a more sophisticated setup, the container script would emit
    // structured metadata. For now, return raw stderr.
    return {
      cleanStderr: stderr,
    };
  }
}
