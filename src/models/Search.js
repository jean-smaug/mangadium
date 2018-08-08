import { types } from "mobx-state-tree";

const Search = types.model({
  startDate: types.string,
  endDate: types.string
});
