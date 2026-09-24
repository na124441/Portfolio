import type { DsaTestCase } from '@/types/dsa-question';

export const hiddenTests: DsaTestCase[] = [
  {
    id: 'hidden-ra-1',
    input: '[1, 2, 3, 4, 5, 6]',
    expectedOutput: '[6, 5, 4, 3, 2, 1]',
    explanation: 'Even number of elements reversal',
    visibility: 'hidden',
  },
  {
    id: 'hidden-ra-2',
    input: '[0]',
    expectedOutput: '[0]',
    explanation: 'Single element array invariant',
    visibility: 'hidden',
  },
  {
    id: 'hidden-ra-3',
    input: '[-5, -10, -15]',
    expectedOutput: '[-15, -10, -5]',
    explanation: 'Negative array reversal',
    visibility: 'hidden',
  },
];
