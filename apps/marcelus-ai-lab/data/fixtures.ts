import { readFileSync } from 'node:fs';
import path from 'node:path';

type Sample = {
  id: string; instruction: string; reference: string; output: string;
  expected: 'PASS' | 'FAIL' | 'NEEDS REVISION' | 'NOT VERIFIABLE'; evidence: string;
};

// Read the original portfolio examples at build time, never from a browser API.
const fixtureFile = JSON.parse(readFileSync(path.resolve(process.cwd(), '../../AI_EVALUATION_PORTFOLIO/fixtures.json'), 'utf8')) as { samples: Sample[] };

export function getSample(id: string): Sample {
  const sample = fixtureFile.samples.find(item => item.id === id);
  if (!sample) throw new Error(`Missing canonical portfolio sample: ${id}`);
  return sample;
}
