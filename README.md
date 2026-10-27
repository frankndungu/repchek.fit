# Repchek landing page

The marketing site for [Repchek](https://repchek.fit), a phone-camera workout coach that gives live form feedback, counts reps and tracks progress. The job of this site is to explain the product and send visitors to the app.

| Domain | Purpose | Lives in |
| --- | --- | --- |
| `https://repchek.fit` | Marketing landing page | this repo |
| `https://app.repchek.fit` | The Repchek app | the separate Vite project (`../repchek`) |

This repo contains only the landing page. It has no app logic, authentication or payments.

## Stack

- Next.js 16 (App Router, Turbopack) and React 19
- TypeScript, ESLint (`eslint-config-next`)
- Plain CSS in `app/globals.css`, with no CSS framework
- Inter via `next/font/google`
- All components are server components, so the page ships no client-side JavaScript of its own. The FAQ uses native `<details>`.

## Getting started

Requires Node 20+ and npm.

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
app/
  layout.tsx      fonts, metadata, canonical, Open Graph
  page.tsx        section order
  globals.css     all styles and design tokens
components/
  Nav, Hero, HowItWorks, Colors, Proof, Pricing, Faq, Footer
  Brand.tsx       logo and wordmark
  Skeleton.tsx    the pose-skeleton illustration, colored per state
lib/
  config.ts       every URL and asset switch (see below)
public/
  repchek-logo.svg, og.png
```

Page order: Nav, Hero (with demo), Pick/Lift/Review, What the colors mean, Testimonials, Pricing, FAQ, Footer.

## Configuration

Everything that depends on an external destination or asset is in [`lib/config.ts`](lib/config.ts):

| Setting | What it does |
| --- | --- |
| `APP_URL` | Target of every "Try Repchek Free" button (`https://app.repchek.fit`) |
| `PREMIUM_URL` | Premium checkout link. While empty, the Premium button reads "Start free" and goes to `APP_URL`. When set, it reads "Get Premium" and goes to this URL. |
| `DEMO` | `{ video, poster, captions }` for the hero demo. Leave `video` empty to show the "Demo video coming soon" placeholder. |
| `INSTAGRAM_URL`, `TIKTOK_URL`, `CONTACT_EMAIL` | Footer links |
| `SITE_URL` | Canonical and Open Graph base URL |

### Adding the demo video

1. Put the files in `public/`, e.g. `demo.mp4`, `demo-poster.jpg` and `demo.vtt` (captions).
2. Set `DEMO = { video: "/demo.mp4", poster: "/demo-poster.jpg", captions: "/demo.vtt" }`.

The player is a native `<video controls>` in a fixed 9:16 frame, so it causes no layout shift.

### Turning on Premium

Paste your checkout link into `PREMIUM_URL`. Premium is shown at $3.99 per month. The price text is in [`components/Pricing.tsx`](components/Pricing.tsx).

## Design notes

- Visual direction follows the original HTML brief: light background, sand cards, forest-green accent, Inter type.
- Design tokens are the CSS variables at the top of `globals.css`.
- The Pick/Lift/Review phones are illustrations with example numbers, not real screenshots, and the page says so. Replace them with real screenshots or footage when available.
- Branding is written "Repchek" (not "RepChek").

## Content and accuracy

Marketing claims should match the app. Before changing copy, check it against the app repo (`../repchek`):

- Exercises listed in the FAQ match the profiles in the app's `src/profiles/`.
- Privacy claim ("analyzed on your phone, in your browser") matches the app's on-device MediaPipe pipeline. The app makes no upload calls.
- The page makes no medical or injury-prevention claims, and the FAQ states that Repchek is not a substitute for a qualified trainer.
- Testimonials are quoted as supplied. Only use quotes you have permission to publish.

## Deployment

Any Next.js host works (Vercel is the natural fit). Point `repchek.fit` at this project and `app.repchek.fit` at the app. DNS and hosting are configured outside this repo. This README does not claim either domain is currently live.

## Known gaps

- Demo video is a placeholder.
- `PREMIUM_URL` is empty, so there is no payment destination yet.
- No analytics are installed.
- The page has not yet been checked in a browser across mobile, tablet and desktop widths.
