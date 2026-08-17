import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inner Sanctuary",
  description: "The innermost chamber of the temple, opened to those who have walked the other halls first.",
  alternates: { canonical: "/sanctuary" },
  openGraph: {
    title: "Inner Sanctuary · Temple of Ma Matangi",
    description: "The innermost chamber of the temple, opened to those who have walked the other halls first.",
    url: "/sanctuary",
    type: "website",
  },
};

export default function SanctuaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
