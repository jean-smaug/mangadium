import { types } from "mobx-state-tree";

const Search = types
  .model({
    startDate: types.optional(types.string, ""),
    endDate: types.optional(types.string, "")
  })
  .actions(self => ({
    search(e) {
      console.log("searhc ip", e.target.value);
    }
  }));

export default Search;
