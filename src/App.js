import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Routes from "./config/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
