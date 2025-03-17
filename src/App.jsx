import { useState, useEffect } from "react";
import "./App.css";
import FlashCard from "./components/FlashCard";
import Header from "./components/Header";
import FlashCardInput from "./components/FlashCardInput";

function App() {
  const [flashCards, setFlashCards] = useState(() => {
    // Load flashcards from local storage or use default flashcards
    const savedFlashCards = localStorage.getItem("flashCards");
    return savedFlashCards ? JSON.parse(savedFlashCards) : [];
  });

  const [categories] = useState([
    "Arabic",
    "English",
    "Geo",
    "Math",
    "Science",
    "DSA",
  ]);
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    // Save flashcards to local storage whenever they change
    localStorage.setItem("flashCards", JSON.stringify(flashCards));
  }, [flashCards]);

  let flashCardsList = flashCards.map((flashCard) => {
    return (
      <div className="flashCards-container" key={flashCard.question}>
        <FlashCard
          question={flashCard.question}
          category={flashCard.category}
          answer={flashCard.answer}
          deleteCard={deleteCard}
        />
      </div>
    );
  });

  // Functions

  function addNewFlashCard() {
    setIsShown(!isShown);
  }

  function addNewCard(e, newCard) {
    e.preventDefault();
    setFlashCards((prevArr) => {
      return [...prevArr, newCard];
    });
  }

  function deleteCard(question) {
    setFlashCards((prevArr) => {
      return prevArr.filter((flashCard) => flashCard.question !== question);
    });
  }

  return (
    <>
      <Header addNewFlashCard={addNewFlashCard} />
      {isShown ? (
        <FlashCardInput categories={categories} addNewCard={addNewCard} />
      ) : null}
      {flashCardsList}
    </>
  );
}

export default App;
