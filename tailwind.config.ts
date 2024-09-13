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
        business1: "url(/business/banner-l.webp)",
        businessShadow:
          "linear-gradient(95deg, #080808 -19%, rgba(8, 8, 8, 0) 93%);",
      },
      backgroundSize: {
        "100%": "100%",
      },
      backgroundPosition: {
        fix: "0px",
        businessRight: "-450px",
      },
      animation: {
        slideIn: "slideIn 0.7s ease",
        fadeIn: "fadeIn 0.7s linear 0.7s forwards",
      },
      keyframes: {
        slideIn: {
          from: {
            transform: "translateY(130%)",
            opacity: "0%",
          },
          to: {
            transform: "translateY(0)",
            opacity: "100%",
          },
        },
        fadeIn: {
          from: {
            opacity: "0%",
          },
          to: {
            opacity: "100%",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
