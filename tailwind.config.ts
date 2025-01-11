import type {Config} from "tailwindcss";

export default {
    darkMode: ["class"],
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                primaryBorderColor: 'var(--primary-border-color)',
                secondaryBorderColor: 'var(--secondary-border-color)',
                inactiveBorderColor: 'var(--inactive-border-color)',
                accentBorderColor: 'var(--accent-border-color)',
                errorBorderColor: 'var(--error-border-color)',
                primaryBackgroundColor: 'var(--primary-background-color)',
                secondaryBackgroundColor: 'var(--secondary-background-color)',
                inactiveBackgroundColor: 'var(--inactive-background-color)',
                accentBackgroundColor: 'var(--accent-background-color)',
                errorBackgroundColor: 'var(--error-background-color)',
                primaryColor: 'var(--primary-color)',
                secondaryColor: 'var(--secondary-color)',
                inactiveColor: 'var(--inactive-color)',
                accentColor: 'var(--accent-color)',
                errorColor: 'var(--error-color)',

                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            backgroundImage: {
                'starry-sky': 'url("/svg/bg.svg")'
            },
            boxShadow: {
                'glow-blue': '0 0 20px rgba(0, 123, 255, 0.6)'
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
