import React from 'react'
import './GameSettings.css'
import { useNavigate } from 'react-router-dom'

function GameSettings() {
  let navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    const algoType = e.target[0].value;
    navigate(`/game?algo-type=${algoType}`)
  }

  return (
    <div id='form-container'>
        <form id='game-form' action="" onSubmit={handleSubmit}>
            <label htmlFor="algo-type">Select Algorithm Type:</label>
            <select name="algo-type" id="">
                <option value="minimax">MiniMax</option>
                <option value="alphabetapruning">Alpha-Beta Pruning</option>
                <option value="expectiminimax">ExpectiMiniMax</option>
            </select>
            <input type="submit" id='game-form-submit' value='Submit'/>
        </form>
    </div>
  )
}

export default GameSettings