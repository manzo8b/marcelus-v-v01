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
  assert.doesNotMatch(code, /REVIEW DRAFT|BOZZA IN REVISIONE|BORRADOR EN REVISIÓN/);
  assert.match(code, /Last updated:/);
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

test('published legal pages have canonical multilingual routes and are indexed', () => {
  const site = read('app/sitemap.ts');
  const routes = read('app/[locale]/[[...segments]]/page.tsx');
  const footer = read('components/site-layout.tsx');
  const pageEn = read('app/(english)/legal/privacy/page.tsx');
  assert.doesNotMatch(pageEn, /robots: \{ index: false/);
  assert.doesNotMatch(routes, /robots: \{ index: false/);
  for (const path of ['legal/', 'legal/privacy/', 'legal/cookies/']) {
    assert.ok(site.includes("'/" + path + "'"), 'approved legal path must appear in sitemap ' + path);
    assert.ok(routes.includes(path.replace(/\/$/, '')), 'missing localized route ' + path);
    assert.ok(footer.includes(path), 'missing footer link ' + path);
  }
});
