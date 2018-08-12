import { types } from 'mobx-state-tree'
import { bool } from 'prop-types'

export const AppPropTypes = {
  isLoading: bool.isRequired
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
