import React from "react";
import { useState, useEffect } from "react";

export default function Guess() {
  function useKeyPress(targetKey) {
    const [keyPressed, setKeyPressed] = useState(false);

    function keyDownHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }
    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
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

    return keyPressed;
  }

  const happyPress = useKeyPress("a");
  const sadPress = useKeyPress("s");
  const robotPress = useKeyPress("d");
  const foxPress = useKeyPress("f");

  return (
    <div>
      <div>a, s, d, f</div>
      <div>
        {happyPress && "😊"}
        {sadPress && "😢"}
        {robotPress && "🤖"}
        {foxPress && "🦊"}
      </div>
    </div>
  );
}
