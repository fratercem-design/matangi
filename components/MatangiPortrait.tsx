"use client";
import { motion } from "framer-motion";
import { useId } from "react";

export type MatangiForm = "ucchishta" | "raja" | "sumukhi" | "vasya" | "karna" | "default";

interface Props {
  form?: MatangiForm;
  size?: number;
  animated?: boolean;
  className?: string;
}

function Filters({ id, skinLight, skinDark }: { id: string; skinLight: string; skinDark: string }) {
  return (
    <defs>
      <filter id={`gs-${id}`}><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <filter id={`gm-${id}`}><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <filter id={`gh-${id}`}><feGaussianBlur stdDeviation="12" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <radialGradient id={`skin-${id}`} cx="50%" cy="35%" r="65%">
        <stop offset="0%" stopColor={skinLight}/>
        <stop offset="45%" stopColor="#1e5c3a"/>
        <stop offset="100%" stopColor={skinDark}/>
      </radialGradient>
      <radialGradient id={`aura-${id}`} cx="50%" cy="35%" r="60%">
        <stop offset="0%" stopColor="#2d6a4f" stopOpacity="0.2"/>
        <stop offset="100%" stopColor="#050508" stopOpacity="0"/>
      </radialGradient>
    </defs>
  );
}

function Body({ id, ac, animated }: { id:string; ac:string; animated:boolean }) {
  const sk = `url(#skin-${id})`;
  const gf = `url(#gs-${id})`;
  const gm = `url(#gm-${id})`;
  const gh = `url(#gh-${id})`;
  return (
    <>
      <ellipse cx="300" cy="260" rx="240" ry="280" fill={`url(#aura-${id})`}/>
      {/* Torso */}
      <path d="M220 315 Q215 365 210 445 Q242 462 300 466 Q358 462 390 445 Q385 365 380 315 Q340 298 300 296 Q260 298 220 315Z" fill={sk} filter={gf}/>
      {/* Neck */}
      <rect x="285" y="260" width="30" height="40" rx="9" fill={sk}/>
      {/* Head */}
      <ellipse cx="300" cy="196" rx="74" ry="82" fill={sk} filter={gf}/>
      {/* Arms L */}
      <path d="M220 315 Q172 335 150 388 Q144 415 156 432 Q170 420 186 402 Q202 378 218 352Z" fill={sk} filter={gf}/>
      {/* Arms R */}
      <path d="M380 315 Q428 335 450 388 Q456 415 444 432 Q430 420 414 402 Q398 378 382 352Z" fill={sk} filter={gf}/>
      {/* Third eye */}
      <motion.ellipse cx="300" cy="176" rx="11" ry="7" fill={ac} filter={gh}
        animate={animated?{scale:[1,1.35,1],opacity:[0.7,1,0.7]}:undefined}
        transition={{duration:2.5,repeat:Infinity}} style={{originX:"300px",originY:"176px"}}/>
      <ellipse cx="300" cy="176" rx="4.5" ry="3" fill="white" opacity="0.85"/>
      {/* Eyes */}
      <ellipse cx="275" cy="198" rx="14" ry="10" fill="#0a0005"/>
      <ellipse cx="325" cy="198" rx="14" ry="10" fill="#0a0005"/>
      <circle cx="275" cy="198" r="6" fill={ac} opacity="0.85"/>
      <circle cx="325" cy="198" r="6" fill={ac} opacity="0.85"/>
      <circle cx="277" cy="196" r="2" fill="white" opacity="0.9"/>
      <circle cx="327" cy="196" r="2" fill="white" opacity="0.9"/>
      {/* Lips */}
      <path d="M283 227 Q292 234 300 233 Q308 234 317 227" fill={ac} opacity="0.75"/>
      {/* Earrings */}
      {[[224,207],[376,207]].map(([ex,ey],i)=>(
        <g key={i}>
          <circle cx={ex} cy={ey} r="7" fill={ac} filter={gm} opacity="0.8"/>
          <line x1={ex} y1={ey+7} x2={ex} y2={ey+22} stroke={ac} strokeWidth="2"/>
          <circle cx={ex} cy={ey+25} r="5" fill={ac} filter={gm} opacity="0.8"/>
        </g>
      ))}
      {/* Necklace */}
      <path d="M254 278 Q278 292 300 295 Q322 292 346 278" fill="none" stroke={ac} strokeWidth="2.5" filter={gm} opacity="0.65"/>
      {[262,276,290,300,310,324,338].map((x,i)=>{
        const y=283+Math.sin((i-3)*0.5)*5;
        return <circle key={i} cx={x} cy={y} r="3.5" fill={ac} filter={gm} opacity="0.65"/>;
      })}
      {/* Hair */}
      <path d="M226 168 Q208 205 214 258 Q225 268 242 274" fill="none" stroke="#08000f" strokeWidth="22" strokeLinecap="round"/>
      <path d="M374 168 Q392 205 386 258 Q375 268 358 274" fill="none" stroke="#08000f" strokeWidth="22" strokeLinecap="round"/>
      <path d="M226 168 Q202 215 208 260" fill="none" stroke="#160025" strokeWidth="9" strokeLinecap="round" opacity="0.6"/>
      <path d="M374 168 Q398 215 392 260" fill="none" stroke="#160025" strokeWidth="9" strokeLinecap="round" opacity="0.6"/>
    </>
  );
}

function Crown({ id, ac, animated, style="ornate" }: { id:string; ac:string; animated:boolean; style?:"wild"|"ornate"|"crescent"|"command" }) {
  const gm=`url(#gm-${id})`; const gh=`url(#gh-${id})`;
  if (style==="wild") return (
    <g>
      {[[265,138],[282,126],[300,122],[318,126],[335,138]].map(([x,y],i)=>(
        <motion.circle key={i} cx={x} cy={y} r={i===2?10:7} fill={ac} filter={gm}
          animate={animated?{scale:[1,1.25,1],opacity:[0.55,0.9,0.55]}:undefined}
          transition={{duration:2.5+i*0.3,repeat:Infinity,delay:i*0.3}} style={{originX:`${x}px`,originY:`${y}px`}}/>
      ))}
      {/* Wild leafy bits */}
      {[[-30,-25],[-12,-42],[12,-42],[30,-25]].map(([dx,dy],i)=>(
        <path key={i} d={`M${300+dx} ${155+dy} Q${300+dx*1.4} ${155+dy-18} ${300+dx*1.8} ${155+dy-35}`}
          fill="none" stroke={ac} strokeWidth="2" strokeLinecap="round" opacity="0.45"/>
      ))}
    </g>
  );
  if (style==="crescent") return (
    <g>
      <path d="M268 148 Q284 108 300 106 Q318 108 332 148" fill="none" stroke={ac} strokeWidth="1.8" opacity="0.55"/>
      <path d="M282 132 Q300 114 316 132 Q308 148 300 148 Q292 148 282 132Z" fill={ac} opacity="0.2" filter={gh}/>
      <motion.circle cx="300" cy="118" r="11" fill={ac} opacity="0.18" filter={gh}
        animate={animated?{scale:[1,1.22,1],opacity:[0.12,0.3,0.12]}:undefined}
        transition={{duration:5,repeat:Infinity}} style={{originX:"300px",originY:"118px"}}/>
    </g>
  );
  if (style==="command") return (
    <g>
      <path d="M233 160 L246 116 L266 146 L282 100 L300 138 L318 100 L334 146 L354 116 L367 160Z"
        fill="#18100a" stroke={ac} strokeWidth="1.8" filter={gm} opacity="0.88"/>
      {[[300,104],[280,122],[320,122],[260,134],[340,134]].map(([x,y],i)=>(
        <motion.circle key={i} cx={x} cy={y} r={i===0?9:6} fill={ac} filter={gh}
          animate={animated?{scale:[1,1.3,1],opacity:[0.55,1,0.55]}:undefined}
          transition={{duration:2+i*0.3,repeat:Infinity,delay:i*0.5}} style={{originX:`${x}px`,originY:`${y}px`}}/>
      ))}
    </g>
  );
  // Default ornate
  return (
    <g>
      <path d="M224 158 L238 114 L258 142 L276 97 L300 136 L324 97 L342 142 L362 114 L376 158Z"
        fill="#0c140c" stroke={ac} strokeWidth="1.5" filter={gm} opacity="0.88"/>
      {[[300,102],[278,120],[322,120],[258,132],[342,132]].map(([x,y],i)=>(
        <motion.circle key={i} cx={x} cy={y} r={i===0?9:6} fill={i%2===0?ac:"#b8962e"} filter={gh}
          animate={animated?{scale:[1,1.3,1],opacity:[0.6,1,0.6]}:undefined}
          transition={{duration:2.5+i*0.3,repeat:Infinity,delay:i*0.5}} style={{originX:`${x}px`,originY:`${y}px`}}/>
      ))}
    </g>
  );
}

// ── Form: UCCHISHTA ───────────────────────────────────────────
function Ucchishta({ id, a: animated }: { id:string; a:boolean }) {
  const ac="#a78bfa";
  const gm=`url(#gm-${id})`; const gs=`url(#gs-${id})`; const gh=`url(#gh-${id})`;
  return (
    <>
      <Filters id={id} skinLight="#2d7a50" skinDark="#0a2014"/>
      <rect width="600" height="600" fill="#04030c"/>
      <ellipse cx="300" cy="280" rx="250" ry="290" fill="rgba(109,40,217,0.1)"/>
      {/* Asymmetric halo */}
      <motion.circle cx="300" cy="192" r="148" fill="none" stroke={ac} strokeWidth="0.8"
        strokeDasharray="6 12" opacity="0.22"
        animate={animated?{rotate:-360}:undefined} transition={{duration:38,repeat:Infinity,ease:"linear"}}
        style={{originX:"300px",originY:"192px"}}/>
      <Body id={id} ac={ac} animated={animated}/>
      {/* Override eyes to red */}
      <ellipse cx="275" cy="198" rx="14" ry="10" fill="#350010"/>
      <ellipse cx="325" cy="198" rx="14" ry="10" fill="#350010"/>
      <circle cx="275" cy="198" r="6" fill="#cc0044" opacity="0.95"/>
      <circle cx="325" cy="198" r="6" fill="#cc0044" opacity="0.95"/>
      <circle cx="277" cy="196" r="2" fill="white" opacity="0.9"/>
      <circle cx="327" cy="196" r="2" fill="white" opacity="0.9"/>
      {/* Wild extra hair */}
      <path d="M226 168 Q180 238 172 322 Q176 348 194 360" fill="none" stroke="#100010" strokeWidth="24" strokeLinecap="round" opacity="0.88"/>
      <path d="M374 168 Q420 238 428 322 Q424 348 406 360" fill="none" stroke="#100010" strokeWidth="24" strokeLinecap="round" opacity="0.88"/>
      <Crown id={id} ac={ac} animated={animated} style="wild"/>
      {/* SWORD L */}
      <g filter={gm} transform="translate(132,295)">
        <rect x="0" y="0" width="4" height="92" rx="2" fill={ac} opacity="0.8"/>
        <polygon points="2,0 -5,16 9,16" fill={ac} opacity="0.9"/>
        <rect x="-7" y="55" width="18" height="4" rx="2" fill={ac} opacity="0.7"/>
      </g>
      {/* NOOSE R */}
      <path d="M430 315 Q448 302 452 320 Q456 336 440 345 Q424 354 418 338 Q412 322 430 315Z"
        fill="none" stroke={ac} strokeWidth="2.2" opacity="0.72" filter={gs}/>
      <line x1="440" y1="345" x2="434" y2="405" stroke={ac} strokeWidth="1.8" opacity="0.5"/>
      {/* GOAD lower R */}
      <g transform="translate(440,398)" filter={gs}>
        <line x1="0" y1="0" x2="0" y2="48" stroke={ac} strokeWidth="2.2" opacity="0.62"/>
        <path d="M0 0 Q9 9 7 20" fill="none" stroke={ac} strokeWidth="2" opacity="0.7"/>
      </g>
      {/* CLUB lower L */}
      <g transform="translate(110,386)" filter={gs}>
        <rect x="-5" y="0" width="10" height="44" rx="4" fill={ac} opacity="0.6"/>
        <ellipse cx="0" cy="0" rx="15" ry="11" fill={ac} opacity="0.72"/>
      </g>
      {/* SKULL CUP */}
      <g transform="translate(-22,-5)" filter={gm}>
        <path d="M286,395 Q285,365 300,362 Q315,365 314,395 L312,406 L288,406Z"
          fill="none" stroke={ac} strokeWidth="1.5" opacity="0.62"/>
        <line x1="288" y1="406" x2="312" y2="406" stroke={ac} strokeWidth="1.5" opacity="0.5"/>
        <circle cx="293" cy="378" r="4" fill="none" stroke={ac} strokeWidth="1" opacity="0.45"/>
        <circle cx="307" cy="378" r="4" fill="none" stroke={ac} strokeWidth="1" opacity="0.45"/>
        <motion.ellipse cx="300" cy="400" rx="16" ry="5" fill={ac} opacity="0.1" filter={gh}
          animate={animated?{opacity:[0.07,0.2,0.07]}:undefined} transition={{duration:3,repeat:Infinity}}/>
      </g>
      {/* Label */}
      <text x="300" y="550" textAnchor="middle" fontFamily="Noto Serif Devanagari,serif" fontSize="17" fill={ac} opacity="0.55">उच्छिष्टमातङ्गिनी</text>
      <text x="300" y="570" textAnchor="middle" fontFamily="serif" fontSize="10" fill={ac} opacity="0.28" letterSpacing="3">UCCHISHTA-MATANGINI</text>
      <rect x="8" y="8" width="584" height="584" fill="none" stroke={ac} strokeWidth="0.6" opacity="0.18"/>
    </>
  );
}

// ── Form: RAJA ────────────────────────────────────────────────
function Raja({ id, a: animated }: { id:string; a:boolean }) {
  const ac="#c8a030";
  const gm=`url(#gm-${id})`; const gs=`url(#gs-${id})`; const gh=`url(#gh-${id})`;
  return (
    <>
      <Filters id={id} skinLight="#35885a" skinDark="#0e2e1c"/>
      <rect width="600" height="600" fill="#050901"/>
      <ellipse cx="300" cy="265" rx="265" ry="305" fill="rgba(44,102,74,0.13)"/>
      {/* Throne */}
      <path d="M145 490 Q145 462 165 452 Q224 440 300 438 Q376 440 435 452 Q455 462 455 490 L455 545 L145 545Z"
        fill="#080e04" stroke={ac} strokeWidth="0.8" opacity="0.75"/>
      <path d="M178 440 L178 258 Q178 238 198 232 Q244 222 300 220 Q356 222 402 232 Q422 238 422 258 L422 440Z"
        fill="#06090a" stroke={ac} strokeWidth="0.5" opacity="0.45"/>
      {[220,260,300,340,380].map((x,i)=>(
        <motion.circle key={i} cx={x} cy={446} r="5.5" fill={ac} filter={gm}
          animate={animated?{opacity:[0.35,0.9,0.35]}:undefined}
          transition={{duration:2+i*0.3,repeat:Infinity,delay:i*0.4}}/>
      ))}
      {/* Royal halo rings */}
      {[118,140,162].map((r,i)=>(
        <motion.circle key={i} cx="300" cy="196" r={r} fill="none"
          stroke={i%2===0?ac:"#2d6a4f"} strokeWidth="0.7" opacity={0.22-i*0.04}
          animate={animated?{rotate:i%2===0?360:-360}:undefined}
          transition={{duration:22+i*9,repeat:Infinity,ease:"linear"}}
          style={{originX:"300px",originY:"196px"}}/>
      ))}
      <Body id={id} ac={ac} animated={animated}/>
      <Crown id={id} ac={ac} animated={animated} style="ornate"/>
      {/* VEENA L */}
      <g transform="translate(108,260)" filter={gs}>
        <ellipse cx="32" cy="0" rx="27" ry="17" fill="none" stroke={ac} strokeWidth="1.5" opacity="0.78"/>
        <rect x="29" y="17" width="6" height="88" fill="none" stroke={ac} strokeWidth="1.3" opacity="0.68"/>
        <ellipse cx="32" cy="108" rx="20" ry="13" fill="none" stroke={ac} strokeWidth="1.5" opacity="0.78"/>
        {[-12,-5,2,9,16].map((o,i)=>(
          <motion.line key={i} x1={32+o} y1="17" x2={32+o} y2="105"
            stroke={i%2===0?ac:"#52b788"} strokeWidth="0.9" opacity="0.55"
            animate={animated?{opacity:[0.3,0.7,0.3]}:undefined}
            transition={{duration:1.5+i*0.2,repeat:Infinity,delay:i*0.18}}/>
        ))}
        {/* Veena pegs */}
        {[-14,-7,0,7,14].map((dx,i)=>(
          <circle key={i} cx={32+dx} cy={-13} r="3" fill={ac} opacity="0.58"/>
        ))}
        {/* Sound glow */}
        <motion.ellipse cx="32" cy="55" rx="22" ry="10" fill={ac} opacity="0.07" filter={gh}
          animate={animated?{rx:[22,30,22],opacity:[0.05,0.14,0.05]}:undefined}
          transition={{duration:3,repeat:Infinity}}/>
      </g>
      {/* PARROT R */}
      <g transform="translate(416,218)" filter={gs}>
        <ellipse cx="18" cy="22" rx="14" ry="22" fill="none" stroke="#16a34a" strokeWidth="1.4" opacity="0.78"/>
        <circle cx="18" cy="8" r="11" fill="none" stroke="#16a34a" strokeWidth="1.4" opacity="0.78"/>
        <circle cx="14" cy="6" r="3" fill="#16a34a" opacity="0.62"/>
        <path d="M19 10 Q25 13 23 18" fill="none" stroke="#ea580c" strokeWidth="1.6"/>
        <line x1="18" y1="44" x2="12" y2="58" stroke="#16a34a" strokeWidth="2.5" opacity="0.7"/>
        <line x1="18" y1="44" x2="18" y2="62" stroke="#16a34a" strokeWidth="2" opacity="0.6"/>
        <line x1="18" y1="44" x2="24" y2="58" stroke="#16a34a" strokeWidth="2.5" opacity="0.7"/>
        {/* Speech waves */}
        {[12,22,32].map((r,i)=>(
          <motion.circle key={i} cx="30" cy="8" r={r} fill="none" stroke={ac} strokeWidth="0.5" opacity="0.15"
            animate={animated?{r:[r,r+10,r],opacity:[0.18,0,0.18]}:undefined}
            transition={{duration:2.5,repeat:Infinity,delay:i*0.7}}/>
        ))}
      </g>
      <text x="300" y="550" textAnchor="middle" fontFamily="Noto Serif Devanagari,serif" fontSize="17" fill={ac} opacity="0.6">राजमातङ्गी</text>
      <text x="300" y="570" textAnchor="middle" fontFamily="serif" fontSize="10" fill={ac} opacity="0.28" letterSpacing="3">RAJA-MATANGI</text>
      <rect x="8" y="8" width="584" height="584" fill="none" stroke={ac} strokeWidth="0.6" opacity="0.22"/>
    </>
  );
}

// ── Form: SUMUKHI ─────────────────────────────────────────────
function Sumukhi({ id, a: animated }: { id:string; a:boolean }) {
  const ac="#f472b6";
  const gm=`url(#gm-${id})`; const gs=`url(#gs-${id})`; const gh=`url(#gh-${id})`;
  return (
    <>
      <Filters id={id} skinLight="#38906a" skinDark="#112a1a"/>
      <rect width="600" height="600" fill="#050508"/>
      <ellipse cx="300" cy="260" rx="260" ry="300" fill="rgba(219,39,119,0.07)"/>
      {/* Lotus throne */}
      {[[-85,-2],[-52,-16],[0,-22],[52,-16],[85,-2]].map(([dx,dy],i)=>(
        <ellipse key={i} cx={300+dx} cy={490+dy} rx={28+Math.abs(dx)*0.18} ry="17"
          fill="none" stroke={ac} strokeWidth="1" opacity="0.32"
          transform={`rotate(${dx*0.3},${300+dx},${490+dy})`}/>
      ))}
      {/* Soft radiant halo */}
      <motion.circle cx="300" cy="196" r="126" fill="none" stroke={ac} strokeWidth="0.9" opacity="0.18"
        animate={animated?{scale:[1,1.05,1],opacity:[0.12,0.3,0.12]}:undefined}
        transition={{duration:5,repeat:Infinity}} style={{originX:"300px",originY:"196px"}}/>
      <Body id={id} ac={ac} animated={animated}/>
      {/* Flower crown */}
      {[[268,136],[284,122],[300,118],[316,122],[332,136]].map(([x,y],i)=>(
        <g key={i}>
          <circle cx={x} cy={y} r={i===2?11:8} fill="none" stroke={ac} strokeWidth="1.2" opacity="0.48"/>
          {[0,72,144,216,288].map((a2,j)=>(
            <circle key={j} cx={x+Math.cos(a2*Math.PI/180)*6} cy={y+Math.sin(a2*Math.PI/180)*6} r="2.5" fill={ac} opacity="0.38"/>
          ))}
          <motion.circle cx={x} cy={y} r="3.5" fill={ac} filter={gh} opacity="0.55"
            animate={animated?{scale:[1,1.28,1],opacity:[0.45,0.88,0.45]}:undefined}
            transition={{duration:2+i*0.3,repeat:Infinity,delay:i*0.4}} style={{originX:`${x}px`,originY:`${y}px`}}/>
        </g>
      ))}
      {/* LOTUS L */}
      <g transform="translate(132,330)" filter={gm}>
        <path d="M28 82 Q22 52 25 20 Q28 0 28 0" fill="none" stroke="#2d6a4f" strokeWidth="2.2" opacity="0.68"/>
        {[0,72,144,216,288].map((a2,i)=>(
          <ellipse key={i} cx={28+Math.cos((a2-90)*Math.PI/180)*20}
            cy={Math.sin((a2-90)*Math.PI/180)*20}
            rx="10" ry="20" fill="none" stroke={ac} strokeWidth="1.1" opacity="0.48"
            transform={`rotate(${a2},${28+Math.cos((a2-90)*Math.PI/180)*20},${Math.sin((a2-90)*Math.PI/180)*20})`}/>
        ))}
        <circle cx="28" cy="0" r="10" fill={ac} filter={gh} opacity="0.55"/>
      </g>
      {/* MIRROR R */}
      <g transform="translate(418,318)" filter={gs}>
        <circle cx="24" cy="24" r="24" fill="none" stroke={ac} strokeWidth="1.6" opacity="0.7"/>
        <circle cx="24" cy="24" r="19" fill="none" stroke={ac} strokeWidth="0.7" opacity="0.32"/>
        <motion.circle cx="24" cy="24" r="17" fill={ac} opacity="0.07" filter={gh}
          animate={animated?{opacity:[0.04,0.18,0.04]}:undefined} transition={{duration:4,repeat:Infinity}}/>
        <path d="M24 48 L24 64" stroke={ac} strokeWidth="2.2" opacity="0.5"/>
        <ellipse cx="24" cy="68" rx="11" ry="5" fill={ac} opacity="0.38"/>
      </g>
      {/* Pearl necklace */}
      <path d="M252 280 Q278 294 300 297 Q322 294 348 280" fill="none" stroke="white" strokeWidth="1.5" opacity="0.28"/>
      {[256,270,284,296,306,318,332,346].map((x,i)=>{
        const y=285+Math.sin((i-3.5)*0.55)*6;
        return <circle key={i} cx={x} cy={y} r="3" fill="white" opacity="0.28"/>;
      })}
      <text x="300" y="552" textAnchor="middle" fontFamily="Noto Serif Devanagari,serif" fontSize="17" fill={ac} opacity="0.6">सुमुखीमातङ्गी</text>
      <text x="300" y="572" textAnchor="middle" fontFamily="serif" fontSize="10" fill={ac} opacity="0.28" letterSpacing="3">SUMUKHI-MATANGI</text>
      <rect x="8" y="8" width="584" height="584" fill="none" stroke={ac} strokeWidth="0.6" opacity="0.18"/>
    </>
  );
}

// ── Form: VASYA ───────────────────────────────────────────────
function Vasya({ id, a: animated }: { id:string; a:boolean }) {
  const ac="#f59e0b";
  const gm=`url(#gm-${id})`; const gs=`url(#gs-${id})`; const gh=`url(#gh-${id})`;
  return (
    <>
      <Filters id={id} skinLight="#2e7850" skinDark="#0c2616"/>
      <rect width="600" height="600" fill="#060502"/>
      <ellipse cx="300" cy="275" rx="252" ry="288" fill="rgba(184,130,14,0.09)"/>
      {/* Command rays */}
      {Array.from({length:8}).map((_,i)=>{
        const a=i*45*Math.PI/180;
        return (
          <motion.line key={i} x1={300+Math.cos(a)*94} y1={196+Math.sin(a)*94}
            x2={300+Math.cos(a)*174} y2={196+Math.sin(a)*174}
            stroke={ac} strokeWidth="0.8" opacity="0.14"
            animate={animated?{opacity:[0.07,0.24,0.07]}:undefined}
            transition={{duration:3,repeat:Infinity,delay:i*0.35}}/>
        );
      })}
      {[198,172,144].map((r,i)=>(
        <motion.circle key={i} cx="300" cy="196" r={r} fill="none"
          stroke={i%2===0?ac:"#2d6a4f"} strokeWidth="0.6" strokeDasharray={`${3+i*2} ${7+i*3}`}
          opacity={0.18-i*0.03}
          animate={animated?{rotate:i%2===0?360:-360}:undefined}
          transition={{duration:16+i*8,repeat:Infinity,ease:"linear"}}
          style={{originX:"300px",originY:"196px"}}/>
      ))}
      <Body id={id} ac={ac} animated={animated}/>
      {/* Red garland at hairline */}
      {[-55,-35,-15,0,15,35,55].map((dx,i)=>{
        const y=142+Math.abs(dx)*0.12;
        return <circle key={i} cx={300+dx} cy={y} r="4.5" fill="#dc2626" opacity="0.6" filter={gs}/>;
      })}
      <path d="M244 142 Q272 147 300 144 Q328 147 356 142" fill="none" stroke="#dc2626" strokeWidth="1.4" opacity="0.35"/>
      <Crown id={id} ac={ac} animated={animated} style="command"/>
      {/* NOOSE L */}
      <g transform="translate(118,302)" filter={gm}>
        <path d="M22 0 Q32,-13 45,-6 Q58 4 52 18 Q46 32 30 30 Q14 28 12 13 Q10,-2 22 0Z"
          fill="none" stroke={ac} strokeWidth="1.9" opacity="0.72"/>
        <line x1="32" y1="30" x2="27" y2="78" stroke={ac} strokeWidth="1.6" opacity="0.5"/>
        <motion.circle cx="32" cy="13" r="9" fill={ac} opacity="0.09" filter={gh}
          animate={animated?{scale:[1,1.5,1]}:undefined} transition={{duration:3,repeat:Infinity}}
          style={{originX:"32px",originY:"13px"}}/>
      </g>
      {/* HOOK R */}
      <g transform="translate(434,318)" filter={gs}>
        <path d="M10 0 Q-6 22 0 42 Q5 60 20 59 Q36 57 36 40"
          fill="none" stroke={ac} strokeWidth="2.2" opacity="0.7"/>
        <rect x="6" y="-22" width="8" height="28" rx="3" fill={ac} opacity="0.62"/>
        <motion.circle cx="20" cy="53" r="6" fill={ac} opacity="0.38" filter={gm}
          animate={animated?{opacity:[0.25,0.68,0.25]}:undefined} transition={{duration:2,repeat:Infinity}}/>
      </g>
      {/* Gold vessel */}
      <g transform="translate(265,388)" filter={gm}>
        <path d="M268 0 L264,-40 Q268,-56 300,-58 Q332,-56 336,-40 L332,0Z"
          fill="none" stroke={ac} strokeWidth="1.5" opacity="0.68"/>
        <ellipse cx="300" cy="0" rx="36" ry="10" fill="none" stroke={ac} strokeWidth="1.2" opacity="0.58"/>
        <motion.ellipse cx="300" cy="-26" rx="22" ry="9" fill={ac} opacity="0.07" filter={gh}
          animate={animated?{opacity:[0.04,0.16,0.04]}:undefined} transition={{duration:3.5,repeat:Infinity}}/>
      </g>
      <text x="300" y="552" textAnchor="middle" fontFamily="Noto Serif Devanagari,serif" fontSize="17" fill={ac} opacity="0.6">वश्यमातङ्गी</text>
      <text x="300" y="572" textAnchor="middle" fontFamily="serif" fontSize="10" fill={ac} opacity="0.28" letterSpacing="3">VASYA-MATANGI</text>
      <rect x="8" y="8" width="584" height="584" fill="none" stroke={ac} strokeWidth="0.6" opacity="0.18"/>
    </>
  );
}

// ── Form: KARNA ───────────────────────────────────────────────
function Karna({ id, a: animated }: { id:string; a:boolean }) {
  const ac="#38bdf8";
  const gm=`url(#gm-${id})`; const gs=`url(#gs-${id})`; const gh=`url(#gh-${id})`;
  return (
    <>
      <Filters id={id} skinLight="#2c7048" skinDark="#09201a"/>
      <rect width="600" height="600" fill="#030608"/>
      <ellipse cx="300" cy="280" rx="248" ry="290" fill="rgba(14,116,144,0.09)"/>
      {/* Sound wave rings */}
      {[38,68,98,128,158,188,218].map((r,i)=>(
        <motion.circle key={i} cx="300" cy="196" r={r} fill="none"
          stroke={ac} strokeWidth="0.45" opacity={0.14-i*0.012}
          animate={animated?{r:[r,r+9,r],opacity:[0.1,0.01,0.1]}:undefined}
          transition={{duration:4,repeat:Infinity,delay:i*0.52,ease:"easeOut"}}/>
      ))}
      <Body id={id} ac={ac} animated={animated}/>
      {/* Override: CLOSED EYES */}
      <ellipse cx="275" cy="198" rx="14" ry="10" fill={`url(#skin-${id})`}/>
      <ellipse cx="325" cy="198" rx="14" ry="10" fill={`url(#skin-${id})`}/>
      <path d="M262 198 Q275 208 288 198" fill="none" stroke="#0c2818" strokeWidth="2"/>
      <path d="M312 198 Q325 208 338 198" fill="none" stroke="#0c2818" strokeWidth="2"/>
      <Crown id={id} ac={ac} animated={animated} style="crescent"/>
      {/* CONCH L */}
      <g transform="translate(114,322)" filter={gm}>
        <path d="M22 0 Q38,-9 50 0 Q62 10 57 29 Q52 46 38 50 Q22 52 11 39 Q-2 25 4 12 Q11 -1 22 0Z"
          fill="none" stroke={ac} strokeWidth="1.6" opacity="0.7"/>
        <path d="M32 25 Q34 19 30 17 Q26 18 25 23 Q25 29 31 29 Q37 27 37 21"
          fill="none" stroke={ac} strokeWidth="1.1" opacity="0.5"/>
        {[14,24,34].map((r,i)=>(
          <motion.circle key={i} cx="58" cy="56" r={r} fill="none" stroke={ac} strokeWidth="0.5" opacity="0.18"
            animate={animated?{r:[r,r+12,r],opacity:[0.22,0,0.22]}:undefined}
            transition={{duration:3,repeat:Infinity,delay:i*0.82}}/>
        ))}
      </g>
      {/* Decorated ear R — oversized */}
      <g transform="translate(374,180)" filter={gm}>
        <path d="M0 0 Q-6 22 0 42 Q8 58 22 52 Q34 46 36 31 Q39 16 31 5 Q22,-5 0 0Z"
          fill="none" stroke={ac} strokeWidth="1.9" opacity="0.6"/>
        <path d="M8 10 Q5 26 8 40 Q14 48 22 44 Q29 40 29 29 Q29 18 22 14"
          fill="none" stroke={ac} strokeWidth="1.1" opacity="0.38"/>
        <motion.circle cx="19" cy="29" r="9" fill={ac} opacity="0.22" filter={gh}
          animate={animated?{scale:[1,1.55,1],opacity:[0.18,0.48,0.18]}:undefined}
          transition={{duration:4,repeat:Infinity}} style={{originX:"19px",originY:"29px"}}/>
        {[11,19,27].map((r,i)=>(
          <motion.circle key={i} cx="19" cy="29" r={r} fill="none" stroke={ac} strokeWidth="0.4" opacity="0.12"
            animate={animated?{r:[r,r+8,r],opacity:[0.12,0,0.12]}:undefined}
            transition={{duration:2.5,repeat:Infinity,delay:i*0.72}}/>
        ))}
      </g>
      {/* Silence glyph above finger gesture */}
      <motion.circle cx="300" cy="230" r="14" fill="none" stroke={ac} strokeWidth="0.8" opacity="0.18" filter={gm}
        animate={animated?{opacity:[0.1,0.28,0.1]}:undefined} transition={{duration:5,repeat:Infinity}}/>
      {/* Ambient glyphs */}
      {[["ॐ",72,86],["◈",512,92],["✦",78,490],["◉",518,496],["⟁",78,285],["✦",518,305]].map(([g,x,y],i)=>(
        <motion.text key={i} x={x as number} y={y as number} textAnchor="middle"
          fontFamily="serif" fontSize="16" fill={ac} opacity="0.18"
          animate={animated?{opacity:[0.08,0.32,0.08]}:undefined}
          transition={{duration:4+i*0.5,repeat:Infinity,delay:i*0.7}}>
          {g}
        </motion.text>
      ))}
      <text x="300" y="552" textAnchor="middle" fontFamily="Noto Serif Devanagari,serif" fontSize="17" fill={ac} opacity="0.6">कर्णमातङ्गी</text>
      <text x="300" y="572" textAnchor="middle" fontFamily="serif" fontSize="10" fill={ac} opacity="0.28" letterSpacing="3">KARNA-MATANGI</text>
      <rect x="8" y="8" width="584" height="584" fill="none" stroke={ac} strokeWidth="0.6" opacity="0.18"/>
    </>
  );
}

// ── Form: DEFAULT (complete) ──────────────────────────────────
function Default({ id, a: animated }: { id:string; a:boolean }) {
  const ac="#52b788";
  const gm=`url(#gm-${id})`; const gs=`url(#gs-${id})`; const gh=`url(#gh-${id})`;
  return (
    <>
      <Filters id={id} skinLight="#388c58" skinDark="#102c1a"/>
      <rect width="600" height="600" fill="#04090a"/>
      <ellipse cx="300" cy="268" rx="268" ry="302" fill="rgba(45,106,79,0.15)"/>
      {/* Full geometry backdrop */}
      {[162,134,106].map((r,i)=>(
        <motion.circle key={i} cx="300" cy="196" r={r} fill="none"
          stroke={i%2===0?ac:"#b8962e"} strokeWidth="0.55" opacity="0.18"
          animate={animated?{rotate:i%2===0?360:-360}:undefined}
          transition={{duration:24+i*9,repeat:Infinity,ease:"linear"}}
          style={{originX:"300px",originY:"196px"}}/>
      ))}
      <motion.polygon points="300,68 432,262 168,262" fill="none" stroke={ac} strokeWidth="0.7" opacity="0.14"
        animate={animated?{opacity:[0.08,0.24,0.08]}:undefined} transition={{duration:4,repeat:Infinity}}/>
      <motion.polygon points="300,324 432,130 168,130" fill="none" stroke="#b8962e" strokeWidth="0.7" opacity="0.14"
        animate={animated?{opacity:[0.24,0.08,0.24]}:undefined} transition={{duration:4,repeat:Infinity}}/>
      <Body id={id} ac={ac} animated={animated}/>
      <Crown id={id} ac={ac} animated={animated} style="ornate"/>
      {/* VEENA L */}
      <g transform="translate(110,268)" filter={gs}>
        <ellipse cx="30" cy="0" rx="26" ry="16" fill="none" stroke={ac} strokeWidth="1.3" opacity="0.72"/>
        <rect x="27" y="16" width="6" height="85" fill="none" stroke={ac} strokeWidth="1.2" opacity="0.65"/>
        <ellipse cx="30" cy="104" rx="19" ry="13" fill="none" stroke={ac} strokeWidth="1.3" opacity="0.72"/>
        {[-12,-5,2,9,16].map((o,i)=>(
          <motion.line key={i} x1={30+o} y1="16" x2={30+o} y2="102"
            stroke={i%2===0?ac:"#b8962e"} strokeWidth="0.9" opacity="0.52"
            animate={animated?{opacity:[0.3,0.7,0.3]}:undefined}
            transition={{duration:1.5+i*0.2,repeat:Infinity,delay:i*0.18}}/>
        ))}
        {[-14,-7,0,7,14].map((dx,i)=>(
          <circle key={i} cx={30+dx} cy={-13} r="2.8" fill={ac} opacity="0.55"/>
        ))}
      </g>
      {/* PARROT R */}
      <g transform="translate(416,224)" filter={gs}>
        <ellipse cx="16" cy="22" rx="13" ry="21" fill="none" stroke="#16a34a" strokeWidth="1.3" opacity="0.75"/>
        <circle cx="16" cy="8" r="10" fill="none" stroke="#16a34a" strokeWidth="1.3" opacity="0.75"/>
        <circle cx="13" cy="6" r="2.8" fill="#16a34a" opacity="0.62"/>
        <path d="M18 10 Q24 13 22 18" fill="none" stroke="#ea580c" strokeWidth="1.5"/>
        <line x1="16" y1="43" x2="10" y2="56" stroke="#16a34a" strokeWidth="2.4" opacity="0.68"/>
        <line x1="16" y1="43" x2="22" y2="56" stroke="#16a34a" strokeWidth="2.4" opacity="0.68"/>
      </g>
      {/* Floating Sanskrit */}
      {[["ॐ",74,84],["ह्रीं",514,99],["ऐं",79,490],["श्रीं",506,482]].map(([g,x,y],i)=>(
        <motion.text key={i} x={x as number} y={y as number} textAnchor="middle"
          fontFamily="Noto Serif Devanagari,serif" fontSize="20" fill={ac} opacity="0.28"
          animate={animated?{opacity:[0.14,0.42,0.14],y:[y as number,(y as number)-8,y as number]}:undefined}
          transition={{duration:5+i*0.7,repeat:Infinity,delay:i*0.8}}>
          {g}
        </motion.text>
      ))}
      <text x="300" y="552" textAnchor="middle" fontFamily="Noto Serif Devanagari,serif" fontSize="20" fill={ac} opacity="0.6">मातङ्गी</text>
      <text x="300" y="572" textAnchor="middle" fontFamily="serif" fontSize="10" fill={ac} opacity="0.32" letterSpacing="3">MAHAVIDYA IX · MATANGI</text>
      <rect x="8" y="8" width="584" height="584" fill="none" stroke={ac} strokeWidth="0.6" opacity="0.22"/>
    </>
  );
}

// ── Main export ───────────────────────────────────────────────
export default function MatangiPortrait({ form="default", size=500, animated=true, className="" }: Props) {
  const reactId = useId();
  // sanitize the id — remove colons (React useId can produce :r0:)
  const uid = `mp${reactId.replace(/[^a-zA-Z0-9]/g, "")}${form.slice(0,2)}`;
  const map: Record<MatangiForm, React.ReactNode> = {
    ucchishta: <Ucchishta id={uid} a={animated}/>,
    raja:      <Raja      id={uid} a={animated}/>,
    sumukhi:   <Sumukhi   id={uid} a={animated}/>,
    vasya:     <Vasya     id={uid} a={animated}/>,
    karna:     <Karna     id={uid} a={animated}/>,
    default:   <Default   id={uid} a={animated}/>,
  };
  return (
    <motion.svg width={size} height={size} viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg" className={className}
      initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}>
      {map[form]}
    </motion.svg>
  );
}
