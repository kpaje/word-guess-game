/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import RenderObject from "./RenderObject";
import { createArrayOfObjects } from "../scripts/objectAction";
import { randomWord } from "../scripts/wordGenerator";
import GuessValueContext from "./GuessValueContext";

export default function GameWord() {
  const [generatedWord, setgeneratedWord] = useState(randomWord());
  const [arrayOfObjects, setarrayOfObjects] = useState(
    createArrayOfObjects(generatedWord)
  );
  const GuessContext = useContext(GuessValueContext);

  const renderRandomWord = () => {
    return Object.entries(arrayOfObjects).map(([key, value]) => {
      return <span key={key}> {value.answer}</span>;
    });
  };

  const setNewWord = () => {
    setgeneratedWord(randomWord());
    setarrayOfObjects(createArrayOfObjects(generatedWord));
  };

  const useKeyPress = () => {
    const isAllValuesRevealed = Object.keys(arrayOfObjects).every(
      key => arrayOfObjects[key].reveal === true
    );

    const verifyIfAllValuesRevealed = () => {
      if (isAllValuesRevealed) {
        GuessContext.setGameStatus(false);
        GuessContext.setGameMessage("YOU WIN");
      }
    };

    const revealHiddenLetter = (inputGuess, key) => {
      arrayOfObjects[key].hidden = inputGuess;
      arrayOfObjects[key].reveal = true;
    };

    const setValueReveal = inputGuess => {
      for (const key in arrayOfObjects) {
        const isGuessEqualToAnswer = arrayOfObjects[key].answer === inputGuess;

        if (isGuessEqualToAnswer) {
          revealHiddenLetter(inputGuess, key);
        }
      }
    };

    const verfiyAgainstHiddenValues = inputGuess => {
      verifyIfAllValuesRevealed();
      setValueReveal(inputGuess);
    };

    useEffect(() => {
      window.addEventListener(
        "keyup",
        verfiyAgainstHiddenValues(GuessContext.guessValue)
      );
    });
  };

  return (
    <React.Fragment>
      {useKeyPress()}
      <h2>GameWord: {renderRandomWord()}</h2>
      <table>
        <tbody>
          <tr>
            <th>-Answer-</th>
            <th>-Hidden-</th>
            <th>-Reveal-</th>
          </tr>
          <RenderObject object={arrayOfObjects} />
        </tbody>
      </table>
      <button
        onClick={() => {
          setNewWord();
          GuessContext.setGameStatus(true);
          GuessContext.setGameMessage("IN PLAY");
          GuessContext.resetGuessEntries();
          GuessContext.setGuessCount(0);
        }}
      >
        RESTART GAME
      </button>
    </React.Fragment>
  );
}
