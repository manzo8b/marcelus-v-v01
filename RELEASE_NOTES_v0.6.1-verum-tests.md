# Release v0.6.1-verum-tests - VERUM test reali e modalita compatta

Questa release consolida VERUM dopo i primi test reali su post politici complessi.

La V0.6.1 non aggiunge solo documenti: verifica se il GPT reale riesce a lavorare con contenuti difficili, polarizzati e ricchi di numeri, fonti incomplete e linguaggio persuasivo.

## Cosa include

- test reale su post Borsellino, Bignami, Scalfaro, Conso e 41-bis;
- test reale su confronto Italia-Spagna, migranti, rimpatri e Mediaset;
- test reale su Ceuta, crisi migratoria, disinformazione online e ipotesi di attacco ibrido;
- modalita `Fact-check compatto`;
- grafico riassuntivo verificabile;
- dossier fonti Ceuta;
- report dei test politici;
- aggiornamento istruzioni Custom GPT;
- checklist Builder aggiornata.

## Link principali

- [VERUM README](FACT_CHECK_INDIPENDENTE/README.md)
- [Istruzioni Custom GPT V1](FACT_CHECK_INDIPENDENTE/GPT_BUILDER_ISTRUZIONI_V1.md)
- [Fact-check Compatto VERUM V1](FACT_CHECK_INDIPENDENTE/FACT_CHECK_COMPATTO_VERUM_V1.md)
- [Grafico Riassuntivo VERUM V1](FACT_CHECK_INDIPENDENTE/GRAFICO_RIASSUNTIVO_VERUM_V1.md)
- [Casi Test Post Politici VERUM](FACT_CHECK_INDIPENDENTE/CASI_TEST_POST_POLITICI_VERUM_2026_08_06.md)
- [Fonti Ceuta Crisi Migratoria](FACT_CHECK_INDIPENDENTE/FONTI_CEUTA_CRISI_MIGRATORIA_VERUM_2026_08_06.md)
- [Test Report Post Politici](FACT_CHECK_INDIPENDENTE/TEST_REPORT_POST_POLITICI_VERUM_2026_08_06.md)
- [Messaggio Tester VERUM V1](FACT_CHECK_INDIPENDENTE/TESTER_INVITE_VERUM_V1.md)

## GPT pubblico

VERUM e disponibile come Custom GPT:

```text
https://chatgpt.com/g/g-6a747bb04824819197f7af850af6ac25-verum
```

## Cosa e migliorato

### 1. Verifica piu prudente

VERUM ora tratta espressioni come `attacco ibrido`, `orchestrato`, `regia estera`, `propaganda` o `sistema fuori controllo` come claim da verificare, non come conclusioni gia dimostrate.

### 2. Grafico riassuntivo

Alla fine del fact-check, quando possibile, VERUM produce un grafico testuale:

```text
Fatti confermati          2/5  ██░░░
Fonti mancanti            3/5  ███░░
Rischio fuorviante        4/5  ████░
Verdetto rapido           PARZIALMENTE VERO / FUORVIANTE
```

Il grafico e verificabile e non decorativo.

### 3. Modalita compatta

Per utenti comuni o tester non tecnici, VERUM puo rispondere in forma breve:

- sintesi in 5 righe;
- 5 affermazioni principali;
- verdetto rapido per claim;
- cosa manca per verificare bene;
- grafico finale;
- conclusione prudente.

## Esito dei test

### Test A - Borsellino / 41-bis

Superato.

VERUM ha distinto correttamente:

- mancato rinnovo del 41-bis;
- scarcerazione;
- responsabilita politica;
- responsabilita amministrativa;
- attribuzioni non dimostrate.

### Test B - Italia / Spagna / migranti / rimpatri

Superato.

VERUM ha distinto:

- sbarchi;
- ingressi irregolari;
- rotte;
- rimpatri;
- periodi;
- denominatori.

### Test C - Ceuta / attacco ibrido

Superato.

VERUM ha trattato `hybrid attack` come ipotesi geopolitica da verificare, non come fatto certo.

## Limiti ancora presenti

- Le risposte approfondite possono essere lunghe.
- I temi molto recenti richiedono controllo umano delle fonti primarie.
- I grafici sono testuali, non ancora esportabili come immagine o PDF.
- Il caricamento file knowledge nel Builder puo richiedere permessi Chrome aggiuntivi.

## Prossimi passi

1. Invitare 5 tester.
2. Raccogliere feedback con esempi reali, senza dati personali.
3. Creare issue GitHub per errori ricorrenti.
4. Preparare `v0.6.2` con correzioni da tester.
5. Valutare una pagina demo o artefatto visuale.
