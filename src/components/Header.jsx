import "../styles/header.css";
function Header({ addNewFlashCard }) {
  return (
    <div className="header">
      <h1 className="logo">Flash Card Application</h1>

      <button
        className="add-flash-card"
        onClick={() => {
          addNewFlashCard();
        }}
      >
        {" "}
        Add A New Flash Card
      </button>
    </div>
  );
}

export default Header;
