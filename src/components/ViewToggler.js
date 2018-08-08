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
          visibility: this.props.isVisible ? "visible" : "hidden",
          opacity: this.props.isVisible ? 1 : 0,
          transition: "opacity 400ms ease"
        }}
      >
        <div
          style={{
            marginTop: "5vh",
            height: "100%",
            background: "white",
            transform: `translateY(${this.props.isVisible ? 0 : "100vh"})`,
            transition: "transform 600ms ease"
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
