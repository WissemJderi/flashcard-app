import { useState } from "react";
import "../styles/input.css";

export default function FlashCardInput({ categories, addNewCard }) {
  const [newCard, setNewCard] = useState({
    question: "",
    answer: "",
    category: "",
  });
  return (
    <div className="flash-card-input">
      <h1>Add A New Card</h1>

      <form className="form">
        <label htmlFor="question">Enter The Question :</label>
        <input
          type="text"
          name="question"
          id="question"
          onChange={(e) => {
            setNewCard((prevObj) => ({
              ...prevObj,
              question: e.target.value,
            }));
          }}
          value={newCard.question}
        />
        {/* <input type="text" placeholder="Enter The Answer" /> */}
        <label htmlFor="answer">Enter The Answer :</label>
        <textarea
          name="answer"
          id="answer"
          placeholder="Enter The Answer"
          onChange={(e) => {
            setNewCard((prevObj) => ({
              ...prevObj,
              answer: e.target.value,
            }));
          }}
          value={newCard.answer}
        ></textarea>
        <label htmlFor="categories">Choose A Category :</label>

        <select
          name="categories"
          id="categories"
          onChange={(e) => {
            setNewCard((prevObj) => ({
              ...prevObj,
              category: e.target.value,
            }));
          }}
          value={newCard.category}
        >
          <option>{"<---->"}</option>
          {categories.map((category) => {
            return (
              <option value={`${category}`} key={category}>
                {category}
              </option>
            );
          })}
        </select>
        <button
          className="add-btn"
          onClick={(e) => {
            addNewCard(e, newCard);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
