# Public releases

## V0.2.1 - VERUM Dual-Layer technique

Owner-authorized on 20 October 2026. Adds a dedicated EN/IT/ES technique section at `/projects/verum/#double-layer`, separating supplied evidence, linguistic framing and rewrite fidelity. Three sentence tabs and a disclosed editorial comparison task do not perform live model inference or external fact-checking. No numerical bias-reduction or annotator-agreement result is claimed.

32 automated tests, typecheck and static build; additional browser checks cover sentence controls, keyboard navigation, stable panel layout, localization and 320/390/1024/1440 px views. Existing content routes remain unchanged. Public source explanation: [VERUM Doppio Strato](../../AI_EVALUATION_PORTFOLIO/VERUM_DOPPIO_STRATO.md). Original attachments, private materials and the separate unpublished skill package are excluded; current public CV hash is unchanged. The deployment manifest identifies the actual merged source revision.

## V0.2 - 20 October 2026

The owner approved the reviewed V0.2 portfolio, GitHub and LinkedIn updates. Production provenance is recorded in [deployment.json](https://manzo8b.github.io/marcelus-v-v01/deployment.json); it identifies the exact source commit, version and build environment.

The release adds the searchable Prometeus library (2060 historical entries, 26 areas), six separately labelled editorial templates, recruiter-first navigation, updated social previews, sitemap, minimal Person JSON-LD and a pre-build privacy gate. There is no analytics, live inference, new account or automatic job application.

The current public CV is privacy-minimized: no direct email, phone, mailto link or embedded attachment. Its reviewed SHA-256 is `c737892d5aeec7ffc479a72769c750e235899a1343994145ac7aa725b3bc2189`. Personal originals and private strategy/application files remain outside Git. This does not erase the older CV from existing Git history or external caches.

Release verification includes 29 automated tests, typecheck, production build, nine mechanical fixture checks and 168 route/viewport combinations on the 42 content pages in three languages. The eight local static Lighthouse samples scored Performance 92-100 and the other categories 100; these are local lab measurements, not field data or accessibility certification. Post-deployment checks must verify the public version, source hash, routes, assets, library interactions and actual CV hash.

Source branches are integrated using normal merges with their history preserved. The `gh-pages` tree is produced exclusively from the reviewed static export and machine-generated provenance; old generated trees remain recoverable through Git history. No force-push, history rewrite or private report upload is permitted.

## Historical release: 15 October 2026

Owner-authorized GitHub Pages publication, without paid services or additional OAuth scopes.

- [Italian portfolio](https://manzo8b.github.io/marcelus-v-v01/it/)
- [English portfolio](https://manzo8b.github.io/marcelus-v-v01/)
- [Spanish portfolio](https://manzo8b.github.io/marcelus-v-v01/es/)
- [Public Italian CV](https://manzo8b.github.io/marcelus-v-v01/cv/CV_Marcelo_Fernandez_IT.pdf)

## Release identity

Application source: `56f8b045fae8a17a16a4c15a6d2a52b6c2ad31d8` on `feat/marcelus-ai-lab-v01`.
Generated publishing branch: `gh-pages`, commit `6eea1ff08d0449379d48cfd12ee724eb61cccd0e`.
Deployment: [successful GitHub Pages run](https://github.com/manzo8b/marcelus-v-v01/actions/runs/38741914015).
Public provenance: [deployment manifest](https://manzo8b.github.io/marcelus-v-v01/deployment.json).

Pages serves `/` of the generated branch, with `.nojekyll`, custom 404 and HTTPS enforcement. Main was not changed or merged. Source PR remains draft and separate from generated files. No custom workflow file was added; GitHub manages its own Pages build/deploy workflow.

## Verification

22 local tests, typecheck and production export passed. Canonical fixture verification passed for nine samples. Playwright checked 39 pages at 1440/1024/768/390 px in development, local static export and the public HTTPS site: 156 route/viewport combinations per mode. Public checks included canonical URLs, three language alternates per page, Open Graph URLs, all demo interactions, language/theme/hash preservation, image loading, 34 internal URLs, localized custom 404 and actual CV download/hash. No page errors or third-party runtime requests were observed in tested flows. HTTP redirects to HTTPS.

Additional local checks covered 320/360 px layouts and 24 palette contrast pairs (minimum 5.52:1), with visual screenshot review. This is not a full WCAG audit, screen-reader certification, performance benchmark or live-GPT validation. No independent B1 participant or annotator study is claimed.

CV SHA256: `bc2f49170713a124ccd24701fe19e04c98ebedf076dbbfa08320fe9b2dcbb04d`. Only the approved Italian derivative is public: email retained, phone redacted, Marcelo Fernandez, English B1; original private PDF unchanged and excluded.

## Future updates and rollback

Build an approved source revision with:

```sh
npm ci
npm run test
npm run typecheck
NEXT_PUBLIC_SITE_ORIGIN=https://manzo8b.github.io NEXT_PUBLIC_BASE_PATH=/marcelus-v-v01 npm run build
```

Review `out/`, then publish only the generated export to `gh-pages` and record the source SHA. Do not copy workspace/private files or merge generated files into main. Updates to the source branch alone do not publish. Recheck direct navigation, all languages, PDF, canonical URLs and custom 404 after every release. Keep `.nojekyll` so `_next` remains served.

For rollback, restore a previously verified generated tree with a new commit on `gh-pages`, preserving its history; do not force-push. To withdraw the site, disable Pages in repository settings without deleting the source repository or personal originals. Do not enable paid services, broaden permissions or change the repository's existing licenses without the owner's request.
