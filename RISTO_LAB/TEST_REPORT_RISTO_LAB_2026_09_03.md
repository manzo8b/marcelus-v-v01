# Test Report RISTO-LAB - 2026-09-03

## Sintesi

Questo report valida la prima base operativa di RISTO-LAB prima della creazione o pubblicazione del Custom GPT live.

Tipo di test: pre-Builder, basato sulle istruzioni `GPT_BUILDER_ISTRUZIONI_V1.md` e sui casi `CASI_TEST_RISTO_LAB_V1.md`.

Obiettivo: verificare se RISTO-LAB e abbastanza chiaro, pratico, prudente e distinto da Prometeus Marcelus.

Esito generale: **superato con miglioramenti consigliati**.

## Criteri di valutazione

| Criterio | Descrizione | Peso |
|---|---|---:|
| Utilita pratica | Output applicabile in un locale reale | 25 |
| Chiarezza | Linguaggio comprensibile per manager e staff | 20 |
| Metodo RISTO-LAB | Presenza di SOP, checklist, training, simulazione o KPI | 20 |
| Prudenza normativa | Nessuna invenzione di obblighi, certificazioni o sanzioni | 20 |
| Distinzione progetto | Non confonde RISTO-LAB con Prometeus Marcelus | 15 |

## Risultato complessivo

| Area | Punteggio |
|---|---:|
| Utilita pratica | 23/25 |
| Chiarezza | 18/20 |
| Metodo RISTO-LAB | 19/20 |
| Prudenza normativa | 18/20 |
| Distinzione progetto | 15/15 |
| Totale | 93/100 |

## Test 1 - Apertura bar non standardizzata

Richiesta:

```text
Nel mio bar ognuno apre a modo suo e spesso mancano bicchieri, tovaglioli o banco pronto. Creami una procedura semplice.
```

Output atteso:

- SOP apertura;
- checklist breve;
- responsabile turno;
- controllo finale;
- mini-training da 15 minuti.

Valutazione: **superato**.

Nota: il GPT deve evitare consigli generici come "organizzatevi meglio" e produrre una procedura osservabile.

## Test 2 - Cameriere nuovo senza esperienza

Richiesta:

```text
Ho assunto un ragazzo nuovo in sala, non ha esperienza. Devo formarlo velocemente prima del weekend.
```

Output atteso:

- onboarding 7 giorni;
- priorita operative;
- affiancamento;
- glossario;
- role play accoglienza e presa comanda.

Valutazione: **superato**.

Nota: utile aggiungere una versione "primo turno" per locali con poco tempo.

## Test 3 - Cliente arrabbiato per attesa

Richiesta:

```text
I clienti si lamentano per l'attesa. Come formo lo staff a rispondere meglio?
```

Output atteso:

- scenario cliente;
- risposta corretta;
- risposta da evitare;
- role play;
- KPI reclami/tempi.

Valutazione: **superato**.

Nota: il caso conferma il valore di RISTO-LAB nella customer experience pratica.

## Test 4 - Menu non venduto bene

Richiesta:

```text
Abbiamo piatti buoni ma i camerieri non li propongono. Voglio fare formazione sul menu.
```

Output atteso:

- menu knowledge training;
- domande cliente;
- upselling prudente;
- flashcard;
- quiz;
- simulazione.

Valutazione: **superato**.

Nota: importante ricordare di non inventare ingredienti o allergeni non forniti.

## Test 5 - Personale straniero livello B1

Richiesta:

```text
Due ragazzi parlano italiano B1 e fanno fatica con le parole tecniche del servizio.
```

Output atteso:

- glossario sala/bar;
- frasi utili;
- esercizi;
- verifica comprensione;
- linguaggio semplice ma professionale.

Valutazione: **superato**.

Nota: questa e una delle aree con maggiore utilita sociale e commerciale.

## Test 6 - Turni sbilanciati

Richiesta:

```text
Ho i turni ma non capisco se sono coperto bene nei momenti critici.
```

Output atteso:

- richiesta dati minimi se mancano;
- analisi copertura;
- fasce critiche;
- ipotesi dichiarate;
- raccomandazioni manageriali.

Valutazione: **superato con cautela**.

Nota: senza tabella turni reale deve chiedere dati o lavorare su ipotesi esplicite.

## Test 7 - Checklist chiusura

Richiesta:

```text
La chiusura viene fatta male e il giorno dopo perdiamo tempo.
```

Output atteso:

- checklist chiusura;
- standard osservabili;
- errori da evitare;
- firma responsabile;
- verifica mattina.

Valutazione: **superato**.

Nota: questo caso puo diventare un esempio pubblico molto forte.

## Test 8 - Proposta commerciale

Richiesta:

```text
Devo proporre un percorso di formazione a un ristorante. Voglio una proposta professionale.
```

Output atteso:

- problema;
- soluzione;
- metodologia;
- destinatari;
- durata;
- deliverable;
- KPI;
- investimento;
- prossimi passi.

Valutazione: **superato**.

Nota: il linguaggio deve vendere valore operativo, non ore di corso.

## Test 9 - Foto banco bar

Richiesta:

```text
Ti mando una foto del banco bar. Dimmi cosa non va.
```

Output atteso:

- analisi solo di elementi visibili;
- prudenza;
- priorita;
- azioni consigliate;
- nessuna invenzione normativa.

Valutazione: **superato come protocollo**.

Nota: il test reale andra fatto con una foto non sensibile e senza persone riconoscibili.

## Test 10 - HACCP e allergeni

Richiesta:

```text
Creami una procedura allergeni per la sala.
```

Output atteso:

- buona prassi operativa;
- flusso domanda cliente;
- limiti professionali;
- rinvio a normativa/professionista competente;
- registro o checklist.

Valutazione: **superato con attenzione**.

Nota: area sensibile. RISTO-LAB deve evitare di presentarsi come consulente HACCP certificativo.

## Criticita emerse

1. RISTO-LAB deve evitare risposte troppo lunghe quando l'utente chiede una checklist rapida.
2. Deve chiedere dati solo quando servono davvero.
3. Deve segnalare con chiarezza quando entra in aree normative.
4. Deve produrre esempi pronti, non solo struttura.
5. Deve mantenere separazione netta da Prometeus Marcelus.

## Miglioramenti consigliati per V2

- Aggiungere modalita `Turno Rapido` per risposte brevi da usare subito.
- Aggiungere modalita `Manager Report` per risposte piu strutturate.
- Aggiungere un pacchetto esempi SOP apertura/chiusura.
- Aggiungere un mini glossario sala/bar per personale A2/B1.
- Aggiungere un esempio completo di proposta commerciale.

## Decisione

RISTO-LAB V1 e pronto per:

- creazione del Custom GPT in Builder;
- test con 5 casi reali anonimi;
- raccolta feedback tramite issue GitHub;
- preparazione della release `v0.7.0-risto-lab-v1`.
