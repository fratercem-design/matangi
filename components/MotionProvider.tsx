"use client";
import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

// Honors the user's prefers-reduced-motion setting for all Framer Motion
// animations (transforms/layout are skipped; opacity still resolves, so
// initial:{opacity:0} content always becomes visible).
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
