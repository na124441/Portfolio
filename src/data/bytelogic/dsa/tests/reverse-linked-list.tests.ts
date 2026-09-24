import type { DsaTestCase } from '@/types/dsa-question';

export const hiddenTests: DsaTestCase[] = [
  {
    id: 'hidden-rll-1',
    input: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]',
    expectedOutput: '[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]',
    explanation: '10-element list full reversal',
    visibility: 'hidden',
  },
  {
    id: 'hidden-rll-2',
    input: '[-10, 0, 10]',
    expectedOutput: '[10, 0, -10]',
    explanation: 'List with negative and zero values',
    visibility: 'hidden',
  },
  {
    id: 'hidden-rll-3',
    input: '[42]',
    expectedOutput: '[42]',
    explanation: 'Single node list reversal invariance',
    visibility: 'hidden',
  },
];
