import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import Card from "../components/Card";

@inject("manga")
@observer
class Manga extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-one-fifth">
          {this.props.manga.list.map(manga => <div>{manga.title}</div>)}
          <Card />
        </div>
      </div>
    );
  }
}

export default Manga;
