import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import WordInput from "../WordInput/WordInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const handleGuessSubmit = (newGuess) => {
    if (guesses.length === NUM_OF_GUESSES_ALLOWED) return;
    setGuesses([...guesses, newGuess]);
  };
  return (
    <>
      <GuessResults answer={answer} guesses={guesses} />
      <WordInput onGuessSubmit={handleGuessSubmit} />
    </>
  );
}

export default Game;
