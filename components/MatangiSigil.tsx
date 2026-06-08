"use client";
import { motion } from "framer-motion";

export default function MatangiSigil({ size = 220, className = "" }: { size?: number; className?: string }) {
  return (
    <motion.svg width={size} height={size} viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"
      className={className} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}>
      <defs>
        <filter id="sc"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="sm"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="sg"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>

      <motion.circle cx="110" cy="110" r="100" fill="none" stroke="#00e5ff" strokeWidth="0.5" opacity="0.25"
        animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{ originX: "110px", originY: "110px" }} />
      <motion.circle cx="110" cy="110" r="78" fill="none" stroke="#ff00cc" strokeWidth="0.4" opacity="0.3" strokeDasharray="4 8"
        animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ originX: "110px", originY: "110px" }} />
      <circle cx="110" cy="110" r="56" fill="none" stroke="#00e5ff" strokeWidth="0.5" opacity="0.2" />

      <motion.polygon points="110,22 190,162 30,162" fill="none" stroke="#00e5ff" strokeWidth="0.8" opacity="0.45" filter="url(#sc)"
        animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity }} />
      <motion.polygon points="110,198 30,58 190,58" fill="none" stroke="#ff00cc" strokeWidth="0.8" opacity="0.45" filter="url(#sm)"
        animate={{ opacity: [0.6, 0.3, 0.6] }} transition={{ duration: 4, repeat: Infinity }} />

      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * 45 * Math.PI) / 180;
        return <line key={i} x1="110" y1="110" x2={110 + Math.cos(a) * 95} y2={110 + Math.sin(a) * 95}
          stroke="#00e5ff" strokeWidth="0.3" opacity="0.12" />;
      })}

      {[-20, -8, 4, 16].map((o, i) => (
        <line key={i} x1={110 + o} y1="50" x2={110 + o} y2="170" stroke="#00cc44" strokeWidth="0.4" opacity="0.25" />
      ))}

      <motion.circle cx="110" cy="110" r="5" fill="#ff00cc" filter="url(#sm)"
        animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity }} style={{ originX: "110px", originY: "110px" }} />
      <circle cx="110" cy="110" r="12" fill="none" stroke="#ff00cc" strokeWidth="0.5" opacity="0.35" />
      <text x="110" y="115" textAnchor="middle" fontFamily="serif" fontSize="10" fill="#00e5ff" opacity="0.5">ॐ</text>
      <text x="110" y="16"  textAnchor="middle" fontFamily="serif" fontSize="8" fill="#ff00cc" opacity="0.4">ह्रीं</text>
      <text x="200" y="115" textAnchor="middle" fontFamily="serif" fontSize="8" fill="#ff00cc" opacity="0.4">ऐं</text>
      <text x="110" y="214" textAnchor="middle" fontFamily="serif" fontSize="8" fill="#ff00cc" opacity="0.4">श्रीं</text>
      <text x="18"  y="115" textAnchor="middle" fontFamily="serif" fontSize="8" fill="#ff00cc" opacity="0.4">क्लीं</text>
    </motion.svg>
  );
}
