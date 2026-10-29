import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {test} from 'node:test';

test('contact and service inquiries are prominently offered in all three locales',()=>{
 const nav=readFileSync('components/navigation.tsx','utf8');
 const css=readFileSync('app/learning-colors.css','utf8');
 const data=readFileSync('data/portfolio.ts','utf8');
 assert.match(data,/marcelo2020\.it@gmail\.com/);
 assert.match(nav,/mailto:\$\{profile\.email\}/);
 assert.match(nav,/marcelus-contact-strip/);
 for(const language of ['Contatti e servizi','Contacto y servicios','Contact & services'])assert.ok(nav.includes(language));
 assert.match(css,/\.marcelus-contact-strip/);
 assert.match(css,/@media\(max-width:650px\)/);
});
