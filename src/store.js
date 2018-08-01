import { types, addMiddleware } from "mobx-state-tree";
import { connectReduxDevtools } from "mst-middlewares";
import manga from "./models/Manga";
import recipe from "./models/Recipe";

const store = types
  .model({
    manga
  })
  .create({ manga: manga.create(), recipe: recipe.create() });

addMiddleware(store, connectReduxDevtools(require("remotedev"), store));

export default store;
