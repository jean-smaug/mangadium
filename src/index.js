import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import "bulma/css/bulma.min.css";

import store from "./store";

import Manga from "./modules/Manga";
import request from "./utils/request";

request.getMangas().then(console.log);

ReactDOM.render(
  <Provider {...store}>
    <Manga />
  </Provider>,
  document.getElementById("app")
);
