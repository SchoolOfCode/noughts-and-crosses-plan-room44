import React from "react";
import Board from "./Board/Board";
import TurnDisplay from "./TurnDisplay/TurnDisplay";

// TODO: import Board, render board.
// TODO: import TurnDisplay, render
// TODO: render winner if there's one

function Game() {
  return (
    <div className="Game">
      <Board />
      <TurnDisplay />
    </div>
  );
}

export default Game;
