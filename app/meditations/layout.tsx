import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meditations",
  description: "Four guided visualization practices for approaching Mātaṅgī, staged from preparation through to dissolution.",
  alternates: { canonical: "/meditations" },
  openGraph: {
    title: "Meditations · Temple of Ma Matangi",
    description: "Four guided visualization practices for approaching Mātaṅgī, staged from preparation through to dissolution.",
    url: "/meditations",
    type: "website",
  },
};

export default function MeditationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
