import React from "react";
import ReactDOM from "react-dom";

import "bulma/css/bulma.min.css";

import request from "./utils/request";

request.getCharacters().then(console.log);

ReactDOM.render(<p>Hello</p>, document.getElementById("app"));
