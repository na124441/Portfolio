import React from 'react';
import type { Metadata } from 'next';
import './bytelogic.css';
import { ByteLogicNavbar } from '@/components/bytelogic/layout/ByteLogicNavbar';
import { ByteLogicFooter } from '@/components/bytelogic/layout/ByteLogicFooter';

export const metadata: Metadata = {
  title: 'ByteLogic — Technical Learning & Computational Knowledge Platform',
  description:
    'A technical learning platform for understanding ideas, visualizing algorithms, implementing concepts, and experimenting with systems in AI, ML, Mathematics, and Computer Science.',
  keywords: [
    'ByteLogic',
    'AI',
    'Machine Learning',
    'Deep Learning',
    'Mathematics',
    'Algorithms',
    'Computer Science',
    'Computational Platform',
    'K-Means',
  ],
};

export default function ByteLogicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-theme="lab" className="min-h-dvh w-full max-w-full overflow-x-clip bg-bg text-fg font-sans relative flex flex-col justify-between bl-scrollbar">
      {/* Subtle Cartesian Coordinate Grid (Drafting Paper / Computational Space) */}
      <div className="fixed inset-0 pointer-events-none bl-cartesian-grid bl-grid-mask opacity-75 z-0" />

      <div className="relative z-10 flex flex-col min-h-dvh w-full max-w-full overflow-x-clip">
        <ByteLogicNavbar />
        <main className="flex-1 w-full max-w-full">{children}</main>
        <ByteLogicFooter />
      </div>
    </div>
  );
}
