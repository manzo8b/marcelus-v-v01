# MARCELUS AI LAB — Visual Identity & Home V2 (prototype)

**Status:** DESIGN PROTOTYPE — not approved for production  
**Branch:** `feat/marcelus-home-v2-design-prototype`  
**Site:** Next.js static export to GitHub Pages; public `main` and `gh-pages` remain unchanged.

## Editorial direction

**Positioning:** an independent digital lab developing practical AI-evaluation methods, instruction frameworks and professional training tools.

**Tone:** technically accurate, immediately understandable, concrete, unpretentious. A visitor should understand the practical use of each project without understanding software development jargon.

### Copy rules

1. Say **what a tool helps a person do** before saying how it works.
2. Introduce specialist terms only with immediate practical context. Example: "rubrica di valutazione" means a set of criteria for checking the result.
3. Keep every claim verifiable. Distinguish prototype, scenario, human test and deployed product.
4. Prefer "Progetto", "Esplora", "Come funziona", "Leggi il caso" over "rivoluzionario", "innovativo" or unsupported performance claims.
5. Separate the two VERUM workflows: evidence-based claim checking versus supplied-reference AI output review. Do not promise live universal detection.
6. The RISTO-LAB Instructor Hub remains a separate **local prototype**. Never link to `localhost` from public pages.
7. **OIKO and HACCP SMART: WORK IN PROGRESS**. No test-now CTA or release/production claims until separately approved and verified.
8. **S-COMODO**: independent editorial identity; do not merge editorial opinions into the AI lab.
9. **REGULA** and other private-source projects: exclude until an explicit publication decision.
10. No invented clients, logos, testimonials, percentages, traffic numbers, or partnership claims.

### Language examples

| Unhelpful | Preferred |
| --- | --- |
| "AI-powered disruptive innovation" | "Strumenti per controllare informazioni e migliorare il lavoro" |
| "Our sophisticated LLM orchestration platform" | "Un metodo per trasformare richieste complesse in istruzioni verificabili" |
| "VERUM detects all hallucinations" | "VERUM confronta contenuti con fonti o riferimenti forniti e ne documenta i limiti" |
| "RISTO-LAB available now" | "L'area docente è in prova locale, non è ancora pubblica" |
| "HACCP-compliant digital system" | "Registri digitali in sviluppo; non sostituiscono il piano HACCP validato" |

## Visual references

- Template 1 (soft, editorial, light glass): baseline for spacing, elevated surfaces and the Hero.
- Template 3 (clear project gallery): layout for Featured Work and project thumbnails.
- Template 2 (lively call-to-action): borrow CTA clarity, **not** saturated color or decorative clutter.
- Template 4 (direct navigation): borrow legibility, **not** generic agency claims.

Reference skill: [Emil Kowalski — apple-design](https://github.com/emilkowalski/skills/blob/main/skills/apple-design/SKILL.md). Use its principles selectively: immediate interaction feedback, spatial consistency, restrained layers, legible type and reduced-motion. It is an independent reference, not an official Apple component library. Avoid gesture physics or new animation dependencies without a real need.

### Palette (candidate)

| Token | Hex | Role |
| --- | --- | --- |
| Porcelain | `#F6F7FB` | Soft canvas and tinted sections |
| Midnight | `#152034` | Primary text and solid CTA |
| Slate | `#506075` | Secondary copy |
| Iris | `#7768CA` | Quiet brand accent |
| Teal | `#246D80` | Topic and evidence accents |
| White | `#FFFFFF` | Cards |

For dark theme, scoped v2 colors change to accessible equivalents. No dedicated new font assets are required: system font stack first.

### Interaction

- 44px+ primary targets; clear keyboard focus.
- Small elevation on hover, no distracting loops or parallax.
- `prefers-reduced-motion`, `prefers-reduced-transparency`, `prefers-contrast` fallbacks.
- Semantic headings, visible language navigation via existing shared header.
- No motion/decorative graphics that displace content or cause horizontal overflow.
- Do not simulate a product screenshot. The Hero's process graphic is a **conceptual diagram**, not a functional dashboard.

## Information architecture

1. **Home Hero:** name/mission, why these projects matter and direct CTAs.
2. **Featured Projects:** VERUM, Prometeus Marcelus, RISTO-LAB. These link to existing localized project routes.
3. **Products in development:** OIKO, HACCP SMART. Status explicit; **no product activation links**.
4. **Editorial work:** lightweight mention of S-COMODO, independent identity.
5. **Documented cases:** three links to existing case studies, including the renewable-energy fact-check dossier.
6. **Method:** understand, design, check, improve.
7. **About & Contact:** proven hospitality/training background, actual LinkedIn contact and existing approved public CV.

The Home introduces the ecosystem, not an exhaustive feature inventory. Detailed project cards can follow in a later, separately approved phase.

## Technical isolation

- New `components/home-v2.tsx`: static, localized home content.
- New `components/home-v2.module.css`: scoped responsive styles.
- `app/(english)/page.tsx` calls `HomeV2`, reused by the localized catch-all that already consumes the English page implementations.
- Shared navigation, footer, project data, dictionaries, SEO, privacy gates and routes remain unchanged.
- No new npm dependencies, backend, cookies, tracking, API, authentication or content import.
- The existing `/media/og-*.png` files are used as product visuals. Review in-browser cropping; do not portray the card graphics as UI screenshots.
- No public deployment and no merge of this branch without approval.

## Acceptance gates (before merging)

1. Run `npm ci`, `npm run typecheck`, `npm run test`, `npm run privacy:check`, `npm run build` in `apps/marcelus-ai-lab`.
2. Compare the English, Italian and Spanish Home: content completeness, diacritics, buttons and SEO behavior. Existing translations for non-Home pages must remain valid.
3. Inspect at 375px, 768px and 1440px. Check no overflow, clipping or unreadable card text.
4. Validate light and dark themes, keyboard navigation, skip link, focus outlines and reduced-motion.
5. Click every link and verify source pages; verify OIKO and HACCP SMART are **not** falsely marked public.
6. Verify no source/private RISTO-LAB files or participant/attendance data were committed.
7. Obtain human approval of wording, color system and product hierarchy.
8. Only after approval prepare an isolated preview build, then plan a controlled merge/deploy separately.

## Explicitly not done

- No production launch, domain changes, social announcements or GitHub Pages publishing.
- No claim that usability tests, Lighthouse scores, accessibility audit or builds have passed: these require execution.
- No fabricated headshot, company partnerships, review counts, testimonials or contact email.

**Gate:** HUMAN DESIGN REVIEW — PENDING.
