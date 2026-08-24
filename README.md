# kirchliche-pilgerplätze.de

Directory site for a network of church pilgrimage locations — built with [Next.js](https://nextjs.org).

**Status:** placeholder landing page — the pilgrimage-location directory itself is still pending (see on-page copy).

Live: https://kirchliche-pilgerplätze.de

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS

## Content

The placeholder homepage copy lives in `app/page.tsx`; page title/description/OG metadata lives in `app/layout.tsx`. Update both once the pilgrimage-location directory feature is built. `app/page.tsx` also renders a small "Design & Umsetzung" builder-credit footer linking to maretyui.com — keep it when the real directory content replaces the placeholder copy.

`app/robots.ts` and `app/sitemap.ts` each hardcode the production URL (`https://kirchliche-pilgerplätze.de`) independently of `app/layout.tsx`'s `metadataBase` — keep all three in sync if the domain ever changes.

## Accessibility

`app/globals.css` restores a visible `:focus-visible` outline (Tailwind v4 removes the browser default) so keyboard navigation stays visible without adding a ring on mouse clicks, and declares `color-scheme: light dark` so native UI (scrollbars, form controls) matches the active theme. `app/layout.tsx`'s `viewport` export mirrors that same `color-scheme` as an actual meta tag plus a matching `themeColor` per scheme, so the browser can pick the right native colors before the stylesheet has even loaded. Footer text contrast (`zinc-500`/`zinc-400`, not the reverse) was deliberately chosen to clear WCAG AA's 4.5:1 minimum in both light and dark mode — re-check contrast rather than assuming those exact shades transfer safely if the background ever changes.

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
