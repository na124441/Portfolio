'use client';

import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import {
  Code2,
  ChevronDown,
  RotateCcw,
  Copy,
  Check,
  Maximize2,
  Minimize2,
  Sparkles,
  Settings,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { DsaProblem } from '@/types/dsa-question';
import { formatSolutionStarter } from '@/lib/bytelogic/leetcode-utils';

// Dynamically import Monaco Editor to avoid SSR hydration mismatches
const Editor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center justify-center h-full bg-[#1e1e1e] text-[#71717a] font-mono text-xs gap-2">
      <div className="w-5 h-5 border-2 border-[#38bdf8] border-t-transparent rounded-full animate-spin" />
      <span>Loading Code Editor...</span>
    </div>
  ),
});

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
  const [fontSize, setFontSize] = useState(13);
  const [showSettings, setShowSettings] = useState(false);

  const langDropdownRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<any>(null);

  // Default starter code for current language
  const snippets = problem.code || [];
  const currentSnippet =
    snippets.find((c) => c.language === selectedLanguage) || snippets[0];

  const currentCode =
    savedCode?.[selectedLanguage] ??
    (selectedLanguage === 'cpp'
      ? formatSolutionStarter(currentSnippet?.starterCode || '', problem.title, problem.slug)
      : currentSnippet?.starterCode ?? '');

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
    editor.onDidChangeCursorPosition((e: any) => {
      setCursorPos({ ln: e.position.lineNumber, col: e.position.column });
    });
  };

  const handleFormat = () => {
    if (editorRef.current) {
      editorRef.current.getAction('editor.action.formatDocument')?.run();
    }
  };

  const handleReset = () => {
    if (confirm(`Reset ${selectedLanguage === 'cpp' ? 'C++' : 'Python 3'} editor to initial starter template?`)) {
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
      {/* Editor Header Bar matching LeetCode/ByteLogic design */}
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

          {/* Auto Format button */}
          <button
            type="button"
            onClick={handleFormat}
            className="hidden sm:inline-flex items-center gap-1 text-[11px] text-[#a1a1aa] hover:text-white bg-[#1f1f1f] hover:bg-[#333] px-2 py-0.5 rounded border border-[#333] transition-colors cursor-pointer"
            title="Format document"
          >
            <Sparkles className="w-3 h-3 text-[#facc15]" />
            <span>Format</span>
          </button>
        </div>

        {/* Right Controls: Settings, Reset, Copy, Fullscreen */}
        <div className="flex items-center gap-1 sm:gap-2 text-[#a1a1aa]">
          {/* Settings Toggle */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowSettings((prev) => !prev)}
              className={cn(
                'p-1.5 rounded hover:bg-[#333] transition-colors cursor-pointer',
                showSettings ? 'text-white bg-[#333]' : 'hover:text-white'
              )}
              title="Editor Settings"
            >
              <Settings className="w-3.5 h-3.5" />
            </button>

            {showSettings && (
              <div className="absolute right-0 top-full mt-1 w-44 rounded-md bg-[#252525] border border-[#383838] shadow-xl p-3 z-30 font-sans text-xs">
                <span className="font-semibold text-white block mb-2">Editor Font Size</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setFontSize((s) => Math.max(11, s - 1))}
                    className="px-2 py-1 bg-[#1e1e1e] hover:bg-[#333] rounded text-white font-mono"
                  >
                    -
                  </button>
                  <span className="text-white font-mono flex-1 text-center">{fontSize}px</span>
                  <button
                    type="button"
                    onClick={() => setFontSize((s) => Math.min(20, s + 1))}
                    className="px-2 py-1 bg-[#1e1e1e] hover:bg-[#333] rounded text-white font-mono"
                  >
                    +
                  </button>
                </div>
              </div>
            )}
          </div>

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

      {/* Editor Body: Monaco Editor */}
      <div className="relative flex-1 w-full overflow-hidden bg-[#1e1e1e]">
        <Editor
          height="100%"
          language={selectedLanguage === 'cpp' ? 'cpp' : 'python'}
          value={currentCode}
          theme="vs-dark"
          onMount={handleEditorDidMount}
          onChange={(value) => onCodeChange(selectedLanguage, value || '')}
          options={{
            fontSize,
            fontFamily: "var(--font-geist-mono), 'JetBrains Mono', 'Fira Code', Menlo, Monaco, Consolas, monospace",
            lineNumbers: 'on',
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 4,
            bracketPairColorization: { enabled: true },
            wordWrap: 'off',
            cursorBlinking: 'smooth',
            renderLineHighlight: 'all',
            padding: { top: 12, bottom: 12 },
          }}
        />
      </div>

      {/* Status Footer: Saved | Ln X, Col Y */}
      <div className="flex items-center justify-between px-3 py-1 bg-[#1a1a1a] border-t border-[#2e2e2e] text-[11px] font-mono text-[#71717a] select-none shrink-0">
        <span className="text-[#a1a1aa] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2cbb5d]" />
          <span>Saved</span>
        </span>
        <span>
          Ln {cursorPos.ln}, Col {cursorPos.col}
        </span>
      </div>
    </div>
  );
}

export default CodeEditorPanel;
