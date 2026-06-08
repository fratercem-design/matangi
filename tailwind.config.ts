import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display:  ["Cormorant Garamond", "Georgia", "serif"],
        body:     ["Inter", "system-ui", "sans-serif"],
        mono:     ["IBM Plex Mono", "monospace"],
        devanagari: ["Noto Serif Devanagari", "serif"],
      },
      colors: {
        obsidian:  { DEFAULT: "#0a0a0f", 50: "#f5f5f7", 100: "#e8e8ed", 200: "#c4c4cf", 300: "#8f8fa0", 400: "#5a5a6e", 500: "#3a3a50", 600: "#252535", 700: "#18181f", 800: "#12121a", 900: "#0a0a0f" },
        emerald:   { DEFAULT: "#2d6a4f", 50: "#f0faf4", 100: "#d8f3e3", 200: "#a8e4c4", 300: "#6dcca0", 400: "#3db57d", 500: "#2d9660", 600: "#2d7a50", 700: "#256040", 800: "#1e4d33", 900: "#163d28", 950: "#0c2419" },
        gold:      { DEFAULT: "#b8962e", 50: "#fffbf0", 100: "#fef3d0", 200: "#fde59f", 300: "#fcd06a", 400: "#f9b938", 500: "#e89f1e", 600: "#c97f12", 700: "#a85e10", 800: "#8a4a12", 900: "#6e3a11" },
        violet:    { DEFAULT: "#6b46c1", 50: "#f5f0ff", 100: "#ede8ff", 200: "#d9d0ff", 300: "#bfb0ff", 400: "#a085ff", 500: "#8360f8", 600: "#6b46c1", 700: "#5a36a8", 800: "#4a2d8a", 900: "#3a2268" },
        midnight:  { DEFAULT: "#0f1729", 50: "#eef2ff", 100: "#d4dcff", 200: "#a9b8ff", 300: "#7a8eff", 400: "#4d64ff", 500: "#2a3dff", 600: "#1a2be8", 700: "#1420c0", 800: "#0f1890", 900: "#0a1063" },
        ivory:     { DEFAULT: "#f5f0e8", 50: "#fdfcfa", 100: "#faf8f3", 200: "#f5f0e8", 300: "#ede4d0", 400: "#e0d0b0", 500: "#cebc90" },
      },
      backgroundImage: {
        "radial-emerald": "radial-gradient(ellipse at center, rgba(45,106,79,0.15) 0%, transparent 70%)",
        "radial-gold":    "radial-gradient(ellipse at center, rgba(184,150,46,0.1) 0%, transparent 70%)",
        "gradient-temple":"linear-gradient(180deg, #0a0a0f 0%, #0c1a12 30%, #0a0a0f 60%, #100d1a 100%)",
      },
      animation: {
        "float":       "float 6s ease-in-out infinite",
        "float-slow":  "float 10s ease-in-out infinite",
        "glow-pulse":  "glowPulse 3s ease-in-out infinite",
        "ink-reveal":  "inkReveal 1.4s cubic-bezier(0.22,1,0.36,1) forwards",
        "shimmer":     "shimmer 2.5s linear infinite",
        "breathe":     "breathe 5s ease-in-out infinite",
        "spin-slow":   "spin 20s linear infinite",
        "drift":       "drift 8s ease-in-out infinite",
      },
      keyframes: {
        float:      { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-12px)" } },
        glowPulse:  { "0%,100%": { opacity: "0.5", filter: "blur(4px)" }, "50%": { opacity: "1", filter: "blur(2px)" } },
        inkReveal:  { from: { clipPath: "inset(0 100% 0 0)" }, to: { clipPath: "inset(0 0% 0 0)" } },
        shimmer:    { "0%": { backgroundPosition: "-200% center" }, "100%": { backgroundPosition: "200% center" } },
        breathe:    { "0%,100%": { transform: "scale(1)", opacity: "0.7" }, "50%": { transform: "scale(1.04)", opacity: "1" } },
        drift:      { "0%,100%": { transform: "translate(0,0) rotate(0deg)" }, "33%": { transform: "translate(6px,-8px) rotate(1deg)" }, "66%": { transform: "translate(-4px,4px) rotate(-1deg)" } },
      },
      boxShadow: {
        "emerald-glow": "0 0 40px rgba(45,106,79,0.3), 0 0 80px rgba(45,106,79,0.1)",
        "gold-glow":    "0 0 30px rgba(184,150,46,0.4), 0 0 60px rgba(184,150,46,0.15)",
        "violet-glow":  "0 0 30px rgba(107,70,193,0.3)",
        "inner-glow":   "inset 0 0 40px rgba(45,106,79,0.08)",
        "temple":       "0 0 0 1px rgba(184,150,46,0.1), 0 8px 32px rgba(0,0,0,0.6), 0 0 80px rgba(45,106,79,0.05)",
        "card":         "0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
