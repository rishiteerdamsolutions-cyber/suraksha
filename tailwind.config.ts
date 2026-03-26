import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0B3C5D",
          accent: "#C9A14A",
          soft: "#EAF2F7"
        }
      },
      boxShadow: {
        premium: "0 10px 30px rgba(11, 60, 93, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
