import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { library, librarySourceUrl, normalizeSearch, searchLibrary } from '../data/library.ts';
import { pageMetadata } from '../data/site-metadata.ts';
import { locales } from '../data/i18n.ts';

test('library contains exactly the indexed numbered entries with valid source lines', () => {
  assert.equal(library.entries.length, 2060);
  assert.equal(library.categories.length, 26);
  assert.equal(new Set(library.entries.map(item => item.id)).size, 2060);
  const files = new Map<string, string[]>();
  for (const entry of library.entries) {
    if (!files.has(entry.path)) files.set(entry.path, readFileSync(path.resolve('../..', entry.path), 'utf8').split('\n'));
    assert.equal(files.get(entry.path)![entry.line - 1], '## ' + entry.title);
    assert.match(librarySourceUrl(entry), /\/blob\/[a-f0-9]{40}\/prompts\/.+#L\d+$/);
    assert.equal(new URL(librarySourceUrl(entry)).hostname, 'github.com');
  }
  for (const category of library.categories) assert.equal(library.entries.filter(item => item.category === category.id).length, category.count);
});
test('library search handles accents, case, multiple terms, category, empty and hostile input', () => {
  assert.equal(normalizeSearch('  QUALITÀ  '), 'qualita');
  assert.equal(searchLibrary('').length, 2060);
  assert.equal(new Set(searchLibrary('').slice(0, 26).map(item => item.category)).size, 26);
  assert.ok(searchLibrary('FORMAZIONE').length > 0);
  assert.deepEqual(searchLibrary('piano lezioni'), searchLibrary('PIANO   LEZIONI'));
  assert.equal(searchLibrary('<script>').length, 0);
});
test('library has deterministic empty results and safe category filtering', () => {
  assert.equal(searchLibrary('zz-no-match-zz').length, 0);
  assert.equal(searchLibrary('').filter(item => item.reviewRequired).length > 0, true);
  assert.equal(searchLibrary('', '03').length, 100);
  assert.equal(searchLibrary('', 'not-an-area').length, 0);
  assert.equal(searchLibrary('<script>').length, 0);
});
test('new metadata uses project social cards, a base-aware icon and no contact data', () => {
  for (const locale of locales) {
    const metadata = pageMetadata('/projects/verum/', locale, 'VERUM');
    assert.match(metadata.openGraph.images[0].url, /\/media\/og-verum.png$/);
    assert.match(metadata.icons.icon[0].url, /\/icon.svg$/);
    assert.doesNotMatch(JSON.stringify(metadata), /mailto:|telephone|email/i);
    assert.match(pageMetadata('/library/', locale).description, /[a-zA-Z]/);
  }
});
