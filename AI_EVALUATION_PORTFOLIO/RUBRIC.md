# Rubrica di valutazione v1.1

Data: 14 ottobre 2026. Ambito: risposta candidata confrontata con un'istruzione e fatti di riferimento forniti. Voti alti indicano qualita migliore per tutti i criteri; per hallucination, 5 significa nessuna aggiunta non supportata.

| Criterio | 1 | 3 | 5 |
| --- | --- | --- | --- |
| Instruction adherence | Requisito obbligatorio violato | Formato da rifinire, requisiti sostanziali rispettati | Tutti i requisiti rispettati |
| Factual consistency | Fatti sostanziali alterati | Precisione da migliorare senza contraddizioni sostanziali | Fatti e condizioni preservati |
| Supported content | Aggiunte sostanziali non supportate | Formula accessoria da correggere | Nessuna aggiunta fattuale non supportata |
| Italian language quality | Errori che ostacolano la comprensione | Comprensibile ma poco naturale o poco adatto al pubblico | Corretto, naturale e adatto al destinatario |
| Tone and usefulness | Tono o comunicazione compromettono il compito | Tono adeguato, chiarezza migliorabile | Tono adeguato e azione chiara |

2 e 4 indicano livelli intermedi motivati. Il voto non sostituisce l'evidenza: indicare claim, requisito e passaggio interessato. Quando manca un reference necessario, il criterio fattuale rimane `NOT VERIFIABLE`; non assegnare un 3 come valore medio di comodo. La qualita linguistica resta valutabile separatamente.

## Regole decisionali

Applicare nell'ordine:

1. Un errore sostanziale dimostrato nei fatti, un'aggiunta sostanziale non supportata o un requisito obbligatorio violato implica **FAIL**, anche se altre parti non sono verificabili.
2. In assenza di un errore sostanziale dimostrato, evidenza indispensabile insufficiente implica **NOT VERIFIABLE**. Spiegare quale evidenza manca.
3. Fatti e requisiti sostanziali rispettati, con un problema minore di lingua/stile/formato, implica **NEEDS REVISION**.
4. Nessuna violazione o problema rilevato implica **PASS**.

Obbligatori sono i requisiti formulati nell'istruzione: per esempio non aggiungere fatti, preservare una condizione di accesso o rispettare il massimo di parole. Un errore ortografico isolato correggibile puo essere minore; trasformare "obbligatoria" in "consigliata" e un errore sostanziale. Le linee guida del datore di lavoro prevalgono su questa rubrica in un assessment.

Non calcolare una media per neutralizzare un errore fattuale. Il verdetto discende dalla gravita e dalla disponibilita dell'evidenza, non dalla media dei voti.

## Formato annotazione

```text
Claim / requisito:
Passaggio della risposta:
Fatto o istruzione di riferimento:
Problema osservato:
Gravita: sostanziale / minore / non verificabile
Correzione:
Verdetto:
```

Adattamento dei criteri presenti nella [rubrica Prometeus](../PROMETEUS_MARCELUS/training/rubrica_valutazione.md), nel [sistema qualita](../PROMETEUS_MARCELUS/docs/10_qualita/SISTEMA_QUALITA_PROMETEUS.md) e nel [metodo VERUM](../FACT_CHECK_INDIPENDENTE/METODO_FACT_CHECKING.md). Le soglie storiche di quei documenti rimangono separate.
