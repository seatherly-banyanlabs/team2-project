'use client';

import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-gray-950 shadow-md border-b border-gray-800">
      <div>
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-pink-400 to-red-500 text-transparent bg-clip-text">
          Mood Tracker
        </h1>
        <p className="text-sm text-gray-400">Track your daily emotions</p>
      </div>
      <ThemeToggle />
    </header>
  );
}
