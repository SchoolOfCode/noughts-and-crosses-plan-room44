// import React from "react";
import Square from "./Square/Square";

// TODO: import Square component, render 9 squares into 3x3 grid✅
// TODO: take in props (board, make a move)✅

const Board = ({ squares, onSelectSquare }) => (
  <div className="board">
    {squares.map((square, index) => (
      <Square
        key={index}
        value={square}
        onClick={() => onSelectSquare(index)}
      />
    ))}
  </div>
);

export default Board;

// <div className="RowTop">
//   <Square value="1" onClick={() => onClick()} />
//   <Square value="2" onClick={() => onClick()} />
//   <Square value="3" onClick={() => onClick()} />
// </div>
// <div className="RowMiddle">
//   <Square value="4" onClick={() => onClick()} />
//   <Square value="5" onClick={() => onClick()} />
//   <Square value="6" onClick={() => onClick()} />
// </div>
// <div className="RowBottom">
//   <Square value="7" onClick={() => onClick()} />
//   <Square value="8" onClick={() => onClick()} />
//   <Square value="9" onClick={() => onClick()} />
// </div>
