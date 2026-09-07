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
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
