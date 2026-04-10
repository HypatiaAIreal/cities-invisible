import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a12",
        foreground: "#d4d0cb",
        gold: "#c4a35a",
        "gold-dim": "#9a7d3a",
        parchment: "#d4d0cb",
        ink: "#0a0a12",
        memory: "#e8a849",
        desire: "#c75d5d",
        signs: "#8a9bb5",
        subtle: "#5ab4a0",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["IBM Plex Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 2s ease-out forwards",
        "fade-in-slow": "fadeIn 3s ease-out forwards",
        "pulse-gentle": "pulseGentle 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "slide-up": "slideUp 300ms ease-out forwards",
        "slide-up-full": "slideUpFull 300ms ease-out forwards",
        "slide-in-right": "slideInRight 300ms ease-out forwards",
        "breathe": "breathe 3.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseGentle: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(1.5rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUpFull: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
