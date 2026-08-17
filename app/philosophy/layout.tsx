import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Philosophy",
  description: "Long-form teachings on Mātaṅgī — speech as creative force, the doctrine of the leftover, wisdom from outside the gate, and the intelligence of liminal places.",
  alternates: { canonical: "/philosophy" },
  openGraph: {
    title: "Philosophy · Temple of Ma Matangi",
    description: "Long-form teachings on Mātaṅgī — speech as creative force, the doctrine of the leftover, wisdom from outside the gate, and the intelligence of liminal places.",
    url: "/philosophy",
    type: "website",
  },
};

export default function PhilosophyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
