import React from 'react';
import type { Metadata } from 'next';
import '@/app/bytelogic/bytelogic.css';
import { ByteLogicNavbar } from '@/components/bytelogic/layout/ByteLogicNavbar';
import { ByteLogicFooter } from '@/components/bytelogic/layout/ByteLogicFooter';

export const metadata: Metadata = {
  title: 'ByteLogic Editorial Articles',
  description:
    'Research-inspired technical editorial pieces exploring foundational questions in AI, machine learning, mathematics, and computing systems.',
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[100dvh] w-full max-w-full overflow-x-hidden bg-[#05070A] text-[#F3F6F7] font-sans relative flex flex-col justify-between selection:bg-[#019AA2] selection:text-[#05070A] bl-scrollbar">
      {/* Subtle Cartesian Coordinate Grid (Drafting Paper / Computational Space) */}
      <div className="fixed inset-0 pointer-events-none bl-cartesian-grid bl-grid-mask opacity-75 z-0" />

      <div className="relative z-10 flex flex-col min-h-[100dvh] w-full max-w-full overflow-x-hidden">
        <ByteLogicNavbar />
        <main className="flex-1 w-full max-w-full">{children}</main>
        <ByteLogicFooter />
      </div>
    </div>
  );
}
