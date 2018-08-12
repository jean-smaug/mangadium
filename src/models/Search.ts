import { types, getParent } from "mobx-state-tree";

import request from "../utils/request";

export interface SearchInterface {
  research: string;
  setResearch: (research: string) => void;
  search: () => void;
  isSearchDisabled: boolean;
}

export const Search = types
  .model({
    research: types.optional(types.string, ""),
  })
  .actions(self => ({
    setResearch(research) {
      self.research = research;
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
