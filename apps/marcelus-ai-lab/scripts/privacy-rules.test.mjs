import test from 'node:test';
import assert from 'node:assert/strict';
import { detectPrivateText } from './privacy-rules.mjs';

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
