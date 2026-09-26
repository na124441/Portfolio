'use client';

import React, { useState } from 'react';
import {
  Tag,
  Building2,
  Lightbulb,
  ThumbsUp,
  ThumbsDown,
  Star,
  Share2,
  CheckCircle2,
  Copy,
  Check,
  ChevronDown,
  ChevronRight,
  Code2,
  BookOpen,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { DsaProblem, DsaStatus } from '@/types/dsa-question';
import { getDifficultyMeta, getProblemCompanies } from '@/lib/bytelogic/leetcode-utils';
import { SubmissionHistory } from './SubmissionHistory';

interface ProblemStatementPanelProps {
  problem: DsaProblem;
  status: DsaStatus;
  hintsRevealed: number;
  onRevealHint: () => void;
  activeTab: 'description' | 'editorial' | 'solutions' | 'submissions';
  onTabChange: (tab: 'description' | 'editorial' | 'solutions' | 'submissions') => void;
  submissionRefreshTrigger?: number;
  onLoadCode?: (code: string) => void;
}

export function ProblemStatementPanel({
  problem,
  status,
  hintsRevealed,
  onRevealHint,
  activeTab,
  onTabChange,
  submissionRefreshTrigger,
  onLoadCode,
}: ProblemStatementPanelProps) {
  // Pill expand states
  const [showTopics, setShowTopics] = useState(false);
  const [showCompanies, setShowCompanies] = useState(false);
  const [showHints, setShowHints] = useState(false);

  // Likes / Star state
  const [likes, setLikes] = useState(() => 42000 + (problem.order * 137) % 35000);
  const [hasLiked, setHasLiked] = useState(false);
  const [dislikes, setDislikes] = useState(() => 1200 + (problem.order * 23) % 2100);
  const [hasDisliked, setHasDisliked] = useState(false);
  const [isStarred, setIsStarred] = useState(false);
  const [copiedSolution, setCopiedSolution] = useState(false);

  const diff = getDifficultyMeta(problem.difficulty);
  const companies = getProblemCompanies(problem);

  const handleLike = () => {
    if (hasLiked) {
      setLikes((l) => l - 1);
      setHasLiked(false);
    } else {
      setLikes((l) => l + 1);
      setHasLiked(true);
      if (hasDisliked) {
        setDislikes((d) => d - 1);
        setHasDisliked(false);
      }
    }
  };

  const handleDislike = () => {
    if (hasDisliked) {
      setDislikes((d) => d - 1);
      setHasDisliked(false);
    } else {
      setDislikes((d) => d + 1);
      setHasDisliked(true);
      if (hasLiked) {
        setLikes((l) => l - 1);
        setHasLiked(false);
      }
    }
  };

  const formatLikes = (num: number) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return String(num);
  };

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] text-[#eff2f6] font-sans overflow-hidden">
      {/* Tab Strip: Description | Editorial | Solutions | Submissions */}
      <div className="flex items-center gap-1 px-4 py-2 border-b border-[#2e2e2e] bg-[#262626] text-xs font-medium text-[#a1a1aa] shrink-0">
        <button
          type="button"
          onClick={() => onTabChange('description')}
          className={cn(
            'flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors cursor-pointer',
            activeTab === 'description'
              ? 'bg-[#333333] text-white font-semibold'
              : 'hover:text-white hover:bg-[#2d2d2d]'
          )}
        >
          <BookOpen className="w-3.5 h-3.5 text-[#38bdf8]" />
          <span>Description</span>
        </button>

        <button
          type="button"
          onClick={() => onTabChange('editorial')}
          className={cn(
            'flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors cursor-pointer',
            activeTab === 'editorial'
              ? 'bg-[#333333] text-white font-semibold'
              : 'hover:text-white hover:bg-[#2d2d2d]'
          )}
        >
          <span>Editorial</span>
        </button>

        <button
          type="button"
          onClick={() => onTabChange('solutions')}
          className={cn(
            'flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors cursor-pointer',
            activeTab === 'solutions'
              ? 'bg-[#333333] text-white font-semibold'
              : 'hover:text-white hover:bg-[#2d2d2d]'
          )}
        >
          <Code2 className="w-3.5 h-3.5 text-[#2cbb5d]" />
          <span>Solutions</span>
        </button>

        <button
          type="button"
          onClick={() => onTabChange('submissions')}
          className={cn(
            'flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors cursor-pointer',
            activeTab === 'submissions'
              ? 'bg-[#333333] text-white font-semibold'
              : 'hover:text-white hover:bg-[#2d2d2d]'
          )}
        >
          <span>Submissions</span>
        </button>
      </div>

      {/* Main Tab Content Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 bl-scrollbar flex flex-col justify-between">
        {/* TAB 1: DESCRIPTION */}
        {activeTab === 'description' && (
          <div className="flex flex-col gap-5">
            {/* Header: Title + Solved Badge */}
            <div className="flex items-center justify-between gap-3">
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {problem.order}. {problem.title}
              </h1>

              {status === 'solved' && (
                <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#2cbb5d]/15 text-[#2cbb5d] border border-[#2cbb5d]/30 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Solved</span>
                </span>
              )}
            </div>

            {/* Tags Pills Row: [Easy/Med/Hard] [Topics ⌄] [Companies 🔒] [Hint 💡] */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {/* Difficulty pill */}
              <span
                className={cn(
                  'px-2.5 py-1 rounded-full text-xs font-medium',
                  diff.pillClass
                )}
              >
                {diff.label}
              </span>

              {/* Topics dropdown toggle */}
              <button
                type="button"
                onClick={() => setShowTopics((prev) => !prev)}
                className={cn(
                  'flex items-center gap-1 px-2.5 py-1 rounded-full transition-colors cursor-pointer',
                  showTopics
                    ? 'bg-[#333] text-white font-medium'
                    : 'bg-[#282828] text-[#a1a1aa] hover:text-white hover:bg-[#323232]'
                )}
              >
                <Tag className="w-3 h-3 text-[#a1a1aa]" />
                <span>Topics</span>
                <ChevronDown className={cn('w-3 h-3 transition-transform', showTopics && 'rotate-180')} />
              </button>

              {/* Companies pill */}
              <button
                type="button"
                onClick={() => setShowCompanies((prev) => !prev)}
                className={cn(
                  'flex items-center gap-1 px-2.5 py-1 rounded-full transition-colors cursor-pointer',
                  showCompanies
                    ? 'bg-[#333] text-white font-medium'
                    : 'bg-[#282828] text-[#a1a1aa] hover:text-white hover:bg-[#323232]'
                )}
              >
                <Building2 className="w-3 h-3 text-[#ffa116]" />
                <span>Companies</span>
                <ChevronDown className={cn('w-3 h-3 transition-transform', showCompanies && 'rotate-180')} />
              </button>

              {/* Hint pill */}
              <button
                type="button"
                onClick={() => setShowHints((prev) => !prev)}
                className={cn(
                  'flex items-center gap-1 px-2.5 py-1 rounded-full transition-colors cursor-pointer',
                  showHints
                    ? 'bg-[#333] text-white font-medium'
                    : 'bg-[#282828] text-[#a1a1aa] hover:text-white hover:bg-[#323232]'
                )}
              >
                <Lightbulb className="w-3 h-3 text-[#fde047]" />
                <span>Hint</span>
                <span className="text-[10px] text-[#71717a]">
                  ({hintsRevealed}/{problem.hints?.length || 0})
                </span>
              </button>
            </div>

            {/* Expanded Topics Chips */}
            {showTopics && (
              <div className="flex flex-wrap gap-1.5 p-3 rounded-lg bg-[#262626] border border-[#333]">
                <span className="px-2 py-0.5 rounded bg-[#333] text-white text-xs font-medium">
                  {problem.topic}
                </span>
                {(problem.tags || []).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-[#1f1f1f] text-[#a1a1aa] text-xs hover:text-white transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Expanded Companies Chips */}
            {showCompanies && (
              <div className="flex flex-wrap gap-1.5 p-3 rounded-lg bg-[#262626] border border-[#333]">
                <span className="text-xs text-[#a1a1aa] w-full mb-1">
                  Frequently encountered at:
                </span>
                {companies.map((c) => (
                  <span
                    key={c}
                    className="px-2.5 py-0.5 rounded-full bg-[#1e293b] text-[#38bdf8] text-xs font-medium border border-[#38bdf8]/20"
                  >
                    {c}
                  </span>
                ))}
              </div>
            )}

            {/* Expanded Progressive Hints */}
            {showHints && (
              <div className="flex flex-col gap-2 p-3.5 rounded-lg bg-[#262626] border border-[#333]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white">
                    Progressive Hints ({hintsRevealed}/{(problem.hints?.length || 0)} Unlocked)
                  </span>
                  {hintsRevealed < (problem.hints?.length || 0) && (
                    <button
                      type="button"
                      onClick={onRevealHint}
                      className="text-xs px-2.5 py-1 rounded bg-[#3b82f6] text-white hover:bg-[#2563eb] transition-colors cursor-pointer font-medium"
                    >
                      Unlock Hint {hintsRevealed + 1}
                    </button>
                  )}
                </div>

                <div className="flex flex-col gap-2 mt-1">
                  {(problem.hints || []).map((hint) => {
                    const isUnlocked = hintsRevealed >= hint.level;
                    return (
                      <div
                        key={hint.level}
                        className={cn(
                          'p-2.5 rounded text-xs leading-relaxed border',
                          isUnlocked
                            ? 'bg-[#1e1e1e] border-[#38bdf8]/40 text-[#d4d4d8]'
                            : 'bg-[#181818] border-[#2e2e2e] text-[#71717a]'
                        )}
                      >
                        <span className="font-semibold text-white block mb-0.5">
                          Hint {hint.level}: {hint.title}
                        </span>
                        {isUnlocked ? (
                          hint.content
                        ) : (
                          <span className="italic text-[#71717a]">
                            Locked. Click &quot;Unlock Hint&quot; to reveal key algorithmic insights.
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Problem Statement Text */}
            <div className="text-sm leading-relaxed text-[#d4d4d8] whitespace-pre-line space-y-3 font-normal">
              {problem.statement}
            </div>

            {/* Examples (LeetCode exact rounded box) */}
            <div className="flex flex-col gap-4 pt-1">
              {(problem.examples || []).map((ex, index) => (
                <div key={index} className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-white">
                    Example {index + 1}:
                  </span>
                  <div className="p-3.5 sm:p-4 rounded-lg bg-[#282828] border border-[#333333] font-mono text-xs leading-relaxed text-[#eff2f6] flex flex-col gap-1">
                    <div>
                      <strong className="text-white font-semibold">Input: </strong>
                      <span className="text-[#eff2f6]">{ex.input}</span>
                    </div>
                    <div>
                      <strong className="text-white font-semibold">Output: </strong>
                      <span className="text-[#eff2f6]">{ex.output}</span>
                    </div>
                    {ex.explanation && (
                      <div className="mt-1 font-sans text-xs text-[#a1a1aa]">
                        <strong className="text-white font-semibold font-mono">Explanation: </strong>
                        {ex.explanation}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Constraints */}
            <div className="flex flex-col gap-2 pt-2">
              <span className="text-xs font-semibold text-white">
                Constraints:
              </span>
              <ul className="list-disc list-inside space-y-1 text-xs text-[#d4d4d8] pl-1 font-mono">
                {(problem.constraints || []).map((c, idx) => (
                  <li key={idx} className="leading-relaxed">
                    <code className="text-[#eff2f6] bg-[#282828] px-1.5 py-0.5 rounded border border-[#383838]">
                      {c}
                    </code>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow-up Note if exists */}
            {problem.followUp && (
              <div className="p-3 rounded-lg bg-[#282828] border border-[#383838] text-xs text-[#a1a1aa] leading-relaxed">
                <strong className="text-[#ffa116] block mb-0.5">Follow up:</strong>
                {problem.followUp}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: EDITORIAL */}
        {activeTab === 'editorial' && (
          <div className="flex flex-col gap-5 text-xs sm:text-sm text-[#d4d4d8]">
            <div className="border-b border-[#2e2e2e] pb-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#38bdf8] block">
                Official Editorial
              </span>
              <h2 className="text-lg font-bold text-white mt-1">
                {problem.title} — Solution Deep Dive
              </h2>
            </div>

            {/* Optimal Approach */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#2cbb5d]" />
                Approach: Optimal Invariant
              </h3>
              <div className="p-3.5 rounded-lg bg-[#262626] border border-[#333] flex flex-col gap-2.5">
                <p className="text-xs text-[#eff2f6] font-medium">
                  {problem.solution?.optimal?.keyObservation || 'Key algorithmic invariant and core observation.'}
                </p>
                <p className="text-xs text-[#a1a1aa] leading-relaxed">
                  {problem.solution?.optimal?.algorithm || 'Algorithmic breakdown for optimal solution.'}
                </p>

                {problem.solution?.optimal?.steps && (
                  <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-[#333]">
                    <span className="text-xs font-semibold text-white">Algorithmic Sequence:</span>
                    {(problem.solution.optimal.steps || []).map((step, idx) => (
                      <div key={idx} className="pl-3 border-l-2 border-[#38bdf8] text-xs">
                        <strong className="text-white block">{step.title}</strong>
                        <span className="text-[#a1a1aa]">{step.content}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4 mt-2 pt-2 border-t border-[#333] text-xs font-mono text-[#a1a1aa]">
                  <span>Time Complexity: <strong className="text-[#2cbb5d]">{problem.solution?.optimal?.timeComplexity || 'O(N)'}</strong></span>
                  <span>Space Complexity: <strong className="text-[#2cbb5d]">{problem.solution?.optimal?.spaceComplexity || 'O(1)'}</strong></span>
                </div>
              </div>
            </div>

            {/* Brute Force Approach */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#ffa116]" />
                Alternative: Brute Force Baseline
              </h3>
              <div className="p-3.5 rounded-lg bg-[#262626] border border-[#333] flex flex-col gap-2">
                <p className="text-xs text-[#a1a1aa] leading-relaxed">
                  {problem.solution?.bruteForce?.explanation || 'Direct naive simulation.'}
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-[#a1a1aa]">
                  <span>Time: <strong className="text-[#ffa116]">{problem.solution?.bruteForce?.timeComplexity || 'O(N^2)'}</strong></span>
                  <span>Space: <strong className="text-[#ffa116]">{problem.solution?.bruteForce?.spaceComplexity || 'O(1)'}</strong></span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SOLUTIONS */}
        {activeTab === 'solutions' && (
          <div className="flex flex-col gap-5 text-xs sm:text-sm">
            <div className="flex items-center justify-between border-b border-[#2e2e2e] pb-3">
              <div>
                <h2 className="text-base font-bold text-white">
                  Reference Implementations
                </h2>
                <span className="text-xs text-[#a1a1aa]">
                  Production-grade verified solutions in C++ and Python
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  const cppCode = (problem.code || []).find((c) => c.language === 'cpp')?.source || '';
                  navigator.clipboard.writeText(cppCode);
                  setCopiedSolution(true);
                  setTimeout(() => setCopiedSolution(false), 2000);
                }}
                className="flex items-center gap-1 px-3 py-1.5 rounded bg-[#282828] hover:bg-[#333] border border-[#383838] text-xs font-mono text-[#a1a1aa] hover:text-white transition-colors cursor-pointer"
              >
                {copiedSolution ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#2cbb5d]" />
                    <span className="text-[#2cbb5d]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy C++</span>
                  </>
                )}
              </button>
            </div>

            {(problem.code || []).map((snippet) => (
              <div key={snippet.language} className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-white uppercase tracking-wider">
                  {snippet.language === 'cpp' ? 'C++ Solution' : 'Python 3 Solution'}
                </span>
                <pre className="p-4 rounded-lg bg-[#141414] border border-[#2e2e2e] font-mono text-xs text-[#eff2f6] overflow-x-auto whitespace-pre leading-relaxed bl-scrollbar">
                  {snippet.source}
                </pre>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: SUBMISSIONS */}
        {activeTab === 'submissions' && (
          <div className="flex flex-col gap-4">
            <SubmissionHistory
              problemSlug={problem.slug}
              refreshTrigger={submissionRefreshTrigger || 0}
              onLoadCode={onLoadCode}
            />
          </div>
        )}

        {/* Bottom Bar: 👍 Likes, 👎 Dislikes, ⭐ Star, ↗ Share, 🟢 Online Count matching Image 2 */}
        <div className="flex items-center justify-between pt-5 mt-6 border-t border-[#2e2e2e] text-xs text-[#a1a1aa] select-none">
          <div className="flex items-center gap-3">
            {/* Like button */}
            <button
              type="button"
              onClick={handleLike}
              className={cn(
                'flex items-center gap-1.5 px-2.5 py-1 rounded hover:bg-[#282828] transition-colors cursor-pointer',
                hasLiked && 'text-[#38bdf8] font-semibold'
              )}
            >
              <ThumbsUp className="w-3.5 h-3.5" />
              <span>{formatLikes(likes)}</span>
            </button>

            {/* Dislike button */}
            <button
              type="button"
              onClick={handleDislike}
              className={cn(
                'flex items-center gap-1.5 px-2.5 py-1 rounded hover:bg-[#282828] transition-colors cursor-pointer',
                hasDisliked && 'text-[#ef4444] font-semibold'
              )}
            >
              <ThumbsDown className="w-3.5 h-3.5" />
              <span>{dislikes}</span>
            </button>

            {/* Star bookmark */}
            <button
              type="button"
              onClick={() => setIsStarred((prev) => !prev)}
              className={cn(
                'p-1.5 rounded hover:bg-[#282828] transition-colors cursor-pointer',
                isStarred ? 'text-[#facc15]' : 'hover:text-white'
              )}
              title="Bookmark question"
            >
              <Star className={cn('w-3.5 h-3.5', isStarred && 'fill-current')} />
            </button>

            {/* Share link */}
            <button
              type="button"
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Problem link copied to clipboard!');
                }
              }}
              className="p-1.5 rounded hover:bg-[#282828] hover:text-white transition-colors cursor-pointer"
              title="Share problem"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Online users status */}
          <div className="flex items-center gap-1.5 text-xs text-[#a1a1aa]">
            <span className="w-2 h-2 rounded-full bg-[#2cbb5d] animate-pulse" />
            <span>1,180 Online</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemStatementPanel;
