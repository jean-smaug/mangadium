import { types } from "mobx-state-tree";

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
      request.searchMangas({ q: encodeURI(searchedManga) }).then(console.log);
    }
  }));

export default Search;
