import React from 'react'
import './GameSettings.css'

function GameSettings() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("test");
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
            <input type="submit" id='game-form-submit'/>
        </form>
    </div>
  )
}

export default GameSettings