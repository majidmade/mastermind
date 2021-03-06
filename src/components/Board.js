import React, { useState } from 'react';
import './Board.css'
import { Row } from './Row'
import { getRandomColor } from '../logic/colors';

const rows = new Array(10).fill(null);
const solution = [
  getRandomColor(),
  getRandomColor(),
  getRandomColor(),
  getRandomColor()
]

export const Board = () => {
  const [activeRow, setActiveRow] = useState(0)
  return (
    <div className='board'>
      {rows.map((_, i) => (
        <Row key={`row-${i}`}
          isActive={i === activeRow}
          solution={solution}
          onLock={() => setActiveRow(activeRow + 1)} // TODO: this can outgrow the # of rows
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