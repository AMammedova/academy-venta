import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        black: {
          500: "#4F5665",
          600: "#0B132A",
        },
        orange: {
          50: "#FFF5F5",
          100: "#FFECEC",
          200: "#FED7D7",
          300: "#FDB2B2",
          400: "#FC8181",
          // 500: "#E41A5E",
          500: "#E41A5E",
        },
        green: {
          100: "#dcfce7", // Added for bg-green-100
          500: "#2FAB73",
          600: "#16a34a", // Added for text-green-600
        },
        white: {
          300: "#F8F8F8",
          500: "#fff",
        },
        gray: {
          100: "#EEEFF2",
          400: "#AFB5C0",
          500: "#DDDDDD",
          600: "#4b5563", // Added for text-gray-600
        },
        red: {
          500: "#eb4034",
        },
        blue: {
          100: "#dbeafe", // Added for bg-blue-100
          200: "#bfdbfe", // Added for hover:bg-blue-200
          600: "#2563eb", // Added for text-blue-600
        },
        purple: {
          100: "#f3e8ff", // Added for bg-purple-100
          200: "#e9d5ff", // Added for hover:bg-purple-200
          600: "#9333ea", // Added for text-purple-600
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
        rubik: ["var(--font-rubik)"],
        roboto: ["var(--font-roboto)"],
      },
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)", // Added for shadow-2xl
      t: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      orange: "0px 20px 20px -15px rgba(245,56,56,0.81)",
      "orange-md": "0px 20px 40px -15px rgba(245,56,56,0.81)",
      none: "none",
    },
  },
  variants: {
    extend: {
      boxShadow: ["active", "hover"],
    },
  },
  plugins: [],
};

export default config;
