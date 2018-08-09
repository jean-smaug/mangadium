import React, { Component, Fragment } from "react";
import { observer, inject } from "mobx-react";

import Card from "../components/Card";
import ViewToggler from "../components/ViewToggler";

@inject("detail")
@observer
class Detail extends Component {
  render() {
    const { detail } = this.props;
    console.log(detail);

    return (
      <ViewToggler
        isVisible={detail.isOpen}
        onClose={detail.toggleVisibilityStatus}
      >
        <div className="container">
          {detail.manga && (
            <div>
              {JSON.stringify(detail.manga)}

              <div class="columns" style={{ overflowX: "scroll" }}>
                {detail.manga.images.map(image => (
                  <div class="column is-one-quarter">
                    <figure class="image is-3by5">
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
