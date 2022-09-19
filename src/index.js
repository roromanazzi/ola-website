import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { KitchenMainPage } from "./pages/kitchen-page/KitchenMainPage";
import { BarMainPage } from "./pages/bar-page/BarMainPage";
import { NightsMainPage } from "./pages/nights-page/NightsMainPage";
import { EventsMainPage } from "./pages/events-page/EventsMainPage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/kitchen" element={<KitchenMainPage />} />
        <Route path="/bar" element={<BarMainPage />} />
        <Route path="/nights" element={<NightsMainPage />}></Route>
        <Route path="/events" element={<EventsMainPage />}></Route>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
