import {useEffect, useState} from "react";

export function useTheme() {
    const [theme, setTheme] = useState(() => {
        // Get the theme from localStorage or default to "light"
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || "light";
        }
        return "light";
    });

    useEffect(() => {
        // Apply the theme to the document
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return {theme, toggleTheme};
}
