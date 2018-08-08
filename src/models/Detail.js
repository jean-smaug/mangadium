import { types, flow } from "mobx-state-tree";

import request from "../utils/request";

import Manga from "./Manga";

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

const Detail = types
  .model({
    manga: types.optional(types.map(Manga), {}),
    isOpen: types.optional(types.boolean, false)
  })
  .actions(self => ({
    toggleStatus() {
      self.isOpen = !self.isOpen;
    },
    setManga: flow(function*(id) {
      const manga = filterKeys(yield request.getManga(id));

      self.manga = Manga.create(manga);
    })
  }));

export default Detail;
