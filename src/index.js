import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import "babel-polyfill";

import "bulma/css/bulma.min.css";

import store from "./store";

import Manga from "./modules/Manga";

ReactDOM.render(
  <Provider {...store}>
    <Manga />
  </Provider>,
  document.getElementById("app")
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register(
        "../service-worker.js"
      );
      console.log(
        "ServiceWorker registration successful with scope: ",
        registration.scope
      );
    } catch (error) {
      console.log("ServiceWorker registration failed: ", error);
    }
  });
}
