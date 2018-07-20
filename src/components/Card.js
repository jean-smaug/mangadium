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
    const { title, image, synopsis, startDate } = this.props;
    return (
      <div className="card">
        {/* <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt="Placeholder image" />
          </figure>
        </div> */}
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={image} alt="Placeholder image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">@johnsmith</p>
            </div>
          </div>

          <div className="content">
            {synopsis}
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
