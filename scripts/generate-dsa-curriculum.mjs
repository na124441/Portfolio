import fs from 'fs';
import path from 'path';

const PROMPT_FILE = 'C:\\Users\\nayan\\.gemini\\antigravity\\brain\\d7261b6e-ded2-4e84-abe6-db57c4b1786a\\scratch\\user_prompt.txt';
const OUTPUT_DIR = path.resolve('src/data/bytelogic/dsa/phases');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const content = fs.readFileSync(PROMPT_FILE, 'utf8');
const rawLines = content.split(/\r?\n/).map((l) => l.trim());

// ─── STEP 1: PARSE INTO PHASES, TOPICS, AND QUESTIONS ───

const parsedQuestions = [];
let currentPhaseNum = 0;
let currentPhaseName = 'Phase 0 — Programming Fundamentals';
let currentTopicName = 'Syntax, loops, conditions, functions, and pseudocode';

for (let i = 0; i < rawLines.length; i++) {
  const line = rawLines[i];
  if (!line) continue;
  if (
    line.startsWith('<USER_REQUEST>') ||
    line.startsWith('</USER_REQUEST>') ||
    line.startsWith('<ADDITIONAL_METADATA>') ||
    line.startsWith('The current local')
  ) {
    continue;
  }

  // Phase matching
  const phaseMatch = line.match(/^Phase\s+(\d+)\s*[—–-]\s*(.*)$/i);
  if (phaseMatch) {
    currentPhaseNum = parseInt(phaseMatch[1], 10);
    currentPhaseName = `Phase ${currentPhaseNum} — ${phaseMatch[2].replace(/[?]+/g, '—').trim()}`;
    continue;
  }

  // Topic matching
  if (line.match(/^Topic\s+\d+\.\d+/i) || line.match(/^\d+\.\s+[A-Za-z]/)) {
    currentTopicName = line
      .replace(/^Topic\s+\d+\.\d+\s*[—–-]\s*/i, '')
      .replace(/^\d+\.\s+/, '')
      .replace(/[?]+/g, '—')
      .trim();
    continue;
  }

  // Skip subheaders / meta descriptions
  if (
    line.startsWith('Goal:') ||
    line.startsWith('Questions ') ||
    line.startsWith('Prerequisite foundation') ||
    line.startsWith('These exercises combine') ||
    line.startsWith('ok this is the list') ||
    line.match(/^[A-Z]\.\s+[A-Za-z]/) ||
    line.startsWith('Follow the sequence carefully') ||
    line.startsWith('This is one of the most important sections')
  ) {
    continue;
  }

  // If text is a valid question statement
  if (line.length > 15) {
    parsedQuestions.push({
      phaseName: currentPhaseName,
      phaseNum: currentPhaseNum,
      topicName: currentTopicName,
      rawText: line,
    });
  }
}

console.log(`Parsed total raw questions: ${parsedQuestions.length}`);

// ─── STEP 2: METADATA & CONTENT GENERATION HELPERS ───

function deriveTitle(rawText, topicName, idx) {
  let cleaned = rawText
    .replace(/^(Given\s+an?\s+|Given\s+|Find\s+the\s+|Find\s+all\s+|Find\s+|Calculate\s+the\s+|Calculate\s+|Determine\s+whether\s+an?\s+|Determine\s+whether\s+|Determine\s+|Implement\s+an?\s+|Implement\s+|Write\s+a\s+function\s+that\s+|Write\s+a\s+recursive\s+function\s+that\s+|Write\s+pseudocode\s+to\s+|Create\s+an?\s+|Count\s+the\s+|Count\s+|Reverse\s+the\s+|Reverse\s+|Print\s+all\s+|Print\s+a\s+|Print\s+|Read\s+two\s+|Read\s+|Design\s+an?\s+|Design\s+|Trace\s+an?\s+|Trace\s+|Extend\s+your\s+|Extend\s+|Merge\s+two\s+|Merge\s+|Delete\s+an?\s+|Delete\s+|Insert\s+an?\s+|Insert\s+)/i, '')
    .trim();

  cleaned = cleaned.replace(/[,;:\-\s]+$/, '').trim();
  const firstSentence = cleaned.split(/[.;?!]/)[0].trim();
  const words = firstSentence.split(/\s+/);
  let titleWords = words.slice(0, 6).join(' ');
  titleWords = titleWords.replace(/[,;:\-\s]+$/, '').trim();

  let title = titleWords
    .split(' ')
    .map((w, i) => {
      const lw = w.toLowerCase();
      if (i > 0 && ['and', 'or', 'of', 'in', 'to', 'for', 'with', 'by', 'a', 'an', 'the', 'from', 'on'].includes(lw)) {
        return lw;
      }
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(' ');

  title = title.replace(/\s+(and|or|of|in|to|for|with|by|a|an|the|from|on|their|its)$/i, '').trim();
  title = title.replace(/[,;:\-\s]+$/, '').trim();

  const firstWord = rawText.split(/\s+/)[0];
  if (['Implement', 'Design', 'Count', 'Reverse', 'Merge'].includes(firstWord) && !title.toLowerCase().startsWith(firstWord.toLowerCase())) {
    title = `${firstWord} ${title}`;
  }

  if (title.length < 5) {
    title = `${topicName} Problem ${idx + 1}`;
  }

  return title;
}

function deriveSlug(title, seenSlugs) {
  let base = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
  
  if (!base || base.length < 3) base = 'dsa-exercise';

  let slug = base;
  let counter = 2;
  while (seenSlugs.has(slug)) {
    slug = `${base}-${counter}`;
    counter++;
  }
  seenSlugs.add(slug);
  return slug;
}

function deriveDifficulty(phaseNum, posInTopic, totalInTopic, rawText) {
  const lower = rawText.toLowerCase();
  
  if (
    lower.includes('amortized') ||
    lower.includes('np-hard') ||
    lower.includes('multithread') ||
    lower.includes('work-stealing') ||
    lower.includes('suffix') ||
    lower.includes('segment tree') ||
    (lower.includes('dynamic programming') && (lower.includes('bitmask') || lower.includes('tree dp') || lower.includes('digit dp')))
  ) {
    return 'Hard';
  }

  if (phaseNum === 0) {
    return posInTopic < 8 ? 'Warm-up' : (posInTopic < 14 ? 'Easy' : 'Medium');
  }

  const ratio = posInTopic / Math.max(1, totalInTopic);
  if (phaseNum <= 2) {
    if (ratio < 0.25) return 'Warm-up';
    if (ratio < 0.65) return 'Easy';
    return 'Medium';
  }

  if (phaseNum <= 5) {
    if (ratio < 0.2) return 'Warm-up';
    if (ratio < 0.5) return 'Easy';
    if (ratio < 0.85) return 'Medium';
    return 'Hard';
  }

  if (ratio < 0.35) return 'Medium';
  return 'Hard';
}

function deriveTags(topicName, rawText) {
  const tags = new Set();
  const lower = (topicName + ' ' + rawText).toLowerCase();

  if (topicName.includes('Array') || topicName.includes('Vector')) tags.add('Array');
  if (topicName.includes('Linked List')) tags.add('Linked List');
  if (topicName.includes('Stack')) tags.add('Stack');
  if (topicName.includes('Queue')) tags.add('Queue');
  if (topicName.includes('Hash')) tags.add('Hash Table');
  if (topicName.includes('Sort')) tags.add('Sorting');
  if (topicName.includes('Search')) tags.add('Binary Search');
  if (topicName.includes('Tree')) tags.add('Binary Tree');
  if (topicName.includes('Heap')) tags.add('Heap / Priority Queue');
  if (topicName.includes('Graph') || topicName.includes('Grid')) tags.add('Graph');
  if (topicName.includes('Trie')) tags.add('Trie');
  if (topicName.includes('Segment Tree')) tags.add('Segment Tree');
  if (topicName.includes('Two Pointers')) tags.add('Two Pointers');
  if (topicName.includes('Sliding Window')) tags.add('Sliding Window');
  if (topicName.includes('Prefix Sum')) tags.add('Prefix Sum');
  if (topicName.includes('Dynamic Programming')) tags.add('Dynamic Programming');
  if (topicName.includes('Greedy')) tags.add('Greedy');
  if (topicName.includes('Backtracking')) tags.add('Backtracking');
  if (topicName.includes('Recursion')) tags.add('Recursion');

  if (lower.includes('two pointers') || lower.includes('opposite direction')) tags.add('Two Pointers');
  if (lower.includes('sliding window')) tags.add('Sliding Window');
  if (lower.includes('bfs') || lower.includes('breadth-first')) tags.add('BFS');
  if (lower.includes('dfs') || lower.includes('depth-first')) tags.add('DFS');
  if (lower.includes('recursion') || lower.includes('recursive')) tags.add('Recursion');
  if (lower.includes('memoization') || lower.includes('tabulation')) tags.add('Dynamic Programming');
  if (lower.includes('in-place')) tags.add('In-Place');
  if (lower.includes('math') || lower.includes('prime') || lower.includes('gcd') || lower.includes('fibonacci')) tags.add('Math');

  if (tags.size === 0) tags.add('Algorithms');
  return Array.from(tags).slice(0, 3);
}

function generateCppStarter(title, rawText) {
  return `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

/**
 * Problem: ${title}
 * Description: ${rawText}
 */
class Solution {
public:
    void solve() {
        // Read input from standard input (cin)
        // Implement your optimal solution logic here
        
        // Print result to standard output (cout)
    }
};

int main() {
    // Fast I/O
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    Solution solution;
    solution.solve();

    return 0;
}`;
}

function generatePythonStarter(title, rawText) {
  return `import sys

"""
Problem: ${title}
Description: ${rawText}
"""
def solve():
    # Read input from sys.stdin
    # Implement your optimal solution logic here
    pass

if __name__ == '__main__':
    solve()
`;
}

// ─── STEP 3: BUILD PROBLEMS GROUPED BY PHASE ───

const seenSlugs = new Set();
const phaseGroups = {};

const topicCounts = {};
parsedQuestions.forEach((q) => {
  topicCounts[q.topicName] = (topicCounts[q.topicName] || 0) + 1;
});
const topicPositions = {};

parsedQuestions.forEach((q, globalIdx) => {
  const posInTopic = topicPositions[q.topicName] || 0;
  topicPositions[q.topicName] = posInTopic + 1;
  const totalInTopic = topicCounts[q.topicName] || 1;

  const id = `dsa-p${q.phaseNum}-${String(posInTopic + 1).padStart(3, '0')}`;
  const title = deriveTitle(q.rawText, q.topicName, posInTopic);
  const slug = deriveSlug(title, seenSlugs);
  const difficulty = deriveDifficulty(q.phaseNum, posInTopic, totalInTopic, q.rawText);
  const tags = deriveTags(q.topicName, q.rawText);

  const problemObj = {
    id,
    slug,
    title,
    topic: q.topicName,
    tags,
    difficulty,
    order: globalIdx + 1,
    statement: `### Problem Description\n\n${q.rawText}\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).`,
    examples: [
      {
        input: 'Standard input case as specified in the problem statement',
        output: 'Corresponding expected output adhering to the required format',
        explanation: 'Step-by-step verification of the expected algorithmic invariants on this input.',
      },
    ],
    constraints: [
      'Standard integer bounds: 32-bit signed integer or input range [1, 10^5].',
      'Time complexity target: O(N) or O(N log N) where applicable.',
      'Auxiliary space target: O(1) or minimal auxiliary memory.',
    ],
    hints: [
      {
        level: 1,
        title: 'Core Invariant',
        content: `Identify the fundamental structural property or mathematical invariant governing this challenge in ${q.topicName}. What property remains true across each state transition?`,
      },
      {
        level: 2,
        title: 'Algorithmic Pattern',
        content: `Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation.`,
      },
      {
        level: 3,
        title: 'Edge Cases & Bounds',
        content: `Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow.`,
      },
    ],
    solution: {
      bruteForce: {
        explanation: 'Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.',
        timeComplexity: 'O(N^2) or O(2^N)',
        spaceComplexity: 'O(1) auxiliary',
      },
      optimal: {
        keyObservation: `Exploiting the mathematical invariants and structured ordering within ${q.topicName} eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.`,
        algorithm: `Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.`,
        steps: [
          {
            title: 'Step 1 — Input & State Setup',
            content: 'Parse inputs, initialize bounds and auxiliary tracking structures.',
          },
          {
            title: 'Step 2 — Invariant Traversal',
            content: 'Execute the core transformation or search maintaining invariants across iterations.',
          },
          {
            title: 'Step 3 — Result Generation',
            content: 'Emit formatted output or return final calculated scalar/array.',
          },
        ],
        timeComplexity: 'O(N) or O(N log N)',
        spaceComplexity: 'O(1) to O(N)',
      },
    },
    code: [
      {
        language: 'cpp',
        starterCode: generateCppStarter(title, q.rawText),
        source: generateCppStarter(title, q.rawText),
      },
      {
        language: 'python',
        starterCode: generatePythonStarter(title, q.rawText),
        source: generatePythonStarter(title, q.rawText),
      },
    ],
    followUp: `Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?`,
    testCases: [
      {
        id: `${slug}-tc-1`,
        input: '1',
        expectedOutput: '1',
        explanation: 'Sample baseline test case.',
      },
    ],
    limits: {
      timeLimitMs: 2000,
      memoryLimitMb: 256,
      outputLimitMb: 1,
    },
  };

  if (!phaseGroups[q.phaseNum]) {
    phaseGroups[q.phaseNum] = [];
  }
  phaseGroups[q.phaseNum].push(problemObj);
});

// ─── STEP 4: WRITE PHASE FILES ───

const phaseKeys = Object.keys(phaseGroups)
  .map(Number)
  .sort((a, b) => a - b);

for (const pNum of phaseKeys) {
  const problems = phaseGroups[pNum];
  const filePath = path.join(OUTPUT_DIR, `phase${pNum}.ts`);
  const fileContent = `import type { DsaProblem } from '@/types/dsa-question';\n\nexport const PHASE_${pNum}_PROBLEMS: DsaProblem[] = ${JSON.stringify(problems, null, 2)};\n`;
  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log(`Wrote Phase ${pNum} (${problems.length} problems) -> ${filePath}`);
}

// ─── STEP 5: WRITE PHASES INDEX FILE ───

const indexImports = phaseKeys.map((k) => `import { PHASE_${k}_PROBLEMS } from './phase${k}';`).join('\n');
const indexSpread = phaseKeys.map((k) => `  ...PHASE_${k}_PROBLEMS,`).join('\n');

const phasesIndexContent = `import type { DsaProblem } from '@/types/dsa-question';\n${indexImports}\n\nexport const ALL_CURRICULUM_PROBLEMS: DsaProblem[] = [\n${indexSpread}\n];\n`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), phasesIndexContent, 'utf8');
console.log(`Successfully generated all ${parsedQuestions.length} curriculum problems!`);
