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
  const [isShown, setIsShown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    // Save flashcards to local storage whenever they change
    localStorage.setItem("flashCards", JSON.stringify(flashCards));
  }, [flashCards]);

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

  function filterCards(cat) {
    setSelectedCategory(cat);
  }

  const filteredFlashCards =
    selectedCategory && selectedCategory !== "See All"
      ? flashCards.filter(
          (flashCard) => flashCard.category === selectedCategory
        )
      : flashCards;

  const flashCardsList = filteredFlashCards.map((flashCard) => {
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

  const categoriesSpans = [...categories, "See All"].map((category) => {
    return (
      <span
        className="category-span"
        onClick={() => filterCards(category)}
        key={category}
      >
        {category}
      </span>
    );
  });

  return (
    <>
      <Header addNewFlashCard={addNewFlashCard} />
      {isShown ? (
        <FlashCardInput categories={categories} addNewCard={addNewCard} />
      ) : null}
      <h3 className="info">Filter By Category: </h3>
      <div className="categories-container">{categoriesSpans}</div>
      {flashCards.length === 0 ? (
        <h1 className="info">You Have No Flash Cards...</h1>
      ) : (
        flashCardsList
      )}
    </>
  );
}

export default App;
