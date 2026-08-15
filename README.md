# kirchliche-pilgerplätze.de

Directory site for a network of church pilgrimage locations — built with [Next.js](https://nextjs.org).

**Status:** placeholder landing page — the pilgrimage-location directory itself is still pending (see on-page copy).

Live: https://kirchliche-pilgerplätze.de

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS

## Content

The placeholder homepage copy lives in `app/page.tsx`; page title/description/OG metadata lives in `app/layout.tsx`. Update both once the pilgrimage-location directory feature is built.

`app/robots.ts` and `app/sitemap.ts` each hardcode the production URL (`https://kirchliche-pilgerplätze.de`) independently of `app/layout.tsx`'s `metadataBase` — keep all three in sync if the domain ever changes.

## Getting Started

Install dependencies and start the local dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

### Scripts

- `npm run dev` — start the local development server
- `npm run build` — create a production build
- `npm run start` — run the production build locally
- `npm run lint` — run ESLint
