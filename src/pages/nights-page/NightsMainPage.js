import styles from "./NightsMainPage.module.css";
import React from "react";
import { SectionNavBar } from "../../components/NavigationBar";

export const NightsMainPage = () => {
  return (
    <section className={styles.kitchenPageHeader}>
      <div>
        <div>
          <SectionNavBar></SectionNavBar>
        </div>
      </div>
      <div className={styles.titles}>
        <h1 className={styles.kitchenTitle}>NIGHTS</h1>
        <h2 className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
      </div>
      <div className={styles.buttons}>
        <button
          onClick={() => {
            window.open(
              "https://63228a88c8938e3360e9d57d--superlative-trifle-9d06cd.netlify.app/"
            );
          }}
        >
          Conocenos
        </button>
        <button className={styles.secondButton} id={styles.secondButton}>
          Actas de la muni
        </button>
      </div>
      <div className={styles.backgroundFilter}></div>
    </section>
  );
};
