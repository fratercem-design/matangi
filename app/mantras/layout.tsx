import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mantras",
  description: "Five canonical mantra versions of Mātaṅgī with the Dhyānam meditation verse — transliteration, meaning, and traditional use.",
  alternates: { canonical: "/mantras" },
  openGraph: {
    title: "Mantras · Temple of Ma Matangi",
    description: "Five canonical mantra versions of Mātaṅgī with the Dhyānam meditation verse — transliteration, meaning, and traditional use.",
    url: "/mantras",
    type: "website",
  },
};

export default function MantrasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
