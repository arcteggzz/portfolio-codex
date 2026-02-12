import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for existing class or system preference on mount
    const isDarkClass = document.documentElement.classList.contains("dark");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (isDarkClass || systemPrefersDark) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-full h-full text-black dark:text-white cursor-pointer focus:outline-none"
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div className="relative w-5 h-5">
        <div
          className={`absolute inset-0 transition-all duration-500 ease-out transform ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}
        >
          <Moon size={20} className="fill-current" />
        </div>
        <div
          className={`absolute inset-0 transition-all duration-500 ease-out transform ${isDark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}
        >
          <Sun size={20} />
        </div>
      </div>
    </button>
  );
}
