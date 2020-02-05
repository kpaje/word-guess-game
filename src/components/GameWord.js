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

	const renderRandomWord = () => {
		return Object.entries(arrayOfObjects).map(([key, value]) => {
			return <span key={key}> {value.answer}</span>;
		});
	};

	const guess = useContext(GuessValueContext);
	const useKeyPress = () => {
		const verfiyHiddenValue = inputGuess => {
			for (const key in arrayOfObjects) {
				if (arrayOfObjects[key].answer === inputGuess) {
					arrayOfObjects[key].hidden = inputGuess;
				}
			}
		};

		useEffect(() => {
			window.addEventListener("keyup", verfiyHiddenValue(guess.guessValue));
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
		</React.Fragment>
	);
}
