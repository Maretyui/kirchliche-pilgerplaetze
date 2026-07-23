import type { Metadata } from "next";
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
  openGraph: {
    title: "Kirchliche Pilgerplätze",
    description:
      "Kirchliche Pilgerplätze vernetzt Pilgergruppen und kirchliche Gemeinschaften mit gastfreundlichen Gemeinden. Finden Sie Übernachtungs- und Rastmöglichkeiten auf Ihrem Pilgerweg.",
    type: "website",
    locale: "de_DE",
  },
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
