import type { DsaProblem } from '@/types/dsa-question';
import { PHASE_0_PROBLEMS } from './phase0';
import { PHASE_1_PROBLEMS } from './phase1';
import { PHASE_2_PROBLEMS } from './phase2';
import { PHASE_3_PROBLEMS } from './phase3';
import { PHASE_4_PROBLEMS } from './phase4';
import { PHASE_5_PROBLEMS } from './phase5';
import { PHASE_6_PROBLEMS } from './phase6';
import { PHASE_7_PROBLEMS } from './phase7';
import { PHASE_8_PROBLEMS } from './phase8';
import { PHASE_9_PROBLEMS } from './phase9';
import { PHASE_10_PROBLEMS } from './phase10';

export const ALL_CURRICULUM_PROBLEMS: DsaProblem[] = [
  ...PHASE_0_PROBLEMS,
  ...PHASE_1_PROBLEMS,
  ...PHASE_2_PROBLEMS,
  ...PHASE_3_PROBLEMS,
  ...PHASE_4_PROBLEMS,
  ...PHASE_5_PROBLEMS,
  ...PHASE_6_PROBLEMS,
  ...PHASE_7_PROBLEMS,
  ...PHASE_8_PROBLEMS,
  ...PHASE_9_PROBLEMS,
  ...PHASE_10_PROBLEMS,
];
