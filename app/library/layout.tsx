import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Library",
  description: "An archive of esoteric texts and source material on Mātaṅgī, the Mahāvidyās, and the tantric traditions that carry them.",
  alternates: { canonical: "/library" },
  openGraph: {
    title: "Library · Temple of Ma Matangi",
    description: "An archive of esoteric texts and source material on Mātaṅgī, the Mahāvidyās, and the tantric traditions that carry them.",
    url: "/library",
    type: "website",
  },
};

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
