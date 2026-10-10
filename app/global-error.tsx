"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// error.tsx only wraps page.tsx and nested layouts, not the RootLayout
// itself — a failure while rendering app/layout.tsx (e.g. the font loader
// or the JSON-LD script) falls through to Next's bare default error screen
// instead. This is the dedicated boundary for that case, so it has to
// recreate the <html>/<body> shell and font variables layout.tsx normally
// provides.
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html
      lang="de"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col items-center justify-center gap-6 bg-zinc-50 text-center font-sans dark:bg-black">
        <h1 className="max-w-xl text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Etwas ist schiefgelaufen
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Bitte lade die Seite erneut oder versuche es später noch einmal.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-sm text-sm text-zinc-500 underline decoration-dotted underline-offset-2 hover:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:text-zinc-400 dark:hover:text-zinc-300 dark:focus-visible:ring-zinc-500"
        >
          Erneut versuchen
        </button>
      </body>
    </html>
  );
}
