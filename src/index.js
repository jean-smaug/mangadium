import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import "babel-polyfill";

import "bulma/css/bulma.min.css";
import "react-datepicker/dist/react-datepicker.css";

import store from "./store";

import List from "./modules/List";
import Detail from "./modules/Detail";
import Search from "./modules/Search";

ReactDOM.render(
  <Provider {...store}>
    <div>
      <Search />
      <List />
      <Detail />
    </div>
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
