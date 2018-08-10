import React, { Component, Fragment } from "react";
import { observer, inject } from "mobx-react";

import ViewToggler from "../components/ViewToggler";

@inject("detail")
@observer
class Detail extends Component {
  render() {
    const {
      detail,
      detail: { manga }
    } = this.props;

    return (
      <ViewToggler
        isVisible={detail.isOpen}
        onClose={detail.toggleVisibilityStatus}
      >
        <div className="container">
          {manga && (
            <div>
              <h2 className="title is-2">{manga.title}</h2>
              <div className="content">
                <p>{manga.synopsis}</p>
              </div>

              <div className="columns" style={{ overflowX: "scroll" }}>
                {manga.images.map(image => (
                  <div key={image} className="column is-one-quarter">
                    <figure className="image is-3by5">
                      <img src={image} />
                    </figure>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </ViewToggler>
    );
  }
}

export default Detail;
