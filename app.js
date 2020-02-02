const guess = "A";
let wins = 0;
let losses = 0;
let guessRemaining = 9;
let wordArray = [];
let guesses = [];
let randomWord = "qqwertybb";
const wordObject = {};

const word = {
	generateWord: function() {
		const wordList = [
			"FUBAR",
			"SNAFU",
			"TARFU",
			"FUGAZI",
			"BCD",
			"LLMF",
			"MANPADS"
		];
		let randomNumber = Math.random() * wordList.length;
		let randomInteger = Math.floor(randomNumber);
		let newWord = wordList[randomInteger];

		console.log("newWord: ", newWord);
		return newWord;
	},
	setWordToArray: function() {
		let generatedWord = this.generateWord();
		wordArray = Array.from(generatedWord);

		console.log("wordArray: ", wordArray);
		return wordArray;
	},
	createObjectFromArray: function() {
		randomWord = this.setWordToArray();
		for (const key of randomWord) {
			wordObject[key] = [" - ", key, false];
		}

		console.log("wordObject: ", wordObject);
		return wordObject;
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
	checkForMatchingGuessValue: function(guess) {
		for (let key in wordObject) {
			let wordObjectletterValue = wordObject[key][1];

			if (wordObjectletterValue === guess) {
				wordObject[key][2] = true; // Set wordObject Boolean
			}
		}

		console.log("wordObjectAfter: ", wordObject);
	}
};

// word.createObjectFromArray();
word.checkForMatchingGuessValue(guess);

const action = {
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

// action.getGuessIndex();
