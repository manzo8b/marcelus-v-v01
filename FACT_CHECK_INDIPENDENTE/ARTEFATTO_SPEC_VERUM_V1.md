# Artefatto VERUM V1 - Specifica

## Scopo

Creare un artefatto/prototipo interattivo prima di sviluppare una web app completa.

L'artefatto deve mostrare come funziona VERUM senza dipendere subito da OCR, ricerca web o database.

## Obiettivo utente

Permettere all'utente di incollare un contenuto e vedere:

- sintesi neutrale;
- affermazioni estratte;
- classificazione;
- fonti da verificare;
- verdetti simulati;
- punteggio multidimensionale;
- limiti.

## Schermate minime

### 1. Nuova analisi

Campi:

- testo contenuto;
- tipo contenuto;
- paese;
- periodo;
- modalita;
- domanda principale.

### 2. Estrazione affermazioni

Tabella:

- ID;
- affermazione;
- tipo;
- verificabilita;
- dati mancanti.

### 3. Report

Sezioni:

- sintesi neutrale;
- verifica punto per punto;
- fonti richieste;
- verdetti;
- punteggio;
- limiti;
- conclusione.

### 4. Feedback

Campi:

- chiarezza;
- neutralita;
- utilita;
- errori rilevati;
- miglioramento suggerito.

## Dati mock

L'artefatto puo usare casi simulati da:

`FACT_CHECK_INDIPENDENTE/CASI_TEST_VERUM_V1.md`

## Regole UX

- Non usare rosso e verde come unici indicatori.
- Usare testo esplicativo accanto ai colori.
- Evitare toni aggressivi.
- Mostrare limiti sempre visibili.
- Rendere chiara la differenza tra "verificato" e "non verificabile".

## Palette consigliata

- bianco caldo;
- blu scuro;
- teal;
- grigio chiaro;
- ambra.

## Criterio MVP artefatto

L'artefatto e sufficiente se:

- e navigabile;
- mostra il flusso completo;
- funziona su mobile e desktop;
- non promette accesso a fonti reali se usa dati mock;
- puo essere usato per spiegare VERUM a un tester.

