import { types, flow, applySnapshot } from "mobx-state-tree";

import request from "../utils/request";

export const Manga = types.model("Manga", {
  title: types.string,
  image: types.string,
  synopsis: types.string
});

const Mangas = types
  .model("Mangas", {
    list: types.optional(types.array(Manga), [])
  })
  .actions(self => ({
    afterCreate() {
      self.hyrdate();
    },
    hyrdate: flow(function* hyrdate() {
      try {
        const mangas = (yield request.getMangas()).map(
          ({
            attributes: {
              canonicalTitle,
              posterImage: { original },
              synopsis
            }
          }) => ({
            title: canonicalTitle,
            image: original,
            synopsis
          })
        );

        applySnapshot(self.list, mangas);
      } catch (error) {
        console.log(error);
      }
    })
  }));

export default Mangas;
