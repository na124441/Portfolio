import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getAllDsaProblems,
  getAllDsaSlugs,
  getDsaProblemBySlug,
  getAdjacentDsaProblems,
} from '@/data/bytelogic/dsa';
import { DsaWorkspace } from '@/components/bytelogic/dsa/workspace/DsaWorkspace';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = true;

// Pre-render static pages for every single question in the curriculum
export async function generateStaticParams() {
  const problems = getAllDsaProblems();
  return problems.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const problem = getDsaProblemBySlug(slug);

  if (!problem) {
    return {
      title: 'Problem Not Found — ByteLogic DSA',
    };
  }

  return {
    title: `${problem.order}. ${problem.title} — ByteLogic DSA (${problem.difficulty})`,
    description: `Solve ${problem.title} on ByteLogic. Progressive hints, C++ & Python workspace, and optimal complexity breakdown.`,
    keywords: [
      problem.title,
      problem.topic,
      ...problem.tags,
      'ByteLogic DSA',
      'Algorithms Practice',
    ],
  };
}

export default async function DsaProblemWorkspacePage({ params }: PageProps) {
  const { slug } = await params;
  const problem = getDsaProblemBySlug(slug);

  if (!problem) {
    notFound();
  }

  const { prev, next } = getAdjacentDsaProblems(slug);
  const allSlugs = getAllDsaSlugs();

  const clientProblem = {
    ...problem,
    testCases: (problem.testCases || []).filter((tc) => tc.visibility !== 'hidden'),
  };

  return (
    <div className="w-full min-h-screen bg-[#1a1a1a]">
      <DsaWorkspace
        problem={clientProblem}
        prevProblem={prev}
        nextProblem={next}
        allSlugs={allSlugs}
      />
    </div>
  );
}
