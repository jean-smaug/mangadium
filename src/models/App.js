import { types } from 'mobx-state-tree'
import { bool, arrayOf, string, number } from 'prop-types'

export const AppPropTypes = {
  isLoading: bool.isRequired,
  errors: arrayOf(string),
  errorDuration: number
}

export const App = types
  .model({
    isLoading: types.optional(types.boolean, false),
    errors: types.optional(types.array(types.string), []),
    chance: types.optional(types.array(types.string), []),
    errorDuration: types.number
  })
  .actions(self => ({
    toggleLoadingStatus () {
      self.isLoading = !self.isLoading
    },
    pushError (error) {
      self.errors.push(error)
      setTimeout(() => {
        self.shiftError()
      }, self.errorDuration)
    },
    shiftError () {
      self.errors = self.errors.filter((_, key) => key !== 0)
    }
  }))
