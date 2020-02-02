const wordGenerator = {
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
		return wordList[randomInteger];
	},
	setWordToArray: function(word) {
		return Array.from(word);
	},
	generateObjectFromArray: function(array) {
		let object = {};
		for (const key of array) {
			object[key] = [" - ", false];
		}
		return object;
	},
	createWordObject: function() {
		const newWord = wordGenerator.generateWord();
		const wordArray = wordGenerator.setWordToArray(newWord);
		const wordObject = wordGenerator.generateObjectFromArray(wordArray);

		console.log("newWord: ", newWord);
		console.log("wordArray: ", wordArray);
		console.log("wordObject: ", wordObject);
		return wordObject;
	}
};

export default wordGenerator;
