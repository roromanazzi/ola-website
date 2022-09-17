import pageStyles from "./App.module.css";
import ExpansiveCards from "./components/main-page/ExpansiveCards.js";
import styles from "./components/main-page/ExpansiveCards.module.css";
import NavBar from "./components/nav-bar/navBar";
import imgsrc from "./img/individual.jpg";

function App() {
  return (
    <div
      className={pageStyles.page}
      style={{ backgroundImage: `url(${imgsrc})` }}
    >
      <div className={styles.cardsContainer}>
        <ExpansiveCards />
      </div>
      <NavBar></NavBar>
    </div>
  );
}

export default App;
