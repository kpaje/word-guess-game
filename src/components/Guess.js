import React from "react";
import { useState, useEffect } from "react";

export default function Guess() {
  const [keyValue, setkeyValue] = useState("");
  const [keyArray, setkeyArray] = useState([]);

  const useKeyPress = () => {
    const keyDownHandler = ({ key }) => {
      key = key.toUpperCase();
      setkeyValue(key);
      setkeyArray(key);
      keyArray.push(key);
      setkeyArray(keyArray);
    };

    const upHandler = ({ key }) => {
      // setkeyValue("");
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
      <h2>KeyPressed: {keyValue}</h2>
      <h2>KeyArray: {keyArray}</h2>
    </React.Fragment>
  );
}
