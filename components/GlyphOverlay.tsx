"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hiddenFragments } from "@/lib/hymns";

export function GlyphOverlay() {
  const [glyphs, setGlyphs] = useState<{ id: number; x: number; y: number; text: string }[]>([]);
  const counter = useRef(0);
  const SANSKRIT = ["ॐ","ह्रीं","ऐं","◈","✦","श्रीं","⊕","⟁","◉","क्लीं"];

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (Math.random() > 0.06) return;
      const id = counter.current++;
      setGlyphs(g => [...g.slice(-12), { id, x: e.clientX + (Math.random()-0.5)*40, y: e.clientY + (Math.random()-0.5)*40, text: SANSKRIT[Math.floor(Math.random()*SANSKRIT.length)] }]);
      setTimeout(() => setGlyphs(g => g.filter(x => x.id !== id)), 1800);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {glyphs.map(g => (
          <motion.span key={g.id} initial={{ opacity: 0.8, scale: 0.6, y: 0 }}
            animate={{ opacity: 0, scale: 1.2, y: -30 }} exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            style={{ left: g.x, top: g.y }}
            className="absolute font-serif text-sm text-fuchsia-400 select-none pointer-events-none">
            {g.text}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}

export function TruthFragment({ children, fragment }: { children: React.ReactNode; fragment?: string }) {
  const [visible, setVisible] = useState(false);
  const text = fragment ?? hiddenFragments[Math.floor(Math.random() * hiddenFragments.length)];
  return (
    <span className="relative cursor-default" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      {children}
      <AnimatePresence>
        {visible && (
          <motion.span initial={{ opacity: 0, y: 6, scale: 0.95 }} animate={{ opacity: 1, y: -8, scale: 1 }}
            exit={{ opacity: 0, y: 4 }} transition={{ duration: 0.35 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-50
                       bg-black/90 border border-fuchsia-500/40 backdrop-blur-sm
                       text-fuchsia-300 text-xs font-mono px-3 py-2 rounded-sm
                       whitespace-nowrap shadow-lg pointer-events-none">
            {text}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

export function FragmentReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1.2, delay }}
      className="font-mono text-fuchsia-400/60 text-sm italic tracking-wider py-2">
      "{text}"
    </motion.div>
  );
}
