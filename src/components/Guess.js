import React from "react";
import { useState, useEffect } from "react";

export default function Guess() {
  const [keyValue, setKeyValue] = useState("");
  const [keyArray, setKeyArray] = useState([]);
  const [guesses, setGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState("IN PLAY");

  const restartGame = () => {
    setGameStatus("IN PLAY");
    setGuesses(0);
    setKeyValue("");
    setKeyArray((keyArray.length = 0));
    setKeyArray([]);
  };

  const gameOn = key => {
    key = key.toUpperCase();
    setKeyValue(key);
    setKeyArray(key);
    keyArray.push(key);
    setKeyArray(keyArray);
  };

  const gameOver = () => {
    setGameStatus("GAME OVER");
    keyArray.splice(10, 1);
  };

  const useKeyPress = () => {
    const keyDownHandler = ({ key }) => {
      if (keyArray.length < 10) {
        gameOn(key);
      } else {
        gameOver();
      }
    };

    const upHandler = ({ key }) => {
      setGuesses(keyArray.length);
      console.log(keyArray);
    };

    useEffect(() => {
      window.addEventListener("keydown", keyDownHandler);
      window.addEventListener("keyup", upHandler);
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener("keydown", keyDownHandler);
        window.removeEventListener("keyup", upHandler);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount
  };

  return (
    <React.Fragment>
      {useKeyPress()}
      <h2>Guesses: {guesses}</h2>
      <h2>KeyArray: {keyArray}</h2>
      <h2>KeyPressed: {keyValue}</h2>
      <h2>GameStatus: {gameStatus}</h2>
      <button onClick={() => restartGame()}>RESTART GAME</button>
    </React.Fragment>
  );
}
