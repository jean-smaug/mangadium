import React, { Component } from "react";

import { MangaPropTypes } from "../models/Manga";

class Card extends Component {
  static propTypes = MangaPropTypes;

  render() {
    const { rank, score, imageUrl, title, publicationStartDate } = this.props;

    return (
      <div className="card">
        <div className="card-image" style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              border: "2px solid black",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              color: "black",
              top: "10px",
              right: "10px",
              zIndex: "10000",
              textAlign: "center"
            }}
          >
            {rank}
          </div>
          <figure className="image is-4by3">
            <img src={imageUrl} alt={imageUrl} />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <div
              className="title is-4"
              title={title}
              style={{
                lineHeight: "1em",
                maxHeight: "2em",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                width: "100%"
              }}
            >
              {title}
            </div>
            <br />
            <time dateTime={publicationStartDate}>{publicationStartDate}</time>
            <p>{score}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
