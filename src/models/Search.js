import { types, getParent } from "mobx-state-tree";

import request from "../utils/request";

const Search = types
  .model({
    startDate: types.optional(types.string, ""),
    endDate: types.optional(types.string, "")
  })
  .actions(self => ({
    search(searchedManga) {
      if (searchedManga.length < 3) {
        return;
      }
      const rootStore = getParent(self);
      const listStore = rootStore.list;
      const appStore = rootStore.app;

      appStore.toggleLoadingStatus();
      request.searchMangas(encodeURI(searchedManga)).then(mangas => {
        appStore.toggleLoadingStatus();
        listStore.setMangas(mangas);
      });
    }
  }));

export default Search;
