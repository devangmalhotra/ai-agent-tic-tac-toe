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

        // updating arr board
        setArrBoard(arrBoard.map((item, index) => {
            if(index == cellIndex) {
                return turn;
            } else {
                return 0;
            }
        }))
        console.log(arrBoard);

        // updating frontend board
        const newFrontendBoard = frontendBoardCells.map(item => {
            if (item.id == cellIndex) {
                console.log("test")
                return <div id={item.id} key={item.id} className='gameboard-cell' onClick={() => handleClickOnCell(item.id)}>test</div>
            } else {
                return console.log(item);
            }
        });
        
        console.log(frontendBoardCells);

        // re-render with new frontend board
        setFrontendBoardCells(newFrontendBoard);

        handleTurnChange();
   }

   // Creating initial board
   const [frontendBoardCells, setFrontendBoardCells] = useState([]);
   useEffect(() => {
    if (frontendBoardCells.length == 0) {
        for (let i = 0; i < BOARDSIZE; i++) {
            setFrontendBoardCells(prevArr => [...prevArr, <div id={i} key={i} className='gameboard-cell' onClick={() => handleClickOnCell(i)}></div>])
        }
        console.log(frontendBoardCells)
        }
   }, [])


   

  return (
    <div id='gameboard-container'>
        {frontendBoardCells}
    </div>
  )
}

export default GameBoard