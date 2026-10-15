import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { factCheck, factCheckSource, factClaims, factSources, relativeChange } from '../data/fact-check.ts';
import { caseNarratives } from '../data/case-studies.ts';
import { caseStudies, profile, evidenceUrl } from '../data/portfolio.ts';
import { locales, t } from '../data/i18n.ts';
import { pageMetadata, siteOrigin } from '../data/site-metadata.ts';

test('publication metadata keeps canonical, language alternates and image on the configured origin', () => {
  for (const locale of locales) {
    const metadata = pageMetadata('/cases/fact-check-renewables/', locale, 'Fact-check');
    assert.equal(new URL(metadata.alternates.canonical).origin, new URL(siteOrigin).origin);
    assert.equal(metadata.openGraph.url, metadata.alternates.canonical);
    assert.equal(metadata.openGraph.title, 'Fact-check');
    assert.equal(Object.keys(metadata.alternates.languages).length, 3);
    assert.match(metadata.openGraph.images[0].url, /\/media\/evaluation-desk\.png$/);
    for (const alternate of Object.values(metadata.alternates.languages)) assert.equal(new URL(alternate).origin, new URL(siteOrigin).origin);
  }
});

test('every case has a complete narrative in all three languages', () => {
  assert.deepEqual(Object.keys(caseNarratives), caseStudies.map(item => item.id));
  for (const narrative of Object.values(caseNarratives)) for (const locale of locales) {
    for (const field of [narrative.problem, narrative.brief, narrative.output, narrative.pending, ...narrative.process, ...narrative.checks]) assert.ok(field[locale].trim().length > 20);
    assert.ok(narrative.process.length >= 3);
    assert.ok(narrative.checks.length >= 1);
  }
});
test('the fact-check keeps four distinct verdicts and links every claim to dated primary sources', () => {
  assert.deepEqual(factClaims.map(item => item.verdict), ['VERO', 'FALSO', 'IMPRECISO', 'NON DIMOSTRATO']);
  assert.equal(new Set(factClaims.map(item => item.id)).size, 4);
  for (const source of factSources) {
    assert.equal(new URL(source.url).hostname, 'ec.europa.eu');
    assert.ok(source.published < factCheck.reviewedOn);
  }
  for (const claim of factClaims) assert.ok(claim.sources.every(id => factSources.some(source => source.id === id)));
  assert.match(factCheckSource.ref, /^[a-f0-9]{40}$/);
  assert.ok(evidenceUrl(factCheckSource.path, factCheckSource.ref).includes(factCheckSource.ref));
  assert.equal(factCheck.year, 2024);
});
test('percentage points are not confused with relative growth or a different denominator', () => {
  const result = relativeChange(factCheck.electricityShare, factCheck.deltaPoints);
  assert.equal(result.previous, 45.4);
  assert.ok(Math.abs(result.relative - 4.625550660792952) < 1e-10);
  assert.notEqual(factCheck.energyShare, factCheck.electricityShare);
  assert.throws(() => relativeChange(2, 3));
  assert.throws(() => relativeChange(Infinity, 1));
});
test('the owner-requested subtitle is consistent without claiming a trainer job title', () => {
  assert.equal(profile.role, 'Training & AI Workflow Projects');
  assert.equal(t('it', profile.role), 'Formazione e progetti di workflow AI');
  assert.doesNotMatch(t('it', profile.role), /formatore/i);
});
test('the only downloadable CV is the verified public derivative', () => {
  const content = readFileSync(`public${profile.publicCv}`);
  assert.equal(content.subarray(0, 5).toString(), '%PDF-');
  assert.equal(createHash('sha256').update(content).digest('hex'), 'bc2f49170713a124ccd24701fe19e04c98ebedf076dbbfa08320fe9b2dcbb04d');
  assert.ok(content.length < 2500000);
});
