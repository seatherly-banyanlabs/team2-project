
"use client";

import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-[#0f172a] transition-colors duration-300">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 sm:px-12 lg:px-48 py-6 gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-300 via-pink-600 to-red-500 text-transparent bg-clip-text">
            Mood Tracker
          </h1>
          <h2 className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Track your daily emotions
          </h2>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
