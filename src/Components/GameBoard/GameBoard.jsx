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
    const [frontendBoardCells, setFrontendBoardCells] = useState([]);
   
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
        console.log(arrBoard)

        // updating arr board
        if(arrBoard[cellIndex] != 0) { // don't update if taken
            alert("This cell is occupied. Choose another.")
            return;
        }
        
        const newArrBoard = [...arrBoard];
        newArrBoard[cellIndex] = turn;

        setArrBoard(newArrBoard);
        console.log(newArrBoard);

        handleTurnChange();
   }

    const renderCells = () => {
        const frontendBoard = arrBoard.map((item, index) => {
            return (<div id={index} key={index} className='gameboard-cell' onClick={() => handleClickOnCell(index)}></div>)
        })

        return frontendBoard;
   }
   

  return (
    <div id='gameboard-container'>
        {renderCells()}
    </div>
  )
}

export default GameBoard