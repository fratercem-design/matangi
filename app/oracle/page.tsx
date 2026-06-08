"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import SacredGeometry from "@/components/SacredGeometry";
import ParticleCanvas from "@/components/ParticleCanvas";
import OracleArt from "@/components/OracleArt";
import SoundControl, { useOracleSound } from "@/components/OracleSound";
import {
  oracleCards,
  oracleIntro,
  oracleInstructions,
  spreads,
  type OracleCard,
  type ReadingSpread,
} from "@/lib/oracle";
import { RotateCcw, ChevronDown, ChevronUp, Sparkles, Eye, X } from "lucide-react";

// ── Utility: pick n random unique cards ──────────────────────
function pickCards(n: number, reversed?: boolean): Array<{ card: OracleCard; isReversed: boolean }> {
  const shuffled = [...oracleCards].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n).map(card => ({
    card,
    isReversed: reversed !== undefined ? reversed : Math.random() > 0.75,
  }));
}

// ── Particle shimmer overlay on card reveal ──────────────────
function CardRevealBurst({ active, color }: { active: boolean; color: string }) {
  if (!active) return null;
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 1.8, ease: "easeOut" }}
    >
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i / 24) * 360;
        const dist = 60 + Math.random() * 80;
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: color,
              left: "50%",
              top: "50%",
              boxShadow: `0 0 6px ${color}`,
            }}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{
              x: Math.cos((angle * Math.PI) / 180) * dist,
              y: Math.sin((angle * Math.PI) / 180) * dist,
              opacity: 0,
              scale: 0,
            }}
            transition={{ duration: 1.2, delay: i * 0.02, ease: "easeOut" }}
          />
        );
      })}
      {/* Inner flash */}
      <motion.div
        className="absolute inset-0 rounded-sm"
        style={{ background: `radial-gradient(ellipse at center, ${color}40 0%, transparent 70%)` }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 2, opacity: [0, 0.6, 0] }}
        transition={{ duration: 0.8 }}
      />
    </motion.div>
  );
}

// ── Glowing sigil behind drawn card ──────────────────────────
function CardAura({ color }: { color: string }) {
  return (
    <motion.div
      className="absolute inset-[-30px] pointer-events-none"
      style={{
        background: `radial-gradient(ellipse at center, ${color}20 0%, transparent 65%)`,
        filter: "blur(20px)",
      }}
      animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.95, 1.05, 0.95] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

// ── Oracle question input ─────────────────────────────────────
function QuestionInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative max-w-xl mx-auto">
      <label className="block text-label text-ivory/30 mb-3 text-center">
        TRANSMIT YOUR QUESTION INTO THE SILENCE
      </label>
      <div className="relative">
        <textarea
          value={value}
          onChange={e => onChange(e.target.value)}
          rows={3}
          placeholder="What do you carry to this threshold? Ask freely — or ask nothing. Both are received."
          className="w-full resize-none text-sm bg-[rgba(255,255,255,0.03)] border border-white/10
                     text-ivory/75 placeholder-ivory/20 rounded-sm px-4 py-3 outline-none
                     focus:border-gold/40 focus:shadow-[0_0_20px_rgba(184,150,46,0.08)]
                     transition-all duration-400 font-display italic"
        />
        {/* Animated border glow on focus */}
        <motion.div
          className="absolute inset-0 rounded-sm pointer-events-none"
          style={{ border: "1px solid rgba(184,150,46,0.2)" }}
          animate={{ opacity: value ? [0.4, 0.8, 0.4] : 0 }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
      <p className="text-label text-ivory/20 text-center mt-2">
        Your question is held in strict confidence. It shapes the reading.
      </p>
    </div>
  );
}

// ── Individual drawn card ─────────────────────────────────────
function DrawnCard({
  card,
  isReversed,
  position,
  question,
  index,
}: {
  card: OracleCard;
  isReversed: boolean;
  position: { id: string; label: string; description: string };
  question: string;
  index: number;
}) {
  const [revealed, setRevealed] = useState(false);
  const [burst, setBurst] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const [showPersonalized, setShowPersonalized] = useState(false);
  const reading = isReversed ? card.reversed : card.upright;

  const handleReveal = () => {
    setBurst(true);
    setTimeout(() => { setRevealed(true); setBurst(false); }, 300);
  };

  // Generate personalized advice based on question + card
  const personalizedAdvice = generatePersonalizedAdvice(card, isReversed, question);

  return (
    <ScrollReveal delay={index * 0.15}>
      <div className="flex flex-col items-center gap-4">
        {/* Position label */}
        <div className="text-center">
          <div className="text-label text-gold/50 mb-1">{position.label}</div>
          <div className="font-mono text-xs text-ivory/25">{position.description}</div>
        </div>

        {/* Card body */}
        <div className="relative w-full max-w-xs">
          <CardAura color={card.colorPrimary} />

          <AnimatePresence mode="wait">
            {!revealed ? (
              // ── Card back ──────────────────────────────────
              <motion.div
                key="back"
                className="relative cursor-pointer group"
                onClick={handleReveal}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                whileTap={{ scale: 0.97 }}
              >
                <CardRevealBurst active={burst} color={card.colorPrimary} />
                <div
                  className="aspect-[2/3] rounded-sm border border-white/10 overflow-hidden
                              flex flex-col items-center justify-center gap-4 relative
                              hover:border-gold/30 transition-all duration-500"
                  style={{
                    background: `linear-gradient(160deg, #0a0a0f, #0c1a12 40%, #0a0a0f)`,
                    boxShadow: `0 0 40px ${card.colorPrimary}20`,
                  }}
                >
                  {/* Animated back design */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{
                      background: `radial-gradient(ellipse at 50% 40%, ${card.colorPrimary}25 0%, transparent 65%)`,
                    }}
                  />
                  <SacredGeometry size={120} variant="yantra" color={card.colorPrimary} animated />
                  <div className="relative z-10 text-center space-y-1">
                    <div className="text-2xl" style={{ color: card.colorPrimary }}>{card.symbol}</div>
                    <div className="text-label text-ivory/30">TOUCH TO REVEAL</div>
                  </div>
                  {/* Scanlines */}
                  <div className="absolute inset-0 scanlines pointer-events-none opacity-30" />
                </div>
              </motion.div>
            ) : (
              // ── Card face ──────────────────────────────────
              <motion.div
                key="face"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`rounded-sm border overflow-hidden ${isReversed ? "rotate-180" : ""}`}
                style={{
                  borderColor: `${card.colorPrimary}50`,
                  boxShadow: `0 0 50px ${card.colorPrimary}25, 0 4px 30px rgba(0,0,0,0.6)`,
                  background: `linear-gradient(160deg, #0a0a0f, ${card.colorPrimary}12)`,
                }}
              >
                {/* Card number + type */}
                <div className="flex items-center justify-between px-4 pt-3 pb-2 border-b border-white/[0.05]">
                  <div className="text-label text-ivory/30">CARD {card.number}</div>
                  <div className="text-label" style={{ color: card.colorPrimary }}>
                    {card.theme.toUpperCase().replace("-", " ")}
                  </div>
                  {isReversed && <div className="text-label text-amber-400/60">REVERSED</div>}
                </div>

                {/* Artwork */}
                <div className={`relative ${isReversed ? "rotate-180" : ""}`}>
                  <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full"
                  >
                    <OracleArt
                      artwork={card.artwork}
                      size={280}
                      animated
                      className="w-full h-auto"
                    />
                  </motion.div>
                  {/* Title overlay */}
                  <div className="absolute bottom-0 inset-x-0 px-4 pb-3 pt-8"
                    style={{ background: `linear-gradient(to top, ${card.colorPrimary}30, transparent)` }}>
                    <div className="text-lg font-display text-ivory/90">{card.title}</div>
                    <div className="text-sm font-devanagari text-ivory/40"
                      style={{ fontFamily: "Noto Serif Devanagari, serif" }}>
                      {card.symbolSanskrit}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Reading text — appears after reveal */}
        <AnimatePresence>
          {revealed && (
            <motion.div
              key="reading"
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-sm space-y-4"
            >
              {/* Headline */}
              <motion.div
                className="rounded-sm p-4 border text-center"
                style={{
                  borderColor: `${card.colorPrimary}40`,
                  background: `${card.colorPrimary}08`,
                }}
                animate={{ borderColor: [`${card.colorPrimary}20`, `${card.colorPrimary}60`, `${card.colorPrimary}20`] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <p className="font-display text-base text-ivory/90 italic leading-relaxed">
                  "{reading.headline}"
                </p>
              </motion.div>

              {/* Body */}
              <div className="space-y-3 px-1">
                {reading.body.split("\n\n").map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + i * 0.2 }}
                    className="font-display text-sm text-ivory/65 italic leading-relaxed"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>

              {/* Mantra fragment */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-center py-3 border-t border-white/[0.06]"
              >
                <p className="font-devanagari text-lg text-gold/60 leading-loose"
                  style={{ fontFamily: "Noto Serif Devanagari, serif" }}>
                  {card.mantraFragment}
                </p>
                <p className="font-mono text-[10px] text-ivory/25 italic mt-1">{card.mantraFragmentDev}</p>
              </motion.div>

              {/* Personalized advice (if question was asked) */}
              {question.trim() && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
                  <button
                    onClick={() => setShowPersonalized(!showPersonalized)}
                    className="w-full flex items-center justify-between px-4 py-3 border border-gold/20
                               bg-gold/[0.03] rounded-sm hover:border-gold/40 hover:bg-gold/[0.06]
                               transition-all duration-400 group"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles size={13} className="text-gold/50" />
                      <span className="text-label text-gold/60">PERSONALIZED TRANSMISSION</span>
                    </div>
                    <motion.div animate={{ rotate: showPersonalized ? 180 : 0 }}>
                      <ChevronDown size={14} className="text-ivory/30" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {showPersonalized && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="px-4 pt-4 pb-5 border border-t-0 border-gold/20 bg-gold/[0.02] rounded-b-sm space-y-3">
                          <p className="font-mono text-[10px] text-ivory/25 italic">
                            "{question.slice(0, 80)}{question.length > 80 ? "…" : ""}"
                          </p>
                          {personalizedAdvice.map((line, i) => (
                            <motion.p
                              key={i}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.15 }}
                              className="font-display text-sm text-ivory/70 italic leading-relaxed"
                            >
                              {line}
                            </motion.p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}

              {/* Shadow truth (collapsible) */}
              {"shadow" in reading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
                  <button
                    onClick={() => setShowShadow(!showShadow)}
                    className="w-full flex items-center justify-between px-4 py-3 border border-white/[0.07]
                               bg-black/20 rounded-sm hover:border-white/15 hover:bg-black/30
                               transition-all duration-400"
                  >
                    <div className="flex items-center gap-2">
                      <Eye size={13} className="text-ivory/30" />
                      <span className="text-label text-ivory/30">THE SHADOW</span>
                    </div>
                    <motion.div animate={{ rotate: showShadow ? 180 : 0 }}>
                      <ChevronDown size={14} className="text-ivory/30" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {showShadow && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="px-4 pt-4 pb-5 border border-t-0 border-white/[0.06] bg-black/20 rounded-b-sm">
                          <p className="font-display text-sm text-ivory/50 italic leading-relaxed">
                            {(reading as any).shadow}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

// ── Personalized advice generator ────────────────────────────
function generatePersonalizedAdvice(card: OracleCard, isReversed: boolean, question: string): string[] {
  const q = question.toLowerCase();

  // Detect question themes
  const themes = {
    creative: /creat|art|writ|music|paint|poem|mak|express|work|project/i.test(q),
    relationship: /love|relation|partner|friend|famil|connect|person|someone|he |she |they/i.test(q),
    career: /work|job|career|money|business|path|direction|purpose|calling/i.test(q),
    spiritual: /spirit|soul|practic|meditat|god|divine|faith|believ|meaning/i.test(q),
    truth: /truth|honest|real|authentic|lie|false|hide|secret|know|understand/i.test(q),
    fear: /fear|scared|afraid|anxious|worry|nervous|uncertain|unsure|doubt/i.test(q),
    transition: /change|transit|moving|leaving|new|start|end|finish|beginning/i.test(q),
  };

  const lines: string[] = [];
  const reading = isReversed ? card.reversed : card.upright;

  // Opening anchor to question
  if (q.length > 10) {
    lines.push(`Matangi received what you brought to this threshold. The card that arrived — ${card.title} — is not random. It is her response to the specific weight of what you asked.`);
  }

  // Theme-specific personalization
  if (themes.creative) {
    switch (card.theme) {
      case "vak":
        lines.push("The creative block you are navigating is not about craft. The work is waiting on permission — specifically, the permission to say the thing the work is actually about rather than the safer version of it.");
        break;
      case "leftover":
        lines.push("What you have discarded from the creative work — the rougher version, the unfinished draft, the attempt you abandoned — contains exactly what the final work is missing. Matangi is pointing directly at it.");
        break;
      case "music":
        lines.push("The creative practice right now needs less production and more listening. Something wants to arrive that the current pace of making is moving too fast to receive.");
        break;
      default:
        lines.push("The creative question you are holding is not actually about skill or output. It is about what the work is permitted to be. Matangi governs precisely that permission.");
    }
  }

  if (themes.relationship) {
    switch (card.theme) {
      case "speech":
      case "vak":
        lines.push("Something is not being said in this relationship — or has not been said yet. Not cruelly. Honestly. The relationship can only go as deep as the speech that moves through it. This card marks the moment that speech is ready.");
        break;
      case "silence":
        lines.push("The most important communication in this relationship right now is not what is said but the quality of attention brought to listening. Something the other person is carrying is waiting to be genuinely heard.");
        break;
      default:
        lines.push("The relationship question contains an inversion: the thing that appears to be the obstacle may be the doorway. Matangi governs the liminal, the between-states. That is precisely where you are with this person.");
    }
  }

  if (themes.career || themes.transition) {
    if (isReversed) {
      lines.push("The transition you are in is not going in the wrong direction — it is moving slower than expected, or through territory that feels less sanctioned than the previous path. This is not a sign to stop. It is a sign that the path is genuine.");
    } else {
      lines.push("The direction that is emerging does not have the conventional markers of legitimacy — it did not arrive through approved channels, it does not fit the established category. Matangi specifically governs this. She considers that a qualification, not a disqualification.");
    }
  }

  if (themes.spiritual) {
    lines.push("The spiritual question you carry is being met not with instruction but with presence. Matangi does not offer a teaching here — she offers a mirror. The answer to what you asked is already in you, waiting for the right quality of silence to make itself known.");
  }

  if (themes.fear || themes.truth) {
    lines.push("What is underneath the surface of what you asked is also being received. Matangi is specifically the goddess of what is not said, what is refused entrance, what is kept at the gate. She is asking: what are you actually afraid to know here?");
  }

  // Card-specific closing
  if (card.theme === "threshold") {
    lines.push("You are not lost. You are at the exact location where her kind of knowing becomes available. Stay here a moment longer before taking the next step.");
  } else if (card.theme === "forbidden") {
    lines.push("The knowing that is arriving — through whatever unconventional channel it is using — is real. The question is not where it came from. The question is whether it is true.");
  } else if (card.theme === "vak") {
    lines.push("There is something you know that you have not yet allowed yourself to fully know. That is the actual question underneath the question you asked. Matangi is holding it with you.");
  } else if (card.theme === "night") {
    lines.push("What is arriving in the unattended hours — in dreams, in the quieter states — is the transmission that cannot arrive through the front door of the managed mind. Pay attention to what comes when you are not performing.");
  }

  // Ensure we always have something
  if (lines.length === 0) {
    lines.push(`The transmission of ${card.title} lands directly in the territory of what you asked. ${reading.headline} — this is not a general statement. It is specific to you, right now, in the exact situation you carried here.`);
    lines.push("Hold what arrived without immediately interpreting it. The meaning will clarify in the hours and days that follow, not in the moment of reading.");
  }

  return lines;
}

// ── Spread selector ───────────────────────────────────────────
function SpreadSelector({
  selected,
  onSelect,
}: {
  selected: ReadingSpread;
  onSelect: (s: ReadingSpread) => void;
}) {
  const options: { id: ReadingSpread; label: string; desc: string; count: number }[] = [
    { id: "single", label: "Single Transmission", desc: "One card. The most direct message.", count: 1 },
    { id: "three",  label: "Three Voices",         desc: "Past · Present · Direction", count: 3 },
    { id: "cross",  label: "The Cross",             desc: "Five cards. The full picture.", count: 5 },
  ];

  return (
    <div className="grid sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
      {options.map(opt => (
        <button
          key={opt.id}
          onClick={() => onSelect(opt.id)}
          className={`p-4 border rounded-sm text-center transition-all duration-400 group ${
            selected === opt.id
              ? "border-gold/60 bg-gold/[0.05] shadow-[0_0_30px_rgba(184,150,46,0.1)]"
              : "border-white/10 hover:border-white/25 hover:bg-white/[0.02]"
          }`}
        >
          <div className={`font-display text-base mb-1 ${selected === opt.id ? "text-gold" : "text-ivory/70 group-hover:text-ivory"}`}>
            {opt.label}
          </div>
          <div className="font-mono text-[10px] text-ivory/30">{opt.desc}</div>
          <div className="mt-2 flex justify-center gap-1">
            {Array.from({ length: opt.count }).map((_, i) => (
              <div
                key={i}
                className={`w-3 h-4 rounded-sm border transition-all duration-300 ${
                  selected === opt.id ? "border-gold/60 bg-gold/20" : "border-white/15"
                }`}
              />
            ))}
          </div>
        </button>
      ))}
    </div>
  );
}

// ── Main Oracle Page ──────────────────────────────────────────
export default function OraclePage() {
  const [spread, setSpread] = useState<ReadingSpread>("single");
  const [question, setQuestion] = useState("");
  const [drawn, setDrawn] = useState<Array<{ card: OracleCard; isReversed: boolean }>>([]);
  const [drawing, setDrawing] = useState(false);
  const [phase, setPhase] = useState<"intro" | "draw" | "reading">("intro");
  const [glyphs, setGlyphs] = useState<{ id: number; x: number; y: number; g: string }[]>([]);
  const glyphCount = useRef(0);
  const sound = useOracleSound();

  // Cursor glyph trail
  useEffect(() => {
    const SYMS = ["ॐ", "ह्रीं", "ऐं", "◈", "✦", "⬡", "⟁", "◉", "⊕", "मातङ्गि", "श्रीं", "क्लीं"];
    const handler = (e: MouseEvent) => {
      if (Math.random() > 0.1) return;
      const id = glyphCount.current++;
      const g = SYMS[Math.floor(Math.random() * SYMS.length)];
      setGlyphs(prev => [...prev.slice(-20), { id, x: e.clientX, y: e.clientY, g }]);
      setTimeout(() => setGlyphs(prev => prev.filter(x => x.id !== id)), 2000);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  // Draw cards
  const drawCards = useCallback(() => {
    setDrawing(true);
    const positions = spreads[spread];
    setTimeout(() => {
      setDrawn(pickCards(positions.length));
      setDrawing(false);
      setPhase("reading");
    }, 1800);
  }, [spread]);

  const reset = useCallback(() => {
    setDrawn([]);
    setQuestion("");
    setPhase("intro");
    setSpread("single");
  }, []);

  const positions = spreads[spread];

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ background: "linear-gradient(180deg, #0a0a0f 0%, #08100c 40%, #0a0a0f 70%, #0c0a18 100%)" }}>

      {/* ── Cursor glyph trail ───────────────────── */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <AnimatePresence>
          {glyphs.map(g => (
            <motion.span
              key={g.id}
              initial={{ opacity: 0.9, scale: 0.5, y: 0 }}
              animate={{ opacity: 0, scale: 1.5, y: -35 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              style={{ left: g.x - 10, top: g.y - 10, position: "fixed" }}
              className="font-serif text-gold/70 text-base pointer-events-none select-none"
              aria-hidden
            >
              {g.g}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      {/* ── Particle background ──────────────────── */}
      <ParticleCanvas density={0.7} className="fixed inset-0 z-0" />

      {/* ── Ambient radial glows ─────────────────── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(45,106,79,0.1) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(184,150,46,0.06) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      {/* ── Main content ─────────────────────────── */}
      <div className="relative z-10 section-container">

        {/* ── Header ───────────────────────────── */}
        <div className="pt-24 pb-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            >
              <SacredGeometry size={100} variant="yantra" color="#b8962e" animated />
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-label text-gold/50 tracking-[0.4em] mb-5"
          >
            ◈ MAHAVIDYA IX · VAK SIDDHI · LIMINAL ORACLE ◈
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="font-display font-light text-ivory/90 mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.05 }}
          >
            The Oracle of{" "}
            <motion.span
              className="italic"
              style={{
                background: "linear-gradient(90deg, #b8962e 0%, #f0d080 40%, #b8962e 80%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              animate={{ backgroundPosition: ["200% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Mātaṅgī
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="font-display text-lg text-ivory/40 italic max-w-xl mx-auto leading-relaxed"
          >
            She who speaks what cannot be sanctioned. She who hears what has not been said.
          </motion.p>

          {/* Sound control */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex justify-center mt-6"
          >
            <SoundControl
              active={sound.active}
              volume={sound.volume}
              onToggle={sound.active ? sound.stop : sound.start}
              onVolume={sound.changeVolume}
            />
          </motion.div>
        </div>

        {/* ── Intro phase ───────────────────────── */}
        <AnimatePresence mode="wait">
          {phase === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              {/* About section */}
              <ScrollReveal>
                <div className="glass rounded-sm p-6 md:p-8 mb-8 text-center">
                  {oracleIntro.split("\n\n").map((para, i) => (
                    <p key={i} className="font-display text-base text-ivory/60 italic leading-relaxed mb-3">{para}</p>
                  ))}
                </div>
              </ScrollReveal>

              {/* Instructions */}
              <ScrollReveal delay={0.1}>
                <div className="mb-8">
                  <div className="text-label text-ivory/25 mb-4 text-center">HOW TO RECEIVE A READING</div>
                  <div className="space-y-2">
                    {oracleInstructions.map((inst, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-sm"
                      >
                        <span className="text-gold/50 font-mono w-5 shrink-0 mt-0.5">{i + 1}.</span>
                        <span className="text-ivory/50 font-display italic">{inst}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Enter button */}
              <ScrollReveal delay={0.2} className="text-center">
                <motion.button
                  onClick={() => setPhase("draw")}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-ritual text-sm px-12 py-4 mx-auto inline-flex gap-2"
                >
                  <span className="text-gold mr-1">◈</span>
                  ENTER THE ORACLE CHAMBER
                  <span className="text-gold ml-1">◈</span>
                </motion.button>
              </ScrollReveal>
            </motion.div>
          )}

          {/* ── Draw phase ─────────────────────── */}
          {phase === "draw" && (
            <motion.div
              key="draw"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto space-y-10 pb-20"
            >
              {/* Question input */}
              <ScrollReveal>
                <QuestionInput value={question} onChange={setQuestion} />
              </ScrollReveal>

              <hr className="divider-gold opacity-20" />

              {/* Spread selection */}
              <ScrollReveal delay={0.1}>
                <div className="text-label text-ivory/25 mb-5 text-center">CHOOSE YOUR SPREAD</div>
                <SpreadSelector selected={spread} onSelect={setSpread} />
              </ScrollReveal>

              <hr className="divider-gold opacity-20" />

              {/* Draw button */}
              <ScrollReveal delay={0.2} className="text-center">
                <AnimatePresence mode="wait">
                  {drawing ? (
                    <motion.div
                      key="drawing"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center gap-4"
                    >
                      {/* Drawing animation */}
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                        <SacredGeometry size={80} variant="yantra" color="#b8962e" animated />
                      </motion.div>
                      <div className="flex gap-1.5">
                        {[0, 1, 2, 3, 4].map(i => (
                          <motion.div
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-gold/60"
                            animate={{ scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                          />
                        ))}
                      </div>
                      <p className="font-display text-base text-ivory/50 italic">She is drawing from the void…</p>
                    </motion.div>
                  ) : (
                    <motion.div key="btn" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <motion.button
                        onClick={drawCards}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="btn-ritual text-sm px-12 py-4 mx-auto inline-flex gap-2 relative overflow-hidden"
                      >
                        <motion.div
                          className="absolute inset-0 pointer-events-none"
                          style={{ background: "linear-gradient(90deg, transparent, rgba(184,150,46,0.15), transparent)" }}
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                        <span className="text-gold">✦</span>
                        DRAW {positions.length === 1 ? "A CARD" : `${positions.length} CARDS`}
                        <span className="text-gold">✦</span>
                      </motion.button>
                      <p className="font-display text-sm text-ivory/25 italic mt-4">
                        {question.trim()
                          ? "Matangi has received your question. When you are ready — draw."
                          : "No question is required. Silence is also an offering."}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </ScrollReveal>
            </motion.div>
          )}

          {/* ── Reading phase ──────────────────── */}
          {phase === "reading" && drawn.length > 0 && (
            <motion.div
              key="reading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="pb-24"
            >
              {/* Question echo */}
              {question.trim() && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="max-w-xl mx-auto text-center mb-10"
                >
                  <div className="text-label text-ivory/20 mb-2">YOUR QUESTION</div>
                  <p className="font-display text-base text-ivory/40 italic">"{question}"</p>
                </motion.div>
              )}

              {/* Spread layout */}
              <div className={`max-w-5xl mx-auto ${
                spread === "single"   ? "flex justify-center" :
                spread === "three"    ? "grid sm:grid-cols-3 gap-8" :
                /* cross */             "relative"
              }`}>
                {spread !== "cross" ? (
                  drawn.map(({ card, isReversed }, i) => (
                    <DrawnCard
                      key={i}
                      card={card}
                      isReversed={isReversed}
                      position={positions[i]}
                      question={question}
                      index={i}
                    />
                  ))
                ) : (
                  // Cross spread layout
                  <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
                    <div />
                    <DrawnCard card={drawn[1].card} isReversed={drawn[1].isReversed} position={positions[1]} question={question} index={0} />
                    <div />
                    <DrawnCard card={drawn[3].card} isReversed={drawn[3].isReversed} position={positions[3]} question={question} index={1} />
                    <DrawnCard card={drawn[0].card} isReversed={drawn[0].isReversed} position={positions[0]} question={question} index={2} />
                    <DrawnCard card={drawn[4].card} isReversed={drawn[4].isReversed} position={positions[4]} question={question} index={3} />
                    <div />
                    <DrawnCard card={drawn[2].card} isReversed={drawn[2].isReversed} position={positions[2]} question={question} index={4} />
                    <div />
                  </div>
                )}
              </div>

              {/* Reset */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-center mt-16"
              >
                <p className="font-display text-sm text-ivory/25 italic mb-6 max-w-md mx-auto">
                  Stay with what arrived. Matangi does not rush the integration.
                  Return when you are ready for another transmission.
                </p>
                <button
                  onClick={reset}
                  className="flex items-center gap-2 mx-auto text-label text-ivory/30
                             hover:text-ivory/60 border border-white/10 hover:border-white/25
                             px-5 py-2.5 rounded-sm transition-all duration-400"
                >
                  <RotateCcw size={12} />
                  NEW READING
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Card reference gallery ────────────── */}
        {phase !== "reading" && (
          <ScrollReveal className="mt-20 mb-20 border-t border-white/[0.04] pt-16">
            <div className="text-label text-ivory/20 mb-8 text-center">THE DECK · {oracleCards.length} TRANSMISSIONS</div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {oracleCards.map((card, i) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.03 }}
                  className="group cursor-default"
                >
                  <div
                    className="aspect-[2/3] rounded-sm border border-white/[0.07] overflow-hidden
                               hover:border-gold/25 transition-all duration-400 relative"
                    style={{ boxShadow: `0 0 0 0 ${card.colorPrimary}00` }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px ${card.colorPrimary}30`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 0 transparent`;
                    }}
                  >
                    <OracleArt artwork={card.artwork} size={140} animated={false} className="w-full h-full" />
                    <div
                      className="absolute inset-x-0 bottom-0 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(to top, ${card.colorPrimary}60, transparent)` }}
                    >
                      <div className="text-[9px] font-mono text-ivory/80 leading-tight">{card.title}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        )}

      </div>
    </div>
  );
}
