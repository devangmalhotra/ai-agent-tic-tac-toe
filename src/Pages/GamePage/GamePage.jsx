import React from 'react'
import Title from '../../Components/Title/Title'
import GameBoard from '../../Components/GameBoard/GameBoard'
import userStats from '../../Components/userStats/userStats'

function GamePage() {
  return (
    <div>
      <Title />
      <userStats />
      <GameBoard />
    </div>
  )
}

export default GamePage