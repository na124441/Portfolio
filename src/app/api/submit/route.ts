/**
 * POST /api/submit
 * Submits user code against official public + hidden test cases.
 * Returns normalized verdict (AC, WA, TLE, MLE, RE, CE, IE).
 * Stores submission record and updates user problem progress.
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { judgeSubmission } from '@/lib/judging/judge';
import { checkRateLimit, getClientIp, MAX_CODE_BYTES } from '@/lib/execution/rate-limiter';

const SubmitSchema = z.object({
  problemSlug: z.string().min(1, 'Problem slug is required'),
  language: z.enum(['cpp', 'python']),
  code: z.string().min(1, 'Source code cannot be empty').max(MAX_CODE_BYTES, 'Source code exceeds 64KB limit'),
});

export async function POST(request: NextRequest) {
  try {
    // 1. Rate limiting
    const ip = getClientIp(request.headers);
    const rateLimit = checkRateLimit(ip, 'submit');

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: `Rate limit exceeded. Please wait ${rateLimit.retryAfterSec} seconds before submitting again.`,
        },
        {
          status: 429,
          headers: { 'Retry-After': String(rateLimit.retryAfterSec || 60) },
        }
      );
    }

    // 2. Validation
    const json = await request.json().catch(() => null);
    if (!json) {
      return NextResponse.json({ error: 'Malformed JSON payload' }, { status: 400 });
    }

    // Handle problemId alias for problemSlug
    if (json.problemId && !json.problemSlug) {
      json.problemSlug = json.problemId;
    }

    const parseResult = SubmitSchema.safeParse(json);
    if (!parseResult.success) {
      const issue = parseResult.error.issues[0]?.message || 'Validation error';
      return NextResponse.json({ error: issue }, { status: 400 });
    }

    const { problemSlug, language, code } = parseResult.data;

    // 3. Create persistent submission record in QUEUED state
    const submission = await prisma.submission.create({
      data: {
        problemSlug,
        language,
        sourceCode: code,
        verdict: 'QUEUED',
        mode: 'submit',
      },
    });

    // 4. Update to RUNNING
    await prisma.submission.update({
      where: { id: submission.id },
      data: { verdict: 'RUNNING' },
    });

    // 5. Run judging against test suite
    const result = await judgeSubmission(problemSlug, code, language, 'submit');

    // 6. Map verdict for backward compatibility with prisma model
    const prismaVerdict =
      result.verdict === 'AC' ? 'ACCEPTED' :
      result.verdict === 'WA' ? 'WRONG_ANSWER' :
      result.verdict === 'CE' ? 'COMPILE_ERROR' :
      result.verdict === 'RE' ? 'RUNTIME_ERROR' :
      result.verdict === 'TLE' ? 'TIME_LIMIT' :
      result.verdict === 'MLE' ? 'MEMORY_LIMIT' : 'SYSTEM_ERROR';

    // 7. Persist judge results
    const updated = await prisma.submission.update({
      where: { id: submission.id },
      data: {
        verdict: prismaVerdict,
        passedTests: result.passedTests,
        totalTests: result.totalTests,
        runtime: result.executionTimeMs || null,
        memory: result.memoryKb || null,
        compileError: result.compileError || null,
        runtimeError: result.runtimeError || null,
        failedTestIndex: result.failedTestIndex ?? null,
      },
    });

    // 8. Update problem progress
    if (result.verdict === 'AC') {
      await prisma.problemProgress.upsert({
        where: { problemSlug },
        create: {
          problemSlug,
          status: 'SOLVED',
          accepted: true,
          attemptCount: 1,
          firstAttemptAt: new Date(),
          solvedAt: new Date(),
          lastAttemptAt: new Date(),
        },
        update: {
          status: 'SOLVED',
          accepted: true,
          solvedAt: new Date(),
          lastAttemptAt: new Date(),
          attemptCount: { increment: 1 },
        },
      });
    } else {
      await prisma.problemProgress.upsert({
        where: { problemSlug },
        create: {
          problemSlug,
          status: 'ATTEMPTED',
          accepted: false,
          attemptCount: 1,
          firstAttemptAt: new Date(),
          lastAttemptAt: new Date(),
        },
        update: {
          status: 'ATTEMPTED',
          lastAttemptAt: new Date(),
          attemptCount: { increment: 1 },
        },
      });
    }

    return NextResponse.json({
      id: updated.id,
      verdict: result.verdict, // Clean normalized verdict: AC, WA, TLE, MLE, RE, CE, IE
      passedTests: updated.passedTests,
      totalTests: updated.totalTests,
      runtime: updated.runtime,
      memory: updated.memory,
      compileError: updated.compileError,
      runtimeError: updated.runtimeError,
      failedTestIndex: updated.failedTestIndex,
    });
  } catch (error) {
    console.error('[API Submit] Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal judging error occurred' },
      { status: 500 }
    );
  }
}
