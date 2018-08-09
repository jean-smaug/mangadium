import { types, addMiddleware } from "mobx-state-tree";
import { connectReduxDevtools } from "mst-middlewares";
import List from "./models/List";
import Detail from "./models/Detail";
import Search from "./models/Search";

const store = types
  .model({
    list: List,
    detail: Detail,
    search: Search
  })
  .create({
    list: List.create(),
    detail: Detail.create(),
    search: Search.create()
  });

addMiddleware(store, connectReduxDevtools(require("remotedev"), store));

export default store;
