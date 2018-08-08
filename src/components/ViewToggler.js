import React, { Component } from "react";

class Viewer extends Component {
  render() {
    return (
      <div
        style={{
          position: "fixed",
          top: "10vh",
          zIndex: 10000,
          width: "100vw",
          height: "90vh",
          background: "white",
          transform: `translateY(${this.props.isVisible ? 0 : "100vh"})`
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Viewer;
