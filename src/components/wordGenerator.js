import React, { Component } from "react";
import { TEST_OBJECT } from "../common/constants";
import { WORD_LIST } from "../common/constants";

const generateWord = () => {
  const randomNumber = Math.random() * WORD_LIST.length;
  const randomInteger = Math.floor(randomNumber);
  const genereatedWord = WORD_LIST[randomInteger];
  return genereatedWord;
};
const setWordToArray = word => {
  return Array.from(word);
};
const generateObjectFromArray = array => {
  let word = generateWord();
  word = setWordToArray(word);

  console.log(word);

  const newArr = [];
  const newObj = {
    answer: "X",
    hidden: "-",
    reveal: false
  };

  newArr.push(newObj);
  console.log(newArr);

  return newObj;
};
const createWordObject = () => {
  const newWord = generateWord();
  const wordArray = setWordToArray(newWord);
  const wordObject = generateObjectFromArray(wordArray);
  return wordObject;
};

const renderObject = () => {
  generateObjectFromArray();
  return Object.entries(TEST_OBJECT).map(([key, value], index) => {
    return (
      <div key={key}>
        <p>answer: {value.answer}</p>
        <p>hidden: {value.hidden}</p>
        <p>reveal: {String(value.reveal)}</p>
        ---------
      </div>
    );
  });
};

export default class WordGenerator extends Component {
  render() {
    return (
      <div>
        <div>
          <div>Generated Word: {generateWord()}</div>
          <h2>wordGenerator</h2>
          {renderObject()}
        </div>
      </div>
    );
  }
}
