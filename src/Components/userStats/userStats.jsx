import React from 'react'
import './UserStats.css'
import { useState } from 'react'

function UserStats() {
    const [statsMenuOpened, setStatsMenuOpened] = useState(false);

    const handleStatsButtonClick = () => {
        if (!statsMenuOpened) {
            setStatsMenuOpened(true);
        } else {
            setStatsMenuOpened(false);
        }
    }

  return (
    <div id='stats-container'>
        <button id='stats-button' onClick={handleStatsButtonClick}>Game Stats <span className={statsMenuOpened ? 'stats-menu-opened' : ''}id='arrow-collapse-icon'>▶</span></button>
        <div id='stats-box' className={statsMenuOpened ? '' : 'stats-menu-hidden'}>
            <h4>Your current streak: </h4>
            <h4>Your highest streak: </h4>
            <h4>Highest streak of all time: </h4>
        </div>
    </div>
  )
}

export default UserStats