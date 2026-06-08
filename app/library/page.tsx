"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { libraryEntries, librarySections } from "@/lib/library";
import { Search, BookOpen, X, ChevronDown, ChevronUp } from "lucide-react";

const SECTION_ICONS: Record<string, string> = {
  Texts:       "✦",
  Commentary:  "◈",
  Poetry:      "⬡",
  Philosophy:  "⊕",
  Symbolism:   "◉",
};

const LENGTH_COLORS = { Short: "text-emerald-400/70", Medium: "text-gold/70", Long: "text-violet-400/70" } as const;

function LibraryEntryCard({ entry, index }: { entry: typeof libraryEntries[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <ScrollReveal delay={index * 0.05}>
      <article className="card-parchment rounded-sm overflow-hidden hover:border-gold/20 transition-all duration-500">
        <button className="w-full text-left p-5 md:p-6" onClick={() => setOpen(!open)}>
          <div className="flex items-start gap-4">
            {/* Section icon */}
            <div className="w-10 h-10 border border-white/[0.07] rounded-sm flex items-center justify-center text-base text-gold/40 shrink-0">
              {SECTION_ICONS[entry.section] ?? "◈"}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-label text-ivory/30">{entry.section}</span>
                <span className="text-ivory/20 text-xs">·</span>
                <span className="text-label text-ivory/25">{entry.tradition}</span>
                {entry.featured && (
                  <span className="text-label px-2 py-0.5 border border-gold/30 text-gold/70 rounded-sm">Featured</span>
                )}
              </div>
              <h3 className="font-display text-xl text-ivory/90">{entry.title}</h3>
              {entry.author && <p className="text-ivory/40 text-xs font-mono mt-0.5">{entry.author}</p>}
              <div className="flex items-center gap-2 mt-2">
                <span className={`text-label ${LENGTH_COLORS[entry.length]}`}>{entry.length} read</span>
              </div>
            </div>

            <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}
              className="text-ivory/30 shrink-0 mt-1">
              <ChevronDown size={16} />
            </motion.div>
          </div>

          <p className="text-ivory/45 text-sm leading-relaxed mt-3 ml-14 font-display italic">
            {entry.summary}
          </p>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
              <div className="px-5 md:px-6 pb-6 border-t border-white/[0.05] pt-5 space-y-5">
                {/* Metadata row */}
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  <div><span className="text-label text-ivory/25 mr-2">Tradition</span><span className="text-ivory/55 text-sm">{entry.tradition}</span></div>
                  <div><span className="text-label text-ivory/25 mr-2">Period</span><span className="text-ivory/55 text-sm">{entry.period}</span></div>
                </div>

                {/* Excerpt */}
                <div className="border-l-2 border-gold/20 pl-5">
                  <div className="text-label text-gold/40 mb-3">Excerpt</div>
                  {entry.excerpt.split("\n\n").map((para, i) => (
                    <p key={i} className="font-display text-base text-ivory/65 italic leading-relaxed mb-3">{para}</p>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {entry.tags.map(t => (
                    <span key={t} className="text-label px-2.5 py-1 border border-white/[0.07] text-ivory/30 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </ScrollReveal>
  );
}

export default function LibraryPage() {
  const [section, setSection] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [showFeatured, setShowFeatured] = useState(true);

  const filtered = libraryEntries.filter(e =>
    (section === "All" || e.section === section) &&
    (search === "" ||
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.summary.toLowerCase().includes(search.toLowerCase()) ||
      e.tags.some(t => t.toLowerCase().includes(search.toLowerCase())))
  );
  const featured = libraryEntries.filter(e => e.featured);

  return (
    <div className="page-enter">
      <PageHero
        label="Esoteric Text Archive"
        title="The"
        titleAccent="Library"
        subtitle="A curated archive of texts, commentaries, poetry, and philosophical essays on Matangi's tradition"
        variant="gold"
        geometry
      />

      <section className="section-padding">
        <div className="section-container">
          {/* Search + filters */}
          <ScrollReveal className="mb-12 space-y-4">
            <div className="flex gap-3 flex-wrap items-start">
              <div className="relative flex-1 min-w-[200px] max-w-md">
                <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-ivory/30" />
                <input value={search} onChange={e => setSearch(e.target.value)}
                  placeholder="Search texts, tags, traditions..."
                  className="pl-9 pr-4 py-2.5 text-sm w-full bg-white/[0.03] border border-white/10 rounded-sm text-ivory/70 placeholder-ivory/25 outline-none focus:border-gold/30 transition-colors" />
                {search && (
                  <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-ivory/30 hover:text-ivory/60">
                    <X size={12} />
                  </button>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {librarySections.map(s => (
                <button key={s} onClick={() => setSection(s)}
                  className={`text-label px-4 py-2 border rounded-sm transition-all duration-300 ${
                    section === s
                      ? "border-gold/60 text-gold bg-gold/5"
                      : "border-white/10 text-ivory/40 hover:border-white/25 hover:text-ivory/70"
                  }`}>
                  {s !== "All" && <span className="mr-1.5">{SECTION_ICONS[s]}</span>}{s}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Featured shelf */}
          {section === "All" && !search && (
            <ScrollReveal className="mb-12">
              <button onClick={() => setShowFeatured(!showFeatured)}
                className="flex items-center gap-2 mb-5">
                <span className="font-display text-lg text-ivory/70">Featured Texts</span>
                {showFeatured ? <ChevronUp size={14} className="text-ivory/30" /> : <ChevronDown size={14} className="text-ivory/30" />}
              </button>
              <AnimatePresence>
                {showFeatured && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}>
                    <div className="grid md:grid-cols-3 gap-4 mb-2">
                      {featured.map(entry => (
                        <div key={entry.id} className="glass-gold rounded-sm p-5 hover:border-gold/30 transition-all duration-400 cursor-default">
                          <div className="text-2xl text-gold/40 mb-3">{SECTION_ICONS[entry.section]}</div>
                          <div className="text-label text-ivory/30 mb-1">{entry.section}</div>
                          <h4 className="font-display text-base text-ivory/85 mb-2">{entry.title}</h4>
                          <p className="text-ivory/45 text-xs leading-relaxed">{entry.summary}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </ScrollReveal>
          )}

          {/* Stats */}
          <ScrollReveal>
            <div className="flex items-center justify-between mb-6">
              <p className="text-label text-ivory/25">
                {filtered.length} {filtered.length === 1 ? "TEXT" : "TEXTS"} FOUND
              </p>
              {search && (
                <button onClick={() => setSearch("")}
                  className="text-label text-ivory/30 hover:text-ivory/60 transition-colors flex items-center gap-1">
                  <X size={10} /> Clear search
                </button>
              )}
            </div>
          </ScrollReveal>

          {/* Entry list */}
          {filtered.length > 0 ? (
            <div className="space-y-4 max-w-4xl mx-auto">
              {filtered.map((entry, i) => (
                <LibraryEntryCard key={entry.id} entry={entry} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <BookOpen size={32} className="text-ivory/20 mx-auto mb-4" />
              <p className="font-display text-lg text-ivory/30 italic">
                No texts found. Try a different search or filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
