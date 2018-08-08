import { types, flow, applySnapshot } from "mobx-state-tree";

import request from "../utils/request";

import Manga from "./Manga";

const filterKeys = ({
  image_url: imageUrl,
  mal_id: id,
  published: { from: startDate, to: endDate },
  rank,
  score,
  title,
  type,
  link_canonical: url,
  image: images
}) => ({
  id,
  endDate,
  startDate,
  title,
  imageUrl,
  url,
  rank,
  score,
  type,
  images
});

const Detail = types
  .model({
    manga: types.maybeNull(Manga),
    isOpen: types.optional(types.boolean, false)
  })
  .actions(self => ({
    toggleStatus() {
      self.isOpen = !self.isOpen;
    },
    setManga: flow(function*(id) {
      try {
        const manga = yield request.getMangaAndPicture(id);
        console.log(manga);
        self.manga = filterKeys(manga);

        self.toggleStatus();
      } catch (error) {
        console.error(error);
      }
    })
  }));

export default Detail;
