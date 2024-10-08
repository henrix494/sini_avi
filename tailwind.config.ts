import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: { "main-bg": "#381f28", alt: "#f6c42b", "alt-bg": "#fafafa" },
  },
  plugins: [],
};
export default config;
