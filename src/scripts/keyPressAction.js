export const allowKeyEntries = (key, setGuessValue, setGuessArray) => {
  key = key.toUpperCase();
  setGuessValue(key);
  setGuessArray(key);
};

export function allowAlphabetEntriesOnly(event) {
  const letters = /^[A-Za-z]+$/;
  const notLetter = true;
  if (!event.key.match(letters) || event.keyCode < 65 || event.keyCode > 90) {
    return notLetter;
  }
}

export const preventKeyEntrySpam = event => {
  const stopInputSpam = true;
  if (event.repeat) {
    return stopInputSpam; //prevent input spam from holding down key
  }
};

export const preventKeyEntries = array => {
  array.splice(10, 1);
};
