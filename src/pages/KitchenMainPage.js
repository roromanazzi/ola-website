import React from "react";
import { MainFrame } from "../components/frames/MainFrame";
import barImage from "../img/individual.jpg";

export const KitchenMainPage = () => (
  <div>
    <MainFrame
      title="KITCHEN"
      subtitle="Nostrud officia voluptate nostrud exercitation laborum ex culpa velit et commodo esse cillum aliqua. Culpa non nulla occaecat occaecat officia amet veniam dolor culpa."
      primaryButtonText="Ver la carta"
      secondaryButtonText="Conoce mas"
      primaryButtonPath={
        "https://63228a88c8938e3360e9d57d--superlative-trifle-9d06cd.netlify.app/"
      }
      secondaryButtonPath="/Conoce-mas"
      backgroundImageUrl={barImage}
    />
  </div>
);
