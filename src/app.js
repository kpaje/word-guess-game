import React from "react";
import "./App.css";
import GameWord from "./components/GameWord";
import Guess from "./components/Guess";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Guess />
        <GameWord />
      </header>
    </div>
  );
}

export default App;
