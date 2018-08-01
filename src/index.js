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
