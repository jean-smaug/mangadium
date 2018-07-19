import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import Card from "../components/Card";

@inject("manga")
@observer
class Manga extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="columns">
        <div className="column is-one-fifth">
          <Card />
        </div>
      </div>
    );
  }
}

export default Manga;
