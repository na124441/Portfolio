'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import type { QuestionBankTopic, QuestionBankCategory } from '@/types/question-bank';
import { DatasetCard } from './DatasetCard';
import { TierAccordion } from './TierAccordion';
import { cn } from '@/lib/utils';

export interface TopicPanelProps {
  topic: QuestionBankTopic;
  checkedQuestions: Set<string>;
  onToggleQuestion: (key: string) => void;
}

const CATEGORY_BADGE_STYLES: Record<QuestionBankCategory, string> = {
  'Regression Models': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Classification Models': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Model Evaluation': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'Unsupervised Learning': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
};

export function TopicPanel({
  topic,
  checkedQuestions,
  onToggleQuestion,
}: TopicPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReducedMotion) {
        gsap.fromTo(
          containerRef.current,
          { x: 16, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.28, ease: 'power2.out' }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [topic.topicNumber]);

  const categoryStyle = CATEGORY_BADGE_STYLES[topic.category] || 'bg-[#1C2830] text-[#A8B3BA] border-[#1C2830]';

  return (
    <div ref={containerRef} className="flex flex-col gap-6 w-full">
      {/* Topic Header */}
      <div className="relative overflow-hidden bg-[#0A0F14] border border-[#1C2830] rounded-lg p-5 sm:p-7 bl-tick-box">
        {/* Background Watermark Topic Number */}
        <span
          className="absolute -right-2 -bottom-6 font-mono font-extralight text-7xl sm:text-9xl text-[#F3F6F7]/[0.03] select-none pointer-events-none"
          aria-hidden="true"
        >
          {topic.topicNumber}
        </span>

        <div className="relative z-10 flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-[#019AA2] font-semibold tracking-wider">
              TOPIC {topic.topicNumber} //
            </span>
            <span
              className={cn(
                'inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-mono font-medium border',
                categoryStyle
              )}
            >
              {topic.category}
            </span>
          </div>

          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F3F6F7]">
            {topic.name}
          </h2>
        </div>
      </div>

      {/* Dataset Card (pill/chip style with external link) */}
      <div className="flex flex-col gap-2">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#68747D]">
          Matched Real-World Dataset
        </span>
        <DatasetCard dataset={topic.dataset} />
      </div>

      {/* 5 Difficulty Tiers Accordion */}
      <div className="flex flex-col gap-1 mt-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#68747D]">
            Difficulty Tiers &amp; Hands-On Problem Set
          </span>
          <span className="text-[11px] font-mono text-[#68747D]">
            5 Tiers · {topic.tiers.reduce((acc, t) => acc + t.questions.length, 0)} Questions
          </span>
        </div>

        {topic.tiers.map((tier, index) => (
          <TierAccordion
            key={tier.tier}
            tier={tier}
            tierIndex={index}
            topicId={topic.topicNumber}
            checkedQuestions={checkedQuestions}
            onToggleQuestion={onToggleQuestion}
          />
        ))}
      </div>
    </div>
  );
}

export default TopicPanel;
