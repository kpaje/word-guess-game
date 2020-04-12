import React, { useState, useEffect } from "react";
import { ContextProvider } from "./GuessValueContext";
import GuessValue from "./GuessValue";
import GameWord from "./GameWord";
import GameStatus from "./GameStatus";
import {
  allowKeyEntries,
  allowAlphabetEntriesOnly,
  preventKeyEntrySpam,
  preventKeyEntries
} from "../scripts/keyPressAction";

export default function Guess() {
  const [guessValue, setGuessValue] = useState("");
  const [guessArray, setGuessArray] = useState([]);
  const [guessCount, setGuessCount] = useState(0);
  const [gameStatus, setGameStatus] = useState(true);
  const [gameMessage, setGameMessage] = useState("IN PLAY");

  const pushGuessEntryToArray = key => {
    key = key.toUpperCase();
    guessArray.push(key);
    setGuessArray(guessArray);
  };

  const resetGuessArray = () => {
    setGuessArray((guessArray.length = 0));
    setGuessArray([]);
  };

  const resetGuessEntries = () => {
    setGuessValue("");
    resetGuessArray();
  };

  const useKeyPress = () => {
    const keyDownHandler = event => {
      if (allowAlphabetEntriesOnly(event) || preventKeyEntrySpam(event)) {
        return;
      }

      const setGameOver = () => {
        setGameStatus(false);
        setGameMessage("GAME OVER");
        preventKeyEntries(guessArray);
      };

      // const guessesLeft = guessArray.length;
      if (guessCount < 10) {
        allowKeyEntries(event.key, setGuessValue, setGuessArray);
        pushGuessEntryToArray(event.key);
      } else {
        setGameOver();
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
      {/* imports functions from other/external components */}
      <ContextProvider
        value={{
          guessValue,
          resetGuessEntries,
          setGameStatus,
          setGuessCount,
          setGameMessage
        }}
      >
        <GameWord />
      </ContextProvider>

      {useKeyPress()}
      <h2>GuessCount: {guessCount}</h2>
      <h2>GuessArray: {guessArray}</h2>
      <GuessValue guessValue={guessValue} />
      <GameStatus gameStatus={String(gameStatus)} />
      <h2>GameMessage: {gameMessage}</h2>
    </React.Fragment>
  );
}
