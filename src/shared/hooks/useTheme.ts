import { useEffect, useState } from "react";

export function useTheme() {
    const [theme, setTheme] = useState<"light" | "dark">("light"); // Default to "light"
    const [mounted, setMounted] = useState(false); // Track client-side mount

    // Load theme from localStorage after mount
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme as "light" | "dark");
        setMounted(true); // Ensure updates happen after hydration
    }, []);

    // Apply theme class to document
    useEffect(() => {
        if (mounted) {
            document.documentElement.classList.toggle("dark", theme === "dark");
            localStorage.setItem("theme", theme);
        }
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return { theme: mounted ? theme : "light", toggleTheme };
}
