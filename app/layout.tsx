import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SanctuaryTracker from "@/components/SanctuaryTracker";

export const metadata: Metadata = {
  title: { default: "Temple of Ma Matangi", template: "%s · Temple of Ma Matangi" },
  description: "A digital temple dedicated to Ma Matangi — Mahavidya of speech, wisdom, music, creativity, and transformative knowledge.",
  keywords: ["Matangi", "Mahavidya", "Tantric Goddess", "Sacred Speech", "Wisdom", "Devotional"],
  openGraph: {
    title: "Temple of Ma Matangi",
    description: "Enter a living sanctuary of wisdom, speech, music, art, and transcendence.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="gradient-temple min-h-screen">
        <SanctuaryTracker />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
