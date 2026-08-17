import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Generative devotional portraits of Mātaṅgī, drawn as vector iconography — each image composed from the temple's own symbolic vocabulary.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery · Temple of Ma Matangi",
    description: "Generative devotional portraits of Mātaṅgī, drawn as vector iconography — each image composed from the temple's own symbolic vocabulary.",
    url: "/gallery",
    type: "website",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
