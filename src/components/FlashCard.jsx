import { useState } from "react";
import "../styles/flashcard.css";

function FlashCard() {
  const [showAnswer, setShowAnswer] = useState(false);
  const question = "What is the capital of France?";
  const category = "Geography";
  const answer = "Paris";

  return (
    <div className={`card-container ${showAnswer ? "show" : "hide"}`}>
      {!showAnswer ? (
        <>
          <h2>The Question: {question}</h2>
          <h3>The Category: {category}</h3>
        </>
      ) : (
        <h2> The Answer: {answer}</h2>
      )}
      <button
        onClick={() => {
          setShowAnswer(!showAnswer);
        }}
      >
        See the answer
      </button>
    </div>
  );
}

export default FlashCard;
