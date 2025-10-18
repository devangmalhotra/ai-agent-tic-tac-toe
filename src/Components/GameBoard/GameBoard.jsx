import React from 'react'
import './GameBoard.css'
import XPiece from '../XPiece/XPiece'
import OPiece from '../OPiece/OPiece'
import { useState } from 'react'
import { useEffect } from 'react'
import ClearBtn from '../ClearBtn/ClearBtn'
import { useNavigate } from 'react-router-dom'

function GameBoard() {
    const BOARDSIZE = 9; // 3x3 
    const [turn, setTurn] = useState(1); //1 for player, 2 for AI
    const [arrBoard, setArrBoard] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0]]); // arr for board, will be used internally
    const navigate = useNavigate();
   
    const handleTurnChange = () => {
        if(turn === 1) {
            setTurn(2);
        } else {
            setTurn(1);
        }
        //console.log(turn);
   }

   const handleAITurn = async () => {
        const response = await fetch('http://localhost:3000/handle-ai-turn', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(arrBoard)})
        .then(response => response.json())
        .then(data => {
            const updatedArr = [...arrBoard];
            updatedArr[data.row][data.col] = 2;
            setArrBoard(updatedArr);
            console.log(`AI Move is row: ${data.row}, col: ${data.col}`);
            console.log(turn);
        })

        try {
            const response = await fetch('http://localhost:3000/check-win-or-game-over', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(arrBoard)})
            .then(response => response.json())
            .then(data => {
            console.log(`Game won: ${data.gamewon}`); // The fetched data
            console.log(`Tie: ${data.gametie}`)
            if (data.gamewon) {
                alert(`Game over. AI wins. You will now be brought to the main page.`);
                //handleClear();
                //navigate('/');
            } else if (data.gametie) {
                alert('Game over. It was a tie. You will now be brought to the main page.')
                //handleClear();
                //navigate('/');
            } else {
                handleTurnChange();
            }
      })
        } catch (e) {
            console.log(`Error fetching: ${e}`)
        }

   }

    const handleClickOnCell = async (cellRow, cellCol) => {
        console.log(`Clicked on cell ${cellRow}, ${cellCol}`)
        //console.log(arrBoard)

        // updating arr board
        if(arrBoard[cellRow][cellCol] != 0) { // don't update if taken
            alert("This cell is occupied. Choose another.")
            return;
        }
        
        const newArrBoard = [...arrBoard];
        newArrBoard[cellRow][cellCol] = 1;

        setArrBoard(newArrBoard);
        //console.log(newArrBoard);

        try {
            const response = await fetch('http://localhost:3000/check-win-or-game-over', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(arrBoard)})
            .then(response => response.json())
            .then(data => {
            console.log(`Game won: ${data.gamewon}`); // The fetched data
            console.log(`Tie: ${data.gametie}`)
            if (data.gamewon) {
                alert(`Game over. Player wins. You will now be brought to the main page.`);
                //handleClear();
                //navigate('/');
            } else if (data.gametie) {
                alert('Game over. It was a tie. You will now be brought to the main page.')
                //handleClear();
                //navigate('/');
            } else {
                handleTurnChange();
                handleAITurn();
            }
      })
        } catch (e) {
            console.log(`Error fetching: ${e}`)
        }

   }

   const handleClear = () => {
    const originalArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    setArrBoard(originalArr);
    setTurn(1);
    console.log("Game has been reset.")
   }

   let flattened_index = 0; // counter
    const renderCells = () => {
        const frontendBoard = arrBoard.map((row, i) => {
            return row.map((col, a) => {
                return(<div id={flattened_index++} key={a} className='gameboard-cell' onClick={() => handleClickOnCell(i, a)}>
                {col === 1 ? <XPiece /> : col === 2 ? <OPiece /> : null}
            </div>)
            })
        })
        return frontendBoard;
   }
   

  return (
    <div>
        <ClearBtn clearFunc={handleClear}/>
        <div id='gameboard-container'>
            {renderCells()}
        </div>
    </div>
  )
}

export default GameBoard