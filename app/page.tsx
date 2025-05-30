"use client";
import "./globals.css";
import { useTheme } from "./context/ThemeContext";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme === "dark" ? "dark-mode" : "light-mode"}>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}
