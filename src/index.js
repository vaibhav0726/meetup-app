import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FavouritesContextProvider } from "./store/favorites-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // providing all the favorites functionality to all the components in the app
  <FavouritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavouritesContextProvider>
);
