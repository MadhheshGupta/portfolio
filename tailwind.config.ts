import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
        },
        accent: "var(--color-accent)",
        surface: {
          DEFAULT: "var(--color-surface)",
        },
        foreground: "var(--color-text-primary)",
        muted: "var(--color-text-secondary)",
        success: "var(--color-success)",
        error: "var(--color-error)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      fontSize: {
        h1: ["4.5rem", { lineHeight: "1.05", fontWeight: "700" }],
        h2: ["2.25rem", { lineHeight: "1.2", fontWeight: "600" }],
        h3: ["1.5rem", { lineHeight: "1.35", fontWeight: "500" }],
        body: ["1.125rem", { lineHeight: "1.7" }],
      },
      boxShadow: {
        glow: "0 0 32px -4px rgba(99, 102, 241, 0.45), 0 0 12px -2px rgba(34, 211, 238, 0.2)",
        "glow-sm": "0 0 20px rgba(99, 102, 241, 0.35)",
        "glow-cyan": "0 0 28px rgba(34, 211, 238, 0.25)",
        "glow-card": "0 0 40px -8px rgba(99, 102, 241, 0.4)",
        neon: "0 0 20px rgba(99, 102, 241, 0.5), inset 0 0 0 1px rgba(99, 102, 241, 0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" },
          "50%": { opacity: "0.9", boxShadow: "0 0 32px rgba(34, 211, 238, 0.35)" },
        },
        mesh: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(2%, -2%) scale(1.02)" },
          "66%": { transform: "translate(-1%, 1%) scale(0.99)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.65s ease-out forwards",
        float: "float 5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        mesh: "mesh 18s ease-in-out infinite",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
