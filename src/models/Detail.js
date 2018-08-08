import { types } from "mobx-state-tree";

import Manga from "./Manga";

const Detail = types
  .model({
    manga: types.optional(types.map(Manga), {}),
    isOpen: types.optional(types.boolean, false)
  })
  .actions(self => ({
    toggleStatus() {
      self.isOpen = !self.isOpen;
    }
  }));

export default Detail;
