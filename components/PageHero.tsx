"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import SacredGeometry from "./SacredGeometry";

interface Props {
  label?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  children?: ReactNode;
  variant?: "emerald" | "gold" | "violet" | "midnight";
  geometry?: boolean;
}

const gradients = {
  emerald:  "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(45,106,79,0.18) 0%, transparent 70%)",
  gold:     "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(184,150,46,0.14) 0%, transparent 70%)",
  violet:   "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(107,70,193,0.16) 0%, transparent 70%)",
  midnight: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(15,23,41,0.6) 0%, transparent 70%)",
};

export default function PageHero({
  label,
  title,
  titleAccent,
  subtitle,
  children,
  variant = "emerald",
  geometry = true,
}: Props) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: gradients[variant] }} />
      {geometry && (
        <div className="absolute right-8 top-16 md:right-20 opacity-20 pointer-events-none hidden md:block">
          <SacredGeometry size={220} variant="minimal" color={variant === "gold" ? "#b8962e" : variant === "violet" ? "#6b46c1" : "#2d6a4f"} />
        </div>
      )}
      <div className="section-container relative z-10 text-center">
        {label && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-label text-gold/60 mb-5"
          >
            {label}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-display-xl text-ivory/90 mb-6"
        >
          {title}
          {titleAccent && (
            <>
              {" "}
              <span className="text-shimmer italic">{titleAccent}</span>
            </>
          )}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-display text-xl text-ivory/50 italic max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
