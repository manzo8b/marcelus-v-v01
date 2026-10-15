import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { projects, caseStudies, profile, evidenceUrl, sourceCommit } from '../data/portfolio.ts';
import { projectDetails } from '../data/project-details.ts';
import { getSample } from '../data/fixtures.ts';

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
  assert.equal(profile.name, 'Marcelo Fernandez');
  assert.equal(profile.publicCv, null);
  assert.ok(profile.languages.includes('English: B1'));
});
test('the lab sample is read from the canonical fixture file', () => {
  const fixtures = JSON.parse(readFileSync(path.resolve(process.cwd(), '../../AI_EVALUATION_PORTFOLIO/fixtures.json'), 'utf8'));
  assert.equal(fixtures.samples.length, 9);
  assert.equal(fixtures.samples.find((item: { id: string }) => item.id === 'C').expected, 'FAIL');
});
test('each project skill has a source-backed deliverable and a review record', () => {
  assert.deepEqual(Object.keys(projectDetails), projects.map(project => project.id));
  for (const project of projects) {
    const detail = projectDetails[project.id];
    assert.deepEqual(new Set(detail.deliverables.map(item => item.kind)), new Set(project.skills));
    for (const item of [...detail.deliverables, detail.review.source]) {
      assert.ok(existsSync(path.resolve(process.cwd(), '../..', item.path)), item.path);
      assert.ok(evidenceUrl(item.path).includes(sourceCommit));
    }
    for (const text of [detail.audience, detail.contribution, detail.status, ...Object.values(detail.review).filter(item => typeof item === 'string')]) assert.ok(text.length > 15);
  }
});
test('project comparisons use canonical samples with the same brief and reference', () => {
  for (const detail of Object.values(projectDetails)) {
    const before = getSample(detail.example.beforeId);
    const after = getSample(detail.example.afterId);
    assert.equal(before.expected, 'FAIL');
    assert.equal(after.expected, 'PASS');
    assert.equal(before.instruction, after.instruction);
    assert.equal(before.reference, after.reference);
    assert.match(detail.example.limit, /synthetic/i);
  }
});
test('missing canonical samples fail instead of displaying an invented fallback', () => {
  assert.throws(() => getSample('MISSING_SAMPLE'), /Missing canonical portfolio sample/);
});
test('historical testing and remaining verification are not overstated', () => {
  assert.match(projectDetails.prometeus.review.next, /not 30 complete V5/);
  assert.match(projectDetails.verum.review.next, /regression is not yet attached/);
  assert.match(projectDetails['risto-lab'].status, /private GPT/);
  assert.match(projectDetails['risto-lab'].review.next, /No participant responses/);
  assert.match(projectDetails['risto-lab'].review.next, /not 50 completed live tests/);
});
