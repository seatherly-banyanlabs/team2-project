
"use client";

import React, { useEffect, useState } from "react";

export interface StatisticsBarProps {
    percentage: number;
  
  colorGradient?: string;
  
  label?: string;
  
  animated?: boolean;
  
  animationDuration?: number;
  
  ariaLabel?: string;
}

const StatisticsBar: React.FC<StatisticsBarProps> = ({
  percentage,
  colorGradient = "from-gray-400 to-blue-500",
  label,
  animated = true,
  animationDuration = 800,
  ariaLabel,
}) => {
  // If animated: start at 0, then update to target. Otherwise start at target immediately.
  const [progress, setProgress] = useState<number>(animated ? 0 : percentage);

  useEffect(() => {
    if (!animated) return;
    const id = window.setTimeout(() => {
      setProgress(percentage);
    }, 50);
    return () => window.clearTimeout(id);
  }, [percentage, animated]);

  
  const safePct = Math.max(0, Math.min(100, progress));

  return (
    <div className="w-full">
      {label && (
        <div className="mb-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </span>
        </div>
      )}

      <div
        role="progressbar"
        aria-label={ariaLabel ?? "Progress"}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(safePct)}
        className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden"
      >
        <div
          className={`
            h-full 
            bg-gradient-to-r ${colorGradient} 
            rounded 
            transition-[width] ease-in-out
          `}
          style={{
            width: `${safePct}%`,
            transitionDuration: `${animated ? animationDuration : 0}ms`,
          }}
        />
      </div>

      <div className="mt-1 text-right text-xs font-semibold text-gray-600 dark:text-gray-400">
        {Math.round(safePct)}%
      </div>
    </div>
  );
};

export default StatisticsBar;
