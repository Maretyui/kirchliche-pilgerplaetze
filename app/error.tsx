"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

// Next.js falls back to its own generic error UI without this file — this
// keeps a runtime error at least visually consistent with the homepage and
// the not-found.tsx page instead of a blank default.
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    console.error(error);
    // Unlike not-found.tsx, this boundary swaps in without a route change
    // or title update, so there's no normal cue for assistive tech that
    // something happened — move focus to the heading so it gets announced.
    headingRef.current?.focus();
  }, [error]);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-6 py-32 px-6 sm:px-16 bg-white text-center dark:bg-zinc-950">
        <header role="alert">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Fehler
          </p>
          <h1
            ref={headingRef}
            tabIndex={-1}
            className="max-w-xl text-3xl font-semibold leading-10 tracking-tight text-black outline-none dark:text-zinc-50"
          >
            Etwas ist schiefgelaufen
          </h1>
        </header>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Bitte versuche es erneut oder kehre zur Startseite zurück.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-sm text-sm text-zinc-500 underline decoration-dotted underline-offset-2 hover:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:text-zinc-400 dark:hover:text-zinc-300 dark:focus-visible:ring-zinc-500"
          >
            Erneut versuchen
          </button>
          <Link
            href="/"
            className="rounded-sm text-sm text-zinc-500 underline decoration-dotted underline-offset-2 hover:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:text-zinc-400 dark:hover:text-zinc-300 dark:focus-visible:ring-zinc-500"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </main>
      {/* zinc-500/zinc-400 (not -400/-500) to keep WCAG AA contrast (4.5:1)
          against the page's zinc-50/black background in both color schemes. */}
      <footer className="pb-6 text-center text-xs text-zinc-500 dark:text-zinc-400">
        <address className="not-italic">
          Design &amp; Umsetzung:{" "}
          <a
            href="https://maretyui.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm underline decoration-dotted underline-offset-2 hover:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:hover:text-zinc-300 dark:focus-visible:ring-zinc-500"
          >
            Maik Reinhardt
            <span className="sr-only" lang="en">
              {" "}
              (opens in a new tab)
            </span>
          </a>
        </address>
      </footer>
    </div>
  );
}
