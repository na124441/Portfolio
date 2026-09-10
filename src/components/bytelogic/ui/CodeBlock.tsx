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
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'python',
  title = 'Implementation',
  sectionCode = '01',
  githubUrl,
  className,
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
        'my-6 rounded-[6px] bg-[#0A0F14] border border-[#1C2830] overflow-hidden bl-tick-box',
        className
      )}
    >
      {/* Code Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0E151B] border-b border-[#1C2830] text-xs font-mono">
        <div className="flex items-center gap-2.5">
          <span className="text-[#019AA2] font-semibold">{sectionCode} /</span>
          <span className="text-[#F3F6F7] tracking-wider uppercase">{title}</span>
          <span className="px-1.5 py-0.5 rounded-[3px] bg-[#131C24] text-[#A8B3BA] text-[10px] tracking-widest uppercase border border-[#1C2830]">
            {language}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] text-[#A8B3BA] hover:text-[#019AA2] transition-colors py-1 px-2 hover:bg-[#131C24] rounded-[4px]"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-[11px] text-[#A8B3BA] hover:text-[#F3F6F7] transition-colors py-1 px-2.5 bg-[#131C24] border border-[#1C2830] hover:border-[#019AA2]/40 rounded-[4px] cursor-pointer"
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

      {/* Code Body with Tabular Line Numbers */}
      <div className="p-4 overflow-x-auto bl-scrollbar">
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

              return (
                <div key={index} className="table-row hover:bg-[#0E151B]/60 transition-colors">
                  <span className="table-cell pr-4 text-right select-none text-[#68747D] font-mono text-[11px] tabular-nums">
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
