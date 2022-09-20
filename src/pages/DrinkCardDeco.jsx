import React from "react";

export const DrinkCardDeco = ({ imgSrc, alt, position }) => {
  return <img src={imgSrc} alt={alt} className={`${position}`}></img>;
};
