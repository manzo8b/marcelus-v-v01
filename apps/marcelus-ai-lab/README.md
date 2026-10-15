# MARCELUS AI LAB

Phases 2-5: static frontend, source-backed project pages, four complete case studies and interactive demos for Prometeus Marcelus, VERUM and RISTO-LAB. Display name: **Marcelo Fernandez**. Italian subtitle: **Formazione e progetti di workflow AI**, with English and Spanish equivalents. Each project includes its audience, contribution, deliverables mapped to skills, canonical sample comparison, documented iteration and remaining verification. No AI API, visitor account or backend. Published on GitHub Pages with owner approval; see [deployment record](DEPLOYMENT.md).

## Languages and routes

The 12 original English URLs are preserved, with a new fact-check case for 13 English pages. The same pages are available under `/it/` and `/es/`: 39 static routes in total. The language selector preserves the current route and fragment, with a full document load between language layouts. Each successful page has its own server-rendered HTML language and localized content/metadata. The shared static 404 adapts its language after hydration when the host serves it for a localized unknown URL.

English pages live in the URL-neutral `(english)` route group. The localized catch-all reuses the same page implementations with explicit locale parameters. `components/site-layout.tsx` is shared by both root layouts. The pinned Next.js `globalNotFound` experimental option supports a shared 404 across these layouts; its export and unknown-route behavior require testing on the chosen production host before deployment.

Editorial dictionaries fail on missing translations, rather than silently mixing languages. Original Italian evidence, verdict codes, project names and the existing screenshot are intentionally not translated or rewritten. Translations are editorial, not certified translations or new language-validation results.

## Interactive demos

- **Prometeus:** three explicit blueprints compose seven structured sections from a request. This is template composition, not semantic request analysis. Validation covers empty and over-800-character input. Copy and reset are available; a denied clipboard operation has a visible error state.
- **VERUM / Lab:** the default dossier checks four claims in an explicitly invented post about EU renewables in 2024, using two dated Eurostat primary sources. It distinguishes electricity from all energy, percentage points from relative change, and missing causal evidence from a false claim. The documented findings are prepared, not generated live; both sources come from the same institution. An expandable calibration section preserves six review focuses and all nine canonical samples with their original verdicts. No arbitrary text is assessed or automated error-detection claim made.
- **RISTO-LAB:** three illustrative scenarios based on the documented opening, onboarding and complaint cases. Five keyboard-operable views cover SOP, checklist, training, role play and criteria. Checked items and other demo state remain in memory only. These are new illustrative templates, not private-GPT transcripts or certified operational procedures.

## Local development

```sh
npm ci
npm run dev -- --port 3210
```

## Verification and export

```sh
npm run test
npm run typecheck
npm run build
```

The static export is `out/`. The owner authorized public deployment on 15 October 2026, after local review. The GitHub Pages build uses `NEXT_PUBLIC_SITE_ORIGIN=https://manzo8b.github.io NEXT_PUBLIC_BASE_PATH=/marcelus-v-v01 npm run build`. Canonical URLs, language alternates and Open Graph URLs/images use that configured origin and prefix. `public/.nojekyll` preserves `_next` assets when publishing the export from a dedicated `gh-pages` branch. No custom hosting workflow is added; GitHub still uses its managed Pages deployment workflow. Source PR and main remain separate from the generated publishing branch. Verify direct navigation, assets, CV and 404 on the live domain before announcing completion.

## Data and privacy

`data/portfolio.ts` contains the three approved projects and four cases. Original documentary references remain pinned to audited commit `f108170a748e161ba26dd148421ddd8ad9ee929f`; the new [fact-check dossier](../../AI_EVALUATION_PORTFOLIO/CASE_04_VERUM_FACT_CHECK_RENEWABLES.md) is pinned to `6564b5a8ffed0da4d31988ff0ba27ca839ece986`. The lab reads [canonical fixtures](../../AI_EVALUATION_PORTFOLIO/fixtures.json) during the build, not over a runtime API. Original case documents are linked, not moved or duplicated. `data/case-studies.ts` separates problem, input, process, output, checks and pending validation in all three languages; `data/fact-check.ts` holds the dated source pack and prepared findings.

`data/project-details.ts` holds project narratives and source-backed deliverables. The server-side reader `data/fixtures.ts` supplies existing examples to both the Lab and project pages and fails the build on a missing sample. `data/demos.ts` contains deterministic prompt composition and illustrative training scenarios. Synthetic examples, historical test reports and pending live/human checks remain explicitly distinct.

`profile.publicCv` points to an approved public Italian PDF in `public/cv/`. The owner approved retaining email and removing phone; the derivative uses Marcelo Fernandez and English B1. Phone content was redacted, footer names and metadata sanitized, both pages visually checked. The original private PDF was not modified or added to Git. The download is explicitly labeled as an Italian PDF in each interface language. No private original PDF, application tracker or OAuth screenshot is included. The theme preference is the only browser storage written. Request text and checkbox state are neither saved nor sent; changing language/reloading clears demo state. Clipboard receives the generated prompt only after an explicit copy action. Next.js telemetry is disabled in the development/build scripts.

## Existing product media

`public/media/evaluation-desk.png` is an actual screenshot of the existing manual Evaluation Desk prototype, authored and tested with AI assistance on 14 October 2026. It is not a screenshot of a live VERUM GPT or the new app's future demos. It contains a synthetic reference-based annotation, no private contact information. The existing author/framework license remains at the repository root; code and future asset licensing require explicit review before publication.

## Scope

This branch depends on `career-pivot-ai-portfolio`. Keep its PR separate from the earlier portfolio PR. Do not merge or deploy without the owner's separate approval.
