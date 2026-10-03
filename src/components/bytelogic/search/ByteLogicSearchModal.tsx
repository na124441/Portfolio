'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, ArrowRight, BookOpen, Terminal, Sparkles, Code, Play } from 'lucide-react';
import Link from 'next/link';
import { FEATURED_CONTENT, LEARNING_PATHS } from '@/lib/bytelogic/tokens';
import { cn } from '@/lib/utils';

interface ByteLogicSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ByteLogicSearchModal: React.FC<ByteLogicSearchModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'concepts' | 'lab' | 'paths'>('all');

  // Keyboard shortcut listener (ESC to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Aggregate searchable items
  const allItems = useMemo(() => {
    const content = FEATURED_CONTENT.map((item) => ({
      id: item.id,
      title: item.title,
      category: item.type,
      subtitle: item.subtitle,
      href: item.slug,
      badge: item.domain,
      type: item.type === 'EXPERIMENT' ? 'lab' : 'concepts',
    }));

    const paths = LEARNING_PATHS.map((p) => ({
      id: p.id,
      title: p.title,
      category: 'LEARNING PATH',
      subtitle: p.description,
      href: `/bytelogic#paths`,
      badge: `${p.modulesCount} Modules · ${p.difficulty}`,
      type: 'paths',
    }));

    // Add extra rich technical search entries
    const extras = [
      {
        id: 'kmeans-derivation',
        title: 'K-Means Objective Function & Proof of Monotonic Convergence',
        category: 'MATHEMATICS',
        subtitle: 'Derivation of Within-Cluster Sum of Squares (WCSS) and expectation-maximization updates.',
        href: '/bytelogic/concepts/k-means#mathematics',
        badge: 'Machine Learning · Proof',
        type: 'concepts',
      },
      {
        id: 'kmeans-scratch',
        title: 'Lloyd Algorithm in Pure NumPy (Vectorized Distance Matrix)',
        category: 'IMPLEMENTATION',
        subtitle: 'Production implementation of K-Means without scikit-learn dependency.',
        href: '/bytelogic/concepts/k-means#implementation',
        badge: 'Python / NumPy · 45 LOC',
        type: 'concepts',
      },
      {
        id: 'kmeans-plusplus-lab',
        title: 'Experiment 023: K-Means++ vs Random Initialization Lab',
        category: 'EXPERIMENT',
        subtitle: 'Interactive live benchmark comparing clustering variance and iteration speed.',
        href: '/bytelogic#lab',
        badge: 'ByteLogic Lab · Interactive',
        type: 'lab',
      },
    ];

    return [...content, ...paths, ...extras];
  }, []);

  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      const matchesFilter =
        activeFilter === 'all' || item.type === activeFilter;
      const matchesQuery =
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.badge.toLowerCase().includes(query.toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [allItems, query, activeFilter]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-bg/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="w-full max-w-2xl bg-surface border border-line shadow-2xl rounded-[6px] overflow-hidden bl-tick-box"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-line bg-bg-2">
          <Search className="w-4 h-4 text-accent shrink-0 mr-3" />
          <input
            type="text"
            placeholder="Search concepts, algorithms, derivations, code, labs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm font-mono text-fg placeholder-fg-muted focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-fg-muted hover:text-fg mr-2"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-mono text-fg-soft hover:text-fg px-2 py-1 bg-surface-2 border border-line rounded-[4px]"
            aria-label="Close search"
          >
            ESC
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 px-4 py-2 border-b border-line bg-surface overflow-x-auto text-xs font-mono bl-scrollbar">
          {[
            { key: 'all', label: 'All Items' },
            { key: 'concepts', label: 'Concepts & Derivations' },
            { key: 'lab', label: 'Interactive Lab' },
            { key: 'paths', label: 'Learning Paths' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key as any)}
              className={cn(
                'px-2.5 py-1 rounded-[4px] border text-[11px] whitespace-nowrap transition-colors cursor-pointer',
                activeFilter === tab.key
                  ? 'border-accent bg-accent/15 text-accent font-semibold'
                  : 'border-transparent text-fg-soft hover:text-fg hover:bg-surface-2'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 bl-scrollbar">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-xs font-mono text-fg-muted">
              No technical resources matched &ldquo;{query}&rdquo;
            </div>
          ) : (
            <div className="space-y-1">
              {filteredItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-start justify-between p-3 rounded-[4px] hover:bg-surface-2 border border-transparent hover:border-line transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 mt-0.5 rounded-[4px] bg-bg-2 border border-line text-accent shrink-0">
                      {item.type === 'lab' ? (
                        <Terminal className="w-3.5 h-3.5" />
                      ) : item.category === 'LEARNING PATH' ? (
                        <BookOpen className="w-3.5 h-3.5" />
                      ) : (
                        <Sparkles className="w-3.5 h-3.5" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-accent font-semibold">
                          {item.category}
                        </span>
                        <span className="text-[11px] font-mono text-fg-muted">
                          • {item.badge}
                        </span>
                      </div>
                      <h4 className="text-sm font-sans font-medium text-fg group-hover:text-accent transition-colors mt-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-fg-soft line-clamp-1 mt-0.5 font-sans">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-fg-muted group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 mt-2" />
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2 border-t border-line bg-bg-2 flex items-center justify-between text-[11px] font-mono text-fg-muted">
          <span>Use ⌘K anytime to open search</span>
          <span>ByteLogic Knowledge Index</span>
        </div>
      </div>
    </div>
  );
};
