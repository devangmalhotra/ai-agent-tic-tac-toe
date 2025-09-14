import React from 'react'
import './GameBoard.css'

function GameBoard() {
  return (
    <div id='gameboard-container'>
        <div id='1-1' className='gameboard-cell'>
            <div className='x-piece'></div>
        </div>
        <div id='1-2' className='gameboard-cell'>
            <div className='o-piece'></div>
        </div>
        <div id='1-3' className='gameboard-cell'></div>
        <div id='2-1' className='gameboard-cell'></div>
        <div id='2-2' className='gameboard-cell'></div>
        <div id='2-3' className='gameboard-cell'></div>
        <div id='3-1' className='gameboard-cell'></div>
        <div id='3-2' className='gameboard-cell'></div>
        <div id='3-3' className='gameboard-cell'></div>
    </div>
  )
}

export default GameBoard