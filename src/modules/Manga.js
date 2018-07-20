import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import Card from "../components/Card";

@inject("manga")
@observer
class Manga extends Component {
  render() {
    return (
      <div className="columns is-multiline">
        {this.props.manga.list.map(manga => (
          <div
            key={manga.id}
            style={{
              height: "200px",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
            className="column is-one-quarter"
          >
            <Card {...manga} />
          </div>
        ))}
      </div>
    );
  }
}

export default Manga;
