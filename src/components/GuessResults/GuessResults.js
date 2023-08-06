import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, i) => {
        return <Guess key={i} guess={guess} answer={answer} />;
      })}
      {range(guesses.length || 0, 6).map((i) => (
        <Guess key={i} />
      ))}
    </div>
  );
}

export default GuessResults;
