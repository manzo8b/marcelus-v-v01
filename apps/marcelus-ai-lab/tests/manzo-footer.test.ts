import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {test} from 'node:test';

test('shared footer uses real MANZO AI bull image and public cross-link',()=>{
 const layout=readFileSync('components/site-layout.tsx','utf8');
 assert.match(layout,/className="manzo-ecosystem-signature"/);
 assert.match(layout,/assetUrl\('\/media\/manzo-mark\.svg'\)/);
 assert.match(layout,/https:\/\/manzo8b\.github\.io\/manzo-ai\/it\//);
 assert.ok(layout.includes('<Navigation locale={locale} />'));
});
test('signature is not color-only, works dark and mobile, hidden in print',()=>{
 const css=readFileSync('app/learning-colors.css','utf8');
 for(const token of ['.manzo-ecosystem-signature','display:inline-flex','html[data-theme="dark"] .manzo-ecosystem-signature img','.manzo-ecosystem-signature:focus-visible','@media print']){
  assert.ok(css.includes(token),token);
 }
});
