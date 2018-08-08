import { types, addMiddleware } from "mobx-state-tree";
import { connectReduxDevtools } from "mst-middlewares";
import List from "./models/List";

const store = types
  .model({
    list: List
  })
  .create({ list: List.create() });

addMiddleware(store, connectReduxDevtools(require("remotedev"), store));

export default store;
