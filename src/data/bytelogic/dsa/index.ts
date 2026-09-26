import type { DsaProblem } from '@/types/dsa-question';
import { ALL_CURRICULUM_PROBLEMS } from './phases';

export { DSA_TOPICS } from './topics';

// Appending only the curriculum problems provided by the user across Phase 0 to Phase 10
export const DSA_PROBLEMS: DsaProblem[] = ALL_CURRICULUM_PROBLEMS.map((p, idx) => ({
  ...p,
  order: idx + 1,
}));

export function getAllDsaProblems(): DsaProblem[] {
  return DSA_PROBLEMS;
}

export function getAllDsaSlugs(): string[] {
  return DSA_PROBLEMS.map((p) => p.slug);
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
