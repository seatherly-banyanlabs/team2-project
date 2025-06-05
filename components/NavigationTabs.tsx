"use client";

import React, { useState, KeyboardEvent } from "react";
import { Calendar, TrendingUp, BarChart3 } from "lucide-react";

interface NavItem {
  name: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { name: "Tracker", icon: <Calendar size={16} /> },
  { name: "History", icon: <TrendingUp size={16} /> },
  { name: "Stats", icon: <BarChart3 size={16} /> },
];

const NavigationTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Tracker");

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    name: string
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      setActiveTab(name);
    }
  };

  return (

  <nav
      aria-label="Main Navigation"
      className="fixed top-0 left-0 w-full h-12 z-50 shadow-md bg-gray-200 dark:bg-gray-800 flex items-center"
    >
      <div className="flex gap-6 bg-gray-200 dark:bg-gray-800 rounded-md px-6 py-2 ml-64">
        {navItems.map(({ name, icon }) => (
          <button
            key={name}
            className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300
              ${activeTab === name
                ? "text-yellow-400 bg-gray-700 border-b-2 border-yellow-400 dark:bg-gray-200 dark:text-yellow-600"
                : "text-black hover:text-gray-700 hover:bg-gray-300 dark:text-gray-200 dark:hover:bg-gray-700"
              }`}
            aria-current={activeTab === name ? "page" : undefined}
            onClick={() => setActiveTab(name)}
            onKeyDown={(e) => handleKeyDown(e, name)}
          >
            <span className="flex items-center justify-center">{icon}</span>
            <span className="leading-[1]">{name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavigationTabs;

