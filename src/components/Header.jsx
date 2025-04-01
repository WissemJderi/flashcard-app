import "../styles/header.css";
function Header({ addNewFlashCard, addNewCategory }) {
  return (
    <div className="header">
      <h1 className="logo">Flash Card Application</h1>

      <div className="header-btns">
        <button
          className="header-buttons"
          onClick={() => {
            addNewFlashCard();
          }}
        >
          {" "}
          Add A New Flash Card
        </button>
        <button
          className="header-buttons"
          onClick={() => {
            addNewCategory();
          }}
        >
          {" "}
          Add A New Category
        </button>
        <button className="header-buttons">Manage Your Categories</button>
      </div>
    </div>
  );
}

export default Header;
