import React, { Component, Fragment } from "react";
import { observer, inject } from "mobx-react";

import ViewToggler from "../components/ViewToggler";

@inject("detail")
@observer
class Detail extends Component {
  render() {
    return <ViewToggler isVisible={true}>Hello</ViewToggler>;
  }
}

export default Detail;
