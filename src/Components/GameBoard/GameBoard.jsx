import React from 'react'
import './GameBoard.css'
import XPiece from '../XPiece/XPiece'
import OPiece from '../OPiece/OPiece'
import { useState } from 'react'

function GameBoard() {
   const  [turn, setTurn] = useState(1); //1 for player, 2 for AI
   
   const handleTurnChange = (currTurn) => {
        
   }

  return (
    <div id='gameboard-container'>
        <div id='1-1' className='gameboard-cell'>
            <XPiece />
        </div>
        <div id='1-2' className='gameboard-cell'>
            <OPiece />
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