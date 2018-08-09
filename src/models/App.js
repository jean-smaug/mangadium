import { types } from "mobx-state-tree";

const App = types
  .model({
    isLoading: types.optional(types.boolean, false)
  })
  .actions(self => ({
    toggleLoadingStatus() {
      console.log(self.isLoading);
      self.isLoading = !self.isLoading;
      console.log(self.isLoading);
    }
  }));

export default App;
