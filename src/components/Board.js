import React, { useState } from 'react';
import './Board.css'
import { Row } from './Row'
import { solution } from '../colors';

const rows = new Array(10).fill(null);

export const Board = () => {
  const [activeRow, setActiveRow] = useState(0)
  return (
    <div className='board'>
      {rows.map((_, i) => (
        <Row key={`row-${i}`}
          isActive={i === activeRow}
          onLock={() => setActiveRow(activeRow + 1)}
        />
      ))}
      <br/>
      <Row
        isActive={false}
        initColors={solution}
      />
    </div>
  )
}