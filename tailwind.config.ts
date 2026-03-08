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
        // Rojo institucional
        brand: {
          50:  "#fef2f2",
          100: "#fde0e0",
          200: "#fbbfbf",
          300: "#f89090",
          400: "#f35555",
          500: "#e82828",
          600: "#cc1111",   // rojo principal
          700: "#a80e0e",
          800: "#8b0f0f",
          900: "#731313",
          950: "#3f0505",
        },
        // Azul marino institucional
        navy: {
          50:  "#f0f4f9",
          100: "#dce5f0",
          200: "#b9cce0",
          300: "#8aaac9",
          400: "#5a87b2",
          500: "#3a6898",
          600: "#2c537f",
          700: "#1e3d66",   // azul marino principal
          800: "#162e4d",
          900: "#0f1f36",
          950: "#07111f",
        },
        // Gris neutro para texto y fondos
        gray: {
          50:  "#f9f9f9",
          100: "#f0f0f0",
          200: "#e4e4e4",
          300: "#d0d0d0",
          400: "#a8a8a8",
          500: "#808080",
          600: "#606060",
          700: "#484848",
          800: "#303030",
          900: "#1c1c1c",
          950: "#0e0e0e",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
