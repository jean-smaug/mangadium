import React, { Component, Fragment } from "react";
import { observer, inject } from "mobx-react";

import Card from "../components/Card";
import ViewToggler from "../components/ViewToggler";

@inject("detail")
@observer
class Detail extends Component {
  render() {
    const { detail } = this.props;

    return (
      <ViewToggler isVisible={detail.isOpen} onClose={detail.toggleStatus}>
        <Card {...detail.manga} />
      </ViewToggler>
    );
  }
}

export default Detail;
