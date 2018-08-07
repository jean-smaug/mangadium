import React, { Component, Fragment } from "react";
import { observer, inject } from "mobx-react";

import Card from "../components/Card";

@inject("manga")
@observer
class Manga extends Component {
  render() {
    const { current } = this.props.manga;
    return (
      <Fragment>
        {current !== null ? (
          <div>Hello</div>
        ) : (
          <div className="columns is-multiline">
            {this.props.manga.list.map(manga => (
              <div
                key={manga.id}
                style={{
                  height: "200px",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
                className="column is-half"
                onClick={() => {
                  console.log(manga);
                  this.props.manga.setCurrentManga(manga.id);
                }}
              >
                <Card {...manga} />
              </div>
            ))}
          </div>
        )}
      </Fragment>
    );
  }
}

export default Manga;
