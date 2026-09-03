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

`app/layout.tsx` also emits a small `Organization` JSON-LD block (name/description/URL, sourced from the same `SITE_TITLE`/`SITE_DESCRIPTION` constants) so search engines have structured data to work with even before the real directory content ships.

`app/layout.tsx`'s metadata also sets `applicationName` to `SITE_TITLE`, so browsers/OSes show the real site name (not a generic fallback) when a visitor pins or bookmarks the page (e.g. "Add to Home Screen").

## Accessibility

`app/globals.css` restores a visible `:focus-visible` outline (Tailwind v4 removes the browser default) so keyboard navigation stays visible without adding a ring on mouse clicks, declares `color-scheme: light dark` so native UI (scrollbars, form controls) matches the active theme, and honors `prefers-reduced-motion` by collapsing animation/transition durations to near-zero for visitors who've requested reduced motion at the OS level. `app/layout.tsx`'s `viewport` export mirrors that same `color-scheme` as an actual meta tag plus a matching `themeColor` per scheme, so the browser can pick the right native colors before the stylesheet has even loaded. Footer text contrast (`zinc-500`/`zinc-400`, not the reverse) was deliberately chosen to clear WCAG AA's 4.5:1 minimum in both light and dark mode — re-check contrast rather than assuming those exact shades transfer safely if the background ever changes.

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
