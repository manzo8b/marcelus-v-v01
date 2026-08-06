# Grafico Riassuntivo VERUM V1

## Scopo

Il grafico riassuntivo serve a rendere un fact-check piu leggibile senza trasformarlo in una sentenza visiva.

Deve aiutare l'utente a capire subito:

- quanto il contenuto e verificabile;
- quali parti sono fattuali;
- quali parti sono opinioni o interpretazioni;
- quali fonti mancano;
- quanto e alto il rischio di contenuto fuorviante.

## Regola principale

Il grafico deve essere verificabile.

Non deve essere una immagine decorativa.

Non deve suggerire certezza quando il report contiene dubbi, fonti mancanti o ipotesi.

## Formato base consigliato

```text
## Grafico riassuntivo verificabile

Affermazioni verificate   3/7  ███░░░░
Affermazioni non verif.   2/7  ██░░░░░
Opinioni/giudizi          2/7  ██░░░░░
Qualita fonti             2/5  ██░░░
Rischio fuorviante        4/5  ████░

Verdetto complessivo: FUORVIANTE / DA VERIFICARE
Motivo: il contenuto unisce dati parziali, linguaggio emotivo e conclusioni non dimostrate.
```

## Scala consigliata

### Verificabilita

- 0/5: impossibile verificare con i dati disponibili;
- 1/5: affermazioni vaghe o senza fonte;
- 2/5: alcune fonti disponibili ma incomplete;
- 3/5: fonti sufficienti per una verifica preliminare;
- 4/5: fonti affidabili e dati confrontabili;
- 5/5: fonti primarie, periodo chiaro e dati replicabili.

### Rischio fuorviante

- 0/5: rischio basso;
- 1/5: piccole imprecisioni;
- 2/5: contesto parziale;
- 3/5: omissioni rilevanti;
- 4/5: uso forte di dati selettivi o linguaggio persuasivo;
- 5/5: contenuto gravemente distorto o non supportato.

## Quando usare immagini

Per VERUM V1, non e consigliato attivare la generazione immagini come funzione principale.

Motivo:

- i grafici devono essere basati su dati del report;
- le immagini generative possono introdurre elementi non verificati;
- un fact-check deve privilegiare chiarezza, fonti e riproducibilita.

Scelta consigliata:

- usare grafici testuali o tabelle Markdown;
- usare lo strumento di analisi dati quando servono grafici numerici reali;
- usare immagini solo per una scheda divulgativa finale, dopo il report e con dati gia verificati.

## Formula breve per il GPT

```text
Chiudi ogni fact-check con un grafico riassuntivo testuale. Il grafico deve indicare verificabilita, fonti mancanti, rischio fuorviante e verdetto provvisorio. Non creare immagini generative per rappresentare dati fattuali, salvo richiesta esplicita dell'utente e solo dopo un report verificabile.
```
