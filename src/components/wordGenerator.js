import React, { Component } from "react";
import { TEST_OBJECT } from "../common/constants";
import { WORD_LIST } from "../common/constants";

export default class WordGenerator extends Component {
  generateWord() {
    const randomNumber = Math.random() * WORD_LIST.length;
    const randomInteger = Math.floor(randomNumber);
    const genereatedWord = WORD_LIST[randomInteger];
    return genereatedWord;
  }
  setWordToArray(word) {
    return Array.from(word);
  }
  generateObjectFromArray(array) {
    const object = {};
    const arrayValue = [" - ", false];
    for (const key of array) {
      object[key] = arrayValue;
    }
    return object;
  }
  createWordObject() {
    const newWord = this.generateWord();
    const wordArray = this.setWordToArray(newWord);
    const wordObject = this.generateObjectFromArray(wordArray);
    return wordObject;
  }

  renderObject() {
    const object = this.createWordObject();
    Object.keys(object).map((key, i) => {
      return <div i={i}>wordGenerator: {key}</div>;
    });
  }

  // console.log("newWord: ", newWord);
  // console.log("wordArray: ", wordArray);
  // console.log("wordObject: ", wordObject);

  render() {
    return (
      <div>
        <div>
          <h2>wordGenerator</h2>
          {Object.entries(TEST_OBJECT).map(([key, value], index) => {
            return (
              <div key={key}>
                <p>answer: {value.answer}</p>
                <p>hidden: {value.hidden}</p>
                <p>reveal: {String(value.reveal)}</p>
                ---------
              </div>
            );
          })}
        </div>

        <div>Generated Word: {this.generateWord()}</div>
      </div>
    );
  }
}
