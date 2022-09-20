import React from "react";
// import { SignatureDrinks } from "../ProductsItems";
import styles from "./ProductsFrame.module.css";

export const ProductsFrame = ({ title, subtitle }) => {
  return (
    <div className={styles.totalPage}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};
