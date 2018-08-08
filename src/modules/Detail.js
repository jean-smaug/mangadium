import React, { Component, Fragment } from "react";
import { observer, inject } from "mobx-react";

import ViewToggler from "../components/ViewToggler";

@inject("detail")
@observer
class Detail extends Component {
  render() {
    const { detail } = this.props;

    return (
      <ViewToggler isVisible={detail.isOpen} onClose={detail.toggleStatus}>
        Hello
      </ViewToggler>
    );
  }
}

export default Detail;
