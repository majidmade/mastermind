import React, { useState } from 'react';
import { COLORS } from '../logic/colors';
import { getGuessChecker } from '../logic/validation';

const { X, R, G } = COLORS

const getLockText = ({ lockable }) => (
  <div style={{ fontSize: 'x-large', color: (lockable ? G : R).backgroundColor }}>↜</div>
)


const useLock = ({ colors, onLock }) => {
  const [locked, setLocked] = useState(false);
  const lockable = !locked && colors.every(c => c !== X);
  const lockText = getLockText({ locked, lockable })
  const lockColors = () => {
    if (lockable) {
      setLocked(true);
      onLock(colors);
    }
  }
  return { locked, lockColors, lockText }
};

const getSolution = ({ colors, solution }) => JSON.stringify(getGuessChecker(solution)(colors))

export const Row = ({ initColors = [X,X,X,X], isActive, onLock, solution }) => {
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
        {isActive ? lockText : null}
        {locked ? getSolution({ colors, solution }) : null}
      </div>
    </div>
  )
};