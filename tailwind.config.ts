import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        hind: "var(--hind)",
        outfit: "var(--outfit)",
      },
      screens: {
        tablet: "1020px",
      },
      colors: {
        "p-blue": {
          DEFAULT: "#3c46ff",
          100: "#0000ff",
        },
        "theme-color": {
          dark: "#d292ff",
          light: "#fe7600",
        },
        "focus-color": {
          green: "#10a37f",
          light: "#fe7600",
        },
        citation: {
          DEFAULT: "#1f243c",
        },
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        "hero-bg": "url('/hero-bg.png')",
      },
    },
  },
  plugins: [],
};
export default config;
