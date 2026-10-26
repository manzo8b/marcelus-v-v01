import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path: string) => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('legal pages have three languages and all legal sections', () => {
  const code = read('components/legal-pages.tsx');
  for (const lang of ['it:', 'en:', 'es:']) assert.ok(code.includes(lang));
  for (const page of ['notice', 'privacy', 'cookies']) {
    const matches = code.match(new RegExp('^    ' + page + ': \\{', 'gm')) || [];
    assert.equal(matches.length, 3, 'missing translation: ' + page);
  }
  assert.match(code, /REVIEW DRAFT/);
  assert.match(code, /marcelus-theme/);
  assert.match(code, /12 mesi/);
  assert.match(code, /12 months/);
  assert.match(code, /12 meses/);
  assert.match(code, /30 giorni/);
  assert.match(code, /30 days/);
  assert.match(code, /30 días/);
  assert.match(code, /\{legalOwnerName\}/);
  assert.doesNotMatch(code, /\{profile\.name\}/);
  const identity = read('data/legal-identity.ts');
  assert.match(identity, /export const legalOwnerName = 'Marcelo Javier Fernandez Caballero'/);
  assert.match(code, /import \{ legalOwnerName \} from '@\/data\/legal-identity';/);
});

test('draft pages are routable but excluded from sitemap and search indexing', () => {
  const site = read('app/sitemap.ts');
  const routes = read('app/[locale]/[[...segments]]/page.tsx');
  const footer = read('components/site-layout.tsx');
  const pageEn = read('app/(english)/legal/privacy/page.tsx');
  assert.match(pageEn, /robots: \{ index: false, follow: false \}/);
  assert.match(routes, /robots: \{ index: false, follow: false \}/);
  for (const path of ['legal/', 'legal/privacy/', 'legal/cookies/']) {
    assert.ok(!site.includes("'/" + path + "'"), 'unapproved draft must stay out of sitemap ' + path);
    assert.ok(routes.includes(path.replace(/\/$/, '')), 'missing localized route ' + path);
    assert.ok(footer.includes(path), 'missing footer link ' + path);
  }
});
