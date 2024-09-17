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
        businessDesign: "linear-gradient(to bottom, #071e41, #11448d);",
        businessDev: "linear-gradient(to bottom, #032718 22%, #0d603d);",
        businessMarketing: "linear-gradient(to bottom, #2f0605, #6f0b0b);",
      },
      backgroundSize: {
        "100%": "100%",
      },
      backgroundPosition: {
        fix: "0px",
        businessRight: "-450px",
        company: "0 -15px",
      },
      animation: {
        slideIn: "slideIn 0.7s ease forwards",
        slideInRight: "slideInRight 0.7s ease forwards",
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
        slideInRight: {
          from: {
            transform: "translateX(130%)",
            opacity: "0%",
          },
          to: {
            transform: "translateX(0)",
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
