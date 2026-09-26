/**
 * Automated Question Bank Validator
 * Checks:
 * 1. Structural integrity (valid IDs, slugs, titles, statements)
 * 2. Example non-genericity (rejects generic placeholders)
 * 3. Input-output alignment (examples have non-empty valid inputs & outputs)
 * 4. Testcase alignment (testCases have non-empty inputs and expectedOutputs)
 */

import { ALL_CURRICULUM_PROBLEMS } from '../src/data/bytelogic/dsa/phases/index';

const PLACEHOLDER_PATTERNS = [
  /standard input case as specified/i,
  /corresponding expected output/i,
  /step-by-step verification of the expected algorithmic/i,
  /sample baseline test case/i,
];

interface ValidationIssue {
  id: string;
  order: number;
  slug: string;
  title: string;
  issue: string;
}

export function validateQuestionBank(): {
  total: number;
  validCount: number;
  invalidCount: number;
  issues: ValidationIssue[];
} {
  const issues: ValidationIssue[] = [];
  let validCount = 0;

  for (const p of ALL_CURRICULUM_PROBLEMS) {
    let hasIssue = false;

    // 1. Title & statement check
    if (!p.title || p.title.trim().length === 0) {
      issues.push({ id: p.id, order: p.order, slug: p.slug, title: p.title, issue: 'Missing title' });
      hasIssue = true;
    }
    if (!p.statement || p.statement.trim().length === 0) {
      issues.push({ id: p.id, order: p.order, slug: p.slug, title: p.title, issue: 'Missing problem statement' });
      hasIssue = true;
    }

    // 2. Examples check
    if (!p.examples || p.examples.length === 0) {
      issues.push({ id: p.id, order: p.order, slug: p.slug, title: p.title, issue: 'No examples defined' });
      hasIssue = true;
    } else {
      p.examples.forEach((ex, idx) => {
        if (!ex.input || ex.input.trim().length === 0) {
          issues.push({ id: p.id, order: p.order, slug: p.slug, title: p.title, issue: `Example ${idx + 1} has empty input` });
          hasIssue = true;
        }
        if (!ex.output || ex.output.trim().length === 0) {
          issues.push({ id: p.id, order: p.order, slug: p.slug, title: p.title, issue: `Example ${idx + 1} has empty output` });
          hasIssue = true;
        }

        // Check for placeholder text
        for (const pattern of PLACEHOLDER_PATTERNS) {
          if (pattern.test(ex.input) || pattern.test(ex.output) || pattern.test(ex.explanation)) {
            issues.push({
              id: p.id,
              order: p.order,
              slug: p.slug,
              title: p.title,
              issue: `Example ${idx + 1} contains generic boilerplate placeholder text`,
            });
            hasIssue = true;
            break;
          }
        }
      });
    }

    // 3. Test cases check
    if (!p.testCases || p.testCases.length === 0) {
      issues.push({ id: p.id, order: p.order, slug: p.slug, title: p.title, issue: 'No testCases defined' });
      hasIssue = true;
    } else {
      p.testCases.forEach((tc, idx) => {
        if (!tc.input || tc.input.trim().length === 0) {
          issues.push({ id: p.id, order: p.order, slug: p.slug, title: p.title, issue: `TestCase ${idx + 1} has empty input` });
          hasIssue = true;
        }
        if (tc.expectedOutput === undefined || tc.expectedOutput === null) {
          issues.push({ id: p.id, order: p.order, slug: p.slug, title: p.title, issue: `TestCase ${idx + 1} missing expectedOutput` });
          hasIssue = true;
        }
      });
    }

    if (!hasIssue) {
      validCount++;
    }
  }

  return {
    total: ALL_CURRICULUM_PROBLEMS.length,
    validCount,
    invalidCount: issues.length,
    issues,
  };
}

if (require.main === module) {
  const result = validateQuestionBank();
  console.log('====================================');
  console.log('ByteLogic Question Bank Audit Report');
  console.log('====================================');
  console.log(`Total questions audited: ${result.total}`);
  console.log(`Fully refined & compliant questions: ${result.validCount}`);
  console.log(`Issues detected: ${result.issues.length}`);
  console.log('Sample issues detected:');
  result.issues.slice(0, 10).forEach((iss, i) => {
    console.log(` ${i + 1}. [Order ${iss.order} | ${iss.slug}]: ${iss.issue}`);
  });
  console.log('====================================');
}
