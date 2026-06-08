"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import ParticleCanvas from "@/components/ParticleCanvas";
import SacredGeometry from "@/components/SacredGeometry";

// ── Sanskrit rain canvas ──────────────────────────────────────
function SanskritRain() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    const chars = "ॐ ह्रीं ऐं क्लीं श्रीं मातङ्गि ✦ ◈ ⬡ ⟁ ◉".split(" ");
    const cols = Math.floor(canvas.width / 32);
    const drops = Array(cols).fill(0).map(() => Math.random() * -80);
    const tick = () => {
      ctx.fillStyle = "rgba(10,10,15,0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < drops.length; i++) {
        const alpha = 0.04 + Math.random() * 0.1;
        ctx.fillStyle = `rgba(45,106,79,${alpha})`;
        ctx.font = `${Math.random() * 9 + 8}px 'Noto Serif Devanagari',serif`;
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * 32, drops[i] * 22);
        if (drops[i] * 22 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.06 + Math.random() * 0.03;
      }
    };
    const id = setInterval(tick, 90);
    return () => { clearInterval(id); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.55 }} />;
}

// ── Typed text ────────────────────────────────────────────────
function TypedText({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const [shown, setShown] = useState("");
  const [started, setStarted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setStarted(true), delay * 1000); return () => clearTimeout(t); }, [delay]);
  useEffect(() => {
    if (!started) return;
    let i = 0;
    const id = setInterval(() => { setShown(text.slice(0, ++i)); if (i >= text.length) clearInterval(id); }, 38);
    return () => clearInterval(id);
  }, [started, text]);
  return <span className={className}>{shown}<motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.7, repeat: Infinity }} className="inline-block w-px h-[1em] bg-current align-middle ml-0.5" /></span>;
}

// ── Entry portal portal gate ──────────────────────────────────
const NAV_ITEMS = [
  { href: "/about",       icon: "✦", label: "ABOUT",       sub: "Who Is Matangi" },
  { href: "/philosophy",  icon: "◈", label: "PHILOSOPHY",  sub: "Teachings & Wisdom" },
  { href: "/hymns",       icon: "⬡", label: "HYMNS",       sub: "Sacred Hymns" },
  { href: "/mantras",     icon: "⟁", label: "MANTRAS",     sub: "Sacred Sounds" },
  { href: "/gallery",     icon: "◉", label: "GALLERY",     sub: "Divine Art" },
  { href: "/meditations", icon: "❋", label: "MEDITATIONS", sub: "Guided Practices" },
  { href: "/journal",     icon: "⊕", label: "JOURNAL",     sub: "Reflection" },
  { href: "/library",     icon: "◧", label: "LIBRARY",     sub: "Archive" },
];

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [activating, setActivating] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const sigilY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const handleEnter = () => {
    setActivating(true);
    setTimeout(() => setEntered(true), 1800);
  };

  return (
    <div className="bg-[#0a0a0f]">
      {/* ── HERO ─────────────────────────────────────────── */}
      <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <SanskritRain />
        <ParticleCanvas density={0.8} className="absolute inset-0 z-0" />

        {/* Radial glows */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(45,106,79,0.12) 0%, transparent 70%)" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(184,150,46,0.06) 0%, transparent 70%)" }} />
        </div>

        {/* Flash on activation */}
        <AnimatePresence>
          {activating && (
            <motion.div key="flash" className="absolute inset-0 z-50 pointer-events-none"
              initial={{ opacity: 0 }} animate={{ opacity: [0, 0.35, 0] }}
              transition={{ duration: 1.8, times: [0, 0.25, 1] }}
              style={{ background: "radial-gradient(ellipse at center, rgba(45,106,79,0.7) 0%, transparent 70%)" }} />
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {!entered ? (
            <motion.div key="gate" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.7 }} className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">

              {/* Sigil with parallax */}
              <motion.div style={{ y: sigilY }} className="mb-10">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                  className="relative"
                >
                  <SacredGeometry size={170} variant="yantra" animated color="#b8962e" />
                  {/* Center Sanskrit */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      animate={{ opacity: [0.4, 0.9, 0.4] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="font-devanagari text-3xl text-gold/70"
                      style={{ fontFamily: "Noto Serif Devanagari, serif" }}
                    >ॐ</motion.span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Pre-title */}
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                className="text-label text-gold/50 mb-6 tracking-[0.4em]">
                MAHAVIDYA IX · ETERNAL TRANSMISSION
              </motion.p>

              {/* Main title */}
              <motion.h1
                style={{ y: contentY, opacity, fontSize: "clamp(3.5rem,9vw,7.5rem)", lineHeight: 1.0, letterSpacing: "-0.02em" }}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1.2 }}
                className="font-display font-light mb-4 tracking-tight"
              >
                <span className="text-ivory/90">Temple of</span>
                <br />
                <span className="text-shimmer italic">Ma Matangi</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 1 }}
                className="font-display text-lg md:text-xl text-ivory/45 italic max-w-xl leading-relaxed mb-10">
                Goddess of Speech, Wisdom, Art, Music, and Transformative Knowledge
              </motion.p>

              {/* Invocation line */}
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
                className="font-display text-base text-ivory/60 italic mb-12 h-7">
                <TypedText text="Enter only if you are willing to hear what has not been said." delay={2.2} />
              </motion.p>

              {/* CTA */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 items-center">
                <button
                  onClick={handleEnter}
                  disabled={activating}
                  className="btn-ritual text-sm px-10 py-4 disabled:opacity-40"
                >
                  <span className="text-gold mr-2">✦</span>
                  ENTER THE TEMPLE
                  <span className="text-gold ml-2">✦</span>
                </button>
                <Link href="/about" className="btn-ritual-emerald btn-ritual text-xs px-6 py-3">
                  LEARN ABOUT MATANGI
                </Link>
              </motion.div>

              {/* Signal indicator */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.2 }}
                className="absolute bottom-10 flex flex-col items-center gap-2">
                <div className="flex gap-1.5">
                  {[0,1,2,3,4].map(i => (
                    <motion.div key={i} className="w-0.5 rounded-full bg-emerald-600/50"
                      animate={{ height: [4, 16, 4] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }} />
                  ))}
                </div>
                <span className="text-label text-ivory/20">TRANSMISSION ACTIVE</span>
              </motion.div>
            </motion.div>
          ) : (
            /* ── POST-ENTRY PORTAL ─────────────────────── */
            <motion.div key="portal" initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl w-full">

              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }} className="mb-8">
                <SacredGeometry size={100} variant="minimal" color="#b8962e" animated />
              </motion.div>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                className="font-display text-2xl text-ivory/70 italic mb-10">
                The temple opens.
              </motion.p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl">
                {NAV_ITEMS.map(({ href, icon, label, sub }, i) => (
                  <motion.div key={href}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.06 }}>
                    <Link href={href}
                      className="group flex flex-col items-center gap-2 p-4 glass rounded-sm
                                 hover:bg-emerald-950/30 hover:border-emerald/30 transition-all duration-400">
                      <span className="text-2xl text-emerald-500/60 group-hover:text-emerald-400 transition-colors">{icon}</span>
                      <span className="text-label text-ivory/70 group-hover:text-ivory transition-colors">{label}</span>
                      <span className="text-[10px] text-ivory/30 group-hover:text-ivory/50 transition-colors font-mono">{sub}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── BELOW-FOLD TEASER ──────────────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(45,106,79,0.1) 0%, transparent 70%)" }} />
        <div className="section-container relative z-10">
          <div className="text-center mb-20">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-label text-gold/50 mb-4">THE TEMPLE WITHIN</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.9 }}
              className="font-display font-light text-ivory/90"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              A Living Sanctuary of<br />
              <span className="text-shimmer italic">Wisdom & Beauty</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "✦", color: "text-gold",
                title: "Ancient Wisdom",
                body: "Explore the full depth of Matangi's teachings — her philosophy, mythology, forms, and the Tantric tradition that carries her transmission.",
                link: "/about", linkLabel: "Meet Matangi →",
              },
              {
                icon: "◈", color: "text-emerald-400",
                title: "Sacred Practice",
                body: "Sacred mantras, guided meditations, contemplative visualizations, and a digital journal for your own reflection and creative exploration.",
                link: "/meditations", linkLabel: "Begin Practice →",
              },
              {
                icon: "⬡", color: "text-violet-400",
                title: "Living Archive",
                body: "Hymns with Sanskrit and translation, an esoteric library, divine art gallery, and philosophical texts spanning the breadth of her domain.",
                link: "/library", linkLabel: "Enter Archive →",
              },
            ].map(({ icon, color, title, body, link, linkLabel }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: i * 0.12 }}
                className="card-parchment rounded-sm p-8 hover:border-gold/20 transition-all duration-500">
                <div className={`text-3xl ${color} mb-4`}>{icon}</div>
                <h3 className="font-display text-xl text-ivory/90 mb-3">{title}</h3>
                <p className="text-ivory/50 text-sm leading-relaxed mb-6">{body}</p>
                <Link href={link} className="text-gold/60 text-xs font-mono tracking-widest hover:text-gold transition-colors">
                  {linkLabel}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE SECTION ──────────────────────────────────── */}
      <section className="relative py-24 border-t border-b border-white/[0.04]">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(107,70,193,0.06) 0%, transparent 70%)" }} />
        <div className="section-container relative z-10 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 1 }}>
            <div className="text-4xl text-gold/25 font-display mb-6">"</div>
            <p className="font-display text-2xl md:text-3xl text-ivory/75 italic leading-relaxed mb-6 font-light">
              She accepts what all others reject.
              She lives where the map ends.
              She speaks what cannot be sanctioned.
            </p>
            <div className="text-label text-gold/40">On the nature of Matangi · Tantric teaching</div>
          </motion.div>
        </div>
      </section>

      {/* ── SANCTUARY UNLOCK HINT ─────────────────────────── */}
      <section className="py-20">
        <div className="section-container text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="text-label text-ivory/20 mb-3">A HIDDEN PATH</div>
            <p className="font-display text-lg text-ivory/35 italic max-w-md mx-auto">
              Those who explore deeply enough will discover the Inner Sanctuary — an experience that opens through genuine engagement with the temple.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
