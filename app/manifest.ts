import type { MetadataRoute } from "next";

// Backs up layout.tsx's `applicationName`/`appleWebApp` metadata with an
// actual web manifest, so Android/Chrome has real icon/theme-color data to
// build an installable "Add to Home Screen" entry instead of a generic one.
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kirchliche Pilgerplätze",
    short_name: "Pilgerplätze",
    description:
      "Kirchliche Pilgerplätze vernetzt Pilgergruppen und kirchliche Gemeinschaften mit gastfreundlichen Gemeinden.",
    lang: "de",
    dir: "ltr",
    // Explicit PWA identity, independent of `start_url` — without it, an
    // install would be tied to whatever `start_url` happens to be right
    // now, and get treated as a different app if that URL ever changes
    // (e.g. once the real directory content replaces the placeholder copy).
    id: "/",
    start_url: "/",
    // Explicit PWA navigation scope, independent of the default the
    // browser infers from `start_url` — keeps the installed app's
    // boundary pinned to "/" even if `start_url` ever moves once the
    // real directory content replaces this placeholder.
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    // Lets app stores/PWA installers categorize the site correctly.
    categories: ["travel", "lifestyle"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
