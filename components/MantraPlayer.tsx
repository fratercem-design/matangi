"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Mantra } from "@/lib/mantras";
import { breathingSequence } from "@/lib/mantras";

export default function MantraPlayer({ mantra }: { mantra: Mantra }) {
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);
  const [breathPhase, setBreathPhase] = useState(0);
  const countRef = useRef<ReturnType<typeof setInterval>|null>(null);
  const breathRef = useRef<ReturnType<typeof setInterval>|null>(null);

  const stop = useCallback(() => {
    setActive(false);
    if (countRef.current) clearInterval(countRef.current);
    if (breathRef.current) clearInterval(breathRef.current);
    setBreathPhase(0);
  }, []);

  const start = useCallback(() => {
    setActive(true);
    countRef.current = setInterval(() => {
      setCount(c => { if (c + 1 >= mantra.repetitions) { stop(); return mantra.repetitions; } return c + 1; });
    }, 5000);
    const total = breathingSequence.reduce((a,b) => a+b.duration, 0);
    let tick = 0;
    breathRef.current = setInterval(() => {
      tick++;
      let pos = tick % total, acc = 0;
      for (let i = 0; i < breathingSequence.length; i++) {
        acc += breathingSequence[i].duration;
        if (pos < acc) { setBreathPhase(i); break; }
      }
    }, 500);
  }, [mantra.repetitions, stop]);

  useEffect(() => () => stop(), [stop]);

  const phase = breathingSequence[breathPhase];
  const pct = Math.round((count / mantra.repetitions) * 100);

  return (
    <div className="border border-violet-500/20 bg-black/50 backdrop-blur-sm rounded-sm p-6 space-y-5">
      <div className="text-center space-y-2">
        <div className="text-xs font-mono text-violet-400/60 tracking-widest uppercase">{mantra.type}</div>
        <div className="text-2xl md:text-3xl font-serif text-emerald-300 leading-relaxed tracking-wider whitespace-pre-line">{mantra.sanskrit}</div>
        <div className="text-sm font-mono text-white/40 italic">{mantra.transliteration}</div>
        <div className="text-xs text-white/50 max-w-sm mx-auto">{mantra.purpose}</div>
      </div>

      <AnimatePresence mode="wait">
        {active && (
          <motion.div key="breath" initial={{ opacity:0,scale:0.9 }} animate={{ opacity:1,scale:1 }} exit={{ opacity:0 }}
            className="flex flex-col items-center gap-3">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <motion.div animate={{ scale: breathPhase===0?[1,1.4]:breathPhase===2?[1.4,1]:1.4 }}
                transition={{ duration: phase.duration*0.5, ease:"easeInOut" }}
                className="absolute inset-0 rounded-full border border-emerald-400/40 bg-emerald-500/10" />
              <span className="text-xs font-mono text-emerald-300 text-center leading-tight z-10">{phase.phase}</span>
            </div>
            <p className="text-xs text-white/40 font-mono text-center">{phase.instruction}</p>
            <div className="text-center">
              <span className="text-3xl font-orbitron text-fuchsia-300">{count}</span>
              <span className="text-white/30 text-sm font-mono"> / {mantra.repetitions}</span>
            </div>
            <div className="w-full h-px bg-white/10 relative overflow-hidden">
              <motion.div className="absolute inset-y-0 left-0 bg-gradient-to-r from-fuchsia-500 to-cyan-400"
                style={{ width:`${pct}%` }} transition={{ duration:0.3 }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-center gap-4">
        {!active
          ? <button onClick={start} className="px-6 py-2 border border-emerald-500/50 text-emerald-300 font-mono text-sm tracking-widest hover:bg-emerald-500/10 transition-all">▶ BEGIN RECITATION</button>
          : <button onClick={stop}  className="px-6 py-2 border border-fuchsia-500/50 text-fuchsia-300 font-mono text-sm tracking-widest hover:bg-fuchsia-500/10 transition-all">◼ CEASE</button>
        }
        {count > 0 && !active && (
          <button onClick={() => setCount(0)} className="px-4 py-2 border border-white/10 text-white/30 font-mono text-xs tracking-widest hover:text-white/50 transition-all">RESET</button>
        )}
      </div>
    </div>
  );
}
