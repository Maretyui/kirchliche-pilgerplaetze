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

// Kept as constants so the title/description can't drift out of sync
// across the base, OpenGraph and Twitter metadata blocks below.
const SITE_TITLE = "Kirchliche Pilgerplätze";
const SITE_DESCRIPTION =
  "Kirchliche Pilgerplätze vernetzt Pilgergruppen und kirchliche Gemeinschaften mit gastfreundlichen Gemeinden. Finden Sie Übernachtungs- und Rastmöglichkeiten auf Ihrem Pilgerweg.";

export const metadata: Metadata = {
  // The umlaut here doesn't need manual punycode-encoding: the URL
  // constructor applies IDNA/punycode to the hostname automatically.
  metadataBase: new URL("https://kirchliche-pilgerplätze.de"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
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
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_TITLE,
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  // Mirrors globals.css's `color-scheme: light dark` as an actual meta tag,
  // so the browser can pick native UI colors (scrollbars, form controls)
  // before the stylesheet has even loaded.
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

// Basic Organization structured data so search engines can associate the
// site name/description/URL with an entity even before the real directory
// content (with its own richer schema) replaces this placeholder page.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_TITLE,
  description: SITE_DESCRIPTION,
  url: "https://kirchliche-pilgerplätze.de",
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
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
