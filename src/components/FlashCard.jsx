import { useState } from "react";
import "../styles/flashcard.css";

function FlashCard({ question, answer, category }) {
  const [showAnswer, setShowAnswer] = useState(false);

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
        className="see-the-answer"
      >
        See the answer
      </button>
    </div>
  );
}

export default FlashCard;
