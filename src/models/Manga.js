import { types } from "mobx-state-tree";

export const Manga = types.model("Manga", {
  title: types.string,
  mangaType: types.frozen()
});
