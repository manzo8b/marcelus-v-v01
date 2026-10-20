import index from './library-index.json' with { type: 'json' };
import { repository } from './portfolio.ts';

export const library = index;
export type LibraryEntry = typeof library.entries[number];
const priorityAreas = ['03', '24', '15', '05', ...library.categories.map(area => area.id).filter(id => !['03', '24', '15', '05'].includes(id))];
const startingEntries = priorityAreas.map(id => library.entries.find(entry => entry.category === id)!);
const startingIds = new Set(startingEntries.map(entry => entry.id));
const browseOrder = [...startingEntries, ...library.entries.filter(entry => !startingIds.has(entry.id))];
export function normalizeSearch(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('it').trim();
}
export function searchLibrary(query: string, category = '') {
  const terms = normalizeSearch(query.slice(0, 120)).split(/\s+/).filter(Boolean);
  const source = !terms.length && !category ? browseOrder : library.entries;
  return source.filter(entry => (!category || entry.category === category) && terms.every(term => normalizeSearch(entry.title).includes(term)));
}
export function librarySourceUrl(entry: LibraryEntry) {
  return `${repository}/blob/${library.sourceCommit}/${entry.path}#L${entry.line}`;
}
