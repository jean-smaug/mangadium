import { types, getParent } from "mobx-state-tree";

import request from "../utils/request";

const Search = types
  .model({
    research: types.optional(types.string, ""),
    startDate: types.frozen(),
    endDate: types.frozen()
  })
  .actions(self => ({
    setResearch(research) {
      self.research = research;
    },
    setStartDate(startDate) {
      self.startDate = startDate;
    },
    setEndDate(endDate) {
      self.endDate = endDate;
    },
    search() {
      if (self.research.length < 3) {
        return;
      }
      const rootStore = getParent(self);
      const listStore = rootStore.list;
      const appStore = rootStore.app;

      appStore.toggleLoadingStatus();
      request.searchMangas(encodeURI(self.research)).then(mangas => {
        appStore.toggleLoadingStatus();
        listStore.setMangas(mangas);
      });
    }
  }))
  .views(self => ({
    get isSearchDisabled() {
      return self.research.length < 3;
    }
  }));

export default Search;
