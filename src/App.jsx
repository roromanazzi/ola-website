// import { BarMainPage } from "./pages/bar-page/BarMainPage";
// import { KitchenMainPage } from "./pages/kitchen-page/KitchenMainPage";
// import NavBar from "./components/nav-bar/NavBar";
import pageStyles from "./App.module.css";
import ExpansiveCards from "./components/main-page/ExpansiveCards.js";
import styles from "./components/main-page/ExpansiveCards.module.css";
import buttonStyle from "./components/frames/MainFrame.module.css";
import imgsrc from "./img/individualCopia.jpg";
import logoIg from "./img/instagram.png";
import logoWp from "./img/whatsapp.png";
import { InfoNavBar } from "./components/NavigationBar";
import { LogoOla } from "./components/img-component/LogoOla";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className={pageStyles.container}>
      <div className={pageStyles.mainPage}>
        <div
          className={pageStyles.page}
          style={{
            backgroundImage: `url(${imgsrc})`,
            backgroundPosition: -80,
          }}
        >
          <div className={pageStyles.socialNetwork}>
            <a
              href={"https://www.instagram.com/olamdq/?hl=es"}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={logoIg}
                alt="logo Ig"
                className={pageStyles.logoIg}
              ></img>
            </a>
            <a
              href={
                "https://api.whatsapp.com/message/AVPFGORR4ZWND1?autoload=1&app_absent=0"
              }
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={logoWp}
                alt="logo Wp"
                className={pageStyles.logoWp}
              ></img>
            </a>
          </div>
          <div className={styles.leftSide}>
            <div className={pageStyles.totalNav}>
              <LogoOla></LogoOla>
              <InfoNavBar></InfoNavBar>
            </div>
            <div className={pageStyles.mainPageTitles}>
              <div></div>
              <h1 className={pageStyles.mainTitle}>
                El ingrediente secreto no existe
              </h1>
              <h3>
                Para que algo sea especial, tenés que creer que es especial.
              </h3>
              <h3>- Kung Fu Panda</h3>
              <Link to="/sobre-nosotros" className={buttonStyle.firstButton}>
                Conoce mas
              </Link>
            </div>
          </div>
          <div className={styles.cardsContainer}>
            <ExpansiveCards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
