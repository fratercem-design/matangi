"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import AmbientCanvas from "@/components/AmbientCanvas";
import MatangiSigil from "@/components/MatangiSigil";

function SanskritRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    const resize = () => { canvas.width=window.innerWidth; canvas.height=window.innerHeight; };
    window.addEventListener("resize", resize);
    const chars = "ॐ ह्रीं ऐं क्लीं श्रीं ◈ ✦ ⬡ ⟁ ◉ ⊕ मातङ्गि".split(" ");
    const cols = Math.floor(canvas.width / 28);
    const drops: number[] = Array(cols).fill(1).map(() => Math.random() * -40);
    const draw = () => {
      ctx.fillStyle = "rgba(5,1,10,0.07)"; ctx.fillRect(0,0,canvas.width,canvas.height);
      for (let i = 0; i < drops.length; i++) {
        ctx.fillStyle = `rgba(0,204,68,${Math.random()*0.18+0.04})`;
        ctx.font = `${Math.random()*8+9}px serif`;
        ctx.fillText(chars[Math.floor(Math.random()*chars.length)], i*28, drops[i]*20);
        if (drops[i]*20 > canvas.height && Math.random()>0.97) drops[i]=0;
        drops[i] += 0.08+Math.random()*0.04;
      }
    };
    const id = setInterval(draw, 80);
    return () => { clearInterval(id); window.removeEventListener("resize",resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60" />;
}

function TypedText({ text, delay=0 }: { text:string; delay?:number }) {
  const [displayed,setDisplayed]=useState("");
  const [started,setStarted]=useState(false);
  useEffect(() => { const t=setTimeout(()=>setStarted(true),delay*1000); return ()=>clearTimeout(t); },[delay]);
  useEffect(() => {
    if (!started) return;
    let i=0; const id=setInterval(()=>{ setDisplayed(text.slice(0,++i)); if(i>=text.length) clearInterval(id); },45);
    return ()=>clearInterval(id);
  },[started,text]);
  return <span>{displayed}<span className="animate-pulse opacity-60">|</span></span>;
}

export default function EntryGate() {
  const [entered,setEntered]=useState(false);
  const [activating,setActivating]=useState(false);

  const handleEnter = () => {
    setActivating(true);
    setTimeout(()=>setEntered(true),1800);
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#05010a]">
      <SanskritRain />
      <AmbientCanvas intensity={0.6} />
      <div className="absolute inset-0 pointer-events-none"
        style={{background:"radial-gradient(ellipse 60% 50% at 50% 50%,rgba(0,80,30,0.12) 0%,transparent 70%)"}}/>

      <AnimatePresence>
        {activating && (
          <motion.div className="absolute inset-0 z-50 pointer-events-none"
            initial={{opacity:0}} animate={{opacity:[0,0.4,0]}} transition={{duration:1.8,times:[0,0.3,1]}}
            style={{background:"radial-gradient(ellipse at center,rgba(0,204,68,0.6) 0%,transparent 70%)"}}/>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!entered ? (
          <motion.div key="gate" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0,scale:0.95}}
            className="relative z-20 flex flex-col items-center text-center px-6 max-w-2xl">
            <motion.div className="mb-10 float-slow" initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:1.5,delay:0.3}}>
              <MatangiSigil size={180} />
            </motion.div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8}}
              className="font-mono text-xs tracking-[0.4em] text-emerald-400/50 mb-4 uppercase">
              ◈ Mahavidya IX · Signal Active ◈
            </motion.div>
            <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:1,duration:1}}
              className="font-orbitron text-5xl md:text-7xl tracking-[0.15em] text-white mb-2 flicker"
              style={{textShadow:"0 0 40px rgba(0,204,68,0.4),0 0 80px rgba(0,204,68,0.15)"}}>
              MATANGI
            </motion.h1>
            <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.4}}
              className="font-ritual text-lg md:text-xl text-white/40 italic tracking-wider mb-8">
              Outcaste Oracle · Dark Saraswati · Keeper of Forbidden Speech
            </motion.p>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2}}
              className="font-ritual text-base md:text-lg text-white/60 italic mb-12 max-w-md leading-relaxed">
              <TypedText text="Enter only if you are willing to hear what has not been said." delay={2} />
            </motion.div>
            <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:3.2}}
              className="flex flex-col sm:flex-row items-center gap-4">
              <button onClick={handleEnter} disabled={activating} className="ritual-btn text-sm px-10 py-4 disabled:opacity-30">
                <span className="text-emerald-400 mr-2">◈</span>ENTER TEMPLE<span className="text-emerald-400 ml-2">◈</span>
              </button>
              <Link href="/temple" className="font-mono text-xs tracking-[0.3em] text-white/30 hover:text-white/60 transition-colors border-b border-white/10 pb-0.5">
                LEARN ABOUT MATANGI →
              </Link>
            </motion.div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:4}}
              className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2">
              <div className="flex gap-2">
                {[0,1,2,3,4].map(i=>(
                  <motion.div key={i} className="w-1 bg-emerald-400/40 rounded-full"
                    animate={{height:[4,16,4]}} transition={{duration:1.4,repeat:Infinity,delay:i*0.18,ease:"easeInOut"}}/>
                ))}
              </div>
              <span className="font-mono text-[10px] text-white/20 tracking-widest">SIGNAL RECEIVING</span>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div key="entered" initial={{opacity:0,scale:1.1}} animate={{opacity:1,scale:1}}
            className="relative z-20 flex flex-col items-center text-center gap-8 px-6">
            <MatangiSigil size={120} />
            <p className="font-ritual text-2xl text-emerald-300/80 italic">The temple opens.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {[
                {href:"/temple",  label:"INNER HALL", glyph:"⬡", desc:"Teachings & Lore"},
                {href:"/sanctum", label:"SANCTUM",    glyph:"✦", desc:"Mantras & Practice"},
                {href:"/gallery", label:"VISIONS",    glyph:"◉", desc:"Sacred Portraits"},
                {href:"/archive", label:"ARCHIVE",    glyph:"⟁", desc:"Hidden Transmissions"},
              ].map(({href,label,glyph,desc})=>(
                <Link key={href} href={href}
                  className="group border border-white/10 bg-black/30 p-5 rounded-sm
                             hover:border-emerald-500/40 hover:bg-black/50 transition-all duration-400
                             flex flex-col items-center gap-2 text-center">
                  <span className="text-2xl text-emerald-400/60 group-hover:text-emerald-300 transition-colors">{glyph}</span>
                  <span className="font-orbitron text-xs tracking-widest text-white/70 group-hover:text-white">{label}</span>
                  <span className="font-mono text-[10px] text-white/30">{desc}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
