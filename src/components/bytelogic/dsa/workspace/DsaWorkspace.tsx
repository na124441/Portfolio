'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ChevronLeft,
  ChevronRight,
  Shuffle,
  Play,
  Send,
  Timer,
  Settings,
  BookOpen,
  Code2,
  List,
  Sparkles,
  User,
  Pause,
  RotateCcw,
} from 'lucide-react';
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
  allSlugs?: string[];
}

export function DsaWorkspace({
  problem,
  prevProblem,
  nextProblem,
  allSlugs,
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

  // Left panel view mode: 'description' | 'editorial' | 'solutions' | 'submissions'
  const [leftTab, setLeftTab] = useState<'description' | 'editorial' | 'solutions' | 'submissions'>(
    'description'
  );

  // Mobile View Tab Switcher: 'problem' vs 'code'
  const [mobileTab, setMobileTab] = useState<'problem' | 'code'>('problem');

  // Submission refresh trigger
  const [submissionRefresh, setSubmissionRefresh] = useState(0);

  // Stopwatch / Timer state matching LeetCode
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isTimerVisible, setIsTimerVisible] = useState(false);

  // Synchronized execution trigger for top-bar Run / Submit
  const [externalTrigger, setExternalTrigger] = useState<{ mode: 'run' | 'submit'; timestamp: number } | null>(null);

  // Active code
  const snippets = problem.code || [];
  const currentSnippet =
    snippets.find((c) => c.language === selectedLanguage) || snippets[0];
  const activeCode =
    userState.savedCode?.[selectedLanguage] ?? currentSnippet?.starterCode ?? '';

  // Timer interval
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

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

  // Random problem handler
  const handleRandomProblem = () => {
    if (allSlugs && allSlugs.length > 0) {
      const rand = allSlugs[Math.floor(Math.random() * allSlugs.length)];
      if (rand && rand !== problem.slug) {
        router.push(`/bytelogic/questions/dsa/${rand}`);
        return;
      }
    }
    if (nextProblem) {
      router.push(`/bytelogic/questions/dsa/${nextProblem.slug}`);
    }
  };

  const handleExecuteTrigger = (mode: 'run' | 'submit') => {
    setExternalTrigger({ mode, timestamp: Date.now() });
    if (mobileTab === 'problem') {
      setMobileTab('code');
    }
  };

  return (
    <div className="flex flex-col w-full min-h-dvh bg-bg text-fg font-sans">
      {/* Top Navigation Bar Matching Image 2 */}
      <header className="h-12 border-b border-line bg-surface sticky top-0 z-40 px-3 sm:px-4 flex items-center justify-between select-none">
        {/* Left: ByteLogic / LeetCode Logo & Problem List Navigation */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/bytelogic/questions/dsa"
            className="flex items-center gap-1.5 text-fg font-bold text-sm hover:opacity-85 transition-opacity mr-1"
            title="ByteLogic Problems"
          >
            <span className="w-6 h-6 rounded bg-accent flex items-center justify-center text-accent-ink font-extrabold text-xs">
              BL
            </span>
          </Link>

          {/* Problem List dropdown button */}
          <Link
            href="/bytelogic/questions/dsa"
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-surface-2 hover:bg-surface text-xs text-fg font-medium transition-colors"
          >
            <List className="w-3.5 h-3.5 text-fg-soft" />
            <span className="hidden sm:inline">Problem List</span>
          </Link>

          {/* < Prev Button */}
          {prevProblem ? (
            <Link
              href={`/bytelogic/questions/dsa/${prevProblem.slug}`}
              className="p-1 rounded hover:bg-surface-2 text-fg-soft hover:text-fg transition-colors"
              title={`Previous: ${prevProblem.title}`}
            >
              <ChevronLeft className="w-4 h-4" />
            </Link>
          ) : (
            <span className="p-1 text-fg-muted cursor-not-allowed">
              <ChevronLeft className="w-4 h-4" />
            </span>
          )}

          {/* > Next Button */}
          {nextProblem ? (
            <Link
              href={`/bytelogic/questions/dsa/${nextProblem.slug}`}
              className="p-1 rounded hover:bg-surface-2 text-fg-soft hover:text-fg transition-colors"
              title={`Next: ${nextProblem.title}`}
            >
              <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <span className="p-1 text-fg-muted cursor-not-allowed">
              <ChevronRight className="w-4 h-4" />
            </span>
          )}

          {/* 🔀 Pick Random Problem */}
          <button
            type="button"
            onClick={handleRandomProblem}
            className="p-1 rounded hover:bg-surface-2 text-fg-soft hover:text-fg transition-colors cursor-pointer"
            title="Pick Random Problem"
          >
            <Shuffle className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Center: Run & Submit Buttons Matching Image 2 */}
        <div className="flex items-center gap-2">
          {/* Run Button */}
          <button
            type="button"
            onClick={() => handleExecuteTrigger('run')}
            className="flex items-center gap-1.5 px-3 py-1 rounded bg-surface-2 hover:bg-surface border border-line text-fg text-xs font-medium transition-colors cursor-pointer"
            title="Run solution (Ctrl+Enter)"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span className="hidden xs:inline">Run</span>
          </button>

          {/* Submit Button */}
          <button
            type="button"
            onClick={() => handleExecuteTrigger('submit')}
            className="flex items-center gap-1.5 px-3.5 py-1 rounded bg-accent hover:opacity-90 text-accent-ink text-xs font-semibold transition-opacity cursor-pointer"
            title="Submit solution (Ctrl+Shift+Enter)"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit</span>
          </button>
        </div>

        {/* Right: Stopwatch, Settings, Avatar, Premium Badge */}
        <div className="flex items-center gap-2 text-xs">
          {/* Timer / Stopwatch */}
          <div className="flex items-center gap-1 text-fg-soft">
            <button
              type="button"
              onClick={() => {
                if (!isTimerVisible) {
                  setIsTimerVisible(true);
                  setIsTimerRunning(true);
                } else {
                  setIsTimerRunning((r) => !r);
                }
              }}
              className="flex items-center gap-1 px-1.5 py-1 rounded hover:bg-surface-2 hover:text-fg transition-colors cursor-pointer"
              title={isTimerRunning ? 'Pause Timer' : 'Start Timer'}
            >
              <Timer className="w-3.5 h-3.5 text-accent" />
              <span>{isTimerVisible ? formatTimer(seconds) : '0'}</span>
            </button>

            {isTimerVisible && (
              <button
                type="button"
                onClick={() => {
                  setSeconds(0);
                  setIsTimerRunning(false);
                  setIsTimerVisible(false);
                }}
                className="p-1 rounded hover:bg-surface-2 text-fg-muted hover:text-fg"
                title="Reset Timer"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            )}
          </div>

          <span className="text-line hidden sm:inline">|</span>

          {/* Settings Icon */}
          <button
            type="button"
            className="p-1.5 rounded hover:bg-surface-2 text-fg-soft hover:text-fg transition-colors"
            title="Settings"
          >
            <Settings className="w-3.5 h-3.5" />
          </button>

          {/* User Avatar */}
          <div className="w-6 h-6 rounded-full bg-accent text-accent-ink flex items-center justify-center font-bold text-[10px] ring-1 ring-fg/20">
            U
          </div>

          {/* Premium / Pro Gold Badge matching Image 2 */}
          <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-accent-soft text-accent border border-accent-line">
            <Sparkles className="w-3 h-3" />
            <span>Pro</span>
          </span>
        </div>
      </header>

      {/* Mobile Tab Switcher (< 1024px) */}
      <div className="lg:hidden flex border-b border-line bg-surface text-xs font-medium">
        <button
          type="button"
          onClick={() => setMobileTab('problem')}
          className={cn(
            'flex-1 py-2 px-3 flex items-center justify-center gap-1.5 transition-colors border-b-2',
            mobileTab === 'problem'
              ? 'border-accent text-accent font-semibold bg-surface-2'
              : 'border-transparent text-fg-muted hover:text-fg-soft'
          )}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Description</span>
        </button>
        <button
          type="button"
          onClick={() => setMobileTab('code')}
          className={cn(
            'flex-1 py-2 px-3 flex items-center justify-center gap-1.5 transition-colors border-b-2',
            mobileTab === 'code'
              ? 'border-accent text-accent font-semibold bg-surface-2'
              : 'border-transparent text-fg-muted hover:text-fg-soft'
          )}
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>Code &amp; Tests</span>
        </button>
      </div>

      {/* Main Split-Screen Workspace (50% Left / 50% Right matching Image 2) */}
      <div className="flex-1 flex flex-col lg:flex-row w-full overflow-hidden p-2 sm:p-2.5 gap-2 bg-bg">
        {/* Left Column: Problem Panel */}
        <div
          className={cn(
            'w-full lg:w-1/2 flex flex-col rounded-lg overflow-hidden border border-line h-[calc(100dvh-4.25rem)]',
            mobileTab !== 'problem' && 'hidden lg:flex'
          )}
        >
          <ProblemStatementPanel
            problem={problem}
            status={userState.status}
            hintsRevealed={userState.hintsRevealed || 0}
            onRevealHint={() => revealNextHint(problem.slug)}
            activeTab={leftTab}
            onTabChange={setLeftTab}
            submissionRefreshTrigger={submissionRefresh}
            onLoadCode={(code) => saveUserCode(problem.slug, selectedLanguage, code)}
          />
        </div>

        {/* Right Column: Code Editor (Top) & Testcase Panel (Bottom) */}
        <div
          className={cn(
            'w-full lg:w-1/2 flex flex-col gap-2 h-[calc(100dvh-4.25rem)] overflow-hidden',
            mobileTab !== 'code' && 'hidden lg:flex'
          )}
        >
          {/* Top: Code Editor */}
          <div className="flex-[6] min-h-[300px] overflow-hidden">
            <CodeEditorPanel
              problem={problem}
              selectedLanguage={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
              savedCode={userState.savedCode}
              onCodeChange={(lang, code) => saveUserCode(problem.slug, lang, code)}
            />
          </div>

          {/* Bottom: Testcase / Test Result Panel */}
          <div className="flex-[4] min-h-[220px] overflow-hidden">
            <TestRunnerPanel
              problem={problem}
              status={userState.status}
              currentCode={activeCode}
              selectedLanguage={selectedLanguage}
              onSetStatus={(st, reason) => setProblemStatus(problem.slug, st, reason)}
              onSubmissionSuccess={() => setSubmissionRefresh((r) => r + 1)}
              onOpenSubmissions={() => {
                setLeftTab('submissions');
                setMobileTab('problem');
              }}
              isExecutingExternal={Boolean(externalTrigger)}
              externalTrigger={externalTrigger}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DsaWorkspace;
