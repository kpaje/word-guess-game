export const formatObjects = (letter, array) => {
  const newObject = {
    answer: letter,
    hidden: "-",
    reveal: false
  };
  return array.push(newObject);
};

export const arrayOfObjects = array => {
  const arrayOfObjects = [];
  array.forEach(element => {
    formatObjects(element, arrayOfObjects);
  });
  return arrayOfObjects;
};

export const createArrayOfObjects = word => {
  let wordArray = Array.from(word);
  let arrayOfObjectsRes = arrayOfObjects(wordArray);
  return arrayOfObjectsRes;
};
