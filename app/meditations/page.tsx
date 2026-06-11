"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { meditations } from "@/lib/meditations";
import { Play, Square, ChevronRight, ChevronLeft } from "lucide-react";

const LEVEL_COLORS = {
  Opening:      "text-emerald-400  border-emerald-600/40",
  Intermediate: "text-gold         border-gold/40",
  Deep:         "text-violet-400   border-violet-500/40",
  Advanced:     "text-ivory/60     border-white/20",
};

// ── Stage progress dots ───────────────────────────────────────
function StageDots({ count, current }: { count: number; current: number }) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`rounded-full transition-all duration-500 ${
          i < current ? "w-3 h-1.5 bg-emerald-500/80" :
          i === current ? "w-4 h-1.5 bg-gold/80" :
          "w-1.5 h-1.5 bg-white/15"
        }`} />
      ))}
    </div>
  );
}

// ── Stage timer countdown ─────────────────────────────────────
function useTimer(duration: number, active: boolean, onComplete: () => void) {
  const [remaining, setRemaining] = useState(duration);
  const [started, setStarted] = useState(false);
  const ref = useRef<ReturnType<typeof setInterval> | null>(null);

  // Reset when the stage duration changes — render-phase compare (React
  // "storing information from previous renders" pattern, no effect cascade)
  const [prevDuration, setPrevDuration] = useState(duration);
  if (prevDuration !== duration) {
    setPrevDuration(duration);
    setRemaining(duration);
    setStarted(false);
  }

  useEffect(() => {
    if (ref.current) clearInterval(ref.current);
  }, [duration]);

  useEffect(() => {
    if (!active || !started) return;
    if (remaining <= 0) { onComplete(); return; }
    ref.current = setInterval(() => {
      setRemaining(r => {
        if (r <= 1) { if (ref.current) clearInterval(ref.current); onComplete(); return 0; }
        return r - 1;
      });
    }, 1000);
    return () => { if (ref.current) clearInterval(ref.current); };
  }, [active, started, remaining, onComplete]);

  return { remaining, started, begin: () => setStarted(true), reset: () => { setRemaining(duration); setStarted(false); } };
}

// ── Active meditation player ──────────────────────────────────
function MeditationPlayer({ med, onClose }: { med: typeof meditations[0]; onClose: () => void }) {
  const [stageIdx, setStageIdx] = useState(0);
  const [running, setRunning] = useState(false);
  const [bgColor, setBgColor] = useState(med.ambientPalette[0]);
  const stage = med.stages[stageIdx];

  const advance = useCallback(() => {
    if (stageIdx < med.stages.length - 1) {
      setStageIdx(i => i + 1);
      setBgColor(med.ambientPalette[Math.min(stageIdx + 1, med.ambientPalette.length - 1)]);
    } else {
      setRunning(false);
    }
  }, [stageIdx, med.stages.length, med.ambientPalette]);

  const { remaining, begin, reset } = useTimer(stage.duration, running, advance);
  const pct = ((stage.duration - remaining) / stage.duration) * 100;
  const mins = Math.floor(remaining / 60);
  const secs = remaining % 60;

  const handleStart = () => { setRunning(true); begin(); };
  const handlePrev = () => { if (stageIdx > 0) { setStageIdx(i => i - 1); reset(); } };
  const handleNext = () => { if (stageIdx < med.stages.length - 1) { setStageIdx(i => i + 1); reset(); } };

  const complete = stageIdx >= med.stages.length - 1 && remaining === 0;

  return (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Ambient background */}
      <div className="absolute inset-0 transition-all duration-[3000ms]"
        style={{ background: `radial-gradient(ellipse 80% 70% at 50% 40%, ${bgColor}25 0%, ${med.ambientPalette[0]}10 50%, #0a0a0f 100%)` }} />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative z-10 max-w-2xl w-full mx-4 flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-label text-ivory/30">MEDITATION {med.number} · {med.level.toUpperCase()}</div>
            <h2 className="font-display text-2xl text-ivory/90 mt-1">{med.title}</h2>
          </div>
          <button onClick={onClose} className="text-label text-ivory/30 hover:text-ivory/60 transition-colors border border-white/10 px-3 py-2 rounded-sm">
            CLOSE
          </button>
        </div>

        {/* Stage card */}
        <AnimatePresence mode="wait">
          <motion.div key={stageIdx} initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-sm p-6 md:p-8 min-h-[260px] flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="text-label text-ivory/25">STAGE {stageIdx + 1} OF {med.stages.length}</div>
                <h3 className="font-display text-xl text-ivory/90 mt-1">{stage.title}</h3>
              </div>
              <div className="text-right">
                <div className="font-mono text-2xl text-gold/80">{mins}:{String(secs).padStart(2, "0")}</div>
                <div className="text-label text-ivory/25 mt-1">REMAINING</div>
              </div>
            </div>

            <div className="flex-1">
              {stage.instruction.split("\n\n").map((para, i) => (
                <p key={i} className="font-display text-base text-ivory/65 italic leading-relaxed mb-3">{para}</p>
              ))}
              {stage.breathInstruction && (
                <p className="text-label text-emerald-400/50 mt-3">{stage.breathInstruction}</p>
              )}
            </div>

            {/* Timer bar */}
            <div className="mt-4 h-0.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-emerald-600/60 to-gold/50"
                style={{ width: `${pct}%` }} transition={{ duration: 0.5 }} />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Stage dots + controls */}
        <div className="flex items-center justify-between">
          <StageDots count={med.stages.length} current={stageIdx} />
          <div className="flex gap-2">
            <button onClick={handlePrev} disabled={stageIdx === 0}
              className="p-2.5 border border-white/10 rounded-sm text-ivory/40 hover:text-ivory/70 disabled:opacity-20 transition-colors">
              <ChevronLeft size={14} />
            </button>
            {!running ? (
              <button onClick={handleStart} className="btn-ritual-emerald btn-ritual text-xs px-5 gap-1.5">
                <Play size={11} /> {stageIdx === 0 ? "BEGIN" : "RESUME"}
              </button>
            ) : (
              <button onClick={() => setRunning(false)} className="btn-ritual text-xs px-5 gap-1.5">
                <Square size={11} /> PAUSE
              </button>
            )}
            <button onClick={handleNext} disabled={stageIdx >= med.stages.length - 1}
              className="p-2.5 border border-white/10 rounded-sm text-ivory/40 hover:text-ivory/70 disabled:opacity-20 transition-colors">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Complete message */}
        {complete && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="glass-emerald rounded-sm p-5">
            <div className="text-label text-emerald-500/60 mb-2">PRACTICE COMPLETE</div>
            <p className="font-display text-sm text-ivory/65 italic">{med.afterpractice}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function MeditationsPage() {
  const [active, setActive] = useState<typeof meditations[0] | null>(null);

  return (
    <div className="page-enter">
      <PageHero
        label="Guided Visualizations"
        title="Meditations of"
        titleAccent="Matangi"
        subtitle="Four immersive guided practices — from gentle arrival to deep library journeying — each with stage timers and ambient atmosphere"
        variant="violet"
        geometry
      />

      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal>
            <div className="glass rounded-sm p-5 mb-12 max-w-3xl mx-auto text-center">
              <p className="font-display text-sm text-ivory/55 italic leading-relaxed">
                These practices are contemplative visualizations in the devotional tradition. They are presented
                for personal reflection and inner exploration. Approach them as invitations, not instructions.
                Pause or stop at any time. Never drive or operate machinery during a visualization practice.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {meditations.map((med, i) => (
              <ScrollReveal key={med.id} delay={i * 0.1}>
                <div className="card-parchment rounded-sm p-6 md:p-8 h-full flex flex-col hover:border-gold/20 transition-all duration-500">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`text-label px-2 py-1 border rounded-sm ${LEVEL_COLORS[med.level]}`}>
                          {med.level}
                        </span>
                        <span className="text-ivory/30 text-xs font-mono">{med.duration}</span>
                      </div>
                      <div className="text-label text-ivory/25 mb-1">MEDITATION {med.number}</div>
                      <h2 className="font-display text-2xl text-ivory/90">{med.title}</h2>
                      <p className="font-display text-sm text-ivory/50 italic mt-1">{med.subtitle}</p>
                    </div>
                    <div className="w-14 h-14 rounded-full flex items-center justify-center border border-gold/20 text-xl text-gold/40 shrink-0">
                      {["✦", "◈", "⬡", "⊕"][i]}
                    </div>
                  </div>

                  <p className="text-ivory/55 text-sm leading-relaxed mb-4 flex-1">{med.description}</p>

                  {/* Intention */}
                  <div className="glass-gold rounded-sm p-4 mb-5">
                    <div className="text-label text-gold/40 mb-1">Intention</div>
                    <p className="font-display text-sm text-ivory/60 italic leading-relaxed">{med.intention}</p>
                  </div>

                  {/* Stage count */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex gap-1">
                      {med.stages.map((_, idx) => (
                        <div key={idx} className="w-1.5 h-1.5 rounded-full bg-white/15" />
                      ))}
                    </div>
                    <span className="text-label text-ivory/30">{med.stages.length} STAGES</span>
                  </div>

                  <button onClick={() => setActive(med)} className="btn-ritual-emerald btn-ritual text-xs gap-2 w-full justify-center">
                    <Play size={11} /> ENTER MEDITATION
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && <MeditationPlayer med={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </div>
  );
}
