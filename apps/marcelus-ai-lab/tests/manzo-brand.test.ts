import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('MANZO header icon is a standalone text-free vector, with no legacy circular icon', () => {
  const asset = readFileSync('public/media/manzo-mark.svg', 'utf8');
  const navigation = readFileSync('components/navigation.tsx', 'utf8');
  assert.ok(asset.includes('<svg') && asset.includes('<path'));
  assert.ok(!/<text(?:\s|>)/i.test(asset), 'Symbol asset must not contain a visible wordmark');
  assert.ok(navigation.includes("assetUrl('/media/manzo-mark.svg')"));
  assert.ok(navigation.includes('MARCELUS '));
  assert.ok(!navigation.includes('<Aperture'));
});
