import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

// favicon.ico is a static fallback, but modern Chromium/Android picks up
// this file-convention route first — without it the tab/bookmark icon was
// whatever favicon.ico happened to contain instead of a crisp, same-design
// icon as apple-icon.tsx and opengraph-image.tsx below. Sized at 512x512
// (not a typical 32x32 favicon) so manifest.ts can reuse this same route as
// the PWA install icon, matching the pattern already used on ju-jutsu/
// ebs-abiball — Chrome's install-prompt criteria need a real raster icon at
// 192x192 or larger, which a 32x32 favicon alone doesn't satisfy.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 220,
            fontWeight: 600,
            letterSpacing: -6,
            color: "#fafafa",
          }}
        >
          KP
        </div>
      </div>
    ),
    { ...size }
  );
}
