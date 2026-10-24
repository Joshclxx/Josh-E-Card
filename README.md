# Joshua Colobong — Digital Business Card

A responsive, frontend-only business card built with React, TypeScript, Vite, Tailwind CSS, and Lucide React. It follows the supplied mobile, tablet, and desktop references and uses the supplied portrait and official JC monogram locally.

## Run locally

Use Node.js 22.12+ or 24+ and npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://127.0.0.1:5173/`.

```sh
npm run build      # Strict TypeScript check and production build
npm run preview    # Serve the production build locally
npm run typecheck  # TypeScript check alone
```

The production output is in `dist/`. No environment variables, API keys, backend, or paid services are needed. Fonts are bundled locally; the page does not depend on a font CDN.

## Update the card

Edit [`src/profile.ts`](src/profile.ts) for the name, role, location, email, mobile and Viber numbers, introduction, asset paths, and destination URLs. Phone numbers are stored in international format; local display numbers and action links are derived from them.

The five circular buttons link to LinkedIn, Instagram, Facebook, Email, and GitHub, with Email immediately before GitHub. Instagram uses the corrected `_joshclxx` username. The contact section contains six uniform full-width cards: Portfolio, WhatsApp, Viber, Threads, X, and TikTok. Portfolio links to `https://joshclxx-portfolio-alpha.vercel.app/`. Each card uses the same icon tile, spacing, and chevron. The TikTok link keeps the supplied profile path and omits its tracking query parameters.

Call Me uses `tel:+639924038038` to open the visitor’s phone/calling app. The email action appears in the circular Email button, and WhatsApp uses the same mobile number for messaging. The project CTA navigates to the contact options instead of repeating the email action. Viber uses an application link and requires a compatible Viber installation.

## Local assets

- `public/assets/joshua-portrait.png`: the supplied navy-polo portrait with its original orange and navy background. The original file is preserved; CSS crops its display without stretching or modifying the face.
- `public/assets/josh-logo.png`: the supplied official JC monogram, also used as the favicon. CSS accommodates the source image’s transparent padding in the header.
- `src/assets/contact-photo.jpg`: a 400 × 400px JPEG copy of the supplied portrait for contact imports. Vite embeds it in the bundle so Save Contact can include the photo without an extra network request.

These files are copied from the user’s supplied assets. No image generation or external stock images are used. Brand SVGs represent LinkedIn, Facebook, and GitHub; Lucide supplies Instagram and interface icons.

## Layout and interactions

- Below 600px: stacked composition with a horizontal profile card, action buttons, social icons, introduction, contact rows, and CTA.
- 600–1179px: wider profile layout, with social icons beside the introduction.
- From 1180px: profile panel and contact panel in two columns, with a full-width CTA below.
- All layouts scroll naturally. Focus rings, a skip link, accessible control names, 44px minimum targets, and reduced motion support are included.
- Main action buttons use 16px labels and a 48px minimum height on mobile, with a 44px minimum from 600px and a 360px maximum group width. Touch devices retain 48px main actions and social buttons at wider widths. Share stays 44px, and the project banner stays compact at a 72px minimum height from 600px. Controls can grow when text wraps.
- Save Contact generates a vCard 3.0 `.vcf` file with CRLF line endings, escaped field values, and lines folded at 75 UTF-8 bytes. It prefills Joshua’s name, professional title, email, and mobile number (`+639924038038`), with WhatsApp and Viber details in its notes. The portrait is embedded as a base64 JPEG `PHOTO` field following [the vCard 3.0 photo format](https://www.rfc-editor.org/info/rfc2426/). A visible confirmation explains how to import the downloaded card. Contacts apps that support imported vCard photos can save it with the contact; photo handling varies by app.
- Share uses the Web Share API where available, then clipboard copying. If both fail, a focused, selected link supports manual copying. Escape or the dismiss button closes the message and restores focus to Share.
- External links open in a new tab with `noopener noreferrer`.

Sharing and clipboard support depend on the browser and typically require HTTPS or localhost. Calling, email, and Viber actions depend on installed applications. A telephone link can require confirmation before calling. Contact imports also require the visitor’s confirmation; a website cannot silently add a contact or guarantee that every mobile browser opens Contacts directly. On Android, open the VCF file or use Contacts → Organize → Import from file. See [Apple’s contact-import guidance](https://support.apple.com/en-ie/guide/iphone/iph356499f31/ios) and [Google’s VCF import instructions](https://support.google.com/contacts/answer/15147365?co=GENIE.Platform%3DAndroid&hl=en).

## Validation and screenshots

See [`QA.md`](QA.md) for checks and limitations. Screenshots are in [`output/playwright/`](output/playwright/):

| View                     | Screenshot                                       |
| ------------------------ | ------------------------------------------------ |
| Mobile, 375px            | [card-375.png](output/playwright/card-375.png)   |
| Mobile, 390px            | [card-390.png](output/playwright/card-390.png)   |
| Tablet, 768px            | [card-768.png](output/playwright/card-768.png)   |
| Tablet, 820px            | [card-820.png](output/playwright/card-820.png)   |
| Tablet landscape, 1024px | [card-1024.png](output/playwright/card-1024.png) |
| Desktop, 1440px          | [card-1440.png](output/playwright/card-1440.png) |
