import type {Config} from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primaryBorderColor: "var(--primary-border-color)",
        secondaryBorderColor: "var(--secondary-border-color)",
        inactiveBorderColor: "var(--inactive-border-color)",
        accentBorderColor: "var(--accent-border-color)",
        errorBorderColor: "var(--error-border-color)",

        primaryBackgroundColor: "var(--primary-background-color)",
        secondaryBackgroundColor: "var(--secondary-background-color)",
        inactiveBackgroundColor: "var(--inactive-background-color)",
        accentBackgroundColor: "var(--accent-background-color)",
        errorBackgroundColor: "var(--error-background-color)",

        primaryColor: "var(--primary-color)",
        secondaryColor: "var(--secondary-color)",
        inactiveColor: "var(--inactive-color)",
        accentColor: "var(--accent-color)",
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
