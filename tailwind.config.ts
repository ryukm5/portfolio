import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand navy — used for the top bar / accents
        navy: {
          // セクション背景（ページ本体）— 濃い黒に近いネイビー
          DEFAULT: "#0a0a1a",
          50: "#eef1f8",
          100: "#d3daed",
          600: "#0c1c50",
          700: "#08143b",
          800: "#060f2c",
          900: "#040a1e",
          // トップバー用 — rgb(10 30 85) = #0a1e55
          bar: "#0a1e55",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
