import { types, flow, getParent } from 'mobx-state-tree'
import { bool, shape } from 'prop-types'

import { MangaDetail, MangaDetailPropTypes } from './Manga'
import request from '../utils/request'

export const DetailPropTypes = shape({
  manga: MangaDetailPropTypes,
  isOpen: bool.isRequired
})

export const Detail = types
  .model({
    manga: types.maybeNull(MangaDetail),
    isOpen: types.optional(types.boolean, false)
  })
  .actions(self => ({
    toggleVisibilityStatus () {
      self.isOpen = !self.isOpen
    },
    setManga: flow(function * (id) {
      const appStore = getParent(self).app

      try {
        appStore.toggleLoadingStatus()

        const manga = yield request.getMangaAndPictures(id)
        self.manga = manga

        appStore.toggleLoadingStatus()
        self.toggleVisibilityStatus()
      } catch (error) {
        console.error(error)
        appStore.toggleLoadingStatus()
      }
    })
  }))
