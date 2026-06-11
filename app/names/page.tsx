"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SacredGeometry from "@/components/SacredGeometry";
import { names108, nameCategories, introductionText } from "@/lib/names108";
import { Search, X, BookOpen } from "lucide-react";

// ── Single name card ──────────────────────────────────────────
function NameCard({ name, highlighted = false }: { name: typeof names108[0]; highlighted?: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5 }}
      className={`border rounded-sm overflow-hidden transition-all duration-400 ${
        highlighted
          ? "border-gold/40 bg-gold/[0.03]"
          : "border-white/[0.07] bg-[rgba(10,10,15,0.6)] hover:border-white/15"
      }`}
    >
      <button onClick={() => setExpanded(!expanded)} className="w-full text-left p-4 md:p-5">
        <div className="flex items-start gap-3">
          {/* Number badge */}
          <div className="w-9 h-9 rounded-sm border border-white/[0.08] flex items-center justify-center shrink-0">
            <span className="font-mono text-xs text-ivory/35">{name.number}</span>
          </div>

          <div className="flex-1 min-w-0">
            {/* Category chip */}
            {name.category && (
              <span className="text-[10px] font-mono tracking-widest text-gold/50 uppercase">
                {name.category}
              </span>
            )}
            {/* Meaning (English) above the Sanskrit */}
            <p className="text-ivory/45 text-xs leading-relaxed mt-1 line-clamp-1">{name.meaning}</p>
            {/* Devanagari */}
            <p className="font-devanagari text-base text-emerald-200/80 leading-loose mt-0.5"
              style={{ fontFamily: "var(--font-devanagari)" }}>
              {name.devanagari}
            </p>
            {/* IAST */}
            <p className="font-mono text-[11px] text-violet-300/45 italic mt-0.5 truncate">{name.iast}</p>
          </div>

          <span className="text-ivory/20 mt-2 shrink-0 text-xs">{expanded ? "−" : "+"}</span>
        </div>

      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 md:px-5 pb-4 border-t border-white/[0.05] pt-3 ml-12">
              <p className="font-display text-sm text-ivory/65 italic leading-relaxed">
                {name.meaning}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Compact table row for "all" view ──────────────────────────
function NameRow({ name }: { name: typeof names108[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4 }}
      className="border-b border-white/[0.04] last:border-0"
    >
      <button onClick={() => setOpen(!open)} className="w-full text-left py-3 px-2 flex gap-3 items-start hover:bg-white/[0.02] transition-colors rounded-sm">
        <span className="font-mono text-xs text-ivory/20 w-7 shrink-0 pt-1">{name.number}</span>
        <div className="flex-1 min-w-0">
          {open && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2">
              <p className="font-display text-sm text-ivory/55 italic leading-relaxed">{name.meaning}</p>
            </motion.div>
          )}
          <p className="font-devanagari text-base text-emerald-200/75"
            style={{ fontFamily: "var(--font-devanagari)" }}>
            {name.devanagari}
          </p>
          {open && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2">
              <p className="font-mono text-xs text-violet-300/50 italic">{name.iast}</p>
            </motion.div>
          )}
        </div>
        {name.category && (
          <span className="text-[10px] font-mono text-gold/40 shrink-0 hidden sm:block pt-1">
            {name.category}
          </span>
        )}
        <span className="text-ivory/20 shrink-0 pt-1 text-xs">{open ? "▲" : "▼"}</span>
      </button>
    </motion.div>
  );
}

export default function NamesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"cards" | "list">("cards");
  const [showIntro, setShowIntro] = useState(false);

  const filtered = useMemo(() => names108.filter(n => {
    const matchCat = category === "All" || n.category === category;
    const q = search.toLowerCase();
    const matchSearch = !q ||
      n.iast.toLowerCase().includes(q) ||
      n.devanagari.includes(q) ||
      n.meaning.toLowerCase().includes(q) ||
      (n.category?.toLowerCase().includes(q) ?? false);
    return matchCat && matchSearch;
  }), [search, category]);

  return (
    <div className="page-enter">
      <PageHero
        label="Aṣṭottara Śatanāmāvalī"
        title="108 Names of"
        titleAccent="Śrī Mātaṅgī"
        subtitle="The complete Ashtottara Shatanamavali — 108 sacred names spanning her physical attributes, spiritual splendor, Kundalini physiology, and her aspect as Brahman Itself"
        variant="emerald"
        geometry
      />

      <section className="section-padding">
        <div className="section-container">

          {/* ── Introduction toggle ─────────────────── */}
          <ScrollReveal className="mb-12 max-w-4xl mx-auto">
            <button onClick={() => setShowIntro(!showIntro)}
              className="w-full flex items-center justify-between p-5 glass rounded-sm hover:bg-white/[0.03] transition-colors">
              <div className="flex items-center gap-3">
                <BookOpen size={16} className="text-gold/60" />
                <span className="font-display text-lg text-ivory/80">About the Aṣṭottara Śatanāmāvalī</span>
              </div>
              <span className="text-ivory/30 text-sm">{showIntro ? "Hide" : "Expand"}</span>
            </button>
            <AnimatePresence>
              {showIntro && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45 }}>
                  <div className="glass px-6 pb-6 pt-4 border-t-0 rounded-b-sm space-y-3">
                    {introductionText.split("\n\n").map((p, i) => (
                      <p key={i} className="font-display text-sm text-ivory/60 italic leading-relaxed">{p}</p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </ScrollReveal>

          {/* ── Controls ───────────────────────────── */}
          <ScrollReveal className="mb-10 space-y-4 max-w-4xl mx-auto">
            {/* Search + view toggle */}
            <div className="flex gap-3 flex-wrap">
              <div className="relative flex-1 min-w-[200px]">
                <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-ivory/30" />
                <input
                  value={search} onChange={e => setSearch(e.target.value)}
                  placeholder="Search names, meanings, categories..."
                  className="pl-9 pr-8 py-2.5 text-sm"
                />
                {search && (
                  <button onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-ivory/30 hover:text-ivory/60">
                    <X size={12} />
                  </button>
                )}
              </div>
              {/* View mode */}
              <div className="flex border border-white/10 rounded-sm overflow-hidden">
                {(["cards", "list"] as const).map(mode => (
                  <button key={mode} onClick={() => setViewMode(mode)}
                    className={`text-label px-4 py-2.5 transition-all ${
                      viewMode === mode ? "bg-white/8 text-ivory/80" : "text-ivory/35 hover:text-ivory/60"
                    }`}>
                    {mode === "cards" ? "⊞ Cards" : "≡ List"}
                  </button>
                ))}
              </div>
            </div>

            {/* Category filter — horizontal scroll on mobile */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {nameCategories.map(c => (
                <button key={c} onClick={() => setCategory(c)}
                  className={`text-label px-3 py-1.5 border rounded-sm whitespace-nowrap transition-all duration-300 shrink-0 ${
                    category === c
                      ? "border-emerald-600/60 text-emerald-400 bg-emerald-950/30"
                      : "border-white/10 text-ivory/35 hover:border-white/25 hover:text-ivory/70"
                  }`}>
                  {c}
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between">
              <p className="text-label text-ivory/25">
                {filtered.length} of 108 names
                {category !== "All" && ` · ${category}`}
              </p>
              {(search || category !== "All") && (
                <button onClick={() => { setSearch(""); setCategory("All"); }}
                  className="text-label text-ivory/30 hover:text-ivory/60 flex items-center gap-1">
                  <X size={10} /> Clear filters
                </button>
              )}
            </div>
          </ScrollReveal>

          {/* ── Names display ──────────────────────── */}
          <div className="max-w-4xl mx-auto">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-display text-lg text-ivory/30 italic">No names found. Try a different search.</p>
              </div>
            ) : viewMode === "cards" ? (
              <div className="grid sm:grid-cols-2 gap-3">
                {filtered.map(name => (
                  <NameCard key={name.number} name={name} highlighted={name.number === 1 || name.number === 108} />
                ))}
              </div>
            ) : (
              <div className="card-parchment rounded-sm px-2 py-2">
                {filtered.map(name => <NameRow key={name.number} name={name} />)}
              </div>
            )}
          </div>

          {/* ── Special names highlight ─────────────── */}
          {!search && category === "All" && (
            <ScrollReveal className="mt-20 max-w-4xl mx-auto">
              <div className="text-label text-ivory/20 mb-6 text-center">THE FIRST AND THE LAST</div>
              <div className="grid md:grid-cols-2 gap-5">
                {[names108[0], names108[107]].map(name => (
                  <div key={name.number} className="glass-gold rounded-sm p-6 text-center space-y-3">
                    <div className="text-label text-gold/40">NAME {name.number}</div>
                    <p className="font-display text-sm text-ivory/55 italic leading-relaxed">{name.meaning}</p>
                    <p className="font-devanagari text-2xl text-gold/80 leading-loose"
                      style={{ fontFamily: "var(--font-devanagari)" }}>
                      {name.devanagari}
                    </p>
                    <p className="font-mono text-xs text-violet-300/50 italic">{name.iast}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <SacredGeometry size={80} variant="lotus" color="#b8962e" className="mx-auto opacity-40" />
                <p className="font-display text-base text-ivory/30 italic mt-4 max-w-md mx-auto">
                  She begins as the One overjoyed with divine knowledge, and ends as the One who sings melodiously — the very source of sound in all creation. The circle is complete.
                </p>
              </div>
            </ScrollReveal>
          )}

        </div>
      </section>
    </div>
  );
}
