import React from 'react'

// TODO: render who's turn is it
// TODO: PROPS (playerturn or move)

function TurnDisplay({currentPlayer}) {
  return (
    <div>Next Player: {currentPlayer}
    </div>
  )
}

export default TurnDisplay