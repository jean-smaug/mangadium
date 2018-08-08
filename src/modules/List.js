import React, { Component, Fragment } from "react";
import { observer, inject } from "mobx-react";

import Card from "../components/Card";

@inject("list", "detail")
@observer
class Manga extends Component {
  render() {
    const { list, detail } = this.props;
    return (
      <Fragment>
        {list.current !== null ? (
          <div>Hello</div>
        ) : (
          <div className="columns is-multiline">
            {list.mangas.map(item => (
              <div
                key={item.id}
                style={{
                  height: "200px",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
                className="column is-half"
                onClick={() => {
                  detail.setManga(item.id);
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
