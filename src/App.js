import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import List from "./modules/List";
import Detail from "./modules/Detail";
import Search from "./modules/Search";
import Loader from "./components/Loader";

@inject("app")
@observer
class App extends Component {
  render() {
    return (
      <div>
        {this.props.app.isLoading && <Loader />}
        <Search />
        <List />
        <Detail />
      </div>
    );
  }
}

export default App;
