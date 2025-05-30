"use client";

import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full p-4 flex items-center justify-between border-b border-gray-300 dark:border-gray-700">
      <h1 className="text-2xl font-bold">Emoji Tracker</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded border border-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
}
