import React, { useState } from 'react';
import { COLORS } from "../colors";

const defaultColors = [
  COLORS.NONE,
  COLORS.NONE,
  COLORS.NONE,
  COLORS.NONE
];

const useLock = ({ colors, onLock }) => {
  const [locked, setLocked] = useState(false);
  const lockable = !locked && colors.every(c => c !== COLORS.NONE);
  const lockText = (lockable && 'lockable') || (locked && 'locked') || 'invalid';
  const lockColors = () => {
    if (lockable) {
      setLocked(true);
      onLock(colors);
    }
  }
  return { locked, lockColors, lockText }
};

export const Row = ({ initColors = defaultColors, isActive, onLock }) => {
  const [colors, setColors] = useState(initColors);
  const { locked, lockColors, lockText } = useLock({ colors, onLock });

  return (
    <div className={`row row-${isActive ? 'active' : 'inactive'}`}>
      {colors.map(({ backgroundColor, nextColor }, i) => (
        <div key={`${i}hole`}
          className='row-square hole'
          style={{ backgroundColor }}
          onClick={() => {
            if (isActive && !locked) {
              const newColors = [...colors];
              newColors[i] = COLORS[nextColor];
              setColors(newColors);
            }
          }}
        />
      ))}
      <div className='row-square' onClick={lockColors}>
        {lockText}
      </div>
    </div>
  )
};