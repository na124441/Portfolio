/**
 * GET  /api/dsa/progress — Get all progress or query by ?slug=...
 * PUT  /api/dsa/progress — Update progress for a problem (status, hintsUsed, revisitReason)
 */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (slug) {
      const record = await prisma.problemProgress.findUnique({
        where: { problemSlug: slug },
      });
      return NextResponse.json({ progress: record });
    }

    const allRecords = await prisma.problemProgress.findMany();
    const progressMap = allRecords.reduce((acc, curr) => {
      acc[curr.problemSlug] = curr;
      return acc;
    }, {} as Record<string, typeof allRecords[0]>);

    return NextResponse.json({ progress: progressMap, records: allRecords });
  } catch (error) {
    console.error('[DSA Progress] GET Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { problemSlug, status, revisitReason, hintsUsed } = body as {
      problemSlug: string;
      status?: string;
      revisitReason?: string;
      hintsUsed?: number;
    };

    if (!problemSlug) {
      return NextResponse.json(
        { error: 'Missing required field: problemSlug' },
        { status: 400 }
      );
    }

    const updateData: Record<string, unknown> = {
      lastAttemptAt: new Date(),
    };

    if (status !== undefined) {
      updateData.status = status;
      if (status === 'SOLVED') {
        updateData.accepted = true;
        updateData.solvedAt = new Date();
      }
    }
    if (revisitReason !== undefined) {
      updateData.revisitReason = revisitReason;
    }
    if (hintsUsed !== undefined) {
      updateData.hintsUsed = hintsUsed;
    }

    const updated = await prisma.problemProgress.upsert({
      where: { problemSlug },
      create: {
        problemSlug,
        status: status || 'UNATTEMPTED',
        accepted: status === 'SOLVED',
        hintsUsed: hintsUsed || 0,
        revisitReason: revisitReason || null,
        firstAttemptAt: new Date(),
        lastAttemptAt: new Date(),
        solvedAt: status === 'SOLVED' ? new Date() : null,
      },
      update: updateData,
    });

    return NextResponse.json({ progress: updated });
  } catch (error) {
    console.error('[DSA Progress] PUT Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
