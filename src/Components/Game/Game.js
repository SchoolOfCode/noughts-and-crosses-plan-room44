import { useState } from "react";
import Board from "./Board/Board";
// import TurnDisplay from "./TurnDisplay/TurnDisplay";
import { calculateWinner } from "../winner";

function Game() {
  // initialise states
  const [board, setBoard] = useState(Array(9).fill("null"));
  const [isXTurn, setIsXTurn] = useState(false);

  //variable to work out the winner
  const winner = calculateWinner(board);

  // this ternary operator checks if isXTurn and returns the correct value
  const currentPlayer = isXTurn ? "X" : "O";

  //game logic functions
  // function makeaMove() {
  // console.log("square clicked");
  // }

  const handleSquareClick = (index) => {
    if (winner || board[index]) {
      return;
    }
    // check if there's a winner
    // if (winner) {
    //   return
    // }

    // update board with valid move
    setBoard([
      ...board.slice(0, index),
      currentPlayer,
      ...board.slice(index + 1),
    ]);

    setIsXTurn(!isXTurn); //mirror false to true and viceversa to switch player turn
  };
  return (
    <>
      <h1>React Noughts and Crosses - with Hooks</h1>
      <Board squares={board} onSelectSquare={handleSquareClick} />
      <div className="info-wrapper">
        <h3>
          {winner ? "Winner: " + winner : "Next Player: " + currentPlayer}
        </h3>
        {/* <Board squares={board} onSelectSquare={reset} /> */}
      </div>
    </>
  );
}

export default Game;
//   function reset() {
//     console.log("reset button clicked");

//     return (
//       <div className="Game">
//         <Board squares={board} onClick={() => makeaMove()} />
//         <button onClick={reset}>RESET</button>
//         <TurnDisplay currentPlayer={currentPlayer} />
//       </div>
//     );
//   }
// }

// export default Game;

/*----------------
NOTES FOR THE TEAM
----------------*/

// About Array() constructor + array.fill()
// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
// Array() allows you to create a new array and specify it's length in a new variable or state.
// The length will be specified between the parenthesis, and in this case is stored as the initial state of board
// Array.prototype.fill() reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
// in this case fills the length of our new array (nine) with 'null', array.fill() allows you to specify the value, start and end
// in this code we are just specifing value ('null')

// About ternary conditional operator
// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// condition ? codeIfTruthy : codeIfFalsey
// isXTurn is initially true, every variable that is declared has a truthiness to it
// when isXTurn becomes false, then it will be falsy and the code after colon will execute

/* 
let array = ['book1', 'book2', 'book3'] our bookshelf
'book 2.5' we want to add this one
let newarray = ...array.slice(0, 1), 'book 2.5', ...array.slice (2 + 1) our operation
*/
