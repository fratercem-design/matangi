import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hymns",
  description: "Sanskrit hymns to Mātaṅgī with IAST transliteration and English translation, presented for recitation and study.",
  alternates: { canonical: "/hymns" },
  openGraph: {
    title: "Hymns · Temple of Ma Matangi",
    description: "Sanskrit hymns to Mātaṅgī with IAST transliteration and English translation, presented for recitation and study.",
    url: "/hymns",
    type: "website",
  },
};

export default function HymnsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
