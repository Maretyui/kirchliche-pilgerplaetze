// Placeholder copy — replace once the pilgrimage-location directory
// feature is built (keep app/layout.tsx's metadata/OG/twitter text in sync).
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-6 py-32 px-6 sm:px-16 bg-white text-center dark:bg-zinc-950">
        <header>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Kirchliche Pilgerplätze
          </p>
          <h1 className="max-w-xl text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Ein Netzwerk für Pilgergruppen und gastfreundliche Gemeinden
          </h1>
        </header>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Kirchliche Pilgerplätze vernetzt Pilgergruppen und kirchliche
          Gemeinschaften mit gastfreundlichen Gemeinden. Finden Sie
          Übernachtungs- und Rastmöglichkeiten auf Ihrem Pilgerweg.
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Diese Seite befindet sich im Aufbau.
        </p>
      </main>
      <footer className="pb-6 text-center text-xs text-zinc-400 dark:text-zinc-500">
        Design &amp; Umsetzung:{" "}
        <a
          href="https://maretyui.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted underline-offset-2 hover:text-zinc-600 dark:hover:text-zinc-300"
        >
          Maik Reinhardt
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </footer>
    </div>
  );
}
