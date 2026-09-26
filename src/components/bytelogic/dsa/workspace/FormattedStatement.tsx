'use client';

import React, { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { cn } from '@/lib/utils';

interface FormattedStatementProps {
  content: string;
  className?: string;
}

type InlineToken =
  | { type: 'math'; value: string }
  | { type: 'code'; value: string }
  | { type: 'bold'; value: string }
  | { type: 'text'; value: string };

function parseInlineTokens(text: string): InlineToken[] {
  const tokens: InlineToken[] = [];
  // Regex to capture:
  // 1. Inline math: $...$
  // 2. Inline code: `...`
  // 3. Bold: **...**
  const regex = /(\$([^\$\n]+)\$)|(`([^`\n]+)`)|(\*\*([^\*\n]+)\*\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: 'text', value: text.substring(lastIndex, match.index) });
    }

    if (match[2] !== undefined) {
      // Math: $...$
      tokens.push({ type: 'math', value: match[2] });
    } else if (match[4] !== undefined) {
      // Code: `...`
      tokens.push({ type: 'code', value: match[4] });
    } else if (match[6] !== undefined) {
      // Bold: **...**
      tokens.push({ type: 'bold', value: match[6] });
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    tokens.push({ type: 'text', value: text.substring(lastIndex) });
  }

  return tokens;
}

function RenderInline({ text }: { text: string }) {
  const tokens = useMemo(() => parseInlineTokens(text), [text]);

  return (
    <>
      {tokens.map((token, idx) => {
        if (token.type === 'math') {
          try {
            const html = katex.renderToString(token.value, {
              displayMode: false,
              throwOnError: false,
            });
            return (
              <span
                key={idx}
                className="inline-block px-0.5 text-[#f1f5f9] align-baseline"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch {
            return (
              <span key={idx} className="font-mono text-[#38bdf8] text-xs">
                {token.value}
              </span>
            );
          }
        }

        if (token.type === 'code') {
          return (
            <code
              key={idx}
              className="px-1.5 py-0.5 rounded bg-[#27272a] text-[#38bdf8] font-mono text-xs border border-[#3f3f46]/50"
            >
              {token.value}
            </code>
          );
        }

        if (token.type === 'bold') {
          return (
            <strong key={idx} className="font-semibold text-white">
              {token.value}
            </strong>
          );
        }

        return <React.Fragment key={idx}>{token.value}</React.Fragment>;
      })}
    </>
  );
}

type Block =
  | { type: 'heading'; level: number; text: string }
  | { type: 'codeblock'; lang: string; code: string }
  | { type: 'displaymath'; math: string }
  | { type: 'list'; items: string[] }
  | { type: 'orderedlist'; items: string[] }
  | { type: 'blockquote'; text: string }
  | { type: 'divider' }
  | { type: 'paragraph'; text: string };

function parseBlocks(markdown: string): Block[] {
  const lines = markdown.split(/\r?\n/);
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    // 1. Code Block: ```lang ... ```
    if (trimmed.startsWith('```')) {
      const lang = trimmed.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++; // skip closing ```
      blocks.push({ type: 'codeblock', lang, code: codeLines.join('\n') });
      continue;
    }

    // 2. Display Math: $$ ... $$
    if (trimmed.startsWith('$$')) {
      if (trimmed.endsWith('$$') && trimmed.length > 2) {
        blocks.push({ type: 'displaymath', math: trimmed.slice(2, -2).trim() });
        i++;
      } else {
        const mathLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].trim().endsWith('$$')) {
          mathLines.push(lines[i]);
          i++;
        }
        if (i < lines.length) i++; // skip closing $$
        blocks.push({ type: 'displaymath', math: mathLines.join('\n').trim() });
      }
      continue;
    }

    // 3. Thematic break / Divider: --- or ***
    if (/^(-{3,}|\*{3,})$/.test(trimmed)) {
      blocks.push({ type: 'divider' });
      i++;
      continue;
    }

    // 4. Headings: #, ##, ###, ####, etc.
    const headingMatch = trimmed.match(/^(#{1,6})\s*(.+)$/);
    if (headingMatch && headingMatch[2].trim()) {
      blocks.push({
        type: 'heading',
        level: headingMatch[1].length,
        text: headingMatch[2].trim(),
      });
      i++;
      continue;
    }

    // 5. Blockquotes: > quote
    if (/^>\s*(.+)$/.test(trimmed)) {
      const quoteLines: string[] = [];
      while (i < lines.length && /^>\s*(.*)$/.test(lines[i].trim())) {
        const qMatch = lines[i].trim().match(/^>\s*(.*)$/);
        if (qMatch) quoteLines.push(qMatch[1]);
        i++;
      }
      blocks.push({ type: 'blockquote', text: quoteLines.join(' ') });
      continue;
    }

    // 6. Unordered List Items: - or *
    if (/^[\-\*]\s+/.test(trimmed)) {
      const listItems: string[] = [];
      while (i < lines.length && /^[\-\*]\s+/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^[\-\*]\s+/, ''));
        i++;
      }
      blocks.push({ type: 'list', items: listItems });
      continue;
    }

    // 7. Ordered List Items: 1. , 2. , etc.
    if (/^\d+\.\s+/.test(trimmed)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i++;
      }
      blocks.push({ type: 'orderedlist', items: listItems });
      continue;
    }

    // 8. Normal Paragraph
    const paragraphLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].trim().startsWith('```') &&
      !lines[i].trim().startsWith('$$') &&
      !/^(-{3,}|\*{3,})$/.test(lines[i].trim()) &&
      !lines[i].trim().match(/^#{1,6}\s*/) &&
      !/^>\s*/.test(lines[i].trim()) &&
      !/^[\-\*]\s+/.test(lines[i].trim()) &&
      !/^\d+\.\s+/.test(lines[i].trim())
    ) {
      paragraphLines.push(lines[i].trim());
      i++;
    }

    if (paragraphLines.length > 0) {
      blocks.push({ type: 'paragraph', text: paragraphLines.join(' ') });
    }
  }

  return blocks;
}

export const FormattedStatement: React.FC<FormattedStatementProps> = ({
  content,
  className,
}) => {
  const blocks = useMemo(() => parseBlocks(content || ''), [content]);

  return (
    <div className={cn('flex flex-col gap-3 text-sm leading-relaxed text-[#d4d4d8]', className)}>
      {blocks.map((block, idx) => {
        if (block.type === 'heading') {
          // Clean bold section title without any ### characters!
          return (
            <div key={idx} className="pt-2.5 first:pt-0">
              <h3 className="text-sm font-bold text-white tracking-wide flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shrink-0" />
                <span>
                  <RenderInline text={block.text} />
                </span>
              </h3>
            </div>
          );
        }

        if (block.type === 'divider') {
          return <hr key={idx} className="border-t border-[#333333] my-1" />;
        }

        if (block.type === 'blockquote') {
          return (
            <div
              key={idx}
              className="pl-3 py-1 border-l-2 border-[#38bdf8]/60 text-xs sm:text-sm text-[#a1a1aa] italic bg-[#262626]/50 rounded-r"
            >
              <RenderInline text={block.text} />
            </div>
          );
        }

        if (block.type === 'list') {
          return (
            <ul key={idx} className="flex flex-col gap-1.5 pl-1 my-0.5">
              {block.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#d4d4d8]">
                  <span className="text-[#38bdf8] select-none text-base leading-4 shrink-0">•</span>
                  <span className="flex-1">
                    <RenderInline text={item} />
                  </span>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === 'orderedlist') {
          return (
            <ol key={idx} className="flex flex-col gap-1.5 pl-1 my-0.5 counter-reset-item">
              {block.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#d4d4d8]">
                  <span className="font-mono text-xs text-[#38bdf8] font-semibold shrink-0 pt-0.5">
                    {itemIdx + 1}.
                  </span>
                  <span className="flex-1">
                    <RenderInline text={item} />
                  </span>
                </li>
              ))}
            </ol>
          );
        }

        if (block.type === 'codeblock') {
          return (
            <div
              key={idx}
              className="p-3 rounded-lg bg-[#27272a] border border-[#3f3f46]/50 font-mono text-xs text-[#eff2f6] overflow-x-auto my-1"
            >
              <pre className="whitespace-pre">{block.code}</pre>
            </div>
          );
        }

        if (block.type === 'displaymath') {
          try {
            const html = katex.renderToString(block.math, {
              displayMode: true,
              throwOnError: false,
            });
            return (
              <div
                key={idx}
                className="py-2 overflow-x-auto text-center"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch {
            return (
              <div key={idx} className="p-2 text-center font-mono text-xs text-[#38bdf8]">
                {block.math}
              </div>
            );
          }
        }

        // Paragraph
        return (
          <p key={idx} className="text-xs sm:text-sm leading-relaxed text-[#d4d4d8]">
            <RenderInline text={block.text} />
          </p>
        );
      })}
    </div>
  );
};
