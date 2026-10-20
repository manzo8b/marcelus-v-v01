import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { techniqueCopy, techniqueExamples, techniqueSource } from '../data/verum-technique.ts';
import { locales } from '../data/i18n.ts';

test('VERUM technique has three source sentences and complete editorial translations', () => {
  assert.deepEqual(techniqueExamples.map(example => example.id), ['S1', 'S2', 'S3']);
  for (const field of Object.values(techniqueCopy)) for (const locale of locales) assert.ok(field[locale].trim().length > 3);
  for (const example of techniqueExamples) for (const locale of locales) {
    for (const field of [example.claim, example.needed, example.framing, example.fidelity, example.correction]) assert.ok(field[locale].length > 20);
  }
});
test('VERUM example preserves wording and separates population drift from missing evidence', () => {
  const [, awareness, universal] = techniqueExamples;
  assert.equal(awareness.source, 'Most people don’t realize the scale of this shift.');
  assert.match(awareness.rewrite, /^Some observers/);
  assert.match(awareness.correction.en, /most people/);
  assert.match(universal.source, /everything/);
  assert.match(universal.correction.en, /everything/);
  for (const locale of locales) assert.ok(techniqueCopy.task[locale].length > 100);
});
test('VERUM technique points only to its public explanation and exposes no unsupported numerical results', () => {
  assert.ok(existsSync(path.resolve('../..', techniqueSource)));
  assert.doesNotMatch(JSON.stringify({ techniqueCopy, techniqueExamples }), /92%|4\.2|4\.5|A01|mailto:|\.xlsx|\.pdf|\/Users\//);
  assert.match(techniqueCopy.limits.en, /No numerical bias reduction or inter-annotator agreement is claimed/);
});
