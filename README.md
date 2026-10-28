# repchek landing page

The marketing site for [repchek](https://repchek.fit), a phone-camera workout coach that counts reps, gives live form feedback and tracks progress. The job of this site is to explain the product and send visitors to the app.

| Domain | Purpose | Lives in |
| --- | --- | --- |
| `https://repchek.fit` | Marketing landing page | this repo |
| `https://app.repchek.fit` | The repchek app | the separate Vite project (`../repchek`) |

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

## Page sections

In order, as composed in `app/page.tsx`:

| Section | Component | Notes |
| --- | --- | --- |
| Nav | `Nav.tsx` | Sticky bar with the logo and "Try repchek free" |
| Hero | `Hero.tsx` | "Every workout moves you forward." plus the demo video slot |
| Your workout. Your space. | `UseCases.tsx` | Three tiles, each with an optional image or video |
| Work out. Review. Improve. | `HowItWorks.tsx` | Three phone illustrations (choose, get feedback, review) |
| See repchek in action | `Lifter.tsx` | Optional, hidden until a video is configured |
| Know how your reps look. | `Colors.tsx` | The five skeleton states, drawn by `Skeleton.tsx` |
| What people are saying. | `Proof.tsx` | Four testimonials and a closing call to action |
| Pricing | `Pricing.tsx` | Free at $0, Premium at $3.99 per month |
| Questions? | `Faq.tsx` | Native `<details>` accordions |
| Footer | `Footer.tsx` | Instagram, TikTok and contact email |

`Brand.tsx` renders the logo and wordmark in the nav and footer.

## Project structure

```
app/
  layout.tsx      fonts, metadata, canonical, Open Graph
  page.tsx        section order
  globals.css     all styles and design tokens
components/       one file per section, plus Brand and Skeleton
lib/
  config.ts       every URL and asset switch (see below)
public/
  repchek-logo.svg, og.png
```

## Configuration

Everything that depends on an external destination or asset is in [`lib/config.ts`](lib/config.ts):

| Setting | What it does |
| --- | --- |
| `APP_URL` | Target of every "Try repchek free" button (`https://app.repchek.fit`) |
| `PREMIUM_URL` | Premium checkout link. While empty, the Premium button reads "Start free" and goes to `APP_URL`. When set, it reads "Get Premium" and goes to this URL. |
| `DEMO` | `{ video, poster, captions }` for the hero demo. Leave `video` empty to show the "Demo video goes here" placeholder. |
| `USE_MEDIA` | Image or video for each "Your workout. Your space." tile, in order. Empty `src` hides that slot. |
| `LIFTER` | `{ video, poster, captions, name, quote }` for the "See repchek in action" section. Hidden while `video` is empty. |
| `INSTAGRAM_URL`, `TIKTOK_URL`, `CONTACT_EMAIL` | Footer links |
| `SITE_URL` | Canonical and Open Graph base URL |

### Adding the demo video

1. Put the files in `public/`, e.g. `demo.mp4`, `demo-poster.jpg` and `demo.vtt` (captions).
2. Set `DEMO = { video: "/demo.mp4", poster: "/demo-poster.jpg", captions: "/demo.vtt" }`.

The player is a native `<video controls>` in a fixed 9:16 frame, so it causes no layout shift.

### Adding tile media

Set `src` and `alt` for each entry in `USE_MEDIA`. Files ending in `.mp4`, `.webm` or `.mov` render as a muted, looping video. Anything else renders as an image.

### Turning on Premium

Paste your checkout link into `PREMIUM_URL`. Premium is always shown at $3.99 per month. The price text is in [`components/Pricing.tsx`](components/Pricing.tsx).

## Design notes

- The visual direction follows the HTML design file: light background, sand cards, forest-green accent, Inter type.
- Design tokens are the CSS variables at the top of `globals.css`.
- The brand is written in lowercase, "repchek", in headings, buttons, alt text and metadata, as in the design.
- The three phones in "Work out. Review. Improve." are illustrations with example numbers, not real screenshots. Replace them with real screenshots or footage when available.
- On desktop (860px and wider) the three phone columns are fixed to the phone width so the group stays centered. On mobile they scroll horizontally with snap.
- Metadata (title, description, Open Graph) is set in `app/layout.tsx`. The canonical URL is `https://repchek.fit`.

## Content and accuracy

Marketing claims should match the app. Before changing copy, check it against the app repo (`../repchek`):

- Exercises named in the FAQ match the profiles in the app's `src/profiles/`.
- The privacy claim ("analyzed on your phone, in your browser") matches the app's on-device MediaPipe pipeline. The app makes no upload calls.
- The page makes no medical or injury-prevention claims.
- Testimonials are quoted as supplied. Only use quotes you have permission to publish.
- The Premium feature list (progress tracking across workouts, form and strength over time) has not been verified against a progress screen in the app.

## Deployment

Any Next.js host works (Vercel is the natural fit). Point `repchek.fit` at this project and `app.repchek.fit` at the app. DNS and hosting are configured outside this repo. This README does not claim either domain is currently live.

## Known gaps

- The demo video is a placeholder.
- `PREMIUM_URL` is empty, so the Premium button sends people to the free app rather than a checkout.
- No analytics are installed.
- Lint and the production build pass, but the page has not been checked in a browser across mobile, tablet and desktop widths.
