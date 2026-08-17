import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trailokya Maṅgala Kavacham",
  description: "The protective armour hymn of Mātaṅgī, given in full with IAST transliteration, translation, and the root mantra revealed.",
  alternates: { canonical: "/kavacham" },
  openGraph: {
    title: "Trailokya Maṅgala Kavacham · Temple of Ma Matangi",
    description: "The protective armour hymn of Mātaṅgī, given in full with IAST transliteration, translation, and the root mantra revealed.",
    url: "/kavacham",
    type: "website",
  },
};

export default function KavachamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
