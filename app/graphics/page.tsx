"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleCanvas from "@/components/ParticleCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import MatangiPortrait, { type MatangiForm } from "@/components/MatangiPortrait";
import OracleArt from "@/components/OracleArt";
import SacredGeometry from "@/components/SacredGeometry";
import { matangiForms } from "@/lib/matangi-content";
import { ZoomIn, X } from "lucide-react";

const formSuite: Array<{ id: MatangiForm; name: string; sanskrit: string; subtitle: string; color: string; desc: string }> = [
  { id:"default",   name:"Mātaṅgī",           sanskrit:"मातङ्गी",              subtitle:"Complete Form · Mahavidya IX",       color:"#52b788", desc:"The primary complete form — emerald-complexioned, holding veena and parrot, sovereign of speech and forbidden knowledge. She embodies all five forms simultaneously." },
  { id:"ucchishta", name:"Ucchishṭa-Mātaṅginī",sanskrit:"उच्छिष्टमातङ्गिनी",   subtitle:"She Who Accepts the Leftover",       color:"#a78bfa", desc:"The most widely worshipped transgressive form. Wild unbound hair, red eyes intoxicated with the knowledge that purity is a power structure. Holds sword, goad, noose, club, and skull cup." },
  { id:"raja",      name:"Rāja-Mātaṅgī",      sanskrit:"राजमातङ्गी",            subtitle:"Royal Sovereign of Speech",          color:"#c8a030", desc:"The majestic royal form seated on a jeweled throne. She holds the veena and the parrot repeats her mantras endlessly. Governs artists, poets, speakers, and those who must be heard." },
  { id:"sumukhi",   name:"Sumukhī-Mātaṅgī",   sanskrit:"सुमुखीमातङ्गी",         subtitle:"She of the Beautiful Countenance",   color:"#f472b6", desc:"The auspicious and beautiful form. Holds lotus and mirror — beauty as intelligence. Governs the magnetism that draws right teachers, students, and creative collaborators." },
  { id:"vasya",     name:"Vasyā-Mātaṅgī",     sanskrit:"वश्यमातङ्गी",            subtitle:"She Who Commands Through Truth",     color:"#f59e0b", desc:"The form of sovereign influence. Holds noose and hook. Governs the power to move people through authentic speech — not manipulation but the irresistible pull of genuine truth." },
  { id:"karna",     name:"Karṇa-Mātaṅgī",     sanskrit:"कर्णमातङ्गी",            subtitle:"She Who Listens",                    color:"#38bdf8", desc:"The most interior form. Eyes closed in deep listening. Holds the conch of primordial sound. Governs clairaudience, hearing beneath words, the oracle inside the noise." },
];

const ORACLE_ART = [
  { v:"veena" as const,      p:["#2d6a4f","#52b788","#b8962e","#0a0a0f"] as [string,string,string,string], m:"string",   l:"The Veena" },
  { v:"parrot" as const,     p:["#15803d","#4ade80","#fbbf24","#0a0a0f"] as [string,string,string,string], m:"echo",     l:"The Parrot" },
  { v:"yantra" as const,     p:["#b8962e","#fde68a","#2d6a4f","#0a0a0f"] as [string,string,string,string], m:"center",   l:"The Yantra" },
  { v:"eye" as const,        p:["#312e81","#6366f1","#e0e7ff","#0a0a0f"] as [string,string,string,string], m:"iris",     l:"The Third Eye" },
  { v:"moon" as const,       p:["#1e1b4b","#4338ca","#a5b4fc","#0a0a0f"] as [string,string,string,string], m:"crescent", l:"The Crescent" },
  { v:"flame" as const,      p:["#065f46","#34d399","#d97706","#0a0a0f"] as [string,string,string,string], m:"fire",     l:"Emerald Flame" },
  { v:"crossroads" as const, p:["#991b1b","#d97706","#b8962e","#0a0a0f"] as [string,string,string,string], m:"path",     l:"The Crossroads" },
  { v:"void" as const,       p:["#7c3aed","#a78bfa","#0a0a0f","#1e1b4b"] as [string,string,string,string], m:"wave",     l:"The Void" },
  { v:"skull" as const,      p:["#6b46c1","#9d77f5","#b8962e","#0a0a0f"] as [string,string,string,string], m:"vessel",   l:"Skull Cup" },
  { v:"lotus" as const,      p:["#166534","#4ade80","#b8962e","#0a0a0f"] as [string,string,string,string], m:"root",     l:"The Lotus" },
  { v:"serpent" as const,    p:["#047857","#10b981","#fbbf24","#0a0a0f"] as [string,string,string,string], m:"coil",     l:"Frontal Current" },
  { v:"temple" as const,     p:["#9f1239","#fb7185","#b8962e","#0a0a0f"] as [string,string,string,string], m:"gate",     l:"Temple Gate" },
  { v:"river" as const,      p:["#0369a1","#38bdf8","#2d6a4f","#0a0a0f"] as [string,string,string,string], m:"flow",     l:"River of Sound" },
  { v:"forest" as const,     p:["#14532d","#15803d","#0a0a0f","#b8962e"] as [string,string,string,string], m:"leaf",     l:"Forest Mind" },
  { v:"crown" as const,      p:["#b8962e","#fef3c7","#2d6a4f","#0a0a0f"] as [string,string,string,string], m:"sovereign",l:"The Crown" },
];

function Lightbox({ form, onClose }: { form: typeof formSuite[0]; onClose: () => void }) {
  const mf = matangiForms.find(m => m.id === form.id);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/96 backdrop-blur-xl flex items-center justify-center p-4 md:p-6"
      onClick={onClose}>
      <motion.div initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }} transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }}
        className="relative max-w-5xl w-full grid md:grid-cols-2 gap-0 rounded-sm overflow-hidden border border-white/10"
        style={{ boxShadow: `0 0 80px ${form.color}22` }}
        onClick={e => e.stopPropagation()}>
        <div className="bg-[#05080a] flex items-center justify-center p-3">
          <MatangiPortrait form={form.id} size={460} animated/>
        </div>
        <div className="bg-[#08080e] p-6 md:p-8 flex flex-col overflow-y-auto max-h-[85vh]">
          <div className="flex items-start justify-between mb-5">
            <div>
              <div className="text-label text-ivory/25 mb-1">PORTRAIT FORM</div>
              <h2 className="font-display text-2xl text-ivory/90">{form.name}</h2>
              <p className="text-xl mt-1" style={{ color: form.color, fontFamily:"Noto Serif Devanagari,serif" }}>{form.sanskrit}</p>
              <p className="font-display text-sm text-ivory/40 italic mt-1">{form.subtitle}</p>
            </div>
            <button onClick={onClose} className="p-2 border border-white/10 rounded-sm text-ivory/40 hover:text-ivory/80 shrink-0"><X size={15}/></button>
          </div>
          <p className="font-display text-sm text-ivory/65 italic leading-relaxed mb-5">{form.desc}</p>
          {/* Palette */}
          <div className="mb-5">
            <div className="text-label text-ivory/25 mb-2">PALETTE</div>
            <div className="flex gap-2">
              {[form.color,"#2d6a4f","#0a0a0f","#b8962e","#1a0030"].map((c,i)=>(
                <div key={i} className="w-8 h-8 rounded-sm border border-white/10" style={{ background: c }}/>
              ))}
            </div>
          </div>
          {mf && (
            <>
              <div className="text-label text-ivory/25 mb-2">POWERS</div>
              <p className="font-display text-sm text-ivory/55 italic mb-4">{mf.powers}</p>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GraphicsPage() {
  const [lightbox, setLightbox] = useState<typeof formSuite[0] | null>(null);
  const [tab, setTab] = useState<"portraits"|"geometry"|"oracle"|"system">("portraits");

  return (
    <div className="min-h-screen relative" style={{ background:"linear-gradient(180deg,#040508 0%,#050d07 35%,#040508 70%,#060412 100%)" }}>
      <ParticleCanvas density={0.55} className="fixed inset-0 z-0"/>
      <div className="relative z-10">

        {/* Header */}
        <div className="pt-24 pb-10 text-center section-container">
          <ScrollReveal>
            <div className="flex justify-center mb-7">
              <motion.div animate={{ rotate: [0,360] }} transition={{ duration:90, repeat:Infinity, ease:"linear" }}>
                <SacredGeometry size={88} variant="yantra" color="#b8962e" animated/>
              </motion.div>
            </div>
            <p className="text-label text-gold/50 tracking-[0.35em] mb-4">GRAPHICS SUITE · GENERATIVE VISUAL SYSTEM</p>
            <h1 className="font-display font-light text-ivory/90 mb-4" style={{ fontSize:"clamp(2rem,5vw,3.8rem)", lineHeight:1.1 }}>
              Temple of <span className="text-shimmer italic">Mātaṅgī</span><br/>
              <span className="text-ivory/40 text-xl font-normal">Complete Visual Identity</span>
            </h1>
            <p className="font-display text-base text-ivory/40 italic max-w-2xl mx-auto">
              All five goddess portraits + sacred geometry + oracle artworks + full design system — generated entirely client-side as animated SVG.
            </p>
          </ScrollReveal>

          {/* Tabs */}
          <ScrollReveal delay={0.15} className="flex flex-wrap justify-center gap-3 mt-8">
            {([
              { id:"portraits", label:"Goddess Portraits", count:"6" },
              { id:"geometry",  label:"Sacred Geometry",   count:"3" },
              { id:"oracle",    label:"Oracle Artworks",   count:"15" },
              { id:"system",    label:"Design System",     count:"∞" },
            ] as const).map(s=>(
              <button key={s.id} onClick={()=>setTab(s.id)}
                className={`text-label px-5 py-2.5 border rounded-sm transition-all duration-400 ${
                  tab===s.id
                    ? "border-gold/60 text-gold bg-gold/[0.06] shadow-[0_0_18px_rgba(184,150,46,0.12)]"
                    : "border-white/10 text-ivory/40 hover:border-white/25 hover:text-ivory/70"
                }`}>
                {s.label} <span className="font-mono text-[9px] text-ivory/25 ml-1">{s.count}</span>
              </button>
            ))}
          </ScrollReveal>
        </div>

        {/* ── PORTRAITS ── */}
        {tab==="portraits" && (
          <div className="section-container pb-20">
            <ScrollReveal className="glass-emerald rounded-sm p-5 mb-10 max-w-3xl mx-auto text-center">
              <p className="font-display text-sm text-ivory/60 italic">
                Six richly detailed generative SVG portraits — one complete form plus five canonical manifestations.
                All animated with Framer Motion. Click any to view full size with iconographic details.
              </p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {formSuite.map((form, i) => (
                <ScrollReveal key={form.id} delay={i*0.08}>
                  <motion.div whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}
                    className="group cursor-pointer" onClick={() => setLightbox(form)}>
                    <div className="border rounded-sm overflow-hidden transition-all duration-500"
                      style={{ borderColor:`${form.color}28`, boxShadow:"0 4px 28px rgba(0,0,0,0.5)" }}
                      onMouseEnter={e=>{ const d=e.currentTarget as HTMLDivElement; d.style.boxShadow=`0 0 50px ${form.color}22, 0 4px 38px rgba(0,0,0,0.7)`; d.style.borderColor=`${form.color}55`; }}
                      onMouseLeave={e=>{ const d=e.currentTarget as HTMLDivElement; d.style.boxShadow="0 4px 28px rgba(0,0,0,0.5)"; d.style.borderColor=`${form.color}28`; }}>
                      <div className="bg-[#04080a] relative overflow-hidden">
                        <MatangiPortrait form={form.id} size={340} animated className="w-full h-auto"/>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/25">
                          <div className="flex items-center gap-2 px-4 py-2 bg-black/65 rounded-sm border border-white/20">
                            <ZoomIn size={13} className="text-ivory/70"/>
                            <span className="text-label text-ivory/70">FULL VIEW</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-[#050809]">
                        <div className="text-label mb-0.5" style={{ color:form.color }}>{form.name}</div>
                        <p className="font-display text-xs text-ivory/40 italic">{form.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {/* ── GEOMETRY ── */}
        {tab==="geometry" && (
          <div className="section-container pb-20 space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              {([
                { v:"yantra" as const,  label:"Mātaṅgī Yantra",    color:"#b8962e", desc:"Bindu, triangles of Vāk, 8 lotus petals — the complete geometric instrument" },
                { v:"lotus" as const,   label:"The Sacred Lotus",   color:"#f472b6", desc:"Eight petals — the directions of sound through space" },
                { v:"minimal" as const, label:"Star Hexagram",      color:"#52b788", desc:"Union of Śiva and Śaktī — the creative principle" },
              ]).map((g,i)=>(
                <ScrollReveal key={g.label} delay={i*0.1}>
                  <div className="card-parchment rounded-sm p-6 text-center hover:border-gold/20 transition-all duration-500">
                    <div className="flex justify-center mb-5">
                      <SacredGeometry size={220} variant={g.v} color={g.color} animated/>
                    </div>
                    <div className="text-label mb-2" style={{ color:g.color }}>{g.label}</div>
                    <p className="font-display text-sm text-ivory/45 italic">{g.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Color palette */}
            <ScrollReveal>
              <div className="card-parchment rounded-sm p-6 md:p-8">
                <div className="text-label text-gold/50 mb-6">COLOR SYSTEM</div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                  {[
                    { n:"Primary Emerald", h:"#2d6a4f" }, { n:"Light Emerald", h:"#52b788" },
                    { n:"Antique Gold",    h:"#b8962e" }, { n:"Gold Pale",      h:"#f0d080" },
                    { n:"Obsidian",        h:"#0a0a0f" }, { n:"Deep Emerald",   h:"#0c2419" },
                    { n:"Violet",          h:"#7c3aed" }, { n:"Violet Light",   h:"#9d77f5" },
                    { n:"Royal Pink",      h:"#f472b6" }, { n:"Amber",          h:"#f59e0b" },
                    { n:"Sky Blue",        h:"#38bdf8" }, { n:"Ivory",          h:"#f5f0e8" },
                  ].map(c=>(
                    <div key={c.h} className="space-y-1.5 text-center">
                      <div className="h-10 rounded-sm border border-white/10" style={{ background:c.h }}/>
                      <div className="font-mono text-[9px] text-ivory/35">{c.h}</div>
                      <div className="text-[10px] font-display text-ivory/50">{c.n}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Sigils */}
            <ScrollReveal>
              <div className="card-parchment rounded-sm p-6 md:p-8 max-w-xl mx-auto">
                <div className="text-label text-gold/50 mb-5 text-center">SACRED SIGIL SYSTEM</div>
                <div className="grid grid-cols-5 gap-3">
                  {(["◈","⬡","✦","◉","⟁","⊕","◇","❋","⬟","◧"] as const).map((g,i)=>{
                    const colors=["#52b788","#b8962e","#9d77f5","#f472b6","#38bdf8","#f59e0b","#52b788","#b8962e","#9d77f5","#f472b6"];
                    return (
                      <motion.div key={g} initial={{ opacity:0, scale:0.8 }} whileInView={{ opacity:1, scale:1 }}
                        viewport={{ once:true }} transition={{ delay:i*0.05 }}
                        className="aspect-square border border-white/[0.07] rounded-sm flex items-center justify-center hover:border-white/20 transition-all cursor-default">
                        <motion.span className="text-2xl" style={{ color:colors[i] }}
                          animate={{ opacity:[0.5,0.9,0.5] }} transition={{ duration:3+i*0.3,repeat:Infinity,delay:i*0.4 }}>
                          {g}
                        </motion.span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>
        )}

        {/* ── ORACLE ARTWORKS ── */}
        {tab==="oracle" && (
          <div className="section-container pb-20">
            <ScrollReveal className="glass rounded-sm p-5 mb-10 max-w-3xl mx-auto text-center">
              <p className="font-display text-sm text-ivory/55 italic">
                Fifteen oracle artwork variants — each representing a distinct aspect of Matangi's transmission, used in the Oracle page.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {ORACLE_ART.map((art,i)=>(
                <ScrollReveal key={art.l} delay={i*0.04}>
                  <div className="group">
                    <div className="aspect-square border border-white/[0.07] rounded-sm overflow-hidden hover:border-white/20 transition-all duration-400"
                      style={{ background:`radial-gradient(ellipse at 50% 30%,${art.p[0]}14,${art.p[3]})` }}>
                      <OracleArt artwork={{ variant:art.v, palette:art.p, motif:art.m }} size={180} animated className="w-full h-full"/>
                    </div>
                    <div className="mt-2 text-center">
                      <div className="font-display text-xs text-ivory/50">{art.l}</div>
                      <div className="font-mono text-[9px] text-ivory/22 mt-0.5">{art.v}</div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {/* ── DESIGN SYSTEM ── */}
        {tab==="system" && (
          <div className="section-container pb-20 space-y-8">
            <ScrollReveal>
              <div className="card-parchment rounded-sm p-6 md:p-8">
                <div className="text-label text-gold/50 mb-8">TYPOGRAPHY</div>
                <div className="space-y-7">
                  <div>
                    <div className="text-label text-ivory/22 mb-3">DISPLAY — Cormorant Garamond</div>
                    <p className="font-display text-5xl text-ivory/90 font-light">Temple of Mātaṅgī</p>
                    <p className="font-display text-3xl text-ivory/65 italic">The Outcaste Oracle</p>
                    <p className="font-display text-xl text-ivory/45">Keeper of Forbidden Speech</p>
                  </div>
                  <div>
                    <div className="text-label text-ivory/22 mb-3">DEVANAGARI — Noto Serif Devanagari</div>
                    <p className="text-4xl text-emerald-300/80" style={{ fontFamily:"Noto Serif Devanagari,serif" }}>ॐ ह्रीं ऐं भगमालिन्यै नमः</p>
                    <p className="text-2xl text-gold/60 mt-2" style={{ fontFamily:"Noto Serif Devanagari,serif" }}>मातङ्गी · उच्छिष्टचाण्डालिनी</p>
                  </div>
                  <div>
                    <div className="text-label text-ivory/22 mb-3">BODY — Inter</div>
                    <p className="text-base text-ivory/70">She governs speech in its raw, unfiltered totality — the word spoken before self-censorship intervenes.</p>
                  </div>
                  <div>
                    <div className="text-label text-ivory/22 mb-3">MONO — IBM Plex Mono</div>
                    <p className="font-mono text-sm text-violet-300/60">oṃ hrīṃ klīṃ hūṃ mātaṃginyai phaṭ svāhā</p>
                    <p className="font-mono text-xs text-ivory/28 mt-1">MAHAVIDYA IX · VAK SIDDHI · LIMINAL ORACLE</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="card-parchment rounded-sm p-6 md:p-8">
                <div className="text-label text-gold/50 mb-7">COMPONENTS</div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <div className="text-label text-ivory/22 mb-4">BUTTONS</div>
                    <div className="flex flex-wrap gap-3">
                      <button className="btn-ritual text-xs px-5 py-2.5">PRIMARY RITUAL</button>
                      <button className="btn-ritual btn-ritual-emerald text-xs px-5 py-2.5">EMERALD</button>
                      <button className="border border-violet-500/40 text-violet-300 font-mono text-xs px-5 py-2.5 hover:bg-violet-500/10 transition-all">VIOLET</button>
                    </div>
                  </div>
                  <div>
                    <div className="text-label text-ivory/22 mb-4">BADGES</div>
                    <div className="flex flex-wrap gap-2">
                      {[{t:"MAHAVIDYA IX",c:"#52b788"},{t:"VAK SIDDHI",c:"#b8962e"},{t:"TRANSGRESSIVE",c:"#9d77f5"},{t:"LIMINAL",c:"#f59e0b"},{t:"ORACLE",c:"#38bdf8"}].map(l=>(
                        <span key={l.t} className="text-label px-2.5 py-1 border rounded-sm" style={{ borderColor:`${l.c}40`, color:l.c }}>{l.t}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-label text-ivory/22 mb-4">GLASS VARIANTS</div>
                    {["glass","glass-emerald","glass-gold"].map(v=>(
                      <div key={v} className={`${v} p-3 rounded-sm mb-2`}>
                        <span className="font-mono text-xs text-ivory/50">.{v}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-label text-ivory/22 mb-4">MOTION</div>
                    <div className="space-y-3">
                      {[{n:"breathe",cls:"breathe"},{n:"float-slow",cls:"float-slow"}].map(m=>(
                        <div key={m.n} className="flex items-center gap-3">
                          <span className="text-label text-ivory/22 w-24">{m.n}</span>
                          <div className={`${m.cls} h-4 w-4 rounded-full bg-gold/60`}/>
                          <span className="font-mono text-xs text-ivory/35">.{m.cls}</span>
                        </div>
                      ))}
                      <div className="flex items-center gap-3">
                        <span className="text-label text-ivory/22 w-24">shimmer</span>
                        <span className="text-shimmer font-display text-sm">Shimmering Gold</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="glass-gold rounded-sm p-6 md:p-8 text-center">
                <p className="font-display text-2xl text-gold/80 italic mb-3">"A digital temple — not a website."</p>
                <p className="font-display text-sm text-ivory/50 italic max-w-xl mx-auto">
                  Every visual decision obeys the doctrine: emerald wisdom · ink-stained gold · neon sanctity.
                  The graphic system is the body of the temple. The content is its speech.
                </p>
              </div>
            </ScrollReveal>
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightbox && <Lightbox form={lightbox} onClose={()=>setLightbox(null)}/>}
      </AnimatePresence>
    </div>
  );
}
