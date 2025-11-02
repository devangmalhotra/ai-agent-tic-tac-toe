import React from 'react'
import Title from '../../Components/Title/Title'
import GameBoard from '../../Components/GameBoard/GameBoard'
import UserStats from '../../Components/userStats/userStats'
import { useState } from 'react'

function GamePage() {
  const [userId, setUserId] = useState(null);
  const [data, setData] = useState(null);

  const getUserId = (userIdToSet) => {
    setUserId(userIdToSet);
  };

  const updateUserStats = async () => {
    const response = await fetch('http://localhost:3000/update-user-stats', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ userId: localStorage.getItem('userId') })})
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const newObj = { playerCurrStreak: data.current_streak, playerHighestStreak: data.highest_streak, globalStreak: 0 }
        setStatsObj(newObj);
    })
  };

  const getUserStats = async () => {
    const response = await fetch('http://localhost:3000/get-user-stats', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ userId: localStorage.getItem('userId') })})
    const data = await response.json();

    return data;
  };

  return (
    <div>
      <Title />
      <UserStats onDataSend={getUserId} getUserStats={getUserStats} />
      <GameBoard userId={userId} getUserStats={getUserStats} updateUserStats={updateUserStats}/>
    </div>
  )
}

export default GamePage