'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Copy, Check, RotateCcw, Code2, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { DsaProblem } from '@/types/dsa-question';

interface CodeEditorPanelProps {
  problem: DsaProblem;
  selectedLanguage: 'cpp' | 'python';
  onLanguageChange: (lang: 'cpp' | 'python') => void;
  savedCode?: Record<string, string>;
  onCodeChange: (lang: 'cpp' | 'python', code: string) => void;
}

export function CodeEditorPanel({
  problem,
  selectedLanguage,
  onLanguageChange,
  savedCode,
  onCodeChange,
}: CodeEditorPanelProps) {
  const [copied, setCopied] = useState(false);
  const [viewReferenceSolution, setViewReferenceSolution] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Default starter code for current language
  const currentSnippet =
    problem.code.find((c) => c.language === selectedLanguage) || problem.code[0];

  const currentCode = viewReferenceSolution
    ? currentSnippet?.source || ''
    : savedCode?.[selectedLanguage] ?? currentSnippet?.starterCode ?? '';

  const lines = currentCode.split('\n');

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (viewReferenceSolution) return;
    onCodeChange(selectedLanguage, e.target.value);
  };

  // Support Tab key to insert 4 spaces
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (viewReferenceSolution) return;
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.currentTarget;
      const start = target.selectionStart;
      const end = target.selectionEnd;

      const newCode = currentCode.substring(0, start) + '    ' + currentCode.substring(end);
      onCodeChange(selectedLanguage, newCode);

      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 4;
      }, 0);
    }
  };

  const handleReset = () => {
    if (viewReferenceSolution) return;
    if (confirm('Reset editor to initial starter code?')) {
      onCodeChange(selectedLanguage, currentSnippet?.starterCode || '');
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#0A0F14] border border-[#1C2830] rounded-lg overflow-hidden bl-tick-box">
      {/* Editor Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-[#0E151B] border-b border-[#1C2830] text-xs font-mono">
        <div className="flex items-center gap-2 sm:gap-3">
          <Code2 className="w-4 h-4 text-[#019AA2]" />
          {/* Language Selector */}
          <div className="flex items-center bg-[#05070A] p-0.5 rounded border border-[#1C2830]">
            {(['cpp', 'python'] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => onLanguageChange(lang)}
                className={cn(
                  'px-2.5 py-1 text-[11px] uppercase tracking-wider rounded-[3px] transition-colors cursor-pointer',
                  selectedLanguage === lang
                    ? 'bg-[#019AA2] text-[#05070A] font-semibold'
                    : 'text-[#A8B3BA] hover:text-[#F3F6F7]'
                )}
              >
                {lang === 'cpp' ? 'C++' : 'Python'}
              </button>
            ))}
          </div>

          {/* Reference Solution Toggle */}
          <button
            type="button"
            onClick={() => setViewReferenceSolution((prev) => !prev)}
            className={cn(
              'flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono border transition-colors cursor-pointer',
              viewReferenceSolution
                ? 'bg-[#019AA2]/15 text-[#019AA2] border-[#019AA2]'
                : 'text-[#68747D] hover:text-[#A8B3BA] border-transparent hover:border-[#1C2830]'
            )}
            title="Toggle reference solution code"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {viewReferenceSolution ? 'Viewing Reference' : 'View Reference'}
            </span>
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {!viewReferenceSolution && (
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#070B0E] border border-[#1C2830] text-[#68747D] hover:text-[#F3F6F7] text-[11px] transition-colors cursor-pointer"
              title="Reset code to starter boilerplate"
            >
              <RotateCcw className="w-3 h-3" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          )}

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#070B0E] border border-[#1C2830] text-[#68747D] hover:text-[#019AA2] text-[11px] transition-colors cursor-pointer"
            title="Copy code"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-[#019AA2]" />
                <span className="text-[#019AA2]">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Editor Body */}
      <div className="relative flex-1 flex overflow-hidden min-h-[320px] sm:min-h-[420px] max-h-[580px] bg-[#05070A]">
        {/* Line Numbers Bar */}
        <div
          aria-hidden="true"
          className="w-10 sm:w-12 py-3 bg-[#070B0E] border-r border-[#1C2830] text-right pr-2 text-[#68747D] font-mono text-xs select-none leading-relaxed flex flex-col shrink-0"
        >
          {lines.map((_, idx) => (
            <span key={idx} className="tabular-nums text-[11px]">
              {idx + 1}
            </span>
          ))}
        </div>

        {/* Textarea Workspace */}
        <textarea
          ref={textareaRef}
          value={currentCode}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
          readOnly={viewReferenceSolution}
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          className={cn(
            'flex-1 p-3 font-mono text-xs sm:text-[13px] leading-relaxed text-[#F3F6F7] bg-transparent resize-none focus:outline-none overflow-auto bl-scrollbar whitespace-pre tab-[4]',
            viewReferenceSolution && 'opacity-90'
          )}
          placeholder="// Type your implementation here..."
        />
      </div>
    </div>
  );
}

export default CodeEditorPanel;
