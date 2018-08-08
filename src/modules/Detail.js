import React, { Component, Fragment } from "react";

import ViewToggler from "../components/ViewToggler";

class Detail extends Component {
  render() {
    return <ViewToggler isVisible={true}>Hello</ViewToggler>;
  }
}

export default Detail;
