import React, { Component } from "react";
import ReactLoader from "react-loader-spinner";

import style from "../utils/style";

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
          background: style.transparentBackground,
          zIndex: style.zIndexMedium,
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
