const handlers = {
	setWordToArray: function() {
		document.getElementById(
			"convertToArray"
		).innerHTML = guessGameAction.setWordToArray();
	},
	hideArray: function() {
		window.addEventListener("pageshow", function(event) {
			document.getElementById(
				"hideArray"
			).innerHTML = guessGameAction.hideArray();
		});
	},
	logGuessInput: function() {
		window.addEventListener(
			"keypress",
			function(event) {
				if (event.keyCode) {
					guess.push(event.key);
					guessGameAction.logGuessInput();
					console.log("guess: ", guess);
				}
			},
			false
		);
		view.displayGuessGame();
	},
	addToGuessArray: function() {
		window.addEventListener(
			"keypress",
			function(event) {
				if (event.keyCode) {
					guessArray.push(event.key);
					guessGameAction.addToGuessArray();
					console.log("guessArray = ", guessArray);
				}
			},
			false
		);
		view.displayGuessGame();
	},
	subtractGuessRemaining: function() {
		window.addEventListener("keypress", function(event) {
			guessRemaining--;
			guessGameAction.subtractGuessRemaining();
		});
	},
	isLetterPresent: function() {
		window.addEventListener("keypress", function() {
			guessGameAction.isLetterPresent();
			guess = [];
		});
	},
	getAllIndexes: function() {
		window.addEventListener("keypress", function(event) {
			guessGameAction.getAllIndexes();
		});
	},
	populateIndexMatches: function() {
		window.addEventListener("keypress", function(event) {
			guessGameAction.populateIndexMatches();
		});
	},
	gameOver: function() {
		window.addEventListener("keypress", function(event) {
			if (guessRemaining < 1) {
				guessGameAction.gameOver();
			}
		});
		view.displayGuessGame();
	}
};

module.exports = handlers;
