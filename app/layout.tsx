import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Cormorant_Garamond, Inter, IBM_Plex_Mono, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SanctuaryTracker from "@/components/SanctuaryTracker";
import AmbientSound from "@/components/AmbientSound";
import MotionProvider from "@/components/MotionProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display-next",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body-next",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-mono-next",
  display: "swap",
});
const devanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["300", "400", "500"],
  variable: "--font-devanagari-next",
  display: "swap",
});

const SITE_URL = "https://matangi-production.up.railway.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Temple of Ma Matangi", template: "%s · Temple of Ma Matangi" },
  description: "A digital temple dedicated to Ma Matangi — Mahavidya of speech, wisdom, music, creativity, and transformative knowledge.",
  keywords: ["Matangi", "Mahavidya", "Tantric Goddess", "Sacred Speech", "Wisdom", "Devotional"],
  openGraph: {
    title: "Temple of Ma Matangi",
    description: "Enter a living sanctuary of wisdom, speech, music, art, and transcendence.",
    type: "website",
    url: SITE_URL,
    siteName: "Temple of Ma Matangi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Temple of Ma Matangi",
    description: "Enter a living sanctuary of wisdom, speech, music, art, and transcendence.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${cormorant.variable} ${inter.variable} ${plexMono.variable} ${devanagari.variable}`}
    >
      <body className="gradient-temple min-h-screen">
        <MotionProvider>
          <SanctuaryTracker />
          <Nav />
          <main>{children}</main>
          <Footer />
          <AmbientSound />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
