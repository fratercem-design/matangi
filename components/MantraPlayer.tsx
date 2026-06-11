"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Mantra } from "@/lib/mantras";
import { breathingGuide } from "@/lib/mantras";
import { Play, Square, RotateCcw } from "lucide-react";

interface Props { mantra: Mantra; }

export default function MantraPlayer({ mantra }: Props) {
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);
  const [phaseIdx, setPhaseIdx] = useState(0);
  const countRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const breathRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const totalBeats = breathingGuide.reduce((a, b) => a + b.beats, 0);

  const stop = useCallback(() => {
    setActive(false);
    if (countRef.current) clearInterval(countRef.current);
    if (breathRef.current) clearInterval(breathRef.current);
    setPhaseIdx(0);
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
    }, 500);
  }, [mantra.repetitions, stop, totalBeats]);

  useEffect(() => () => stop(), [stop]);

  const pct = Math.round((count / mantra.repetitions) * 100);
  const phase = breathingGuide[phaseIdx];

  return (
    <div className="glass-emerald rounded-sm p-6 space-y-5">
      <div className="text-center">
        <div className="text-label text-gold/40 mb-3">{mantra.type}</div>
        <p className="font-devanagari text-2xl md:text-3xl text-emerald-200/80 leading-loose whitespace-pre-line"
          style={{ fontFamily: "var(--font-devanagari)" }}>
          {mantra.sanskrit}
        </p>
        <p className="font-mono text-xs text-violet-300/50 mt-2 italic">{mantra.transliteration}</p>
      </div>

      <AnimatePresence mode="wait">
        {active ? (
          <motion.div key="active" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }} className="flex flex-col items-center gap-4">
            {/* Breathing circle */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              <motion.div className="absolute inset-0 rounded-full border border-emerald-500/30"
                animate={{ scale: phase.phase.startsWith("Inhale") ? [1, 1.45] : phase.phase.startsWith("Exhale") ? [1.45, 1] : 1.4 }}
                transition={{ duration: phase.beats * 0.5, ease: "easeInOut" }} />
              <span className="text-xs font-mono text-emerald-300/70">{phase.phase}</span>
            </div>
            <p className="text-xs font-mono text-ivory/40 text-center">{phase.instruction}</p>
            <div className="text-center">
              <span className="font-display text-4xl text-emerald-300">{count}</span>
              <span className="text-ivory/30 text-sm font-mono"> / {mantra.repetitions}</span>
            </div>
            <div className="w-full h-0.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-emerald-600 to-gold/60"
                style={{ width: `${pct}%` }} transition={{ duration: 0.3 }} />
            </div>
            <p className="text-label text-ivory/25">{pct}% COMPLETE</p>
          </motion.div>
        ) : (
          <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-2">
            {count > 0 && count >= mantra.repetitions && (
              <p className="font-display text-lg text-emerald-300/70 italic">Practice complete.</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-3 justify-center">
        {!active ? (
          <button onClick={start} className="btn-ritual-emerald btn-ritual gap-2 text-xs">
            <Play size={11} /> BEGIN RECITATION
          </button>
        ) : (
          <button onClick={stop} className="btn-ritual gap-2 text-xs">
            <Square size={11} /> CEASE
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
