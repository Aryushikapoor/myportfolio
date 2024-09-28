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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'light-lemon': '#FFFDEA', // Add light lemon color
        'lightblue': {
          700: '#A2D2FF', // Add light blue color with shade
        },
        'lightgreen': {
          800: '#D9ED92', // Add light green color with shade
        },
      },
    },
  },
  plugins: [],
};

export default config;
