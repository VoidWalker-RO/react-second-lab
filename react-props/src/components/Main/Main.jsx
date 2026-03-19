import CardList from "../CardList/CardList";
import "./Main.css";

function Main({ cards }) {
  return (
    <main className="main">
      <h2>Головний контент</h2>
      <CardList cards={cards} />
    </main>
  );
}

export default Main;