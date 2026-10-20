import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = fileURLToPath(new URL('../../../', import.meta.url));
const target = fileURLToPath(new URL('../data/library-index.json', import.meta.url));
const index = readFileSync(path.join(root, 'docs/INDICE_PROMPT.md'), 'utf8');
const categories = [];
const entries = [];
for (const row of index.split('\n')) {
  const cells = row.split('|').map(cell => cell.trim());
  if (!cells[2]?.startsWith('prompts/') || !/^\d+$/.test(cells[3])) continue;
  const source = cells[2];
  assert.ok(!source.includes('..'));
  const category = String(categories.length + 1).padStart(2, '0');
  const lines = readFileSync(path.join(root, source), 'utf8').split('\n');
  const selected = [];
  let fenced = false;
  // Source files use numbered H2 entries; introductory headings are not prompts.
  for (const [offset, line] of lines.entries()) {
    if (/^\s*```/.test(line)) { fenced = !fenced; continue; }
    if (fenced || !line.startsWith('## ')) continue;
    const title = line.slice(3).trim();
    if (!/\d/.test(title)) continue;
    selected.push({ id: category + '-' + String(selected.length + 1).padStart(3, '0'), title, category, path: source, line: offset + 1, reviewRequired: /sicurezza|finanza|medico|salute|autostrada|legale|ai-act|hr/i.test(source) });
  }
  assert.equal(selected.length, Number(cells[3]), source + ': index/source count mismatch');
  categories.push({ id: category, label: cells[1], count: selected.length });
  entries.push(...selected);
}
assert.equal(categories.length, 26);
assert.equal(entries.length, 2060);
const result = { sourceCommit: '6d4d10874c336577698dbe594c72f9bb43e9a1e2', categories, entries };
const serialized = JSON.stringify(result) + '\n';
if (process.argv.includes('--check')) assert.equal(readFileSync(target, 'utf8'), serialized, 'Library index is stale');
else writeFileSync(target, serialized);
console.log(JSON.stringify({ areas: categories.length, entries: entries.length, checked: process.argv.includes('--check') }));
