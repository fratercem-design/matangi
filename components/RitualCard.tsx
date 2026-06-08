"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  variant?: "default" | "emerald" | "gold" | "violet" | "parchment";
  className?: string;
  hover?: boolean;
  glow?: boolean;
  delay?: number;
}

const variants = {
  default:   "glass",
  emerald:   "glass-emerald",
  gold:      "glass-gold",
  violet:    "bg-[rgba(107,70,193,0.06)] border border-violet-500/20 backdrop-blur-sm",
  parchment: "card-parchment",
};

const glowVariants = {
  default:   "",
  emerald:   "hover:box-glow-emerald",
  gold:      "hover:box-glow-gold",
  violet:    "hover:shadow-violet-glow",
  parchment: "hover:border-gold/25",
};

export default function RitualCard({
  title,
  subtitle,
  children,
  variant = "parchment",
  className = "",
  hover = true,
  glow = true,
  delay = 0,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`
        rounded-sm p-6 md:p-8 transition-all duration-500
        ${variants[variant]}
        ${glow ? glowVariants[variant] : ""}
        ${hover ? "cursor-default" : ""}
        ${className}
      `}
    >
      {title && (
        <div className="mb-4">
          {subtitle && (
            <p className="text-label text-gold/50 mb-2">{subtitle}</p>
          )}
          <h3 className="font-display text-xl text-ivory/90">{title}</h3>
        </div>
      )}
      {children}
    </motion.div>
  );
}
