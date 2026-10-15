# Public release: 15 October 2026

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
