import React from 'react';
import './Board.css'
import {Row} from './Row'
import {COLORS} from "../colors";

const defaultColors = [COLORS.NONE, COLORS.NONE, COLORS.NONE, COLORS.NONE];

export const Board = () => {
  return (
    <div className='board'>
      <Row initColors={defaultColors} onLock={console.log}/>
      <Row initColors={defaultColors} onLock={console.log}/>
    </div>
  )
}