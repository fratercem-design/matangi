"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AmbientCanvas from "@/components/AmbientCanvas";
import RitualCard from "@/components/RitualCard";
import ScrollReveal from "@/components/ScrollReveal";
import { FragmentReveal, TruthFragment } from "@/components/GlyphOverlay";
import MatangiSigil from "@/components/MatangiSigil";
import { matangiCore, matangiPhilosophy, matangiForms, matangiYantra, matangiSiddhis, matangiOriginStory } from "@/lib/matangi-content";
import { hymns } from "@/lib/hymns";

function ScrollPanel({ title, subtitle, children, accent="cyan" }: { title:string; subtitle?:string; children:React.ReactNode; accent?:string }) {
  const [open,setOpen]=useState(false);
  const colors: Record<string,string> = { cyan:"border-cyan-500/20 text-cyan-300", emerald:"border-emerald-500/20 text-emerald-300", magenta:"border-fuchsia-500/20 text-fuchsia-300", gold:"border-amber-500/20 text-amber-300" };
  const c = (colors[accent]??colors.cyan).split(" ");
  return (
    <div className={`border ${c[0]} bg-black/30 backdrop-blur-sm rounded-sm overflow-hidden`}>
      <button onClick={()=>setOpen(!open)} className="w-full flex items-center justify-between px-6 py-4 hover:bg-white/[0.02] transition-colors">
        <div className="text-left">
          <div className={`font-orbitron text-xs tracking-widest uppercase ${c[1]}`}>{title}</div>
          {subtitle&&<div className="font-mono text-xs text-white/30 mt-0.5">{subtitle}</div>}
        </div>
        <motion.span animate={{rotate:open?180:0}} className="text-white/30 font-mono text-sm">▾</motion.span>
      </button>
      <AnimatePresence>
        {open&&(
          <motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:0.45}}>
            <div className="px-6 pb-6 border-t border-white/5 pt-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function TempleInnerHall() {
  const [activeForm,setActiveForm]=useState<string|null>(null);
  const form=matangiForms.find(f=>f.id===activeForm);

  return (
    <main className="relative min-h-screen pt-20 pb-24 page-enter">
      <AmbientCanvas intensity={0.5}/>
      <div className="absolute inset-0 pointer-events-none gradient-emerald-void"/>
      <div className="relative z-10 temple-container">

        <ScrollReveal className="pt-12 pb-16 text-center">
          <div className="section-label mb-4">Inner Hall · Teachings of the Left-Speaking Goddess</div>
          <h1 className="section-title-ritual text-5xl md:text-6xl text-white mb-4">
            The Temple of <span className="text-emerald-300 glow-emerald italic">Matangi</span>
          </h1>
          <p className="font-ritual text-lg text-white/40 max-w-xl mx-auto italic">She who speaks what cannot be spoken. She who sings what cannot be sung.</p>
          <div className="ritual-divider mt-8"><span className="font-mono text-xs text-white/20">◈</span></div>
        </ScrollReveal>

        {/* Core data */}
        <ScrollReveal delay={0.1} className="mb-16">
          <div className="grid md:grid-cols-2 gap-px border border-white/5 bg-black/20">
            {Object.entries(matangiCore).map(([k,v],i)=>(
              <div key={k} className={`flex items-start gap-4 px-5 py-3 ${i%2===0?"bg-white/[0.01]":""} border-b border-white/5`}>
                <span className="font-mono text-[10px] text-white/25 tracking-widest uppercase w-28 shrink-0 pt-0.5">{k.replace(/([A-Z])/g," $1").trim().toUpperCase()}</span>
                <span className="font-space text-sm text-white/65">{v}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Origin story */}
        <ScrollReveal delay={0.15} className="mb-16">
          <div className="border border-fuchsia-500/15 bg-gradient-to-br from-black/50 to-[#12001f]/50 p-8 md:p-12">
            <div className="flex items-start gap-6 mb-6">
              <MatangiSigil size={80} className="shrink-0 opacity-60"/>
              <div>
                <div className="section-label mb-2">Origin Transmission</div>
                <h2 className="section-title-ritual text-3xl text-fuchsia-300">{matangiOriginStory.title}</h2>
              </div>
            </div>
            {matangiOriginStory.text.split("\n\n").map((p,i)=>(
              <p key={i} className="font-ritual text-base text-white/60 leading-relaxed mb-4 italic">{p}</p>
            ))}
          </div>
        </ScrollReveal>

        {/* Philosophy */}
        <ScrollReveal delay={0.1} className="mb-16">
          <div className="section-label mb-3">Philosophy Scrolls</div>
          <h2 className="section-title-ritual text-3xl text-white mb-8">Doctrine of the <TruthFragment>Outcaste Oracle</TruthFragment></h2>
          <div className="space-y-3">
            {matangiPhilosophy.map((p,i)=>(
              <ScrollPanel key={p.id} title={p.title} subtitle={p.subtitle} accent={["cyan","emerald","magenta","gold","cyan","emerald"][i%6]}>
                {p.text.split("\n\n").map((para,j)=><p key={j} className="font-ritual text-base text-white/60 leading-relaxed italic mb-3">{para}</p>)}
              </ScrollPanel>
            ))}
          </div>
        </ScrollReveal>

        <FragmentReveal text="Noise is untrained prophecy." delay={0.2}/>

        {/* Five forms */}
        <ScrollReveal delay={0.1} className="mb-16">
          <div className="section-label mb-3">Five Sacred Forms</div>
          <h2 className="section-title-ritual text-3xl text-white mb-8">Manifestations of the Goddess</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {matangiForms.map(f=>(
              <motion.button key={f.id} whileHover={{scale:1.02}} whileTap={{scale:0.98}}
                onClick={()=>setActiveForm(activeForm===f.id?null:f.id)}
                className={`text-left p-5 border rounded-sm transition-all duration-300 ${activeForm===f.id?"border-white/30 bg-white/5":"border-white/8 bg-black/30 hover:border-white/20"}`}>
                <div className="font-orbitron text-xs tracking-widest mb-1" style={{color:f.color}}>{f.name}</div>
                <div className="font-mono text-xs text-white/30 mb-3">{f.subtitle}</div>
                <div className="font-space text-xs text-white/50 line-clamp-2">{f.description.split("\n")[0]}</div>
                {activeForm===f.id&&<div className="w-full h-px mt-3" style={{background:f.color,opacity:0.4}}/>}
              </motion.button>
            ))}
          </div>
          <AnimatePresence>
            {form&&(
              <motion.div key={form.id} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:8}}
                className="border border-white/10 bg-black/40 p-6 md:p-8 rounded-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-4">
                    <h3 className="font-orbitron text-lg" style={{color:form.color}}>{form.name}</h3>
                    <p className="font-ritual text-base text-white/50 italic">{form.subtitle}</p>
                    {form.description.split("\n\n").map((p,i)=><p key={i} className="font-ritual text-base text-white/65 leading-relaxed">{p}</p>)}
                    <div className="pt-2">
                      <div className="font-mono text-xs text-white/30 mb-2 tracking-widest uppercase">Mantra</div>
                      <div className="text-sm font-serif" style={{color:form.color,fontSize:"1.1rem",lineHeight:1.8}}>{form.mantra}</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="font-mono text-xs text-white/25 tracking-widest uppercase mb-2">Attributes</div>
                      {form.attributes.map((a,i)=>(
                        <div key={i} className="flex items-center gap-2 py-1.5 border-b border-white/5">
                          <div className="w-1 h-1 rounded-full" style={{background:form.color}}/>
                          <span className="font-space text-xs text-white/55">{a}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border border-white/8 p-4 rounded-sm">
                      <div className="font-mono text-[10px] text-white/25 tracking-widest uppercase mb-1">Primary Power</div>
                      <p className="font-ritual text-sm text-white/65 italic">{form.power}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollReveal>

        {/* Yantra */}
        <ScrollReveal delay={0.1} className="mb-16">
          <RitualCard title="The Matangi Yantra" subtitle="Sacred geometric instrument" accent="magenta" glyph="⬡">
            <p className="font-ritual text-base text-white/60 italic mb-5">{matangiYantra.description}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-40 h-40 md:w-48 md:h-48">
                  <rect x="5" y="5" width="190" height="190" fill="none" stroke="#ff00cc" strokeWidth="1" opacity="0.3"/>
                  <rect x="15" y="15" width="170" height="170" fill="none" stroke="#ff00cc" strokeWidth="0.5" opacity="0.2"/>
                  <circle cx="100" cy="100" r="75" fill="none" stroke="#00e5ff" strokeWidth="0.6" opacity="0.3"/>
                  <circle cx="100" cy="100" r="55" fill="none" stroke="#00e5ff" strokeWidth="0.4" opacity="0.25"/>
                  {Array.from({length:16}).map((_,i)=>{ const a=(i*22.5*Math.PI)/180,x=100+Math.cos(a)*65,y=100+Math.sin(a)*65; return <ellipse key={i} cx={x} cy={y} rx="6" ry="3" fill="none" stroke="#00e5ff" strokeWidth="0.4" opacity="0.2" transform={`rotate(${i*22.5+90},${x},${y})`}/>; })}
                  {Array.from({length:8}).map((_,i)=>{ const a=(i*45*Math.PI)/180,x=100+Math.cos(a)*45,y=100+Math.sin(a)*45; return <ellipse key={i} cx={x} cy={y} rx="5" ry="2.5" fill="none" stroke="#ff00cc" strokeWidth="0.5" opacity="0.3" transform={`rotate(${i*45+90},${x},${y})`}/>; })}
                  <polygon points="100,35 126,80 74,80" fill="none" stroke="#00e5ff" strokeWidth="0.7" opacity="0.4"/>
                  <polygon points="100,165 74,120 126,120" fill="none" stroke="#ff00cc" strokeWidth="0.7" opacity="0.4"/>
                  <circle cx="100" cy="100" r="4" fill="#ff00cc" opacity="0.7"/>
                  <circle cx="100" cy="100" r="10" fill="none" stroke="#ff00cc" strokeWidth="0.5" opacity="0.4"/>
                  <text x="100" y="118" textAnchor="middle" fontFamily="serif" fontSize="7" fill="#00e5ff" opacity="0.5">ॐ</text>
                </svg>
              </div>
              <div className="space-y-2">
                {matangiYantra.geometry.map((line,i)=>(
                  <div key={i} className="flex gap-3 items-start py-1.5 border-b border-white/5">
                    <span className="text-fuchsia-400/50 text-xs mt-0.5">◈</span>
                    <span className="font-space text-xs text-white/55">{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </RitualCard>
        </ScrollReveal>

        {/* Siddhis */}
        <ScrollReveal delay={0.1} className="mb-16">
          <div className="section-label mb-3">Powers Granted</div>
          <h2 className="section-title-ritual text-3xl text-white mb-8">Siddhis of Matangi</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {matangiSiddhis.map((s,i)=>(
              <RitualCard key={s.name} title={s.name} accent={(["cyan","emerald","magenta","gold","violet","cyan"] as const)[i%6]} delay={i*0.07}>
                <p className="font-ritual italic">{s.description}</p>
              </RitualCard>
            ))}
          </div>
        </ScrollReveal>

        <FragmentReveal text="The margin is not outside the sacred. The margin IS the sacred." delay={0.1}/>

        {/* Hymns */}
        <ScrollReveal delay={0.1} className="mb-16">
          <div className="section-label mb-3">Sacred Hymns</div>
          <h2 className="section-title-ritual text-3xl text-white mb-8">Stotras &amp; Invocations</h2>
          <div className="space-y-3">
            {hymns.map((h,i)=>(
              <ScrollPanel key={h.id} title={h.title} subtitle={h.type} accent={["emerald","cyan","gold","magenta"][i%4]}>
                <p className="font-mono text-xs text-white/30 italic mb-5">{h.context}</p>
                {h.verses.map((v,j)=>(
                  <div key={j} className="grid md:grid-cols-2 gap-4 border-b border-white/5 pb-4 mb-4">
                    <div>
                      <div className="font-mono text-[10px] text-emerald-400/40 tracking-widest uppercase mb-2">Sanskrit</div>
                      <p className="font-serif text-emerald-300/80 leading-loose text-lg whitespace-pre-line" style={{fontFamily:"Noto Serif Devanagari,serif"}}>{v.sanskrit}</p>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-fuchsia-400/40 tracking-widest uppercase mb-2">Translation</div>
                      <p className="font-ritual text-white/60 leading-relaxed italic">{v.translation}</p>
                    </div>
                  </div>
                ))}
              </ScrollPanel>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </main>
  );
}
