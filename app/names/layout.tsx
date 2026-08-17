import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "108 Names",
  description: "The Aṣṭottara Śatanāmāvalī of Śrī Mātaṅgī — all 108 names with transliteration and meaning, searchable in full.",
  alternates: { canonical: "/names" },
  openGraph: {
    title: "108 Names · Temple of Ma Matangi",
    description: "The Aṣṭottara Śatanāmāvalī of Śrī Mātaṅgī — all 108 names with transliteration and meaning, searchable in full.",
    url: "/names",
    type: "website",
  },
};

export default function NamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
