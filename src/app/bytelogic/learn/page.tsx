import React from 'react';
import type { Metadata } from 'next';
import { LearnPageContent } from '@/components/bytelogic/learn/LearnPageContent';

export const metadata: Metadata = {
  title: 'Learn — Technical Knowledge Index & Learning Paths | ByteLogic',
  description:
    'The gateway into ByteLogic knowledge system. Discover structured domains, sequential learning paths, and foundational derivations across AI, ML, Mathematics, Algorithms, and Systems.',
  keywords: [
    'ByteLogic Learn',
    'Machine Learning Foundations',
    'Deep Learning Foundations',
    'Mathematics for Machine Learning',
    'Algorithms',
    'Systems Engineering',
    'Interactive Computational Visualizations',
    'K-Means',
    'Gradient Descent',
    'PCA',
  ],
};

export default function ByteLogicLearnPage() {
  return <LearnPageContent />;
}
