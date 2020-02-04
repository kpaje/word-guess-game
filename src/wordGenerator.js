const wordGenerator = {
  generateWord() {
    const wordList = [
      'FUBAR',
      // "SNAFU",
      // "TARFU",
      // "FUGAZI",
      // "BCD",
      // "LLMF",
      // "MANPADS"
    ];
    const randomNumber = Math.random() * wordList.length;
    const randomInteger = Math.floor(randomNumber);
    const genereatedWord = wordList[randomInteger];
    return genereatedWord;
  },
  setWordToArray(word) {
    return Array.from(word);
  },
  generateObjectFromArray(array) {
    const object = {};
    for (const key of array) {
      object[key] = [' - ', false];
    }
    return object;
  },
  createWordObject() {
    const newWord = wordGenerator.generateWord();
    const wordArray = wordGenerator.setWordToArray(newWord);
    const wordObject = wordGenerator.generateObjectFromArray(wordArray);
    return wordObject;
  },
};

module.exports = wordGenerator;

// console.log("newWord: ", newWord);
// console.log("wordArray: ", wordArray);
// console.log("wordObject: ", wordObject);
