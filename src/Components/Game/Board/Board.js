import React from "react";
import Square from "./Square/Square";

// TODO: import Square component, render 9 squares into 3x3 grid✅
// TODO: take in props (board, make a move)

function Board({ makeaMove }) {
  return (
    <div className="GameBoard">
      <Square value="1" onClick={makeaMove()} />
      <Square value="2" onClick={makeaMove()} />
      <Square value="3" onClick={makeaMove()} />
      <Square value="4" onClick={makeaMove()} />
      <Square value="5" onClick={makeaMove()} />
      <Square value="6" onClick={makeaMove()} />
      <Square value="7" onClick={makeaMove()} />
      <Square value="8" onClick={makeaMove()} />
      <Square value="9" onClick={makeaMove()} />
    </div>
  );
}

export default Board;
