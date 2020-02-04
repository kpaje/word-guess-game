import React from "react";
import { useState, useEffect } from "react";

export default function Guess() {
  let keysPressed = [];
  const happyPress = useKeyPress("a");
  const sadPress = useKeyPress("s");
  const robotPress = useKeyPress("d");
  const foxPress = useKeyPress("f");

  //   function useKey(key) {
  //     // Keep track of key state
  //     const [pressed, setPressed] = useState(false)

  //     // Does an event match the key we're watching?
  //     const match = event => key.toLowerCase() == event.key.toLowerCase()

  //     // Event handlers
  //     const onDown = event => {
  //         if (match(event)) setPressed(true)
  //     }

  //     const onUp = event => {
  //         if (match(event)) setPressed(false)
  //     }

  //     // Bind and unbind events
  //     useEffect(() => {
  //         window.addEventListener("keydown", onDown)
  //         window.addEventListener("keyup", onUp)
  //         return () => {
  //             window.removeEventListener("keydown", onDown)
  //             window.removeEventListener("keyup", onUp)
  //         }
  //     }, [key])

  //     return pressed
  // }

  function useKeyPress(targetKey) {
    const [keyPressed, setKeyPressed] = useState(false);

    const keyDownHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    };

    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
        keysPressed.push(key);
        console.log(keysPressed);
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

  return (
    <div>
      <div>a, s, d, f</div>
      <div>{String(keysPressed)}</div>
      <div>
        {happyPress && "😊"}
        {sadPress && "😢"}
        {robotPress && "🤖"}
        {foxPress && "🦊"}
      </div>
    </div>
  );
}
