const rules = [
  ['credential', /(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}|sk-(?:proj-)?[A-Za-z0-9_-]{30,}|BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY)/],
  ['email', /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i],
  ['private-device-path', /\/(?:Users|home)\/[a-zA-Z][^\s\n"']{2,}/],
  ['italian-tax-id', /\b[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]\b/],
  ['iban', /\bIT\d{2}[A-Z]\d{10}[A-Z0-9]{12}\b/],
  ['international-phone', /\+\d{1,3}[ ()-]*(?:\d[ ()-]*){8,14}/],
];

export function detectPrivateText(text) {
  return rules.filter(([, expression]) => expression.test(text)).map(([kind]) => kind);
}

/**
 * Owner-authorized PUBLIC portfolio contact. This narrow exception does not
 * allow other emails, copies of this email in other files, or extra addresses.
 * The address is assembled to keep this source file free from contact data.
 */
export function isApprovedPublicContact(file, text) {
  if (file !== 'apps/marcelus-ai-lab/data/portfolio.ts') return false;
  const approved = ['marcelo2020.it', 'gmail.com'].join('@');
  const found = [...text.matchAll(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi)].map(match => match[0]);
  return found.length === 1 && found[0] === approved && text.includes(`email: '${approved}'`);
}
