window.EvaluationSamples = [
  {
    "id": "CULTURE_BAD",
    "instruction": "Scrivi un breve testo informativo in italiano usando soltanto i fatti forniti.",
    "reference": "Centro culturale aperto martedì-domenica 09:00-19:00; chiuso lunedì; biglietto ordinario 12 euro; minori di 18 anni gratis; ultimo ingresso 18:00.",
    "output": "Il centro culturale è aperto tutti i giorni dalle 9:00 alle 19:00. Il biglietto costa 15 euro, mentre i bambini sotto i 12 anni entrano gratuitamente. L'ultimo ingresso è consentito alle 18:30. Ti consigliamo di arrivare presto per evitare lunghe code.",
    "major": true,
    "minor": false,
    "insufficient": false,
    "expected": "FAIL",
    "evidence": "Apertura, prezzo, fascia gratuita e ultimo ingresso alterati; code non documentate."
  },
  {
    "id": "CULTURE_FIXED",
    "instruction": "Scrivi un breve testo informativo in italiano usando soltanto i fatti forniti.",
    "reference": "Centro culturale aperto martedì-domenica 09:00-19:00; chiuso lunedì; biglietto ordinario 12 euro; minori di 18 anni gratis; ultimo ingresso 18:00.",
    "output": "Il centro culturale è aperto da martedì a domenica dalle 09:00 alle 19:00 ed è chiuso il lunedì. Il biglietto ordinario costa 12 euro; l'ingresso è gratuito per i minori di 18 anni. L'ultimo ingresso è alle 18:00.",
    "major": false,
    "minor": false,
    "insufficient": false,
    "expected": "PASS",
    "evidence": "I cinque fatti sono preservati."
  },
  {
    "id": "A",
    "instruction": "Scrivi un riassunto neutro in italiano, massimo 20 parole. Non aggiungere fatti.",
    "reference": "L'evento inizia alle 18:00. Ingresso gratuito. Registrazione obbligatoria.",
    "output": "L'evento inizia alle 18:00, l'ingresso è gratuito e la registrazione è obbligatoria.",
    "major": false,
    "minor": false,
    "insufficient": false,
    "maxWords": 20,
    "expected": "PASS",
    "evidence": "Fatti e condizione preservati."
  },
  {
    "id": "B",
    "instruction": "Scrivi un riassunto neutro in italiano, massimo 20 parole. Non aggiungere fatti.",
    "reference": "L'evento inizia alle 18:00. Ingresso gratuito. Registrazione obbligatoria.",
    "output": "Grande evento gratuito alle 18:00: registrati subito, i posti stanno finendo!",
    "major": true,
    "minor": false,
    "insufficient": false,
    "maxWords": 20,
    "expected": "FAIL",
    "evidence": "Scarsità dei posti non presente nel reference; tono promozionale."
  },
  {
    "id": "C",
    "instruction": "Scrivi un riassunto neutro in italiano, massimo 20 parole. Non aggiungere fatti.",
    "reference": "L'evento inizia alle 18:00. Ingresso gratuito. Registrazione obbligatoria.",
    "output": "L'evento gratuito inizia alle 18:00. La registrazione è consigliata.",
    "major": true,
    "minor": false,
    "insufficient": false,
    "maxWords": 20,
    "expected": "FAIL",
    "evidence": "Registrazione obbligatoria trasformata in consigliata."
  },
  {
    "id": "D",
    "instruction": "Scrivi un riassunto neutro in italiano, massimo 20 parole. Non aggiungere fatti.",
    "reference": "L'evento inizia alle 18:00. Ingresso gratuito. Registrazione obbligatoria.",
    "output": "L'evento inizia alle 18:00, l'ingresso e gratuito e la registrazione è obbligatoria.",
    "major": false,
    "minor": true,
    "insufficient": false,
    "maxWords": 20,
    "expected": "NEEDS REVISION",
    "evidence": "Accento mancante in 'è gratuito'; fatti preservati."
  },
  {
    "id": "B1_A",
    "instruction": "Checklist in italiano per nuovo collaboratore B1; massimo 4 punti e 45 parole; una azione principale per punto.",
    "reference": "Prima del servizio controllare bicchieri e tovaglioli. Se manca materiale avvisare il responsabile di turno. Iniziare solo dopo il controllo finale del responsabile.",
    "output": "Occorre ottemperare alla verifica preliminare delle dotazioni di servizio, procedendo alla segnalazione delle eventuali carenze al preposto di turno. L'avvio delle attività deve essere subordinato alla validazione conclusiva delle disponibilità operative da parte del medesimo referente.",
    "major": true,
    "minor": false,
    "insufficient": false,
    "maxWords": 45,
    "expected": "FAIL",
    "evidence": "Formato checklist obbligatorio assente; oggetti specifici omessi."
  },
  {
    "id": "B1_B",
    "instruction": "Checklist in italiano per nuovo collaboratore B1; massimo 4 punti e 45 parole; una azione principale per punto.",
    "reference": "Prima del servizio controllare bicchieri e tovaglioli. Se manca materiale avvisare il responsabile di turno. Iniziare solo dopo il controllo finale del responsabile.",
    "output": "1. Controlla i bicchieri.\n2. Controlla i tovaglioli.\n3. Se manca materiale, avvisa il responsabile di turno.\n4. Inizia il servizio solo dopo il controllo finale del responsabile.",
    "major": false,
    "minor": false,
    "insufficient": false,
    "maxWords": 45,
    "expected": "PASS",
    "evidence": "Quattro punti, oggetti e condizioni espliciti; comprensione B1 non testata con persone."
  },
  {
    "id": "UNKNOWN",
    "instruction": "Verifica il prezzo indicato nella risposta.",
    "reference": "",
    "output": "Il prezzo del biglietto è 12 euro.",
    "major": false,
    "minor": false,
    "insufficient": true,
    "expected": "NOT VERIFIABLE",
    "evidence": "Il prezzo di riferimento non è disponibile."
  }
];
