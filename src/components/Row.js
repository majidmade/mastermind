import React, {useState} from 'react';
import {COLORS} from "../colors";

const isValid = colors => colors.every(c => c !== COLORS.NONE)

const useLock = ({colors, onLock}) => {
  const [locked, setLocked] = useState(false);
  const lockable = !locked && isValid(colors);
  const lockText = (lockable && '✅') || (locked && '🔒') || '❌';

  const lockColors = lockable ? () => {
    setLocked(true);
    onLock(colors);
  } : () => {};

  return {locked, lockColors, lockText}
};

export const Row = ({initColors, onLock}) => {
  const [colors, setColors] = useState(initColors);
  const {locked, lockColors, lockText} = useLock({colors, onLock});

  return (
    <div className='row'>
      {colors.map(({backgroundColor, nextColor}, i) => (
        <div className='hole row-square'
           key={`${i}hole`}
           style={{backgroundColor}}
           onClick={() => {
             if (!locked) {
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