import React from "react";
import styles from "./DrinkCardTest.module.css";

export const DrinkCardImg = ({ imgSrc, alt }) => {
  return <img src={imgSrc} alt={alt} className={styles.drinkImg}></img>;
};
