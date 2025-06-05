'use client';

import React from 'react';
import classNames from 'classnames';

interface FeelingButtonProps {
  emoji: string;
  mood: string;
  gradient: string;
  selected: boolean;
  onClick: () => void;
  size?: 'small' | 'medium' | 'large';
}

const sizeClasses = {
  small: 'text-xl py-1 px-2',
  medium: 'text-2xl py-2 px-4',
  large: 'text-3xl py-3 px-6',
};

const FeelingButton: React.FC<FeelingButtonProps> = ({
  emoji,
  mood,
  gradient,
  selected,
  onClick,
  size = 'medium',
}) => {
  return (
    <button
      onClick={onClick}
      aria-pressed={selected}
      aria-label={`Select mood: ${mood}`}
      className={classNames(
        'rounded-full shadow-md text-white font-medium transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white',
        `bg-gradient-to-br ${gradient}`,
        selected ? 'scale-105 ring-2 ring-white' : 'hover:scale-105',
        sizeClasses[size]
      )}
    >
      {emoji}
    </button>
  );
};

export default FeelingButton;
