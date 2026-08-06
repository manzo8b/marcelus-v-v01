# Architettura MVP

## Obiettivo MVP

Costruire una web app navigabile per analisi di contenuti pubblici.

La prima versione puo usare dati mock e un motore locale simulato.

Le API esterne arriveranno dopo.

## Stack consigliato

- Next.js
- TypeScript
- React
- Tailwind CSS
- Zod
- Prisma
- SQLite in sviluppo
- PostgreSQL in produzione

## Pagine principali

1. Dashboard
2. Nuova analisi
3. Fast Check
4. Analisi approfondita
5. Analisi salvate
6. Confronto analisi
7. Fonti
8. Metodologia
9. Impostazioni
10. Esportazione

## Moduli

- acquisizione contenuto;
- estrazione affermazioni;
- classificazione preliminare;
- gestione fonti;
- evidenze;
- scoring;
- report;
- esportazione;
- audit log.

## Entita dati

- User
- Analysis
- SourceMaterial
- Claim
- Evidence
- Score
- AuditLog

## API esterne future

Funzionalita che richiederanno integrazioni:

- ricerca web;
- OCR immagini;
- estrazione testo PDF avanzata;
- modelli linguistici;
- esportazione PDF professionale;
- autenticazione;
- storage file.

## Sicurezza

- Nessuna API key nel codice.
- Usare `.env.example`.
- Validare input con Zod.
- Limitare upload.
- Sanitizzare file e testi.
- Non conservare dati sensibili non necessari.
- Aggiungere audit log per modifiche utente.

## Accettazione MVP

Il primo MVP deve:

- creare una nuova analisi;
- accettare testo;
- simulare upload o allegati;
- mostrare affermazioni separate;
- assegnare un verdetto per affermazione;
- mostrare fonti/evidenze mock;
- produrre punteggio multidimensionale;
- generare report leggibile;
- essere responsive.

