import { PHASE_0_PROBLEMS } from '../src/data/bytelogic/dsa/phases/phase0';

console.log('--- Phase 0 Problems 1 to 7 ---');
PHASE_0_PROBLEMS.slice(0, 7).forEach((p, idx) => {
  console.log(`\n[#${idx + 1}] ID: ${p.id} | Slug: ${p.slug}`);
  console.log(`Title: ${p.title}`);
  const lines = p.statement.split('\n');
  console.log(`Statement: ${lines[2] || lines[0]}`);
  console.log('Examples:', JSON.stringify(p.examples, null, 2));
  console.log('TestCases:', JSON.stringify(p.testCases, null, 2));
});
