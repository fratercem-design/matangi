"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { mantras, breathingGuide, mantraLevels } from "@/lib/mantras";
import { Play, Square, RotateCcw, ChevronDown, ChevronUp } from "lucide-react";

// ── Breathing visualizer ──────────────────────────────────────
function BreathingCircle({ phase }: { phase: typeof breathingGuide[0] | null }) {
  return (
    <div className="relative w-28 h-28 flex items-center justify-center">
      <motion.div
        className="absolute inset-0 rounded-full border border-emerald-500/30"
        animate={phase ? {
          scale: phase.phase.startsWith("Inhale") ? [1, 1.45] :
                 phase.phase.startsWith("Hold") ? 1.45 :
                 phase.phase.startsWith("Exhale") ? [1.45, 1] : 1,
          opacity: [0.3, 0.7, 0.3],
        } : { scale: 1 }}
        transition={{ duration: phase?.beats ? phase.beats * 0.5 : 1, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-4 rounded-full bg-emerald-900/20 border border-emerald-600/20"
        animate={phase ? {
          scale: phase.phase.startsWith("Inhale") ? [0.8, 1.2] :
                 phase.phase.startsWith("Exhale") ? [1.2, 0.8] : undefined,
        } : {}}
        transition={{ duration: phase?.beats ? phase.beats * 0.5 : 1, ease: "easeInOut" }}
      />
      <div className="relative z-10 text-center">
        <div className="text-xs font-mono text-emerald-300/70">{phase?.phase ?? "REST"}</div>
      </div>
    </div>
  );
}

// ── Mantra player ─────────────────────────────────────────────
function MantraPlayer({ mantra }: { mantra: typeof mantras[0] }) {
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [beatTick, setBeatTick] = useState(0);
  const countRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const breathRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalBeats = breathingGuide.reduce((a, b) => a + b.beats, 0);

  const stop = useCallback(() => {
    setActive(false);
    if (countRef.current) clearInterval(countRef.current);
    if (breathRef.current) clearInterval(breathRef.current);
    setPhaseIdx(0); setBeatTick(0);
  }, []);

  const reset = useCallback(() => { stop(); setCount(0); }, [stop]);

  const start = useCallback(() => {
    setActive(true);
    countRef.current = setInterval(() => {
      setCount(c => {
        if (c + 1 >= mantra.repetitions) { stop(); return mantra.repetitions; }
        return c + 1;
      });
    }, 4800);
    let tick = 0;
    breathRef.current = setInterval(() => {
      tick++;
      const pos = tick % totalBeats;
      let acc = 0;
      for (let i = 0; i < breathingGuide.length; i++) {
        acc += breathingGuide[i].beats;
        if (pos < acc) { setPhaseIdx(i); break; }
      }
      setBeatTick(tick);
    }, 500);
  }, [mantra.repetitions, stop, totalBeats]);

  useEffect(() => () => stop(), [stop]);

  const pct = Math.round((count / mantra.repetitions) * 100);
  const phase = breathingGuide[phaseIdx];

  return (
    <div className="glass-emerald rounded-sm p-6 md:p-8">
      {/* Sanskrit display */}
      <div className="text-center mb-6">
        <div className="text-label text-gold/40 mb-3">{mantra.type}</div>
        <p className="font-devanagari text-2xl md:text-3xl text-emerald-200/80 leading-loose whitespace-pre-line"
          style={{ fontFamily: "Noto Serif Devanagari, serif" }}>
          {mantra.sanskrit}
        </p>
        <p className="font-mono text-xs text-violet-300/50 mt-2 italic">{mantra.transliteration}</p>
      </div>

      <AnimatePresence mode="wait">
        {active ? (
          <motion.div key="active" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }} className="flex flex-col items-center gap-4">
            <BreathingCircle phase={phase} />
            <p className="text-xs font-mono text-ivory/40 text-center">{phase.instruction}</p>
            <div className="text-center">
              <span className="font-display text-4xl text-emerald-300">{count}</span>
              <span className="text-ivory/30 text-sm font-mono"> / {mantra.repetitions}</span>
            </div>
            {/* Progress */}
            <div className="w-full h-0.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-emerald-600 to-gold/60"
                style={{ width: `${pct}%` }} transition={{ duration: 0.3 }} />
            </div>
            <p className="text-label text-ivory/25">{pct}% COMPLETE</p>
          </motion.div>
        ) : (
          <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-center py-4">
            {count > 0 && !active && (
              <p className="font-display text-lg text-ivory/50 italic mb-4">
                {count >= mantra.repetitions ? "Practice complete." : `${count} repetitions completed.`}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls */}
      <div className="flex gap-3 justify-center mt-4">
        {!active ? (
          <button onClick={start}
            className="btn-ritual-emerald btn-ritual gap-2 text-xs">
            <Play size={12} /> BEGIN RECITATION
          </button>
        ) : (
          <button onClick={stop}
            className="btn-ritual gap-2 text-xs">
            <Square size={12} /> CEASE
          </button>
        )}
        {count > 0 && (
          <button onClick={reset}
            className="p-2.5 border border-white/10 text-ivory/30 hover:text-ivory/60 rounded-sm transition-colors">
            <RotateCcw size={12} />
          </button>
        )}
      </div>
    </div>
  );
}

// ── Mantra card ───────────────────────────────────────────────
function MantraCard({ mantra, index }: { mantra: typeof mantras[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const levelColor = { Accessible: "emerald", Intermediate: "gold", Deep: "violet" } as const;
  const lc = levelColor[mantra.level];

  return (
    <ScrollReveal delay={index * 0.07}>
      <article className="card-parchment rounded-sm overflow-hidden hover:border-gold/20 transition-all duration-500">
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className={`text-label px-2.5 py-1 border rounded-sm ${
                  lc === "emerald" ? "border-emerald-600/30 text-emerald-400/80" :
                  lc === "gold"    ? "border-gold/30 text-gold/80" :
                                     "border-violet-500/30 text-violet-400/80"
                }`}>{mantra.level}</span>
                <span className="text-ivory/30 text-xs font-mono">{mantra.type}</span>
              </div>
              <h2 className="font-display text-xl text-ivory/90">{mantra.name}</h2>
            </div>
            <button onClick={() => setOpen(!open)}
              className="p-2 border border-white/10 rounded-sm text-ivory/40 hover:text-ivory/70 transition-colors">
              {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>

          {/* Sanskrit preview */}
          <p className="font-devanagari text-xl text-emerald-300/70 leading-loose mb-3"
            style={{ fontFamily: "Noto Serif Devanagari, serif" }}>
            {mantra.sanskrit.split("\n")[0]}
          </p>
          <p className="font-mono text-xs text-violet-300/40 italic mb-4">{mantra.transliteration.split("\n")[0]}</p>
          <p className="text-ivory/50 text-sm">{mantra.meaning}</p>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
              <div className="px-6 md:px-8 pb-8 border-t border-white/[0.06] pt-6 space-y-6">
                {/* Word by word */}
                <div>
                  <div className="text-label text-gold/40 mb-3">Word by Word</div>
                  <div className="space-y-2">
                    {mantra.wordByWord.map(w => (
                      <div key={w.word} className="flex gap-4 text-sm border-b border-white/[0.04] pb-2">
                        <span className="font-devanagari text-emerald-300/70 w-44 shrink-0"
                          style={{ fontFamily: "Noto Serif Devanagari, serif" }}>{w.word}</span>
                        <span className="text-ivory/50">{w.meaning}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practice info */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <div className="text-label text-gold/40 mb-2">Purpose</div>
                    <p className="text-ivory/55 text-sm leading-relaxed">{mantra.purpose}</p>
                  </div>
                  <div>
                    <div className="text-label text-gold/40 mb-2">Practice</div>
                    <p className="text-ivory/55 text-sm leading-relaxed">{mantra.practice}</p>
                    {mantra.timing && (
                      <p className="text-label text-ivory/30 mt-2">TIMING: {mantra.timing}</p>
                    )}
                  </div>
                </div>

                {/* Special note */}
                {mantra.note && (
                  <div className="glass-gold rounded-sm p-4">
                    <p className="font-display text-sm text-ivory/60 italic leading-relaxed">{mantra.note}</p>
                  </div>
                )}

                {/* Practice button */}
                <button onClick={() => setPlaying(!playing)} className="btn-ritual-emerald btn-ritual text-xs">
                  {playing ? "◼ CLOSE PLAYER" : "▶ OPEN PRACTICE PLAYER"}
                </button>

                <AnimatePresence>
                  {playing && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}>
                      <MantraPlayer mantra={mantra} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </ScrollReveal>
  );
}

export default function MantrasPage() {
  const [level, setLevel] = useState<string>("All");
  const filtered = level === "All" ? mantras : mantras.filter(m => m.level === level);

  return (
    <div className="page-enter">
      <PageHero
        label="Sacred Sounds"
        title="Mantras of"
        titleAccent="Matangi"
        subtitle="Six sacred sound practices with word-by-word meanings, breathing guides, and interactive practice players"
        variant="emerald"
        geometry
      />

      <section className="section-padding">
        <div className="section-container">
          {/* Breathing guide */}
          <ScrollReveal>
            <div className="glass-emerald rounded-sm p-6 mb-12 max-w-2xl mx-auto">
              <div className="text-label text-emerald-500/60 mb-4 text-center">Breathing Guide for Mantra Practice</div>
              <div className="grid grid-cols-4 gap-3">
                {breathingGuide.map(b => (
                  <div key={b.phase} className="text-center">
                    <div className="font-mono text-2xl text-emerald-300/70 mb-1">{b.beats}</div>
                    <div className="text-label text-ivory/40 mb-2">{b.phase}</div>
                    <div className="text-xs text-ivory/30 leading-tight">{b.instruction}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Level filter */}
          <ScrollReveal className="flex flex-wrap gap-2 mb-12 justify-center">
            {mantraLevels.map(l => (
              <button key={l} onClick={() => setLevel(l)}
                className={`text-label px-4 py-2 border rounded-sm transition-all duration-300 ${
                  level === l
                    ? "border-emerald-600/60 text-emerald-400 bg-emerald-950/30"
                    : "border-white/10 text-ivory/40 hover:border-white/25 hover:text-ivory/70"
                }`}>
                {l}
              </button>
            ))}
          </ScrollReveal>

          {/* Disclaimer */}
          <ScrollReveal>
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <p className="font-display text-base text-ivory/40 italic">
                These mantras are presented as devotional and contemplative practices. No supernatural outcomes
                are promised or implied. The value is in the quality of attention the practice cultivates.
              </p>
            </div>
          </ScrollReveal>

          {/* Mantra cards */}
          <div className="space-y-5 max-w-4xl mx-auto">
            {filtered.map((m, i) => <MantraCard key={m.id} mantra={m} index={i} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
