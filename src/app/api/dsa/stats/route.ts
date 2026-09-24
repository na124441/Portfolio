/**
 * GET /api/dsa/stats — Compute real statistics strictly from submission and progress records.
 * No fabricated numbers, no fake percentiles.
 */

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { DSA_PROBLEMS } from '@/data/bytelogic/dsa';
import type { DsaDifficulty } from '@/types/dsa-question';

export async function GET() {
  try {
    // 1. Fetch all progress records
    const progressList = await prisma.problemProgress.findMany();

    // 2. Fetch all submissions count and accepted count
    const [totalSubmissions, acceptedSubmissions, recentSubmissions] = await Promise.all([
      prisma.submission.count({ where: { mode: 'submit' } }),
      prisma.submission.count({ where: { mode: 'submit', verdict: 'ACCEPTED' } }),
      prisma.submission.findMany({
        where: { mode: 'submit' },
        orderBy: { createdAt: 'desc' },
        take: 10,
        select: {
          id: true,
          problemSlug: true,
          language: true,
          verdict: true,
          runtime: true,
          memory: true,
          passedTests: true,
          totalTests: true,
          createdAt: true,
        },
      }),
    ]);

    // 3. Map progress by slug
    const progressMap = new Map(progressList.map((p) => [p.problemSlug, p]));

    // 4. Calculate difficulty breakdown
    const difficultyCounts: Record<DsaDifficulty, { total: number; solved: number; attempted: number }> = {
      'Warm-up': { total: 0, solved: 0, attempted: 0 },
      Easy: { total: 0, solved: 0, attempted: 0 },
      Medium: { total: 0, solved: 0, attempted: 0 },
      Hard: { total: 0, solved: 0, attempted: 0 },
    };

    // 5. Calculate topic breakdown
    const topicCounts: Record<string, { total: number; solved: number; attempted: number }> = {};

    let totalSolved = 0;
    let totalAttempted = 0;
    let totalRevisit = 0;

    for (const problem of DSA_PROBLEMS) {
      const diff = problem.difficulty;
      if (difficultyCounts[diff]) {
        difficultyCounts[diff].total++;
      }

      const topic = problem.topic;
      if (!topicCounts[topic]) {
        topicCounts[topic] = { total: 0, solved: 0, attempted: 0 };
      }
      topicCounts[topic].total++;

      const p = progressMap.get(problem.slug);
      if (p) {
        if (p.status === 'SOLVED') {
          totalSolved++;
          if (difficultyCounts[diff]) difficultyCounts[diff].solved++;
          topicCounts[topic].solved++;
        } else if (p.status === 'ATTEMPTED') {
          totalAttempted++;
          if (difficultyCounts[diff]) difficultyCounts[diff].attempted++;
          topicCounts[topic].attempted++;
        }
        if (p.revisitReason || p.status === 'REVISIT') {
          totalRevisit++;
        }
      }
    }

    const acceptanceRate =
      totalSubmissions > 0
        ? Math.round((acceptedSubmissions / totalSubmissions) * 1000) / 10
        : 0;

    return NextResponse.json({
      summary: {
        totalProblems: DSA_PROBLEMS.length,
        totalSolved,
        totalAttempted,
        totalRevisit,
        totalSubmissions,
        acceptedSubmissions,
        acceptanceRate,
      },
      difficulty: difficultyCounts,
      topics: topicCounts,
      recentSubmissions,
    });
  } catch (error) {
    console.error('[DSA Stats] GET Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
