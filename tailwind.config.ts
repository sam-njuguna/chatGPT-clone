import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        man: "var(--man)",
        syne: "var(--syne)",
      },
      screens: {
        mobile: "450px",
      },
      colors: {
        "primary-blue": {
          DEFAULT: "#5928e5",
          100: "#0057FA",
        },
        "primary-white": {
          DEFAULT: "#F9EAFF",
        },
      },
    },
  },
  plugins: [],
};
export default config;
