"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { hymns, hymnCategories } from "@/lib/hymns";
import { BookOpen, ChevronDown, ChevronUp, Bookmark, Search } from "lucide-react";

function HymnCard({ hymn, index }: { hymn: typeof hymns[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [view, setView] = useState<"all" | number>("all");

  return (
    <ScrollReveal delay={index * 0.08}>
      <article className="card-parchment rounded-sm overflow-hidden hover:border-gold/20 transition-all duration-500">
        {/* Header */}
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest border border-emerald-600/30 text-emerald-400/80 rounded-sm">
                  {hymn.type}
                </span>
                <span className="text-ivory/30 text-xs font-mono">{hymn.tradition}</span>
              </div>
              <h2 className="font-display text-2xl text-ivory/90">{hymn.title}</h2>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setBookmarked(!bookmarked)}
                className={`p-2 border rounded-sm transition-all duration-300 ${bookmarked ? "border-gold/50 text-gold" : "border-white/10 text-ivory/30 hover:text-ivory/60"}`}>
                <Bookmark size={14} fill={bookmarked ? "currentColor" : "none"} />
              </button>
              <button onClick={() => setExpanded(!expanded)}
                className="p-2 border border-white/10 rounded-sm text-ivory/40 hover:text-ivory/70 transition-colors">
                {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            </div>
          </div>

          <p className="text-ivory/45 text-sm leading-relaxed font-display italic">{hymn.context}</p>

          {/* Verse count preview */}
          <div className="flex gap-1.5 mt-4">
            {hymn.verses.map((_, i) => (
              <button key={i} onClick={() => { setExpanded(true); setView(i); }}
                className="w-7 h-7 text-xs font-mono border border-white/10 hover:border-gold/40 hover:text-gold text-ivory/40 transition-all rounded-sm">
                {i + 1}
              </button>
            ))}
            <button onClick={() => { setExpanded(!expanded); setView("all"); }}
              className="px-3 h-7 text-[10px] font-mono border border-gold/20 hover:border-gold/50 text-gold/50 hover:text-gold transition-all rounded-sm">
              ALL
            </button>
          </div>
        </div>

        {/* Expanded verses */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="border-t border-white/[0.06] px-6 md:px-8 py-6 space-y-8">
                {hymn.verses
                  .filter((_, i) => view === "all" || view === i)
                  .map((verse) => (
                    <div key={verse.number} className="space-y-6">
                      <div className="text-label text-ivory/20">VERSE {verse.number}</div>

                      {/* Three-column layout */}
                      <div className="grid md:grid-cols-3 gap-6">
                        {/* Sanskrit */}
                        <div className="space-y-2">
                          <div className="text-label text-emerald-500/50 mb-3">Sanskrit</div>
                          <p className="font-devanagari text-2xl text-emerald-300/80 leading-loose whitespace-pre-line"
                            style={{ fontFamily: "var(--font-devanagari)" }}>
                            {verse.sanskrit}
                          </p>
                        </div>

                        {/* Transliteration */}
                        <div className="space-y-2">
                          <div className="text-label text-violet-400/50 mb-3">Transliteration</div>
                          <p className="font-mono text-sm text-violet-300/70 leading-relaxed whitespace-pre-line italic">
                            {verse.transliteration}
                          </p>
                        </div>

                        {/* Translation */}
                        <div className="space-y-2">
                          <div className="text-label text-gold/50 mb-3">Translation</div>
                          <p className="font-display text-base text-ivory/65 leading-relaxed italic">
                            {verse.translation}
                          </p>
                        </div>
                      </div>

                      {/* Commentary */}
                      {verse.commentary && (
                        <div className="border-l-2 border-gold/20 pl-4 mt-4">
                          <div className="text-label text-gold/30 mb-1">Commentary</div>
                          <p className="text-ivory/45 text-sm leading-relaxed">{verse.commentary}</p>
                        </div>
                      )}
                    </div>
                  ))}

                {/* Closing note */}
                {hymn.closing && view === "all" && (
                  <div className="bg-emerald-950/20 border border-emerald-800/20 rounded-sm p-5">
                    <div className="text-label text-emerald-500/50 mb-2">Practice Note</div>
                    <p className="font-display text-sm text-ivory/55 italic leading-relaxed">{hymn.closing}</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </ScrollReveal>
  );
}

export default function HymnsPage() {
  const [filter, setFilter] = useState<string>("All");
  const [search, setSearch] = useState("");
  const filtered = hymns.filter(h =>
    (filter === "All" || h.type === filter) &&
    (search === "" || h.title.toLowerCase().includes(search.toLowerCase()) ||
     h.context.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="page-enter">
      <PageHero
        label="Sacred Hymns"
        title="Hymns of"
        titleAccent="Matangi"
        subtitle="Sanskrit devotional hymns with transliteration and English translation — presented for contemplative and educational exploration"
        variant="emerald"
        geometry
      />

      <section className="section-padding">
        <div className="section-container">
          {/* Controls */}
          <ScrollReveal className="mb-12 space-y-4">
            {/* Search */}
            <div className="relative max-w-md">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ivory/30" />
              <input
                value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search hymns..."
                className="pl-9 pr-4 py-2.5 text-sm bg-white/[0.03] border border-white/10 text-ivory/70 placeholder-ivory/25 rounded-sm focus:border-gold/30 outline-none w-full transition-colors"
              />
            </div>
            {/* Type filter */}
            <div className="flex flex-wrap gap-2">
              {hymnCategories.map(c => (
                <button key={c} onClick={() => setFilter(c)}
                  className={`text-label px-4 py-2 border rounded-sm transition-all duration-300 ${
                    filter === c
                      ? "border-gold/60 text-gold bg-gold/5"
                      : "border-white/10 text-ivory/40 hover:border-white/25 hover:text-ivory/70"
                  }`}>
                  {c}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Disclaimer */}
          <ScrollReveal>
            <div className="glass-gold rounded-sm p-5 mb-12 max-w-3xl">
              <div className="flex gap-3 items-start">
                <BookOpen size={16} className="text-gold/60 shrink-0 mt-0.5" />
                <p className="text-ivory/50 text-sm leading-relaxed">
                  The translations provided are poetic renderings for contemplative and educational use.
                  Sanskrit scholarship involves enormous depth; these translations aim to convey spiritual
                  meaning and are not presented as definitive academic translations.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Hymn list */}
          {filtered.length > 0 ? (
            <div className="space-y-5 max-w-4xl mx-auto">
              {filtered.map((hymn, i) => (
                <HymnCard key={hymn.id} hymn={hymn} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-ivory/30 font-display italic text-lg">
              No hymns found for this search.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
