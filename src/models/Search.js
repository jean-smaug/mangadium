import { types } from "mobx-state-tree";

const Search = types
  .model({
    startDate: types.optional(types.string, ""),
    endDate: types.optional(types.string, "")
  })
  .actions(self => ({
    search() {
      console.log("searhc ip");
    }
  }));

export default Search;
