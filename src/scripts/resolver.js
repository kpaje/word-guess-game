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
      console.log("GAME OVER");
      losses += 1;
    }
  }
};

export default resolver;
