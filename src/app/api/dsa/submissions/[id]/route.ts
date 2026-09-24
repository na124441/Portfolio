/**
 * GET /api/dsa/submissions/:id — Get a single submission's status and result
 */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const submission = await prisma.submission.findUnique({
      where: { id },
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
        failedTestIndex: true,
        mode: true,
        createdAt: true,
      },
    });

    if (!submission) {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(submission);
  } catch (error) {
    console.error('[DSA Submission] GET Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
