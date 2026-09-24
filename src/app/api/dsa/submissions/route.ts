/**
 * POST /api/dsa/submissions — Create a new submission (run or submit)
 * GET  /api/dsa/submissions — List submissions for a problem
 */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { judgeSubmission } from '@/lib/bytelogic/execution/judge';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { problemSlug, language, sourceCode, mode } = body as {
      problemSlug: string;
      language: 'cpp';
      sourceCode: string;
      mode: 'run' | 'submit';
    };

    // Validate required fields
    if (!problemSlug || !sourceCode || !mode) {
      return NextResponse.json(
        { error: 'Missing required fields: problemSlug, sourceCode, mode' },
        { status: 400 }
      );
    }

    if (sourceCode.length > 65536) {
      return NextResponse.json(
        { error: 'Source code exceeds maximum size (64KB)' },
        { status: 400 }
      );
    }

    // Create submission record in QUEUED state
    const submission = await prisma.submission.create({
      data: {
        problemSlug,
        language: language || 'cpp',
        sourceCode,
        verdict: 'QUEUED',
        mode,
      },
    });

    // Execute judging (synchronous for V1 — personal single-user system)
    // In a production multi-user system, this would go through a job queue
    await prisma.submission.update({
      where: { id: submission.id },
      data: { verdict: 'RUNNING' },
    });

    const result = await judgeSubmission(problemSlug, sourceCode, language || 'cpp', mode);

    // Persist result
    const updated = await prisma.submission.update({
      where: { id: submission.id },
      data: {
        verdict: result.verdict,
        passedTests: result.passedTests,
        totalTests: result.totalTests,
        runtime: result.executionTimeMs || null,
        memory: result.memoryKb || null,
        compileError: result.compileError || null,
        runtimeError: result.runtimeError || null,
        failedTestIndex: result.failedTestIndex ?? null,
      },
    });

    // If accepted on submit, update progress
    if (mode === 'submit' && result.verdict === 'ACCEPTED') {
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
    } else if (mode === 'submit') {
      // Non-accepted submit still counts as an attempt
      await prisma.problemProgress.upsert({
        where: { problemSlug },
        create: {
          problemSlug,
          status: 'ATTEMPTED',
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
      verdict: updated.verdict,
      passedTests: updated.passedTests,
      totalTests: updated.totalTests,
      runtime: updated.runtime,
      memory: updated.memory,
      compileError: updated.compileError,
      runtimeError: updated.runtimeError,
      failedTestIndex: updated.failedTestIndex,
    });
  } catch (error) {
    console.error('[DSA Submissions] Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const problemSlug = searchParams.get('problemSlug');
    const limit = parseInt(searchParams.get('limit') || '20', 10);

    const where = problemSlug ? { problemSlug, mode: 'submit' } : { mode: 'submit' };

    const submissions = await prisma.submission.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: Math.min(limit, 100),
      select: {
        id: true,
        problemSlug: true,
        language: true,
        sourceCode: true,
        verdict: true,
        passedTests: true,
        totalTests: true,
        runtime: true,
        memory: true,
        compileError: true,
        runtimeError: true,
        createdAt: true,
      },
    });

    return NextResponse.json({ submissions });
  } catch (error) {
    console.error('[DSA Submissions] GET Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
