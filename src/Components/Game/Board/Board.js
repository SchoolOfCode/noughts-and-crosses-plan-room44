import React from "react";
import Square from "./Square/Square";

// TODO: import Square component, render 9 squares into 3x3 grid✅
// TODO: take in props (board, make a move)

function Board({ makeaMove }) {

  return (
    <div className="GameBoard">
      <Square value="1" makeaMove={makeaMove()} />
      <Square value="2" makeaMove={makeaMove()} />
      <Square value="3" makeaMove={makeaMove()} />
      <Square value="4" makeaMove={makeaMove()} />
      <Square value="5" makeaMove={makeaMove()} />
      <Square value="6" makeaMove={makeaMove()} />
      <Square value="7" makeaMove={makeaMove()} />
      <Square value="8" makeaMove={makeaMove()} />
      <Square value="9" makeaMove={makeaMove()} />
    </div>
  );
}

export default Board;
