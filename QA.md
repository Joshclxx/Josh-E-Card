# Validation report

Updated on October 21, 2026 using Node 24 and Chrome through Playwright CLI, after adding the supplied social profiles, phone numbers, and Call Me action.

## Build and source review

- `npm run build`: PASS. Strict TypeScript checking and the Vite production build complete successfully.
- Source review: PASS. Profile content and destination URLs are centralized in a typed configuration, no guessed profiles or personal details are introduced, and source assets are local.
- Coding standards: PASS. No project-specific coding standards or ancestor `PROJECT_RULES.md` were present; the universal TypeScript baseline and strict compiler configuration were applied. No lint or unit-test runner is configured. Browser checks cover the requested behavior.
- Production page loads without JavaScript errors; the portrait and logo both load. Fonts are bundled locally.

## Responsive and visual checks

All six requested widths were checked in Chrome and saved as screenshots from the production build:

| Width  | Composition                              | Horizontal overflow | Interactive targets |
| ------ | ---------------------------------------- | ------------------- | ------------------- |
| 375px  | Mobile stack                             | None                | At least 44 × 44px  |
| 390px  | Mobile stack                             | None                | At least 44 × 44px  |
| 768px  | Tablet, social icons beside introduction | None                | At least 44 × 44px  |
| 820px  | Tablet, social icons beside introduction | None                | At least 44 × 44px  |
| 1024px | Wider tablet composition                 | None                | At least 44 × 44px  |
| 1440px | Desktop columns and full-width CTA       | None                | At least 44 × 44px  |

Additional overflow checks passed at 280, 320, 599, 600, 1179, and 1180px. Native browser zoom was not directly exercised.

Mobile, tablet, and desktop screenshots are refreshed for the contact update. The original four circular social buttons remain in order: LinkedIn, Instagram, Facebook, GitHub. Email, WhatsApp, Viber, Threads, X, and TikTok use uniform full-width contact rows with matching icon tiles, spacing, and chevrons. The empty portfolio row and repeated Instagram row are removed. The portrait and official monogram are unchanged.

The primary button uses bold text at least 19px and white on orange with a minimum contrast ratio of approximately 3.1:1 across its gradient, meeting the large-text threshold. Supporting text and focus indicators were visually checked. This is not a complete automated accessibility audit.

## Interaction checks

- **Save Contact:** a real browser download from the updated local production build succeeded. The downloaded `joshua-colobong.vcf` has vCard 3.0 markers, name, title, email, exactly one `TEL;TYPE=CELL:+639924038038`, and messaging notes with WhatsApp and Viber numbers. Its line endings are exclusively CRLF, its final line ends with CRLF, and every line is within 75 bytes. No employer or address is invented. A visible status explains opening/importing the contact card.
- **Escaping:** synthetic configuration values containing commas, semicolons, newlines, and backslashes produce correctly escaped vCard field values.
- **Call Me:** the former Let’s Connect action is now a telephone link to `tel:+639924038038`. A browser click with the native protocol launch intercepted confirms this exact target without placing a call.
- **Email and CTA:** the Email row is the only `mailto:` action, with the supplied address and encoded “Let’s work together” subject. The project CTA now navigates to the contact heading and moves keyboard focus there.
- **Provided profiles:** each supplied destination appears exactly once. Instagram uses the corrected `_joshclxx` handle, GitHub uses `Joshclxx`, and LinkedIn, Facebook, Threads, X, and TikTok match the supplied profile paths. TikTok tracking parameters are omitted. No website/portfolio URL was supplied or invented.
- **Messaging:** WhatsApp points to `https://wa.me/639924038038`; Viber uses `viber://chat?number=%2B639381712437`. Display numbers are `09924038038` and `09381712437`. Their native app handoffs are not tested.
- **Duplication:** all 13 page anchor destinations are distinct. There are exactly four circular profile links, one telephone link, one email action, one WhatsApp link, and one Viber link. External HTTPS profile links use `target="_blank"` with `rel="noopener noreferrer"`.
- **Sharing:** the existing Share component is unchanged. Its native-share, clipboard, manual-copy, cancellation, and failure branches passed controlled-browser tests during the original implementation on October 20; those tests were not repeated for this contact-only change.
- **Keyboard:** the skip link and project CTA use real page anchors, with a focusable main region and contact heading. Newly added channels remain native keyboard-accessible links with the existing visible focus style.
- **Reduced motion:** emulating `prefers-reduced-motion: reduce` removes action transitions.

## Verification limits

Native operating-system share sheets, the system clipboard, the user's email client, importing the vCard into a contacts app, and external Instagram navigation were not exercised. Sharing branches were verified with controlled browser implementations; link targets were inspected without opening external applications. Safari, Firefox, physical touch devices, and screen readers were not tested.

This report covers the updated local production build. Verification of a deployed version is separate from these local checks.

## Artifacts

- `output/playwright/card-375.png`
- `output/playwright/card-390.png`
- `output/playwright/card-768.png`
- `output/playwright/card-820.png`
- `output/playwright/card-1024.png`
- `output/playwright/card-1440.png`
- `output/playwright/joshua-colobong.vcf`
