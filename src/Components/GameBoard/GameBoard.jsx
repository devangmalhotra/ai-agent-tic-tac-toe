import React from 'react'
import './GameBoard.css'
import XPiece from '../XPiece/XPiece'
import OPiece from '../OPiece/OPiece'
import { useState } from 'react'
import { useEffect } from 'react'

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

   // Creating initial board
   const [frontendBoardCells, setFrontendBoardCells] = useState([]);
   useEffect(() => {
    for (let i = 0; i < BOARDSIZE; i++) {
        setFrontendBoardCells(prevArr => [...prevArr, <div id={i} key={i} className='gameboard-cell' onClick={() => handleClickOnCell(0)}></div>])
    }
    console.log(frontendBoardCells)
   }, [])


   

  return (
    <div id='gameboard-container'>
        {frontendBoardCells}
    </div>
  )
}

export default GameBoard