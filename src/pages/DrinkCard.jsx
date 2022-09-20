import React from "react";
import styles from "./DrinkCardTest.module.css";
import { DrinkCardDeco } from "./DrinkCardDeco";
import { DrinkCardImg } from "./DrinkCardImg";
import { DrinkCardText } from "./DrinkCardText";
import pageStyles from "./BarSecondPage.module.css";
import { GoBackNavBar } from "../components/NavigationBar";

export const DrinkCard = ({
  mainImgSrc,
  drinkTitle,
  drinkSubtitle,
  drinkDescription,
  decoImgSrc1,
  decoImgAlt,
  decoImgPosition1,
  decoImgSrc2,
  decoImgPosition2,
  decoImgSrc3,
  decoImgPosition3,
  decoImgSrc4,
  decoImgPosition4,
}) => {
  return (
    <div className={styles.cardTest}>
      <GoBackNavBar></GoBackNavBar>
      <h1 className={pageStyles.mainTitle}>Tragos de Autor</h1>
      <div className={styles.containerTest}>
        <DrinkCardImg imgSrc={mainImgSrc}></DrinkCardImg>
        <DrinkCardText
          title={drinkTitle}
          subtitle={drinkSubtitle}
          description={drinkDescription}
        ></DrinkCardText>
        <DrinkCardDeco
          imgSrc={decoImgSrc1}
          alt={decoImgAlt}
          position={decoImgPosition1}
        ></DrinkCardDeco>
        <DrinkCardDeco
          imgSrc={decoImgSrc2}
          alt={decoImgAlt}
          position={decoImgPosition2}
        ></DrinkCardDeco>
        <DrinkCardDeco
          imgSrc={decoImgSrc3}
          alt={decoImgAlt}
          position={decoImgPosition3}
        ></DrinkCardDeco>
        <DrinkCardDeco
          imgSrc={decoImgSrc4}
          alt={decoImgAlt}
          position={decoImgPosition4}
        ></DrinkCardDeco>
      </div>
    </div>
  );
};
