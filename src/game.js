const wordGenerator = require('./wordGenerator');

let wins = 0;
let losses = 0;
let guessRemaining = 9;
const guesses = [];
const wordObject = wordGenerator.createWordObject();

const objectAction = {
  setMatchingBooleanValue(guess) {
    for (const key in wordObject) {
      if (key === guess) {
        wordObject[key][1] = true; // Set wordObject Boolean
      }
    }
  },
  setMatchingGuessValue(guess) {
    for (const key in wordObject) {
      if (key === guess) {
        wordObject[key][0] = guess; // set wordObject letter value
      }
    }
  },
  setGameWord() {
    for (const key in wordObject) {
      const blankKey = wordObject[key][0];
      console.log([blankKey]); // set wordObject to mystery values
    }
  },
  isAllBooleansTrue(object) {
    const objectKeys = Object.keys(object);
    const isAllTrue = objectKeys.every(key => {
      const itemBoolean = object[key][1];
      return itemBoolean;
    });

    if (isAllTrue === true) {
      console.log('YOU WIN');
      wins += 1;
    }
  },
};

const guessAction = {
  addGuessInput(guess) {
    guesses.push(guess);
  },
  subtractGuessesRemaining() {
    guessRemaining -= 1;
  },
};

const resolver = {
  resolveGuessInput(guess) {
    guessAction.subtractGuessesRemaining();
    guessAction.addGuessInput(guess);
  },
  resolveObjects(guess) {
    objectAction.setMatchingBooleanValue(guess);
    objectAction.setMatchingGuessValue(guess);
    objectAction.isAllBooleansTrue(wordObject);
  },
  resolveUserEntry(guess) {
    resolver.resolveGuessInput(guess);
    resolver.resolveObjects(guess);
  },
  gameOver() {
    if (guessRemaining < 1) {
      console.log('GAME OVER');
      losses += 1;
    }
  },
};

objectAction.setGameWord();

// resolver.resolveUserEntry("F");
// resolver.resolveUserEntry("U");
// resolver.resolveUserEntry("B");
// resolver.resolveUserEntry("A");
// resolver.resolveUserEntry("R");
// objectAction.isAllBooleansTrue(wordObject);
// console.log("wins: ", wins);
// console.log("losses: ", losses);
// console.log("guessRemainingUPDATED: ", guessRemaining);
// console.log("guesses: ", guesses);
