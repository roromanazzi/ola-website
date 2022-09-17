import React from "react";
import kitchenImgSrc from "../../img/volcan.jpg";
import barImgSrc from "../../img/ginZeque.jpg";
import nightsImgSrc from "../../img/bombayBottle3Resized.jpg";
import eventsImgSrc from "../../img/salonLele3.jpg";
import beerImgSrc from "../../img/redCanilla.jpg";
import styles from "./ExpansiveCards.module.css";
import NavBar from "../nav-bar/navBar";

function ExpansiveCards() {
  return (
    <div className={styles.cardsComponentContainer}>
      <a href="https://63228a88c8938e3360e9d57d--superlative-trifle-9d06cd.netlify.app/">
        <div className={styles.container}>
          <img src={kitchenImgSrc} alt="img"></img>
          <h2>KITCHEN</h2>
        </div>
      </a>
      <div className={styles.container}>
        <img src={barImgSrc} alt="img"></img>
        <h2>BAR</h2>
      </div>
      <div className={styles.container}>
        <img src={nightsImgSrc} alt="img"></img>
        <h2>NIGHTS</h2>
      </div>
      <div className={styles.container}>
        <img src={eventsImgSrc} alt="img"></img>
        <h2>EVENTS</h2>
      </div>
      <div className={styles.container}>
        <img src={beerImgSrc} alt="img"></img>
        <h2>BORNEO</h2>
      </div>
    </div>
  );
}

export default ExpansiveCards;
