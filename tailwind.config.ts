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
        orbitron: ["Orbitron", "monospace"],
        space:    ["Space Grotesk", "sans-serif"],
        ritual:   ["Cormorant Garamond", "Georgia", "serif"],
        mono:     ["IBM Plex Mono", "monospace"],
      },
      colors: {
        void:        "#05010a",
        "deep-void": "#12001f",
        emerald:     "#00cc44",
        cyan:        "#00e5ff",
        magenta:     "#ff00cc",
        "pink-haze": "#ffb6e6",
        "crt-blue":  "#6fa8ff",
      },
    },
  },
  plugins: [],
};

export default config;
