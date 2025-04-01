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

  const [newCategory, setNewCategory] = useState("");

  const [categories, setCategories] = useState(() => {
    const savedCategories = localStorage.getItem("Categories");
    return savedCategories
      ? JSON.parse(savedCategories)
      : ["Arabic", "English", "Geo", "Math", "Science", "DSA"];
  });

  const [inputIsShown, setInputIsShown] = useState(false);

  const [addCate, setAddCate] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    // Save flashcards to local storage whenever they change
    localStorage.setItem("flashCards", JSON.stringify(flashCards));
  }, [flashCards]);

  useEffect(() => {
    localStorage.setItem("Categories", JSON.stringify(categories));
  }, [categories]);

  function addNewFlashCard() {
    setInputIsShown(!inputIsShown);
  }

  function addNewCategory() {
    setAddCate(!addCate);
    setInputIsShown(false);
  }
  function addNewCard(e, newCard) {
    e.preventDefault();
    setFlashCards((prevArr) => {
      return [...prevArr, newCard];
    });
    setInputIsShown(!inputIsShown);
  }

  function deleteCard(question) {
    setFlashCards((prevArr) => {
      return prevArr.filter((flashCard) => flashCard.question !== question);
    });
  }

  function filterCards(cat) {
    setSelectedCategory(cat);
  }

  const filteredFlashCards = selectedCategory
    ? flashCards.filter((flashCard) => flashCard.category === selectedCategory)
    : flashCards;

  const flashCardsList =
    filteredFlashCards.length === 0 ? (
      <h1 className="info">
        {selectedCategory
          ? `No flashcards available in the "${selectedCategory}" category.`
          : "You Have No Flash Cards..."}
      </h1>
    ) : (
      filteredFlashCards.map((flashCard) => {
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
      })
    );

  const categoriesSpans = [...categories].map((category) => {
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
      <Header
        addNewFlashCard={addNewFlashCard}
        addNewCategory={addNewCategory}
      />
      {inputIsShown ? (
        <FlashCardInput categories={categories} addNewCard={addNewCard} />
      ) : null}
      <h3 className="info">Filter By Category: </h3>
      <div className="categories-container">{categoriesSpans}</div>
      {addCate ? (
        <form className="add-category-form">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => {
              setNewCategory(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setCategories((prevArr) => {
                return [...prevArr, newCategory];
              });
            }}
          >
            Add
          </button>
        </form>
      ) : null}
      {flashCardsList}
    </>
  );
}

export default App;
