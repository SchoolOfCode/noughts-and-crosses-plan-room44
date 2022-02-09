import React from "react";

// TODO: render 1 item for our 3x3 board
// TODO: take in props (make a move)
// TODO: render null || X || O

function Square({ onClick, value }) {
    const style = value ? `squares ${value}` : 'squares';

  return (
    <button className={style} onClick={() => onClick()}>
      {value}
    </button>
  );
}

export default Square;
