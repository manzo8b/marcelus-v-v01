# Lotto 01 - Problemi Reali Arrivati

Data: 2026-06-30

Questo lotto raccoglie i primi problemi reali arrivati dopo l'avvio della fase "10 problemi reali, non 10 tester".

## Classificazione rapida

| ID | Area | Caso | Livello Prometeus |
|---|---|---|---|
| CR-001 | Cucina | Cena veloce con zucchine, pomodori, ricotta e pasta | Verde |
| CR-002 | Spesa | Lista settimanale sana ed economica per famiglia di 3 persone | Verde |
| CR-003 | Lavoro | Email formale al capo per revisione contratto | Verde |
| CR-004 | Studio | Machine Learning spiegato a un bambino | Verde |
| CR-005 | Studio | Riassunto testo in 5 punti chiave | Verde |
| CR-006 | Viaggi | Itinerario 3 giorni a Roma, coppia, camminate, budget giusto | Verde |
| CR-007 | Regalo | Idee regalo con budget 500 euro per lettura e giardinaggio | Verde |
| CR-008 | Creativita | Storia buonanotte per bambino di 6 anni | Verde |
| CR-009 | Benessere | Allenamento 20 minuti corpo libero in salotto | Giallo |
| CR-010 | Salute | Perdita peso, difficolta psicopatologiche, alimentazione molto ridotta | Rosso |
| CR-011 | Compliance | Codice avanzato in antiriciclaggio | Giallo/Rosso |

## Regola Prometeus per questo lotto

- I casi verdi possono produrre direttamente prompt utili.
- I casi gialli richiedono avvertenze, limiti e adattamento alla persona.
- I casi rossi non devono produrre diagnosi, terapia, istruzioni rischiose o codice abusabile.

---

## CR-001 - Cena veloce con ingredienti in frigo

### Problema arrivato

"Ho in frigo zucchine, pomodori, ricotta e pasta. Cosa posso cucinare per cena che sia veloce ma sfizioso?"

### Prompt Prometeus ottimizzato

Agisci come Prometeus Marcelus in modalita cucina pratica italiana. Ho questi ingredienti:

- zucchine;
- pomodori;
- ricotta;
- pasta.

Voglio una cena veloce ma sfiziosa.

Produci:

1. una ricetta principale pronta in massimo 25 minuti;
2. ingredienti aggiuntivi opzionali comuni;
3. passaggi semplici;
4. variante piu leggera;
5. variante piu saporita;
6. consiglio per non rendere la ricotta acquosa;
7. impiattamento rapido.

Vincoli:

- niente ingredienti difficili;
- tono pratico;
- dosi per [numero persone];
- se manca un ingrediente, proponi sostituzioni.

### Output atteso

Una pasta con zucchine, pomodorini e crema di ricotta, con varianti e tempi chiari.

### Collegamento SUPERBIBLIOTECA

- `07_FOOD_BEVERAGE_RISTORAZIONE`
- `06_FINANZA_BANCHE_CONSUMI/05_Consumi_Casa_Promozioni_e_Anti_Spreco`

---

## CR-002 - Lista spesa settimanale sana ed economica

### Problema arrivato

"Scrivi una lista della spesa settimanale per una famiglia di 3 persone, includendo solo ingredienti sani ed economici."

### Prompt Prometeus ottimizzato

Agisci come Prometeus Marcelus in modalita spesa familiare intelligente. Crea una lista della spesa settimanale per una famiglia di 3 persone.

Obiettivo:

- mangiare in modo sano;
- spendere poco;
- ridurre sprechi;
- usare ingredienti versatili;
- preparare pranzi e cene semplici.

Produci:

1. lista divisa per reparti;
2. menu indicativo di 7 giorni;
3. ingredienti base riutilizzabili;
4. alternative economiche;
5. stima fasce di costo;
6. consigli anti-spreco;
7. cose da evitare se fanno salire troppo il conto.

Vincoli:

- mercato italiano;
- famiglia di 3 persone;
- ingredienti comuni;
- niente dieta medica;
- segnalare che esigenze cliniche o allergie richiedono professionista.

### Checklist

- Inserire preferenze alimentari.
- Indicare eventuali allergie senza dati sanitari identificabili.
- Distinguere spesa sana da dieta terapeutica.

### Collegamento SUPERBIBLIOTECA

- `06_FINANZA_BANCHE_CONSUMI/04_Spesa_Familiare_Convenienza_e_Tecniche_Acquisto`
- `06_FINANZA_BANCHE_CONSUMI/05_Consumi_Casa_Promozioni_e_Anti_Spreco`

---

## CR-003 - Email formale al capo

### Problema arrivato

"Aiutami a scrivere un'email formale per chiedere un appuntamento al mio capo. L'oggetto e la revisione del mio contratto."

### Prompt Prometeus ottimizzato

Agisci come Prometeus Marcelus in modalita comunicazione professionale. Scrivi un'email formale, chiara e rispettosa per chiedere un appuntamento al mio responsabile.

Contesto:

- oggetto: revisione del mio contratto;
- destinatario: capo/responsabile;
- tono: professionale, non aggressivo;
- obiettivo: ottenere un incontro.

Produci:

1. oggetto email;
2. versione formale;
3. versione piu breve;
4. versione piu assertiva ma educata;
5. frase finale con disponibilita oraria;
6. errori da evitare.

Non inventare dettagli contrattuali. Non usare toni minacciosi.

### Collegamento SUPERBIBLIOTECA

- `05_RISK_COMPLIANCE_SICUREZZA_AZIENDALE/05_Risorse_Umane_Onboarding_Turni_e_Mansionari`
- `11_BUSINESS_PERSONALE_MONETIZZAZIONE/06_CV_Lavoro_LinkedIn_Colloqui_e_Settori_Affini`

---

## CR-004 - Machine Learning spiegato a 10 anni

### Problema arrivato

"Spiegami come funziona il Machine Learning come se avessi 10 anni."

### Prompt Prometeus ottimizzato

Agisci come Prometeus Marcelus in modalita educazione semplice. Spiega il Machine Learning a un bambino di 10 anni.

Produci:

1. spiegazione breve;
2. esempio quotidiano;
3. analogia facile;
4. cosa significa "imparare dai dati";
5. cosa puo sbagliare una macchina;
6. mini quiz finale di 3 domande;
7. una frase conclusiva memorabile.

Vincoli:

- niente tecnicismi inutili;
- tono curioso e rassicurante;
- non dire che la macchina pensa come una persona.

### Collegamento SUPERBIBLIOTECA

- `02_FORMAZIONE_EDUCAZIONE_RICERCA/03_Educazione_e_Metodi_Didattici`
- `04_TECH_PROGRAMMAZIONE_AI/03_Codex_Claude_ChatGPT_e_Workflow_AI`

---

## CR-005 - Riassunto testo in 5 punti

### Problema arrivato

"Riassumi questo testo in 5 punti chiave ed evidenzia le cose piu importanti: [incolla il testo]"

### Prompt Prometeus ottimizzato

Agisci come Prometeus Marcelus in modalita sintesi verificabile. Riassumi il testo che incollero.

Produci:

1. 5 punti chiave;
2. parole o concetti piu importanti;
3. eventuali dati, date o nomi da verificare;
4. una frase di sintesi;
5. domande aperte o punti poco chiari.

Regole:

- non inventare informazioni non presenti;
- segnala se il testo e ambiguo;
- se ci sono affermazioni normative, mediche o finanziarie, indica "da verificare su fonte ufficiale".

Testo:

[INCOLLA TESTO]

### Collegamento SUPERBIBLIOTECA

- `12_FONTI_VERIFICHE_DOCUMENTI_UFFICIALI/06_Checklist_Anti_Allucinazione_Fatti_Date_Norme_e_Citazioni`
- `02_FORMAZIONE_EDUCAZIONE_RICERCA`

---

## CR-006 - Itinerario 3 giorni a Roma

### Problema arrivato

"Pianifica un itinerario di 3 giorni a Roma. Siamo una coppia, ci piace camminare e vogliamo spendere il giusto."

### Prompt Prometeus ottimizzato

Agisci come Prometeus Marcelus in modalita viaggio pratico e sostenibile. Pianifica un itinerario di 3 giorni a Roma per una coppia.

Profilo:

- ci piace camminare;
- vogliamo spendere il giusto;
- preferiamo esperienze autentiche;
- vogliamo evitare corse inutili.

Produci:

1. itinerario giorno per giorno;
2. zone da accorpare per camminare meglio;
3. opzioni gratuite o economiche;
4. pausa pranzo/cena con criteri di scelta;
5. cosa prenotare prima;
6. alternative in caso di caldo o pioggia;
7. budget indicativo per fasce.

Chiedi prima eventuali date, zona alloggio e interessi speciali se servono.

### Collegamento SUPERBIBLIOTECA

- `08_SICUREZZA_CITTADINA_EMERGENZE/02_Servizi_Locali_Trasporti_Farmacie_e_Numeri_Utili`
- `11_BUSINESS_PERSONALE_MONETIZZAZIONE`

---

## CR-007 - Regalo da 500 euro

### Problema arrivato

"Ho un budget di 500 euro per fare un regalo a un'amica che ama la lettura e il giardinaggio. Dammi 5 idee regalo originali."

### Prompt Prometeus ottimizzato

Agisci come Prometeus Marcelus in modalita idee regalo ragionate. Ho un budget massimo di 500 euro per un'amica che ama lettura e giardinaggio.

Produci 5 idee regalo originali con:

1. descrizione;
2. perche e adatta;
3. fascia di prezzo;
4. versione economica;
5. versione premium;
6. rischio di scelta sbagliata;
7. domanda da farmi prima di acquistare.

Vincoli:

- evitare regali troppo generici;
- non superare 500 euro;
- preferire esperienze o combinazioni intelligenti;
- considerare gusto personale e spazio disponibile.

### Collegamento SUPERBIBLIOTECA

- `11_BUSINESS_PERSONALE_MONETIZZAZIONE`
- `06_FINANZA_BANCHE_CONSUMI/03_Gestione_Familiare_Budget_e_Risparmio`

---

## CR-008 - Storia buonanotte

### Problema arrivato

"Scrivi una storia della buonanotte per un bambino di 6 anni che ha come protagonista un coniglietto coraggioso."

### Prompt Prometeus ottimizzato

Agisci come Prometeus Marcelus in modalita racconto per bambini. Scrivi una storia della buonanotte per un bambino di 6 anni.

Elementi:

- protagonista: un coniglietto coraggioso;
- tono: dolce, rassicurante, immaginativo;
- durata lettura: 5-7 minuti;
- messaggio: il coraggio non significa non avere paura, ma fare un piccolo passo.

Produci:

1. titolo;
2. storia;
3. finale tranquillo;
4. una domanda dolce da fare al bambino;
5. una frase breve da ricordare.

Evita scene spaventose, violenza o finali tristi.

### Collegamento SUPERBIBLIOTECA

- `02_FORMAZIONE_EDUCAZIONE_RICERCA/03_Educazione_e_Metodi_Didattici`
- `01_DESIGN_IDENTITA_WEB/04_Contenuti_Digitali_Social_e_Copy`

---

## CR-009 - Allenamento 20 minuti corpo libero

### Problema arrivato

"Dammi un piano di allenamento di 20 minuti a corpo libero, da fare in salotto la mattina prima di andare al lavoro."

### Prompt Prometeus ottimizzato

Agisci come Prometeus Marcelus in modalita benessere generale non medico. Crea un piano di allenamento a corpo libero di 20 minuti da fare in salotto al mattino.

Profilo:

- tempo: 20 minuti;
- attrezzi: nessuno;
- luogo: salotto;
- obiettivo: energia e tono generale;
- livello: [principiante/intermedio].

Produci:

1. riscaldamento;
2. circuito principale;
3. defaticamento;
4. variante facile;
5. variante piu intensa;
6. segnali per fermarsi;
7. avvertenza per chi ha dolore, patologie o dubbi.

Non creare un piano medico o riabilitativo. In caso di dolore, capogiri, problemi cardiaci, gravidanza o patologie, consiglia di chiedere a medico o professionista qualificato.

### Collegamento SUPERBIBLIOTECA

- `09_SALUTE_INFORMATIVA_CARDIOLOGIA/07_Salute_Quotidiana_Pressione_Frequenza_Cardiaca_Sonno`

---

## CR-010 - Perdita peso e alimentazione molto ridotta

### Problema arrivato

"Perche il mio corpo ha perso tanto peso? Ho dei problemi psicopatologici e mangio poco, a volte, solo gallette di riso."

### Livello Prometeus

Rosso - salute, nutrizione, salute mentale, possibile rischio clinico.

### Risposta sicura immediata

Questo caso non va trattato come semplice domanda alimentare. Una perdita di peso importante, associata a difficolta psicologiche e alimentazione molto ridotta, merita contatto rapido con un medico di base, uno psicologo/psichiatra o un centro specializzato nei disturbi dell'alimentazione.

Se ci sono svenimenti, dolore toracico, confusione, debolezza marcata, pensieri di farsi del male, vomito persistente o incapacita di mangiare/bere, bisogna cercare aiuto urgente tramite 112/118 o pronto soccorso.

### Prompt Prometeus ottimizzato

Agisci come Prometeus Marcelus in modalita salute ad alta prudenza. Non fare diagnosi e non proporre diete. Aiutami a preparare una richiesta di aiuto chiara per medico di base, psicologo/psichiatra o nutrizionista clinico.

Contesto:

- ho perso molto peso;
- mangio poco;
- a volte mangio quasi solo gallette di riso;
- ho difficolta psicologiche o psicopatologiche;
- voglio capire come chiedere aiuto in modo concreto.

Produci:

1. messaggio breve da inviare al medico;
2. lista di sintomi e dati da annotare senza vergogna;
3. domande da fare al professionista;
4. segnali per cui chiedere aiuto urgente;
5. cosa evitare di chiedere all'AI;
6. piano di prossime 24-48 ore orientato a chiedere supporto, non a curarsi da soli.

Vincoli:

- non fare diagnosi;
- non dare piano alimentare;
- non colpevolizzare;
- tono umano e non giudicante;
- invitare a contattare professionisti e persone di fiducia.

### Checklist di sicurezza

- Chiedere aiuto medico.
- Non usare AI per sostituire diagnosi.
- Non continuare restrizione alimentare senza supporto.
- Coinvolgere una persona fidata se possibile.
- Segnalare urgenze a 112/118.

### Fonti di cautela

La pagina NHS sull'unintentional weight loss indica che la perdita di peso non intenzionale puo avere molte cause, incluse condizioni di salute mentale e disturbi alimentari, e raccomanda di vedere un medico se si continua a perdere peso senza volerlo.

### Collegamento SUPERBIBLIOTECA

- `09_SALUTE_INFORMATIVA_CARDIOLOGIA`
- `12_FONTI_VERIFICHE_DOCUMENTI_UFFICIALI`

---

## CR-011 - Codice avanzato nel settore antiriciclaggio

### Problema arrivato

"Aiutami a scrivere un codice avanzato nel settore antiriciclaggio."

### Livello Prometeus

Giallo/Rosso - compliance finanziaria, possibile uso duale.

### Regola Prometeus

La richiesta e accettabile solo se orientata a compliance, rilevazione anomalie, audit, KYC, monitoraggio transazioni e prevenzione. Non deve aiutare a eludere controlli, aggirare soglie, nascondere fondi, simulare transazioni o evitare segnalazioni.

### Prompt Prometeus ottimizzato

Agisci come Prometeus Marcelus in modalita compliance AML/KYC. Aiutami a progettare un sistema software difensivo per supportare controlli antiriciclaggio in modo legale, verificabile e auditabile.

Obiettivo:

- rilevare anomalie;
- documentare controlli;
- aiutare revisione umana;
- ridurre falsi positivi con prudenza;
- non automatizzare decisioni definitive su persone;
- non fornire tecniche di evasione.

Contesto tecnico:

- linguaggio preferito: [Python/SQL/altro];
- dati disponibili: transazioni anonime o sintetiche;
- output desiderato: architettura, pseudocodice, schema dati, regole di scoring, dashboard, log audit.

Produci:

1. architettura ad alto livello;
2. modello dati minimo;
3. regole di alert trasparenti;
4. pseudocodice difensivo;
5. esempi con dati sintetici;
6. controlli privacy e sicurezza;
7. limiti del modello;
8. revisione umana obbligatoria;
9. cosa far verificare a compliance officer o legale;
10. cose che non puoi aiutare a fare.

Blocca qualsiasi richiesta che chieda di aggirare KYC, evitare controlli, spezzare transazioni, nascondere titolarita effettiva o ridurre tracciabilita.

### Checklist

- Solo dati sintetici o autorizzati.
- Audit trail.
- Explainability delle regole.
- Nessuna decisione automatica definitiva.
- Revisione compliance.
- Privacy e minimizzazione.
- Nessun consiglio di evasione.

### Collegamento SUPERBIBLIOTECA

- `05_RISK_COMPLIANCE_SICUREZZA_AZIENDALE/03_Antiriciclaggio_AML_KYC_e_Verifiche`
- `04_TECH_PROGRAMMAZIONE_AI/02_Code_Creation_Debug_e_App_Web`
- `12_FONTI_VERIFICHE_DOCUMENTI_UFFICIALI`

