# AI Evaluation Portfolio

Marcelo Fernandez Caballero. Tre esempi di content evaluation, prompt design e adattamento di istruzioni per la formazione. Portfolio personale, con esempi sintetici assistiti da AI e revisione documentale del coding agent; non esperienza professionale retribuita come annotator o evaluator.

## I tre casi

| Caso | Attivita | Evidenza |
| --- | --- | --- |
| [01 - Output evaluation](CASE_01_VERUM_OUTPUT_EVALUATION.md) | Individuare fatti alterati e contenuti non supportati; produrre una correzione | Reference, risposta candidata, annotazioni per claim, decisione |
| [02 - Rubric design](CASE_02_PROMETEUS_RUBRIC_DESIGN.md) | Trasformare una richiesta vaga in istruzioni di valutazione | Prompt, regole di gravita, casi di calibrazione |
| [03 - Language quality](CASE_03_LANGUAGE_QUALITY.md) | Distinguere correttezza dei fatti da chiarezza e adeguatezza al destinatario | Istruzione B1, confronto di due varianti, checklist osservabile |

La costruzione delle istruzioni e delle rubriche si collega ai miei progetti Prometeus Marcelus, VERUM e RISTO-LAB. La preparazione di questi casi usa gli esempi del mio portfolio pratico e un nuovo esercizio sintetico B1. Non sono trascrizioni di nuove conversazioni con i GPT live.

## Come leggere le prove

1. Leggere istruzione e fatti di riferimento.
2. Confrontare la risposta candidata con ogni requisito.
3. Leggere l'annotazione e il motivo della decisione.
4. Consultare [RUBRIC.md](RUBRIC.md) e [TEST_LOG.md](TEST_LOG.md).

Il file [fixtures.json](fixtures.json) e la fonte unica delle demo e delle etichette attese. [verification.mjs](verification.mjs) controlla regole e vincoli meccanici: non misura l'accuratezza di un LLM e non sostituisce un giudizio linguistico indipendente.

## Prototipo

[Evaluation Desk](prototype/index.html) e un prototipo locale per annotare una risposta rispetto a fatti forniti, assegnare voti e registrare un verdetto con evidenze. Il contenuto non viene inviato a un modello o a un servizio esterno. Si puo aprire il file HTML direttamente; il repository GitHub non esegue il prototipo nella vista del codice.

## Fonti canoniche e limiti

- [VERUM: metodo](../FACT_CHECK_INDIPENDENTE/METODO_FACT_CHECKING.md) e [test sull'ambiguita](../FACT_CHECK_INDIPENDENTE/TEST_REPORT_VERUM_2026_08_06.md).
- [Prometeus: rubrica 1-5](../PROMETEUS_MARCELUS/training/rubrica_valutazione.md), [sistema qualita](../PROMETEUS_MARCELUS/docs/10_qualita/SISTEMA_QUALITA_PROMETEUS.md) e [istruzioni V5](../PROMETEUS_MARCELUS/gpt_builder/ISTRUZIONI_CUSTOM_GPT_V5.md).
- [RISTO-LAB: catalogo training](../RISTO_LAB/CATALOGO_MODULI_FORMATIVI_V1.md) e [report pre-Builder](../RISTO_LAB/TEST_REPORT_RISTO_LAB_2026_09_03.md).

La rubrica di questa vetrina riguarda output vincolati a reference espliciti. Non riscrive gli score dei report storici. Il report Prometeus riguarda V2, non una nuova verifica V5. I 50 casi RISTO-LAB sono una batteria predisposta, non 50 esecuzioni live completate. Le fonti politiche/storiche di VERUM non sono state riverificate in questa demo.

Da raccogliere successivamente: regressione live del caso ambiguo VERUM, secondo valutatore per la qualita linguistica e feedback di 3-5 utilizzatori del prototipo.
