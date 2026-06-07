import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#09090B",
        gold: "#C9A44C",
        navy: "#101828",
        porcelain: "#F7F7F4"
      },
      boxShadow: {
        luxe: "0 24px 80px rgba(9, 9, 11, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
