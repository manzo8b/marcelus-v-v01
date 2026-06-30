# AI Act Europeo - Adeguamento Prometeus Marcelus

Versione: 0.1 operativa
Data: 2026-06-30
Fonte primaria: Regolamento (UE) 2024/1689, testo ufficiale EUR-Lex, ELI http://data.europa.eu/eli/reg/2024/1689/oj
Documento collegato: analisi Prometeus Marcelus allegata dall'autore

## Avvertenza

Questo documento e una guida operativa preliminare per ridurre rischi legali, privacy, reputazionali e di sicurezza del progetto Prometeus Marcelus. Non sostituisce una consulenza legale. Le norme, le autorita nazionali e gli obblighi concreti devono essere verificati su fonte ufficiale aggiornata prima di ogni uso commerciale, sanitario, finanziario, HR, educativo, pubblico o regolatorio.

## 1. Inquadramento del progetto

Prometeus Marcelus, allo stato attuale, deve essere qualificato come:

- biblioteca pubblica di prompt;
- metodo di prompt engineering;
- progetto educativo e documentale;
- supporto alla costruzione di richieste AI piu chiare, verificabili e prudenti;
- Custom GPT informativo e operativo, se configurato dentro ChatGPT.

Prometeus Marcelus non deve essere presentato come:

- consulente legale automatico;
- medico, cardiologo o strumento diagnostico;
- sistema HR che seleziona candidati o decide turni in modo automatico;
- sistema di scoring di persone, clienti, cittadini o lavoratori;
- sistema per decisioni su credito, assicurazioni, servizi essenziali, sanita, scuola o pubblica amministrazione;
- sistema di identificazione biometrica, riconoscimento emozioni o classificazione biometrica;
- sistema di sicurezza pubblica, investigazione o valutazione di rischio criminale.

## 2. Regole AI Act rilevanti

### Ambito di applicazione

L'articolo 2 del Regolamento si applica, tra gli altri, a fornitori, deployer, importatori, distributori e persone interessate nell'Unione europea. Per Prometeus questo significa che bisogna distinguere il ruolo:

- autore della biblioteca di prompt;
- gestore di un Custom GPT;
- utilizzatore di modelli terzi;
- eventuale fornitore di servizi AI a clienti.

### Definizione di sistema di IA

L'articolo 3 definisce il sistema di IA come sistema automatizzato con livelli variabili di autonomia che genera output come previsioni, contenuti, raccomandazioni o decisioni. Un semplice file di prompt non e di per se un sistema AI operativo, ma un Custom GPT o un workflow che usa modelli AI puo rientrare nella logica applicativa del Regolamento.

### Alfabetizzazione AI

L'articolo 4 richiede misure per garantire un livello sufficiente di alfabetizzazione in materia di IA per il personale e le persone che usano sistemi AI per conto di fornitori o deployer. Prometeus deve quindi includere:

- istruzioni di uso corretto;
- limiti chiari;
- esempi di errore;
- checklist anti-allucinazione;
- formazione minima su privacy, bias, dati sensibili e verifica fonti.

### Pratiche vietate

L'articolo 5 vieta, tra le altre cose, manipolazione dannosa, sfruttamento di vulnerabilita, social scoring, alcune pratiche biometriche e inferenza delle emozioni in lavoro e istruzione salvo eccezioni strettissime. Prometeus deve vietare prompt che:

- manipolano persone vulnerabili;
- generano ranking sociali di cittadini o lavoratori;
- discriminano gruppi protetti;
- inferiscono emozioni in lavoro o scuola;
- usano biometria o dati sensibili per classificare persone;
- aggirano diritti, consenso, privacy o controlli umani.

### Alto rischio

Gli articoli 6 e Allegato III includono aree ad alto rischio come istruzione, lavoro, servizi essenziali, credito, assicurazioni vita/salute, emergenza sanitaria, giustizia, processi democratici e alcuni usi di pubblica amministrazione. Prometeus puo creare prompt informativi su questi temi, ma non deve spingere l'utente a delegare decisioni automatiche.

### Requisiti per sistemi ad alto rischio

Gli articoli 8-15 trattano requisiti come:

- gestione dei rischi;
- governance dati;
- documentazione tecnica;
- log;
- trasparenza;
- supervisione umana;
- accuratezza, robustezza e cibersicurezza.

Per Prometeus questi diventano principi di progettazione, anche quando non si e formalmente fornitori di un sistema ad alto rischio.

### Obblighi dei deployer

L'articolo 26 richiede, per sistemi ad alto rischio, uso conforme alle istruzioni, supervisione umana competente, controllo dei dati di input, monitoraggio, conservazione log dove applicabile, informazione ai lavoratori e supporto a DPIA quando necessario. Prometeus deve educare l'utente a non usare AI in modo improvvisato in contesti critici.

### Trasparenza

L'articolo 50 prevede obblighi di trasparenza per sistemi che interagiscono con persone, contenuti sintetici, deepfake, riconoscimento emozioni e categorizzazione biometrica. Prometeus deve includere etichette e formule standard:

- "Questo contenuto e stato generato o assistito da AI";
- "Questa analisi e informativa e deve essere verificata";
- "Non inserire dati personali o sensibili se non necessario e autorizzato";
- "Decisione finale umana obbligatoria".

### Sanzioni

L'articolo 99 prevede sanzioni molto rilevanti: fino a 35 milioni di euro o 7 percento del fatturato mondiale annuo per violazioni delle pratiche vietate; fino a 15 milioni o 3 percento per altri obblighi specifici; fino a 7,5 milioni o 1 percento per informazioni inesatte o fuorvianti verso autorita o organismi notificati. Le PMI hanno regole di calcolo specifiche.

### Calendario

L'articolo 113 stabilisce:

- entrata in vigore 20 giorni dopo la pubblicazione in Gazzetta ufficiale UE;
- applicazione generale dal 2 agosto 2026;
- Capi I e II dal 2 febbraio 2025;
- varie parti su governance, GPAI, sanzioni e altri capi dal 2 agosto 2025;
- articolo 6 paragrafo 1 e obblighi corrispondenti dal 2 agosto 2027.

## 3. Classificazione prudenziale di Prometeus

### Uso basso rischio

Uso consigliato:

- spiegazione di concetti;
- creazione di checklist;
- organizzazione personale;
- bozze di comunicazione;
- formazione generale;
- prompt per studio non valutativo;
- analisi di scenario senza decisione automatica.

Controlli minimi:

- avvertenza anti-consulenza;
- verifica fonti;
- niente dati sensibili;
- output controllato da persona.

### Uso rischio limitato

Esempi:

- chatbot informativo;
- contenuti generati per pubblico;
- analisi pubblicabili su LinkedIn o GitHub;
- materiali formativi assistiti da AI.

Controlli:

- trasparenza sull'uso AI;
- revisione editoriale umana;
- indicazione fonti;
- separazione tra fatti, interpretazioni e ipotesi.

### Uso potenzialmente alto rischio

Esempi da trattare con blocco o escalation:

- HR, selezione candidati, valutazione performance;
- istruzione con valutazione studenti;
- salute, triage, diagnosi, terapia;
- credito, assicurazioni, servizi essenziali;
- giustizia, diritti, ricorsi, procedimenti;
- pubblica amministrazione;
- sicurezza aziendale con sorveglianza persone;
- politica ed elezioni quando mira a influenzare voto.

Regola Prometeus:

Prometeus puo aiutare a preparare domande, checklist, sintesi, documenti di verifica e scenari. Non deve generare decisioni automatiche, ranking di persone, diagnosi, indicazioni vincolanti o azioni operative senza professionista competente.

### Uso vietato o non ammesso

Prometeus deve rifiutare o trasformare richieste che chiedono:

- manipolazione occulta;
- sfruttamento vulnerabilita;
- social scoring;
- discriminazione;
- inferenza emozioni in lavoro/scuola;
- classificazioni biometriche sensibili;
- deepfake ingannevoli;
- evasione di controlli legali;
- uso di dati personali non autorizzati;
- decisioni automatiche su diritti o servizi essenziali.

## 4. Policy pubblica consigliata

Inserire nel README o in una pagina dedicata:

> Prometeus Marcelus e un progetto educativo e operativo per creare prompt piu chiari, verificabili e responsabili. Non sostituisce consulenti legali, medici, finanziari, HR o altri professionisti. Non deve essere usato per prendere decisioni automatiche su persone, diritti, salute, credito, lavoro, istruzione, sicurezza pubblica o servizi essenziali. Ogni output deve essere verificato da una persona competente e, quando necessario, da fonti ufficiali aggiornate.

## 5. Regole per il Custom GPT

Il Custom GPT Prometeus Marcelus deve avere istruzioni interne che impongono:

1. dichiarare sempre quando serve verifica su fonte ufficiale;
2. non presentare output legali, medici, finanziari o HR come definitivi;
3. non chiedere dati sensibili non necessari;
4. proporre anonimizzazione e minimizzazione dati;
5. bloccare pratiche vietate dall'AI Act;
6. riconoscere aree potenzialmente alto rischio;
7. produrre checklist e domande, non decisioni automatiche;
8. distinguere fatti, ipotesi, interpretazioni e azioni;
9. suggerire revisione umana;
10. chiedere conferma quando l'utente vuole pubblicare o inviare dati a terzi.

## 6. Documentazione minima da mantenere

Per il progetto pubblico:

- README con avvertenze;
- pagina AI Act;
- registro rischi;
- changelog delle versioni;
- log dei test del Custom GPT;
- issue template per segnalare rischi;
- policy privacy dei contenuti caricati dagli utenti;
- elenco prompt FREE/PREMIUM/PRIVATO;
- lista prompt vietati o da trasformare.

Per servizi a clienti:

- scheda cliente;
- finalita del servizio;
- dati trattati;
- strumenti AI usati;
- fonte del modello;
- limiti;
- output consegnati;
- revisione umana;
- consenso o base giuridica quando necessaria;
- eventuale DPIA da valutare con professionista privacy.

## 7. Azioni immediate

Priorita alta:

1. aggiungere pagina pubblica "Uso sicuro e AI Act";
2. aggiornare Custom GPT con blocchi su pratiche vietate e alto rischio;
3. creare issue template "Segnalazione rischio AI Act";
4. aggiungere etichette GitHub: ai-act, legal-risk, privacy, high-risk, transparency, human-review;
5. separare prompt FREE/PREMIUM/PRIVATO;
6. indicare che i prompt sanitari, legali, finanziari e HR sono informativi;
7. evitare claim commerciali come "conforme AI Act" senza revisione legale.

Priorita media:

1. creare checklist per ogni macroarea;
2. creare esempi di uso consentito e non consentito;
3. creare 30 test AI Act per il Custom GPT;
4. creare registro incidenti e correzioni;
5. creare guida per tester.

Priorita futura:

1. revisione legale esterna;
2. privacy policy completa;
3. termini d'uso;
4. modello di consenso per tester;
5. eventuale repository privato per materiali premium e dati sensibili.

## 8. Fonti ufficiali da usare

- EUR-Lex: Regolamento (UE) 2024/1689, ELI http://data.europa.eu/eli/reg/2024/1689/oj
- Commissione Europea: AI Act e AI Office
- Parlamento Europeo e Consiglio UE
- Garante per la protezione dei dati personali
- AgID, ACN e fonti nazionali competenti, da verificare su atti ufficiali aggiornati
- GDPR, Regolamento (UE) 2016/679

## 9. Formula di verifica Prometeus

Ogni prompt AI Act deve chiudere con:

1. cosa e certo;
2. cosa e interpretazione;
3. cosa richiede fonte ufficiale;
4. cosa richiede professionista;
5. quali dati personali non devono essere inseriti;
6. quale decisione deve restare umana.
