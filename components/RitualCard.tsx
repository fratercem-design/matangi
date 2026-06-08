"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  title: string; subtitle?: string; children: ReactNode;
  accent?: "cyan"|"magenta"|"emerald"|"violet"|"gold";
  className?: string; delay?: number; glyph?: string;
}

const A = {
  cyan:    { border:"border-cyan-500/30",    text:"text-cyan-300",    dot:"bg-cyan-400"    },
  magenta: { border:"border-fuchsia-500/30", text:"text-fuchsia-300", dot:"bg-fuchsia-400" },
  emerald: { border:"border-emerald-500/30", text:"text-emerald-300", dot:"bg-emerald-400" },
  violet:  { border:"border-violet-500/30",  text:"text-violet-300",  dot:"bg-violet-400"  },
  gold:    { border:"border-amber-500/30",   text:"text-amber-300",   dot:"bg-amber-400"   },
};

export default function RitualCard({ title, subtitle, children, accent="cyan", className="", delay=0, glyph }: Props) {
  const a = A[accent];
  return (
    <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, margin:"-60px" }} transition={{ duration:0.7, delay, ease:"easeOut" }}
      className={`relative border ${a.border} bg-black/40 backdrop-blur-sm p-6 rounded-sm group
                  hover:bg-black/60 transition-all duration-500 ${className}`}>
      <span className={`absolute top-0 left-0 w-3 h-3 border-t border-l ${a.border} opacity-60`}/>
      <span className={`absolute top-0 right-0 w-3 h-3 border-t border-r ${a.border} opacity-60`}/>
      <span className={`absolute bottom-0 left-0 w-3 h-3 border-b border-l ${a.border} opacity-60`}/>
      <span className={`absolute bottom-0 right-0 w-3 h-3 border-b border-r ${a.border} opacity-60`}/>
      {glyph && <div className={`text-2xl ${a.text} mb-3 opacity-60 font-serif`}>{glyph}</div>}
      <h3 className={`font-orbitron text-sm tracking-widest uppercase ${a.text} mb-1`}>{title}</h3>
      {subtitle && <p className="text-white/40 text-xs tracking-wider font-mono mb-4">{subtitle}</p>}
      <div className="text-white/70 text-sm leading-relaxed">{children}</div>
      <div className={`absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700 ${a.dot} opacity-50`}/>
    </motion.div>
  );
}
