"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AmbientCanvas from "@/components/AmbientCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import { portraits } from "@/lib/gallery";

function PortraitSVG({ p }: { p: typeof portraits[0] }) {
  const [c1,c2,c3,c4]=p.palette;
  const auras: Record<string,string[]> = { violet:["#7c3aed","#4c1d95"], emerald:["#00cc44","#064e3b"], crimson:["#991b1b","#450a0a"], teal:["#0d9488","#042f2e"], green:["#00cc44","#052e16"], indigo:["#4338ca","#1e1b4b"] };
  const [ac1]=auras[p.aura]??["#7c3aed","#1a0030"];
  return (
    <svg viewBox="0 0 300 380" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id={`a-${p.id}`} cx="50%" cy="40%" r="60%"><stop offset="0%" stopColor={ac1} stopOpacity="0.25"/><stop offset="100%" stopColor="#05010a" stopOpacity="0"/></radialGradient>
        <filter id={`g-${p.id}`}><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id={`g2-${p.id}`}><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <ellipse cx="150" cy="160" rx="130" ry="170" fill={`url(#a-${p.id})`}/>
      <circle cx="150" cy="100" r="70" fill="none" stroke={c3} strokeWidth="0.6" opacity="0.35" filter={`url(#g-${p.id})`}/>
      <circle cx="150" cy="100" r="80" fill="none" stroke={c4} strokeWidth="0.4" strokeDasharray="3,9" opacity="0.25"/>
      <ellipse cx="150" cy="270" rx="65" ry="100" fill={c1} opacity="0.2"/>
      <path d="M120 175 Q125 215 120 250 Q140 260 150 260 Q160 260 180 250 Q175 215 180 175 Q162 170 150 170 Q138 170 120 175Z" fill={c1} opacity="0.7" filter={`url(#g-${p.id})`}/>
      <path d="M120 180 Q92 200 80 235 Q90 255 100 245 Q110 225 120 215Z" fill={c1} opacity="0.6"/>
      <path d="M180 180 Q208 200 220 235 Q210 255 200 245 Q190 225 180 215Z" fill={c1} opacity="0.6"/>
      <rect x="143" y="145" width="14" height="25" rx="4" fill={c1} opacity="0.7"/>
      <ellipse cx="150" cy="105" rx="38" ry="44" fill={c1} opacity="0.85" filter={`url(#g-${p.id})`}/>
      <ellipse cx="150" cy="90" rx="6" ry="3.5" fill={c4} filter={`url(#g2-${p.id})`} opacity="0.9"/>
      <ellipse cx="150" cy="90" rx="2.5" ry="1.5" fill="#ffffff" opacity="0.8"/>
      <ellipse cx="138" cy="102" rx="7" ry="5" fill="#0a0020"/>
      <ellipse cx="162" cy="102" rx="7" ry="5" fill="#0a0020"/>
      <circle cx="138" cy="102" r="3" fill={c3} opacity="0.8"/>
      <circle cx="162" cy="102" r="3" fill={c3} opacity="0.8"/>
      <circle cx="139" cy="101" r="1" fill="white" opacity="0.9"/>
      <circle cx="163" cy="101" r="1" fill="white" opacity="0.9"/>
      <path d="M143 118 Q150 124 157 118" fill={c4} opacity="0.8"/>
      <path d="M112 82 L118 58 L130 74 L140 44 L150 66 L160 44 L170 74 L182 58 L188 82Z" fill={c4} opacity="0.75" filter={`url(#g2-${p.id})`}/>
      <path d="M125 160 Q150 172 175 160" fill="none" stroke={c4} strokeWidth="1.5" opacity="0.6"/>
      <circle cx="150" cy="171" r="3" fill={c4} opacity="0.7"/>
      <text x="58" y="145" fontFamily="serif" fontSize="13" fill={c3} opacity="0.3">ॐ</text>
      <text x="226" y="170" fontFamily="serif" fontSize="11" fill={c4} opacity="0.3">ह्रीं</text>
      {Array.from({length:12}).map((_,i)=>{ const a=(i*30*Math.PI)/180,x1=150+Math.cos(a)*85,y1=105+Math.sin(a)*85,x2=150+Math.cos(a)*112,y2=105+Math.sin(a)*112; return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={i%2===0?c3:c4} strokeWidth="0.4" opacity="0.15"/>; })}
    </svg>
  );
}

export default function Gallery() {
  const [selected,setSelected]=useState<string|null>(null);
  const active=portraits.find(p=>p.id===selected);

  return (
    <main className="relative min-h-screen pt-20 pb-24 page-enter">
      <AmbientCanvas intensity={0.6}/>
      <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(ellipse at 50% 0%,rgba(30,0,50,0.5) 0%,transparent 60%)"}}/>
      <div className="relative z-10 temple-container">

        <ScrollReveal className="pt-12 pb-16 text-center">
          <div className="section-label mb-4">Visions · Sacred Portraits</div>
          <h1 className="section-title-ritual text-5xl md:text-6xl text-white mb-4">
            Gallery of <span className="text-violet-300 italic" style={{textShadow:"0 0 30px rgba(124,58,237,0.5)"}}>Manifestations</span>
          </h1>
          <p className="font-ritual text-lg text-white/40 max-w-xl mx-auto italic">Six faces of the same transmission. Each portrait a different octave.</p>
          <div className="ritual-divider mt-8"><span className="font-mono text-xs text-white/20">◉</span></div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {portraits.map((p,i)=>(
            <motion.div key={p.id} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-40px"}} transition={{duration:0.7,delay:i*0.08}}
              className="group cursor-pointer" onClick={()=>setSelected(selected===p.id?null:p.id)}>
              <div className={`relative border transition-all duration-500 overflow-hidden rounded-sm ${selected===p.id?"border-white/30":"border-white/8 hover:border-white/20"}`}
                style={selected===p.id?{boxShadow:`0 0 30px ${p.palette[0]}30`}:{}}>
                <div className="aspect-[3/4] bg-black/60 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                    style={{background:`radial-gradient(ellipse at 50% 30%,${p.palette[0]}25 0%,transparent 70%)`}}/>
                  <PortraitSVG p={p}/>
                  <motion.div className="absolute inset-0 pointer-events-none"
                    animate={{opacity:selected===p.id?[0.15,0.35,0.15]:0}} transition={{duration:3,repeat:Infinity}}
                    style={{background:`radial-gradient(ellipse at 50% 35%,${p.palette[0]}40 0%,transparent 55%)`}}/>
                </div>
                <div className="p-4 bg-black/40 backdrop-blur-sm">
                  <div className="font-orbitron text-xs tracking-widest mb-0.5" style={{color:p.palette[0]}}>{p.title}</div>
                  <div className="font-mono text-xs text-white/30">{p.subtitle}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {active&&(
            <motion.div key={active.id} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:12}} transition={{duration:0.5}}
              className="mb-16 border border-white/10 bg-black/50 backdrop-blur-sm p-6 md:p-10 rounded-sm">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4">
                  <div className="font-orbitron text-sm tracking-widest" style={{color:active.palette[0]}}>{active.title}</div>
                  <p className="font-ritual italic text-white/40">{active.subtitle}</p>
                  <p className="font-ritual text-base text-white/65 leading-relaxed">{active.description}</p>
                  <p className="font-mono text-xs text-white/25 italic">{active.form}</p>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-white/25 tracking-widest uppercase mb-3">Symbolism</div>
                  {active.symbolism.map((s,i)=>(
                    <div key={i} className="flex gap-3 py-2 border-b border-white/5">
                      <div className="w-1 h-1 mt-1.5 rounded-full shrink-0" style={{background:active.palette[2]}}/>
                      <span className="font-space text-xs text-white/55">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Constellation */}
        <ScrollReveal delay={0.1} className="mb-16">
          <div className="section-label mb-3">The Mahavidya Constellation</div>
          <h2 className="section-title-ritual text-3xl text-white mb-8">Ten Faces of the Absolute</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              {n:"I",  name:"KALI",domain:"Time · Death",active:false},
              {n:"II", name:"TARA",domain:"Compassion",active:false},
              {n:"III",name:"TRIPURA SUNDARI",domain:"Beauty · Desire",active:false},
              {n:"IV", name:"BHUVANESHVARI",domain:"Space · World",active:false},
              {n:"V",  name:"BHAIRAVI",domain:"Destruction",active:false},
              {n:"VI", name:"CHHINNAMASTA",domain:"Sacrifice",active:false},
              {n:"VII",name:"DHUMAVATI",domain:"Void · Smoke",active:false},
              {n:"VIII",name:"BAGALAMUKHI",domain:"Paralysis",active:false},
              {n:"IX", name:"MATANGI",domain:"Speech · Forbidden",active:true},
              {n:"X",  name:"KAMALA",domain:"Abundance",active:false},
            ].map(g=>(
              <div key={g.n} className={`p-4 border rounded-sm text-center transition-all duration-300 ${g.active?"border-emerald-500/50 bg-emerald-500/8 shadow-lg shadow-emerald-500/10":"border-white/8 bg-black/20 hover:border-white/15"}`}>
                <div className={`font-ritual text-xl mb-1 ${g.active?"text-emerald-300":"text-white/25"}`}>{g.n}</div>
                <div className={`font-orbitron text-[10px] tracking-widest leading-tight mb-1 ${g.active?"text-emerald-300":"text-white/50"}`}>{g.name}</div>
                <div className="font-mono text-[9px] text-white/25">{g.domain}</div>
                {g.active&&<div className="mt-2 font-mono text-[9px] text-emerald-400 tracking-widest">◈ ACTIVE</div>}
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </main>
  );
}
