import React from "react";
import { DrinkCard } from "./DrinkCard";
import ginDahouseImg from "../img/gindahouse.jpg";
// import pinkFloydImg from "../img/pinkFloyd.jpg";
// import zequelliniImg from "../img/zequellini2.jpg";
import pageStyles from "./BarSecondPage.module.css";
// import { GoBackNavBar } from "../components/NavigationBar";
// import { DrinkCard } from "./DrinkCard";
import rodajaLimon from "../img/png/rodajaLimon.png";
import mediaRodajaLimon from "../img/png/mediaRojadaLimon.png";
import romero from "../img/png/romero.png";
import anis from "../img/png/anis.png";
import styles from "./DrinkCardTest.module.css";

export const BarSecondPage = () => {
  return (
    <div className={pageStyles.totalPage}>
      <DrinkCard
        mainImgSrc={ginDahouseImg}
        drinkTitle="Gin Dahouse"
        drinkSubtitle="Gin Brighton, miel, limón, romero y enebro."
        drinkDescription="Sunt minim amet consectetur proident ut consectetur nisi duis aliquip sint cupidatat excepteur."
        decoImgSrc1={rodajaLimon}
        decoImgAlt="imagen de adorno"
        decoImgPosition1={styles.position1}
        decoImgSrc2={mediaRodajaLimon}
        decoImgPosition2={styles.position2}
        decoImgSrc3={romero}
        decoImgPosition3={styles.position3}
        decoImgSrc4={anis}
        decoImgPosition4={styles.position4}
      ></DrinkCard>
    </div>
  );
};
