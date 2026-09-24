import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getAllDsaProblems,
  getDsaProblemBySlug,
  getAdjacentDsaProblems,
} from '@/data/bytelogic/dsa';
import { DsaWorkspace } from '@/components/bytelogic/dsa/workspace/DsaWorkspace';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

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
    title: `${problem.title} — ByteLogic DSA (${problem.difficulty})`,
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

  return (
    <div className="min-h-screen bg-[#05070A] pt-14 sm:pt-16">
      <DsaWorkspace problem={problem} prevProblem={prev} nextProblem={next} />
    </div>
  );
}
