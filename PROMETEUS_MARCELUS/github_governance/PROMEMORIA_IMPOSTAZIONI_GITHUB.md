# Promemoria impostazioni GitHub

Data: 2026-07-01

Repository: `manzo8b/marcelus-v-v01`

Questo promemoria serve a ricordare quali impostazioni GitHub sono utili per Prometeus Marcelus, Bibliotheca Promethea e Promethea Economica.

## Obiettivo

Tenere il repository:

- pubblico e leggibile;
- sicuro;
- facile da esplorare;
- utile per tester e persone comuni;
- ordinato per Issues, Discussions, Wiki, Projects e Actions.

## Impostazioni gia coerenti

| Area | Stato consigliato | Perche serve |
|---|---|---|
| Wiki | Attiva | Serve come guida leggibile per utenti non tecnici. |
| Wiki editing | Solo collaboratori | Evita modifiche pubbliche non controllate. |
| Issues | Attive | Servono per problemi reali, bug, miglioramenti e casi test. |
| Discussions | Attive | Servono per domande, tester, idee e conversazioni aperte. |
| Projects | Attivo | Serve per Kanban, roadmap e priorita operative. |
| Preserve repository | Attivo | Aiuta a conservare il progetto come archivio pubblico. |
| Security policy | Presente | Dichiara come segnalare problemi sensibili. |
| Markdown quality | Presente | Controlla la qualita dei link Markdown. |

## Impostazioni da non toccare senza motivo

La sezione **Danger Zone** va trattata come zona protetta.

Non usare:

- Change repository visibility;
- Disable branch protection rules;
- Transfer ownership;
- Archive this repository;
- Delete this repository.

Queste azioni possono cambiare radicalmente o danneggiare il progetto.

## Pull Requests

Per ora il repository puo funzionare anche con commit diretti su `main`, ma appena il progetto cresce e meglio usare Pull Request per modifiche importanti.

### Consigli pratici

- Tenere attivo `Allow squash merging`.
- Usare PR per modifiche a README, Custom GPT, policy, sicurezza, AI Act, Promethea Economica e SUPERBIBLIOTECA.
- Attivare `Automatically delete head branches` quando inizieremo a usare branch dedicati.
- Non attivare auto-merge finche i workflow non sono stabili.

## Issues

Le Issues devono essere il motore dei miglioramenti reali.

Usarle per:

- casi reali da trasformare;
- errori nei prompt;
- link rotti;
- proposte di nuove macroaree;
- problemi privacy;
- miglioramenti README/Wiki;
- task Promethea Economica.

### Labels consigliate

- `documentation`
- `training`
- `privacy`
- `prompt-library`
- `custom-gpt`
- `promethea-economica`
- `good-first-issue`
- `ai-safety`
- `fonti`

## Discussions

Le Discussions servono per conversazioni meno operative delle Issues.

Usarle per:

- domande dei tester;
- idee nuove;
- feedback su Prometeus;
- feedback su Promethea Economica;
- esempi di richieste reali;
- proposte per Bibliotheca Promethea.

## Projects

Il Project deve essere la cabina di regia.

Colonne consigliate:

- Inbox
- Da valutare
- In lavorazione
- In revisione
- Pubblicato
- Da collegare a LinkedIn
- Archivio

Routine minima:

1. scegliere massimo 3 priorita;
2. trasformare feedback in Issues;
3. chiudere o archiviare cio che e completato;
4. pubblicare un avanzamento leggibile.

## Actions

Actions serve a controllare la qualita.

Workflow attivi o previsti:

- Markdown quality;
- security policy check;
- Dependabot.

Regola: se un workflow fallisce, correggere prima il problema tecnico e poi continuare con contenuti nuovi.

## Sponsor button

Non e urgente.

Promemoria strategico:

1. prima fiducia;
2. poi tester;
3. poi utilita dimostrabile;
4. solo dopo monetizzazione leggera.

## Impostazione consigliata per la fase attuale

La fase attuale non deve cercare troppe automazioni.

Priorita:

- README chiaro;
- Wiki semplice;
- Issues ordinate;
- Discussions aperte;
- Project Kanban;
- workflow verde;
- casi reali trasformati;
- Promethea Economica v0.1 stabile.

## Regola finale

GitHub non deve diventare un labirinto.

Deve essere una casa ordinata:

- README = ingresso;
- Wiki = guida;
- Issues = lavoro da fare;
- Discussions = conversazione;
- Projects = tavolo operativo;
- Actions = controllo qualita;
- Security = fiducia.

