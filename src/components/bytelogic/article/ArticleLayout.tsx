'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { List, ChevronUp, X } from 'lucide-react';
import { ArticleSectionItem } from '@/types/bytelogic-article';
import { cn } from '@/lib/utils';

export interface ArticleLayoutProps {
  children: React.ReactNode;
  sections?: ArticleSectionItem[];
  className?: string;
}

export const ArticleLayout: React.FC<ArticleLayoutProps> = ({
  children,
  sections = [],
  className,
}) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id ?? '');
  const [isTocOpen, setIsTocOpen] = useState(false);

  /* Reading progress: write a transform straight to the DOM, no React re-render
     and no layout. rAF-throttled. */
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${ratio})`;
      }
      setShowBackToTop((prev) => {
        const next = window.scrollY > 600;
        return prev === next ? prev : next;
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  /* Active section: IntersectionObserver instead of offsetTop reads. The root
     margin makes a section "active" once it crosses the top ~25% of the viewport. */
  useEffect(() => {
    if (sections.length === 0) return;
    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top);
          else visible.delete(entry.target.id);
        }
        if (visible.size > 0) {
          // topmost visible section wins
          const [id] = [...visible.entries()].sort((a, b) => a[1] - b[1])[0];
          setActiveSection(id);
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  /* Close the mobile drawer on Escape and lock body scroll while open. */
  useEffect(() => {
    if (!isTocOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsTocOpen(false);
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [isTocOpen]);

  const scrollToTop = useCallback(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  }, []);

  const tocLinks = (onNavigate?: () => void) =>
    sections.map((section) => {
      const isActive = activeSection === section.id;
      return (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={onNavigate}
          aria-current={isActive ? 'location' : undefined}
          className={cn(
            'block rounded px-2 py-1.5 transition-colors duration-[var(--dur-micro)]',
            isActive
              ? 'bg-accent-soft font-semibold text-accent'
              : 'text-fg-soft hover:text-fg'
          )}
        >
          {section.number ? `${section.number}. ` : ''}
          {section.title}
        </a>
      );
    });

  return (
    <div
      data-theme="lab"
      className={cn('relative min-h-dvh w-full bg-bg text-fg', className)}
    >
      {/* Reading progress (transform only, compositor-friendly) */}
      <div
        aria-hidden
        className="fixed inset-x-0 top-0 z-50 h-[2.5px] bg-transparent"
      >
        <div
          ref={progressRef}
          className="h-full origin-left bg-accent will-change-transform"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Reading column: capped line length for comfortable reading */}
          <main className="min-w-0 lg:col-span-9">
            <div className="max-w-[68ch]">{children}</div>
          </main>

          {/* Desktop TOC */}
          <aside className="hidden lg:col-span-3 lg:block">
            <div
              className="surface-flat sticky space-y-4 rounded-[6px] p-5"
              style={{ top: 'calc(var(--header-h) + 24px)' }}
            >
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
                <List className="h-3.5 w-3.5" aria-hidden />
                <span>Contents</span>
              </div>
              <nav
                aria-label="Table of contents"
                className="max-h-[70vh] space-y-0.5 overflow-y-auto font-mono text-xs"
              >
                {tocLinks()}
              </nav>
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile: floating buttons */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 pb-[env(safe-area-inset-bottom)] lg:hidden">
        {sections.length > 0 && (
          <button
            type="button"
            onClick={() => setIsTocOpen(true)}
            aria-label="Open table of contents"
            aria-expanded={isTocOpen}
            className="surface-raised flex h-11 w-11 items-center justify-center rounded-full text-accent"
          >
            <List className="h-5 w-5" aria-hidden />
          </button>
        )}
      </div>

      {/* Back to top (all sizes) */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        tabIndex={showBackToTop ? 0 : -1}
        className={cn(
          'surface-raised fixed bottom-4 left-4 z-40 flex h-11 w-11 items-center justify-center rounded-full text-fg-soft hover:text-accent',
          'pb-[env(safe-area-inset-bottom)] transition-[opacity,transform] duration-[var(--dur-interface)]',
          showBackToTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
        )}
      >
        <ChevronUp className="h-5 w-5" aria-hidden />
      </button>

      {/* Mobile TOC drawer */}
      {isTocOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Table of contents">
          <button
            type="button"
            aria-label="Close table of contents"
            onClick={() => setIsTocOpen(false)}
            className="absolute inset-0 bg-black/60"
          />
          <div className="surface-signature absolute inset-x-0 bottom-0 max-h-[75dvh] overflow-y-auto rounded-t-[12px] p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))]">
            <div className="mb-3 flex items-center justify-between">
              <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
                <List className="h-3.5 w-3.5" aria-hidden />
                Contents
              </span>
              <button
                type="button"
                onClick={() => setIsTocOpen(false)}
                aria-label="Close"
                className="rounded p-1 text-fg-soft hover:text-fg"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>
            <nav aria-label="Table of contents" className="space-y-0.5 font-mono text-sm">
              {tocLinks(() => setIsTocOpen(false))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};
