const guessAction = {
  addGuessInput(guess) {
    guesses.push(guess);
  },
  subtractGuessesRemaining() {
    guessRemaining -= 1;
  }
};

export default guessAction;
