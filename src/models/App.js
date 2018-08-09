import { types } from "mobx-state-tree";

const App = types
  .model({
    isLoading: types.optional(types.boolean, false)
  })
  .actions(self => ({
    toggleLoadingStatus() {
      self.isLoading = !self.isLoading;
    }
  }));

export default App;
