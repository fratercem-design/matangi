"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { philosophyEntries, philosophyCategories } from "@/lib/philosophy";
import { Clock, ChevronDown } from "lucide-react";

function PhilosophyEntry({ entry, index }: { entry: typeof philosophyEntries[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <ScrollReveal delay={index * 0.07}>
      <article className="card-parchment rounded-sm overflow-hidden hover:border-gold/20 transition-all duration-500">
        <button
          className="w-full text-left p-6 md:p-8"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-label text-gold/50">{entry.category}</span>
                <span className="text-ivory/20">·</span>
                <span className="flex items-center gap-1.5 text-label text-ivory/30">
                  <Clock size={10} /> {entry.readTime}
                </span>
              </div>
              <h2 className="font-display text-xl md:text-2xl text-ivory/90 mb-1">{entry.title}</h2>
              <p className="font-display text-sm text-ivory/45 italic">{entry.subtitle}</p>
            </div>
            <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}
              className="text-ivory/30 mt-1 shrink-0">
              <ChevronDown size={18} />
            </motion.div>
          </div>

          {/* Quote preview */}
          <blockquote className="mt-5 border-l-2 border-gold/30 pl-4">
            <p className="font-display text-base text-ivory/55 italic">{entry.quote}</p>
            <cite className="text-label text-ivory/25 mt-1 block">{entry.quoteSource}</cite>
          </blockquote>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="px-6 md:px-8 pb-8 border-t border-white/[0.06] pt-6 space-y-4">
                {entry.body.map((para, i) => (
                  <p key={i} className="text-ivory/65 leading-relaxed text-sm md:text-base">{para}</p>
                ))}
                <div className="pt-4">
                  <p className="text-label text-gold/50 mb-3">Key Principles</p>
                  <ul className="space-y-2">
                    {entry.keyPrinciples.map((p, i) => (
                      <li key={i} className="flex gap-3 items-start text-sm text-ivory/50">
                        <span className="text-gold/50 mt-0.5 shrink-0">◈</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </ScrollReveal>
  );
}

export default function PhilosophyPage() {
  const [cat, setCat] = useState<string>("All");
  const filtered = cat === "All" ? philosophyEntries : philosophyEntries.filter(e => e.category === cat);

  return (
    <div className="page-enter">
      <PageHero
        label="Teachings & Wisdom"
        title="Philosophy of"
        titleAccent="Matangi"
        subtitle="Seven immersive teachings on speech, listening, creativity, transgression, truth, and the sacred word"
        variant="gold"
        geometry
      />

      <section className="section-padding">
        <div className="section-container">
          {/* Filter bar */}
          <ScrollReveal className="flex flex-wrap gap-2 mb-12 justify-center">
            {philosophyCategories.map(c => (
              <button key={c} onClick={() => setCat(c)}
                className={`text-label px-4 py-2 border rounded-sm transition-all duration-300 ${
                  cat === c
                    ? "border-gold/60 text-gold bg-gold/5"
                    : "border-white/10 text-ivory/40 hover:border-white/25 hover:text-ivory/70"
                }`}>
                {c}
              </button>
            ))}
          </ScrollReveal>

          {/* Opening quote */}
          <ScrollReveal className="max-w-3xl mx-auto mb-16">
            <div className="quote-block rounded-sm">
              The tradition does not say Matangi&apos;s wisdom is superior to other forms. It says it governs a specific
              register — the knowledge that does not arrive through the front door. The philosophy explored here
              is devotional, contemplative, and educational. It is an invitation to reflect, not a doctrine to adopt.
            </div>
          </ScrollReveal>

          {/* Entries */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {filtered.map((entry, i) => (
              <PhilosophyEntry key={entry.id} entry={entry} index={i} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-20 pt-12 border-t border-white/[0.06]">
            <ScrollReveal>
              <p className="font-display text-lg text-ivory/45 italic mb-8">
                Philosophy opens the space. Practice enters it.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/mantras" className="btn-ritual">Sacred Mantras</Link>
                <Link href="/meditations" className="btn-ritual-emerald btn-ritual">Guided Meditations</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
