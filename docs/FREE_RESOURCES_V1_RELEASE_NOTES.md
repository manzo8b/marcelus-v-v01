# MARCELUS AI LAB — Free Resources v1.0

**Scope:** public educational templates authored for this release. No private files or third-party teaching archives were imported.

## Download catalogue

| Resource | Formats | Languages | Limitations |
| --- | --- | --- | --- |
| AI Response Review Checklist | Editable plain text | EN, IT, ES | Compares against supplied references; no independent live fact-checking |
| AI Instruction Design Worksheet | Editable plain text | EN, IT, ES | Clearer instructions do not guarantee truthful output |
| 60-minute Lesson Plan | Editable CSV | EN, IT, ES | A blank plan, not a validated or certified curriculum |

Location: `apps/marcelus-ai-lab/public/resources/`, nine files. Exposed at `/resources/`, `/it/resources/` and `/es/resources/`.

All are freely downloadable without login, personal information or external dependencies. These are original templates meant for adaptation. No sensitive RISTO-LAB files, participant records, private regulatory documents, copyrighted slide decks or third-party illustrations are included.

The templates are guidance, not medical, legal or food-safety certification. Users must verify important information and official regulations with current primary sources.

### Integrity checks

Automated `tests/free-resources.test.ts` ensures all nine downloads exist, do not contain personal machine paths, and that all lesson-plan variants add up to 60 planned minutes.

### Site implementation

- `components/free-resources.tsx`: static trilingual resource catalogue and native download links
- `components/free-resources.module.css`: responsive styles using existing theme tokens
- `app/(english)/resources/page.tsx`: English static route
- `app/[locale]/[[...segments]]/page.tsx`: Italian and Spanish static routes
- Navigation: free resources top-level link; Home: compact CTA
- `app/sitemap.ts`: indexable URLs with canonical and hreflang

**Villa All'Ombra dei Pitosfori** is independently presented as a completed website project with a link to the actual site, but no unsupported visitor, booking or technology-performance claims.

### Release protocol

1. Typecheck, test, privacy gate and build must all pass.
2. Merge only the reviewed source branch.
3. GitHub Pages is published from its **generated** `gh-pages` branch, not automatically from `main`.
4. Before telling visitors downloads are live, validate the public route and all nine download URLs.
5. Do not copy private folders or modify the Instructor Hub.
