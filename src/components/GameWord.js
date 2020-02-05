import React, { Component } from "react";
import { setArrayofObjects } from "../scripts/objectAction";
import { randomWord } from "../scripts/wordGenerator";

let generatedWord = randomWord();
let arrayofObjects = setArrayofObjects(generatedWord);

const renderRandomWord = () => {
  return Object.entries(arrayofObjects).map(([key, value]) => {
    return <span key={key}> {value.answer}</span>;
  });
};

const renderObject = () => {
  return Object.entries(arrayofObjects).map(([key, value]) => {
    return (
      <tr key={key}>
        <td>{value.answer}</td>
        <td>{value.hidden}</td>
        <td>{String(value.reveal)}</td>
      </tr>
    );
  });
};

export default class GameWord extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>GameWord: {renderRandomWord()}</h2>
          <h2>wordGenerator</h2>
          <table>
            <tr>
              <th>-Answer-</th>
              <th>-Hidden-</th>
              <th>-Reveal-</th>
            </tr>
            {renderObject()}
          </table>
        </div>
      </div>
    );
  }
}
