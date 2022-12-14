import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { KitchenMainPage } from "./pages/KitchenMainPage";
import { BarPage } from "./pages/BarPage";
import { NightsMainPage } from "./pages/NightsMainPage";
import { EventsMainPage } from "./pages/EventsMainPage";
import { BarSecondPage } from "./pages/BarSecondPage";
import { Navigate } from "react-router-dom";
// import { RedirectFunction } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/kitchen" element={<KitchenMainPage />} />
        <Route path="/bar" element={<BarPage />} />
        <Route path="/Tragos-de-autor" element={<BarSecondPage />}></Route>
        <Route path="/nights" element={<NightsMainPage />}></Route>
        <Route path="/events" element={<EventsMainPage />}></Route>
        <Route path="/" element={<App />} />
        <Route path="/redirect" element={<Navigate to="/bar" />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
