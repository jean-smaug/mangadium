import React, { Component } from "react";
import PropTypes from "prop-types";

class Card extends Component {
  static propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    synopsis: PropTypes.string,
    startDate: PropTypes.string
  };

  render() {
    const { title, imageUrl, startDate } = this.props;
    return (
      <div className="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src={imageUrl} alt={imageUrl} />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <div
              class="title is-4"
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
            {/* <a href="#">#css</a> <a href="#">#responsive</a> */}
            <br />
            <time dateTime={startDate}>{startDate}</time>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
