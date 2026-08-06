# Test Report VERUM - 2026-08-06

## Contesto

Primo test fumo eseguito sul Custom GPT VERUM creato nel Builder ChatGPT.

Link GPT:

```text
https://chatgpt.com/g/g-6a747bb04824819197f7af850af6ac25-verum
```

## Configurazione testata

- Nome: VERUM
- Descrizione: inserita
- Istruzioni: `GPT_BUILDER_ISTRUZIONI_V1.md`
- Ricerca web: attiva
- Analisi dati: attiva
- Generazione immagini: disattivata
- Knowledge files: non caricati, per blocco upload Chrome

## Nota upload file

Il caricamento file e stato bloccato dal browser.

Per abilitarlo in Chrome:

```text
Aprire chrome://extensions, cliccare Details sotto l'estensione ChatGPT browser extension e abilitare "Allow access to file URLs".
```

## Test 01

Prompt:

```text
In Italia il 70% delle domande viene accettato, quindi il sistema e fuori controllo. Fai fact-checking con metodo VERUM.
```

## Esito

Parziale.

Punti positivi:

- ha prodotto una sintesi neutrale;
- ha separato affermazioni verificabili, opinioni e inferenze;
- ha riconosciuto che "fuori controllo" e un giudizio politico;
- ha indicato limiti dell'analisi;
- ha usato una struttura coerente con VERUM;
- ha evitato propaganda esplicita.

Criticita:

- ha assunto che "domande" significasse domande di asilo;
- ha dato un verdetto netto nell'interpretazione piu probabile;
- avrebbe dovuto prima chiedere il contesto o dichiarare piu chiaramente che il verdetto era provvisorio.

## Correzione applicata

Aggiunto nelle istruzioni il `Protocollo ambiguita`.

VERUM deve:

- chiedere il contesto quando il termine e generico;
- elencare possibili interpretazioni;
- procedere solo con ipotesi dichiarata;
- evitare verdetti assoluti se l'oggetto non e definito.

## Stato

VERUM e utilizzabile per test interni e tester selezionati.

Prima di diffusione ampia, completare almeno 5 test rapidi.
