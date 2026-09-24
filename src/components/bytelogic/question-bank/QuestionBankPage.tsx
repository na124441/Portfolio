'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { QUESTION_BANK_TOPICS } from '@/data/bytelogic/questionBankData';
import type { QuestionBankTopic } from '@/types/question-bank';
import { QuestionBankSidebar } from './QuestionBankSidebar';
import { TopicPanel } from './TopicPanel';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const STORAGE_KEY = 'bytelogic-qb-progress';

export function QuestionBankPage() {
  const [activeTopic, setActiveTopic] = useState<QuestionBankTopic>(QUESTION_BANK_TOPICS[0]);
  const [checkedQuestions, setCheckedQuestions] = useState<Set<string>>(new Set());
  const headerRef = useRef<HTMLDivElement>(null);

  // Load saved progress from localStorage after mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setCheckedQuestions(new Set(parsed));
        }
      }
    } catch (e) {
      console.error('Failed to load question bank progress', e);
    }
  }, []);

  // Sync to localStorage
  const handleToggleQuestion = (key: string) => {
    setCheckedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(next)));
      } catch (e) {
        console.error('Failed to save question bank progress', e);
      }
      return next;
    });
  };

  // Header entrance animation
  useEffect(() => {
    if (!headerRef.current) return;
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReducedMotion) {
        const tl = gsap.timeline();
        tl.fromTo('.gsap-breadcrumb', { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' })
          .fromTo('.gsap-eyebrow', { opacity: 0, y: -6 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }, '-=0.2')
          .fromTo('.gsap-title', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, '-=0.2')
          .fromTo('.gsap-subtitle', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.25')
          .fromTo('.gsap-progress-bar', { opacity: 0, scaleX: 0 }, { opacity: 1, scaleX: 1, transformOrigin: 'left center', duration: 0.5, ease: 'power2.out' }, '-=0.2');
      }
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const totalQuestions = useMemo(() => {
    return QUESTION_BANK_TOPICS.reduce((acc, topic) => {
      return acc + topic.tiers.reduce((tierAcc, tier) => tierAcc + tier.questions.length, 0);
    }, 0);
  }, []);

  const doneCount = checkedQuestions.size;
  const progressPercentage = totalQuestions === 0 ? 0 : Math.round((doneCount / totalQuestions) * 100);

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto text-[#F3F6F7]">
      {/* Top Header & Breadcrumb */}
      <div ref={headerRef} className="flex flex-col gap-4">
        <div className="gsap-breadcrumb flex items-center gap-2 text-xs font-mono text-[#68747D]">
          <Link
            href="/bytelogic/learn"
            className="flex items-center gap-1 hover:text-[#019AA2] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Learn</span>
          </Link>
          <span>/</span>
          <span className="text-[#A8B3BA]">Question Bank</span>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="gsap-eyebrow font-mono text-xs text-[#019AA2] font-semibold tracking-wider uppercase">
            01 // QUESTION BANK
          </span>
          <h1 className="gsap-title font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F3F6F7]">
            ML Hands-On Problem Set
          </h1>
          <p className="gsap-subtitle text-sm sm:text-base text-[#A8B3BA] max-w-3xl leading-relaxed">
            20 comprehensive machine learning topics across 4 disciplines. Work through 5 progressive difficulty
            tiers per topic with real-world Kaggle, Hugging Face, and benchmark datasets.
          </p>
        </div>

        {/* Global Progress Bar */}
        <div className="gsap-progress-bar flex flex-col gap-2 mt-2 p-4 bg-[#0A0F14] border border-[#1C2830] rounded-lg bl-tick-box">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[#A8B3BA] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#019AA2]" />
              <span>Overall Curriculum Completion</span>
            </span>
            <span className="text-[#019AA2] font-semibold">
              {doneCount} / {totalQuestions} completed ({progressPercentage}%)
            </span>
          </div>
          <div className="w-full h-2 bg-[#131C24] rounded-full overflow-hidden border border-[#1C2830]">
            <div
              className="h-full bg-gradient-to-r from-[#019AA2] to-[#20BEFF] transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Layout: Left rail sidebar (sticky) + Right topic panel */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-72 lg:w-80 flex-shrink-0">
          <QuestionBankSidebar
            activeTopic={activeTopic}
            onSelectTopic={setActiveTopic}
            checkedQuestions={checkedQuestions}
          />
        </div>
        <div className="flex-1 min-w-0 w-full">
          <TopicPanel
            topic={activeTopic}
            checkedQuestions={checkedQuestions}
            onToggleQuestion={handleToggleQuestion}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionBankPage;
