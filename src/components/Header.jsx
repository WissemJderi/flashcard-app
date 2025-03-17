import "../styles/header.css";
function Header({ addNewFlashCard }) {
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
            console.log("Working");
          }}
        >
          {" "}
          Manage Your Flash Cards
        </button>
      </div>
    </div>
  );
}

export default Header;
