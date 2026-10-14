# Caso 01 - VERUM-style output evaluation

Competenze: factual consistency, unsupported content detection, message drift, structured feedback. Fonte: demo sintetica del portfolio pratico, ripresa e corretta il 14 ottobre 2026. Non e un test live VERUM.

## Istruzione e reference

Scrivere un breve testo informativo in italiano per i visitatori, usando soltanto questi fatti:

- Centro culturale aperto da martedi a domenica, 09:00-19:00.
- Chiuso lunedi.
- Biglietto ordinario EUR 12.
- Ingresso gratuito per i minori di 18 anni.
- Ultimo ingresso alle 18:00.

## Risposta candidata

> Il centro culturale è aperto tutti i giorni dalle 9:00 alle 19:00. Il biglietto costa 15 euro, mentre i bambini sotto i 12 anni entrano gratuitamente. L'ultimo ingresso è consentito alle 18:30. Ti consigliamo di arrivare presto per evitare lunghe code.

## Annotazione per claim

| Passaggio | Reference | Problema | Gravita |
| --- | --- | --- | --- |
| tutti i giorni | Chiuso lunedi | Cambia la condizione di apertura | Sostanziale |
| 15 euro | EUR 12 | Prezzo errato | Sostanziale |
| sotto i 12 anni | Minori di 18 anni | Cambia la fascia ammessa alla gratuita | Sostanziale |
| 18:30 | 18:00 | Ultimo ingresso errato | Sostanziale |
| evitare lunghe code | Nessun dato sulle code | Aggiunge una previsione non supportata | Sostanziale nel compito a reference chiuso |

Gli orari 09:00-19:00 sono preservati. La frase e leggibile, ma la buona lingua non compensa gli errori fattuali. Verdetto secondo la [rubrica v1.1](RUBRIC.md): **FAIL**.

| Criterio | Voto | Evidenza |
| --- | --- | --- |
| Instruction adherence | 1/5 | Aggiunge informazioni non fornite |
| Factual consistency | 1/5 | Quattro attributi sostanziali alterati |
| Supported content | 1/5 | Previsione sulle code non supportata |
| Italian language quality | 4/5 | Testo comprensibile; giudizio qualitativo assistito da AI |
| Tone and usefulness | 3/5 | Tono adeguato, informazioni inaffidabili |

## Feedback e correzione

Preservare giorni, prezzo, fascia di gratuita e ultimo ingresso. Eliminare il consiglio sulle code. Non introdurre nuove condizioni.

> Il centro culturale è aperto da martedì a domenica dalle 09:00 alle 19:00 ed è chiuso il lunedì. Il biglietto ordinario costa 12 euro; l'ingresso è gratuito per i minori di 18 anni. L'ultimo ingresso è alle 18:00.

Controllo documentale della correzione: i cinque fatti sono presenti e non sono state aggiunte condizioni. Questo e un controllo su un esempio chiuso, non una misura di accuratezza del GPT.

## Collegamento alla correzione storica VERUM

Nel [report del 6 agosto](../FACT_CHECK_INDIPENDENTE/TEST_REPORT_VERUM_2026_08_06.md), VERUM aveva interpretato "domande" come domande di asilo e dato un verdetto troppo netto. Il [protocollo ambiguita](../FACT_CHECK_INDIPENDENTE/GPT_BUILDER_ISTRUZIONI_V1.md) documenta la correzione delle istruzioni. Una nuova conversazione live prima-dopo non e allegata: resta da eseguire e non viene presentata come retest completato.
