"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AmbientCanvas from "@/components/AmbientCanvas";
import MantraPlayer from "@/components/MantraPlayer";
import ScrollReveal from "@/components/ScrollReveal";
import { FragmentReveal } from "@/components/GlyphOverlay";
import { mantras, exercises } from "@/lib/mantras";

const VIZ_STEPS = [
  { text:"Sit with your spine upright. Close your eyes.", color:"#00e5ff", duration:10 },
  { text:"Breathe until you feel the boundary between body and room soften.", color:"#00cc44", duration:12 },
  { text:"Imagine a green light at the base of your throat.", color:"#00cc44", duration:10 },
  { text:"With each exhale, the light expands — slowly — into the room.", color:"#00e5a0", duration:12 },
  { text:"Hear the sound ह्रीं resonating from inside that light.", color:"#ff00cc", duration:10 },
  { text:"All forbidden thoughts that arise: do not push them away. Let them be the offering.", color:"#ffb6e6", duration:14 },
  { text:"The green light is not yours. It is hers. You are inside it.", color:"#00cc44", duration:12 },
  { text:"Speech is dissolving. Only frequency remains.", color:"#6fa8ff", duration:10 },
  { text:"Stay in this dissolution as long as it holds.", color:"#7c3aed", duration:15 },
  { text:"When you return — you are carrying something back.", color:"#00e5ff", duration:10 },
];

function VisualizationEngine() {
  const [running,setRunning]=useState(false);
  const [idx,setIdx]=useState(0);
  const step=VIZ_STEPS[idx];

  useEffect(()=>{
    if (!running) return;
    const t=setTimeout(()=>{ if(idx<VIZ_STEPS.length-1) setIdx(i=>i+1); else { setRunning(false); setIdx(0); } }, step.duration*1000);
    return ()=>clearTimeout(t);
  },[running,idx,step.duration]);

  return (
    <div className="relative border border-cyan-500/15 bg-black/50 backdrop-blur-sm rounded-sm p-8 text-center overflow-hidden">
      <AnimatePresence>
        {running&&<motion.div key={idx} className="absolute inset-0 pointer-events-none"
          initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:2}}
          style={{background:`radial-gradient(ellipse at 50% 40%,${step.color}18 0%,transparent 65%)`}}/>}
      </AnimatePresence>
      <div className="relative z-10 space-y-6">
        <div className="section-label">Visualization Ritual</div>
        <h3 className="section-title-ritual text-2xl text-white">{running?"Entering the Transmission":"Visualization of the Green Light"}</h3>
        <div className="min-h-[100px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {running ? (
              <motion.div key={idx} initial={{opacity:0,y:16,filter:"blur(6px)"}} animate={{opacity:1,y:0,filter:"blur(0px)"}} exit={{opacity:0,y:-12}} transition={{duration:1.2}} className="max-w-md">
                <p className="font-ritual text-xl italic leading-relaxed" style={{color:step.color}}>{step.text}</p>
                <div className="flex justify-center gap-1.5 mt-6">
                  {VIZ_STEPS.map((_,i)=><div key={i} className={`h-0.5 w-4 rounded-full transition-all duration-500 ${i<=idx?"bg-emerald-400/60":"bg-white/10"}`}/>)}
                </div>
              </motion.div>
            ) : (
              <motion.p key="idle" initial={{opacity:0}} animate={{opacity:1}} className="font-ritual text-base text-white/35 italic max-w-sm">
                Find stillness before beginning. This practice requires 3–5 uninterrupted minutes.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <button onClick={()=>{setRunning(!running);setIdx(0);}} className={`ritual-btn mx-auto ${running?"ritual-btn-magenta":""}`}>
          {running?"◼  CEASE TRANSMISSION":"◈  BEGIN VISUALIZATION"}
        </button>
      </div>
    </div>
  );
}

function ExerciseCard({ ex }: { ex: typeof exercises[0] }) {
  const [active,setActive]=useState(false);
  const [timeLeft,setTimeLeft]=useState(ex.duration);
  const [done,setDone]=useState(false);
  const [response,setResponse]=useState("");

  useEffect(()=>{
    if (!active) return;
    if (timeLeft<=0) { setActive(false); setDone(true); return; }
    const t=setTimeout(()=>setTimeLeft(s=>s-1),1000);
    return ()=>clearTimeout(t);
  },[active,timeLeft]);

  const reset=()=>{ setActive(false); setTimeLeft(ex.duration); setDone(false); setResponse(""); };
  const progress=((ex.duration-timeLeft)/ex.duration)*100;

  return (
    <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-60px"}} transition={{duration:0.6}}
      className="border border-violet-500/20 bg-black/40 backdrop-blur-sm p-6 rounded-sm space-y-4">
      <div className="font-orbitron text-xs tracking-widest text-violet-300 uppercase">{ex.title}</div>
      <p className="font-ritual text-base text-white/60 italic leading-relaxed">{ex.prompt}</p>
      <textarea rows={3} value={response} onChange={e=>setResponse(e.target.value)} placeholder="Write here, or simply sit with it in silence..." className="text-xs"/>
      {(active||done)&&(
        <div className="space-y-2">
          <div className="h-px bg-white/10 relative overflow-hidden">
            <motion.div className="absolute inset-y-0 left-0 bg-violet-400/60" style={{width:`${progress}%`}}/>
          </div>
          <div className="flex justify-between font-mono text-xs text-white/25">
            <span>{done?"Complete.":"Practicing..."}</span><span>{timeLeft}s</span>
          </div>
        </div>
      )}
      <div className="flex gap-3">
        {!done ? (
          <button onClick={()=>setActive(!active)}
            className={`font-mono text-xs tracking-widest px-4 py-2 border transition-all duration-300 ${active?"border-fuchsia-500/40 text-fuchsia-300 hover:bg-fuchsia-500/10":"border-violet-500/30 text-violet-300 hover:bg-violet-500/10"}`}>
            {active?"◼ PAUSE":"▶ BEGIN"}
          </button>
        ) : (
          <button onClick={reset} className="font-mono text-xs tracking-widest px-4 py-2 border border-white/10 text-white/30 hover:text-white/50 transition-all">RESET</button>
        )}
      </div>
    </motion.div>
  );
}

export default function Sanctum() {
  const [activeMantra,setActiveMantra]=useState(0);
  return (
    <main className="relative min-h-screen pt-20 pb-24 page-enter">
      <AmbientCanvas intensity={0.8}/>
      <div className="absolute inset-0 pointer-events-none gradient-magenta-void"/>
      <div className="relative z-10 temple-container">

        <ScrollReveal className="pt-12 pb-16 text-center">
          <div className="section-label mb-4">Sanctum · The Practice Engine</div>
          <h1 className="section-title-ritual text-5xl md:text-6xl text-white mb-4">
            The <span className="text-fuchsia-300 glow-magenta italic">Sanctum</span>
          </h1>
          <p className="font-ritual text-lg text-white/40 max-w-xl mx-auto italic">This is where the site becomes alive. Do not read — practice.</p>
          <div className="ritual-divider mt-8"><span className="font-mono text-xs text-white/20">✦</span></div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mb-16">
          <div className="section-label mb-3">Mantra Interface</div>
          <h2 className="section-title-ritual text-3xl text-white mb-6">Select Your Mantra</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {mantras.map((m,i)=>(
              <button key={m.id} onClick={()=>setActiveMantra(i)}
                className={`font-mono text-xs tracking-wider px-3 py-2 border rounded-sm transition-all duration-300 ${activeMantra===i?"border-fuchsia-400/60 text-fuchsia-300 bg-fuchsia-500/10":"border-white/10 text-white/35 hover:border-white/25 hover:text-white/55"}`}>
                {m.type}
              </button>
            ))}
          </div>
          <MantraPlayer mantra={mantras[activeMantra]}/>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <div className="border border-white/6 p-4 bg-black/20">
              <div className="font-mono text-[10px] text-white/25 tracking-widest uppercase mb-2">Meaning</div>
              <p className="font-ritual text-sm text-white/55 italic">{mantras[activeMantra].meaning}</p>
            </div>
            <div className="border border-white/6 p-4 bg-black/20">
              <div className="font-mono text-[10px] text-white/25 tracking-widest uppercase mb-2">Timing &amp; Context</div>
              <p className="font-space text-sm text-white/55">{mantras[activeMantra].timing??""}</p>
              <p className="font-mono text-xs text-white/25 mt-2">{mantras[activeMantra].repetitions}× repetitions</p>
            </div>
          </div>
        </ScrollReveal>

        <FragmentReveal text="The word you dare not say holds the most power."/>

        <ScrollReveal delay={0.1} className="mb-16">
          <div className="section-label mb-3">Visualization Module</div>
          <h2 className="section-title-ritual text-3xl text-white mb-6">The Green Light Practice</h2>
          <VisualizationEngine/>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mb-16">
          <div className="section-label mb-3">Esoteric Exercises</div>
          <h2 className="section-title-ritual text-3xl text-white mb-3">Practices of Transgressive Speech</h2>
          <p className="font-ritual text-base text-white/35 italic mb-8 max-w-lg">Each exercise is a door. You do not have to walk through it. But notice which ones you resist.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {exercises.map(ex=><ExerciseCard key={ex.id} ex={ex}/>)}
          </div>
        </ScrollReveal>

        <FragmentReveal text="Your most transgressive creative act is your most accurate prayer." delay={0.1}/>

        <ScrollReveal delay={0.1} className="mb-16">
          <div className="section-label mb-3">Ritual Protocol</div>
          <h2 className="section-title-ritual text-3xl text-white mb-8">How to Approach Her</h2>
          <div className="space-y-1">
            {[
              {n:"I",   t:"Liminal Timing",         d:"Midnight, dark moon, crossroads, Tuesday or Sunday. Any threshold moment between states."},
              {n:"II",  t:"The Ucchishta Offering",  d:"Offer what has been touched and used — half-eaten fruit, leftover food. The used carries the charge of real life."},
              {n:"III", t:"Mantra Invocation",       d:"Begin with the Moola Mantra 108 times. Do not count — enter the resonance. Let the counting dissolve."},
              {n:"IV",  t:"The Question",             d:"Hold your question as sensation, not words. Her answers arrive as coincidence, overheard speech, sudden internal knowing."},
              {n:"V",   t:"Dissolution",              d:"Close with: 'Matangi, I return to the world of forms. May your transmission remain encoded in my speech.'"},
            ].map((s,i)=>(
              <motion.div key={s.n} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.1}}
                className="flex gap-6 border-b border-white/5 py-5 group">
                <div className="font-ritual text-2xl text-fuchsia-400/30 w-8 shrink-0 group-hover:text-fuchsia-400/60 transition-colors">{s.n}</div>
                <div>
                  <div className="font-orbitron text-xs tracking-widest text-fuchsia-300/70 uppercase mb-1">{s.t}</div>
                  <p className="font-ritual text-base text-white/55 italic">{s.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </main>
  );
}
