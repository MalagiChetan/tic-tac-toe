import React, { useState, useEffect } from "react";
import "../App.css";
import Square from "./Square";

const initialState = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  const [gameState, setGameState] = useState(initialState);
  const [chance, setChance] = useState(true);
  const [winner, setWinner] = useState("");

  const onSquareClicked = (ind) => {
    const gameStateCopy = [...gameState];
    gameStateCopy[ind] = chance ? "X" : "O";
    setGameState(gameStateCopy);
    setChance(!chance);
  };

  useEffect(() => {
    const win = calculateWinner();
    setWinner(win);
  }, [gameState]);

  const calculateWinner = () => {
    const possibleChances = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < possibleChances.length; i++) {
      const [a, b, c] = possibleChances[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  return (
    <div className="app-header">
      <div className="main_container">
        <h2 className="main_heading">Tic-Tac-Toe</h2>
        <h3 className="sub_heading">
          Made With <span className="span">❤</span> by Chetan
        </h3>
      </div>
      <div className="main_container">
        {winner ? <h1>{winner} is the Winner</h1> : null}
        <div className=" row jc-center">
          <Square
            className="br_bb"
            game={gameState[0]}
            onClick={() => onSquareClicked(0)}
          />
          <Square
            className="br_bb"
            game={gameState[1]}
            onClick={() => onSquareClicked(1)}
          />
          <Square
            className="bb"
            game={gameState[2]}
            onClick={() => onSquareClicked(2)}
          />
        </div>
        <div className="row jc-center">
          <Square
            className="br_bb"
            game={gameState[3]}
            onClick={() => onSquareClicked(3)}
          />
          <Square
            className="br_bb"
            game={gameState[4]}
            onClick={() => onSquareClicked(4)}
          />
          <Square
            className="bb"
            game={gameState[5]}
            onClick={() => onSquareClicked(5)}
          />
        </div>
        <div className="row jc-center">
          <Square
            className="br"
            game={gameState[6]}
            onClick={() => onSquareClicked(6)}
          />
          <Square
            className="br"
            game={gameState[7]}
            onClick={() => onSquareClicked(7)}
          />
          <Square game={gameState[8]} onClick={() => onSquareClicked(8)} />
        </div>
      </div>
      <button
        className="btn"
        onClick={() => {
          setGameState(initialState);
        }}
      >
        Reset Board
      </button>
    </div>
  );
};

export default TicTacToe;
