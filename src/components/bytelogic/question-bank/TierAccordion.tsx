'use client';

import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { QuestionBankTier } from '@/types/question-bank';
import { QuestionItem } from './QuestionItem';

export interface TierAccordionProps {
  tier: QuestionBankTier;
  tierIndex?: number;
  index?: number;
  topicId: string;
  checkedQuestions: Set<string>;
  onToggleQuestion: (questionKey: string) => void;
}

const TIER_COLORS: Record<number, { border: string; badge: string; text: string }> = {
  1: { border: 'border-l-blue-400', badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20', text: 'text-blue-400' },
  2: { border: 'border-l-teal-400', badge: 'bg-teal-500/10 text-teal-400 border-teal-500/20', text: 'text-teal-400' },
  3: { border: 'border-l-amber-400', badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20', text: 'text-amber-400' },
  4: { border: 'border-l-orange-400', badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20', text: 'text-orange-400' },
  5: { border: 'border-l-rose-400', badge: 'bg-rose-500/10 text-rose-400 border-rose-500/20', text: 'text-rose-400' },
};

export function TierAccordion({
  tier,
  tierIndex,
  index,
  topicId,
  checkedQuestions,
  onToggleQuestion,
}: TierAccordionProps) {
  const effectiveIndex = tierIndex !== undefined ? tierIndex : (index !== undefined ? index : 0);
  const [isExpanded, setIsExpanded] = useState(effectiveIndex === 0);
  const contentRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<SVGSVGElement>(null);

  const colors = TIER_COLORS[tier.tier] || TIER_COLORS[1];

  const toggleAccordion = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (!contentRef.current || !chevronRef.current) return;

    if (isExpanded) {
      gsap.to(contentRef.current, { height: 'auto', opacity: 1, duration: 0.25, ease: 'power2.out' });
      gsap.to(chevronRef.current, { rotation: 180, duration: 0.25, ease: 'power2.out' });
    } else {
      gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.2, ease: 'power2.in' });
      gsap.to(chevronRef.current, { rotation: 0, duration: 0.2, ease: 'power2.in' });
    }
  }, [isExpanded]);

  const totalQuestions = tier.questions?.length || 0;
  const doneQuestions = tier.questions?.filter((q) =>
    checkedQuestions.has(`${topicId}-${tier.tier}-${q.id}`)
  ).length || 0;
  const progressPercent = totalQuestions === 0 ? 0 : (doneQuestions / totalQuestions) * 100;

  return (
    <div
      className={cn(
        'bg-[#0E151B] border border-[#1C2830] rounded-lg mb-3 overflow-hidden border-l-4 transition-colors bl-tick-box relative',
        colors.border
      )}
    >
      <button
        type="button"
        onClick={toggleAccordion}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#019AA2] hover:bg-[#111A22] transition-colors cursor-pointer"
        aria-expanded={isExpanded}
      >
        <div className="flex flex-col gap-1 min-w-0 pr-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <span
              className={cn(
                'px-2 py-0.5 rounded text-[11px] font-mono font-semibold uppercase tracking-wider border',
                colors.badge
              )}
            >
              TIER {tier.tier}
            </span>
            <h3 className="text-[#F3F6F7] font-sans font-semibold text-base sm:text-lg">
              {tier.subtitle}
            </h3>
          </div>
          <p className="text-[#A8B3BA] text-xs sm:text-sm font-sans">
            {tier.title}
          </p>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <div className="flex flex-col items-end gap-1">
            <span className="text-xs font-mono text-[#68747D]">
              <span className={doneQuestions === totalQuestions && totalQuestions > 0 ? 'text-[#019AA2] font-semibold' : ''}>
                {doneQuestions}
              </span>
              /{totalQuestions} done
            </span>
            <div className="w-16 sm:w-20 h-1.5 bg-[#1C2830] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#019AA2] rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          <ChevronDown
            ref={chevronRef}
            className="w-4 h-4 text-[#68747D] transition-colors shrink-0"
          />
        </div>
      </button>

      <div
        ref={contentRef}
        className="h-0 opacity-0 overflow-hidden"
        style={effectiveIndex === 0 ? { height: 'auto', opacity: 1 } : {}}
      >
        <div className="p-4 pt-0 border-t border-[#1C2830] mt-1 space-y-2.5">
          {tier.questions?.map((question) => {
            const key = `${topicId}-${tier.tier}-${question.id}`;
            return (
              <QuestionItem
                key={key}
                question={question}
                questionKey={key}
                isChecked={checkedQuestions.has(key)}
                onToggle={() => onToggleQuestion(key)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TierAccordion;
