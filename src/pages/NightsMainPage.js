import React from "react";
import { MainFrame } from "../components/frames/MainFrame";
import barImage from "../img/dj.jpg";

export const NightsMainPage = () => (
  <MainFrame
    title="NIGHTS"
    subtitle="Nostrud officia voluptate nostrud exercitation laborum ex culpa velit et commodo esse cillum aliqua. Culpa non nulla occaecat occaecat officia amet veniam dolor culpa."
    primaryButtonText=""
    secondaryButtonText=""
    primaryButtonPath="/Conocenos"
    secondaryButtonPath="/Actas-de-la-muni"
    backgroundImageUrl={barImage}
  />
);
