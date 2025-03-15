import "../styles/input.css";

export default function FlashCardInput() {
  return (
    <div className="flash-card-input">
      <h1>Add A New Card</h1>

      <form className="form">
        <label htmlFor="question">Enter The Question :</label>
        <input type="text" name="question" id="question" />
        {/* <input type="text" placeholder="Enter The Answer" /> */}
        <label htmlFor="answer">Enter The Answer :</label>
        <textarea
          name="answer"
          id="answer"
          placeholder="Enter The Answer"
        ></textarea>
        <label htmlFor="categories">Choose A Category :</label>
        <select name="categories" id="categories">
          <option value="Geo">Geo</option>
        </select>
      </form>
    </div>
  );
}
