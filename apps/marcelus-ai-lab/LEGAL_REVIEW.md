# MARCELUS AI LAB — Minimal legal/privacy release checklist

**DRAFT PR — DO NOT MERGE OR PUBLISH BEFORE REVIEW.**

## Current scope
MARCELUS AI LAB is a **personal, independent portfolio**. No checkout, professional services sold through this site, forms, accounts or visitor analytics are represented as active. Paid services or SaaS would require a fresh compliance/hosting review before launch.

**Owner-confirmed legal name:** Marcelo Javier Fernandez Caballero. The ordinary portfolio display name stays **Marcelo Fernandez**; no private home address, tax ID or phone has been added. Any legally required additional identity/contact disclosures remain subject to verification.

## Minimal practical measures

### Mailbox rule — proposed, not yet operationally verified
- Regular visitor correspondence: delete **no later than 12 months after the last relevant exchange**; remove earlier if the purpose has ended.
- Unwanted/irrelevant spam: normally delete within **30 days**.
- Communications genuinely necessary for a specific legal duty, rights request or concrete dispute may be retained separately **only for a documented and proportionate period**.
- **Every 3 months**, manually review inbox, sent mail, archive and trash; apply labels or search dates as appropriate. The owner must actually implement this practice before the retention rule can be stated as operational.
- For privacy-rights emails, identify the received date; respond without undue delay and normally **within one month**, subject to the lawful extension procedure. Do not publish personal details from inquiries in Git.
- This is an operational policy proposed for the current non-commercial portfolio, **not a statutory 12-month retention period**.

### Browser/storage rule
- The application stores a theme preference in `localStorage` under `marcelus-theme`.
- Do **not** add third-party analytics, advertising pixels, tracking technologies or new optional storage without revisiting ePrivacy/GDPR and, if needed, prior consent.
- Audit the real site on a fresh browser profile: Cookies, local/session storage, embedded media and network requests, on EN/IT/ES pages.
- No cookie banner is introduced merely because a Cookie Policy page exists; the Garante guidance exempts strictly technical technologies from consent while requiring appropriate information.

### GitHub Pages and email providers
- GitHub Pages states it records visitor IP addresses for security, including unsigned visitors.
- Verify the respective data-protection roles and conditions of **GitHub Pages** and the public email service, including whether international transfer notices and safeguards need further details.
- Do not assert that the portfolio owner can access, control or delete GitHub's security logs.
- Existing public email contact is reused centrally; no duplicate addresses are introduced in legal source.

### Legal text and IP
- Confirm GDPR Art. 13 elements, actual legal bases, complaint rights and applicable supplier notices.
- Confirm whether extra identification obligations apply despite current non-commercial status; **do not add a personal address automatically**.
- Licence notices must be matched to the relevant material; repository CC BY 4.0 is not a universal licence for third-party logos/photos.
- Do not attempt to disclaim mandatory liability or promise verified accuracy of prepared/synthetic AI demonstrations.
- Future paid offerings are **out of current scope**; reassess Pages hosting terms, VAT/tax position and terms of sale if those are later planned.

## Draft indexing safety
- While the PR is in review, all legal routes have `noindex, nofollow` metadata and are deliberately **excluded** from the XML sitemap.
- At final approval remove the draft notices, switch pages to normal indexing, and add the nine language-specific URLs to the sitemap with canonical and `hreflang` verification.
- Do not merge or publish until these changes are made and the reviewed build passes.

## Before approving production
1. Verify and implement the mailbox deletion process.
2. Review hosting/mail-provider roles and any international transfers.
3. Run live browser cookie/storage/network audit; no third-party analytics presumed.
4. Validate copy with an appropriate qualified legal professional if necessary.
5. Run `npm ci`, `npm test`, `npm run typecheck`, `npm run privacy:check`, and the GitHub Pages static export.
6. Test all nine localized legal routes, footer navigation, canonical metadata, mobile and keyboard experience.
7. Remove visible DRAFT notices; restore legal page indexing and sitemap entries; then approve the changes and publish using the existing authorized workflow.

## Authoritative references
- GDPR: https://eur-lex.europa.eu/eli/reg/2016/679/oj
- Garante, cookie/tracking guidance: https://www.garanteprivacy.it/faq/Cookie
- Garante, transparency and duties: https://www.garanteprivacy.it/
- GitHub Pages IP logging: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- GitHub Privacy Statement: https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement
- GitHub Pages terms: https://docs.github.com/en/site-policy/github-terms/github-terms-for-additional-products-and-features

**Limits:** Code inspection and this checklist do not certify legal compliance; no browser/network audit or complete build has been performed in this edit.
