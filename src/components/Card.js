import React, { Component } from "react";
import PropTypes from "prop-types";

class Card extends Component {
  static defaultProps = {
    image: ""
  };

  static propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    synopsis: PropTypes.string
  };

  render() {
    const { title, image, synopsis } = this.props;
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
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
