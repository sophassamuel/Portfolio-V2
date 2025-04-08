// src/components/ThemeToggle.jsx
import { useState, useEffect } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        if (localStorage.theme) return localStorage.theme;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.theme = theme;
    }, [theme]);

    const toggleTheme = () => {
        console.log("Toggling theme...");
        setTheme(prev => (prev === "dark" ? "light" : "dark"));
      };
      

    return (
        <button
            onClick={toggleTheme}
            className=" text-black dark:text-white rounded"
        >
            {theme === 'dark' ? "☀️" : "🌙"}
            
        </button>
    );
}
