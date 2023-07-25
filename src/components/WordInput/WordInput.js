import React, { useState } from "react";

function WordInput({ onGuessSubmit }) {
  const [guess, setGuess] = useState("");

  const submitWord = (e) => {
    e.preventDefault();
    onGuessSubmit(guess);
    setGuess("");
  };
  return (
    <form onSubmit={submitWord} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        maxLength={5}
        minLength={5}
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default WordInput;
