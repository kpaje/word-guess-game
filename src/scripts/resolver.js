const resolver = {
  resolveGuessInput(guess) {
    subtractGuessesRemaining();
    addGuessInput(guess);
  },
  resolveObjects(guess) {
    setMatchingBooleanValue(guess);
    setMatchingGuessValue(guess);
    isAllBooleansTrue(wordObject);
  },
  resolveUserEntry(guess) {
    resolveGuessInput(guess);
    resolveObjects(guess);
  },
  gameOver() {
    if (guessRemaining < 1) {
      console.log("GAME OVER");
      losses += 1;
    }
  }
};
