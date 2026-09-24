import type { DsaTestCase } from '@/types/dsa-question';

export const hiddenTests: DsaTestCase[] = [
  {
    id: 'hidden-vp-1',
    input: '"No \'x\' in Nixon"',
    expectedOutput: 'true',
    explanation: 'Classic palindrome phrase with punctuation and mixed casing',
    visibility: 'hidden',
  },
  {
    id: 'hidden-vp-2',
    input: '"0P"',
    expectedOutput: 'false',
    explanation: 'Alphanumeric mismatch: 0 is not equal to p',
    visibility: 'hidden',
  },
  {
    id: 'hidden-vp-3',
    input: '"Was it a car or a cat I saw?"',
    expectedOutput: 'true',
    explanation: 'Sentence palindrome with spaces and punctuation',
    visibility: 'hidden',
  },
  {
    id: 'hidden-vp-4',
    input: '" "',
    expectedOutput: 'true',
    explanation: 'Whitespace only string is empty after alphanumeric filtering',
    visibility: 'hidden',
  },
];
