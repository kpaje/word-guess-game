import React, { useState, useEffect } from "react";
import { ContextProvider } from "./GuessValueContext";
import GuessValue from "./GuessValue";
import GameWord from "./GameWord";

export default function Guess() {
  const [guessValue, setGuessValue] = useState("");
  const [guessArray, setGuessArray] = useState([]);
  const [guessCount, setGuessCount] = useState(0);
  const [gameStatus, setGameStatus] = useState("IN PLAY");

  function allowAlphabetEntriesOnly(event) {
    const letters = /^[A-Za-z]+$/;
    const notLetter = true;
    if (!event.key.match(letters) || event.keyCode < 65 || event.keyCode > 90) {
      return notLetter;
    }
  }

  const allowKeyEntries = key => {
    key = key.toUpperCase();
    setGuessValue(key);
    setGuessArray(key);
  };

  const pushKeyEntryToArray = key => {
    key = key.toUpperCase();
    guessArray.push(key);
    setGuessArray(guessArray);
  };

  const preventKeyEntries = () => {
    guessArray.splice(10, 1);
  };

  const preventKeyEntrySpam = event => {
    const stopInputSpam = true;
    if (event.repeat) {
      return stopInputSpam; //prevent input spam from holding down key
    }
  };

  const resetGuessArray = () => {
    setGuessArray((guessArray.length = 0));
    setGuessArray([]);
  };

  const resetKeyEntries = () => {
    setGuessValue("");
    resetGuessArray();
  };

  const useKeyPress = () => {
    const keyDownHandler = event => {
      if (allowAlphabetEntriesOnly(event) || preventKeyEntrySpam(event)) {
        return;
      }
      if (guessArray.length < 10) {
        allowKeyEntries(event.key);
        pushKeyEntryToArray(event.key);
      } else {
        setGameStatus("GAME OVER");
        preventKeyEntries();
      }
    };

    const keyUpHandler = () => {
      setGuessCount(guessArray.length);
    };

    useEffect(() => {
      window.addEventListener("keydown", keyDownHandler);
      window.addEventListener("keyup", keyUpHandler);
    }, []); // Empty array ensures that effect is only run on mount and unmount
  };

  return (
    <React.Fragment>
      <ContextProvider
        value={{
          guessValue,
          resetKeyEntries,
          setGameStatus,
          setGuessCount
        }}
      >
        <GameWord />
      </ContextProvider>

      {useKeyPress()}
      <h2>GuessCount: {guessCount}</h2>
      <h2>GuessArray: {guessArray}</h2>
      <GuessValue guessValue={guessValue} />
      <GameStatus gameStatus={gameStatus} />
    </React.Fragment>
  );
}

const GameStatus = props => {
  return <h2>gameStatus: {props.gameStatus}</h2>;
};
