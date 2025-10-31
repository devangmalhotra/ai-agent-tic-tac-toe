import React from 'react'
import './UserStats.css'
import { useState } from 'react'

function UserStats() {
    const [statsMenuOpened, setStatsMenuOpened] = useState(false);

    const handleStatsButtonClick = () => {
        if (statsMenuOpened) {
            setStatsMenuOpened(true);
        } else {
            setStatsMenuOpened(false);
        }
    }

  return (
    <div id='stats-container'>
        <button id='stats-button' onClick={handleStatsButtonClick}>Game Stats <span id='arrow-collapse-icon'>▶</span></button>
    </div>
  )
}

export default UserStats