import { types, flow, getParent } from 'mobx-state-tree'
import { bool } from 'prop-types'

import { MangaDetail, MangaDetailInterface } from './Manga'
import request from '../utils/request'

export interface DetailInterface {
  manga: MangaDetailInterface,
  isOpen: boolean,
  toggleVisibilityStatus: () => void,
  setManga: (id: number) => void
}

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
