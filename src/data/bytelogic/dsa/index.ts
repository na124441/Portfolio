import type { DsaProblem } from '@/types/dsa-question';
import { findMaxMinProblem } from './problems/find-max-min';
import { reverseArrayProblem } from './problems/reverse-array';
import { twoSumProblem } from './problems/two-sum';
import { validPalindromeProblem } from './problems/valid-palindrome';
import { binarySearchProblem } from './problems/binary-search';
import { validParenthesesProblem } from './problems/valid-parentheses';
import { reverseLinkedListProblem } from './problems/reverse-linked-list';
export { DSA_TOPICS } from './topics';

export const DSA_PROBLEMS: DsaProblem[] = [
  findMaxMinProblem,
  reverseArrayProblem,
  twoSumProblem,
  validPalindromeProblem,
  binarySearchProblem,
  validParenthesesProblem,
  reverseLinkedListProblem,
].sort((a, b) => a.order - b.order);

export function getAllDsaProblems(): DsaProblem[] {
  return DSA_PROBLEMS;
}

export function getDsaProblemBySlug(slug: string): DsaProblem | undefined {
  return DSA_PROBLEMS.find((p) => p.slug === slug);
}

export function getDsaProblemsByTopic(topicName: string): DsaProblem[] {
  if (topicName === 'ALL') return DSA_PROBLEMS;
  return DSA_PROBLEMS.filter(
    (p) => p.topic.toLowerCase() === topicName.toLowerCase()
  );
}

export function getAdjacentDsaProblems(currentSlug: string): {
  prev: DsaProblem | null;
  next: DsaProblem | null;
} {
  const index = DSA_PROBLEMS.findIndex((p) => p.slug === currentSlug);
  if (index === -1) {
    return { prev: null, next: null };
  }
  return {
    prev: index > 0 ? DSA_PROBLEMS[index - 1] : null,
    next: index < DSA_PROBLEMS.length - 1 ? DSA_PROBLEMS[index + 1] : null,
  };
}
