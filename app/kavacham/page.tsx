"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import RitualCard from "@/components/RitualCard";
import SacredGeometry from "@/components/SacredGeometry";
import { kavacham } from "@/lib/hymns";
import { ChevronDown, Info } from "lucide-react";

// ── Type badge ────────────────────────────────────────────────
const TYPE_STYLES: Record<string, string> = {
  dialogue: "border-violet-500/40 text-violet-300/80",
  kavaca:   "border-emerald-600/40 text-emerald-400/80",
  phala:    "border-gold/40 text-gold/80",
};
const TYPE_LABELS: Record<string, string> = {
  dialogue: "Dialogue",
  kavaca:   "Kavaca Body",
  phala:    "Phalaśruti",
};

// ── Verse card ────────────────────────────────────────────────
function VerseCard({ verse, index }: { verse: typeof kavacham.verses[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const type = verse.type ?? "kavaca";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.04 }}
      className="card-parchment rounded-sm overflow-hidden hover:border-gold/20 transition-all duration-500"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-5 md:p-6 group"
      >
        <div className="flex items-start gap-4">
          {/* Verse number */}
          <div className="w-10 h-10 rounded-sm border border-white/[0.07] flex items-center justify-center shrink-0">
            <span className="font-display text-base text-gold/50">{verse.number}</span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`text-label px-2 py-0.5 border rounded-sm ${TYPE_STYLES[type] ?? TYPE_STYLES.kavaca}`}>
                {TYPE_LABELS[type] ?? type}
              </span>
            </div>
            {/* Sanskrit preview */}
            <p className="font-devanagari text-lg text-emerald-200/75 leading-loose line-clamp-1 whitespace-nowrap overflow-hidden text-ellipsis"
              style={{ fontFamily: "var(--font-devanagari)" }}>
              {verse.devanagari.split("\n")[0]}
            </p>
            <p className="font-mono text-xs text-violet-300/40 mt-1 italic line-clamp-1">
              {verse.iast.split("\n")[0]}
            </p>
          </div>

          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}
            className="text-ivory/30 shrink-0 mt-2">
            <ChevronDown size={16} />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-5 md:px-6 pb-6 border-t border-white/[0.05] pt-5 space-y-5">
              {/* Three columns — English first */}
              <div className="grid md:grid-cols-3 gap-5">
                {/* Translation */}
                <div>
                  <div className="text-label text-gold/50 mb-2">Translation</div>
                  <p className="font-display text-base text-ivory/65 leading-relaxed italic">
                    {verse.translation}
                  </p>
                </div>
                {/* Sanskrit */}
                <div>
                  <div className="text-label text-emerald-500/50 mb-2">Devanāgarī</div>
                  <p className="font-devanagari text-xl text-emerald-200/80 leading-loose whitespace-pre-line"
                    style={{ fontFamily: "var(--font-devanagari)" }}>
                    {verse.devanagari}
                  </p>
                </div>
                {/* IAST */}
                <div>
                  <div className="text-label text-violet-400/50 mb-2">IAST Transliteration</div>
                  <p className="font-mono text-sm text-violet-300/65 leading-relaxed whitespace-pre-line italic">
                    {verse.iast}
                  </p>
                </div>
              </div>
              {/* Commentary */}
              {verse.commentary && (
                <div className="border-l-2 border-gold/20 pl-4 bg-gold/[0.02] py-3">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Info size={11} className="text-gold/50" />
                    <span className="text-label text-gold/40">Commentary</span>
                  </div>
                  <p className="font-display text-sm text-ivory/55 italic leading-relaxed">
                    {verse.commentary}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Nyasa step display ────────────────────────────────────────
function NyasaDisplay() {
  return (
    <div className="space-y-3">
      {kavacham.nyasaSteps.map((step) => (
        <div key={step.number} className="flex gap-4 p-4 border border-white/[0.06] bg-black/20 rounded-sm">
          <div className="w-8 h-8 rounded-sm border border-emerald-600/30 flex items-center justify-center shrink-0">
            <span className="font-mono text-xs text-emerald-400/60">{step.number}</span>
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-ivory/50 text-sm mb-1">{step.procedure}</p>
            <p className="font-devanagari text-base text-emerald-200/75"
              style={{ fontFamily: "var(--font-devanagari)" }}>
              {step.devanagari}
            </p>
            <p className="font-mono text-xs text-violet-300/40 italic">{step.iast}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Root mantra display ───────────────────────────────────────
function RootMantraDisplay() {
  const m = kavacham.rootMantra;
  return (
    <div className="glass-emerald rounded-sm p-6 md:p-8 space-y-6">
      <div className="text-center">
        <div className="text-label text-gold/50 mb-3">{m.letters}</div>
        <p className="font-devanagari text-3xl md:text-4xl text-emerald-200 leading-loose tracking-wide"
          style={{ fontFamily: "var(--font-devanagari)" }}>
          {m.devanagari}
        </p>
        <p className="font-mono text-sm text-violet-300/60 mt-3 italic">{m.iast}</p>
      </div>

      {/* Component breakdown */}
      <div>
        <div className="text-label text-ivory/25 mb-4">Component Analysis</div>
        <div className="grid sm:grid-cols-2 gap-3">
          {m.components.map((c) => (
            <div key={c.bija} className="flex gap-3 p-3 border border-white/[0.06] bg-black/20 rounded-sm">
              <div className="font-devanagari text-lg text-gold/70 w-20 shrink-0 leading-loose"
                style={{ fontFamily: "var(--font-devanagari)" }}>
                {c.bija}
              </div>
              <div>
                <div className="text-label text-ivory/30 mb-0.5">{c.name}</div>
                <p className="text-ivory/55 text-xs leading-relaxed">{c.meaning}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Section collapse panel ─────────────────────────────────────
function SectionPanel({ title, label, children, defaultOpen = false }: {
  title: string; label?: string; children: React.ReactNode; defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="card-parchment rounded-sm overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-white/[0.02] transition-colors">
        <div>
          {label && <span className="text-label text-gold/40 mr-3">{label}</span>}
          <span className="font-display text-xl text-ivory/85">{title}</span>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} className="text-ivory/30">
          <ChevronDown size={16} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }}>
            <div className="px-6 pb-6 border-t border-white/[0.05] pt-5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function KavachamPage() {
  const [filterType, setFilterType] = useState<string>("all");

  const filteredVerses = filterType === "all"
    ? kavacham.verses
    : kavacham.verses.filter(v => v.type === filterType);

  const bodyVerses = kavacham.verses.filter(v => v.type === "kavaca");
  const dialogueVerses = kavacham.verses.filter(v => v.type === "dialogue");
  const phalaVerses = kavacham.verses.filter(v => v.type === "phala");

  return (
    <div className="page-enter">
      <PageHero
        label="The Armor Hymn · Nandyāvarta Tantram"
        title="Trailokya Maṅgala"
        titleAccent="Kavacam"
        subtitle="The Shield of Auspiciousness for All Three Realms — 25 verses assigning divine aspects as protective armor over body, directions, and vibrational space"
        variant="gold"
        geometry
      />

      <section className="section-padding">
        <div className="section-container">

          {/* ── Header info panel ──────────────────────── */}
          <ScrollReveal className="mb-14">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Metadata */}
              <RitualCard title="Source & Attribution" variant="parchment">
                <div className="space-y-2">
                  {[
                    ["Source", kavacham.source],
                    ["Sage (Ṛṣi)", kavacham.sage],
                    ["Meter (Chandas)", kavacham.meter],
                    ["Deity", kavacham.deity],
                    ["Purpose", kavacham.purpose],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-3 border-b border-white/[0.04] pb-2">
                      <span className="text-label text-ivory/30 w-28 shrink-0">{k}</span>
                      <span className="text-ivory/65 text-sm">{v}</span>
                    </div>
                  ))}
                </div>
              </RitualCard>

              {/* Prologue */}
              <RitualCard title="About This Kavacham" variant="emerald">
                <p className="font-display text-sm text-ivory/60 italic leading-relaxed">
                  {kavacham.prologue}
                </p>
              </RitualCard>
            </div>
          </ScrollReveal>

          {/* ── Structure overview ─────────────────────── */}
          <ScrollReveal className="mb-14">
            <div className="glass rounded-sm p-5 flex flex-wrap gap-6 items-center justify-center">
              {[
                { label: "Dialogue", count: dialogueVerses.length, color: "text-violet-300", bg: "bg-violet-500/10 border-violet-500/30" },
                { label: "Kavaca Body", count: bodyVerses.length, color: "text-emerald-300", bg: "bg-emerald-500/10 border-emerald-600/30" },
                { label: "Phalaśruti", count: phalaVerses.length, color: "text-gold", bg: "bg-gold/10 border-gold/30" },
                { label: "Total Verses", count: kavacham.verses.length, color: "text-ivory/80", bg: "bg-white/5 border-white/15" },
              ].map(item => (
                <div key={item.label} className={`text-center px-5 py-3 border rounded-sm ${item.bg}`}>
                  <div className={`font-display text-2xl ${item.color}`}>{item.count}</div>
                  <div className="text-label text-ivory/30 mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* ── Viniyoga ──────────────────────────────── */}
          <ScrollReveal className="mb-10">
            <SectionPanel title="Viniyogaḥ — Dedication" label="विनियोगः" defaultOpen>
              <div className="space-y-3">
                <div className="border-l-2 border-gold/20 pl-4 mb-3">
                  <p className="font-display text-sm text-ivory/60 italic leading-relaxed">
                    {kavacham.viniyogaMantra.translation}
                  </p>
                </div>
                <p className="font-devanagari text-lg text-emerald-200/75 leading-loose whitespace-pre-line"
                  style={{ fontFamily: "var(--font-devanagari)" }}>
                  {kavacham.viniyogaMantra.devanagari}
                </p>
                <p className="font-mono text-xs text-violet-300/50 italic">{kavacham.viniyogaMantra.iast}</p>
              </div>
            </SectionPanel>
          </ScrollReveal>

          {/* ── Nyasa ─────────────────────────────────── */}
          <ScrollReveal className="mb-10">
            <SectionPanel title="Ṛṣyādi Nyāsaḥ — Sacred Assignments" label="ऋष्यादि न्यासः">
              <p className="font-display text-sm text-ivory/45 italic mb-5">
                Before recitation, these assignments place the sage, meter, and deity at specific points of the body, establishing the practitioner as a living yantra for the kavacham.
              </p>
              <NyasaDisplay />
            </SectionPanel>
          </ScrollReveal>

          {/* ── Filter bar ────────────────────────────── */}
          <ScrollReveal className="mb-8">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-label text-ivory/25 mr-2">FILTER</span>
              {[
                { id: "all",      label: "All Verses" },
                { id: "dialogue", label: "Opening Dialogue" },
                { id: "kavaca",   label: "Kavaca Body" },
                { id: "phala",    label: "Phalaśruti" },
              ].map(f => (
                <button key={f.id} onClick={() => setFilterType(f.id)}
                  className={`text-label px-4 py-2 border rounded-sm transition-all duration-300 ${
                    filterType === f.id
                      ? "border-gold/60 text-gold bg-gold/5"
                      : "border-white/10 text-ivory/40 hover:border-white/25 hover:text-ivory/70"
                  }`}>
                  {f.label}
                </button>
              ))}
              <span className="text-label text-ivory/20 ml-2">{filteredVerses.length} verses</span>
            </div>
          </ScrollReveal>

          {/* ── Verses ────────────────────────────────── */}
          <div className="space-y-3 mb-14 max-w-4xl mx-auto">
            {filteredVerses.map((verse, i) => (
              <VerseCard key={verse.number} verse={verse} index={i} />
            ))}
          </div>

          {/* ── Root mantra ───────────────────────────── */}
          <ScrollReveal className="mb-14">
            <div className="section-label mb-3">The Root Mantra Revealed</div>
            <h2 className="font-display text-3xl text-ivory/90 font-light mb-6">
              The Eleven-and-a-Half-Lettered Armor
            </h2>
            <RootMantraDisplay />
          </ScrollReveal>

          {/* ── Closing verse ─────────────────────────── */}
          <ScrollReveal className="mb-14">
            <div className="glass-gold rounded-sm p-6 md:p-8 text-center space-y-4">
              <div className="text-label text-gold/50">Closing Colophon</div>
              <p className="font-display text-base text-ivory/55 italic max-w-2xl mx-auto leading-relaxed">
                {kavacham.closingVerse.translation}
              </p>
              <p className="font-devanagari text-xl text-gold/80 leading-loose"
                style={{ fontFamily: "var(--font-devanagari)" }}>
                {kavacham.closingVerse.devanagari}
              </p>
              <p className="font-mono text-xs text-violet-300/50 italic">{kavacham.closingVerse.iast}</p>
            </div>
          </ScrollReveal>

          {/* ── Three-structure explanation ─────────────── */}
          <ScrollReveal className="mb-14">
            <div className="section-label mb-3">How the Kavacham Works</div>
            <h2 className="font-display text-3xl text-ivory/90 font-light mb-8">The Three Protective Structures</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: "①",
                  title: "The Body",
                  color: "text-emerald-300",
                  border: "border-emerald-600/30",
                  desc: "Each organ and region from crown to base is assigned a specific goddess-aspect as protector. The Brahma-randhra (crown aperture of the Sahasrāra) is protected by Mātaṅgī herself — transgressive wisdom enthroned at the highest spiritual aperture.",
                },
                {
                  icon: "②",
                  title: "The Directions",
                  color: "text-violet-300",
                  border: "border-violet-500/30",
                  desc: "All ten directions — four cardinal, four diagonal, upward, and downward — are assigned protective aspects. The practitioner becomes the center of a complete divine mandala. Mātaṅgī guards the Northeast (Īśāna) — the direction of divine grace.",
                },
                {
                  icon: "③",
                  title: "The Sound",
                  color: "text-gold",
                  border: "border-gold/30",
                  desc: "The kavacham culminates in the eleven-and-a-half-lettered root mantra: oṃ hrīṃ klīṃ hūṃ mātaṅginyai phaṭ svāhā. This is the vibrational synthesis of all preceding protection — the entire armor collapsed into a single sound-form.",
                },
              ].map(item => (
                <div key={item.title} className={`p-6 border ${item.border} bg-black/30 rounded-sm`}>
                  <div className={`text-3xl ${item.color} mb-3 font-display`}>{item.icon}</div>
                  <h3 className={`font-display text-lg ${item.color} mb-3`}>{item.title}</h3>
                  <p className="text-ivory/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* ── Sacred geometry visual ─────────────────── */}
          <ScrollReveal className="text-center py-12">
            <div className="flex justify-center mb-6">
              <SacredGeometry size={120} variant="yantra" color="#b8962e" />
            </div>
            <p className="font-display text-lg text-ivory/35 italic max-w-xl mx-auto">
              &ldquo;May the Divine Mother Śrī Mātaṅgī bestow complete success, all siddhi-s, wealth, auspiciousness, and prosperity to us all.&rdquo;
            </p>
            <p className="text-label text-ivory/20 mt-3">Phalaśruti — Verse 25</p>
          </ScrollReveal>

        </div>
      </section>
    </div>
  );
}
