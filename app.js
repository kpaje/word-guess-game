const guess = "b";
let wins = 0;
let losses = 0;
let guessRemaining = 9;
let wordArray = ["a", "b", "c"];
let guesses = [];
let randomWord = "qqqqqqqb";

const action = {
	generateWord: function() {
		const wordList = [
			"FUBAR",
			"SNAFU",
			"TARFU",
			"FUGAZI",
			"BCD",
			"LLMF",
			"MANPADS",
			"PPPPPPP"
		];
		let randomNumber = Math.random() * wordList.length;
		let randomInteger = Math.floor(randomNumber);
		let newWord = wordList[randomInteger];
		return newWord;
	},
	setWordToArray: function() {
		wordArray = Array.from(this.generateWord());
	},
	createHiddenArray: function() {
		randomWord = this.setWordToArray();
		const hiddenArray = randomWord.map(function() {
			return " _ ";
		});
		return hiddenArray;
	},
	logGuessInput: function() {
		guesses.push(guess);
	},
	subtractGuessRemaining: function() {
		let newGuessRemaining = guessRemaining - 1;
		return newGuessRemaining;
	},
	isLetterInArray: function(guess) {
		var findLetterInIndex = wordArray.findIndex(i => i === guess);
		const noMatches = -1;

		if (findLetterInIndex != noMatches) {
			console.log("Letter [" + guess + "] is in Array");
			return true;
		} else {
			console.log("Letter [" + guess + "] is not in Array");
			return false;
		}
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

guessGameAction.gameOver();

// const handlers = {
// 	setWordToArray: function() {
// 		document.getElementById(
// 			"convertToArray"
// 		).innerHTML = guessGameAction.setWordToArray();
// 	},
// 	hideArray: function() {
// 		window.addEventListener("pageshow", function(event) {
// 			document.getElementById(
// 				"hideArray"
// 			).innerHTML = guessGameAction.hideArray();
// 		});
// 	},
// 	logGuessInput: function() {
// 		window.addEventListener(
// 			"keypress",
// 			function(event) {
// 				if (event.keyCode) {
// 					guess.push(event.key);
// 					guessGameAction.logGuessInput();
// 					console.log("guess: ", guess);
// 				}
// 			},
// 			false
// 		);
// 		view.displayGuessGame();
// 	},
// 	addToGuessArray: function() {
// 		window.addEventListener(
// 			"keypress",
// 			function(event) {
// 				if (event.keyCode) {
// 					guessArray.push(event.key);
// 					guessGameAction.addToGuessArray();
// 					console.log("guessArray = ", guessArray);
// 				}
// 			},
// 			false
// 		);
// 		view.displayGuessGame();
// 	},
// 	subtractGuessRemaining: function() {
// 		window.addEventListener("keypress", function(event) {
// 			guessRemaining--;
// 			guessGameAction.subtractGuessRemaining();
// 		});
// 	},
// 	isLetterPresent: function() {
// 		window.addEventListener("keypress", function() {
// 			guessGameAction.isLetterPresent();
// 			guess = [];
// 		});
// 	},
// 	getAllIndexes: function() {
// 		window.addEventListener("keypress", function(event) {
// 			guessGameAction.getAllIndexes();
// 		});
// 	},
// 	populateIndexMatches: function() {
// 		window.addEventListener("keypress", function(event) {
// 			guessGameAction.populateIndexMatches();
// 		});
// 	},
// 	gameOver: function() {
// 		window.addEventListener("keypress", function(event) {
// 			if (guessRemaining < 1) {
// 				guessGameAction.gameOver();
// 			}
// 		});
// 		view.displayGuessGame();
// 	}
// };

// const view = {
// 	displayGuessGame: function() {
// 		// call(handlers())
// 	}
// };
