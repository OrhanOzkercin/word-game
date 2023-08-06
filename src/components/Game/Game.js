import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import WordInput from "../WordInput/WordInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Result from "../Result/Result";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");

  const handleGuessSubmit = (newGuess) => {
    setGuesses([...guesses, newGuess]);
    if (newGuess === answer) return setGameStatus("win");
    if (guesses.length === NUM_OF_GUESSES_ALLOWED - 1) return setGameStatus("lost");
  };
  const handleStatus = (status) => {
    setGameStatus(status);
  };
  return (
    <>
      {gameStatus === "running" && (
        <>
          <GuessResults answer={answer} guesses={guesses} setStatus={handleStatus} />
          <WordInput onGuessSubmit={handleGuessSubmit} />
        </>
      )}
      {gameStatus !== "running" && <Result status={gameStatus} answer={answer} stepCount={guesses.length} />}
    </>
  );
}

export default Game;
