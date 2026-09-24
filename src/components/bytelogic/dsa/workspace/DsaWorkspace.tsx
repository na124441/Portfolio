'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ChevronLeft, ChevronRight, BookOpen, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { DsaProblem } from '@/types/dsa-question';
import { useDsaProgress } from '@/lib/bytelogic/dsaProgress';
import { ProblemStatementPanel } from './ProblemStatementPanel';
import { CodeEditorPanel } from './CodeEditorPanel';
import { TestRunnerPanel } from './TestRunnerPanel';

interface DsaWorkspaceProps {
  problem: DsaProblem;
  prevProblem: DsaProblem | null;
  nextProblem: DsaProblem | null;
}

const DIFFICULTY_BADGES: Record<string, string> = {
  'Warm-up': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Easy: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Medium: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Hard: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
};

export function DsaWorkspace({
  problem,
  prevProblem,
  nextProblem,
}: DsaWorkspaceProps) {
  const router = useRouter();
  const {
    getProblemState,
    revealNextHint,
    saveUserCode,
    setProblemStatus,
  } = useDsaProgress();

  const userState = getProblemState(problem.slug);

  const [selectedLanguage, setSelectedLanguage] = useState<'cpp' | 'python'>(
    userState.selectedLanguage || 'cpp'
  );

  // Mobile View Tab Switcher: 'problem' vs 'code'
  const [mobileTab, setMobileTab] = useState<'problem' | 'code'>('problem');

  // Sync selected language when userState loads
  useEffect(() => {
    if (userState.selectedLanguage) {
      setSelectedLanguage(userState.selectedLanguage);
    }
  }, [userState.selectedLanguage]);

  // Keyboard navigation for Prev/Next problem (Alt + Left/Right)
  useEffect(() => {
    const handleKeyNav = (e: KeyboardEvent) => {
      if (e.altKey && e.key === 'ArrowLeft' && prevProblem) {
        e.preventDefault();
        router.push(`/bytelogic/questions/dsa/${prevProblem.slug}`);
      }
      if (e.altKey && e.key === 'ArrowRight' && nextProblem) {
        e.preventDefault();
        router.push(`/bytelogic/questions/dsa/${nextProblem.slug}`);
      }
    };
    window.addEventListener('keydown', handleKeyNav);
    return () => window.removeEventListener('keydown', handleKeyNav);
  }, [prevProblem, nextProblem, router]);

  const diffBadge = DIFFICULTY_BADGES[problem.difficulty] || DIFFICULTY_BADGES['Easy'];
  const padOrder = String(problem.order).padStart(2, '0');

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-4rem)] bg-[#05070A] text-[#F3F6F7]">
      {/* Workspace Top Bar */}
      <div className="border-b border-[#1C2830] bg-[#0A0F14] sticky top-14 sm:top-16 z-30 px-3 sm:px-6 py-2.5 flex items-center justify-between gap-3">
        {/* Left: Back Link & Problem Info */}
        <div className="flex items-center gap-2 sm:gap-3.5 min-w-0">
          <Link
            href="/bytelogic/questions/dsa"
            className="flex items-center gap-1 font-mono text-xs text-[#A8B3BA] hover:text-[#019AA2] py-1 px-2 rounded hover:bg-[#131C24] transition-colors shrink-0"
            title="Return to Question Catalog"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">All Questions</span>
          </Link>

          <span className="text-[#1C2830] hidden sm:inline">|</span>

          <div className="flex items-center gap-2 truncate">
            <span className="font-mono text-xs text-[#019AA2] font-semibold shrink-0">
              {padOrder} /
            </span>
            <h1 className="font-sans text-xs sm:text-sm font-semibold text-[#F3F6F7] truncate">
              {problem.title}
            </h1>
            <span
              className={cn(
                'hidden md:inline-flex items-center rounded px-2 py-0.5 text-[10px] font-mono font-medium border uppercase tracking-wider shrink-0',
                diffBadge
              )}
            >
              {problem.difficulty}
            </span>
          </div>
        </div>

        {/* Right: Sequential Navigation Controls */}
        <div className="flex items-center gap-1.5 shrink-0 font-mono text-xs">
          {prevProblem ? (
            <Link
              href={`/bytelogic/questions/dsa/${prevProblem.slug}`}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#0E151B] border border-[#1C2830] text-[#A8B3BA] hover:text-[#019AA2] hover:border-[#019AA2]/40 transition-colors"
              title={`Previous Problem: ${prevProblem.title} (Alt + Left)`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Prev</span>
            </Link>
          ) : (
            <span className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#0E151B]/40 border border-[#1C2830]/40 text-[#68747D] cursor-not-allowed">
              <ChevronLeft className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Prev</span>
            </span>
          )}

          {nextProblem ? (
            <Link
              href={`/bytelogic/questions/dsa/${nextProblem.slug}`}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#0E151B] border border-[#1C2830] text-[#A8B3BA] hover:text-[#019AA2] hover:border-[#019AA2]/40 transition-colors"
              title={`Next Problem: ${nextProblem.title} (Alt + Right)`}
            >
              <span className="hidden md:inline">Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <span className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#0E151B]/40 border border-[#1C2830]/40 text-[#68747D] cursor-not-allowed">
              <span className="hidden md:inline">Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
          )}
        </div>
      </div>

      {/* Mobile Tab Switcher (< 1024px) */}
      <div className="lg:hidden flex border-b border-[#1C2830] bg-[#0E151B] text-xs font-mono">
        <button
          type="button"
          onClick={() => setMobileTab('problem')}
          className={cn(
            'flex-1 py-2.5 px-3 flex items-center justify-center gap-2 transition-colors border-b-2',
            mobileTab === 'problem'
              ? 'border-[#019AA2] text-[#019AA2] font-semibold bg-[#111A22]'
              : 'border-transparent text-[#68747D] hover:text-[#A8B3BA]'
          )}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Problem &amp; Hints</span>
        </button>
        <button
          type="button"
          onClick={() => setMobileTab('code')}
          className={cn(
            'flex-1 py-2.5 px-3 flex items-center justify-center gap-2 transition-colors border-b-2',
            mobileTab === 'code'
              ? 'border-[#019AA2] text-[#019AA2] font-semibold bg-[#111A22]'
              : 'border-transparent text-[#68747D] hover:text-[#A8B3BA]'
          )}
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>Code &amp; Tests</span>
        </button>
      </div>

      {/* Main Split-Pane Workspace */}
      <div className="flex-1 flex flex-col lg:flex-row w-full overflow-hidden">
        {/* Left Column: Problem Statement & Progressive Hints */}
        <div
          className={cn(
            'w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-[#1C2830] flex flex-col overflow-y-auto max-h-[calc(100vh-7.5rem)] bl-scrollbar',
            mobileTab !== 'problem' && 'hidden lg:flex'
          )}
        >
          <ProblemStatementPanel
            problem={problem}
            hintsRevealed={userState.hintsRevealed || 0}
            onRevealHint={() => revealNextHint(problem.slug)}
          />
        </div>

        {/* Right Column: Code Editor & Test Cases */}
        <div
          className={cn(
            'w-full lg:w-1/2 flex flex-col p-3 sm:p-5 lg:p-6 gap-4 overflow-y-auto max-h-[calc(100vh-7.5rem)] bl-scrollbar bg-[#070B0E]/60',
            mobileTab !== 'code' && 'hidden lg:flex'
          )}
        >
          {/* Interactive Code Editor */}
          <div className="flex-1 min-h-[360px] sm:min-h-[460px]">
            <CodeEditorPanel
              problem={problem}
              selectedLanguage={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
              savedCode={userState.savedCode}
              onCodeChange={(lang, code) => saveUserCode(problem.slug, lang, code)}
            />
          </div>

          {/* Test Runner & Evaluation Suite */}
          <div className="shrink-0">
            <TestRunnerPanel
              problem={problem}
              status={userState.status}
              onSetStatus={(st) => setProblemStatus(problem.slug, st)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DsaWorkspace;
