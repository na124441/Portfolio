/**
 * PUT /api/dsa/drafts — Save/upsert draft code for a problem & language
 * GET /api/dsa/drafts — Retrieve saved draft by ?slug=...&language=...
 */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const language = searchParams.get('language') || 'cpp';

    if (!slug) {
      return NextResponse.json(
        { error: 'Missing required query parameter: slug' },
        { status: 400 }
      );
    }

    const draft = await prisma.problemDraft.findUnique({
      where: {
        problemSlug_language: {
          problemSlug: slug,
          language,
        },
      },
    });

    return NextResponse.json({ draft });
  } catch (error) {
    console.error('[DSA Drafts] GET Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { problemSlug, language, sourceCode } = body as {
      problemSlug: string;
      language: string;
      sourceCode: string;
    };

    if (!problemSlug || sourceCode === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields: problemSlug, sourceCode' },
        { status: 400 }
      );
    }

    const lang = language || 'cpp';

    const draft = await prisma.problemDraft.upsert({
      where: {
        problemSlug_language: {
          problemSlug,
          language: lang,
        },
      },
      create: {
        problemSlug,
        language: lang,
        sourceCode,
      },
      update: {
        sourceCode,
      },
    });

    return NextResponse.json({ draft });
  } catch (error) {
    console.error('[DSA Drafts] PUT Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
