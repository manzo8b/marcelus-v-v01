# Caso 03 - Italian language quality e training

Competenze: adattamento al pubblico, chiarezza delle istruzioni, process documentation e controllo di fatti/condizioni. Demo sintetica nuova, creata con assistenza AI il 14 ottobre 2026, ispirata al modulo M08 RISTO-LAB. Non e un corso erogato a clienti ne una nuova esecuzione del GPT privato.

## Brief

Pubblico: nuovo collaboratore con italiano professionale B1. Compito: trasformare questi fatti in una checklist di massimo quattro punti e 45 parole, con una sola azione principale per punto.

Reference: prima del servizio, controllare bicchieri e tovaglioli; se manca materiale, avvisare il responsabile di turno; iniziare il servizio soltanto dopo il suo controllo finale. Non aggiungere obblighi o certificazioni.

## Variante A

> Occorre ottemperare alla verifica preliminare delle dotazioni di servizio, procedendo alla segnalazione delle eventuali carenze al preposto di turno. L'avvio delle attività deve essere subordinato alla validazione conclusiva delle disponibilità operative da parte del medesimo referente.

Annotazione: lingua grammaticale ma lessico astratto; bicchieri e tovaglioli non sono esplicitati; il formato checklist richiesto manca. **FAIL** per mancata aderenza al formato obbligatorio. La scelta di un tono formale non rende automaticamente le istruzioni adatte al destinatario.

## Variante B

1. Controlla i bicchieri.
2. Controlla i tovaglioli.
3. Se manca materiale, avvisa il responsabile di turno.
4. Inizia il servizio solo dopo il controllo finale del responsabile.

Annotazione: oggetti, condizione e responsabilita sono espliciti; quattro azioni principali; nessun obbligo inventato. **PASS** nella revisione documentale assistita da AI. La comprensione da parte di persone B1 e un'ipotesi da verificare, non un risultato misurato.

## Verifica osservabile

| Requisito | A | B |
| --- | --- | --- |
| Checklist, massimo 4 punti | Non rispettato | 4 punti |
| Massimo 45 parole | Rispettato meccanicamente | Rispettato meccanicamente |
| Bicchieri e tovaglioli espliciti | Mancano | Presenti |
| Segnalare materiale mancante | Presente ma astratto | Presente |
| Controllo finale prima dell'avvio | Presente ma astratto | Presente |
| Linguaggio operativo | Complesso | Semplice; efficacia B1 da testare |

Il [test meccanico](verification.mjs) controlla conteggio e struttura; non attribuisce automaticamente un livello CEFR. Test umano proposto: chiedere a un lettore B1 di indicare cosa controllare, a chi segnalare una mancanza e quando iniziare. Non sono ancora stati raccolti riscontri da partecipanti.

## Fonti

[RISTO-LAB, catalogo modulo M08](../RISTO_LAB/CATALOGO_MODULI_FORMATIVI_V1.md), [report pre-Builder, Test 5](../RISTO_LAB/TEST_REPORT_RISTO_LAB_2026_09_03.md), [batteria V2, casi 22-23](../RISTO_LAB/CASI_TEST_RISTO_LAB_50_V2.md). I test storici restano documenti separati dalla nuova demo.
