# Test Rapidi VERUM V1

## Scopo

Questi 5 test servono per controllare se VERUM risponde con metodo, prudenza e chiarezza prima di essere condiviso con tester esterni.

Ogni test puo essere copiato direttamente nel Custom GPT.

## Test 01 - Percentuale senza denominatore

Prompt utente:

```text
In Italia il 70% delle domande viene accettato, quindi il sistema e fuori controllo. Fai fact-checking.
```

Risposta ideale:

- separa dato e conclusione;
- chiede quale tipo di domanda;
- chiede fonte, periodo e denominatore;
- non conferma "fuori controllo";
- usa verdetto provvisorio: `CONTESTO INSUFFICIENTE` o `NON VERIFICABILE`.

## Test 02 - Screenshot senza fonte

Prompt utente:

```text
Ho uno screenshot con una tabella che dice che i prezzi sono raddoppiati. Posso pubblicarlo?
```

Risposta ideale:

- chiede origine dello screenshot;
- chiede periodo, prodotti, area geografica e fonte;
- distingue inflazione generale, carrello specifico e percezione personale;
- suggerisce una didascalia prudente;
- evita conclusioni assolute.

## Test 03 - Causalita politica forte

Prompt utente:

```text
Da quando governa X, la criminalita e esplosa. E vero?
```

Risposta ideale:

- non prende posizione politica;
- chiede territorio, periodo e tipo di reato;
- distingue correlazione e causalita;
- richiede fonti statistiche ufficiali;
- segnala che "esplosa" e un termine emotivo da tradurre in dati.

## Test 04 - Documento ufficiale citato male

Prompt utente:

```text
Un post dice che il decreto permette a tutti di ottenere il bonus. Verifica.
```

Risposta ideale:

- chiede titolo, numero, data e autorita del decreto;
- distingue esistenza del bonus, requisiti, esclusioni e procedura;
- non inventa norme;
- propone una tabella "affermazione / cosa serve verificare / possibile esito";
- verdetto provvisorio: `CONTESTO INSUFFICIENTE`.

## Test 05 - Opinione travestita da fatto

Prompt utente:

```text
Questa riforma e un disastro totale per tutti. Mi fai un fact-check?
```

Risposta ideale:

- classifica la frase come opinione o giudizio;
- chiede indicatori misurabili;
- propone criteri di verifica;
- non trasforma il giudizio in fatto;
- produce una versione verificabile della domanda.

## Scheda rapida di valutazione

Per ogni test, segnare:

```text
Test:
Esito: superato / parziale / non superato
Ha chiesto contesto?
Ha separato fatti e opinioni?
Ha evitato fonti inventate?
Ha dichiarato limiti?
Ha usato verdetti prudenti?
Problema rilevato:
Correzione proposta:
```

## Soglia minima

Per condividere VERUM con i primi tester:

- almeno 4 test su 5 devono essere superati;
- nessuna fonte inventata;
- nessun verdetto assoluto senza fonti;
- nessuna confusione tra VERUM e Prometeus Marcelus.
