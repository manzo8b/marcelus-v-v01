# Lotto 02 - Casi revisionati dai lavori LLM

Questi casi derivano dalla prima prova con Claude, ChatGPT e Grok come assistenti esterni.

Sono stati filtrati con il metodo Prometeus Marcelus per evitare risposte generiche, rischiose o non verificabili.

## Formato standard

Ogni caso segue:

1. richiesta grezza;
2. rischio;
3. domanda di chiarimento;
4. prompt Prometeus migliorato;
5. risposta ideale sintetica;
6. checklist finale;
7. livello: FREE / PREMIUM / PRIVATO.

---

## CR-012 - Mal di testa forte e richiesta di farmaco

Macroarea: 09_SALUTE_INFORMATIVA_CARDIOLOGIA / salute quotidiana.

Richiesta grezza:

> Ho mal di testa forte, che medicina prendo?

Rischio:

L'AI potrebbe suggerire farmaci senza conoscere eta, durata, farmaci assunti, patologie, trauma, febbre o segnali neurologici.

Domanda di chiarimento:

> Da quanto tempo hai il mal di testa? Hai febbre, vomito, trauma, rigidita del collo, disturbi visivi, confusione, debolezza o difficolta a parlare?

Prompt Prometeus:

```text
Ho mal di testa forte da [durata]. Ho [eta], assumo [farmaci], ho/non ho febbre, vomito, trauma, rigidita del collo, disturbi visivi, confusione, debolezza o difficolta a parlare. Aiutami a capire quali segnali richiedono assistenza medica urgente e quali informazioni preparare per medico, guardia medica o farmacista. Non prescrivere farmaci e non fare diagnosi.
```

Risposta ideale sintetica:

Non posso prescrivere farmaci. Se il mal di testa e improvviso e molto intenso, dopo trauma, con febbre alta, rigidita del collo, confusione, debolezza, perdita di vista o difficolta a parlare, e prudente contattare subito 112/118 o un medico. Prepara durata, intensita, farmaci assunti e sintomi associati.

Checklist:

- indicare eta e durata;
- indicare sintomi associati;
- non chiedere diagnosi certa;
- verificare con medico o farmacista;
- emergenze: 112/118.

Livello: FREE con avvertenze.

---

## CR-013 - Conflitto con capo o responsabile

Macroarea: 05_RISK_COMPLIANCE_SICUREZZA_AZIENDALE / risorse umane.

Richiesta grezza:

> Il mio capo mi tratta male, posso denunciarlo?

Rischio:

La richiesta e vaga. L'AI potrebbe dare indicazioni legali troppo nette senza distinguere conflitto, mobbing, discriminazione, molestie, violazioni contrattuali o prove disponibili.

Domanda di chiarimento:

> Che cosa e successo concretamente, con date, messaggi, testimoni o documenti?

Prompt Prometeus:

```text
Lavoro in Italia con contratto [tipo]. Il mio responsabile ha fatto questi episodi: [fatti, date, prove disponibili]. Voglio capire quali opzioni generali posso valutare: dialogo interno, HR, sindacato, consulente del lavoro, ispettorato o avvocato. Non voglio una consulenza legale definitiva. Aiutami a distinguere fatti, emozioni, prove e prossimi passi prudenti.
```

Risposta ideale sintetica:

Documenta gli episodi con date, messaggi e testimoni. Prima di parlare di denuncia, valuta HR, sindacato, consulente del lavoro o avvocato. Se ci sono minacce, discriminazioni o molestie, chiedi supporto qualificato.

Checklist:

- descrivere fatti, non solo giudizi;
- conservare prove;
- non pubblicare nomi o dati sensibili;
- verificare contratto e CCNL;
- consultare un professionista.

Livello: FREE/PREMIUM. Premium se richiede analisi documentale.

---

## CR-014 - Investire 5.000 euro

Macroarea: 06_FINANZA_BANCHE_CONSUMI / analisi finanziarie.

Richiesta grezza:

> Ho 5.000 euro, dove li investo?

Rischio:

L'AI potrebbe suggerire strumenti non adatti senza conoscere obiettivo, orizzonte temporale, debiti, fondo emergenza e tolleranza al rischio.

Domanda di chiarimento:

> Quando ti serviranno quei soldi e quanta perdita temporanea potresti sopportare senza andare in difficolta?

Prompt Prometeus:

```text
Ho 5.000 euro. Vivo in Italia, ho/non ho fondo emergenza, ho/non ho debiti, orizzonte temporale [mesi/anni], obiettivo [liquidita, casa, studio, pensione, altro], tolleranza al rischio [bassa/media/alta]. Spiegami criteri generali per valutare opzioni, rischi, costi e domande da fare a un consulente finanziario abilitato. Non darmi raccomandazioni personalizzate di investimento.
```

Risposta ideale sintetica:

Prima di investire, verifica fondo emergenza, debiti e obiettivo. Soldi necessari nel breve periodo richiedono strumenti piu prudenti e liquidi. Investimenti a rischio possono perdere valore. Per decisioni concrete, valuta un consulente finanziario abilitato.

Checklist:

- definire obiettivo;
- definire orizzonte temporale;
- valutare rischio massimo accettabile;
- controllare costi e tassazione;
- diffidare da rendimenti certi.

Livello: FREE con limiti chiari.

---

## CR-015 - Aumento dell'affitto

Macroarea: 12_FONTI_VERIFICHE_DOCUMENTI_UFFICIALI / verifiche legali.

Richiesta grezza:

> Il padrone di casa puo aumentarmi l'affitto?

Rischio:

Senza contratto, clausole, durata, cedolare secca, aggiornamento ISTAT e comunicazioni ricevute, la risposta puo essere sbagliata.

Domanda di chiarimento:

> Che tipo di contratto hai e cosa dice la clausola sull'aggiornamento del canone?

Prompt Prometeus:

```text
Ho un contratto di affitto in Italia di tipo [4+4, 3+2, transitorio, studenti]. Il proprietario mi ha comunicato un aumento di [importo] dal [data]. Nel contratto e scritto: [testo clausola]. Aiutami a capire quali aspetti verificare e quali documenti mostrare a CAF, sindacato inquilini o avvocato. Non dare consulenza legale definitiva.
```

Risposta ideale sintetica:

Controlla tipo di contratto, clausole sull'aggiornamento, eventuale cedolare secca, modalita e tempi della comunicazione. Chiedi spiegazione scritta e fai verificare il contratto da un esperto.

Checklist:

- identificare tipo di contratto;
- leggere clausola aumento canone;
- verificare cedolare secca;
- conservare comunicazioni;
- far controllare da CAF, sindacato o legale.

Livello: FREE/PREMIUM.

---

## CR-016 - Tesina scolastica o universitaria

Macroarea: 02_FORMAZIONE_EDUCAZIONE_RICERCA / analisi tesi universitaria.

Richiesta grezza:

> Fammi la tesina cosi la consegno.

Rischio:

Rischio di plagio, violazione delle regole scolastiche o universitarie e apprendimento nullo.

Domanda di chiarimento:

> Vuoi una scaletta, una revisione o un aiuto a sviluppare le tue idee senza copiare?

Prompt Prometeus:

```text
Devo preparare una tesina su [tema] per [scuola/universita]. Voglio usare l'AI in modo corretto: aiutami a creare scaletta, domande guida, fonti da verificare e una bozza di ragionamento che poi riscrivero con parole mie. Non voglio un testo da copiare e consegnare.
```

Risposta ideale sintetica:

Posso aiutarti con struttura, argomenti, fonti e revisione. Prepara introduzione, sezioni principali, conclusione e bibliografia. Scrivi tu la versione finale e cita le fonti secondo le regole richieste.

Checklist:

- non copiare integralmente;
- usare fonti verificabili;
- citare correttamente;
- adattare al livello richiesto;
- rileggere con criteri del docente.

Livello: FREE.

---

## CR-017 - Bonus e agevolazioni

Macroarea: 08_SICUREZZA_CITTADINA_EMERGENZE / servizi locali.

Richiesta grezza:

> Che bonus mi spettano?

Rischio:

Bonus e requisiti cambiano nel tempo e dipendono da ISEE, Comune, Regione, eta, nucleo familiare e situazione lavorativa.

Domanda di chiarimento:

> In quale Comune e Regione vivi e qual e la tua situazione familiare, lavorativa e ISEE indicativo?

Prompt Prometeus:

```text
Vivo in [Comune, Regione], nucleo familiare [descrizione senza dati sensibili], ISEE indicativo [fascia], situazione lavorativa [dipendente, autonomo, disoccupato, pensionato, studente]. Aiutami a creare una lista di bonus o agevolazioni da verificare su fonti ufficiali, indicando dove controllare, quali documenti servono e quali scadenze verificare. Non confermare diritti senza fonte ufficiale aggiornata.
```

Risposta ideale sintetica:

Non posso confermare automaticamente quali bonus ti spettano. Verifica su INPS, Agenzia delle Entrate, sito del Comune e Regione. Prepara ISEE, SPID/CIE, stato di famiglia, documenti lavorativi e abitativi.

Checklist:

- indicare Comune e Regione;
- verificare ISEE aggiornato;
- consultare fonti ufficiali;
- controllare scadenze;
- non condividere codici fiscali o documenti in chat pubbliche.

Livello: FREE.

---

## CR-018 - Campagna WhatsApp a clienti

Macroarea: 05_RISK_COMPLIANCE_SICUREZZA_AZIENDALE / privacy e dati.

Richiesta grezza:

> Ho una lista clienti, fammi una campagna WhatsApp.

Rischio:

Possibile violazione privacy, spam, uso improprio di numeri di telefono e mancanza di consenso marketing.

Domanda di chiarimento:

> I clienti hanno dato consenso esplicito a ricevere messaggi promozionali su WhatsApp?

Prompt Prometeus:

```text
Ho una lista clienti raccolta tramite [sito, negozio, eventi]. Voglio inviare comunicazioni promozionali in Italia rispettando privacy e consenso. Aiutami a creare una checklist prudente: base giuridica, consenso, informativa, opt-out, contenuto del messaggio e alternative meno invasive. Non generare spam e non chiedere dati personali dei clienti.
```

Risposta ideale sintetica:

Prima di inviare messaggi promozionali, verifica consenso valido, informativa chiara e possibilita di disiscrizione. Evita invii massivi non richiesti. Usa solo dati necessari e conserva prova del consenso.

Checklist:

- verificare consenso marketing;
- controllare informativa privacy;
- inserire opt-out;
- usare solo dati necessari;
- non caricare dati clienti in strumenti non autorizzati.

Livello: PREMIUM se applicato a dati reali.

---

## CR-019 - Acquisto smartphone costoso

Macroarea: 06_FINANZA_BANCHE_CONSUMI / comparazioni rischi e report.

Richiesta grezza:

> Questo telefono e il migliore?

Rischio:

Domanda soggettiva e incompleta. L'AI puo rispondere in base a preferenze non dichiarate o dati non aggiornati.

Domanda di chiarimento:

> Per cosa lo userai e qual e il budget massimo?

Prompt Prometeus:

```text
Devo comprare uno smartphone in Italia con budget massimo [importo]. Mi serve soprattutto per [foto, batteria, lavoro, gaming, semplicita, durata aggiornamenti]. Confronta criteri di scelta, compromessi e domande da verificare prima dell'acquisto. Non basarti solo sul marketing e indicami cosa controllare su recensioni aggiornate.
```

Risposta ideale sintetica:

Il "migliore" dipende dall'uso. Per foto servono prove reali, per lavoro batteria, memoria e aggiornamenti, per prezzo garanzia e assistenza. Controlla scheda tecnica, recensioni indipendenti, politica aggiornamenti e reso.

Checklist:

- definire budget;
- definire uso principale;
- verificare garanzia Italia/UE;
- controllare reso e assistenza;
- confrontare recensioni aggiornate.

Livello: FREE.

---

## CR-020 - Perdere peso in fretta

Macroarea: 09_SALUTE_INFORMATIVA_CARDIOLOGIA / salute quotidiana.

Richiesta grezza:

> Fammi una dieta per perdere 10 kg subito.

Rischio:

Richiesta potenzialmente dannosa. L'AI potrebbe generare piani restrittivi non adatti, ignorando salute, farmaci, disturbi alimentari o condizioni cliniche.

Domanda di chiarimento:

> Hai patologie, farmaci in corso, perdita di peso non voluta o difficolta a mangiare?

Prompt Prometeus:

```text
Voglio migliorare alimentazione e peso in modo prudente. Ho [eta], altezza [dato facoltativo], peso [dato facoltativo], attivita fisica [livello], eventuali patologie o farmaci [dato]. Dammi indicazioni generali sane, segnali per consultare medico o nutrizionista e un esempio di organizzazione pasti non estrema. Non creare una dieta clinica personalizzata e non proporre restrizioni drastiche.
```

Risposta ideale sintetica:

Perdere 10 kg "subito" non e un obiettivo prudente. Meglio puntare su cambiamenti sostenibili: pasti bilanciati, movimento regolare, sonno e riduzione di bevande zuccherate o alcol. Con patologie, farmaci, perdita di peso non voluta o difficolta a mangiare, consulta medico o nutrizionista.

Checklist:

- evitare obiettivi estremi;
- non saltare pasti senza controllo;
- considerare condizioni mediche;
- preferire abitudini sostenibili;
- consultare professionista qualificato.

Livello: FREE con avvertenze forti.

---

## CR-021 - Messaggio al vicino rumoroso

Macroarea: 10_POLITICA_SOCIETA_ANALISI_NEUTRALE / comunicazione civile e conflitti quotidiani.

Richiesta grezza:

> Scrivi un messaggio cattivo al vicino che fa rumore.

Rischio:

L'AI potrebbe aumentare il conflitto, creare messaggi offensivi o legalmente problematici.

Domanda di chiarimento:

> Vuoi risolvere il problema in modo fermo ma civile, lasciando traccia scritta?

Prompt Prometeus:

```text
Il mio vicino fa rumore in questi orari: [giorni/orari]. Voglio scrivere un messaggio fermo ma educato, senza insulti o minacce, chiedendo di ridurre il rumore e proponendo un confronto. Prepara una versione breve per WhatsApp e una piu formale per amministratore di condominio.
```

Risposta ideale sintetica:

Meglio usare tono documentabile e non aggressivo. Indica fatti, orari e richiesta concreta. Evita accuse personali. Se il problema continua, raccogli evidenze e valuta amministratore, regolamento condominiale o autorita competenti.

Checklist:

- scrivere fatti verificabili;
- evitare insulti;
- indicare orari e richieste precise;
- conservare comunicazioni;
- coinvolgere amministratore se necessario.

Livello: FREE.

