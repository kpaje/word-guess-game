export const allowKeyEntries = (key, setGuessValue, setGuessArray) => {
  key = key.toUpperCase();
  setGuessValue(key);
  setGuessArray(key);
};

export function allowAlphabetEntriesOnly(event) {
  const letters = /^[A-Za-z]+$/;
  const notLetter = true;
  const [key, keyCode] = event;

  if (!key.match(letters) || keyCode < 65 || keyCode > 90) {
    return notLetter;
  }
}

//prevent input spam from user holding down key
export const preventKeyEntrySpam = event => {
  const stopInputSpam = true;
  if (event.repeat) {
    return stopInputSpam;
  }
};

export const preventKeyEntries = array => {
  const stopAtMaxGuessCount = array.splice(10, 1);
  return stopAtMaxGuessCount;
};
