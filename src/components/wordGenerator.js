import React, { Component } from "react";

export default class WordGenerator extends Component {
  generateWord() {
    const wordList = [
      "FUBAR",
      "SNAFU",
      "TARFU",
      "FUGAZI",
      "BCD",
      "LLMF",
      "MANPADS"
    ];
    const randomNumber = Math.random() * wordList.length;
    const randomInteger = Math.floor(randomNumber);
    const genereatedWord = wordList[randomInteger];
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
  testObject() {
    const objTest = {
      0: {
        answer: "F",
        hidden: "-",
        reveal: false
      }
    };

    return Object.entries(objTest).map(([key, value], index) => {
      return (
        <div key={key}>
          <p>answer: {value.answer}</p>
          <p>hidden: {value.hidden}</p>
          <p>reveal: {String(value.reveal)}</p>
        </div>
      );
    });
  }

  createWordObject() {
    const newWord = this.generateWord();
    const wordArray = this.setWordToArray(newWord);
    const wordObject = this.generateObjectFromArray(wordArray);
    return wordObject;
  }

  renderObject() {
    const object = this.createWordObject();
    console.log(object);
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
        <div>wordGenerator: {this.testObject()}</div>

        <div>Generated Word: {this.generateWord()}</div>
      </div>
    );
  }
}
