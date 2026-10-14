# Registro delle verifiche portfolio

Data: 14 ottobre 2026. Rubrica v1.1. Provenienza: esempi sintetici, preparazione assistita da AI, revisione documentale del coding agent. Nessun test live dei GPT o giudizio indipendente di un panel umano viene attribuito a questa sessione.

| ID | Materiale osservato | Decisione attesa della revisione documentale | Verifica meccanica |
| --- | --- | --- | --- |
| CULTURE_BAD | Quattro attributi errati e consiglio non supportato | FAIL | Regola errore sostanziale |
| CULTURE_FIXED | Testo corretto con cinque fatti forniti | PASS | Regola senza errori annotati |
| A | Evento: fatti preservati | PASS | Massimo 20 parole |
| B | Evento: scarsita aggiunta | FAIL | Massimo 20 parole; gate sostanziale |
| C | Obbligo trasformato in consiglio | FAIL | Massimo 20 parole; gate sostanziale |
| D | Fatti preservati, accento mancante | NEEDS REVISION | Massimo 20 parole; errore minore |
| B1_A | Testo formale senza checklist | FAIL | Massimo 45 parole; gate di formato |
| B1_B | Checklist di quattro azioni | PASS | Massimo 45 parole; quattro punti e termini richiesti |
| UNKNOWN | Prezzo senza reference | NOT VERIFIABLE | Gestione evidenza mancante |

Esecuzione riproducibile: `node AI_EVALUATION_PORTFOLIO/verification.mjs`. Eseguita il 14 ottobre 2026: 9 fixture controllate senza errori; conteggi A=12, B=11, C=9, D=12, B1_A=36, B1_B=28 parole. Il programma verifica le regole su annotazioni predisposte e vincoli osservabili. Non scopre autonomamente gli errori semantici; non misura accuracy, consistenza di annotatori o livello linguistico CEFR.

Prototipo verificato in Chrome headless su desktop 1440px e mobile 390px: campi obbligatori, precedenza dell'errore sostanziale, evidenza mancante, salvataggio/ripresa bozza e download del report. Nessun errore JavaScript osservato; nessun overflow orizzontale al viewport mobile testato. Questi controlli del software non sono feedback di utilizzatori.

## Provenienza storica

- [Prometeus V2](../PROMETEUS_MARCELUS/training/REPORT_TEST_REALI_30_V2.md): un caso completo e batteria diagnostica compatta per 02-30.
- [VERUM](../FACT_CHECK_INDIPENDENTE/TEST_REPORT_VERUM_2026_08_06.md): ambiguita osservata e correzione documentata.
- [RISTO-LAB](../RISTO_LAB/TEST_REPORT_RISTO_LAB_2026_09_03.md): report interno pre-Builder; non 50 test live.

## Verifiche ancora da eseguire

- Regressione live del caso ambiguo VERUM, con output prima-dopo e versione.
- Secondo valutatore indipendente per le annotazioni linguistiche.
- Comprensione delle istruzioni da parte di persone B1.
- Test di utilita del prototipo con 3-5 persone. Nessun partecipante o risultato utente e ancora registrato.
