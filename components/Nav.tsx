"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about",       label: "About" },
  { href: "/philosophy",  label: "Philosophy" },
  { href: "/hymns",       label: "Hymns" },
  { href: "/mantras",     label: "Mantras" },
  { href: "/gallery",     label: "Gallery" },
  { href: "/meditations", label: "Meditations" },
  { href: "/journal",     label: "Journal" },
  { href: "/library",     label: "Library" },
];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = path === "/";

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-[rgba(10,10,15,0.92)] backdrop-blur-xl border-b border-white/[0.05]"
            : "bg-transparent"
        }`}
      >
        <nav className="section-container flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-display text-lg tracking-widest text-ivory/90 hover:text-gold transition-colors duration-300">
            <span className="text-gold/70">✦</span> Matangi
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-label transition-colors duration-300 ${
                  path === l.href
                    ? "text-gold"
                    : "text-ivory/50 hover:text-ivory/90"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/sanctuary" className="btn-ritual text-[0.6rem] py-2 px-4">
              Inner Sanctuary
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-ivory/60 hover:text-ivory transition-colors p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0a0a0f]/97 backdrop-blur-xl flex flex-col pt-20 px-8 pb-12"
          >
            <div className="flex flex-col gap-6 mt-4">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`font-display text-2xl transition-colors ${
                      path === l.href ? "text-gold" : "text-ivory/70 hover:text-ivory"
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <Link href="/sanctuary" onClick={() => setOpen(false)} className="btn-ritual mt-4 inline-block">
                  Inner Sanctuary
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
