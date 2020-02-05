import React from "react";
import { useState, useEffect } from "react";

export default function Guess() {
  const [keyValue, setKeyValue] = useState("");
  const [keyArray, setKeyArray] = useState([]);
  const [guesses, setGuesses] = useState(0);

  const useKeyPress = () => {
    const keyDownHandler = ({ key }) => {
      key = key.toUpperCase();
      setKeyValue(key);
      setKeyArray(key);
      keyArray.push(key);
      setKeyArray(keyArray);
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
      {keyArray.length > 9 ? <h2>GAME OVER</h2> : null}
      <h2>KeyPressed: {keyValue}</h2>
      <h2>KeyArray: {keyArray}</h2>
    </React.Fragment>
  );
}
