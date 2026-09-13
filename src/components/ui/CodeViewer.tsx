'use client';

import React, { useState } from 'react';
import { Check, Copy, Terminal, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CodeTab {
  language: string;
  filename?: string;
  code: string;
}

export interface CodeViewerProps {
  title?: string;
  tabs: CodeTab[];
  className?: string;
}

export const CodeViewer: React.FC<CodeViewerProps> = ({
  title = 'Algorithm Implementation',
  tabs,
  className,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentTab = tabs[activeTab] || tabs[0];
  const lines = (currentTab?.code || '').trim().split('\n');

  const handleCopy = async () => {
    if (!currentTab) return;
    try {
      await navigator.clipboard.writeText(currentTab.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div
      className={cn(
        'my-6 border border-white/10 bg-[#010a0b] corner-brackets overflow-hidden font-mono',
        className
      )}
    >
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-white/[0.02] border-b border-white/10 text-xs">
        <div className="flex items-center gap-3">
          <Terminal className="w-3.5 h-3.5 text-[#dfb15b]" />
          <span className="font-bold text-[#feffff] uppercase tracking-wider text-[11px]">
            {title}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Tab buttons */}
          {tabs.length > 1 && (
            <div className="flex items-center gap-1 bg-white/[0.03] p-0.5 border border-white/10">
              {tabs.map((tab, idx) => (
                <button
                  key={tab.filename || tab.language}
                  onClick={() => setActiveTab(idx)}
                  className={cn(
                    'px-2.5 py-1 text-[11px] uppercase tracking-wider transition-colors',
                    activeTab === idx
                      ? 'bg-[#d4af37]/20 text-[#dfb15b] border border-[#d4af37]/40 font-semibold'
                      : 'text-white/50 hover:text-white border border-transparent'
                  )}
                >
                  {tab.filename || tab.language}
                </button>
              ))}
            </div>
          )}

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.04] border border-white/15 hover:border-[#d4af37]/50 text-white/70 hover:text-white transition-colors text-[11px]"
            aria-label="Copy code to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-[#dfb15b]" />
                <span className="text-[#dfb15b]">Copied</span>
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

      {/* Code body with line numbers */}
      <div className="p-4 overflow-x-auto text-xs leading-relaxed max-h-[420px] overflow-y-auto">
        <pre className="text-white/90">
          <code>
            {lines.map((line, index) => {
              const lineNum = String(index + 1).padStart(2, '0');
              const isComment = line.trim().startsWith('#') || line.trim().startsWith('//');
              const isKeyword =
                line.includes('class ') ||
                line.includes('def ') ||
                line.includes('template ') ||
                line.includes('struct ') ||
                line.includes('auto ') ||
                line.includes('return ') ||
                line.includes('void ');
              const isInclude = line.includes('#include') || line.includes('import ');

              let colorClass = 'text-white/80';
              if (isComment) colorClass = 'text-white/35 italic';
              else if (isKeyword) colorClass = 'text-[#dfb15b] font-medium';
              else if (isInclude) colorClass = 'text-amber-200/70';

              return (
                <div key={index} className="table-row hover:bg-white/[0.02]">
                  <span className="table-cell pr-4 text-right select-none text-white/25 tabular-nums text-[11px]">
                    {lineNum}
                  </span>
                  <span className={cn('table-cell whitespace-pre', colorClass)}>
                    {line}
                  </span>
                </div>
              );
            })}
          </code>
        </pre>
      </div>
    </div>
  );
};
