"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FRAGMENTS = [
  "All speech is already ritual.",
  "What is rejected becomes oracle.",
  "Noise is untrained prophecy.",
  "The word you dare not say holds the most power.",
  "She lives where the map ends.",
  "The margin is not outside the sacred. The margin IS the sacred.",
  "Your most transgressive creative act is your most accurate prayer.",
];

export function GlyphOverlay() {
  return null; // Minimal version — cursor trails only active in sanctuary
}

export function TruthFragment({
  children,
  fragment,
}: {
  children: React.ReactNode;
  fragment?: string;
}) {
  const [visible, setVisible] = useState(false);
  // Lazy initializer: random pick happens once per mount, never during re-render
  const [text] = useState(() => fragment ?? FRAGMENTS[Math.floor(Math.random() * FRAGMENTS.length)]);

  return (
    <span
      className="relative cursor-default"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      <AnimatePresence>
        {visible && (
          <motion.span
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: -8, scale: 1 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.35 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-50
                       bg-[#0a0a0f]/95 border border-gold/30 backdrop-blur-sm
                       text-gold/80 text-xs font-display italic px-3 py-2 rounded-sm
                       whitespace-nowrap shadow-lg pointer-events-none"
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

export function FragmentReveal({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1.2, delay }}
      className="font-display text-base md:text-lg text-gold/50 italic tracking-wider py-3 text-center"
    >
      &ldquo;{text}&rdquo;
    </motion.div>
  );
}
