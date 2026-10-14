'use strict';
const ids = ['title', 'instruction', 'reference', 'candidate', 'major', 'minor', 'insufficient', 'evidence', 'correction'];
const criteria = ['Instruction adherence', 'Factual consistency', 'Supported content', 'Italian language quality', 'Tone and usefulness'];
const $ = id => document.getElementById(id);
const storageKey = 'evaluation-desk-v1.1';
let reviewed = false;
let selectedId = '';
criteria.forEach((name, i) => {
  const row = document.createElement('div'); row.className = 'criterion';
  const label = document.createElement('label'); label.htmlFor = `score-${i}`; label.textContent = name;
  const select = document.createElement('select'); select.id = `score-${i}`;
  ['', '1', '2', '3', '4', '5', 'NV'].forEach(value => {
    const option = document.createElement('option'); option.value = value; option.textContent = value === '' ? 'Da valutare' : value === 'NV' ? 'Non verificabile' : `${value} / 5`; select.append(option);
  });
  row.append(label, select); $('criteria').append(row);
});
(window.EvaluationSamples || []).forEach(sample => {
  const option = document.createElement('option'); option.value = sample.id; option.textContent = sample.id; $('sample').append(option);
});
function state() {
  const data = { sampleId: selectedId, rubric: '1.1', reviewed };
  ids.forEach(id => { data[id] = $(id).type === 'checkbox' ? $(id).checked : $(id).value; });
  data.scores = criteria.map((name, i) => ({ criterion: name, score: $(`score-${i}`).value }));
  data.verdict = reviewed ? EvaluationLogic.verdict(data) : 'DA VALUTARE';
  return data;
}
function showState() {
  $('word-count').textContent = `${EvaluationLogic.countWords($('candidate').value)} parole`;
  const data = state(); $('verdict').textContent = data.verdict;
  document.querySelector('.decision').dataset.result = data.verdict;
  $('status').textContent = reviewed ? 'Valutazione conclusa' : 'Bozza';
}
function clear() {
  ids.forEach(id => { if ($(id).type === 'checkbox') $(id).checked = false; else $(id).value = ''; });
  $('title').value = 'Valutazione senza titolo';
  criteria.forEach((_, i) => { $(`score-${i}`).value = ''; });
  selectedId = ''; reviewed = false; $('sample').value = ''; $('message').textContent = ''; showState();
}
document.querySelector('main').addEventListener('input', () => { reviewed = false; showState(); });
$('clear').addEventListener('click', clear);
$('load').addEventListener('click', () => {
  const sample = (window.EvaluationSamples || []).find(item => item.id === $('sample').value);
  if (!sample) { clear(); return; }
  clear(); selectedId = sample.id; $('sample').value = sample.id;
  $('title').value = `Demo ${sample.id}`;
  ['instruction', 'reference', 'candidate'].forEach(id => { $(id).value = sample[id === 'candidate' ? 'output' : id]; });
  showState();
});
$('finish').addEventListener('click', () => {
  const data = state();
  if (!data.instruction.trim() || !data.candidate.trim() || !data.evidence.trim() || data.scores.some(item => !item.score)) {
    $('message').textContent = 'Completa istruzione, risposta, voti e motivazione.'; return;
  }
  if (!data.reference.trim() && !data.insufficient) {
    $('message').textContent = 'Aggiungi il reference oppure indica evidenza insufficiente.'; return;
  }
  if (data.scores.some(item => item.score === 'NV') && !data.insufficient) {
    $('message').textContent = 'Indica evidenza insufficiente per il criterio non verificabile.'; return;
  }
  reviewed = true; $('message').textContent = ''; showState();
});
function storageAvailable() { try { return localStorage.getItem(storageKey) !== null; } catch { return false; } }
$('restore').disabled = !storageAvailable();
$('save').addEventListener('click', () => {
  try { localStorage.setItem(storageKey, JSON.stringify(state())); $('restore').disabled = false; $('message').textContent = 'Bozza salvata in questo browser.'; }
  catch { $('message').textContent = 'Salvataggio locale non disponibile. Puoi esportare il report.'; }
});
$('restore').addEventListener('click', () => {
  try {
    const data = JSON.parse(localStorage.getItem(storageKey));
    if (!data || data.rubric !== '1.1' || !Array.isArray(data.scores)) throw new Error('Bozza non valida');
    ids.forEach(id => { if ($(id).type === 'checkbox') $(id).checked = Boolean(data[id]); else $(id).value = String(data[id] || ''); });
    data.scores.forEach((item, i) => { if ($(`score-${i}`)) $(`score-${i}`).value = item.score; });
    selectedId = data.sampleId || ''; $('sample').value = selectedId;
    reviewed = false; $('message').textContent = 'Bozza ripresa. Concludi la valutazione dopo il controllo.'; showState();
  } catch { $('message').textContent = 'La bozza locale non è disponibile.'; }
});
$('export').addEventListener('click', () => {
  const data = state();
  const lines = [`# ${data.title || 'Valutazione'}`, '', `Rubrica: ${data.rubric}`, 'Modalità: annotazione manuale; nessun modello AI collegato.', `Verdetto: ${data.verdict}`, '', '## Istruzione', data.instruction, '', '## Reference', data.reference || 'Non disponibile', '', '## Risposta', data.candidate, '', '## Voti', ...data.scores.map(item => `- ${item.criterion}: ${item.score || 'Non assegnato'}`), '', '## Evidenza e motivazione', data.evidence, '', '## Correzione', data.correction, '', `Errore sostanziale: ${data.major}`, `Problema minore: ${data.minor}`, `Evidenza insufficiente: ${data.insufficient}`];
  const blob = new Blob([lines.join('\n')], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob); const anchor = document.createElement('a'); anchor.href = url; anchor.download = 'Valutazione_AI.md'; anchor.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
});
showState();
