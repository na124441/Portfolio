'use client';

import React, { useState } from 'react';
import { Lightbulb, Check, ChevronDown, ChevronRight, BookOpen, AlertCircle, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { DsaProblem } from '@/types/dsa-question';

interface ProblemStatementPanelProps {
  problem: DsaProblem;
  hintsRevealed: number;
  onRevealHint: () => void;
}

export function ProblemStatementPanel({
  problem,
  hintsRevealed,
  onRevealHint,
}: ProblemStatementPanelProps) {
  const [showBruteForce, setShowBruteForce] = useState(false);
  const [showOptimal, setShowOptimal] = useState(false);

  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6 lg:p-7 overflow-y-auto max-h-full bl-scrollbar">
      {/* 1. Problem Statement */}
      <div className="flex flex-col gap-3">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#019AA2]">
          Problem Statement
        </span>
        <div className="text-sm sm:text-[15px] font-sans text-[#F3F6F7] leading-relaxed whitespace-pre-line">
          {problem.statement}
        </div>
      </div>

      {/* 2. Examples */}
      <div className="flex flex-col gap-3.5 pt-2">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#68747D]">
          Examples
        </span>
        <div className="flex flex-col gap-3">
          {problem.examples.map((ex, index) => (
            <div
              key={index}
              className="p-3.5 sm:p-4 rounded-[6px] bg-[#0A0F14] border border-[#1C2830] font-mono text-xs flex flex-col gap-2"
            >
              <div className="text-[11px] font-semibold text-[#A8B3BA] uppercase tracking-wider">
                Example {index + 1}
              </div>
              <div className="flex flex-col gap-1 pl-2 border-l-2 border-[#1C2830]">
                <div>
                  <span className="text-[#68747D]">Input: </span>
                  <span className="text-[#019AA2] font-semibold">{ex.input}</span>
                </div>
                <div>
                  <span className="text-[#68747D]">Output: </span>
                  <span className="text-emerald-400 font-semibold">{ex.output}</span>
                </div>
                {ex.explanation && (
                  <div className="mt-1 text-[11px] font-sans text-[#A8B3BA] italic">
                    <span className="font-mono text-[#68747D] not-italic">Explanation: </span>
                    {ex.explanation}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Constraints */}
      <div className="flex flex-col gap-2 pt-2">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#68747D]">
          Constraints
        </span>
        <ul className="list-disc list-inside space-y-1 text-xs font-mono text-[#A8B3BA] pl-1">
          {problem.constraints.map((c, idx) => (
            <li key={idx} className="leading-relaxed">
              <span className="text-[#F3F6F7] bg-[#0E151B] px-1.5 py-0.5 rounded border border-[#1C2830]">
                {c}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* 4. Progressive Hint System */}
      <div className="flex flex-col gap-3 pt-3 border-t border-[#1C2830]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-[#019AA2]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F3F6F7]">
              Progressive Hints ({hintsRevealed}/3 Unlocked)
            </span>
          </div>
          {hintsRevealed < 3 && (
            <button
              type="button"
              onClick={onRevealHint}
              className="text-xs font-mono px-2.5 py-1 rounded bg-[#019AA2]/10 border border-[#019AA2]/30 text-[#019AA2] hover:bg-[#019AA2]/20 transition-colors cursor-pointer"
            >
              Reveal Hint {hintsRevealed + 1}
            </button>
          )}
        </div>

        <div className="flex flex-col gap-2.5">
          {problem.hints.map((hint) => {
            const isUnlocked = hintsRevealed >= hint.level;
            return (
              <div
                key={hint.level}
                className={cn(
                  'rounded-[6px] border transition-all text-xs overflow-hidden',
                  isUnlocked
                    ? 'bg-[#0E151B] border-[#019AA2]/30'
                    : 'bg-[#0A0F14]/60 border-[#1C2830] opacity-50'
                )}
              >
                <div className="px-3.5 py-2.5 flex items-center justify-between bg-[#070B0E]/60 border-b border-[#1C2830]/50">
                  <div className="flex items-center gap-2 font-mono">
                    <span className={cn('text-[11px] font-semibold', isUnlocked ? 'text-[#019AA2]' : 'text-[#68747D]')}>
                      Hint {hint.level}: {hint.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#68747D]">
                    {isUnlocked ? 'Unlocked' : 'Locked'}
                  </span>
                </div>
                <div className="p-3.5 font-sans leading-relaxed text-[#A8B3BA]">
                  {isUnlocked ? (
                    hint.content
                  ) : (
                    <span className="italic text-[#68747D]">
                      Locked. Attempt the problem first, then reveal when needed.
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. Solution Reveal Section */}
      <div className="flex flex-col gap-3 pt-3 border-t border-[#1C2830]">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#A8B3BA]" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F3F6F7]">
            Solution Analysis
          </span>
        </div>

        {/* Brute Force Accordion */}
        <div className="rounded-[6px] bg-[#0A0F14] border border-[#1C2830] overflow-hidden">
          <button
            type="button"
            onClick={() => setShowBruteForce((prev) => !prev)}
            className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-[#0E151B] transition-colors cursor-pointer"
          >
            <span className="text-xs font-mono font-semibold text-[#A8B3BA]">
              1. Brute Force Approach
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-[#68747D]">
                {problem.solution.bruteForce.timeComplexity}
              </span>
              {showBruteForce ? (
                <ChevronDown className="w-4 h-4 text-[#68747D]" />
              ) : (
                <ChevronRight className="w-4 h-4 text-[#68747D]" />
              )}
            </div>
          </button>
          {showBruteForce && (
            <div className="p-4 pt-0 border-t border-[#1C2830] text-xs font-sans text-[#A8B3BA] leading-relaxed flex flex-col gap-2.5 mt-2">
              <p>{problem.solution.bruteForce.explanation}</p>
              <div className="flex gap-4 font-mono text-[11px] text-[#68747D] bg-[#05070A] p-2 rounded border border-[#1C2830]">
                <span>Time: <span className="text-[#F3F6F7]">{problem.solution.bruteForce.timeComplexity}</span></span>
                <span>Space: <span className="text-[#F3F6F7]">{problem.solution.bruteForce.spaceComplexity}</span></span>
              </div>
            </div>
          )}
        </div>

        {/* Optimal Approach Accordion */}
        <div className="rounded-[6px] bg-[#0A0F14] border border-[#019AA2]/40 overflow-hidden">
          <button
            type="button"
            onClick={() => setShowOptimal((prev) => !prev)}
            className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-[#0E151B] transition-colors cursor-pointer"
          >
            <span className="text-xs font-mono font-semibold text-[#019AA2]">
              2. Optimal Approach &amp; Complexity
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-[#019AA2] font-semibold">
                {problem.solution.optimal.timeComplexity}
              </span>
              {showOptimal ? (
                <ChevronDown className="w-4 h-4 text-[#019AA2]" />
              ) : (
                <ChevronRight className="w-4 h-4 text-[#019AA2]" />
              )}
            </div>
          </button>
          {showOptimal && (
            <div className="p-4 pt-0 border-t border-[#1C2830] text-xs font-sans text-[#A8B3BA] leading-relaxed flex flex-col gap-3 mt-2">
              <div>
                <span className="font-mono text-[11px] text-[#019AA2] font-semibold block mb-1">
                  Key Observation:
                </span>
                <p>{problem.solution.optimal.keyObservation}</p>
              </div>

              {problem.solution.optimal.steps && (
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[11px] text-[#F3F6F7] font-semibold block">
                    Algorithmic Steps:
                  </span>
                  {problem.solution.optimal.steps.map((st, i) => (
                    <div key={i} className="pl-3 border-l-2 border-[#019AA2]/40 flex flex-col gap-0.5">
                      <span className="font-mono text-[11px] text-[#F3F6F7]">{st.title}</span>
                      <p className="text-[#A8B3BA]">{st.content}</p>
                    </div>
                  ))}
                </div>
              )}

              {problem.solution.optimal.correctness && (
                <div>
                  <span className="font-mono text-[11px] text-[#F3F6F7] font-semibold block mb-0.5">
                    Correctness Invariant:
                  </span>
                  <p className="italic text-[#A8B3BA]">{problem.solution.optimal.correctness}</p>
                </div>
              )}

              <div className="flex gap-4 font-mono text-[11px] text-[#68747D] bg-[#05070A] p-2.5 rounded border border-[#1C2830]">
                <span>Time Complexity: <span className="text-emerald-400 font-semibold">{problem.solution.optimal.timeComplexity}</span></span>
                <span>Space Complexity: <span className="text-emerald-400 font-semibold">{problem.solution.optimal.spaceComplexity}</span></span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 6. Follow-up Variation */}
      {problem.followUp && (
        <div className="p-4 rounded-[6px] bg-[#0E151B] border border-[#1C2830] flex flex-col gap-2">
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#C4703F] font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Follow-up Variation</span>
          </div>
          <p className="text-xs font-sans text-[#A8B3BA] leading-relaxed">
            {problem.followUp}
          </p>
        </div>
      )}
    </div>
  );
}

export default ProblemStatementPanel;
