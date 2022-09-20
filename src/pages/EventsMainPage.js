import React from "react";
import { MainFrame } from "../components/frames/MainFrame";
import barImage from "../img/leleComida2.jpg";

export const EventsMainPage = () => (
  <MainFrame
    title="EVENTS"
    subtitle="Nostrud officia voluptate nostrud exercitation laborum ex culpa velit et commodo esse cillum aliqua. Culpa non nulla occaecat occaecat officia amet veniam dolor culpa."
    primaryButtonText="Revivi momentos"
    secondaryButtonText="Calendario"
    primaryButtonPath="/Galeria"
    secondaryButtonPath="/Calendario"
    backgroundImageUrl={barImage}
  />
);
