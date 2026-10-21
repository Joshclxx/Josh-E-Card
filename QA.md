# Validation report

Validated on October 20, 2026 using Node 24 and Chrome through Playwright CLI.

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

Additional overflow checks passed at 280, 320, 599, 600, 720, 1179, and 1180px. The 720px check exercises the layout viewport equivalent of 200% browser zoom from a 1440px window; native browser zoom was not directly exercised. A narrower-screen tooltip overflow discovered at 320px was fixed and rechecked.

Mobile, tablet, and desktop screenshots were visually compared with the corresponding supplied references. The official supplied monogram replaces the simpler JC lettering in the mockups. Missing destinations carry a small unavailable indicator or an explanatory label. The portrait is framed with CSS; the original file and face are unchanged.

The primary button uses bold text at least 19px and white on orange with a minimum contrast ratio of approximately 3.1:1 across its gradient, meeting the large-text threshold. Supporting text and focus indicators were visually checked. This is not a complete automated accessibility audit.

## Interaction checks

- **Save Contact:** a real browser download succeeded in both development and production. The downloaded `joshua-colobong.vcf` was inspected for vCard 3.0 markers, name, title, email, final CRLF, and exclusively CRLF line endings. No phone, employer, or address fields are present.
- **Escaping:** synthetic configuration values containing commas, semicolons, newlines, and backslashes produce correctly escaped vCard field values.
- **Email actions:** Let’s Connect, the email row, and the project CTA have identical `mailto:` destinations with the supplied email and encoded “Let’s work together” subject.
- **Instagram:** both destinations point to `https://www.instagram.com/joshclxx/` and use `target="_blank"` with `rel="noopener noreferrer"`.
- **Unavailable destinations:** LinkedIn, Facebook, and GitHub are explicitly unavailable; the portfolio row is non-interactive and says its link has not been added. No placeholder `#` destinations are used. The skip link uses a real page anchor.
- **Share API:** a browser-injected successful Web Share implementation receives the page URL, profile title, and role and produces an accessible success message.
- **Clipboard fallback:** injected clipboard success copies the current URL and produces a success message.
- **Manual copy fallback:** injected clipboard rejection shows a persistent selectable URL, focuses and selects it, and exposes a status message. Escape dismisses it and restores focus to Share.
- **Share errors and cancellation:** an injected non-cancellation share error proceeds to the fallback; an `AbortError` quietly leaves the card usable.
- **Keyboard:** the skip link is first in the fresh-page tab order and moves focus to the main card. Actions, available links, unavailable social controls, and the project CTA can be traversed with visible focus outlines.
- **Reduced motion:** emulating `prefers-reduced-motion: reduce` removes action transitions.

## Verification limits

Native operating-system share sheets, the system clipboard, the user's email client, importing the vCard into a contacts app, and external Instagram navigation were not exercised. Sharing branches were verified with controlled browser implementations; link targets were inspected without opening external applications. Safari, Firefox, physical touch devices, and screen readers were not tested.

The four missing destination URLs remain intentionally unconfigured. Add them in `src/profile.ts` when supplied. No deployment, Git initialization, commit, or external publication was performed.

## Artifacts

- `output/playwright/card-375.png`
- `output/playwright/card-390.png`
- `output/playwright/card-768.png`
- `output/playwright/card-820.png`
- `output/playwright/card-1024.png`
- `output/playwright/card-1440.png`
- `output/playwright/joshua-colobong.vcf`
