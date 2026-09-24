import type { DsaTestCase } from '@/types/dsa-question';

export const hiddenTests: DsaTestCase[] = [
  {
    id: 'hidden-vp-bracket-1',
    input: '"(([]){})"',
    expectedOutput: 'true',
    explanation: 'Nested brackets of various types',
    visibility: 'hidden',
  },
  {
    id: 'hidden-vp-bracket-2',
    input: '"[(])"',
    expectedOutput: 'false',
    explanation: 'Improper interlocking nesting',
    visibility: 'hidden',
  },
  {
    id: 'hidden-vp-bracket-3',
    input: '"]"',
    expectedOutput: 'false',
    explanation: 'Immediate closing bracket without opener',
    visibility: 'hidden',
  },
  {
    id: 'hidden-vp-bracket-4',
    input: '"{"',
    expectedOutput: 'false',
    explanation: 'Unclosed single bracket',
    visibility: 'hidden',
  },
];
