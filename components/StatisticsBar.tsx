// components/StatusBar.tsx
"use client";

import React, { useEffect, useState } from "react";

export type StatusType = "excellent" | "good" | "okay" | "poor" | "bad";

export interface StatusBarProps {
 
  status?: StatusType;

 
  animated?: boolean;

  /**
   * Duration (ms) of the width transition if `animated=true`. Default: 800.
   */
  animationDuration?: number;

  /**
   * Override ARIA label (defaults to "Status Progress").
   */
  ariaLabel?: string;
}

const StatusBar: React.FC<StatusBarProps> = ({
  status = "excellent",
  animated = true,
  animationDuration = 800,
  ariaLabel,
}) => {
  // Map status to percentage, gradient, and emoji
  const mapping: Record<
    StatusType,
    { percentage: number; gradient: string; emoji: string }
  > = {
    excellent: {
      percentage: 100,
      gradient: "from-green-400 to-green-600",
      emoji: "😄",
    },
    good: {
      percentage: 75,
      gradient: "from-lime-400 to-lime-600",
      emoji: "😊",
    },
    okay: {
      percentage: 50,
      gradient: "from-yellow-300 to-yellow-500",
      emoji: "😐",
    },
    poor: {
      percentage: 25,
      gradient: "from-orange-400 to-orange-600",
      emoji: "😔",
    },
    bad: { percentage: 0, gradient: "from-red-400 to-red-600", emoji: "😢" },
  };

  const { percentage: targetPct, gradient, emoji } = mapping[status];

  // Internal state to animate fill width
  const [fill, setFill] = useState<number>(animated ? 0 : targetPct);

  useEffect(() => {
    if (!animated) {
      setFill(targetPct);
      return;
    }
    const id = window.setTimeout(() => {
      setFill(targetPct);
    }, 50);
    return () => window.clearTimeout(id);
  }, [targetPct, animated]);

  return (
    <div className="w-full space-y-1">
      {/* Emoji + Status Label */}
      <div className="flex items-center space-x-2">
        <span className="text-xl">{emoji}</span>
        <span className="font-medium text-gray-700 dark:text-gray-300 capitalize">
          {status}
        </span>
      </div>

      {/* Track (full gradient) */}
      <div
        role="progressbar"
        aria-label={ariaLabel ?? "Status Progress"}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(fill)}
        className={`
          w-full h-4 rounded overflow-hidden 
          bg-gradient-to-r ${gradient}
        `}
      >
        {/* Gray “cover” on the right that shrinks as fill grows */}
        <div
          className="h-full bg-gray-200 dark:bg-gray-700"
          style={{
            width: `${100 - fill}%`,
            transition: animated
              ? `width ${animationDuration}ms ease-in-out`
              : undefined,
            position: "absolute",
            top: 0,
            right: 0,
          }}
        />
      </div>

      {/* Percentage Text */}
      <div className="text-right text-xs font-semibold text-gray-600 dark:text-gray-400">
        {Math.round(fill)}%
      </div>
    </div>
  );
};

export default StatusBar;
