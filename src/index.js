import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import Header from "./components/header/Header";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
//this is used for analytics
