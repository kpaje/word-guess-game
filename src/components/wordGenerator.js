import React, { Component } from "react";
import { WORD_LIST } from "../common/constants";

let generatedWord;

const randomWord = () => {
  const randomNumber = Math.random() * WORD_LIST.length;
  const randomInteger = Math.floor(randomNumber);
  const randomWord = WORD_LIST[randomInteger];
  return randomWord;
};

const setRandomWord = () => {
  generatedWord = randomWord();
  return generatedWord;
};

const formatObjects = (letter, array) => {
  const newObject = {
    answer: letter,
    hidden: "-",
    reveal: false
  };
  return array.push(newObject);
};

const arrayOfObjects = array => {
  const arrayOfObjects = [];
  array.forEach(element => {
    formatObjects(element, arrayOfObjects);
  });
  return arrayOfObjects;
};

const setArrayofObjects = word => {
  let wordArray = Array.from(word);
  let formatArrayOfObjects = arrayOfObjects(wordArray);
  return formatArrayOfObjects;
};

const renderRandomWord = () => {
  setRandomWord();
  let arrayofObjects = setArrayofObjects(generatedWord);
  let gameWord = Object.entries(arrayofObjects).map(([key, value], index) => {
    return <div key={key}>{value.answer}</div>;
  });
  return gameWord;
};

const renderObject = () => {
  let arrayofObjects = setArrayofObjects(generatedWord);
  return Object.entries(arrayofObjects).map(([key, value], index) => {
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
          <div>{renderRandomWord()}</div>
          <h2>wordGenerator</h2>
          {renderObject()}
        </div>
      </div>
    );
  }
}
