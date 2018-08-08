import { types } from "types";

import Manga from "./Manga";

const Detail = types
  .model({
    manga: Manga,
    isOpen: types.boolean
  })
  .actions(self => ({
    toggleStatus() {
      self.isOpen = !self.isOpen;
    }
  }));

export default Detail;
