import test from 'node:test';
import assert from 'node:assert/strict';
import { detectPrivateText, isApprovedPublicContact } from './privacy-rules.mjs';

test('privacy rules detect synthetic token formats without exposing their values', () => {
  for (const value of ['g' + 'hp_' + 'x'.repeat(36), 'sk-' + 'x'.repeat(36), ['BEGIN', 'PRIVATE', 'KEY'].join(' ')]) {
    assert.ok(detectPrivateText(value).includes('credential'));
    assert.ok(!JSON.stringify(detectPrivateText(value)).includes(value));
  }
});
test('privacy rules detect direct contact and device paths', () => {
  assert.ok(detectPrivateText('person' + '@' + 'example.invalid').includes('email'));
  assert.ok(detectPrivateText('+' + '39 000 000 0000').includes('international-phone'));
  assert.ok(detectPrivateText(['', 'Users', 'Example', 'private'].join('/')).includes('private-device-path'));
});
test('privacy rules flag identifier-shaped text and allow approved professional links', () => {
  assert.ok(detectPrivateText('ABC' + 'DEF90A01H501Z').includes('italian-tax-id'));
  assert.ok(detectPrivateText('IT' + '00A0000000000000000000000').includes('iban'));
  assert.deepEqual(detectPrivateText('Marcelo Fernandez https://www.linkedin.com/in/public-profile/ English B1'), []);
});

test('only the exact owner-approved public profile address can bypass email blocking', () => {
  const approved = ['marcelo2020.it', 'gmail.com'].join('@');
  const sample = `export const profile = { email: '${approved}' };`;
  const target = 'apps/marcelus-ai-lab/data/portfolio.ts';
  assert.ok(detectPrivateText(sample).includes('email'));
  assert.equal(isApprovedPublicContact(target, sample), true);
  assert.equal(isApprovedPublicContact('README.md', sample), false);
  assert.equal(isApprovedPublicContact(target, sample + '\\n' + 'a' + '@' + 'example.invalid'), false);
  assert.equal(isApprovedPublicContact(target, `export const profile = { email: '${'a' + '@' + 'example.invalid'}' };`), false);
});
