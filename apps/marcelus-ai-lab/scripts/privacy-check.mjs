import { execFileSync } from 'node:child_process';
import { readFileSync, lstatSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { detectPrivateText, isApprovedPublicContact } from './privacy-rules.mjs';

const root = fileURLToPath(new URL('../../../', import.meta.url));
const paths = [...new Set(execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard', '-z'], { cwd: root, encoding: 'utf8' }).split('\0').filter(Boolean))];
const findings = [];
for (const file of paths) {
  if (/(^|\/)(?:\.env(?:\..+)?|private|local-private)(\/|$)|APPLICATION_TRACKER|DISTRIBUTION_MATRIX|PORTFOLIO_GROWTH_PLAN|_PRIVATE\./i.test(file)) findings.push({ file, kind: 'private-file' });
  if (lstatSync(path.join(root, file)).isSymbolicLink()) { findings.push({ file, kind: 'symlink-requires-review' }); continue; }
  if (/\.(?:pdf|docx?|xlsx?|zip|rar|pem|key)$/i.test(file) && file !== 'apps/marcelus-ai-lab/public/cv/CV_Marcelo_Fernandez_IT.pdf') findings.push({ file, kind: 'unreviewed-document' });
  const bytes = readFileSync(path.join(root, file));
  if (/\.(?:pdf|png|jpe?g|ico)$/i.test(file)) continue;
  const text = bytes.toString('utf8');
  for (const kind of detectPrivateText(text)) {
    // Only the owner-approved address in the dedicated public profile field
    // is exempt. All other detected email addresses remain blocked.
    if (kind === 'email' && isApprovedPublicContact(file, text)) continue;
    findings.push({ file, kind });
  }
}
const cvDirectory = path.join(root, 'apps/marcelus-ai-lab/public/cv');
const manifest = JSON.parse(readFileSync(path.join(cvDirectory, 'public-manifest.json'), 'utf8'));
const hash = createHash('sha256').update(readFileSync(path.join(cvDirectory, manifest.file))).digest('hex');
if (hash !== manifest.sha256) findings.push({ file: manifest.file, kind: 'pdf-not-reviewed' });
// Never print matched values: diagnostics may themselves contain private information.
console.log(JSON.stringify({ checkedFiles: paths.length, findings, pdfMatchesReviewedHash: hash === manifest.sha256, scope: 'Heuristic source check plus reviewed PDF hash; not a guarantee about history or all binary formats.' }, null, 2));
if (findings.length) process.exitCode = 1;
