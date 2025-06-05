"use client";
import { FC, memo, useEffect, useState } from "react";

export interface MoodEntry {
  mood: MoodType;
  date: string;
  note?: string;
}

export type MoodType = "Excellent" | "Good" | "Neutral" | "Sad" | "Very Sad";

const moodDetails: Record<MoodType, { emoji: string; gradient: string }> = {
  Excellent: { emoji: "😄", gradient: "from-green-400 to-emerald-500" },
  Good: { emoji: "😊", gradient: "from-blue-400 to-cyan-500" },
  Neutral: { emoji: "😐", gradient: "from-yellow-400 to-orange-500" },
  Sad: { emoji: "😔", gradient: "from-orange-400 to-red-500" },
  "Very Sad": { emoji: "😢", gradient: "from-red-400 to-pink-500" },
};

const formatDate = (dateStr: string): string => {
  return new Date(dateStr).toISOString().split("T")[0]; // Ensures YYYY-MM-DD format
};



const MoodHistoryEntry: FC<{ entry: MoodEntry }> = memo(({ entry }) => {
  const moodInfo = moodDetails[entry.mood];
  if (!moodInfo) return null;

const [formattedDate] = useState(formatDate(entry.date));


  return (

 <div className="flex flex-col min-w-[1000px]  min-h-[70px] py-6 px-6 rounded-sm bg-gray-800 border-gray-300 shadow-[0px_2px_8px_rgba(0,0,0,0.15)] w-full max-w-lg mx-auto animate-fadeIn">
      {/* Inner Light Gray Box */}
      <div className="bg-gray-700 p-6 rounded-md flex gap-4">
        {/* Mood Avatar */}
        <div
          className={`w-18 h-18 rounded-full border-2 border-gray-200 dark:border-gray-700  flex items-center justify-center shadow-[0px_2px_8px_rgba(0,0,0,0.15)] bg-gradient-to-br ${moodInfo.gradient}`}
          aria-label={`Mood: ${entry.mood}`}
        >
          <span className="text-[36px] leading-none flex items-center justify-center">
            {moodInfo.emoji}
          </span>
        </div>

        {/* Mood Details - Left Aligned */}
        <div className="text-left flex flex-col text-black relative">
          <span className="text-xl font-semibold">{entry.mood}</span>
        </div>
          <span className="text-lg font-medium text-gray-400">{formattedDate}</span>
        <div>
          
          {entry.note && (
              <div className="absolute bottom-13 left-32 text-lg font-normal text-gray-400 p-2 rounded-md">
              {entry.note}
                  </div>
                  
          )}
        </div>
      </div>
</div>


  );
});

export default MoodHistoryEntry;
