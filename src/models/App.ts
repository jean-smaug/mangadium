import { types } from 'mobx-state-tree'

export interface AppInterface{
  isLoading: boolean,
  toggleLoadingStatus: () => void
}

export const App = types
  .model({
    isLoading: types.optional(types.boolean, false)
  })
  .actions(self => ({
    toggleLoadingStatus () {
      self.isLoading = !self.isLoading
    }
  }))
