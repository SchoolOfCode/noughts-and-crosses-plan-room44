import React from "react";
import Board from "./Board/Board";
import TurnDisplay from "./TurnDisplay/TurnDisplay";

// TODO: import Board, render board.
// TODO: import TurnDisplay, render
// TODO: render winner if there's one

function Game() {
  function makeaMove(){
    console.log("click")
  };

  return (
    <div className="Game">
      <Board makeaMove={makeaMove()}/>
      <TurnDisplay />
    </div>
  );
}

export default Game;
