import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        white: "#FFFFFF",

        blue: {
          100: "#7EA4D7",
          200: "#2C85FC",
          300: "#2266C1",
          400: "#0D284C",
        },

        cyan: {
          100: "#2DEBFC",
          200: "#187D86",
          300: "#0E474C",
        },

        gray: {
          100: "#E9EAEC",
          200: "#D3D5D9",
          300: "#93979E",
          400: "#20242C",
          500: "#16181D",
          600: "#14161A",
          700: "#101216",
          800: "#0B0C0F",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        caption: ["PT Sans Caption", "sans-serif"],
      },
      fontSize: {
        // Headings - PT Sans Caption
        "heading-hg": ["48px", { lineHeight: "120%", fontWeight: "700" }],
        "heading-xl": ["32px", { lineHeight: "120%", fontWeight: "700" }],
        "heading-lg": ["28px", { lineHeight: "120%", fontWeight: "700" }],
        "heading-md": ["24px", { lineHeight: "120%", fontWeight: "700" }],
        "heading-sm": ["20px", { lineHeight: "120%", fontWeight: "700" }],
        "heading-xs": ["16px", { lineHeight: "120%", fontWeight: "700" }],

        // Body - Inter
        "body-md": ["16px", { lineHeight: "150%", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "150%", fontWeight: "400" }],
        "body-xs": ["12px", { lineHeight: "150%", fontWeight: "400" }],

        // Body  - Tag
        "body-tag": ["12px", { lineHeight: "100%", fontWeight: "500" }],

        // Action - Inter
        "action-md": ["16px", { lineHeight: "normal", fontWeight: "500" }],
        "action-sm": ["14px", { lineHeight: "normal", fontWeight: "500" }],
      },
      backgroundImage: {
        "call-to-action": "url('/bg-call-to-action.svg')",
        support: "url('/bg-support.svg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
