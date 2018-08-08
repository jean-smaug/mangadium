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
      <ViewToggler isVisible={detail.isOpen} onClose={detail.toggleStatus}>
        {detail.manga && (
          <div>
            <Card {...detail.manga} />

            {detail.manga.images.map(image => (
              <figure class="image is-128x128">
                <img src={image} />
              </figure>
            ))}
          </div>
        )}
      </ViewToggler>
    );
  }
}

export default Detail;
