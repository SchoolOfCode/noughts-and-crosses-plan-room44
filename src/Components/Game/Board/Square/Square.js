import React from 'react'

// TODO: render 1 item for our 3x3 board
// TODO: take in props (make a move)
// TODO: render null || X || O

function Square({makeaMove, value}) {
  return (
    <button className='BoardSquare' makeaMove={makeaMove()}>{value}</button>
  )
}

export default Square