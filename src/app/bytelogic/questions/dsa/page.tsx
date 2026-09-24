import React from 'react';
import type { Metadata } from 'next';
import { DsaPageContent } from '@/components/bytelogic/dsa/DsaPageContent';

export const metadata: Metadata = {
  title: 'DSA Question Bank — ByteLogic | Curriculum & Practice',
  description:
    'An interactive Data Structures and Algorithms learning engine. Explore topic-tiered challenges from Warm-up to Hard, progressive hints, code editor workspace, and complexity breakdowns.',
  keywords: [
    'ByteLogic DSA',
    'Data Structures and Algorithms',
    'Algorithms Practice',
    'LeetCode Alternative',
    'Arrays and Strings',
    'Linked Lists',
    'Trees and Graphs',
    'Dynamic Programming',
    'Interactive Coding Practice',
  ],
};

export default function DsaQuestionBankIndexPage() {
  return <DsaPageContent />;
}
