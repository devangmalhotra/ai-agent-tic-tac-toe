import React from 'react'
import './GameBoard.css'
import XPiece from '../XPiece/XPiece'
import OPiece from '../OPiece/OPiece'
import { useState } from 'react'

function GameBoard() {
    const BOARDSIZE = 9; // 3x3 
   const [turn, setTurn] = useState(1); //1 for player, 2 for AI
   const [arrBoard, setArrBoard] = useState([   0, 0, 0,
                                                0, 0, 0,
                                                0, 0, 0 ]); // arr for board, will be used internally
   
   const handleTurnChange = () => {
        if(turn === 1) {
            setTurn(2);
        } else {
            setTurn(1);
        }
        //console.log(turn);
   }

   const handleClickOnCell = (cellIndex) => {
        console.log(`Clicked on cell ${cellIndex}`)
        setArrBoard(arrBoard.map((item, index) => {
            if(index == cellIndex) {
                return turn;
            } else {
                return 0;
            }
        }))
        console.log(arrBoard);
        handleTurnChange();
   }

  return (
    <div id='gameboard-container'>
        <div id='cell-0' className='gameboard-cell' onClick={() => handleClickOnCell(0)}>
            <XPiece className="hidden" />
            <OPiece className="hidden"/>
        </div>
        <div id='cell-1' className='gameboard-cell' onClick={() => handleClickOnCell(1)}>
            <XPiece className="hidden" />
            <OPiece className="hidden"/>
        </div>
        <div id='cell-2' className='gameboard-cell' onClick={() => handleClickOnCell(2)}>
            <XPiece className="hidden" />
            <OPiece className="hidden"/>
        </div>
        <div id='cell-3' className='gameboard-cell' onClick={() => handleClickOnCell(3)}>
            <XPiece className="hidden" />
            <OPiece className="hidden"/>
        </div>
        <div id='cell-4' className='gameboard-cell' onClick={() => handleClickOnCell(4)}>
            <XPiece className="hidden" />
            <OPiece className="hidden"/>
        </div>
        <div id='cell-5' className='gameboard-cell' onClick={() => handleClickOnCell(5)}>
            <XPiece className="hidden" />
            <OPiece className="hidden"/>
        </div>
        <div id='cell-6' className='gameboard-cell' onClick={() => handleClickOnCell(6)}>
            <XPiece className="hidden" />
            <OPiece className="hidden"/>
        </div>
        <div id='cell-7' className='gameboard-cell' onClick={() => handleClickOnCell(7)}>
            <XPiece className="hidden" />
            <OPiece className="hidden"/>
        </div>
        <div id='cell-8' className='gameboard-cell' onClick={() => handleClickOnCell(8)}>
            <XPiece className="hidden" />
            <OPiece className="hidden"/>
        </div>
    </div>
  )
}

export default GameBoard