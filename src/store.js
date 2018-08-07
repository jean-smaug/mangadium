import { types, addMiddleware } from "mobx-state-tree";
import { connectReduxDevtools } from "mst-middlewares";
import Manga from "./models/Manga";

const store = types
  .model({
    manga: Manga
  })
  .create({ manga: Manga.create() });

addMiddleware(store, connectReduxDevtools(require("remotedev"), store));

export default store;
