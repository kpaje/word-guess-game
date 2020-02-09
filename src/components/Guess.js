import React, { useState, useEffect } from "react";
import { ContextProvider } from "./GuessValueContext";
import GuessValue from "./GuessValue";
import GameWord from "./GameWord";
import {
  allowKeyEntries,
  allowAlphabetEntriesOnly,
  preventKeyEntrySpam
} from "../scripts/keyPressAction";

export default function Guess() {
  const [guessValue, setGuessValue] = useState("");
  const [guessArray, setGuessArray] = useState([]);
  const [guessCount, setGuessCount] = useState(0);
  const [gameStatus, setGameStatus] = useState(true);
  const [gameMessage, setGameMessage] = useState("IN PLAY");

  const pushKeyEntryToArray = key => {
    key = key.toUpperCase();
    guessArray.push(key);
    setGuessArray(guessArray);
  };

  const preventKeyEntries = () => {
    guessArray.splice(10, 1);
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
        allowKeyEntries(event.key, setGuessValue, setGuessArray);
        pushKeyEntryToArray(event.key);
      } else {
        setGameStatus(false);
        setGameMessage("GAME OVER");
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

const GameStatus = props => {
  return <h2>gameStatus: {props.gameStatus}</h2>;
};
