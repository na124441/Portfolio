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
    <div className="min-h-screen bg-[#05070A] text-[#F3F6F7] font-sans relative flex flex-col justify-between selection:bg-[#019AA2] selection:text-[#05070A] bl-scrollbar">
      {/* Subtle Cartesian Coordinate Grid (Drafting Paper / Computational Space) */}
      <div className="fixed inset-0 pointer-events-none bl-cartesian-grid bl-grid-mask opacity-75 z-0" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <ByteLogicNavbar />
        <main className="flex-1 w-full pt-20 sm:pt-24">{children}</main>
        <ByteLogicFooter />
      </div>
    </div>
  );
}
