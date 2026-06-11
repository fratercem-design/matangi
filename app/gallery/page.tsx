"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SacredGeometry from "@/components/SacredGeometry";
import { galleryItems, galleryCategories } from "@/lib/gallery";
import { X, ZoomIn } from "lucide-react";

// ── Artwork: real image when provided, else generative SVG ──
function ArtworkPlaceholder({ item }: { item: typeof galleryItems[0] }) {
  const [imgFailed, setImgFailed] = useState(false);

  if (item.image && !imgFailed) {
    return (
      <div className="w-full h-full relative overflow-hidden bg-[#0a0a0f]">
        <Image
          src={item.image}
          alt={`${item.title} — ${item.subtitle}`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover"
          onError={() => setImgFailed(true)}
        />
      </div>
    );
  }

  const [c0, c1, c2, c3] = item.palette;
  const variants: Record<string, "yantra" | "lotus" | "sri" | "minimal"> = {
    "Divine Portraits": "lotus",
    "Sacred Symbols":   "yantra",
    "Temple Art":       "minimal",
    "Visionary Art":    "sri",
    "Cosmic Landscapes": "yantra",
  };
  const geomVariant = variants[item.category] ?? "minimal";

  return (
    <div className="w-full h-full relative overflow-hidden" style={{
      background: `radial-gradient(ellipse at 40% 35%, ${c0}55 0%, ${c1}20 40%, transparent 70%),
                   linear-gradient(160deg, ${c1}18, ${c3}10, #0a0a0f)`,
    }}>
      {/* Background glow */}
      <div className="absolute inset-0 opacity-30"
        style={{ background: `radial-gradient(ellipse at 60% 60%, ${c2}40 0%, transparent 60%)` }} />

      {/* Sacred geometry */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <SacredGeometry size={160} variant={geomVariant} color={c0} animated={false} />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${20 + i * 13}%`, top: `${30 + (i % 3) * 20}%`,
            background: i % 2 === 0 ? c0 : c2, opacity: 0.5,
          }}
          animate={{ y: [-4, 4, -4], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Category glyph */}
      <div className="absolute top-4 left-4">
        <span className="text-2xl opacity-30" style={{ color: c0 }}>
          {item.category === "Divine Portraits" ? "◉" :
           item.category === "Sacred Symbols"   ? "◈" :
           item.category === "Temple Art"        ? "⬡" :
           item.category === "Visionary Art"     ? "✦" : "⊕"}
        </span>
      </div>

      {/* Subtle title watermark */}
      <div className="absolute bottom-4 right-4 text-right opacity-20">
        <p className="font-mono text-[9px] tracking-widest" style={{ color: c0 }}>
          {item.category.toUpperCase()}
        </p>
      </div>
    </div>
  );
}

// ── Gallery grid item ─────────────────────────────────────────
function GalleryItem({ item, onClick }: { item: typeof galleryItems[0]; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative border border-white/[0.07] hover:border-gold/20 rounded-sm overflow-hidden
                      transition-all duration-500 shadow-[0_4px_24px_rgba(0,0,0,0.4)]
                      hover:shadow-[0_8px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(184,150,46,0.05)]">
        <div className="aspect-[4/5] relative">
          <ArtworkPlaceholder item={item} />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
            <ZoomIn size={28} className="text-ivory/0 group-hover:text-ivory/80 transition-all duration-400 scale-75 group-hover:scale-100" />
          </div>
          {/* Featured badge */}
          {item.featured && (
            <div className="absolute top-3 left-3">
              <span className="text-label px-2 py-1 bg-gold/10 border border-gold/30 text-gold/80 rounded-sm">
                Featured
              </span>
            </div>
          )}
        </div>
        <div className="p-4 bg-[rgba(10,10,15,0.8)]">
          <div className="text-label text-ivory/30 mb-1">{item.category}</div>
          <h3 className="font-display text-base text-ivory/90">{item.title}</h3>
          <p className="text-ivory/40 text-xs mt-0.5 font-display italic">{item.subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ── Lightbox ─────────────────────────────────────────────────
function Lightbox({ item, onClose }: { item: typeof galleryItems[0]; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl w-full grid md:grid-cols-2 gap-0 rounded-sm overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)]"
        onClick={e => e.stopPropagation()}
      >
        {/* Artwork */}
        <div className="relative" style={{ minHeight: 360 }}>
          <ArtworkPlaceholder item={item} />
        </div>

        {/* Info */}
        <div className="bg-[#0c0c14] p-6 md:p-8 flex flex-col">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="text-label text-ivory/30 mb-2">{item.category}</div>
              <h2 className="font-display text-2xl text-ivory/90">{item.title}</h2>
              <p className="font-display text-sm text-ivory/50 italic mt-1">{item.subtitle}</p>
            </div>
            <button onClick={onClose} className="p-2 border border-white/10 rounded-sm text-ivory/40 hover:text-ivory/80 transition-colors">
              <X size={16} />
            </button>
          </div>

          <p className="text-ivory/60 text-sm leading-relaxed mb-6 flex-1">{item.description}</p>

          {/* Palette */}
          <div className="mb-5">
            <div className="text-label text-ivory/25 mb-2">Color Palette</div>
            <div className="flex gap-2">
              {item.palette.map(c => (
                <div key={c} className="w-6 h-6 rounded-full border border-white/10"
                  style={{ background: c }} title={c} />
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map(t => (
              <span key={t} className="text-label px-2.5 py-1 border border-white/[0.08] text-ivory/30 rounded-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GalleryPage() {
  const [cat, setCat] = useState<string>("All");
  const [lightbox, setLightbox] = useState<typeof galleryItems[0] | null>(null);
  const filtered = cat === "All" ? galleryItems : galleryItems.filter(i => i.category === cat);
  const featured = galleryItems.filter(i => i.featured);

  return (
    <div className="page-enter">
      <PageHero
        label="Divine Art Gallery"
        title="Visions of"
        titleAccent="Matangi"
        subtitle="Generative sacred artwork exploring her many forms, symbols, and cosmic dimensions"
        variant="violet"
        geometry={false}
      />

      <section className="section-padding">
        <div className="section-container">
          {/* Featured row */}
          <ScrollReveal className="mb-16">
            <div className="text-label text-gold/50 mb-6">Featured Works</div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {featured.map(item => (
                <motion.button key={item.id} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  onClick={() => setLightbox(item)}
                  className="group relative border border-white/[0.07] hover:border-gold/25 rounded-sm overflow-hidden transition-all duration-400">
                  <div className="aspect-square">
                    <ArtworkPlaceholder item={item} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                    <span className="font-display text-xs text-ivory/90 line-clamp-1">{item.title}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </ScrollReveal>

          {/* Category filter */}
          <ScrollReveal className="flex flex-wrap gap-2 mb-10 justify-center">
            {galleryCategories.map(c => (
              <button key={c} onClick={() => setCat(c)}
                className={`text-label px-4 py-2 border rounded-sm transition-all duration-300 ${
                  cat === c
                    ? "border-violet-500/60 text-violet-300 bg-violet-950/20"
                    : "border-white/10 text-ivory/40 hover:border-white/25 hover:text-ivory/70"
                }`}>
                {c}
              </button>
            ))}
          </ScrollReveal>

          {/* Masonry-ish grid */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map(item => (
              <div key={item.id} className="break-inside-avoid mb-4">
                <GalleryItem item={item} onClick={() => setLightbox(item)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && <Lightbox item={lightbox} onClose={() => setLightbox(null)} />}
      </AnimatePresence>
    </div>
  );
}
