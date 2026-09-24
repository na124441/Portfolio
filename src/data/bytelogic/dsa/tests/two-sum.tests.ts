import type { DsaTestCase } from '@/types/dsa-question';

export const hiddenTests: DsaTestCase[] = [
  {
    id: 'hidden-ts-1',
    input: '5\n10 20 30 40 50\n70',
    expectedOutput: '[2,3]',
    explanation: 'Sum of 30 + 40 = 70',
    visibility: 'hidden',
  },
  {
    id: 'hidden-ts-2',
    input: '4\n-1 -2 -3 -4\n-7',
    expectedOutput: '[2,3]',
    explanation: 'Negative numbers sum -3 + -4 = -7',
    visibility: 'hidden',
  },
  {
    id: 'hidden-ts-3',
    input: '6\n0 4 3 0 1 2\n0',
    expectedOutput: '[0,3]',
    explanation: 'Zeros matching target 0',
    visibility: 'hidden',
  },
  {
    id: 'hidden-ts-4',
    input: '4\n1000000000 500 500 2000000000\n1000',
    expectedOutput: '[1,2]',
    explanation: 'Large numbers with small target match in the middle',
    visibility: 'hidden',
  },
];
