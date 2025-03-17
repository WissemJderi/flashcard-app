import "../styles/header.css";
function Header({ addNewFlashCard, addNewCategory }) {
  return (
    <div className="header">
      <h1 className="logo">Flash Card Application</h1>

      <div className="header-btns">
        <button
          className="add-flash-card"
          onClick={() => {
            addNewFlashCard();
          }}
        >
          {" "}
          Add A New Flash Card
        </button>
        <button
          className="add-flash-card"
          onClick={() => {
            addNewCategory();
          }}
        >
          {" "}
          Add A New Category
        </button>
      </div>
    </div>
  );
}

export default Header;
