import React from 'react'
import Title from '../../Components/Title/Title'
import GameBoard from '../../Components/GameBoard/GameBoard'
import UserStats from '../../Components/userStats/userStats'
import { useState } from 'react'

function GamePage() {
  const [userId, setUserId] = useState(null);

  const getUserId = (userIdToSet) => {
    setUserId(userIdToSet);
  };

  return (
    <div>
      <Title />
      <UserStats onDataSend={getUserId}/>
      <GameBoard userId={userId}/>
    </div>
  )
}

export default GamePage