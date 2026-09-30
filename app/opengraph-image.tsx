import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kirchliche Pilgerplätze";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Without this, links shared in group chats/Discord (the realistic way this
// placeholder site gets passed around before the real directory content
// ships) unfurl with no image at all — layout.tsx's openGraph/twitter blocks
// declare title and description but never an `images` entry, so this
// file-convention route is the only thing that actually produces one.
// Matches the pattern already used on the sibling ebs-abiball site.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#a1a1aa",
          }}
        >
          Kirchliche Pilgerplätze
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 60,
            fontWeight: 600,
            color: "#fafafa",
            marginTop: 20,
            textAlign: "center",
            maxWidth: 1000,
          }}
        >
          Ein Netzwerk für Pilgergruppen und gastfreundliche Gemeinden
        </div>
      </div>
    ),
    { ...size }
  );
}
