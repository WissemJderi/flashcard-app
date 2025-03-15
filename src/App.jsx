import { useState } from "react";
import "./App.css";
import FlashCard from "./components/FlashCard";
import Header from "./components/Header";
import FlashCardInput from "./components/FlashCardInput";

function App() {
  const [flashCards] = useState([
    {
      question: "What is the capital of France?",
      category: "Geography",
      answer: "Paris",
    },
    {
      question: "What is 2 + 2?",
      category: "Mathematics",
      answer: "4",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      category: "Literature",
      answer: "Harper Lee",
    },
    {
      question: "What is the chemical symbol for water?",
      category: "Science",
      answer: "H2O",
    },
    {
      question: "Who painted the Mona Lisa?",
      category: "Art",
      answer: "Leonardo da Vinci",
    },
  ]);
  const [isShown, setIsShown] = useState(false);
  let flashCardsList = flashCards.map((flashCard) => {
    return (
      <div className="flashCards-container" key={flashCard.question}>
        <FlashCard
          question={flashCard.question}
          category={flashCard.category}
          answer={flashCard.answer}
        />
      </div>
    );
  });

  //Functions

  function addNewFlashCard() {
    setIsShown(!isShown);
  }

  return (
    <>
      <Header addNewFlashCard={addNewFlashCard} />
      {isShown ? <FlashCardInput /> : null}
      {flashCardsList}
    </>
  );
}

export default App;
