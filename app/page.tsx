"use client";



import React from "react";

import TrackerForm from "@/components/TrackerForm";

import ThemeToggle from "@/components/ThemeToggle";

import MoodHistoryEntry from "@/components/MoodHistoryEntry";

import type { MoodEntry } from "@/components/MoodContext";



export default function Home() {

  const sampleEntry: MoodEntry = {

    id: Date.now().toString(), // ← add this!

    mood: "Excellent",

    date: new Date().toISOString(),

    note: "Feeling great today!",

  };



  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <TrackerForm />

        <ThemeToggle />

        <MoodHistoryEntry entry={sampleEntry} />

      </main>

    </div>

  );

}
