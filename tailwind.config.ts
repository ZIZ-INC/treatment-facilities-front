import type {Config} from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBorderColor: "var(--primary-border-color)",
        secondaryBorderColor: "var(--secondary-border-color)",
        inactiveBorderColor: "var(--inactive-border-color)",
        primaryBackgroundColor: "var(--primary-background-color)",
        secondaryBackgroundColor: "var(--secondary-background-color)",
        inactiveBackgroundColor: "var(--inactive-background-color)",
        buttonBackgroundColor: "var(--button-background)",
        primaryColor: "var(--primary-color)",
        secondaryColor: "var(--secondary-color)",
        accentColor: "var(--accent-color)",
        inactiveColor: "var(--inactive-color)",
        errorColor: "var(--error-color)",
      },
      backgroundImage: {
        "starry-sky": 'url("/svg/bg.svg")',
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(0, 123, 255, 0.6)", // Customize this to your liking
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
