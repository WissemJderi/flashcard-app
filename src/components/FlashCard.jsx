import { useState } from "react";
import "../styles/flashcard.css";

function FlashCard({ question, answer, category, deleteCard }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className={`card-container ${showAnswer ? "show" : "hide"}`}>
      <h2>The Question: {question}</h2>
      {!showAnswer ? <></> : <h2> The Answer: {answer}</h2>}
      {showAnswer ? null : <h2>The Category: {category}</h2>}

      <button
        onClick={() => {
          setShowAnswer(!showAnswer);
        }}
        className="see-the-answer"
      >
        See the answer
      </button>
      <button
        className="delete-btn"
        onClick={() => {
          deleteCard(question);
        }}
      >
        Delete The Card
      </button>
    </div>
  );
}

export default FlashCard;
