/**
 * POST /api/execute
 * Executes user code (C++ or Python) with custom stdin input using the remote execution engine.
 * Never executes code on the Next.js/Vercel host.
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getExecutionService } from '@/lib/execution/service';
import { checkRateLimit, getClientIp, MAX_CODE_BYTES, MAX_STDIN_BYTES } from '@/lib/execution/rate-limiter';

const ExecuteSchema = z.object({
  language: z.enum(['cpp', 'python']),
  code: z.string().min(1, 'Source code cannot be empty').max(MAX_CODE_BYTES, 'Source code exceeds 64KB limit'),
  stdin: z.string().max(MAX_STDIN_BYTES, 'Standard input exceeds 64KB limit').optional().default(''),
});

export async function POST(request: NextRequest) {
  try {
    // 1. Rate limiting
    const ip = getClientIp(request.headers);
    const rateLimit = checkRateLimit(ip, 'run');

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: `Rate limit exceeded. Please wait ${rateLimit.retryAfterSec} seconds before running again.`,
        },
        {
          status: 429,
          headers: { 'Retry-After': String(rateLimit.retryAfterSec || 60) },
        }
      );
    }

    // 2. Body parsing and validation
    const json = await request.json().catch(() => null);
    if (!json) {
      return NextResponse.json({ error: 'Malformed JSON payload' }, { status: 400 });
    }

    const parseResult = ExecuteSchema.safeParse(json);
    if (!parseResult.success) {
      const issue = parseResult.error.issues[0]?.message || 'Validation error';
      return NextResponse.json({ error: issue }, { status: 400 });
    }

    const { language, code, stdin } = parseResult.data;

    // 3. Delegate to remote execution engine
    const service = getExecutionService();
    const result = await service.execute({
      language,
      code,
      stdin,
      timeLimitMs: 4000,
    });

    return NextResponse.json({
      status: result.status,
      stdout: result.stdout,
      stderr: result.stderr,
      exitCode: result.exitCode,
      timeMs: result.timeMs,
      memoryKb: result.memoryKb,
      compileError: result.compileError,
      runtimeError: result.runtimeError,
      isTimeout: result.isTimeout,
    });
  } catch (error) {
    console.error('[API Execute] Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal execution failure. Please check execution server connectivity.' },
      { status: 500 }
    );
  }
}
