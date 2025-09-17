import React from 'react'
import './GameBoard.css'
import XPiece from '../XPiece/XPiece'
import OPiece from '../OPiece/OPiece'
import { useState } from 'react'

function GameBoard() {
   const  [turn, setTurn] = useState(1); //1 for player, 2 for AI
   
   const handleTurnChange = () => {
        if(turn === 1) {
            setTurn(2);
        } else {
            setTurn(1);
        }
        console.log(turn);
   };

  return (
    <div id='gameboard-container'>
        <div id='1-1' className='gameboard-cell' onClick={handleTurnChange}>
            <XPiece className="hidden" />
            <OPiece className="hidden"/>
        </div>
        <div id='1-2' className='gameboard-cell' onClick={handleTurnChange}>
            <XPiece className="hidden" />
            <OPiece className="hidden"/>
        </div>
        <div id='1-3' className='gameboard-cell' onClick={handleTurnChange}>
            <XPiece className="hidden" />
            <OPiece className="hidden"/>
        </div>
        <div id='2-1' className='gameboard-cell' onClick={handleTurnChange}>
            <XPiece className="hidden" />
            <OPiece className="hidden"/>
        </div>
        <div id='2-2' className='gameboard-cell' onClick={handleTurnChange}>
            <XPiece className="hidden" />
            <OPiece className="hidden"/>
        </div>
        <div id='2-3' className='gameboard-cell' onClick={handleTurnChange}>
            <XPiece className="hidden" />
            <OPiece className="hidden"/>
        </div>
        <div id='3-1' className='gameboard-cell' onClick={handleTurnChange}>
            <XPiece className="hidden" />
            <OPiece className="hidden"/>
        </div>
        <div id='3-2' className='gameboard-cell' onClick={handleTurnChange}>
            <XPiece className="hidden" />
            <OPiece className="hidden"/>
        </div>
        <div id='3-3' className='gameboard-cell' onClick={handleTurnChange}>
            <XPiece className="hidden" />
            <OPiece className="hidden"/>
        </div>
    </div>
  )
}

export default GameBoard