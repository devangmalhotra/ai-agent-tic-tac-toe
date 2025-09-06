import React from 'react'
import './GameSettings.css'

function GameSettings() {
  return (
    <div id='form-container'>
        <form id='game-form' action="">
            <label htmlFor="algo-type">Select Algorithm Type:</label>
            <input type="text" />
        </form>
    </div>
  )
}

export default GameSettings