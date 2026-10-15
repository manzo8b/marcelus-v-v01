# Caso 04 - VERUM: dati reali, denominatori diversi

Data della revisione: 15 ottobre 2026. Esempio sintetico scritto e revisionato con assistenza AI per il portfolio: il post non e attribuito a una persona o testata reale. I dati di riferimento provengono dalle due pubblicazioni Eurostat indicate sotto, consultate durante la preparazione. Non e una conversazione live con il GPT VERUM, una verifica web eseguita dal browser dell'utente o una validazione indipendente.

## Problema

Un testo puo citare un numero reale ma cambiarne il denominatore, confondere punti percentuali e variazione relativa, quindi aggiungere una conclusione causale che le fonti non dimostrano. Controllare solo la presenza del numero non basta.

## Post illustrativo da verificare

> Nel 2024 le rinnovabili hanno coperto il 47,5% del consumo lordo di elettricita dell'UE. Quindi il 47,5% di tutta l'energia consumata nell'UE, inclusi trasporti e riscaldamento, era rinnovabile. La quota elettrica e aumentata del 2,1% in termini relativi sul 2023. Questo dimostra che la bolletta di ogni famiglia e diminuita del 30% grazie alle rinnovabili.

## Dossier delle fonti

| ID | Fonte primaria | Pubblicazione | Ambito del dato |
| --- | --- | --- | --- |
| S1 | [Eurostat: 2024, nearly 50% of EU electricity came from renewables](https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20260114-1) | 14 gennaio 2026 | 47,5% del consumo lordo di elettricita UE nel 2024; aumento di 2,1 punti percentuali sul 2023 |
| S2 | [Eurostat: 25.2% of energy EU used in 2024 came from renewables](https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251218-2) | 18 dicembre 2025 | 25,2% del consumo finale lordo di energia UE nel 2024 |

Livello fonte: A secondo la gerarchia documentata nel [metodo VERUM](../FACT_CHECK_INDIPENDENTE/METODO_FACT_CHECKING.md): statistiche istituzionali. Sono due pubblicazioni della stessa istituzione, non due conferme istituzionali indipendenti. Il dossier conserva una lettura datata delle pubblicazioni, non promette dati correnti o immuni da revisioni.

## Verifica per affermazione

| ID | Affermazione | Verdetto documentale | Motivazione | Fonti |
| --- | --- | --- | --- | --- |
| C1 | 47,5% del consumo lordo di elettricita UE nel 2024 | VERO | Indicatore, anno e area geografica corrispondono alla pubblicazione | S1 |
| C2 | Lo stesso 47,5% rappresenta tutta l'energia, inclusi trasporti e riscaldamento | FALSO | Si cambia indicatore: per il consumo finale lordo di energia la pubblicazione riporta 25,2% | S1, S2 |
| C3 | Aumento relativo del 2,1% sul 2023 | IMPRECISO | S1 riporta 2,1 punti percentuali. Dai numeri arrotondati si ricava una base del 45,4% e un aumento relativo di circa 4,6% | S1, calcolo esplicito |
| C4 | Il dato dimostra una riduzione del 30% della bolletta di ogni famiglia causata dalle rinnovabili | NON DIMOSTRATO | Le due fonti non misurano bollette familiari ne isolano un effetto causale. Non si deduce automaticamente che l'affermazione opposta sia vera | S1, S2: prova insufficiente per questa conclusione |

Verdetto complessivo documentale: **FUORVIANTE**. Il testo parte da un dato corretto, poi cambia indicatore, unita della variazione e livello della conclusione. Questi verdetti descrivono affermazioni sul mondo; non sono i codici PASS/FAIL della rubrica di valutazione di output.

## Controllo numerico riproducibile

```text
Quota 2024: 47,5%
Differenza dichiarata da S1: 2,1 punti percentuali
Base 2023 implicita nei valori arrotondati: 47,5 - 2,1 = 45,4%
Variazione relativa approssimata: (47,5 - 45,4) / 45,4 * 100 = 4,6255...%
```

La base e il risultato relativo sono calcoli su cifre arrotondate, non una nuova estrazione della serie statistica. I due indicatori, elettricita ed energia finale, non sono sommabili o intercambiabili.

## Riscrittura corretta

Secondo le pubblicazioni Eurostat citate, nel 2024 le rinnovabili rappresentavano il 47,5% del consumo lordo di elettricita dell'UE e il 25,2% del consumo finale lordo di energia. La quota elettrica era aumentata di 2,1 punti percentuali sul 2023. Queste fonti non consentono di stabilire una riduzione del 30% della bolletta di ogni famiglia o di attribuirla causalmente alle rinnovabili.

## Qualita e limiti

- Controllati area UE, anno 2024, denominatore e unita di misura per ciascuna affermazione.
- Esposti link, data di pubblicazione, data della revisione e calcolo della variazione relativa.
- Nessuna percentuale di confidenza di un modello, consenso indipendente o efficacia reale inventata.
- L'assenza di prove nel dossier limita il verdetto C4; non costituisce una ricerca esaustiva di tutte le fonti sulle bollette.
- Nella micro-app il pulsante rivela questa analisi gia predisposta. Non avvia ricerche, LLM o classificazioni automatiche di nuovo testo.
- Le traduzioni EN/IT/ES sono editoriali e non nuove verifiche indipendenti. Le future revisioni devono ricontrollare le pubblicazioni e conservare la versione precedente.
