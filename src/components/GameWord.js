import React, { Component } from "react";
import { setArrayofObjects } from "../scripts/objectAction";
import { randomWord } from "../scripts/wordGenerator";

let generatedWord = randomWord();
let arrayofObjects = setArrayofObjects(generatedWord);

const renderRandomWord = () => {
  return Object.entries(arrayofObjects).map(([key, value]) => {
    return <div key={key}>{value.answer}</div>;
  });
};

const renderObject = () => {
  return Object.entries(arrayofObjects).map(([key, value]) => {
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

export default class GameWord extends Component {
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
