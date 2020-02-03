import wordGenerator from "./wordGenerator";

let wins = 0;
let losses = 0;
let guessRemaining = 9;
let guesses = [];
const wordObject = wordGenerator.createWordObject();

const objectAction = {
	setMatchingBooleanValue: function(guess) {
		for (let key in wordObject) {
			if (key === guess) {
				wordObject[key][1] = true; // Set wordObject Boolean
			}
		}
	},
	setMatchingGuessValue: function(guess) {
		for (let key in wordObject) {
			if (key === guess) {
				wordObject[key][0] = guess; //set wordObject letter value
			}
		}
	},
	isAllBooleansTrue: function(object) {
		let objectKeys = Object.keys(object);
		let isAllTrue = objectKeys.every(key => {
			let itemBoolean = object[key][1];
			return itemBoolean;
		});

		if (isAllTrue === true) {
			console.log("YOU WIN");
		}
	}
};

const guessAction = {
	addGuessInput: function(guess) {
		guesses.push(guess);
	},
	subtractGuessesRemaining: function() {
		guessRemaining = guessRemaining - 1;
	}
};

const handlers = {
	resolveGuessInput: function(guess) {
		guessAction.subtractGuessesRemaining();
		guessAction.addGuessInput(guess);
	},
	resolveObjects: function(guess) {
		objectAction.setMatchingBooleanValue(guess);
		objectAction.setMatchingGuessValue(guess);
		objectAction.isAllBooleansTrue(wordObject);
	},
	resolveEntry: function(guess) {
		handlers.resolveGuessInput(guess);
		handlers.resolveObjects(guess);
	},
	gameOver: function() {
		if (guessRemaining < 1) {
			console.log("GAME OVER");
		}
	}
};

handlers.resolveEntry("F");
handlers.resolveEntry("U");
// handlers.resolveEntry("B");
handlers.resolveEntry("A");
handlers.resolveEntry("R");
// objectAction.isAllBooleansTrue(wordObject);
console.log("guessRemainingUPDATED: ", guessRemaining);
console.log("wordObject: ", wordObject);
console.log("guesses: ", guesses);
