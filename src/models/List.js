import { types, flow, applySnapshot } from "mobx-state-tree";

import request from "../utils/request";

const filterKeys = ({
  image_url: imageUrl,
  mal_id: id,
  publishing_end: endDate,
  publishing_start: startDate,
  rank,
  score,
  title,
  type,
  url
}) => ({
  id,
  endDate,
  startDate,
  title,
  imageUrl,
  url,
  rank,
  score,
  type
});

export const Manga = types.model("Manga", {
  id: types.number,
  title: types.string,
  imageUrl: types.string,
  startDate: types.string,
  endDate: types.maybeNull(types.string),
  url: types.string,
  rank: types.number,
  score: types.maybeNull(types.number),
  type: types.string
});

const List = types
  .model({
    current: types.maybeNull(Manga),
    list: types.optional(types.array(Manga), [])
  })
  .actions(self => ({
    afterCreate() {
      self.hyrdate();
    },
    hyrdate: flow(function*() {
      try {
        const mangas = (yield request.getTopMangas()).map(filterKeys);

        applySnapshot(self.list, mangas);
      } catch (error) {
        console.log(error);
      }
    }),
    setCurrentManga: flow(function*(id) {
      const manga = filterKeys(yield request.getManga(id));

      self.current = Manga.create(manga);
    })
  }));

export default List;
