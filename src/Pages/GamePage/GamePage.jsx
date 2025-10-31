import React from 'react'
import Title from '../../Components/Title/Title'
import GameBoard from '../../Components/GameBoard/GameBoard'
import UserStats from '../../Components/userStats/userStats'

function GamePage() {
  return (
    <div>
      <Title />
      <UserStats />
      <GameBoard />
    </div>
  )
}

export default GamePage