import React, { useState } from "react";
import RenderObject from "./RenderObject";
import { createArrayOfObjects } from "../scripts/objectAction";
import { randomWord } from "../scripts/wordGenerator";

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

	const checkHiddenValue = guess => {
		for (const key in arrayOfObjects) {
			if (arrayOfObjects[key].answer === guess) {
				arrayOfObjects[key].hidden = guess;
			}
		}
	};
	checkHiddenValue("F");
	checkHiddenValue("B");

	return (
		<React.Fragment>
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
