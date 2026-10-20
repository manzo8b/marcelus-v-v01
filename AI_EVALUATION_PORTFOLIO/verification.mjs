import fs from 'node:fs';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { verdict, countWords } = require('./prototype/logic.js');
const { samples } = JSON.parse(fs.readFileSync(new URL('./fixtures.json', import.meta.url), 'utf8'));
for (const sample of samples) {
  assert.equal(verdict(sample), sample.expected, sample.id);
  if (sample.maxWords) assert.ok(countWords(sample.output) <= sample.maxWords, `${sample.id}: limite parole`);
}
const b1 = samples.find(s => s.id === 'B1_B');
assert.equal(b1.output.split('\n').length, 4);
for (const term of ['bicchieri', 'tovaglioli', 'responsabile', 'solo dopo']) assert.ok(b1.output.includes(term));
assert.equal(verdict({major:true, insufficient:true, minor:true}), 'FAIL');
assert.equal(verdict({major:false, insufficient:true, minor:true}), 'NOT VERIFIABLE');
console.log(JSON.stringify({samplesChecked:samples.length,wordCounts:Object.fromEntries(samples.filter(s=>s.maxWords).map(s=>[s.id,countWords(s.output)])),decisionPrecedence:'verified',scope:'Mechanical rules only; no live GPT evaluation or independent language validation.'}, null, 2));
