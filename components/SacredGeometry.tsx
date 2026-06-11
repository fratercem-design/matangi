"use client";
import { useId } from "react";
import { motion } from "framer-motion";

interface Props {
  size?: number;
  className?: string;
  variant?: "yantra" | "lotus" | "sri" | "minimal";
  animated?: boolean;
  color?: string;
}

export default function SacredGeometry({
  size = 200,
  className = "",
  variant = "yantra",
  animated = true,
  color = "#b8962e",
}: Props) {
  const c = color;
  const half = size / 2;
  // useId: unique gradient id per instance — same-size instances on one page
  // previously collided on `rg-${size}` and could render the wrong gradient
  const uid = useId();

  if (variant === "lotus") {
    const petals = 8;
    return (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={className} aria-hidden="true">
        {Array.from({ length: petals }).map((_, i) => {
          const angle = (i * 360) / petals;
          const rad = (angle * Math.PI) / 180;
          const px = half + Math.cos(rad) * (half * 0.38);
          const py = half + Math.sin(rad) * (half * 0.38);
          return (
            <motion.ellipse
              key={i}
              cx={px} cy={py} rx={half * 0.22} ry={half * 0.38}
              fill="none" stroke={c} strokeWidth="0.6" opacity="0.35"
              transform={`rotate(${angle}, ${px}, ${py})`}
              animate={animated ? { opacity: [0.2, 0.45, 0.2] } : undefined}
              transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
            />
          );
        })}
        <circle cx={half} cy={half} r={half * 0.15} fill="none" stroke={c} strokeWidth="0.8" opacity="0.6" />
        <circle cx={half} cy={half} r={half * 0.04} fill={c} opacity="0.7" />
      </svg>
    );
  }

  if (variant === "minimal") {
    return (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={className} aria-hidden="true">
        <motion.circle cx={half} cy={half} r={half * 0.92} fill="none" stroke={c} strokeWidth="0.5" opacity="0.2"
          animate={animated ? { rotate: 360 } : undefined}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ originX: `${half}px`, originY: `${half}px` }}
        />
        <circle cx={half} cy={half} r={half * 0.65} fill="none" stroke={c} strokeWidth="0.4" opacity="0.15" />
        <motion.polygon
          points={`${half},${half * 0.18} ${half * 1.72},${half * 1.45} ${half * 0.28},${half * 1.45}`}
          fill="none" stroke={c} strokeWidth="0.6" opacity="0.25"
          animate={animated ? { opacity: [0.15, 0.35, 0.15] } : undefined}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.polygon
          points={`${half},${half * 1.82} ${half * 1.72},${half * 0.55} ${half * 0.28},${half * 0.55}`}
          fill="none" stroke={c} strokeWidth="0.6" opacity="0.25"
          animate={animated ? { opacity: [0.35, 0.15, 0.35] } : undefined}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <circle cx={half} cy={half} r={half * 0.06} fill={c} opacity="0.6" />
      </svg>
    );
  }

  // Default yantra
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={className} aria-hidden="true">
      <defs>
        <radialGradient id={`rg-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={c} stopOpacity="0.15" />
          <stop offset="100%" stopColor={c} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx={half} cy={half} r={half * 0.95} fill={`url(#rg-${uid})`} />
      {[0.92, 0.72, 0.52].map((r, i) => (
        <motion.circle key={i} cx={half} cy={half} r={half * r}
          fill="none" stroke={c} strokeWidth="0.5" opacity={0.15 + i * 0.05}
          animate={animated ? { rotate: i % 2 === 0 ? 360 : -360 } : undefined}
          transition={{ duration: 25 + i * 8, repeat: Infinity, ease: "linear" }}
          style={{ originX: `${half}px`, originY: `${half}px` }}
        />
      ))}
      {/* Upward triangle */}
      <motion.polygon
        points={`${half},${half * 0.15} ${half * 1.78},${half * 1.55} ${half * 0.22},${half * 1.55}`}
        fill="none" stroke={c} strokeWidth="0.7" opacity="0.3"
        animate={animated ? { opacity: [0.2, 0.4, 0.2] } : undefined}
        transition={{ duration: 3.5, repeat: Infinity }}
      />
      {/* Downward triangle */}
      <motion.polygon
        points={`${half},${half * 1.85} ${half * 1.78},${half * 0.45} ${half * 0.22},${half * 0.45}`}
        fill="none" stroke={c} strokeWidth="0.7" opacity="0.3"
        animate={animated ? { opacity: [0.4, 0.2, 0.4] } : undefined}
        transition={{ duration: 3.5, repeat: Infinity }}
      />
      {/* Lotus petals */}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * 45 * Math.PI) / 180;
        const x = half + Math.cos(a) * half * 0.7;
        const y = half + Math.sin(a) * half * 0.7;
        return (
          <ellipse key={i} cx={x} cy={y} rx={half * 0.12} ry={half * 0.22}
            fill="none" stroke={c} strokeWidth="0.4" opacity="0.2"
            transform={`rotate(${i * 45}, ${x}, ${y})`}
          />
        );
      })}
      {/* Bindu */}
      <motion.circle cx={half} cy={half} r={half * 0.04} fill={c} opacity="0.8"
        animate={animated ? { scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] } : undefined}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{ originX: `${half}px`, originY: `${half}px` }}
      />
    </svg>
  );
}
