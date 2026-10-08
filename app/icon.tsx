import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// favicon.ico is a static fallback, but modern Chromium/Android picks up
// this file-convention route first — without it the tab/bookmark icon was
// whatever favicon.ico happened to contain instead of a crisp, same-design
// icon as apple-icon.tsx and opengraph-image.tsx below.
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
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: -0.5,
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
