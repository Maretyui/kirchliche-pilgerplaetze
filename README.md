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

`app/manifest.ts` backs that up with a real web manifest (name/short_name/description/icons/theme colors), so Android/Chrome has actual data to build an installable "Add to Home Screen" entry instead of a generic one.

`app/opengraph-image.tsx` generates the 1200x630 share image used by `layout.tsx`'s `openGraph`/`twitter` metadata — without it, links shared in group chats/Discord would unfurl with no image at all. Update its copy alongside `SITE_TITLE`/`SITE_DESCRIPTION` if the directory content changes.

`app/icon.tsx` and `app/apple-icon.tsx` are file-convention routes that generate a crisp 512x512 tab/PWA icon and a 180x180 iOS home-screen icon respectively, sharing the same dark background and "KP" mark as `app/opengraph-image.tsx` — `favicon.ico` alone would otherwise be the only icon Chromium/Android/iOS fall back to. `app/icon.tsx` is sized at 512x512 rather than a typical 32x32 favicon so `manifest.ts` can reuse the same route as the PWA install icon, since Chrome's install-prompt criteria need a real raster icon at 192x192 or larger.

`app/not-found.tsx` and `app/error.tsx` replace Next's generic fallback UI for a 404 and a runtime error respectively, keeping both visually consistent with the homepage instead of a blank default; the 404 page also sets its own title/`robots: noindex`/OG/Twitter metadata so a stale or mistyped link doesn't unfurl or get indexed under the homepage's own title. `app/error.tsx` also offers an actual "Zurück zur Startseite" link next to the retry button — its copy already promised one — and moves focus to its heading on mount so screen readers announce the error immediately, since this boundary swaps in without a route change or title update to otherwise cue assistive tech. `app/global-error.tsx` covers the one case neither of those reaches — a failure while rendering `app/layout.tsx` itself (e.g. the font loader) — so it has to recreate the `<html>`/`<body>` shell and font variables `layout.tsx` normally provides; its home link is a plain `<a>` rather than `next/link`, since the app router state that `Link` depends on is exactly what may have failed to initialize in this case.

## Accessibility

`app/globals.css` restores a visible `:focus-visible` outline (Tailwind v4 removes the browser default) so keyboard navigation stays visible without adding a ring on mouse clicks, declares `color-scheme: light dark` so native UI (scrollbars, form controls) matches the active theme, and honors `prefers-reduced-motion` by collapsing animation/transition durations to near-zero for visitors who've requested reduced motion at the OS level. `app/layout.tsx`'s `viewport` export mirrors that same `color-scheme` as an actual meta tag plus a matching `themeColor` per scheme, so the browser can pick the right native colors before the stylesheet has even loaded. A `prefers-contrast: more` block in `globals.css` thickens the focus outline and link underlines for visitors who've asked the OS for extra contrast. Footer text contrast (`zinc-500`/`zinc-400`, not the reverse) was deliberately chosen to clear WCAG AA's 4.5:1 minimum in both light and dark mode — re-check contrast rather than assuming those exact shades transfer safely if the background ever changes.

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
