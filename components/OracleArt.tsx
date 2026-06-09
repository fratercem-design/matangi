"use client";
import { motion } from "framer-motion";
import { useId } from "react";
import type { OracleArtwork } from "@/lib/oracle";

interface Props {
  artwork: OracleArtwork;
  size?: number;
  animated?: boolean;
  className?: string;
}

// ── Shared defs helper ────────────────────────────────────────
function Defs({ id, p }: { id: string; p: [string, string, string, string] }) {
  return (
    <defs>
      <radialGradient id={`rg-${id}`} cx="50%" cy="40%" r="65%">
        <stop offset="0%" stopColor={p[0]} stopOpacity="0.35" />
        <stop offset="60%" stopColor={p[1]} stopOpacity="0.15" />
        <stop offset="100%" stopColor={p[3]} stopOpacity="0" />
      </radialGradient>
      <radialGradient id={`rg2-${id}`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={p[2]} stopOpacity="0.5" />
        <stop offset="100%" stopColor={p[3]} stopOpacity="0" />
      </radialGradient>
      <filter id={`glow-${id}`}>
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
      <filter id={`glow2-${id}`}>
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
  );
}

// ── Individual artwork variants ───────────────────────────────

function VeenaArt({ id, p, animated }: { id: string; p: [string,string,string,string]; animated: boolean }) {
  return (
    <>
      <Defs id={id} p={p} />
      <ellipse cx="200" cy="200" rx="190" ry="190" fill={`url(#rg-${id})`} />
      {/* Veena body */}
      <motion.ellipse cx="200" cy="130" rx="55" ry="35" fill="none" stroke={p[0]} strokeWidth="1.5" opacity="0.7"
        filter={`url(#glow-${id})`}
        animate={animated ? { opacity: [0.5,0.9,0.5] } : undefined}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
      <rect x="196" y="165" width="8" height="100" fill="none" stroke={p[0]} strokeWidth="1.2" opacity="0.6" />
      <motion.ellipse cx="200" cy="275" rx="38" ry="25" fill="none" stroke={p[0]} strokeWidth="1.5" opacity="0.7"
        filter={`url(#glow-${id})`}
        animate={animated ? { opacity: [0.7,0.4,0.7] } : undefined}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
      {/* Strings */}
      {[-16,-8,0,8,16,24].map((offset, i) => (
        <motion.line key={i} x1={200 + offset} y1="165" x2={200 + offset} y2="270"
          stroke={p[i % 2 === 0 ? 0 : 2]} strokeWidth="0.7" opacity="0.5"
          animate={animated ? { opacity: [0.3, 0.7, 0.3] } : undefined}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }} />
      ))}
      {/* Halo rings */}
      {[80, 110, 140].map((r, i) => (
        <motion.circle key={i} cx="200" cy="200" r={r} fill="none" stroke={p[i % 2 === 0 ? 2 : 1]} strokeWidth="0.5" opacity="0.2"
          animate={animated ? { rotate: i % 2 === 0 ? 360 : -360 } : undefined}
          transition={{ duration: 20 + i * 8, repeat: Infinity, ease: "linear" }}
          style={{ originX: "200px", originY: "200px" }} />
      ))}
      {/* Sacred text */}
      <text x="200" y="210" textAnchor="middle" fontFamily="serif" fontSize="22" fill={p[2]} opacity="0.4" filter={`url(#glow2-${id})`}>ॐ</text>
    </>
  );
}

function ParrotArt({ id, p, animated }: { id: string; p: [string,string,string,string]; animated: boolean }) {
  return (
    <>
      <Defs id={id} p={p} />
      <ellipse cx="200" cy="200" rx="190" ry="190" fill={`url(#rg-${id})`} />
      {/* Body */}
      <motion.ellipse cx="200" cy="210" rx="50" ry="70" fill="none" stroke={p[0]} strokeWidth="1.5" opacity="0.6"
        filter={`url(#glow-${id})`}
        animate={animated ? { scaleY: [1, 1.03, 1] } : undefined}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "200px", originY: "210px" }} />
      {/* Head */}
      <circle cx="200" cy="140" r="38" fill="none" stroke={p[0]} strokeWidth="1.5" opacity="0.6" />
      {/* Eye */}
      <motion.circle cx="188" cy="133" r="6" fill={p[2]} opacity="0.8" filter={`url(#glow-${id})`}
        animate={animated ? { scale: [1, 1.3, 1] } : undefined}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{ originX: "188px", originY: "133px" }} />
      {/* Beak */}
      <path d="M200 148 Q210 155 205 162" fill="none" stroke={p[2]} strokeWidth="1.5" opacity="0.7" />
      {/* Wing */}
      <path d="M150 200 Q130 230 145 270 Q170 260 185 240 Q175 220 165 210Z" fill="none" stroke={p[1]} strokeWidth="1" opacity="0.5" />
      {/* Tail feathers */}
      {[-20, 0, 20].map((offset, i) => (
        <motion.line key={i} x1={200 + offset} y1="280" x2={200 + offset * 1.5} y2="340"
          stroke={p[i === 1 ? 2 : 0]} strokeWidth="1.2" opacity="0.5"
          animate={animated ? { y2: [340, 350, 340] } : undefined}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }} />
      ))}
      {/* Sound waves from beak */}
      {[20, 35, 50].map((r, i) => (
        <motion.circle key={i} cx="215" cy="155" r={r} fill="none" stroke={p[2]} strokeWidth="0.5" opacity="0.2"
          animate={animated ? { r: [r, r + 15, r], opacity: [0.3, 0, 0.3] } : undefined}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.7 }} />
      ))}
      <text x="200" y="205" textAnchor="middle" fontFamily="serif" fontSize="16" fill={p[2]} opacity="0.3">शुक</text>
    </>
  );
}

function CrossroadsArt({ id, p, animated }: { id: string; p: [string,string,string,string]; animated: boolean }) {
  return (
    <>
      <Defs id={id} p={p} />
      <ellipse cx="200" cy="200" rx="190" ry="190" fill={`url(#rg-${id})`} />
      {/* Cross paths */}
      <line x1="200" y1="30" x2="200" y2="370" stroke={p[0]} strokeWidth="1" opacity="0.4" />
      <line x1="30" y1="200" x2="370" y2="200" stroke={p[0]} strokeWidth="1" opacity="0.4" />
      {/* Diagonal paths */}
      <motion.line x1="60" y1="60" x2="340" y2="340" stroke={p[1]} strokeWidth="0.6" opacity="0.25"
        animate={animated ? { opacity: [0.15, 0.35, 0.15] } : undefined}
        transition={{ duration: 4, repeat: Infinity }} />
      <motion.line x1="340" y1="60" x2="60" y2="340" stroke={p[1]} strokeWidth="0.6" opacity="0.25"
        animate={animated ? { opacity: [0.35, 0.15, 0.35] } : undefined}
        transition={{ duration: 4, repeat: Infinity }} />
      {/* Central node */}
      <motion.circle cx="200" cy="200" r="18" fill={p[2]} opacity="0.7" filter={`url(#glow2-${id})`}
        animate={animated ? { scale: [1, 1.3, 1] } : undefined}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ originX: "200px", originY: "200px" }} />
      <motion.circle cx="200" cy="200" r="35" fill="none" stroke={p[2]} strokeWidth="0.8" opacity="0.4"
        animate={animated ? { scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] } : undefined}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ originX: "200px", originY: "200px" }} />
      {/* Direction markers */}
      {[[200, 55], [200, 345], [55, 200], [345, 200]].map(([cx, cy], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r="8" fill={p[0]} opacity="0.5"
          animate={animated ? { opacity: [0.3, 0.7, 0.3] } : undefined}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }} />
      ))}
      <text x="200" y="205" textAnchor="middle" fontFamily="serif" fontSize="20" fill={p[3] === "#0a0a0f" ? "#fff" : p[3]} opacity="0.0">संधि</text>
    </>
  );
}

function YantraArt({ id, p, animated }: { id: string; p: [string,string,string,string]; animated: boolean }) {
  const half = 200;
  return (
    <>
      <Defs id={id} p={p} />
      <ellipse cx="200" cy="200" rx="190" ry="190" fill={`url(#rg-${id})`} />
      {/* Outer square */}
      <rect x="30" y="30" width="340" height="340" fill="none" stroke={p[0]} strokeWidth="0.8" opacity="0.3" />
      <rect x="50" y="50" width="300" height="300" fill="none" stroke={p[0]} strokeWidth="0.5" opacity="0.2" />
      {/* Circles */}
      {[140, 110, 80].map((r, i) => (
        <motion.circle key={i} cx="200" cy="200" r={r} fill="none" stroke={i % 2 === 0 ? p[0] : p[2]} strokeWidth="0.6" opacity={0.25 + i * 0.05}
          animate={animated ? { rotate: i % 2 === 0 ? 360 : -360 } : undefined}
          transition={{ duration: 25 + i * 10, repeat: Infinity, ease: "linear" }}
          style={{ originX: "200px", originY: "200px" }} />
      ))}
      {/* Upward triangle */}
      <motion.polygon points="200,72 315,252 85,252" fill="none" stroke={p[0]} strokeWidth="1" opacity="0.4" filter={`url(#glow-${id})`}
        animate={animated ? { opacity: [0.3, 0.6, 0.3] } : undefined}
        transition={{ duration: 4, repeat: Infinity }} />
      {/* Downward triangle */}
      <motion.polygon points="200,328 85,148 315,148" fill="none" stroke={p[2]} strokeWidth="1" opacity="0.4" filter={`url(#glow-${id})`}
        animate={animated ? { opacity: [0.6, 0.3, 0.6] } : undefined}
        transition={{ duration: 4, repeat: Infinity }} />
      {/* 8 lotus petals */}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * 45 * Math.PI) / 180;
        const x = 200 + Math.cos(a) * 95;
        const y = 200 + Math.sin(a) * 95;
        return <ellipse key={i} cx={x} cy={y} rx="14" ry="28" fill="none" stroke={p[1]} strokeWidth="0.5" opacity="0.2"
          transform={`rotate(${i * 45 + 90}, ${x}, ${y})`} />;
      })}
      {/* Bindu */}
      <motion.circle cx="200" cy="200" r="8" fill={p[2]} opacity="0.9" filter={`url(#glow2-${id})`}
        animate={animated ? { scale: [1, 1.6, 1], opacity: [0.7, 1, 0.7] } : undefined}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{ originX: "200px", originY: "200px" }} />
      <text x="200" y="205" textAnchor="middle" fontFamily="serif" fontSize="11" fill={p[2]} opacity="0.5">ॐ</text>
    </>
  );
}

function FlameArt({ id, p, animated }: { id: string; p: [string,string,string,string]; animated: boolean }) {
  return (
    <>
      <Defs id={id} p={p} />
      <ellipse cx="200" cy="200" rx="190" ry="190" fill={`url(#rg-${id})`} />
      {/* Flame paths */}
      {[
        "M200 320 Q175 260 185 200 Q190 150 200 100 Q210 150 215 200 Q225 260 200 320",
        "M200 320 Q155 255 160 195 Q165 140 185 90 Q195 140 205 195 Q215 255 200 320",
        "M200 320 Q240 260 238 198 Q235 142 218 88 Q208 140 200 200 Q195 255 200 320",
      ].map((d, i) => (
        <motion.path key={i} d={d} fill="none" stroke={i === 0 ? p[0] : i === 1 ? p[1] : p[2]}
          strokeWidth={i === 0 ? 2 : 1} opacity={i === 0 ? 0.7 : 0.4}
          filter={`url(#glow-${id})`}
          animate={animated ? { d: [
            d,
            d.replace("200 100", "195 90").replace("185 90", "180 85"),
            d,
          ] } : undefined}
          transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: "easeInOut" }} />
      ))}
      {/* Core glow */}
      <motion.ellipse cx="200" cy="300" rx="30" ry="12" fill={p[2]} opacity="0.3" filter={`url(#glow2-${id})`}
        animate={animated ? { opacity: [0.2, 0.5, 0.2] } : undefined}
        transition={{ duration: 2, repeat: Infinity }} />
      {/* Particles */}
      {[[-20, -60], [15, -100], [-10, -140], [20, -80], [-25, -110]].map(([dx, dy], i) => (
        <motion.circle key={i} cx={200 + dx} cy={200 + dy} r="3" fill={p[i % 2 === 0 ? 0 : 2]} opacity="0.5"
          animate={animated ? { cy: [200 + dy, 200 + dy - 30, 200 + dy], opacity: [0.5, 0, 0.5] } : undefined}
          transition={{ duration: 2 + i * 0.4, repeat: Infinity, delay: i * 0.3 }} />
      ))}
    </>
  );
}

function EyeArt({ id, p, animated }: { id: string; p: [string,string,string,string]; animated: boolean }) {
  return (
    <>
      <Defs id={id} p={p} />
      <ellipse cx="200" cy="200" rx="190" ry="190" fill={`url(#rg-${id})`} />
      {/* Eye outline */}
      <motion.path d="M60 200 Q130 110 200 105 Q270 110 340 200 Q270 290 200 295 Q130 290 60 200Z"
        fill="none" stroke={p[0]} strokeWidth="1.5" opacity="0.6" filter={`url(#glow-${id})`}
        animate={animated ? { d: [
          "M60 200 Q130 110 200 105 Q270 110 340 200 Q270 290 200 295 Q130 290 60 200Z",
          "M60 200 Q130 115 200 110 Q270 115 340 200 Q270 285 200 290 Q130 285 60 200Z",
          "M60 200 Q130 110 200 105 Q270 110 340 200 Q270 290 200 295 Q130 290 60 200Z",
        ] } : undefined}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
      {/* Iris */}
      <motion.circle cx="200" cy="200" r="60" fill="none" stroke={p[1]} strokeWidth="1" opacity="0.5"
        animate={animated ? { scale: [1, 1.05, 1] } : undefined}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ originX: "200px", originY: "200px" }} />
      <motion.circle cx="200" cy="200" r="40" fill="none" stroke={p[1]} strokeWidth="1.5" opacity="0.6" />
      {/* Pupil */}
      <motion.circle cx="200" cy="200" r="20" fill={p[0]} opacity="0.8" filter={`url(#glow2-${id})`}
        animate={animated ? { scale: [1, 0.8, 1] } : undefined}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ originX: "200px", originY: "200px" }} />
      {/* Third eye point */}
      <motion.circle cx="200" cy="200" r="6" fill={p[2]} opacity="1" filter={`url(#glow2-${id})`}
        animate={animated ? { scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] } : undefined}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ originX: "200px", originY: "200px" }} />
      {/* Lashes / rays */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 * Math.PI) / 180;
        return <motion.line key={i} x1={200 + Math.cos(a) * 75} y1={200 + Math.sin(a) * 75}
          x2={200 + Math.cos(a) * 95} y2={200 + Math.sin(a) * 95}
          stroke={p[2]} strokeWidth="0.8" opacity="0.3"
          animate={animated ? { opacity: [0.2, 0.5, 0.2] } : undefined}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }} />;
      })}
    </>
  );
}

function MoonArt({ id, p, animated }: { id: string; p: [string,string,string,string]; animated: boolean }) {
  return (
    <>
      <Defs id={id} p={p} />
      <ellipse cx="200" cy="200" rx="190" ry="190" fill={`url(#rg-${id})`} />
      {/* Star field */}
      {[[80, 80], [320, 90], [60, 310], [330, 300], [200, 50], [150, 330], [280, 180], [100, 160]].map(([x, y], i) => (
        <motion.circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 2.5 : 1.5} fill={p[2]} opacity="0.5"
          animate={animated ? { opacity: [0.3, 0.8, 0.3] } : undefined}
          transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.4 }} />
      ))}
      {/* Moon crescent */}
      <motion.circle cx="200" cy="200" r="90" fill="none" stroke={p[2]} strokeWidth="1.5" opacity="0.6"
        filter={`url(#glow-${id})`}
        animate={animated ? { opacity: [0.4, 0.8, 0.4] } : undefined}
        transition={{ duration: 5, repeat: Infinity }} />
      <circle cx="235" cy="200" r="80" fill={p[3]} opacity="0.95" />
      {/* Inner glow of visible crescent */}
      <motion.circle cx="185" cy="200" r="45" fill={p[2]} opacity="0.08" filter={`url(#glow2-${id})`}
        animate={animated ? { scale: [1, 1.1, 1] } : undefined}
        transition={{ duration: 4, repeat: Infinity }}
        style={{ originX: "185px", originY: "200px" }} />
      {/* Orbit ring */}
      <motion.circle cx="200" cy="200" r="130" fill="none" stroke={p[1]} strokeWidth="0.5" strokeDasharray="4 8" opacity="0.25"
        animate={animated ? { rotate: 360 } : undefined}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ originX: "200px", originY: "200px" }} />
      <text x="160" y="210" fontFamily="serif" fontSize="26" fill={p[2]} opacity="0.35" filter={`url(#glow-${id})`}>☽</text>
    </>
  );
}

function LotusArt({ id, p, animated }: { id: string; p: [string,string,string,string]; animated: boolean }) {
  const petals = 8;
  return (
    <>
      <Defs id={id} p={p} />
      <ellipse cx="200" cy="200" rx="190" ry="190" fill={`url(#rg-${id})`} />
      {/* Outer petals */}
      {Array.from({ length: petals }).map((_, i) => {
        const a = (i * 45 * Math.PI) / 180;
        const cx = 200 + Math.cos(a) * 80;
        const cy = 200 + Math.sin(a) * 80;
        return (
          <motion.ellipse key={i} cx={cx} cy={cy} rx="28" ry="55" fill="none"
            stroke={i % 2 === 0 ? p[0] : p[1]} strokeWidth="1" opacity="0.5"
            transform={`rotate(${i * 45 + 90}, ${cx}, ${cy})`}
            animate={animated ? { scale: [1, 1.04, 1] } : undefined}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.2 }}
            style={{ originX: `${cx}px`, originY: `${cy}px` }} />
        );
      })}
      {/* Inner petals */}
      {Array.from({ length: petals }).map((_, i) => {
        const a = ((i * 45 + 22.5) * Math.PI) / 180;
        const cx = 200 + Math.cos(a) * 48;
        const cy = 200 + Math.sin(a) * 48;
        return (
          <ellipse key={i} cx={cx} cy={cy} rx="18" ry="35" fill="none"
            stroke={p[2]} strokeWidth="0.8" opacity="0.35"
            transform={`rotate(${i * 45 + 22.5 + 90}, ${cx}, ${cy})`} />
        );
      })}
      {/* Center */}
      <motion.circle cx="200" cy="200" r="22" fill={p[2]} opacity="0.7" filter={`url(#glow2-${id})`}
        animate={animated ? { scale: [1, 1.15, 1] } : undefined}
        transition={{ duration: 4, repeat: Infinity }}
        style={{ originX: "200px", originY: "200px" }} />
      <circle cx="200" cy="200" r="8" fill={p[3]} opacity="0.5" />
      <text x="200" y="205" textAnchor="middle" fontFamily="serif" fontSize="11" fill={p[2]} opacity="0.4">ॐ</text>
    </>
  );
}

function SkullArt({ id, p, animated }: { id: string; p: [string,string,string,string]; animated: boolean }) {
  return (
    <>
      <Defs id={id} p={p} />
      <ellipse cx="200" cy="200" rx="190" ry="190" fill={`url(#rg-${id})`} />
      {/* Skull cup / vessel outline */}
      <motion.path d="M140 150 Q140 90 200 85 Q260 90 260 150 Q265 180 260 210 L140 210 Q135 180 140 150Z"
        fill="none" stroke={p[0]} strokeWidth="1.5" opacity="0.6" filter={`url(#glow-${id})`}
        animate={animated ? { opacity: [0.4, 0.8, 0.4] } : undefined}
        transition={{ duration: 4, repeat: Infinity }} />
      {/* Bowl base */}
      <motion.ellipse cx="200" cy="260" rx="65" ry="20" fill="none" stroke={p[0]} strokeWidth="1.2" opacity="0.5" />
      <line x1="135" y1="210" x2="140" y2="260" stroke={p[0]} strokeWidth="1" opacity="0.4" />
      <line x1="265" y1="210" x2="260" y2="260" stroke={p[0]} strokeWidth="1" opacity="0.4" />
      {/* Eye sockets */}
      <motion.ellipse cx="178" cy="160" rx="16" ry="18" fill="none" stroke={p[2]} strokeWidth="1" opacity="0.7"
        animate={animated ? { opacity: [0.5, 0.9, 0.5] } : undefined}
        transition={{ duration: 3, repeat: Infinity }} />
      <motion.ellipse cx="222" cy="160" rx="16" ry="18" fill="none" stroke={p[2]} strokeWidth="1" opacity="0.7"
        animate={animated ? { opacity: [0.9, 0.5, 0.9] } : undefined}
        transition={{ duration: 3, repeat: Infinity }} />
      {/* Contents glow */}
      <motion.ellipse cx="200" cy="230" rx="50" ry="18" fill={p[2]} opacity="0.12" filter={`url(#glow2-${id})`}
        animate={animated ? { opacity: [0.08, 0.2, 0.08] } : undefined}
        transition={{ duration: 3, repeat: Infinity }} />
      {/* Decorative rings */}
      {[90, 110, 130].map((r, i) => (
        <motion.circle key={i} cx="200" cy="200" r={r} fill="none" stroke={p[1]} strokeWidth="0.4" opacity="0.15"
          animate={animated ? { rotate: i % 2 === 0 ? 360 : -360 } : undefined}
          transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
          style={{ originX: "200px", originY: "200px" }} />
      ))}
      <text x="200" y="240" textAnchor="middle" fontFamily="serif" fontSize="14" fill={p[2]} opacity="0.35">उच्छिष्ट</text>
    </>
  );
}

function CrownArt({ id, p, animated }: { id: string; p: [string,string,string,string]; animated: boolean }) {
  return (
    <>
      <Defs id={id} p={p} />
      <ellipse cx="200" cy="200" rx="190" ry="190" fill={`url(#rg-${id})`} />
      {/* Crown shape */}
      <motion.path d="M100 260 L110 160 L160 210 L200 120 L240 210 L290 160 L300 260Z"
        fill="none" stroke={p[0]} strokeWidth="2" opacity="0.7" filter={`url(#glow-${id})`}
        animate={animated ? { opacity: [0.5, 0.9, 0.5] } : undefined}
        transition={{ duration: 3, repeat: Infinity }} />
      <line x1="100" y1="260" x2="300" y2="260" stroke={p[0]} strokeWidth="1.5" opacity="0.6" />
      {/* Crown gems */}
      {[[200, 120], [160, 210], [240, 210], [155, 260], [245, 260]].map(([cx, cy], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r="8" fill={i === 0 ? p[2] : p[1]} opacity="0.8"
          filter={`url(#glow-${id})`}
          animate={animated ? { scale: [1, 1.3, 1] } : undefined}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.4 }}
          style={{ originX: `${cx}px`, originY: `${cy}px` }} />
      ))}
      {/* Halo */}
      <motion.circle cx="200" cy="190" r="120" fill="none" stroke={p[2]} strokeWidth="0.8" strokeDasharray="3 6" opacity="0.2"
        animate={animated ? { rotate: 360 } : undefined}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ originX: "200px", originY: "190px" }} />
      <text x="200" y="295" textAnchor="middle" fontFamily="serif" fontSize="13" fill={p[2]} opacity="0.35">राज</text>
    </>
  );
}

function SerpentArt({ id, p, animated }: { id: string; p: [string,string,string,string]; animated: boolean }) {
  return (
    <>
      <Defs id={id} p={p} />
      <ellipse cx="200" cy="200" rx="190" ry="190" fill={`url(#rg-${id})`} />
      {/* Serpent coil paths */}
      {[
        "M200 300 Q280 270 290 200 Q280 130 200 100 Q120 130 110 200 Q120 270 200 300",
        "M200 290 Q270 260 278 200 Q270 140 200 110 Q130 140 122 200 Q130 260 200 290",
        "M200 280 Q260 255 265 200 Q260 148 200 123 Q142 148 135 200 Q142 255 200 280",
      ].map((d, i) => (
        <motion.path key={i} d={d} fill="none"
          stroke={i === 0 ? p[0] : i === 1 ? p[1] : p[2]}
          strokeWidth={i === 0 ? 2 : 1.2} opacity={0.6 - i * 0.1}
          animate={animated ? { rotate: i % 2 === 0 ? 5 : -5 } : undefined}
          transition={{ duration: 4 + i, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          style={{ originX: "200px", originY: "200px" }} />
      ))}
      {/* Head */}
      <motion.ellipse cx="200" cy="100" rx="18" ry="25" fill="none" stroke={p[0]} strokeWidth="1.5" opacity="0.7"
        filter={`url(#glow-${id})`} />
      {/* Eyes */}
      <circle cx="193" cy="95" r="4" fill={p[2]} opacity="0.8" />
      <circle cx="207" cy="95" r="4" fill={p[2]} opacity="0.8" />
      {/* Tongue */}
      <motion.path d="M200 115 L195 125 M200 115 L205 125" stroke={p[2]} strokeWidth="1" opacity="0.6"
        animate={animated ? { opacity: [0.3, 0.9, 0.3] } : undefined}
        transition={{ duration: 1, repeat: Infinity }} />
      {/* Energy center */}
      <motion.circle cx="200" cy="200" r="15" fill={p[2]} opacity="0.3" filter={`url(#glow2-${id})`}
        animate={animated ? { scale: [1, 1.5, 1] } : undefined}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ originX: "200px", originY: "200px" }} />
    </>
  );
}

function RiverArt({ id, p, animated }: { id: string; p: [string,string,string,string]; animated: boolean }) {
  return (
    <>
      <Defs id={id} p={p} />
      <ellipse cx="200" cy="200" rx="190" ry="190" fill={`url(#rg-${id})`} />
      {/* River flow lines */}
      {[
        { d: "M50 80 Q120 150 180 200 Q240 250 350 320", w: 1.5, c: p[0] },
        { d: "M60 90 Q130 155 190 200 Q248 248 360 316", w: 1, c: p[1] },
        { d: "M40 100 Q110 160 175 200 Q240 245 345 330", w: 0.8, c: p[2] },
        { d: "M70 70 Q140 145 200 200 Q255 255 360 325", w: 1.2, c: p[0] },
        { d: "M55 110 Q120 165 185 205 Q245 250 355 310", w: 0.6, c: p[1] },
      ].map((line, i) => (
        <motion.path key={i} d={line.d} fill="none" stroke={line.c} strokeWidth={line.w} opacity="0.4"
          animate={animated ? { pathLength: [0, 1, 0] } : undefined}
          transition={{ duration: 4 + i * 0.8, repeat: Infinity, delay: i * 0.6 }} />
      ))}
      {/* Reflection ripples */}
      {[[120, 160], [200, 200], [280, 240], [160, 250]].map(([cx, cy], i) => (
        <motion.ellipse key={i} cx={cx} cy={cy} rx="25" ry="8" fill="none" stroke={p[2]} strokeWidth="0.6" opacity="0.3"
          animate={animated ? { rx: [15, 35, 15], opacity: [0.3, 0, 0.3] } : undefined}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }} />
      ))}
      {/* Sound waves on water */}
      {[40, 60, 80].map((r, i) => (
        <motion.circle key={i} cx="200" cy="200" r={r} fill="none" stroke={p[0]} strokeWidth="0.5" opacity="0.2"
          animate={animated ? { r: [r, r + 20, r], opacity: [0.3, 0, 0.3] } : undefined}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }} />
      ))}
      <text x="200" y="205" textAnchor="middle" fontFamily="serif" fontSize="18" fill={p[2]} opacity="0.25">नाद</text>
    </>
  );
}

function TempleArt({ id, p, animated }: { id: string; p: [string,string,string,string]; animated: boolean }) {
  return (
    <>
      <Defs id={id} p={p} />
      <ellipse cx="200" cy="200" rx="190" ry="190" fill={`url(#rg-${id})`} />
      {/* Temple spire */}
      <motion.polygon points="200,50 230,120 250,130 230,140 230,270 170,270 170,140 150,130 170,120"
        fill="none" stroke={p[0]} strokeWidth="1.2" opacity="0.6" filter={`url(#glow-${id})`}
        animate={animated ? { opacity: [0.4, 0.8, 0.4] } : undefined}
        transition={{ duration: 4, repeat: Infinity }} />
      {/* Temple base */}
      <rect x="130" y="270" width="140" height="40" fill="none" stroke={p[0]} strokeWidth="1" opacity="0.5" />
      {/* Gate / door */}
      <motion.path d="M185 310 L185 270 Q200 255 215 270 L215 310Z"
        fill="none" stroke={p[2]} strokeWidth="1.2" opacity="0.7" filter={`url(#glow-${id})`}
        animate={animated ? { opacity: [0.5, 1, 0.5] } : undefined}
        transition={{ duration: 3, repeat: Infinity }} />
      {/* Steps */}
      {[290, 300, 310].map((y, i) => (
        <line key={i} x1={150 - i * 10} y1={y} x2={250 + i * 10} y2={y} stroke={p[1]} strokeWidth="0.8" opacity="0.3" />
      ))}
      {/* Flame atop spire */}
      <motion.path d="M200 50 Q192 35 196 20 Q200 30 204 20 Q208 35 200 50Z"
        fill={p[2]} opacity="0.7" filter={`url(#glow2-${id})`}
        animate={animated ? { d: ["M200 50 Q192 35 196 20 Q200 30 204 20 Q208 35 200 50Z",
          "M200 48 Q190 32 194 18 Q200 28 206 18 Q210 32 200 48Z", "M200 50 Q192 35 196 20 Q200 30 204 20 Q208 35 200 50Z"] } : undefined}
        transition={{ duration: 1.5, repeat: Infinity }} />
      {/* Halo ring */}
      <motion.circle cx="200" cy="150" r="100" fill="none" stroke={p[1]} strokeWidth="0.5" strokeDasharray="5 10" opacity="0.2"
        animate={animated ? { rotate: 360 } : undefined}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        style={{ originX: "200px", originY: "150px" }} />
    </>
  );
}

function VoidArt({ id, p, animated }: { id: string; p: [string,string,string,string]; animated: boolean }) {
  return (
    <>
      <Defs id={id} p={p} />
      <circle cx="200" cy="200" r="195" fill={`url(#rg-${id})`} />
      {/* Concentric void rings */}
      {[160, 125, 90, 55, 25].map((r, i) => (
        <motion.circle key={i} cx="200" cy="200" r={r} fill="none"
          stroke={i % 2 === 0 ? p[0] : p[1]} strokeWidth={i === 0 ? 0.5 : 0.4}
          opacity={0.15 + i * 0.03}
          animate={animated ? { scale: [1, 1.02, 1], opacity: [0.1 + i * 0.03, 0.2 + i * 0.04, 0.1 + i * 0.03] } : undefined}
          transition={{ duration: 5 + i * 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "200px", originY: "200px" }} />
      ))}
      {/* Floating Sanskrit/glyphs */}
      {["ॐ", "◈", "✦", "⟁", "ह्रीं"].map((g, i) => {
        const a = (i * 72 * Math.PI) / 180;
        const cx = 200 + Math.cos(a) * 90;
        const cy = 200 + Math.sin(a) * 90;
        return (
          <motion.text key={i} x={cx} y={cy} textAnchor="middle" fontFamily="serif"
            fontSize="14" fill={p[2]} opacity="0.3"
            animate={animated ? { opacity: [0.15, 0.45, 0.15] } : undefined}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.6 }}>
            {g}
          </motion.text>
        );
      })}
      {/* Central singularity */}
      <motion.circle cx="200" cy="200" r="12" fill={p[2]} opacity="0.6" filter={`url(#glow2-${id})`}
        animate={animated ? { scale: [1, 1.4, 1], opacity: [0.4, 0.9, 0.4] } : undefined}
        transition={{ duration: 4, repeat: Infinity }}
        style={{ originX: "200px", originY: "200px" }} />
      <motion.circle cx="200" cy="200" r="4" fill="white" opacity="0.8" />
    </>
  );
}

function ForestArt({ id, p, animated }: { id: string; p: [string,string,string,string]; animated: boolean }) {
  return (
    <>
      <Defs id={id} p={p} />
      <ellipse cx="200" cy="200" rx="190" ry="190" fill={`url(#rg-${id})`} />
      {/* Trees */}
      {[[100, 320], [150, 310], [200, 300], [250, 310], [300, 320]].map(([bx, by], i) => {
        const h = 120 + (i % 3) * 30;
        return (
          <g key={i}>
            <line x1={bx} y1={by} x2={bx} y2={by - h} stroke={p[0]} strokeWidth="2" opacity="0.5" />
            <motion.ellipse cx={bx} cy={by - h} rx={25 + (i % 3) * 8} ry={35 + (i % 3) * 10}
              fill="none" stroke={p[1]} strokeWidth="0.8" opacity="0.4"
              animate={animated ? { rx: [25 + (i % 3) * 8, 28 + (i % 3) * 8, 25 + (i % 3) * 8] } : undefined}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }} />
          </g>
        );
      })}
      {/* Forest floor / ground line */}
      <path d="M30 320 Q100 310 200 315 Q300 310 370 320" fill="none" stroke={p[0]} strokeWidth="1" opacity="0.3" />
      {/* Dappled light particles */}
      {[[120, 160], [180, 140], [240, 175], [280, 145], [160, 200]].map(([x, y], i) => (
        <motion.circle key={i} cx={x} cy={y} r="4" fill={p[2]} opacity="0.4" filter={`url(#glow-${id})`}
          animate={animated ? { opacity: [0.2, 0.6, 0.2], cy: [y, y - 8, y] } : undefined}
          transition={{ duration: 3 + i * 0.7, repeat: Infinity, delay: i * 0.5 }} />
      ))}
      {/* Central clearing glow */}
      <motion.ellipse cx="200" cy="240" rx="60" ry="30" fill={p[2]} opacity="0.06" filter={`url(#glow2-${id})`}
        animate={animated ? { opacity: [0.04, 0.12, 0.04] } : undefined}
        transition={{ duration: 5, repeat: Infinity }} />
    </>
  );
}

// ── Main component ────────────────────────────────────────────
export default function OracleArt({ artwork, size = 400, animated = true, className = "" }: Props) {
  const reactId = useId();
  const { variant, palette: p, motif } = artwork;
  // Clean ID — no colons, no special chars from React's useId
  const uid = `oa${reactId.replace(/[^a-zA-Z0-9]/g, "")}${variant.slice(0,3)}`;

  const artMap: Record<typeof variant, React.ReactNode> = {
    veena:      <VeenaArt     id={uid} p={p} animated={animated} />,
    parrot:     <ParrotArt    id={uid} p={p} animated={animated} />,
    crossroads: <CrossroadsArt id={uid} p={p} animated={animated} />,
    yantra:     <YantraArt    id={uid} p={p} animated={animated} />,
    crown:      <CrownArt     id={uid} p={p} animated={animated} />,
    flame:      <FlameArt     id={uid} p={p} animated={animated} />,
    river:      <RiverArt     id={uid} p={p} animated={animated} />,
    eye:        <EyeArt       id={uid} p={p} animated={animated} />,
    skull:      <SkullArt     id={uid} p={p} animated={animated} />,
    lotus:      <LotusArt     id={uid} p={p} animated={animated} />,
    serpent:    <SerpentArt   id={uid} p={p} animated={animated} />,
    moon:       <MoonArt      id={uid} p={p} animated={animated} />,
    forest:     <ForestArt    id={uid} p={p} animated={animated} />,
    temple:     <TempleArt    id={uid} p={p} animated={animated} />,
    void:       <VoidArt      id={uid} p={p} animated={animated} />,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {artMap[variant]}
    </svg>
  );
}
