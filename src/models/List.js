import { types, flow, applySnapshot } from "mobx-state-tree";

import { Manga } from "./Manga";
import request from "../utils/request";

const List = types
  .model({
    mangas: types.optional(types.array(Manga), [])
  })
  .actions(self => ({
    afterCreate() {
      self.hyrdate();
    },
    hyrdate: flow(function*() {
      try {
        const mangas = yield request.getTopMangas();

        self.setMangas(mangas);
      } catch (error) {
        console.log(error);
      }
    }),
    setMangas(mangas) {
      console.log("mangas", mangas);
      applySnapshot(self.mangas, mangas);
    }
  }));

export default List;
