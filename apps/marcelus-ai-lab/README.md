# MARCELUS AI LAB

Phases 2-3: local frontend and source-backed project pages for Prometeus Marcelus, VERUM and RISTO-LAB. Each project includes its audience, contribution, deliverables mapped to skills, canonical sample comparison, documented iteration and remaining verification. No AI API, account, backend or public deployment. The lab displays one canonical annotated fixture; it does not evaluate new input. Project-specific interactive demos remain Phase 4 work.

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

`data/project-details.ts` holds project narratives and source-backed deliverables. The server-side reader `data/fixtures.ts` supplies existing examples to both the Lab and project pages and fails the build on a missing sample. Synthetic examples, historical test reports and pending live/human checks remain explicitly distinct.

`profile.publicCv` is null. No private PDF, contacts, application tracker or OAuth screenshot is included. The theme preference is the only browser storage written by this skeleton. Next.js telemetry is disabled in the development/build scripts.

## Existing product media

`public/media/evaluation-desk.png` is an actual screenshot of the existing manual Evaluation Desk prototype, authored and tested with AI assistance on 14 October 2026. It is not a screenshot of a live VERUM GPT or the new app's future demos. It contains a synthetic reference-based annotation, no private contact information. The existing author/framework license remains at the repository root; code and future asset licensing require explicit review before publication.

## Scope

This branch depends on `career-pivot-ai-portfolio`. Keep its PR separate from the earlier portfolio PR. Do not merge or deploy without the owner's separate approval.
