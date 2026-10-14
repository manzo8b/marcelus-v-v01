import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { projects, caseStudies, profile, evidenceUrl, sourceCommit } from '../data/portfolio.ts';

test('the approved scope has exactly three unique projects', () => {
  assert.deepEqual(projects.map(project => project.id), ['prometeus', 'verum', 'risto-lab']);
  assert.equal(new Set(projects.map(project => project.id)).size, 3);
});
test('every evidence reference exists and uses the audited commit', () => {
  for (const source of [...projects.flatMap(project => project.evidence), ...caseStudies]) {
    assert.ok(existsSync(path.resolve(process.cwd(), '../..', source.path)), source.path);
    assert.ok(evidenceUrl(source.path).includes(sourceCommit));
  }
});
test('cases refer to approved projects and retain their canonical paths', () => {
  assert.equal(caseStudies.length, 3);
  for (const item of caseStudies) assert.ok(projects.some(project => project.id === item.projectId));
  assert.equal(caseStudies[0].path, 'AI_EVALUATION_PORTFOLIO/CASE_02_PROMETEUS_RUBRIC_DESIGN.md');
});
test('the private CV is not exposed and English is B1', () => {
  assert.equal(profile.publicCv, null);
  assert.ok(profile.languages.includes('English: B1'));
});
test('the lab sample is read from the canonical fixture file', () => {
  const fixtures = JSON.parse(readFileSync(path.resolve(process.cwd(), '../../AI_EVALUATION_PORTFOLIO/fixtures.json'), 'utf8'));
  assert.equal(fixtures.samples.length, 9);
  assert.equal(fixtures.samples.find((item: { id: string }) => item.id === 'C').expected, 'FAIL');
});
