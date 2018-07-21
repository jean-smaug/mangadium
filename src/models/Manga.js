import { types, flow, applySnapshot } from "mobx-state-tree";

import request from "../utils/request";

export const Manga = types.model("Manga", {
  id: types.number,
  title: types.string,
  image: types.string,
  synopsis: types.string,
  startDate: types.string
});

const Mangas = types
  .model("Mangas", {
    list: types.optional(types.array(Manga), [])
  })
  .actions(self => ({
    afterCreate() {
      self.hyrdate();
    },
    hyrdate: flow(function*() {
      try {
        const mangas = (yield request.getMangas()).map(
          ({
            id,
            attributes: {
              canonicalTitle,
              posterImage: { original },
              synopsis,
              startDate
            }
          }) => ({
            id: Number(id),
            title: canonicalTitle,
            image: original,
            synopsis,
            startDate: startDate ? startDate : ""
          })
        );

        applySnapshot(self.list, mangas);
      } catch (error) {
        console.log(error);
      }
    })
  }));

export default Mangas;
