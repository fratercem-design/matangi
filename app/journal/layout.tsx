import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description: "A contemplative reflection framework — prompts and questions for recording your own practice and encounters with the goddess of speech.",
  alternates: { canonical: "/journal" },
  openGraph: {
    title: "Journal · Temple of Ma Matangi",
    description: "A contemplative reflection framework — prompts and questions for recording your own practice and encounters with the goddess of speech.",
    url: "/journal",
    type: "website",
  },
};

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
