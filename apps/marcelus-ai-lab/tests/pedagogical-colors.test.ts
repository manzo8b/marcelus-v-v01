import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {test} from 'node:test';

const globalCss=readFileSync('app/learning-colors.css','utf8');
const homeCss=readFileSync('components/home-v2.module.css','utf8');
const layout=readFileSync('components/site-layout.tsx','utf8');
const previousCss=readFileSync('app/globals.css','utf8');

function luminance(hex:string):number{
 const components=[1,3,5].map(i=>Number.parseInt(hex.slice(i,i+2),16)/255)
   .map(c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4);
 return .2126*components[0]+.7152*components[1]+.0722*components[2];
}
function contrast(a:string,b:string):number{
 const x=luminance(a),y=luminance(b);
 return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);
}
test('five semantic accents pass WCAG AA regular text on white and warm ivory',()=>{
 const colors=['#244F9B','#0C615D','#B13F28','#67439A','#7B4B10'];
 for(const c of colors){
  for(const bg of ['#FFFFFF','#FCFBF8']){
   assert.ok(contrast(c,bg)>=4.5,c+' '+bg+' '+contrast(c,bg));
  }
 }
});
test('dark semantic accents readable on primary dark surfaces',()=>{
 const colors=['#AEC6FF','#8EE1CF','#FFAD92','#D4C0FF','#F6D18A'];
 for(const c of colors){
  for(const bg of ['#131922','#202936']){
   assert.ok(contrast(c,bg)>=4.5,c+' '+bg);
  }
 }
});
test('palette imported after globals, not before existing selectors',()=>{
 assert.ok(layout.indexOf("import '@/app/globals.css'")>=0);
 assert.ok(layout.indexOf("import '@/app/learning-colors.css'")>layout.indexOf("import '@/app/globals.css'"));
 assert.ok(previousCss.startsWith('@import "tailwindcss";'));
});
test('main site and home receive project navigation, call-to-action and learning taxonomy',()=>{
 for(const term of ['--lab-blue','#244F9B','#0C615D','#B13F28','#67439A','#7B4B10','.site-header','.main-nav a[aria-current="page"]','.project-grid .project-card','.library-toolbar','.button-primary','.footer-inner','html[data-theme="dark"]','@media print','prefers-reduced-motion']){
  assert.ok(globalCss.includes(term),'global: '+term);
 }
 for(const term of ['.heroText h1 span','.featuredCard.accentVerum','.featuredCard.accentPrometeus','.featuredCard.accentRisto','.featuredCard.accentEditorial','.caseCard:nth-child(3n+3)','.methodStep:nth-child(4n+4)','.skillsSection','.contactBand','.villaFeature','.freeFeature',':global(html[data-theme="dark"])']){
  assert.ok(homeCss.includes(term),'home: '+term);
 }
});
test('color-only change does not alter core page structure',()=>{
 assert.ok(layout.includes('<Navigation locale={locale} />'));
 assert.ok(layout.includes('<main id="main-content"'));
 assert.ok(layout.includes('<footer className="site-footer"'));
});
