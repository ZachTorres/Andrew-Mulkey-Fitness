import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'uga-red': '#BA0C2F',
        'uga-black': '#000000',
        'uga-silver': '#A6AAAB',
        'uga-arch-black': '#231F20',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
