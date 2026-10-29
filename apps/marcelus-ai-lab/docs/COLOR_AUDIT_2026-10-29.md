# MARCELUS AI LAB — Audit cromatico e intervento v2026.10.29

**Ambito:** `https://manzo8b.github.io/marcelus-v-v01/it/` e corrispondenti pagine EN/ES. Intervento solo visivo; niente nuovi servizi, prezzi, formulazioni di esperienza o modifiche editoriali.

## Diagnosi
Il vecchio sito aveva una gerarchia quasi esclusivamente bianco/grigio, scarsa differenziazione delle schede e pulsanti poco incisivi. La homepage V2 esponeva una base viola molto tenue e card con una fascia di 3 px. Il tema scuro era già disponibile e andava mantenuto.

## Cinque colori con uno scopo
| Accento | Light | Dark | Funzione |
| --- | --- | --- | --- |
| Blu | `#244F9B` | `#AEC6FF` | Navigazione, evidenze, conoscenza |
| Petrolio | `#0C615D` | `#8EE1CF` | Metodo, operatività, CTA |
| Terracotta | `#B13F28` | `#FFAD92` | Casi, editorialità |
| Viola | `#67439A` | `#D4C0FF` | Prompt, riflessione, AI |
| Ambra | `#7B4B10` | `#F6D18A` | Verifica, requisiti, cautela |

I colori scuri sono stati controllati con rapporto di contrasto WCAG AA 4,5:1 su bianco/avorio; gli accenti chiari risultano leggibili sulle superfici scure principali. Colore + bordo + titolo forniscono segnali ridondanti.

## Area interessata
- Barra superiore, link attivi, toggle tema e selezione lingua.
- Hero Home V2: gradiente blu/viola/terracotta, titolo viola, CTA petrolio, esempio a più colori.
- Home: quattro progetti in tonalità diverse, stati WIP, studi di caso, quattro fasi del metodo, Risorse, Skill Agensi e contatti.
- Pagine progetti e studi di caso: intestazioni, schede, prove documentali, sezioni, note.
- Library, Evaluation Lab, risorse e contatti: pulsanti, controlli selezionati, pannelli e microfeedback.
- Tema scuro con superfici profonde e accenti leggibili; stampa e reduced-motion.
- Nessuna modifica a percorsi di navigazione, contenuti, PDF CV, moduli di valutazione o materiale legale.

## Implementazione
L'overlay di stile globale risiede in `apps/marcelus-ai-lab/app/learning-colors.css` ed è caricato **dopo** `globals.css` in `components/site-layout.tsx`. Le varianti specifiche della Home V2 sono aggiunte al modulo `components/home-v2.module.css`, in modo da conservarne layout e classi già approvate.

## Verifiche e rilascio
- `npm test`: nessuna regressione funzionale dei test esistenti e check WCAG AA della palette.
- `npm run typecheck`, `npm run build`: export Next con privacy gate.
- Chromium reale su rotte IT/EN/ES, selezione tema scuro, differenziazione cromatica e visualizzazione mobile.
- La pubblicazione è **protetta dal gate** del workflow `publish-marcelus-lab.yml`: il commit finale di merge deve includere `[publish-site]`. Solo dopo il successo del workflow e del deploy su `gh-pages` si dichiara la modifica online.
- Il collaudo estetico umano resta distinto dai check tecnici.
