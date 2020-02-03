import wordGenerator from "./wordGenerator";

let wins = 0;
let losses = 0;
let guess;
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

		// console.log("isMatchingGuessValue: ", wordObject);
	},

	setMatchingValue: function(guess) {
		for (let key in wordObject) {
			if (key === guess) {
				wordObject[key][0] = guess; //set wordObject letter value
			}
		}
		// console.log("setValue: ", wordObject);
	}
};

const guessAction = {
	addGuessInput: function(guess) {
		guesses.push(guess);
	},
	subtractGuessesRemaining: function() {
		let newGuessRemaining = guessRemaining - 1;
		// console.log("guesses remaining: ", newGuessRemaining);
		return newGuessRemaining;
	},
	getGuessIndex: function() {
		const position = randomWord.indexOf(guess.toString());
		// console.log("Index guess position is: ", position);
		return position;
	},
	gameOver: function() {
		if (guessRemaining < 1) {
			console.log("GAME OVER");
		}
	}
};

const handlers = {
	resolveGuessInput: function(guess) {
		guessAction.addGuessInput(guess);
		checker.isMatchingGuessValue(guess);
		checker.setMatchingValue(guess);

		// console.log("wordObject: ", wordObject);
		// console.log("guesses: ", guesses);
	},
	checkIfAllTrue: function(object) {
		let objectKeys = Object.keys(object);
		let isAllTrue = objectKeys.every(key => {
			let boolean = object[key][1];
			return boolean;
		});

		if (isAllTrue === true) {
			console.log("YOU WIN");
		}
	}
};

handlers.resolveGuessInput("F");
handlers.resolveGuessInput("U");
handlers.resolveGuessInput("B");
handlers.resolveGuessInput("A");
handlers.resolveGuessInput("R");
handlers.checkIfAllTrue(wordObject);
console.log(wordObject);
