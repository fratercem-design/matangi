"use client";
import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import AmbientCanvas from "@/components/AmbientCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import { hiddenFragments } from "@/lib/hymns";

function UnlockableFragment({ text, index }: { text:string; index:number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end","start 60%"] });
  const opacity = useTransform(scrollYProgress,[0,1],[0,1]);
  const blur = useTransform(scrollYProgress,[0,0.6,1],["blur(12px)","blur(2px)","blur(0px)"]);
  const y = useTransform(scrollYProgress,[0,1],[20,0]);
  return (
    <div ref={ref} className="py-5 border-b border-white/5">
      <motion.div style={{opacity,filter:blur,y}} className="flex items-start gap-5">
        <span className="font-mono text-xs text-fuchsia-500/40 w-8 shrink-0 pt-1 tracking-widest">{String(index+1).padStart(2,"0")}</span>
        <p className="font-ritual text-base md:text-lg text-white/65 italic leading-relaxed">"{text}"</p>
      </motion.div>
    </div>
  );
}

function GlyphField() {
  const [active,setActive]=useState<{x:number;y:number;g:string}|null>(null);
  const G=["ॐ","ह्रीं","ऐं","◈","✦","⬡","⟁","◉","श्रीं","क्लीं","⊕","मातङ्गि"];
  const onMove=useCallback((e:React.MouseEvent<HTMLDivElement>)=>{
    if (Math.random()>0.3) return;
    const rect=e.currentTarget.getBoundingClientRect();
    setActive({x:e.clientX-rect.left,y:e.clientY-rect.top,g:G[Math.floor(Math.random()*G.length)]});
    setTimeout(()=>setActive(null),900);
  },[]);
  return (
    <div className="relative border border-fuchsia-500/10 bg-black/30 h-40 flex items-center justify-center cursor-crosshair overflow-hidden rounded-sm" onMouseMove={onMove}>
      <p className="font-mono text-xs text-white/20 tracking-widest pointer-events-none select-none">MOVE YOUR CURSOR THROUGH THE VOID</p>
      <AnimatePresence>
        {active&&(
          <motion.span key={`${active.x}-${active.y}`} initial={{opacity:0.9,scale:0.5}} animate={{opacity:0,scale:1.5,y:-20}} transition={{duration:0.9,ease:"easeOut"}}
            style={{left:active.x,top:active.y,position:"absolute"}} className="font-serif text-lg text-fuchsia-400 pointer-events-none select-none">
            {active.g}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

const ORACLE_RESPONSES = [
  "The answer you are avoiding is already inside the question.",
  "She heard you before you finished asking.",
  "What you called the problem is the door.",
  "Speech is the last thing. The knowing came first.",
  "The rejected part of you holds the map.",
  "There is no forbidden knowledge. Only knowledge you have been told is forbidden.",
  "The noise around you right now is her reply.",
  "You have been asking the wrong question. Ask: what am I afraid to know?",
  "She speaks through what reaches you unexpectedly. Listen for the next three days.",
  "The leftover contains the most potent offering. Give her what you considered unworthy.",
  "The answer lives at the margin of your attention, not the center.",
  "You already know. You are asking for permission.",
];

function OracleConsole() {
  const [question,setQuestion]=useState("");
  const [response,setResponse]=useState<string|null>(null);
  const [loading,setLoading]=useState(false);
  const ask=()=>{
    if (!question.trim()) return;
    setLoading(true); setResponse(null);
    setTimeout(()=>{ setResponse(ORACLE_RESPONSES[Math.floor(Math.random()*ORACLE_RESPONSES.length)]); setLoading(false); },2200);
  };
  return (
    <div className="border border-fuchsia-500/15 bg-black/50 backdrop-blur-sm p-6 md:p-8 rounded-sm space-y-5">
      <div className="text-center">
        <div className="section-label mb-2">Oracle Console</div>
        <h3 className="section-title-ritual text-2xl text-fuchsia-300">Transmit into the Void</h3>
        <p className="font-ritual text-sm text-white/35 italic mt-2">She will not tell you what you want to hear. She will tell you what you cannot unhear.</p>
      </div>
      <textarea rows={3} value={question} onChange={e=>setQuestion(e.target.value)} placeholder="Ask your question into the silence..." className="text-sm" onKeyDown={e=>e.key==="Enter"&&e.ctrlKey&&ask()}/>
      <div className="flex justify-center">
        <button onClick={ask} disabled={loading||!question.trim()} className="ritual-btn ritual-btn-magenta disabled:opacity-30 disabled:cursor-not-allowed">
          {loading?"◈  RECEIVING...":"◈  INVOKE MATANGI  ◈"}
        </button>
      </div>
      <AnimatePresence mode="wait">
        {loading&&(
          <motion.div key="loading" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="text-center space-y-3">
            <div className="flex justify-center gap-1.5">
              {[0,1,2,3,4].map(i=>(
                <motion.div key={i} className="w-1.5 h-1.5 rounded-full bg-fuchsia-400/60"
                  animate={{scale:[1,1.6,1],opacity:[0.4,1,0.4]}} transition={{duration:1,repeat:Infinity,delay:i*0.15}}/>
              ))}
            </div>
            <p className="font-mono text-xs text-white/25 tracking-widest">AWAITING TRANSMISSION</p>
          </motion.div>
        )}
        {response&&!loading&&(
          <motion.div key="response" initial={{opacity:0,filter:"blur(8px)"}} animate={{opacity:1,filter:"blur(0px)"}} transition={{duration:1.2}}
            className="border border-fuchsia-500/20 bg-fuchsia-500/5 p-5 text-center">
            <div className="font-mono text-[10px] text-fuchsia-400/50 tracking-widest mb-3 uppercase">◈ Transmission from Matangi ◈</div>
            <p className="font-ritual text-xl text-fuchsia-200 italic leading-relaxed">{response}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StaticWaveform() {
  return (
    <div className="h-16 flex items-end gap-px overflow-hidden">
      {Array.from({length:80}).map((_,i)=>(
        <motion.div key={i} className="flex-1 bg-emerald-400/30 rounded-t-sm"
          animate={{height:[`${Math.random()*60+5}%`,`${Math.random()*60+5}%`]}}
          transition={{duration:Math.random()*2+1,repeat:Infinity,repeatType:"reverse",ease:"easeInOut"}}/>
      ))}
    </div>
  );
}

export default function Archive() {
  return (
    <main className="relative min-h-screen pt-20 pb-24 page-enter">
      <AmbientCanvas intensity={1.0}/>
      <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(ellipse at 30% 60%,rgba(60,0,80,0.25) 0%,transparent 55%)"}}/>
      <div className="relative z-10 temple-container">

        <ScrollReveal className="pt-12 pb-16 text-center">
          <div className="section-label mb-4">Hidden Archive · The Unspoken</div>
          <h1 className="section-title-ritual text-5xl md:text-6xl text-white mb-4">
            Transmissions from the <span className="text-fuchsia-300 glow-magenta italic">Void</span>
          </h1>
          <p className="font-ritual text-lg text-white/40 max-w-xl mx-auto italic">This layer reveals itself as you descend. Each fragment unlocks as your attention arrives.</p>
          <div className="ritual-divider mt-8"><span className="font-mono text-xs text-white/20">⟁</span></div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mb-12">
          <div className="border border-white/5 bg-black/20 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="font-mono text-xs text-white/20 tracking-widest">AMBIENT SIGNAL · MATANGI FREQUENCY · 9.33Hz</div>
              <div className="flex gap-1">
                {[0,1,2,3,4].map(i=>(
                  <motion.div key={i} className="w-1 bg-emerald-400/40"
                    animate={{height:[3,Math.random()*12+4,3]}} transition={{duration:1,repeat:Infinity,delay:i*0.2,ease:"easeInOut"}}/>
                ))}
              </div>
            </div>
            <StaticWaveform/>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mb-12">
          <div className="section-label mb-3">Hidden Glyph Field</div>
          <GlyphField/>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mb-16">
          <OracleConsole/>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mb-16">
          <div className="section-label mb-3">Forbidden Fragments</div>
          <h2 className="section-title-ritual text-3xl text-white mb-2">Transmissions Received</h2>
          <p className="font-mono text-xs text-white/25 tracking-wider mb-8">SCROLL TO UNLOCK · EACH FRAGMENT REVEALS AS YOUR ATTENTION ARRIVES</p>
          <div className="border border-white/5 bg-black/20 px-4">
            {hiddenFragments.map((f,i)=><UnlockableFragment key={i} text={f} index={i}/>)}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mb-16">
          <div className="section-label mb-3">Symbol Glossary</div>
          <h2 className="section-title-ritual text-3xl text-white mb-8">Her Symbolic Language</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {symbol:"◈",name:"Bindu",meaning:"The point of pure potential. The moment before speech becomes word."},
              {symbol:"ह्रीं",name:"Hreem",meaning:"Bija of Maya. The seed sound that veils and reveals simultaneously."},
              {symbol:"ऐं",name:"Aim",meaning:"Bija of Saraswati — and Matangi. The root of all knowledge transmission."},
              {symbol:"⬡",name:"Hexagon",meaning:"The yantra's inner geometry. Six directions of manifestation."},
              {symbol:"⟁",name:"Triangle",meaning:"The three aspects of Vak: Para (beyond), Pashyanti (seeing), Madhyama (middle)."},
              {symbol:"◉",name:"Eye",meaning:"The third eye that sees what normal sight refuses."},
              {symbol:"✦",name:"Star",meaning:"The Mahavidya node — one of ten stellar intelligences."},
              {symbol:"⊕",name:"Cross-Circle",meaning:"The crossroads where she stands at midnight. The place between all states."},
            ].map((item,i)=>(
              <motion.div key={item.symbol} initial={{opacity:0,x:-10}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.06}}
                className="flex items-start gap-4 p-4 border border-white/5 bg-black/20 hover:bg-black/40 transition-colors">
                <span className="text-2xl text-fuchsia-400/60 w-8 shrink-0 font-serif">{item.symbol}</span>
                <div>
                  <div className="font-orbitron text-xs tracking-widest text-white/60 mb-1">{item.name}</div>
                  <p className="font-ritual text-sm text-white/40 italic">{item.meaning}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <div className="text-center py-12 border-t border-white/5">
          <motion.div animate={{opacity:[0.3,0.7,0.3]}} transition={{duration:5,repeat:Infinity}} className="font-serif text-4xl text-fuchsia-400/50 mb-4">ह्रीं</motion.div>
          <p className="font-mono text-xs text-white/20 tracking-widest">MATANGI · MAHAVIDYA IX · OUTCASTE ORACLE · TRANSMISSION COMPLETE</p>
        </div>

      </div>
    </main>
  );
}
