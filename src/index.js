import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import APIContextProvider from "./store/contexts/APIContextProvider";
import TrivialContextProvider from "./store/contexts/TrivialContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <APIContextProvider>
        <TrivialContextProvider>
          <App />
        </TrivialContextProvider>
      </APIContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
