import React from "react";
import kitchenImgSrc from "../../img/volcan.jpg";
import barImgSrc from "../../img/ginZeque.jpg";
import nightsImgSrc from "../../img/bombayBottle3Resized.jpg";
import eventsImgSrc from "../../img/salonLele3.jpg";
// import beerImgSrc from "../../img/ipaBorneo.jpg";
import styles from "./ExpansiveCards.module.css";
import { Link } from "react-router-dom";

function ExpansiveCards() {
  return (
    <div className={styles.cardsComponentContainer}>
      <Link to="/kitchen">
        <div className={styles.container}>
          <img src={kitchenImgSrc} alt="img" className={styles.cardsImg}></img>
          <h2>KITCHEN</h2>
        </div>
      </Link>
      <Link to="/bar">
        <div className={styles.container}>
          <img src={barImgSrc} alt="img" className={styles.cardsImg}></img>
          <h2>BAR</h2>
        </div>
      </Link>
      <Link to="/nights">
        <div className={styles.container}>
          <img src={nightsImgSrc} alt="img" className={styles.cardsImg}></img>
          <h2>NIGHTS</h2>
        </div>
      </Link>
      <Link to="/events">
        <div className={styles.container}>
          <img src={eventsImgSrc} alt="img" className={styles.cardsImg}></img>
          <h2>EVENTS</h2>
        </div>
      </Link>
      {/* <a href="https://63228a88c8938e3360e9d57d--superlative-trifle-9d06cd.netlify.app/">
        <div className={styles.container}>
          <img src={beerImgSrc} alt="img" className={styles.cardsImg}></img>
          <h2>BORNEO</h2>
        </div>
      </a> */}
    </div>
  );
}

export default ExpansiveCards;
