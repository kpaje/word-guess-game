import wordGenerator from "./wordGenerator";
import inquirer from "inquirer";

let wins = 0;
let losses = 0;
let guess;
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
      wins += 1;
    }
  }
};

const guessAction = {
  addGuessInput: function(guess) {
    guesses.push(guess);
  },
  subtractGuessesRemaining: function() {
    guessRemaining -= 1;
  }
};

const resolver = {
  resolveGuessInput: function(guess) {
    guessAction.subtractGuessesRemaining();
    guessAction.addGuessInput(guess);
  },
  resolveObjects: function(guess) {
    objectAction.setMatchingBooleanValue(guess);
    objectAction.setMatchingGuessValue(guess);
    objectAction.isAllBooleansTrue(wordObject);
  },
  resolveUserEntry: function(guess) {
    resolver.resolveGuessInput(guess);
    resolver.resolveObjects(guess);
  },
  gameOver: function() {
    if (guessRemaining < 1) {
      console.log("GAME OVER");
      losses += 1;
    }
  }
};

inquirer
  .prompt([
    {
      name: "inputGuess",
      message: "Guess a Letter"
    }
  ])
  .then(answers => {
    guess = answers.inputGuess.toUpperCase();
    console.info("Your Guess: ", guess);

    resolver.resolveUserEntry(guess);
    console.log("wordObject: ", wordObject);
  });

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
