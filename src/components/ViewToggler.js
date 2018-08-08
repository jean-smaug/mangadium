import React, { Component } from "react";

class ViewToggler extends Component {
  render() {
    return (
      <div
        style={{
          background: "rgba(0, 0, 0, 0.4)",
          position: "fixed",
          top: 0,
          zIndex: 10000,
          width: "100vw",
          height: "100vh",
          transform: `translateY(${this.props.isVisible ? 0 : "100vh"})`
        }}
      >
        <div
          style={{
            marginTop: "5vh",
            height: "100%",
            background: "white"
          }}
        >
          <button className="button" onClick={this.props.onClose}>
            X
          </button>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ViewToggler;
