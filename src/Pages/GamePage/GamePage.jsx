import React from 'react'
import Title from '../../Components/Title/Title'
import GameBoard from '../../Components/GameBoard/GameBoard'
import UserStats from '../../Components/TempFolder/userStats'
import { useState } from 'react'

function GamePage() {
  const [userId, setUserId] = useState(null);
  const [data, setData] = useState(null);
  const [statsObj, setStatsObj] = useState({ playerCurrStreak: 0, playerHighestStreak: 0, globalStreak: 0 });

  const getUserId = (userIdToSet) => {
    setUserId(userIdToSet);
  };

  const updateUserStats = async (stats) => {
    const res = await fetch('https://ai-agent-tic-tac-toe-backend.onrender.com/update-user-stats', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(stats)});
    
    await(setStats());
  };

  const getUserStats = async () => {
    const response = await fetch('https://ai-agent-tic-tac-toe-backend.onrender.com/get-user-stats', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ userId: localStorage.getItem('userId') })})
    const data = await response.json();

    return data;
  };

  const setStats = async () => {
      const data = await getUserStats();
      const newObj = { playerCurrStreak: data.current_streak, playerHighestStreak: data.highest_streak, globalStreak: data.global_highest_streak }
      setStatsObj(newObj);

      console.log(data);
    }

  return (
    <div>
      <Title />
      <UserStats onDataSend={getUserId} getUserStats={getUserStats} setStats={setStats} statsObj={statsObj} />
      <GameBoard userId={userId} getUserStats={getUserStats} updateUserStats={updateUserStats}/>
    </div>
  )
}

export default GamePage