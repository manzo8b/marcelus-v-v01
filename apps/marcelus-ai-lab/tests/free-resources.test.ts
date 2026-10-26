import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve('public/resources');

for (const locale of ['en', 'it', 'es'] as const) {
  test('free resource files are present, public-safe and localized: ' + locale, () => {
    for (const name of ['ai-review-checklist', 'prompt-design-worksheet']) {
      const filename = path.join(root, name + '-' + locale + '.txt');
      assert.ok(statSync(filename).isFile(), filename);
      const text = readFileSync(filename, 'utf8');
      assert.ok(text.startsWith('MARCELUS AI LAB'), filename);
      assert.ok(text.length > 500, filename);
      assert.ok(!text.includes('/Users/') && !text.includes('127.0.0.1'), filename);
    }
  });

  test('free 60-minute lesson plan totals 60 minutes: ' + locale, () => {
    const file = path.join(root, 'lesson-plan-60-min-' + locale + '.csv');
    const rows = readFileSync(file, 'utf8').replace(/^\uFEFF/, '').trim().split(/\r?\n/);
    assert.equal(rows.length, 7);
    const sep = locale === 'en' ? ',' : ';';
    const minutes = rows.slice(1).map(row => {
      const cells = row.split(sep);
      assert.ok(cells.length >= 8, row);
      return Number(cells[4]);
    });
    assert.equal(minutes.reduce((sum, value) => sum + value, 0), 60);
  });
}
