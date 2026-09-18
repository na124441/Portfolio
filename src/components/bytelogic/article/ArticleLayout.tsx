'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { List, ChevronUp, ArrowLeft } from 'lucide-react';
import { ArticleSectionItem } from '@/types/bytelogic-article';
import { ARTICLE_001_SECTIONS } from '@/data/bytelogic/articles/more-data';
import { cn } from '@/lib/utils';

export interface ArticleLayoutProps {
  children: React.ReactNode;
  sections?: ArticleSectionItem[];
  className?: string;
}

export const ArticleLayout: React.FC<ArticleLayoutProps> = ({
  children,
  sections,
  className,
}) => {
  const sectionsList = sections || ARTICLE_001_SECTIONS;
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isTocOpen, setIsTocOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
        setShowBackToTop(window.scrollY > 600);
      }

      // Check current active section
      const sectionElements = sectionsList.map((s) => document.getElementById(s.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const sec = sectionElements[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sectionsList[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionsList]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-screen text-[#F3F6F7]">
      {/* Top Reading Progress Bar */}
      <div
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-transparent z-50 pointer-events-none"
      >
        <div
          className="h-full bg-gradient-to-r from-[#019AA2] to-[#019AA2] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 justify-center relative">
          {/* Article Editorial Column: 680–760px optimized reading width */}
          <article className="w-full max-w-[740px] py-8 sm:py-12 shrink-0">
            {children}
          </article>

          {/* Desktop Sticky Table of Contents (Right Margin) */}
          <aside className="hidden xl:block w-64 shrink-0 pt-16 relative">
            <div className="sticky top-28 p-4 rounded-[6px] bg-[#0E151B]/80 border border-[#1C2830] backdrop-blur-sm space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-[#1C2830] text-[#68747D]">
                <span className="font-semibold text-[#019AA2] uppercase tracking-wider text-[11px]">
                  INDEX // CONTENTS
                </span>
                <span className="text-[10px] tabular-nums">
                  {Math.round(scrollProgress)}% READ
                </span>
              </div>

              <nav className="max-h-[calc(100vh-220px)] overflow-y-auto space-y-1 bl-scrollbar pr-1">
                {sectionsList.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className={cn(
                        'block py-1.5 px-2 rounded text-[11px] leading-tight transition-colors truncate',
                        isActive
                          ? 'bg-[#019AA2]/15 text-[#019AA2] font-semibold border-l-2 border-[#019AA2]'
                          : 'text-[#68747D] hover:text-[#A8B3BA] hover:bg-[#131C24]'
                      )}
                    >
                      <span className="text-[9px] mr-1.5 opacity-60">{sec.number}</span>
                      {sec.title}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 p-2.5 rounded-[6px] bg-[#0E151B] border border-[#1C2830] hover:border-[#019AA2] text-[#A8B3BA] hover:text-[#019AA2] transition-all shadow-lg active:scale-95 cursor-pointer"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
