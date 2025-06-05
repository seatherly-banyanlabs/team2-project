'use client';

import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        Emoji Mood Tracker
      </h1>
      <ThemeToggle />
    </header>
  );
}
