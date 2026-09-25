'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Code2,
  ChevronDown,
  RotateCcw,
  Copy,
  Check,
  Maximize2,
  Minimize2,
  Settings,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { DsaProblem } from '@/types/dsa-question';
import { formatSolutionStarter } from '@/lib/bytelogic/leetcode-utils';

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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ ln: 1, col: 1 });
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Default starter code for current language
  const currentSnippet =
    problem.code.find((c) => c.language === selectedLanguage) || problem.code[0];

  const currentCode =
    savedCode?.[selectedLanguage] ??
    (selectedLanguage === 'cpp'
      ? formatSolutionStarter(currentSnippet?.starterCode || '', problem.title, problem.slug)
      : currentSnippet?.starterCode ?? '');

  const lines = currentCode.split('\n');

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onCodeChange(selectedLanguage, e.target.value);
    updateCursorPos(e.target);
  };

  const updateCursorPos = (target: HTMLTextAreaElement) => {
    const textBefore = target.value.substring(0, target.selectionStart);
    const lineNum = textBefore.split('\n').length;
    const colNum = textBefore.length - textBefore.lastIndexOf('\n');
    setCursorPos({ ln: lineNum, col: colNum });
  };

  // Support Tab key to insert 4 spaces
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.currentTarget;
      const start = target.selectionStart;
      const end = target.selectionEnd;

      const newCode = currentCode.substring(0, start) + '    ' + currentCode.substring(end);
      onCodeChange(selectedLanguage, newCode);

      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 4;
        updateCursorPos(target);
      }, 0);
    }
  };

  const handleReset = () => {
    if (confirm('Reset editor to initial starter template?')) {
      const resetCode =
        selectedLanguage === 'cpp'
          ? formatSolutionStarter(currentSnippet?.starterCode || '', problem.title, problem.slug)
          : currentSnippet?.starterCode || '';
      onCodeChange(selectedLanguage, resetCode);
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
    <div
      className={cn(
        'flex flex-col bg-[#1e1e1e] text-[#eff2f6] font-sans overflow-hidden border border-[#2e2e2e]',
        isFullscreen
          ? 'fixed inset-0 z-50 rounded-none'
          : 'h-full rounded-lg'
      )}
    >
      {/* Editor Header Bar matching Image 2 */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-[#262626] border-b border-[#2e2e2e] text-xs font-mono select-none shrink-0">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* </> Code tab */}
          <div className="flex items-center gap-1.5 px-2 py-1 rounded text-white font-medium text-xs bg-[#333]">
            <Code2 className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>Code</span>
          </div>

          <span className="text-[#3a3a3a]">|</span>

          {/* Language Selector Dropdown */}
          <div ref={langDropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setIsLangDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#1f1f1f] hover:bg-[#333] border border-[#383838] text-xs text-white transition-colors cursor-pointer"
            >
              <span>{selectedLanguage === 'cpp' ? 'C++' : 'Python 3'}</span>
              <ChevronDown className="w-3 h-3 text-[#a1a1aa]" />
            </button>

            {isLangDropdownOpen && (
              <div className="absolute left-0 top-full mt-1 w-32 rounded-md bg-[#252525] border border-[#383838] shadow-xl py-1 z-30 font-sans">
                <button
                  type="button"
                  onClick={() => {
                    onLanguageChange('cpp');
                    setIsLangDropdownOpen(false);
                  }}
                  className={cn(
                    'w-full text-left px-3 py-1.5 text-xs transition-colors cursor-pointer',
                    selectedLanguage === 'cpp' ? 'text-[#38bdf8] font-semibold bg-[#2e2e2e]' : 'text-[#d4d4d8] hover:bg-[#333]'
                  )}
                >
                  C++
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onLanguageChange('python');
                    setIsLangDropdownOpen(false);
                  }}
                  className={cn(
                    'w-full text-left px-3 py-1.5 text-xs transition-colors cursor-pointer',
                    selectedLanguage === 'python' ? 'text-[#38bdf8] font-semibold bg-[#2e2e2e]' : 'text-[#d4d4d8] hover:bg-[#333]'
                  )}
                >
                  Python 3
                </button>
              </div>
            )}
          </div>

          {/* Auto Format pill */}
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-[#a1a1aa] bg-[#1f1f1f] px-2 py-0.5 rounded border border-[#333]">
            <Sparkles className="w-3 h-3 text-[#facc15]" />
            <span>Auto</span>
          </span>
        </div>

        {/* Right Controls: Settings, Reset, Copy, Fullscreen */}
        <div className="flex items-center gap-1 sm:gap-2 text-[#a1a1aa]">
          <button
            type="button"
            onClick={handleReset}
            className="p-1.5 rounded hover:bg-[#333] hover:text-white transition-colors cursor-pointer"
            title="Reset code template"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="p-1.5 rounded hover:bg-[#333] hover:text-white transition-colors cursor-pointer"
            title="Copy code"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-[#2cbb5d]" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsFullscreen((prev) => !prev)}
            className="p-1.5 rounded hover:bg-[#333] hover:text-white transition-colors cursor-pointer"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? (
              <Minimize2 className="w-3.5 h-3.5" />
            ) : (
              <Maximize2 className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Editor Body */}
      <div className="relative flex-1 flex overflow-hidden bg-[#1e1e1e]">
        {/* Line Numbers Bar */}
        <div
          aria-hidden="true"
          className="w-10 sm:w-11 py-3 bg-[#1e1e1e] border-r border-[#2e2e2e] text-right pr-2.5 text-[#52525b] font-mono text-xs select-none leading-relaxed flex flex-col shrink-0"
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
          onClick={(e) => updateCursorPos(e.currentTarget)}
          onKeyUp={(e) => updateCursorPos(e.currentTarget)}
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          className="flex-1 p-3 font-mono text-xs sm:text-[13px] leading-relaxed text-[#eff2f6] bg-transparent resize-none focus:outline-none overflow-auto bl-scrollbar whitespace-pre tab-[4]"
          placeholder="// Write your solution here..."
        />
      </div>

      {/* Status Footer matching Image 2: Saved | Ln X, Col Y */}
      <div className="flex items-center justify-between px-3 py-1 bg-[#1a1a1a] border-t border-[#2e2e2e] text-[11px] font-mono text-[#71717a] select-none shrink-0">
        <span className="text-[#a1a1aa]">Saved</span>
        <span>
          Ln {cursorPos.ln}, Col {cursorPos.col}
        </span>
      </div>
    </div>
  );
}

export default CodeEditorPanel;
