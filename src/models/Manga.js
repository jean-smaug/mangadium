import { types, flow } from "mobx-state-tree";

import request from "../utils/request";

export const Manga = types.model("Manga", {
  title: types.string,
  mangaType: types.frozen()
});

const Mangas = types
  .model("Mangas", {
    list: types.optional(types.array(Manga), [])
  })
  .actions(self => ({
    afterCreate() {
      flow(function*() {
        try {
          const mangas = yield request.getMangas();
          console.log(mangas);
        } catch (error) {
          console.log(error);
        }
      });
    }
  }));

export default Mangas;
