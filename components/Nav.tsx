"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "/",        label: "THRESHOLD",  glyph: "◈" },
  { href: "/temple",  label: "INNER HALL", glyph: "⬡" },
  { href: "/sanctum", label: "SANCTUM",    glyph: "✦" },
  { href: "/gallery", label: "VISIONS",    glyph: "◉" },
  { href: "/archive", label: "ARCHIVE",    glyph: "⟁" },
];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 hidden md:flex items-center justify-between
                      px-8 py-4 border-b border-white/5 bg-black/60 backdrop-blur-md">
        <Link href="/" className="font-orbitron text-xs tracking-[0.3em] text-fuchsia-400/80 hover:text-fuchsia-300 transition-colors">
          MATANGI
        </Link>
        <div className="flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className={`font-mono text-xs tracking-widest transition-all duration-300 relative group
                ${path === l.href ? "text-emerald-300" : "text-white/40 hover:text-white/80"}`}>
              <span className="mr-1.5 opacity-50">{l.glyph}</span>
              {l.label}
              {path === l.href && (
                <motion.div layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-emerald-400/60" />
              )}
            </Link>
          ))}
        </div>
      </nav>

      <div className="fixed top-0 left-0 right-0 z-40 flex md:hidden items-center justify-between
                      px-5 py-4 border-b border-white/5 bg-black/80 backdrop-blur-md">
        <Link href="/" className="font-orbitron text-xs tracking-widest text-fuchsia-400">MATANGI</Link>
        <button onClick={() => setOpen(!open)} className="text-white/60 text-xl font-mono">
          {open ? "✕" : "≡"}
        </button>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="fixed top-[53px] inset-x-0 z-40 bg-black/95 border-b border-white/10 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-6 py-4 font-mono text-xs tracking-widest
                          border-b border-white/5 transition-colors
                          ${path === l.href ? "text-emerald-300 bg-emerald-500/5" : "text-white/50 hover:text-white/80"}`}>
              <span className="text-fuchsia-500/60">{l.glyph}</span>
              {l.label}
            </Link>
          ))}
        </motion.div>
      )}
    </>
  );
}
