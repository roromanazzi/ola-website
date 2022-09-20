import React from "react";
import styles from "./DrinkCardTest.module.css";

export const DrinkCardText = ({ title, subtitle, description }) => {
  return (
    <div className={styles.info}>
      <h1 className={styles.title}>{title}</h1>
      <em className={styles.subtitle}>{subtitle}</em>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
