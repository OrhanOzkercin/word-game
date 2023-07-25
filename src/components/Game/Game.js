import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import WordInput from "../WordInput/WordInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const handleGuessSubmit = (newGuess) => {
    setGuesses([...guesses, newGuess]);
  };
  return (
    <>
      <GuessResults guesses={guesses} />
      <WordInput onGuessSubmit={handleGuessSubmit} />
    </>
  );
}

export default Game;
