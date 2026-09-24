'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import gsap from 'gsap';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronRight } from 'lucide-react';
import type { QuestionBankTopic, QuestionBankCategory } from '@/types/question-bank';
import {
  QUESTION_BANK_CATEGORIES,
  QUESTION_BANK_BY_CATEGORY,
  QUESTION_BANK_TOPICS,
} from '@/data/bytelogic/questionBankData';

export interface QuestionBankSidebarProps {
  activeTopic: QuestionBankTopic;
  onSelectTopic: (topic: QuestionBankTopic) => void;
  checkedQuestions: Set<string>;
}

const CATEGORY_STYLES: Record<QuestionBankCategory, { dot: string; text: string; bg: string }> = {
  'Regression Models': {
    dot: 'bg-blue-400',
    text: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  'Classification Models': {
    dot: 'bg-emerald-400',
    text: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  'Model Evaluation': {
    dot: 'bg-amber-400',
    text: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
  'Unsupervised Learning': {
    dot: 'bg-purple-400',
    text: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
};

export function QuestionBankSidebar({
  activeTopic,
  onSelectTopic,
  checkedQuestions,
}: QuestionBankSidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(() =>
    QUESTION_BANK_CATEGORIES.reduce((acc, cat) => ({ ...acc, [cat]: true }), {})
  );

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = QUESTION_BANK_TOPICS.find((t) => t.topicNumber === e.target.value);
    if (selected) {
      onSelectTopic(selected);
    }
  };

  // Compute progress for each topic: { [topicNumber]: { done: number, total: number } }
  const topicProgressMap = useMemo(() => {
    const map: Record<string, { done: number; total: number }> = {};
    for (const topic of QUESTION_BANK_TOPICS) {
      let total = 0;
      let done = 0;
      for (const tier of topic.tiers) {
        for (const q of tier.questions) {
          total += 1;
          if (checkedQuestions.has(`${topic.topicNumber}-${tier.tier}-${q.id}`)) {
            done += 1;
          }
        }
      }
      map[topic.topicNumber] = { done, total };
    }
    return map;
  }, [checkedQuestions]);

  return (
    <>
      {/* Mobile view (< 768px) - Dropdown selector */}
      <div className="md:hidden w-full mb-6">
        <label className="block text-xs font-mono text-[#68747D] uppercase tracking-wider mb-2">
          Select Topic
        </label>
        <div className="relative">
          <select
            value={activeTopic.topicNumber}
            onChange={handleMobileChange}
            className="w-full bg-[#0E151B] text-[#F3F6F7] border border-[#1C2830] rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-[#019AA2] focus:ring-1 focus:ring-[#019AA2] appearance-none cursor-pointer"
          >
            {QUESTION_BANK_CATEGORIES.map((category) => (
              <optgroup key={category} label={category} className="bg-[#0A0F14] text-[#A8B3BA] font-mono">
                {QUESTION_BANK_BY_CATEGORY[category]?.map((topic) => {
                  const p = topicProgressMap[topic.topicNumber];
                  return (
                    <option key={topic.topicNumber} value={topic.topicNumber} className="bg-[#0E151B] text-[#F3F6F7]">
                      {topic.topicNumber}. {topic.name} {p ? `(${p.done}/${p.total})` : ''}
                    </option>
                  );
                })}
              </optgroup>
            ))}
          </select>
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#68747D]">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Desktop view (>= 768px) - Sticky rail */}
      <aside className="hidden md:flex flex-col w-full bg-[#0A0F14] border border-[#1C2830] rounded-lg sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto overflow-x-hidden bl-scrollbar">
        <div className="p-3.5 border-b border-[#1C2830] bg-[#070B0E]/60 flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#68747D]">
            Problem Topics
          </span>
          <span className="font-mono text-[10px] text-[#019AA2] bg-[#019AA2]/10 px-2 py-0.5 rounded border border-[#019AA2]/20">
            {QUESTION_BANK_TOPICS.length} Topics
          </span>
        </div>

        <div className="p-3 flex flex-col gap-4">
          {QUESTION_BANK_CATEGORIES.map((category) => (
            <CategoryGroup
              key={category}
              category={category}
              topics={QUESTION_BANK_BY_CATEGORY[category] || []}
              activeTopic={activeTopic}
              onSelectTopic={onSelectTopic}
              progressMap={topicProgressMap}
              isExpanded={expandedCategories[category] ?? true}
              onToggle={() => toggleCategory(category)}
            />
          ))}
        </div>
      </aside>
    </>
  );
}

function CategoryGroup({
  category,
  topics,
  activeTopic,
  onSelectTopic,
  progressMap,
  isExpanded,
  onToggle,
}: {
  category: QuestionBankCategory;
  topics: QuestionBankTopic[];
  activeTopic: QuestionBankTopic;
  onSelectTopic: (topic: QuestionBankTopic) => void;
  progressMap: Record<string, { done: number; total: number }>;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const listRef = useRef<HTMLUListElement>(null);
  const style = CATEGORY_STYLES[category] || { dot: 'bg-[#A8B3BA]', text: 'text-[#A8B3BA]', bg: 'bg-white/5' };

  useEffect(() => {
    if (!listRef.current) return;
    const items = listRef.current.children;

    if (isExpanded) {
      gsap.to(listRef.current, { height: 'auto', duration: 0.25, ease: 'power2.out' });
      gsap.fromTo(
        items,
        { x: -8, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.2,
          ease: 'power2.out',
          stagger: 0.03,
        }
      );
    } else {
      gsap.to(items, { opacity: 0, x: -8, duration: 0.12, stagger: 0.015, ease: 'power2.in' });
      gsap.to(listRef.current, { height: 0, duration: 0.2, ease: 'power2.in', delay: 0.08 });
    }
  }, [isExpanded]);

  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center justify-between py-1.5 px-2 text-left group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#019AA2] rounded cursor-pointer hover:bg-white/[0.02]"
      >
        <div className="flex items-center gap-2 min-w-0">
          <div className={cn('w-1.5 h-1.5 rounded-full shrink-0', style.dot)} />
          <span className="font-mono text-xs uppercase tracking-wider text-[#A8B3BA] group-hover:text-[#F3F6F7] transition-colors truncate">
            {category}
          </span>
        </div>
        <div className="text-[#68747D] group-hover:text-[#F3F6F7] transition-colors shrink-0">
          {isExpanded ? (
            <ChevronDown className="w-3.5 h-3.5" />
          ) : (
            <ChevronRight className="w-3.5 h-3.5" />
          )}
        </div>
      </button>

      <ul ref={listRef} className="overflow-hidden flex flex-col mt-0.5 space-y-0.5">
        {topics.map((topic) => {
          const isActive = activeTopic.topicNumber === topic.topicNumber;
          const progress = progressMap[topic.topicNumber] || { done: 0, total: 0 };
          const isComplete = progress.total > 0 && progress.done === progress.total;

          return (
            <li key={topic.topicNumber} className="relative">
              <button
                type="button"
                onClick={() => onSelectTopic(topic)}
                className={cn(
                  'w-full text-left py-2 px-3 pl-5 flex justify-between items-center rounded transition-all text-xs font-sans relative cursor-pointer',
                  isActive
                    ? 'text-[#019AA2] bg-[#111A22] font-medium'
                    : 'text-[#A8B3BA] hover:text-[#F3F6F7] hover:bg-[#0E151B]'
                )}
              >
                {/* Active indicator bar */}
                {isActive && (
                  <span className="absolute left-0 top-1 bottom-1 w-[3px] bg-[#019AA2] rounded-r" />
                )}

                <span className="truncate pr-2">
                  <span className="font-mono text-[#68747D] mr-1.5">{topic.topicNumber}.</span>
                  {topic.name}
                </span>

                {progress.total > 0 && (
                  <span
                    className={cn(
                      'text-[10px] font-mono px-1.5 py-0.2 rounded whitespace-nowrap shrink-0',
                      isComplete
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : isActive
                        ? 'text-[#019AA2] bg-[#019AA2]/10'
                        : 'text-[#68747D] bg-[#1C2830]/40'
                    )}
                  >
                    {progress.done}/{progress.total}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default QuestionBankSidebar;
