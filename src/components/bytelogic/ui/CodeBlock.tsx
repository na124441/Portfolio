'use client';

import React, { useState } from 'react';
import { Check, Copy, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  sectionCode?: string;
  githubUrl?: string;
  className?: string;
  showLineNumbers?: boolean;
  showHeader?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'python',
  title = 'Implementation',
  sectionCode = '01',
  githubUrl,
  className,
  showLineNumbers = true,
  showHeader = true,
}) => {
  const [copied, setCopied] = useState(false);

  const lines = code.trim().split('\n');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div
      className={cn(
        'my-5 sm:my-6 rounded-[6px] bg-[#0A0F14] border border-[#1C2830] overflow-hidden bl-tick-box min-w-0 w-full max-w-full',
        className
      )}
    >
      {/* Code Header */}
      {showHeader && (
        <div className="flex flex-wrap items-center justify-between gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 bg-[#0E151B] border-b border-[#1C2830] text-xs font-mono">
          <div className="flex items-center gap-2 sm:gap-2.5">
            {sectionCode && <span className="text-[#019AA2] font-semibold">{sectionCode} /</span>}
            {title && (
              <span className="text-[#F3F6F7] tracking-wider uppercase text-[11px] sm:text-xs">{title}</span>
            )}
            <span className="px-1.5 py-0.5 rounded-[3px] bg-[#131C24] text-[#A8B3BA] text-[10px] tracking-widest uppercase border border-[#1C2830]">
              {language}
            </span>
          </div>

          <div className="flex items-center gap-2 ml-auto sm:ml-0">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[11px] text-[#A8B3BA] hover:text-[#019AA2] transition-colors py-1.5 px-2.5 hover:bg-[#131C24] rounded-[4px] min-h-[32px] sm:min-h-0"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-[11px] text-[#A8B3BA] hover:text-[#F3F6F7] transition-colors py-1.5 px-2.5 bg-[#131C24] border border-[#1C2830] hover:border-[#019AA2]/40 rounded-[4px] cursor-pointer min-h-[32px] sm:min-h-0"
              aria-label="Copy code to clipboard"
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
      )}

      {/* Code Body with Tabular Line Numbers or Flat Pre */}
      <div className="relative p-3 sm:p-4 w-full max-w-full overflow-x-auto bl-scrollbar [touch-action:pan-x]">
        {!showHeader && (
          <button
            onClick={handleCopy}
            className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1 text-[10px] font-mono text-[#68747D] hover:text-[#F3F6F7] transition-colors py-1 px-2 bg-[#131C24]/80 border border-[#1C2830] hover:border-[#019AA2]/40 rounded-[3px] cursor-pointer"
            aria-label="Copy code to clipboard"
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
        )}
        <pre className="font-mono text-xs sm:text-[13px] leading-relaxed text-[#F3F6F7]">
          <code>
            {lines.map((line, index) => {
              // Lightweight syntax highlighting tokenization
              const lineNum = String(index + 1).padStart(2, '0');
              const isComment = line.trim().startsWith('#') || line.trim().startsWith('//');
              const isDef = line.includes('def ') || line.includes('class ') || line.includes('return ');
              const isImport = line.includes('import ') || line.includes('from ');

              let lineClass = 'text-[#F3F6F7]';
              if (isComment) lineClass = 'text-[#68747D] italic';
              else if (isDef) lineClass = 'text-[#019AA2] font-semibold';
              else if (isImport) lineClass = 'text-[#A8B3BA]';

              if (!showLineNumbers) {
                return (
                  <div key={index} className="hover:bg-[#0E151B]/60 transition-colors py-0.5">
                    <span className={cn('whitespace-pre', lineClass)}>
                      {line || ' '}
                    </span>
                  </div>
                );
              }

              return (
                <div key={index} className="table-row hover:bg-[#0E151B]/60 transition-colors">
                  <span className="table-cell pr-3 sm:pr-4 text-right select-none text-[#68747D] font-mono text-[10px] sm:text-[11px] tabular-nums">
                    {lineNum}
                  </span>
                  <span className={cn('table-cell whitespace-pre', lineClass)}>
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
