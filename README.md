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

Edit [`src/profile.ts`](src/profile.ts) for the name, role, location, email, introduction, asset paths, Instagram handle, and destination URLs.

LinkedIn, Facebook, GitHub, and portfolio URLs are deliberately `null` because none were supplied. Replace each `null` with the correct full `https://` URL when available. The social icon becomes a working link automatically, and the portfolio row becomes clickable. Until then, social buttons have an unavailable indicator and an explanatory tooltip; the portfolio says “Link not added yet.” No profiles are guessed.

The email action subject is also defined in `src/profile.ts`. Let’s Connect, Email, and the project CTA all use this same action.

## Local assets

- `public/assets/joshua-portrait.png`: the supplied navy-polo portrait with its original orange and navy background. The original file is preserved; CSS crops its display without stretching or modifying the face.
- `public/assets/josh-logo.png`: the supplied official JC monogram, also used as the favicon. CSS accommodates the source image’s transparent padding in the header.

These files are copied from the user’s supplied assets. No image generation or external stock images are used. Brand SVGs represent LinkedIn, Facebook, and GitHub; Lucide supplies Instagram and interface icons.

## Layout and interactions

- Below 600px: stacked composition with a horizontal profile card, action buttons, social icons, introduction, contact rows, and CTA.
- 600–1179px: wider profile layout, with social icons beside the introduction.
- From 1180px: profile panel and contact panel in two columns, with a full-width CTA below.
- All layouts scroll naturally. Focus rings, a skip link, accessible control names, 44px minimum targets, and reduced motion support are included.
- Save Contact generates a vCard 3.0 `.vcf` file with CRLF line endings and escaped field values, including only name, professional title, and email.
- Share uses the Web Share API where available, then clipboard copying. If both fail, a focused, selected link supports manual copying. Escape or the dismiss button closes the message and restores focus to Share.
- External links open in a new tab with `noopener noreferrer`.

Sharing and clipboard support depend on the browser and typically require HTTPS or localhost. Email actions depend on the visitor’s configured mail application.

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
