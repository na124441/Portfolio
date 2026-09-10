import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/layout/SmoothScroll';

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#010a0b] text-[#feffff] font-sans relative flex flex-col justify-between selection:bg-[#d4af37] selection:text-[#010a0b]">
      {/* Background Technical Grid Canvas with radial fade */}
      <div className="fixed inset-0 pointer-events-none technical-grid-canvas grid-mask-radial opacity-60 z-0" />
      
      {/* Ambient top light source (warm metallic gold luster) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.07),transparent_70%)] pointer-events-none z-0" />

      <SmoothScroll>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </div>
      </SmoothScroll>
    </div>
  );
}
