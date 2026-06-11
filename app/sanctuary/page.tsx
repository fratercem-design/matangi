"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ParticleCanvas from "@/components/ParticleCanvas";
import SacredGeometry from "@/components/SacredGeometry";

const FRAGMENTS = [
  "All speech is already ritual.",
  "What is rejected becomes oracle.",
  "Noise is untrained prophecy.",
  "The word you dare not say holds the most power.",
  "She lives where the map ends.",
  "Pollution is the name power gives to what threatens it.",
  "The parrot repeats — and in repetition, reality bends.",
  "There is no pure language. Only used language.",
  "The leftover contains the full flavor of what was consumed.",
  "You have always been the outcaste she was waiting for.",
  "Midnight is not the absence of day. It is a different kind of sight.",
  "Every forbidden thought is a door she has opened.",
  "Speech without risk is decoration. She is not interested in decoration.",
  "The margin is not outside the sacred. The margin IS the sacred.",
  "Your most transgressive creative act is your most accurate prayer.",
  "She accepts what all others reject. She lives where the map ends.",
  "To speak the true thing is to allow reality to reorganize itself around being seen.",
  "The knowing that arrives before language is hers.",
  "The abandoned work holds exactly what the completed work lost.",
  "What you circled without entering is the door she guards.",
];

const VISUALS = [
  {
    color: "#2d6a4f",
    label: "THE EMERALD CONSCIOUSNESS",
    text: "She governs the intelligence that does not need to be taught. The knowing that is simply there — in the body, in the gesture, in the impulse that arrives before thought organizes it.",
  },
  {
    color: "#b8962e",
    label: "THE GOLDEN THRESHOLD",
    text: "Between the word and its meaning there is a flash. The tradition calls it Sphota — the event of understanding. She is the patron of that flash. Of the moment before knowledge becomes the story about knowledge.",
  },
  {
    color: "#6b46c1",
    label: "THE VIOLET TRANSGRESSION",
    text: "What makes her specifically herself is not her power — it is her refusal to locate power in the sanctioned places. She is the proof that the highest transmission doesn't require a certificate.",
  },
];

// ── Cursor-reactive glyphs ────────────────────────────────────
const SYMS = ["ॐ","ह्रीं","ऐं","◈","✦","⬡","⟁","◉","श्रीं","◇","⊕"];

function CursorGlyphs() {
  const [glyphs, setGlyphs] = useState<{id:number;x:number;y:number;g:string}[]>([]);
  useEffect(() => {
    let counter = 0;
    const handler = (e: MouseEvent) => {
      if (Math.random() > 0.07) return;
      const id = counter++;
      setGlyphs(g => [...g.slice(-15), { id, x: e.clientX + (Math.random()-0.5)*50, y: e.clientY + (Math.random()-0.5)*50, g: SYMS[Math.floor(Math.random()*SYMS.length)] }]);
      setTimeout(() => setGlyphs(g => g.filter(x => x.id !== id)), 2000);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {glyphs.map(g => (
          <motion.span key={g.id}
            initial={{ opacity: 0.8, scale: 0.5, y: 0 }}
            animate={{ opacity: 0, scale: 1.4, y: -40 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            style={{ left: g.x, top: g.y, position: "fixed" }}
            className="text-gold/70 text-base font-devanagari pointer-events-none select-none"
            aria-hidden>
            {g.g}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}

// ── Fragment reveal on scroll/hover ──────────────────────────
function RevealFragment({ text, delay }: { text: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.p
        className="font-display text-lg md:text-xl text-ivory/70 italic text-center cursor-default leading-relaxed py-2"
        whileHover={{ color: "#f5f0e8", textShadow: "0 0 20px rgba(184,150,46,0.4)" }}
      >
        &ldquo;{text}&rdquo;
      </motion.p>
    </motion.div>
  );
}

export default function SanctuaryPage() {
  const [phase, setPhase] = useState<"lock" | "unlocking" | "open">("lock");
  const [visIdx, setVisIdx] = useState(0);

  useEffect(() => {
    // Deferred so the unlock check never sets state synchronously inside the effect
    const t = setTimeout(() => {
      try {
        const visited: string[] = JSON.parse(localStorage.getItem("matangi_visited") ?? "[]");
        if (visited.length >= 3) setPhase("open");
      } catch { /* stays locked */ }
    }, 0);
    return () => clearTimeout(t);
  }, []);

  const forceUnlock = () => {
    setPhase("unlocking");
    setTimeout(() => setPhase("open"), 2500);
  };

  // Cycle visual
  useEffect(() => {
    if (phase !== "open") return;
    const id = setInterval(() => setVisIdx(i => (i + 1) % VISUALS.length), 8000);
    return () => clearInterval(id);
  }, [phase]);

  const vis = VISUALS[visIdx];

  return (
    <div className="min-h-screen bg-[#07070d] relative overflow-x-hidden">
      <CursorGlyphs />
      <ParticleCanvas density={1.2} className="fixed inset-0 z-0" />

      <AnimatePresence mode="wait">

        {/* ── LOCKED STATE ─────────────────────────── */}
        {phase === "lock" && (
          <motion.div key="locked" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="relative z-10 min-h-screen flex items-center justify-center px-6">
            <div className="text-center max-w-lg">
              <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="mx-auto w-24 h-24 mb-10">
                <SacredGeometry size={96} variant="yantra" color="#b8962e" animated={false} />
              </motion.div>
              <p className="text-label text-ivory/25 mb-5">INNER SANCTUARY</p>
              <h1 className="font-display text-4xl text-ivory/80 font-light mb-6">A Hidden Path</h1>
              <p className="font-display text-base text-ivory/45 italic leading-relaxed mb-10">
                The Inner Sanctuary opens to those who have explored the temple — visited several of its chambers
                and arrived with genuine curiosity. It is not locked for exclusivity, but because some spaces
                require preparation.
              </p>
              <div className="glass rounded-sm p-5 mb-8">
                <div className="text-label text-ivory/25 mb-3">To unlock, visit at least 3 sections of the temple</div>
                <div className="flex flex-wrap gap-2 justify-center text-xs font-mono text-ivory/30">
                  {["/about","/philosophy","/hymns","/mantras","/meditations","/library"].map(p => (
                    <Link key={p} href={p} className="px-2 py-1 border border-white/10 hover:border-gold/30 hover:text-gold/60 transition-colors rounded-sm">
                      {p}
                    </Link>
                  ))}
                </div>
              </div>
              <button onClick={forceUnlock} className="btn-ritual text-xs opacity-50 hover:opacity-80">
                ENTER REGARDLESS
              </button>
            </div>
          </motion.div>
        )}

        {/* ── UNLOCKING ANIMATION ─────────────────── */}
        {phase === "unlocking" && (
          <motion.div key="unlocking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="relative z-10 min-h-screen flex items-center justify-center">
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 2, 0.5, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="mx-auto w-32 h-32 mb-6">
                <SacredGeometry size={128} variant="yantra" color="#b8962e" />
              </motion.div>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                className="font-display text-xl text-ivory/60 italic">
                The sanctuary opens...
              </motion.p>
            </div>
          </motion.div>
        )}

        {/* ── OPEN SANCTUARY ──────────────────────── */}
        {phase === "open" && (
          <motion.div key="open" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="relative z-10">

            {/* ── Hero chamber ──────────────────────── */}
            <section className="min-h-screen flex items-center justify-center relative pt-20 pb-16 px-6">
              <div className="absolute inset-0 transition-all duration-[5000ms]"
                style={{ background: `radial-gradient(ellipse 70% 60% at 50% 45%, ${vis.color}20 0%, transparent 65%)` }} />

              <div className="text-center max-w-3xl">
                <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                  className="mx-auto w-32 h-32 mb-10">
                  <SacredGeometry size={128} variant="yantra" animated />
                </motion.div>

                <p className="text-label text-gold/50 mb-5 tracking-[0.4em]">INNER SANCTUARY · UNLOCKED</p>
                <h1 className="font-display font-light mb-6"
                  style={{ fontSize: "clamp(2.5rem,6vw,5rem)", lineHeight: 1.05 }}>
                  <span className="text-ivory/90">The Unspoken</span>{" "}
                  <span className="text-shimmer italic">Archive</span>
                </h1>
                <p className="font-display text-lg text-ivory/45 italic max-w-xl mx-auto leading-relaxed mb-10">
                  Here the temple speaks without ceremony. These are the transmissions that don&apos;t fit in categories —
                  the fragments that arrive when the explaining stops.
                </p>

                <AnimatePresence mode="wait">
                  <motion.div key={vis.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }} transition={{ duration: 1 }}
                    className="glass rounded-sm p-6 max-w-lg mx-auto">
                    <div className="text-label mb-3" style={{ color: vis.color }}>{vis.label}</div>
                    <p className="font-display text-base text-ivory/65 italic leading-relaxed">{vis.text}</p>
                  </motion.div>
                </AnimatePresence>

                <div className="flex justify-center gap-2 mt-6">
                  {VISUALS.map((_, i) => (
                    <button key={i} onClick={() => setVisIdx(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === visIdx ? "bg-gold/80 w-4" : "bg-white/20"}`} />
                  ))}
                </div>
              </div>
            </section>

            {/* ── Fragment wall ─────────────────────── */}
            <section className="py-24 relative">
              <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(107,70,193,0.06) 0%, transparent 70%)" }} />
              <div className="section-container relative z-10">
                <div className="text-center mb-16">
                  <p className="text-label text-gold/40 mb-4">TRANSMISSION FRAGMENTS</p>
                  <h2 className="font-display text-3xl text-ivory/80 font-light">
                    What Arrives When the Explaining Stops
                  </h2>
                  <p className="font-display text-sm text-ivory/30 italic mt-4">
                    Hover any fragment. Move your cursor through the space.
                  </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-3">
                  {FRAGMENTS.map((f, i) => (
                    <RevealFragment key={i} text={f} delay={i * 0.04} />
                  ))}
                </div>
              </div>
            </section>

            {/* ── The final teaching ────────────────── */}
            <section className="py-24 border-t border-white/[0.04]">
              <div className="section-container max-w-3xl">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                  viewport={{ once: true }} transition={{ duration: 1.5 }}>
                  <div className="text-center mb-12">
                    <SacredGeometry size={80} variant="minimal" color="#b8962e" className="mx-auto mb-8" />
                    <p className="text-label text-gold/40 mb-4">THE FINAL TRANSMISSION</p>
                  </div>

                  <div className="glass rounded-sm p-8 md:p-12 text-center space-y-6">
                    <p className="font-display text-2xl text-ivory/80 font-light italic leading-relaxed">
                      There is nothing secret in this sanctuary.
                    </p>
                    <p className="font-display text-lg text-ivory/55 italic leading-relaxed">
                      Everything here was always available. The difference is simply that you arrived — not
                      because you had the right credentials, but because you kept going until the gate opened.
                      That is exactly what she teaches.
                    </p>
                    <p className="font-display text-lg text-ivory/55 italic leading-relaxed">
                      The outcaste enters not by being granted permission, but by arriving at a place where the
                      permission rules no longer apply. You did not earn this by accumulating merit. You arrived
                      here by being genuinely curious.
                    </p>
                    <p className="font-display text-xl text-gold/70 italic mt-8">
                      That is sufficient. That is the practice.
                    </p>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* ── Navigation out ────────────────────── */}
            <section className="py-16 border-t border-white/[0.04] text-center">
              <div className="section-container">
                <p className="font-display text-base text-ivory/35 italic mb-8">
                  Return to the temple whenever you need.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link href="/"         className="btn-ritual text-xs">Return to Threshold</Link>
                  <Link href="/journal"  className="btn-ritual-emerald btn-ritual text-xs">Open Journal</Link>
                  <Link href="/mantras"  className="btn-ritual-emerald btn-ritual text-xs">Practice Mantras</Link>
                </div>
              </div>
            </section>

          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
