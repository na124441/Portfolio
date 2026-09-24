import type { DsaTestCase } from '@/types/dsa-question';

export const hiddenTests: DsaTestCase[] = [
  {
    id: 'hidden-fmm-1',
    input: '[100, -100, 50, -50, 0]',
    expectedOutput: '[-100, 100]',
    explanation: 'Symmetric extremes around zero',
    visibility: 'hidden',
  },
  {
    id: 'hidden-fmm-2',
    input: '[1000000000, -1000000000]',
    expectedOutput: '[-1000000000, 1000000000]',
    explanation: 'Constraint limits extreme check',
    visibility: 'hidden',
  },
  {
    id: 'hidden-fmm-3',
    input: '[5, 4, 3, 2, 1]',
    expectedOutput: '[1, 5]',
    explanation: 'Strictly decreasing order',
    visibility: 'hidden',
  },
];
