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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        toggle: "url(/menu-toggle.png)",
        toggleBusiness: "url(/menu-toggle@2x.png)",
      },
      backgroundSize: {
        "100%": "100%",
      },
      backgroundPosition: {
        right: "-11rem",
      },
    },
  },
  plugins: [],
};
export default config;
