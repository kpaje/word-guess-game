import wordGenerator from "./wordGenerator";

const guess = "A";
let wins = 0;
let losses = 0;
let guessRemaining = 9;

let guesses = [];
let randomWord = "qqwertybb";
const wordObject = wordGenerator.createWordObject();

const checker = {
	isMatchingGuessValue: function(guess) {
		for (let key in wordObject) {
			if (key === guess) {
				wordObject[key][1] = true; // Set wordObject Boolean
			}
		}

		console.log("isMatchingGuessValue: ", wordObject);
	},

	setMatchingValue: function() {
		for (let key in wordObject) {
			if (key === guess) {
				wordObject[key][0] = guess; //set wordObject letter value
			}
		}
		console.log("setValue: ", wordObject);
	}
};

checker.isMatchingGuessValue(guess);
checker.setMatchingValue();

const guessAction = {
	addGuessInput: function(guess) {
		guesses.push(guess);
	},
	subtractGuessRemaining: function() {
		let newGuessRemaining = guessRemaining - 1;
		console.log("guesses remaining: ", newGuessRemaining);
		return newGuessRemaining;
	},

	getGuessIndex: function() {
		const position = randomWord.indexOf(guess.toString());
		console.log("Index guess position is: ", position);
		return position;
	},
	gameOver: function() {
		if (guessRemaining < 1) {
			console.log("GAME OVER");
		}
	}
};
