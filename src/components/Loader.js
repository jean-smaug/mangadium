import React, { Component } from "react";
import ReactLoader from "react-loader-spinner";

import css from "../utils/css";
class Loader extends Component {
  render() {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: css.blackBackground,
          zIndex: 10000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <ReactLoader type="Oval" color="#FFFFFF" height={80} width={80} />
      </div>
    );
  }
}

export default Loader;
