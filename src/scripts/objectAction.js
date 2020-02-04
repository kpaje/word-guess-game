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
      console.log("YOU WIN");
      wins += 1;
    }
  }
};

export default objectAction;
