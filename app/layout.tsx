import type { Metadata, Viewport } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://kirchliche-pilgerplätze.de"),
  title: "Kirchliche Pilgerplätze",
  description:
    "Kirchliche Pilgerplätze vernetzt Pilgergruppen und kirchliche Gemeinschaften mit gastfreundlichen Gemeinden. Finden Sie Übernachtungs- und Rastmöglichkeiten auf Ihrem Pilgerweg.",
  keywords: [
    "Kirchliche Pilgerplätze",
    "Pilgergruppen",
    "Pilgerwege",
    "Pilgerherberge",
    "gastfreundliche Gemeinden",
    "Übernachtung Pilgerweg",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kirchliche Pilgerplätze",
    description:
      "Kirchliche Pilgerplätze vernetzt Pilgergruppen und kirchliche Gemeinschaften mit gastfreundlichen Gemeinden. Finden Sie Übernachtungs- und Rastmöglichkeiten auf Ihrem Pilgerweg.",
    url: "/",
    siteName: "Kirchliche Pilgerplätze",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary",
    title: "Kirchliche Pilgerplätze",
    description:
      "Kirchliche Pilgerplätze vernetzt Pilgergruppen und kirchliche Gemeinschaften mit gastfreundlichen Gemeinden. Finden Sie Übernachtungs- und Rastmöglichkeiten auf Ihrem Pilgerweg.",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
