// import { useState } from "react"; // import useState from react

// function Square({ value, onSquareClick }) {
//   // Square is a component that takes in two props: value and onSquareClick
//   return (
//     <button className="square" onClick={onSquareClick}>
//       {value}
//     </button> // when button is clicked, call onSquareClick
//   );
// }

// function Board({ xIsNext, squares, onPlay }) {
//   // Board is a component that returns 9 Squares
//   // const [xIsNext, setXIsNext] = useState(true); // xIsNext is a boolean that is true if it is X's turn and false if it is O's turn
//   // const [squares, setSquares] = useState(Array(9).fill(null)); // squares is an array of 9 elements, each element is either null, "X", or "O"

//   function handleClick(i) {
//     // handleClick takes in an index i
//     if (squares[i] || calculateWinner(squares)) {
//       // if square is already filled or if there is a winner,
//       return; // if square is already filled, return (do nothing
//     }
//     const nextSquares = squares.slice(); // copy squares array
//     if (xIsNext) {
//       nextSquares[i] = "X";
//     } else {
//       nextSquares[i] = "O";
//     } // set nextSquares[i] to "X" if it is X's turn, otherwise set it to "O"
//     // setSquares(nextSquares);
//     // setXIsNext(!xIsNext); // set xIsNext to the opposite of what it was
//     onPlay(nextSquares);
//   }

//   const winner = calculateWinner(squares); // winner is either null, "X", or "O"
//   let status;
//   if (winner) {
//     status = "Winner: " + winner;
//   } else {
//     status = "Next player: " + (xIsNext ? "X" : "O"); // if xIsNext is true, status is "Next player: X", otherwise status is "Next player: O"
//   }
//   return (
//     <>
//       <div className="status">{status}</div> {/* display status  */}
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//       </div>
//       {/* // return 9 Squares, each with a value and an onSquareClick function */}
//     </>
//   );
// }

// function calculateWinner(squares) {
//   // calculateWinner takes in an array of 9 elements, each element is either null, "X", or "O"
//   const lines = [
//     // lines is an array of arrays, each array contains 3 numbers
//     [0, 1, 2], // horizontal
//     [3, 4, 5], // horizontal
//     [6, 7, 8], // horizontal
//     [0, 3, 6], // vertical
//     [1, 4, 7], // vertical
//     [2, 5, 8], // vertical
//     [0, 4, 8], // diagonal
//     [2, 4, 6], // diagonal
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     // for each array in lines
//     const [a, b, c] = lines[i]; // a, b, and c are the 3 numbers in the array
//     if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
//       // if squares[a] is not null and squares[a] is equal to squares[b] and squares[b] is equal to squares[c],
//       return squares[a];
//     } // if squares[a] is not null and squares[a] is equal to squares[b] and squares[b] is equal to squares[c], return squares[a]
//   }
//   return null;
// }

// export default function Game() {
//   // const [xIsNext, setXIsNext] = useState(true);
//   const [history, setHistory] = useState([Array(9).fill(null)]);
//   const [currentMove, setCurrentMove] = useState(0);
//   const xIsNext = currentMove % 2 === 0;
//   const currentSquares = history[currentMove];

//   function jumpTo(nextMove) {
//     setCurrentMove(nextMove);
//     setXIsNext(nextMove % 2 === 0);
//   }

//   function handlePlay(nextSquares) {
//     const nextHistory = [...history.slice(0, currentMove + 1), nextHistory];
//     setHistory(nextHistory);
//     setCurrentMove(nextHistory.length - 1);
//     setXIsNext(!xIsNext);
//   }

//   const moves = history.map((squares, move) => {
//     let description;
//     if (move > 0) {
//       description = "Go to move # " + move;
//     } else {
//       description = "Go to game start";
//     }
//     return (
//       <li key={move}>
//         <button onClick={() => jumpTo(move)}>{description}</button>
//       </li>
//     );
//   });

//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board />
//       </div>
//       <div className="game-info">
//         <ol></ol>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// I am overwhelmed by this react Tic Tac Toe game can you explain to me step by step?
// I will try to explain it to you step by step
// first, we have a function called calculateWinner
// calculateWinner takes in an array of 9 elements, each element is either null, "X", or "O"
// calculateWinner returns either null, "X", or "O"
// calculateWinner checks if there is a winner
// if there is a winner, calculateWinner returns the winner
// if there is no winner, calculateWinner returns null
// next, we have a function called Square
// Square is a component that takes in two props: value and onSquareClick
// Square returns a button
// when the button is clicked, it calls onSquareClick
// next, we have a function called Board
// Board is a component that returns 9 Squares
// Board also returns a div with the status
// Board has two states: xIsNext and squares
// xIsNext is a boolean that is true if it is X's turn and false if it is O's turn
// squares is an array of 9 elements, each element is either null, "X", or "O"
// Board has a function called handleClick
// handleClick takes in an index i
// handleClick checks if the square at index i is already filled
// if the square at index i is already filled, handleClick does nothing
// if the square at index i is not filled, handleClick fills the square with either "X" or "O"
// if it is X's turn, handleClick fills the square with "X"
// if it is O's turn, handleClick fills the square with "O"
// next, we have a function called App
// App returns a Board
// App is the root component
// App is rendered by index.js
// index.js renders App to the DOM
// index.js is the entry point of our application
// index.js renders App to the DOM

// I would love for us to have another interractive lesson like this. Do you have any other ideas? Like creating a game like this one or anything interesting?
// I can think of a few ideas
// we can make a game like this one
// What game are we creating this time around?
// we can make a game like this one
// https://www.youtube.com/watch?v=QZcNGfcn-oo
