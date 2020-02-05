import React from "react";

export default function Game() {
  const [guesses, setGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState("IN PLAY");

  const restartGame = () => {
    setGameStatus("IN PLAY");
    setGuesses(0);
  };

  const gameOver = () => {
    setGameStatus("GAME OVER");
  };

  return (
    <React.Fragment>
      <h2>Guesses: {guesses}</h2>
      <h2>GameStatus: {gameStatus}</h2>
      <button
        onClick={() => {
          restartGame();
          resetGameHistory();
        }}
      >
        RESTART GAME
      </button>
    </React.Fragment>
  );
}
