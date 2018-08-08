import React, { Component, Fragment } from "react";
import { observer, inject } from "mobx-react";

import Card from "../components/Card";

@inject("list")
@observer
class Manga extends Component {
  render() {
    const { current } = this.props.list;
    return (
      <Fragment>
        {current !== null ? (
          <div>Hello</div>
        ) : (
          <div className="columns is-multiline">
            {this.props.list.list.map(item => (
              <div
                key={item.id}
                style={{
                  height: "200px",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
                className="column is-half"
                onClick={() => {
                  console.log(item);
                  this.props.item.setCurrentManga(item.id);
                }}
              >
                <Card {...item} />
              </div>
            ))}
          </div>
        )}
      </Fragment>
    );
  }
}

export default Manga;
