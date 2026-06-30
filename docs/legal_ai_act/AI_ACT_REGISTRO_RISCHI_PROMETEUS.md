# AI Act - Registro Rischi Prometeus Marcelus

Versione: 0.1
Data: 2026-06-30

## Scopo

Questo registro identifica rischi realistici per Prometeus Marcelus e propone controlli pratici. Deve essere aggiornato ogni volta che vengono aggiunti prompt, Custom GPT, servizi a clienti, materiali premium o workflow AI.

| ID | Rischio | Scenario | Livello | Controllo Prometeus | Stato |
|---|---|---|---|---|---|
| AI-01 | Consulenza legale implicita | Prompt AI Act usato come parere definitivo | Alto | Avvertenza, fonti ufficiali, revisione professionale | Da applicare |
| AI-02 | Uso sanitario improprio | Prompt cardiologia usato per diagnosi o terapia | Alto | Solo informativo, emergenze a medico/112/118, revisione sanitaria | Da applicare |
| AI-03 | HR alto rischio | Prompt turni/HR usato per valutare o penalizzare lavoratori | Alto | Vietare decisione automatica, supervisione umana, trasparenza lavoratori | Da applicare |
| AI-04 | Dati personali in input | Utenti inseriscono CV, referti, contratti, documenti clienti | Alto | Minimizzazione, anonimizzazione, avviso privacy | Da applicare |
| AI-05 | Dati particolari | Salute, minori, biometria, opinioni politiche | Alto | Non richiedere dati sensibili, usare casi anonimi | Da applicare |
| AI-06 | Pratiche vietate | Social scoring, manipolazione, vulnerabilita, biometria | Critico | Rifiuto o trasformazione sicura del prompt | Da applicare |
| AI-07 | Trasparenza contenuti AI | Articoli, post, immagini, testi pubblici senza disclosure | Medio | Etichetta AI assisted quando opportuno | Da applicare |
| AI-08 | Deepfake o contenuti ingannevoli | Creazione media sintetici realistici non dichiarati | Alto | Vietare inganno, richiedere disclosure | Da applicare |
| AI-09 | Output normativi non aggiornati | Norme citate senza controllo su EUR-Lex/Gazzetta | Alto | "Da verificare su fonte ufficiale" e link fonti | Da applicare |
| AI-10 | Bias e discriminazione | Prompt produce stereotipi su persone o gruppi | Alto | Check anti-bias e linguaggio neutrale | Da applicare |
| AI-11 | Overreliance | Utente segue output senza controllo | Medio | Self-check finale e decisione umana obbligatoria | Da applicare |
| AI-12 | Premium non separato | Prompt premium o monetizzazione pubblicati per errore | Medio | Cartelle private e marcatura FREE/PREMIUM/PRIVATO | Da applicare |
| AI-13 | Claim eccessivi | "Conforme AI Act" senza audit legale | Alto | Usare "orientato alla compliance" o "guida preliminare" | Da applicare |
| AI-14 | Uso politico manipolativo | Prompt per influenzare voto con target vulnerabili | Critico | Analisi neutrale, fact-checking, no microtargeting manipolativo | Da applicare |
| AI-15 | Sicurezza aziendale invasiva | Sorveglianza lavoratori o clienti con AI | Alto | Privacy by design, DPIA da valutare, revisione legale | Da applicare |
| AI-16 | GitHub pubblico con dati riservati | Documenti cliente o prompt privati pubblicati | Alto | Revisione prima del commit, cartella privata, niente dati reali | Da applicare |
| AI-17 | Responsabilita verso tester | Tester inviano casi con dati personali | Medio | Istruzioni per anonimizzare, no dati sensibili | Da applicare |
| AI-18 | Uso in istruzione valutativa | Prompt per valutare studenti automaticamente | Alto | Supporto didattico, no decisione automatica | Da applicare |
| AI-19 | Uso in credito/assicurazioni | Prompt usato per giudicare affidabilita persone | Alto | Solo checklist informativa, no scoring persone | Da applicare |
| AI-20 | Incidenti non tracciati | Errori ripetuti non diventano miglioramenti | Medio | Issue GitHub con etichetta legal-risk o ai-act | Da applicare |

## Matrice rapida

| Livello | Azione |
|---|---|
| Basso | Consentire con avvertenza e verifica umana |
| Medio | Consentire con checklist, fonti e limiti |
| Alto | Consentire solo come informazione preliminare, con professionista o supervisione competente |
| Critico | Rifiutare, trasformare o indirizzare a uso sicuro |

## Regola di escalation

Se il prompt riguarda salute, lavoro, istruzione, credito, assicurazioni, giustizia, PA, sicurezza, biometria, minori, dati sensibili o decisioni su persone, Prometeus deve:

1. chiedere contesto minimo non sensibile;
2. dichiarare i limiti;
3. evitare decisioni automatiche;
4. produrre checklist e domande;
5. indicare professionista o fonte ufficiale;
6. richiedere revisione umana.
