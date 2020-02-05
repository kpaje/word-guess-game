import React, { useState } from "react";
import { createArrayOfObjects } from "../scripts/objectAction";
import { randomWord } from "../scripts/wordGenerator";

export default function GameWord() {
  const [generatedWord, setgeneratedWord] = useState(randomWord());
  const [arrayOfObjects, setarrayOfObjects] = useState(
    createArrayOfObjects(generatedWord)
  );

  const renderRandomWord = () => {
    return Object.entries(arrayOfObjects).map(([key, value]) => {
      return <span key={key}> {value.answer}</span>;
    });
  };

  const renderObject = () => {
    return Object.entries(arrayOfObjects).map(([key, value]) => {
      return (
        <tr key={key}>
          <td>{value.answer}</td>
          <td>{value.hidden}</td>
          <td>{String(value.reveal)}</td>
        </tr>
      );
    });
  };

  return (
    <React.Fragment>
      <h2>GameWord: {renderRandomWord()}</h2>
      <table>
        <tbody>
          <tr>
            <th>-Answer-</th>
            <th>-Hidden-</th>
            <th>-Reveal-</th>
          </tr>
          {renderObject()}
        </tbody>
      </table>
    </React.Fragment>
  );
}
