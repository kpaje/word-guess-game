import React from "react";
import { useState, useEffect } from "react";

export default function Guess() {
  const [guessValue, setGuessValue] = useState("");
  const [guessArray, setGuessArray] = useState([]);
  const [guessCount, setGuessCount] = useState(0);
  const [gameStatus, setGameStatus] = useState("IN PLAY");

  const restartGame = () => {
    setGameStatus("IN PLAY");
    setGuessCount(0);
  };

  const gameOver = () => {
    setGameStatus("GAME OVER");
  };

  const allowKeyEntries = key => {
    key = key.toUpperCase();
    setGuessValue(key);
    setGuessArray(key);
    guessArray.push(key);
    setGuessArray(guessArray);
  };

  const preventKeyEntries = () => {
    guessArray.splice(10, 1);
  };

  const resetKeyEntries = () => {
    setGuessValue("");
    setGuessArray((guessArray.length = 0));
    setGuessArray([]);
  };

  const useKeyPress = () => {
    const keyDownHandler = event => {
      if (event.repeat) {
        return;
      }
      if (guessArray.length < 10) {
        allowKeyEntries(event.key);
      } else {
        gameOver();
        preventKeyEntries();
      }
    };

    const keyUpHandler = () => {
      setGuessCount(guessArray.length);
      console.log(guessArray);
    };

    useEffect(() => {
      window.addEventListener("keydown", keyDownHandler);
      window.addEventListener("keyup", keyUpHandler);
    }, []); // Empty array ensures that effect is only run on mount and unmount
  };

  return (
    <React.Fragment>
      {useKeyPress()}
      <h2>GuessCount: {guessCount}</h2>
      <h2>GuessArray: {guessArray}</h2>
      <GuessValue guessValue={guessValue} />
      <GameStatus gameStatus={gameStatus} />
      <button
        onClick={() => {
          restartGame();
          resetKeyEntries();
        }}
      >
        RESTART GAME
      </button>
    </React.Fragment>
  );
}

const GuessValue = props => {
  return <h2>GuessValue: {props.guessValue}</h2>;
};
const GameStatus = props => {
  return <h2>gameStatus: {props.gameStatus}</h2>;
};
