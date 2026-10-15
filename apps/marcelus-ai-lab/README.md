# MARCELUS AI LAB

Phases 2-4: local frontend, source-backed project pages and interactive demos for Prometeus Marcelus, VERUM and RISTO-LAB. Display name: **Marcelo Fernandez**. Each project includes its audience, contribution, deliverables mapped to skills, canonical sample comparison, documented iteration and remaining verification. No AI API, account, backend or public deployment.

## Languages and routes

The 12 English URLs are preserved. The same pages are available under `/it/` and `/es/`: 36 static routes in total. The language selector preserves the current route and fragment, with a full document load between language layouts. Each successful page has its own server-rendered HTML language and localized content/metadata. The shared static 404 adapts its language after hydration when the host serves it for a localized unknown URL.

English pages live in the URL-neutral `(english)` route group. The localized catch-all reuses the same page implementations with explicit locale parameters. `components/site-layout.tsx` is shared by both root layouts. The pinned Next.js `globalNotFound` experimental option supports a shared 404 across these layouts; its export and unknown-route behavior require testing on the chosen production host before deployment.

Editorial dictionaries fail on missing translations, rather than silently mixing languages. Original Italian evidence, verdict codes, project names and the existing screenshot are intentionally not translated or rewritten. Translations are editorial, not certified translations or new language-validation results.

## Interactive demos

- **Prometeus:** three explicit blueprints compose seven structured sections from a request. This is template composition, not semantic request analysis. Validation covers empty and over-800-character input. Copy and reset are available; a denied clipboard operation has a visible error state.
- **VERUM / Lab:** six review focuses explore all nine canonical samples and reveal existing AI-assisted annotations. No arbitrary text is assessed; no invented scores or automated error-detection claim. Missing-reference and minor-revision examples retain their original verdicts.
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

The static export is `out/`. A future project-site build can set `NEXT_PUBLIC_BASE_PATH=/marcelus-v-v01`. Verify direct navigation, assets and refresh under that path before publishing. No hosting workflow is enabled in this phase.

## Data and privacy

`data/portfolio.ts` contains the three approved projects and documentary references pinned to the audited portfolio commit. The lab reads [canonical fixtures](../../AI_EVALUATION_PORTFOLIO/fixtures.json) during the build, not over a runtime API. Original case documents are linked, not moved or duplicated.

`data/project-details.ts` holds project narratives and source-backed deliverables. The server-side reader `data/fixtures.ts` supplies existing examples to both the Lab and project pages and fails the build on a missing sample. `data/demos.ts` contains deterministic prompt composition and illustrative training scenarios. Synthetic examples, historical test reports and pending live/human checks remain explicitly distinct.

`profile.publicCv` is null. No private PDF, contacts, application tracker or OAuth screenshot is included. English remains B1. The theme preference is the only browser storage written. Request text and checkbox state are neither saved nor sent; changing language/reloading clears demo state. Clipboard receives the generated prompt only after an explicit copy action. Next.js telemetry is disabled in the development/build scripts.

## Existing product media

`public/media/evaluation-desk.png` is an actual screenshot of the existing manual Evaluation Desk prototype, authored and tested with AI assistance on 14 October 2026. It is not a screenshot of a live VERUM GPT or the new app's future demos. It contains a synthetic reference-based annotation, no private contact information. The existing author/framework license remains at the repository root; code and future asset licensing require explicit review before publication.

## Scope

This branch depends on `career-pivot-ai-portfolio`. Keep its PR separate from the earlier portfolio PR. Do not merge or deploy without the owner's separate approval.
