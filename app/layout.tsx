import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import { GlyphOverlay } from "@/components/GlyphOverlay";

export const metadata: Metadata = {
  title: "MATANGI — Temple of the Outcaste Oracle",
  description:
    "A digital sanctuary for Matangi, ninth Mahavidya — goddess of forbidden speech, dark knowledge, and the sacred outcast.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="gradient-void min-h-screen">
        <GlyphOverlay />
        <Nav />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
