# MARCELUS AI LAB

## V0.2 release candidate

Source branch: `feat/marcelus-ai-lab-v02-growth`, based on audited v01 source `6d4d10874c336577698dbe594c72f9bb43e9a1e2`. The stacked PR18/PR19 merge remains separate; this branch does not start from generated output. The currently published release stays unchanged until owner review of this candidate.

V0.2 adds a recruiter-first home, direct VERUM case, languages/work setup/contact, a searchable Prometeus catalogue, source-linked selected starting points, six editorial workflow templates, favicon, sitemap, minimal Person JSON-LD and four real-evidence social cards. No analytics, new account, API, job application or STYX project.

Phases 2-5: static frontend, source-backed project pages, four complete case studies and interactive demos for Prometeus Marcelus, VERUM and RISTO-LAB. Display name: **Marcelo Fernandez**. Italian subtitle: **Formazione e progetti di workflow AI**, with English and Spanish equivalents. Each project includes its audience, contribution, deliverables mapped to skills, canonical sample comparison, documented iteration and remaining verification. No AI API, visitor account or backend. Published on GitHub Pages with owner approval; see [deployment record](DEPLOYMENT.md).

## Languages and routes

The 13 previous English URLs are preserved, with a new `/library/` route for 14 English pages. The same pages are available under `/it/` and `/es/`: 42 content routes in total, plus sitemap and error pages. The language selector preserves the current route and fragment, with a full document load between language layouts. Each successful page has its own server-rendered HTML language and localized content/metadata. The shared static 404 adapts its language after hydration when the host serves it for a localized unknown URL.

English pages live in the URL-neutral `(english)` route group. The localized catch-all reuses the same page implementations with explicit locale parameters. `components/site-layout.tsx` is shared by both root layouts. The pinned Next.js `globalNotFound` experimental option supports a shared 404 across these layouts; its export and unknown-route behavior require testing on the chosen production host before deployment.

Editorial dictionaries fail on missing translations, rather than silently mixing languages. Original Italian evidence, verdict codes, project names and the existing screenshot are intentionally not translated or rewritten. Translations are editorial, not certified translations or new language-validation results.

## Interactive demos

- **Prometeus:** three explicit blueprints compose seven structured sections from a request. This is template composition, not semantic request analysis. Validation covers empty and over-800-character input. Copy and reset are available; a denied clipboard operation has a visible error state.
- **VERUM / Lab:** the default dossier checks four claims in an explicitly invented post about EU renewables in 2024, using two dated Eurostat primary sources. It distinguishes electricity from all energy, percentage points from relative change, and missing causal evidence from a false claim. The documented findings are prepared, not generated live; both sources come from the same institution. An expandable calibration section preserves six review focuses and all nine canonical samples with their original verdicts. No arbitrary text is assessed or automated error-detection claim made.
- **RISTO-LAB:** three illustrative scenarios based on the documented opening, onboarding and complaint cases. Five keyboard-operable views cover SOP, checklist, training, role play and criteria. Checked items and other demo state remain in memory only. These are new illustrative templates, not private-GPT transcripts or certified operational procedures.

## Local development

The verified runtime is Node.js 24.16.0, pinned in `.nvmrc`. Keep dependency installation reproducible with `npm ci`; the release candidate does not add dependencies.

```sh
npm ci
npm run dev -- --port 3210
```

## Prometeus library

`npm run library:index` derives titles, categories and line references from the 26 source files listed in `docs/INDICE_PROMPT.md`. Counts must match the source or generation fails; `build` rejects a stale catalogue. The source commit is pinned independently from app version. Original Italian titles remain documentary content. Search, area selection, empty/reset and incremental display work in browser memory only.

The 2060 entries include variants and are not 2060 unique or validated prompts. Six new workflow templates are editorial material, separately labelled and excluded from that historical count. Risk-area labels are a conservative file-level hint, not automated safety classification or legal clearance.

## Verification and export

```sh
npm run test
npm run typecheck
npm run privacy:check
npm run build
```

The static export is `out/`. The owner authorized public deployment on 15 October 2026, after local review. The GitHub Pages build uses `NEXT_PUBLIC_SITE_ORIGIN=https://manzo8b.github.io NEXT_PUBLIC_BASE_PATH=/marcelus-v-v01 npm run build`. Canonical URLs, language alternates and Open Graph URLs/images use that configured origin and prefix. `public/.nojekyll` preserves `_next` assets when publishing the export from a dedicated `gh-pages` branch. No custom hosting workflow is added; GitHub still uses its managed Pages deployment workflow. Source PR and main remain separate from the generated publishing branch. Verify direct navigation, assets, CV and 404 on the live domain before announcing completion.

## Data and privacy

`data/portfolio.ts` contains the three approved projects and four cases. Original documentary references remain pinned to audited commit `f108170a748e161ba26dd148421ddd8ad9ee929f`; the new [fact-check dossier](../../AI_EVALUATION_PORTFOLIO/CASE_04_VERUM_FACT_CHECK_RENEWABLES.md) is pinned to `6564b5a8ffed0da4d31988ff0ba27ca839ece986`. The lab reads [canonical fixtures](../../AI_EVALUATION_PORTFOLIO/fixtures.json) during the build, not over a runtime API. Original case documents are linked, not moved or duplicated. `data/case-studies.ts` separates problem, input, process, output, checks and pending validation in all three languages; `data/fact-check.ts` holds the dated source pack and prepared findings.

`data/project-details.ts` holds project narratives and source-backed deliverables. The server-side reader `data/fixtures.ts` supplies existing examples to both the Lab and project pages and fails the build on a missing sample. `data/demos.ts` contains deterministic prompt composition and illustrative training scenarios. Synthetic examples, historical test reports and pending live/human checks remain explicitly distinct.

`profile.publicCv` points to a privacy-minimized Italian PDF in `public/cv/`. The current derivative has no email, phone or mailto link; contact is the approved LinkedIn profile. Metadata was minimized and both pages visually checked. The reviewed hash is in `public/cv/public-manifest.json`. The original private PDF was not modified or added to Git. This is a privacy update, not the pending career-targeted EN/IT rewrite. The download is explicitly labelled as an Italian PDF in every interface language.

No private original PDF, tracker, recruiter message, strategy report or OAuth screenshot belongs in Git. `privacy:check` inspects candidate source files for common secret/contact/identifier patterns and verifies the reviewed PDF hash; it runs before production build and never prints matched values. This is a heuristic gate, not a guarantee about all binary data, Git history, forks or caches. Review the explicit staged file list as well. Existing Git history is not rewritten.

Theme preference is the only browser storage written. Request text, search terms, filters and checkbox state are neither saved nor sent; changing language/reloading clears demo state. Clipboard receives the generated prompt only after an explicit copy action. Next.js telemetry is disabled in development/build scripts.

## Existing product media

`public/media/evaluation-desk.png` is an actual screenshot of the existing manual Evaluation Desk prototype, authored and tested with AI assistance on 14 October 2026. It is not a screenshot of a live VERUM GPT or the new app's future demos. It contains a synthetic reference-based annotation, no private contact information. The existing author/framework license remains at the repository root; code and future asset licensing require explicit review before publication.

## Scope

This branch includes the existing v01/career-pivot ancestry. Keep its review separate from the earlier stacked PRs. Do not merge, rewrite history or deploy this release candidate without the owner's final review. Never modify `gh-pages` by hand or copy private working directories into the export.
