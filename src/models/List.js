import { types, flow, applySnapshot } from 'mobx-state-tree'
import { arrayOf, shape } from 'prop-types'
import { Manga, MangaPropTypes } from './Manga'
import request from '../utils/request'

export const ListPropTypes = shape({ mangas: arrayOf(MangaPropTypes) })

export const List = types
  .model({
    mangas: types.optional(types.array(Manga), [])
  })
  .actions(self => ({
    afterCreate () {
      self.hyrdate()
    },
    hyrdate: flow(function * () {
      try {
        const mangas = yield request.getTopMangas()

        self.setMangas(mangas)
      } catch (error) {
        console.error(error)
      }
    }),
    setMangas (mangas) {
      applySnapshot(self.mangas, mangas)
    }
  }))

export default List
