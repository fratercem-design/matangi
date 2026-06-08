import Link from "next/link";

const cols = [
  {
    heading: "The Temple",
    links: [
      { href: "/about",       label: "Who Is Matangi" },
      { href: "/philosophy",  label: "Teachings" },
      { href: "/hymns",       label: "Sacred Hymns" },
      { href: "/mantras",     label: "Sacred Sounds" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { href: "/gallery",     label: "Divine Gallery" },
      { href: "/meditations", label: "Meditations" },
      { href: "/journal",     label: "Reflection" },
      { href: "/library",     label: "Archive" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] bg-[#07070d]">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-display text-2xl text-gold/80">✦ Matangi</div>
            <p className="text-ivory/40 text-sm leading-relaxed max-w-xs">
              A digital temple dedicated to the goddess of speech, wisdom, music, 
              and transformative knowledge.
            </p>
            <p className="text-label text-ivory/20">
              Devotional · Educational · Contemplative
            </p>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.heading} className="space-y-4">
              <h4 className="text-label text-gold/60">{col.heading}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-ivory/40 hover:text-ivory/80 text-sm transition-colors duration-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="divider-gold opacity-30" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <p className="text-ivory/25 text-xs font-mono">
            Presented with reverence as devotional, philosophical, and educational content.
          </p>
          <p className="text-ivory/20 text-xs font-mono">
            ॐ श्रीं ह्रीं क्लीं मातङ्ग्यै नमः
          </p>
        </div>
      </div>
    </footer>
  );
}
