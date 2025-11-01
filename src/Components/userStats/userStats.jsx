import React from 'react'
import './UserStats.css'
import { useState } from 'react'
import { useEffect } from 'react';

function UserStats(props) {
    const [statsMenuOpened, setStatsMenuOpened] = useState(false);
    const [statsObj, setStatsObj] = useState({ playerCurrStreak: 0, playerHighestStreak: 0, globalStreak: 0 });

    const handleStatsButtonClick = () => {
        if (!statsMenuOpened) {
            setStatsMenuOpened(true);
        } else {
            setStatsMenuOpened(false);
        }
    }

    const getUserId = () => {
        const userId = localStorage.getItem('userId');

        if (!userId) {
            const uuid = crypto.randomUUID();
            localStorage.setItem('userId', uuid);
        }
        return userId; // userId from userstats -> gamepage -> gameboard -> api
    }

    useEffect(() => {
        const id = getUserId();
        props.onDataSend(localStorage.getItem('userId'));
        console.log(`User UUID: ${id}`);

    }, [])



  return (
    <div id='stats-container'>
        <button id='stats-button' onClick={handleStatsButtonClick}>Game Stats <span className={statsMenuOpened ? 'stats-menu-opened' : ''}id='arrow-collapse-icon'>▶</span></button>
        <div id='stats-box' className={statsMenuOpened ? '' : 'stats-menu-hidden'}>
            <h4>UserID: <span className='statNum'>{localStorage.getItem('userId')}</span></h4>
            <h4>Your current streak: <span className='statNum'>{statsObj.playerCurrStreak}</span></h4>
            <h4>Your highest streak: <span className='statNum'>{statsObj.playerHighestStreak}</span></h4>
            <h4>Highest streak of all time: <span className='statNum'>{statsObj.globalStreak}</span></h4>
        </div>
    </div>
  )
}

export default UserStats