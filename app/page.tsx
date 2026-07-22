export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-6 py-32 px-16 bg-white text-center dark:bg-black">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
          Kirchliche Pilgerplätze
        </p>
        <h1 className="max-w-xl text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Ein Netzwerk für Pilgergruppen und gastfreundliche Gemeinden
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Kirchliche Pilgerplätze vernetzt Pilgergruppen und kirchliche
          Gemeinschaften mit gastfreundlichen Gemeinden. Finden Sie
          Übernachtungs- und Rastmöglichkeiten auf Ihrem Pilgerweg.
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Diese Seite befindet sich im Aufbau.
        </p>
      </main>
    </div>
  );
}
