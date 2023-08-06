import React from "react";

function Result({ status, answer, stepCount }) {
  if (status === "lost")
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );

  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{stepCount} guesses</strong>.
      </p>
    </div>
  );
}

export default Result;
