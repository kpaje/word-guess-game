import React, { useState, useEffect } from "react";
import { ContextProvider } from "./GuessValueContext";
import GuessValue from "./GuessValue";
import GameWord from "./GameWord";

export default function Guess() {
	const [guessValue, setGuessValue] = useState("");
	const [guessArray, setGuessArray] = useState([]);
	const [guessCount, setGuessCount] = useState(0);
	const [gameStatus, setGameStatus] = useState("IN PLAY");

	const restartGame = () => {
		setGameStatus("IN PLAY");
		setGuessCount(0);
	};

	const gameOver = () => {
		setGameStatus("GAME OVER");
	};

	const allowKeyEntries = key => {
		key = key.toUpperCase();
		setGuessValue(key);
		setGuessArray(key);
		guessArray.push(key);
		setGuessArray(guessArray);
	};

	const preventKeyEntries = () => {
		guessArray.splice(10, 1);
	};

	const resetKeyEntries = () => {
		setGuessValue("");
		setGuessArray((guessArray.length = 0));
		setGuessArray([]);
	};

	const useKeyPress = () => {
		const keyDownHandler = event => {
			if (event.repeat) {
				return; //prevent entry spam from holding down key
			}
			if (guessArray.length < 10) {
				allowKeyEntries(event.key);
			} else {
				gameOver();
				preventKeyEntries();
			}
		};

		const keyUpHandler = () => {
			setGuessCount(guessArray.length);
			// console.log(guessArray);
		};

		useEffect(() => {
			window.addEventListener("keydown", keyDownHandler);
			window.addEventListener("keyup", keyUpHandler);
		}, []); // Empty array ensures that effect is only run on mount and unmount
	};

	const updateGameStatusContext = () => {
		setGameStatus("YOU WIN");
	};

	return (
		<React.Fragment>
			<ContextProvider
				value={{
					guessValue,
					updateGameStatusContext,
					restartGame,
					resetKeyEntries
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
