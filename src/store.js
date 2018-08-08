import { types, addMiddleware } from "mobx-state-tree";
import { connectReduxDevtools } from "mst-middlewares";
import List from "./models/List";
import Detail from "./models/Detail";

const store = types
  .model({
    list: List,
    detail: Detail
  })
  .create({ list: List.create(), detail: Detail.create() });

addMiddleware(store, connectReduxDevtools(require("remotedev"), store));

export default store;
