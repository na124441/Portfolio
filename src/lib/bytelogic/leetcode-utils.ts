/**
 * LeetCode-style display utilities for ByteLogic DSA
 */

import type { DsaDifficulty, DsaProblem } from '@/types/dsa-question';

/**
 * Deterministic acceptance rate based on problem slug/id
 */
export function getAcceptanceRate(problem: { slug: string; id?: string; order?: number }): string {
  let hash = 0;
  const str = problem.slug || problem.id || String(problem.order);
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  const min = 34.2;
  const max = 79.8;
  const rate = min + (Math.abs(hash) % Math.round((max - min) * 10)) / 10;
  return rate.toFixed(1) + '%';
}

/**
 * Difficulty label and color classes matching LeetCode
 */
export function getDifficultyMeta(difficulty: DsaDifficulty | string): {
  label: 'Easy' | 'Med.' | 'Hard';
  textClass: string;
  bgClass: string;
  pillClass: string;
} {
  switch (difficulty) {
    case 'Hard':
      return {
        label: 'Hard',
        textClass: 'text-[#FF375F]',
        bgClass: 'bg-[#FF375F]/10',
        pillClass: 'text-[#FF375F] bg-[#FF375F]/15 border-[#FF375F]/30',
      };
    case 'Medium':
      return {
        label: 'Med.',
        textClass: 'text-[#FFA116]',
        bgClass: 'bg-[#FFA116]/10',
        pillClass: 'text-[#FFA116] bg-[#FFA116]/15 border-[#FFA116]/30',
      };
    case 'Warm-up':
    case 'Easy':
    default:
      return {
        label: 'Easy',
        textClass: 'text-[#00B8A3]',
        bgClass: 'bg-[#00B8A3]/10',
        pillClass: 'text-[#00B8A3] bg-[#00B8A3]/15 border-[#00B8A3]/30',
      };
  }
}

/**
 * Deterministic top companies tagged for a problem
 */
const COMPANY_POOL = [
  'Google',
  'Amazon',
  'Meta',
  'Microsoft',
  'Apple',
  'Bloomberg',
  'Uber',
  'Netflix',
  'ByteDance',
  'LinkedIn',
  'Adobe',
  'Salesforce',
];

export function getProblemCompanies(problem: { slug: string }): string[] {
  let hash = 0;
  for (let i = 0; i < problem.slug.length; i++) {
    hash = (hash << 5) - hash + problem.slug.charCodeAt(i);
    hash |= 0;
  }
  const abs = Math.abs(hash);
  const count = 2 + (abs % 4); // 2 to 5 companies
  const startIndex = abs % COMPANY_POOL.length;
  const companies: string[] = [];
  for (let i = 0; i < count; i++) {
    companies.push(COMPANY_POOL[(startIndex + i) % COMPANY_POOL.length]);
  }
  return companies;
}

/**
 * Parse input string into key-value parameter pairs
 * e.g. "nums = [2,7,11,15], target = 9" -> [{ param: 'nums', value: '[2,7,11,15]' }, { param: 'target', value: '9' }]
 * e.g. single scalar "5" -> [{ param: 'n', value: '5' }]
 */
export interface ParsedParam {
  param: string;
  value: string;
}

export function parseTestcaseParams(rawInput: string): ParsedParam[] {
  if (!rawInput || !rawInput.trim()) {
    return [{ param: 'input', value: '' }];
  }

  const trimmed = rawInput.trim();

  // Pattern like: nums = [2,7,11,15], target = 9
  // or newline separated: nums = [2,7,11,15]\ntarget = 9
  if (trimmed.includes('=')) {
    const parts = trimmed.split(/(?:,\s*|\n)(?=[a-zA-Z_]\w*\s*=)/);
    const result: ParsedParam[] = [];

    for (const part of parts) {
      const eqIdx = part.indexOf('=');
      if (eqIdx !== -1) {
        const paramName = part.substring(0, eqIdx).trim();
        const paramValue = part.substring(eqIdx + 1).trim();
        result.push({ param: paramName, value: paramValue });
      }
    }

    if (result.length > 0) return result;
  }

  // If newline separated lines
  const lines = trimmed.split('\n').map((l) => l.trim()).filter(Boolean);
  if (lines.length > 1) {
    return lines.map((line, idx) => ({
      param: `param_${idx + 1}`,
      value: line,
    }));
  }

  // Single scalar/array value
  return [{ param: 'input', value: trimmed }];
}

/**
 * Format C++ class starter code if not already wrapped in class Solution
 */
export function formatSolutionStarter(
  starterCode: string,
  problemTitle: string,
  slug: string
): string {
  if (starterCode.includes('class Solution')) {
    return starterCode;
  }

  // Clean identifier for function name
  const fnName = slug
    .replace(/^[^a-zA-Z]+/, '')
    .split('-')
    .map((word, idx) => (idx === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()))
    .join('')
    .replace(/[^a-zA-Z0-9_]/g, '') || 'solve';

  return `class Solution {\npublic:\n    void ${fnName}() {\n        // Write your solution here\n    }\n};`;
}
