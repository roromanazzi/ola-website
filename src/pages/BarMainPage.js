import React from "react";
import { MainFrame } from "../components/frames/MainFrame";
import barImage from "../img/oldFashionedZeque.jpg";

export const BarMainPage = () => (
  <div>
    <MainFrame
      title="BAR"
      subtitle="Nostrud officia voluptate nostrud exercitation laborum ex culpa velit et commodo esse cillum aliqua. Culpa non nulla occaecat occaecat officia amet veniam dolor culpa."
      primaryButtonText="Ver la carta"
      secondaryButtonText="Tragos de autor"
      primaryButtonPath="/Carta-bebidas"
      secondaryButtonPath="/Tragos-de-autor"
      backgroundImageUrl={barImage}
    />
  </div>
);
