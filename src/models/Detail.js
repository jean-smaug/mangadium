import { types, flow, getParent } from "mobx-state-tree";

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
  image: images,
  synopsis
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
  images,
  synopsis
});

const MangaDetail = types.compose(
  Manga,
  types.model({
    images: types.optional(types.array(types.string), []),
    synopsis: types.string
  })
);

const Detail = types
  .model({
    manga: types.maybeNull(MangaDetail),
    isOpen: types.optional(types.boolean, false)
  })
  .actions(self => ({
    toggleVisibilityStatus() {
      self.isOpen = !self.isOpen;
    },
    setManga: flow(function*(id) {
      const appStore = getParent(self).app;

      try {
        appStore.toggleLoadingStatus();

        const manga = yield request.getMangaAndPictures(id);
        self.manga = manga;

        appStore.toggleLoadingStatus();
        self.toggleVisibilityStatus();
      } catch (error) {
        console.error(error);
        appStore.toggleLoadingStatus();
      }
    })
  }));

export default Detail;
