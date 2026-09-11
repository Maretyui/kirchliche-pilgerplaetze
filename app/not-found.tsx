import Link from "next/link";
import type { Metadata } from "next";

// Without its own metadata this page inherited the root layout's title
// verbatim, so a mismatched/old link's browser tab read "Kirchliche
// Pilgerplätze" with no hint anything had gone wrong.
export const metadata: Metadata = {
  title: "Seite nicht gefunden – Kirchliche Pilgerplätze",
};

// Next.js falls back to its own generic 404 UI without this file — this
// keeps a mismatched/old link at least visually consistent with the
// homepage instead of a blank default.
export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-6 py-32 px-6 sm:px-16 bg-white text-center dark:bg-zinc-950">
        <header>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Fehler 404
          </p>
          <h1 className="max-w-xl text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Seite nicht gefunden
          </h1>
        </header>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Diese Seite gibt es nicht (mehr). Das Pilgerplätze-Verzeichnis
          befindet sich noch im Aufbau — schau auf der Startseite vorbei.
        </p>
        <Link
          href="/"
          className="rounded-sm text-sm text-zinc-500 underline decoration-dotted underline-offset-2 hover:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:text-zinc-400 dark:hover:text-zinc-300 dark:focus-visible:ring-zinc-500"
        >
          Zurück zur Startseite
        </Link>
      </main>
    </div>
  );
}
