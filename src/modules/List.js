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
        <div className="container">
          <div className="columns is-multiline">
            {list.mangas.map(item => (
              <div
                key={item.id}
                className="column is-one-fifth"
                onClick={() => {
                  detail.setManga(item.id);
                }}
              >
                <Card {...item} />
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Manga;
