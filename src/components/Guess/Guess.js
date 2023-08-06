import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  if (guess) {
    const guessObj = checkGuess(guess, answer);

    return (
      <p className="guess">
        {guessObj.map((guess, i) => (
          <span key={i} className={`${guess.status} cell`}>
            {guess.letter}
          </span>
        ))}
      </p>
    );
  }

  return (
    <p className="guess">
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
    </p>
  );
}

export default Guess;
