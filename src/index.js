import React from "react";
import ReactDOM from "react-dom";

import request from "./utils/request";

request.getMangas().then(console.log);

ReactDOM.render(<p>Hello</p>, document.getElementById("app"));
