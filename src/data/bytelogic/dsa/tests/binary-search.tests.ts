import type { DsaTestCase } from '@/types/dsa-question';

export const hiddenTests: DsaTestCase[] = [
  {
    id: 'hidden-bs-1',
    input: 'nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target = 1',
    expectedOutput: '0',
    explanation: 'Target is the first element',
    visibility: 'hidden',
  },
  {
    id: 'hidden-bs-2',
    input: 'nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target = 10',
    expectedOutput: '9',
    explanation: 'Target is the last element',
    visibility: 'hidden',
  },
  {
    id: 'hidden-bs-3',
    input: 'nums = [-500, -200, -100, 0, 100, 200, 500], target = -100',
    expectedOutput: '2',
    explanation: 'Negative target in sorted array',
    visibility: 'hidden',
  },
  {
    id: 'hidden-bs-4',
    input: 'nums = [2, 4, 6, 8, 10], target = 5',
    expectedOutput: '-1',
    explanation: 'Missing target falling between existing values',
    visibility: 'hidden',
  },
];
