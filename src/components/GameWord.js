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
  console.log(generatedWord);

  const useKeyPress = () => {
    const verifyIfAllRevealed = () => {
      const isAllRevealValuesTrue = Object.keys(arrayOfObjects).every(
        key => arrayOfObjects[key].reveal === true
      );
      if (isAllRevealValuesTrue) {
        GuessContext.updateGameStatusContext();
      }
    };

    const verfiyHiddenValue = inputGuess => {
      verifyIfAllRevealed();
      for (const key in arrayOfObjects) {
        if (arrayOfObjects[key].answer === inputGuess) {
          arrayOfObjects[key].hidden = inputGuess;
          arrayOfObjects[key].reveal = true;
        }
      }
    };

    useEffect(() => {
      window.addEventListener(
        "keyup",
        verfiyHiddenValue(GuessContext.guessValue)
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
      <button onClick={() => setNewWord()}>NEWWORD</button>
    </React.Fragment>
  );
}
